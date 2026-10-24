"use client";

import { useId, useState, type ReactNode } from "react";

export function DreamDisclosure({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="dm-disclosure" data-open={open}>
      <h3 className="dm-disclosure-heading">
        <button
          type="button"
          id={`${id}-trigger`}
          className="dm-disclosure-trigger"
          aria-expanded={open}
          aria-controls={`${id}-content`}
          onClick={() => setOpen((value) => !value)}
        >
          {title}
          <span className="dm-accordion-icon" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={`${id}-content`}
        className="dm-collapse"
        data-open={open}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="dm-collapse-inner">
          <div className="dm-disclosure-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
