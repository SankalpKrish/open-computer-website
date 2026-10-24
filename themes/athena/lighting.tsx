"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { fragment, vertex } from "./curtain-shader";

// Adapted from the supplied Athena reference. A single WebGL context renders
// a viewport-aligned field into just the visible destination canvases.
export function Lighting() {
  const pathname = usePathname();
  useEffect(() => {
    const source = document.createElement("canvas");
    const gl = source.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) return;
    const rendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = rendererInfo
      ? String(gl.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL))
      : "";
    // Software rasterizers make a decorative shader compete with page input.
    // Use the matching still image on those devices instead.
    if (/swiftshader|llvmpipe|softpipe|software/i.test(renderer)) {
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      return;
    }
    const compile = (type: number, code: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, code);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex),
      fs = compile(gl.FRAGMENT_SHADER, fragment);
    const program = gl.createProgram();
    if (!vs || !fs || !program) {
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const uniform = (name: string) => gl.getUniformLocation(program, name);
    for (const [name, value] of Object.entries({
      u_speed: 0.15,
      u_seed: 113,
      u_lensRadius: 0.58,
      u_lensScale: 10,
      u_lensSpacingX: 1.21,
      u_lensSpacingY: 0.01,
      u_dispersionStrength: 0,
      u_ephemeralAmp: 0,
      u_edgeDisp: 0.6,
    }))
      gl.uniform1f(uniform(name), value);
    gl.uniform1i(uniform("u_colors_length"), 3);
    const timeUniform = uniform("u_time"),
      resolution = uniform("u_resolution"),
      colors = uniform("u_colors[0]");
    const targets = [
      ...document.querySelectorAll<HTMLElement>(
        ".athena-site [data-athena-light]",
      ),
    ].map((el) => {
      const canvas = document.createElement("canvas");
      canvas.setAttribute("aria-hidden", "true");
      canvas.className = "at-light-canvas";
      const ctx = canvas.getContext("2d", { alpha: false });
      el.append(canvas);
      return {
        el,
        canvas,
        ctx,
        silver: el.dataset.athenaLight === "silver",
        rect: el.getBoundingClientRect(),
      };
    });
    let visible = targets,
      dirty = true,
      raf = 0,
      lastPaint = 0,
      clock = 0,
      stopped = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    function measure() {
      dirty = false;
      const w = window.innerWidth,
        h = window.innerHeight;
      // The soft light field needs fewer pixels than text. Keep HTML/vector
      // content at device resolution while bounding decorative GPU work.
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        1.25,
        Math.sqrt(1400000 / (w * h)),
      );
      const pw = Math.round(w * dpr),
        ph = Math.round(h * dpr);
      if (source.width !== pw || source.height !== ph) {
        source.width = pw;
        source.height = ph;
        gl!.viewport(0, 0, pw, ph);
        gl!.uniform2f(resolution, pw, ph);
      }
      visible = targets.filter((item) => {
        const rect = item.el.getBoundingClientRect();
        item.rect = rect;
        const active =
          rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < h;
        if (!active) {
          item.canvas.width = 1;
          item.canvas.height = 1;
          return false;
        }
        if (item.canvas.width !== pw || item.canvas.height !== ph) {
          item.canvas.width = pw;
          item.canvas.height = ph;
        }
        Object.assign(item.canvas.style, {
          left: `${-rect.left}px`,
          top: `${-rect.top}px`,
          width: `${w}px`,
          height: `${h}px`,
        });
        return true;
      });
    }
    function paint(now: number) {
      raf = 0;
      if (stopped || document.hidden) return;
      if (dirty) measure();
      if (!visible.length) {
        lastPaint = 0;
        return;
      }
      if (lastPaint && now - lastPaint < 48 && !reduced.matches) {
        raf = requestAnimationFrame(paint);
        return;
      }
      if (lastPaint && !reduced.matches)
        clock += Math.min((now - lastPaint) / 1000, 0.1);
      lastPaint = now;
      gl!.uniform1f(timeUniform, clock);
      for (const silver of [false, true]) {
        const group = visible.filter((item) => item.silver === silver);
        if (!group.length) continue;
        const color = silver
          ? [0.72, 0.76, 0.8]
          : [209 / 255, 140 / 255, 71 / 255];
        gl!.uniform4fv(
          colors,
          new Float32Array([0, 0, 0, 1, ...color, 1, 0, 0, 0, 1]),
        );
        gl!.drawArrays(gl!.TRIANGLES, 0, 3);
        for (const item of group) {
          item.ctx?.drawImage(source, 0, 0);
          item.el.dataset.lightReady = "true";
        }
      }
      if (!reduced.matches) raf = requestAnimationFrame(paint);
    }
    function schedule() {
      dirty = true;
      if (!raf && !document.hidden && !stopped)
        raf = requestAnimationFrame(paint);
    }
    function visibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
        lastPaint = 0;
      } else schedule();
    }
    function motionChange() {
      lastPaint = 0;
      schedule();
    }
    const intersection = new IntersectionObserver(schedule),
      resize = new ResizeObserver(schedule);
    for (const item of targets) {
      intersection.observe(item.el);
      resize.observe(item.el);
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", motionChange);
    schedule();
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      intersection.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", motionChange);
      for (const item of targets) {
        item.canvas.remove();
        delete item.el.dataset.lightReady;
      }
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [pathname]);
  return null;
}
