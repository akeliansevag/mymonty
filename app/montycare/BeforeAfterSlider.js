"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { useAppContext } from '../AppContext';

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = "Before and after comparison",
  initial = 0.5, // 0..1
  height = 420,
  className = "",
}) {

  const { handleOpenModal } = useAppContext();
  const containerRef = useRef(null);
  const [pos, setPos] = useState(clamp01(initial));
  const [dragging, setDragging] = useState(false);

  const leftPct = useMemo(() => `${pos * 100}%`, [pos]);

  // clip BEFORE layer (show left side up to slider)
  const beforeClip = useMemo(() => {
    const right = (1 - pos) * 100;
    return `inset(0 ${right}% 0 0)`;
  }, [pos]);

  const moveToClientX = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    setPos(clamp01(x / rect.width));
  };

  const onPointerDown = (e) => {
    moveToClientX(e.clientX);
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    moveToClientX(e.clientX);
  };

  const stopDrag = () => setDragging(false);

  useEffect(() => {
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);
    return () => {
      window.removeEventListener("pointerup", stopDrag);
      window.removeEventListener("pointercancel", stopDrag);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none touch-none ${className}`}
      style={{ height }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      role="group"
      aria-label={alt}
    >
      <div className="container z-10 relative text-center max-md:mt-[50px] md:mt-[100px]">
        <h2 className="text-center text-white section-title">It’s time for you</h2>
        <button onClick={handleOpenModal} className="mm-button white mt-7">Download MyMonty</button>
      </div>
      {/* AFTER (base) */}
      <img
        src={afterSrc}
        alt={alt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* BEFORE (full width, clipped — no scaling) */}
      <img
        src={beforeSrc}
        alt={alt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        style={{
          clipPath: beforeClip,
          WebkitClipPath: beforeClip,
        }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] -translate-x-[1px] bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.15)] pointer-events-none"
        style={{ left: leftPct }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black/15 bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.15)] cursor-ew-resize pointer-events-none"
        style={{ left: leftPct }}
      >
        <span className="flex items-center gap-1.5">
          <ArrowLeft />
          <ArrowRight />
        </span>
      </div>
    </div>
  );
}

function clamp01(n) {
  return Math.max(0, Math.min(1, n));
}

function ArrowLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.5 6.5L9 12l5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.5 6.5L15 12l-5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}