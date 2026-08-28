"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

/**
 * Cheap scroll-in reveal.
 *
 * One IntersectionObserver is shared by every Reveal on the page (instead of a
 * framer-motion instance per element), the transition itself is pure CSS on
 * `opacity` + `transform`, and each element is unobserved the moment it fires.
 * Nothing keeps running after the element has appeared.
 */

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window))
    return null;

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          sharedObserver?.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
  }
  return sharedObserver;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** stagger index — 60ms apart, capped so long lists never feel slow */
  index?: number;
  as?: ElementType;
  id?: string;
}

export default function Reveal({
  children,
  className = "",
  index = 0,
  as: Tag = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = getObserver();
    if (!observer) {
      node.classList.add("is-visible");
      return;
    }

    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  const delay = Math.min(index, 6) * 60;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
