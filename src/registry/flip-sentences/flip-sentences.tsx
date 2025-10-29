"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
export function FlipSentences({
  className,
  sentences,
}: {
  className?: string;
  sentences: string[];
}) {
  const [currentSentence, setCurrentSentence] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearExistingInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAnimation = () => {
    clearExistingInterval(); // ✅ ensures only one interval exists
    intervalRef.current = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 2500);
  };

  useEffect(() => {
    startAnimation();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        clearExistingInterval();
      } else {
        // delay restart slightly to avoid race conditions
        setTimeout(() => {
          setCurrentSentence((prev) => (prev + 1) % sentences.length);
          startAnimation();
        }, 100);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearExistingInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentences]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={currentSentence}
        className={cn(
          "font-mono text-sm text-balance text-muted-foreground select-none",
          className
        )}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        {sentences[currentSentence]}
      </motion.p>
    </AnimatePresence>
  );
}
