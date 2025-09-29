"use client";
import { useEffect } from "react";

export default function GlobalScrollHandler() {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      if (!target) return;

      const clickable = target.closest("[data-to]");
      if (!clickable) return;

      const scrollToId = clickable.getAttribute("data-to");
      if (!scrollToId) return;

      const elementToScroll = document.getElementById(scrollToId);
      if (elementToScroll) {
        elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}