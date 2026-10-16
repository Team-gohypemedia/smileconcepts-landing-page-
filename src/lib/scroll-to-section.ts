const SCROLL_GAP_PX = 12;

// Bottom edge of the fixed site header, so sections land just below it
const headerBottom = () => document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;

/**
 * Smooth-scroll so the section with `id` sits just below the fixed header.
 * Some sections change height while scrolled past (pinned / stacking animations),
 * so the target is re-measured after each scroll and corrected if it moved.
 */
export function scrollToSection(id: string, correctionsLeft = 2) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = headerBottom() + SCROLL_GAP_PX;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  const correct = () => {
    const drift = el.getBoundingClientRect().top - (headerBottom() + SCROLL_GAP_PX);
    if (correctionsLeft > 0 && Math.abs(drift) > 2) scrollToSection(id, correctionsLeft - 1);
  };
  if (window.__lenis) {
    window.__lenis.scrollTo(y, { duration: correctionsLeft === 2 ? 1.2 : 0.5, onComplete: correct });
  } else {
    window.scrollTo({ top: y, behavior: "smooth" });
    window.setTimeout(correct, 900);
  }
}
