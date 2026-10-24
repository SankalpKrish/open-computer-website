"use client";
import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { DEFAULT_SITE_STYLE, isSiteStyle, STYLE_STORAGE_KEY, type SiteStyle } from "@/lib/site-styles";
const STYLE_EVENT = "open-computer-style-change";
let sessionStyle: SiteStyle = DEFAULT_SITE_STYLE;
function getStyle(): SiteStyle {
  const query = new URLSearchParams(window.location.search).get("style");
  if (isSiteStyle(query)) return query;
  try { const stored = window.localStorage.getItem(STYLE_STORAGE_KEY); if (isSiteStyle(stored)) return stored; } catch { /* Session fallback. */ }
  return sessionStyle;
}
function subscribe(callback: () => void) {
  window.addEventListener(STYLE_EVENT, callback); window.addEventListener("popstate", callback); window.addEventListener("storage", callback);
  return () => { window.removeEventListener(STYLE_EVENT, callback); window.removeEventListener("popstate", callback); window.removeEventListener("storage", callback); };
}
function setStyle(style: SiteStyle) {
  sessionStyle = style;
  try { window.localStorage.setItem(STYLE_STORAGE_KEY, style); } catch { /* Optional persistence. */ }
  const url = new URL(window.location.href); url.searchParams.set("style", style);
  window.history.replaceState(window.history.state, "", url); window.dispatchEvent(new Event(STYLE_EVENT));
}
const StyleContext = createContext<{ style: SiteStyle; setStyle: (style: SiteStyle) => void }>({ style: DEFAULT_SITE_STYLE, setStyle });
export function StyleProvider({ children }: { children: ReactNode }) {
  const style = useSyncExternalStore(subscribe, getStyle, () => DEFAULT_SITE_STYLE);
  useEffect(() => { document.documentElement.dataset.siteStyle = style; sessionStyle = style; try { window.localStorage.setItem(STYLE_STORAGE_KEY, style); } catch { /* Optional persistence. */ } }, [style]);
  return <StyleContext.Provider value={{ style, setStyle }}>{children}</StyleContext.Provider>;
}
export function useSiteStyle() { return useContext(StyleContext); }
