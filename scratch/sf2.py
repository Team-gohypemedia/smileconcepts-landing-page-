p = 'src/components/sections/AllOn4ScrollFeatures.tsx'
raw = open(p, encoding='utf-8', newline='').read()
crlf = '\r\n' in raw
s = raw.replace('\r\n', '\n')
a = s.index('      // Use one scroll position for both columns')
end_marker = '''      return () => {
        reveal?.kill();
      };'''
b = s.index(end_marker) + len(end_marker)
new = '''      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dx = reduced ? 0 : 24;
      const dy = reduced ? 0 : 12;
      const ty = reduced ? 0 : 20;
      const pick = <T,>(refs: (T | null)[], i: number) => refs[i] ?? undefined;

      // Pointer events and stacking follow the slide that is currently on screen
      let shownIndex = -1;
      const markActive = (progress: number) => {
        const idx = Math.max(0, Math.min(totalSlides - 1, Math.round(progress * totalTransitions)));
        if (idx === shownIndex) return;
        shownIndex = idx;
        slidesData.forEach((_, i) => {
          const wrapper = pick(visualWrapperRefs.current, i);
          const textEl = pick(textContentRefs.current, i);
          if (wrapper) wrapper.style.zIndex = i === idx ? "10" : "1";
          if (textEl) {
            textEl.style.zIndex = i === idx ? "10" : "1";
            textEl.style.pointerEvents = i === idx ? "auto" : "none";
          }
        });
      };

      // Start state: first slide shown, the rest hidden
      slidesData.forEach((_, i) => {
        const wrapper = pick(visualWrapperRefs.current, i);
        const photo = pick(photoFrameRefs.current, i);
        const textEl = pick(textContentRefs.current, i);
        if (wrapper) gsap.set(wrapper, { autoAlpha: i === 0 ? 1 : 0 });
        if (photo) gsap.set(photo, { x: 0, y: 0, scale: 1, opacity: 1 });
        if (textEl) gsap.set(textEl, { autoAlpha: i === 0 ? 1 : 0, y: 0 });
      });
      markActive(0);

      // One scrubbed timeline: every slide holds still for most of its step and
      // crossfades into the next while you scroll, so the page responds directly to
      // the scroll position with no snapping. Wheel events are never captured.
      const TRANSITION_START = 0.3;
      const TRANSITION_LENGTH = 0.4;
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalTransitions * Math.round(Math.max(480, window.innerHeight * 0.9))}`,
          pin: stage,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => markActive(self.progress),
          onRefresh: (self) => markActive(self.progress),
        },
      });

      for (let i = 0; i < totalTransitions; i++) {
        const at = i + TRANSITION_START;
        const fade = { duration: TRANSITION_LENGTH, ease: "power1.inOut" };
        const outWrapper = pick(visualWrapperRefs.current, i);
        const outPhoto = pick(photoFrameRefs.current, i);
        const outText = pick(textContentRefs.current, i);
        const inWrapper = pick(visualWrapperRefs.current, i + 1);
        const inPhoto = pick(photoFrameRefs.current, i + 1);
        const inText = pick(textContentRefs.current, i + 1);

        if (outWrapper) tl.to(outWrapper, { autoAlpha: 0, ...fade }, at);
        if (outPhoto) tl.to(outPhoto, { x: -dx, y: -dy, scale: reduced ? 1 : 0.965, ...fade }, at);
        if (outText) tl.to(outText, { autoAlpha: 0, y: -ty, ...fade }, at);
        if (inWrapper) tl.fromTo(inWrapper, { autoAlpha: 0 }, { autoAlpha: 1, ...fade }, at);
        if (inPhoto) tl.fromTo(inPhoto, { x: dx, y: dy, scale: reduced ? 1 : 0.965 }, { x: 0, y: 0, scale: 1, ...fade }, at);
        if (inText) tl.fromTo(inText, { autoAlpha: 0, y: ty }, { autoAlpha: 1, y: 0, ...fade }, at);
      }
      // Pad the timeline to a whole number of steps so the last slide also holds
      tl.to({}, { duration: 0.001 }, totalTransitions - 0.001);

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };'''
s = s[:a] + new + s[b:]
if crlf:
    s = s.replace('\n', '\r\n')
open(p, 'w', encoding='utf-8', newline='').write(s)
