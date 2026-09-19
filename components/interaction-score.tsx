"use client";

import { useEffect, useState } from "react";

export function InteractionScore() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let currentScore = 0;
    let ticking = false;

    const handleInteraction = (amount: number) => {
      currentScore += amount;
      setScore(currentScore);
    };

    const onClick = () => handleInteraction(10);
    const onMouseOver = () => handleInteraction(1);
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleInteraction(1);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("click", onClick);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex h-11 items-center justify-center rounded-md border border-default bg-surface px-4 font-mono text-sm text-muted tabular-nums shadow-sm"
    >
      Score: {score}
    </div>
  );
}
