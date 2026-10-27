"use client";

import type { MouseEvent, ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

const MARKER = /\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g;

// "1–3" → [1, 2, 3]; "4,5" → [4, 5]. Only the numbers written in the marker are linked.
const parseNumbers = (raw: string): { n: number; sep: string }[] => {
  const parts = raw.split(/(\s*[,–-]\s*)/);
  const out: { n: number; sep: string }[] = [];
  for (let i = 0; i < parts.length; i += 2) out.push({ n: Number(parts[i]), sep: parts[i + 1] ?? "" });
  return out;
};

const goToReference = (e: MouseEvent<HTMLAnchorElement>, n: number) => {
  const id = `ref-${n}`;
  e.preventDefault();
  let target = document.getElementById(id);
  if (!target) return;
  // On phones the later sources are collapsed; expand them first so the target is visible
  if (target.offsetParent === null) {
    document.querySelector<HTMLButtonElement>(".sc-refs-toggle")?.click();
  }
  window.setTimeout(() => {
    target = document.getElementById(id);
    if (!target) return;
    scrollToSection(id);
    target.querySelector("a")?.animate(
      [{ boxShadow: "0 0 0 3px rgba(232,99,55,0.55)" }, { boxShadow: "0 0 0 0 rgba(232,99,55,0)" }],
      { duration: 1800, delay: 700, easing: "ease-out" }
    );
  }, 60);
};

/** A "[1–3]" style marker whose numbers jump to the matching entries in the references section. */
export function Cite({ refs }: { refs: string }) {
  const nums = parseNumbers(refs);
  return (
    <span className="sc-cite" style={{ whiteSpace: "nowrap" }}>
      [
      {nums.map(({ n, sep }, i) => (
        <span key={i}>
          <a
            href={`#ref-${n}`}
            onClick={(e) => goToReference(e, n)}
            aria-label={`Go to reference ${n}`}
            style={{ color: "#E86337", fontWeight: 600, textDecoration: "none" }}
          >
            {n}
          </a>
          {sep}
        </span>
      ))}
      ]
    </span>
  );
}

/** Turns every "[n]" marker inside a plain string into a clickable <Cite />. */
export function withCitations(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(MARKER)) {
    const at = m.index ?? 0;
    if (at > last) nodes.push(text.slice(last, at));
    nodes.push(<Cite key={at} refs={m[1]} />);
    last = at + m[0].length;
  }
  if (last === 0) return text;
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
