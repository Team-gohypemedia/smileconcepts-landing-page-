"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cite } from "@/components/ui/Cite";

const MARKER = /\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.016 } },
};

const unit = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 3 },
  show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.28, ease: "easeOut" as const } },
};

/**
 * Word-by-word blur-in for an answer. Mount it with a `key` that changes when the answer
 * opens so the reveal replays; in every other state the words are plain, fully visible text.
 * The words stay real text separated by ordinary spaces, so crawlers, copy/paste and
 * "inspect" read one normal sentence; citation markers like [1–3] stay clickable.
 */
export default function BlurReveal({ text, active, className, style }: {
  text: string;
  active: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const reduced = useReducedMotion();

  const pieces: { key: string; node: React.ReactNode }[] = [];
  let last = 0;
  const pushWords = (chunk: string, base: number) => {
    chunk.split(/(\s+)/).forEach((part, i) => {
      if (!part) return;
      if (/^\s+$/.test(part)) pieces.push({ key: `s${base}-${i}`, node: " " });
      else pieces.push({ key: `w${base}-${i}`, node: <motion.span variants={unit} style={{ display: "inline-block" }}>{part}</motion.span> });
    });
  };
  for (const m of text.matchAll(MARKER)) {
    const at = m.index ?? 0;
    pushWords(text.slice(last, at), last);
    pieces.push({ key: `c${at}`, node: <motion.span variants={unit} style={{ display: "inline-block" }}><Cite refs={m[1]} /></motion.span> });
    last = at + m[0].length;
  }
  pushWords(text.slice(last), last);

  return (
    <motion.p
      className={className}
      style={style}
      variants={container}
      // Closed or server-rendered: fully visible text. The blur only plays when `active` is true on mount
      initial={active && !reduced ? "hidden" : false}
      animate="show"
    >
      {pieces.map((p) => (
        <span key={p.key} style={{ display: "contents" }}>{p.node}</span>
      ))}
    </motion.p>
  );
}
