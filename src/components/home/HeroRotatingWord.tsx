'use client';

import React, { useState, useEffect } from 'react';

interface WordConfig {
  word: string;
  fillHex: string;
  className: string;
}

// Real Google Blue, Yellow, Green, Red with dark ink text
const words: WordConfig[] = [
  {
    word: 'Build',
    fillHex: '#4285F4',
    className: 'bg-[#4285F4] text-[#111215] border-[#2b72e8]',
  },
  {
    word: 'Learn',
    fillHex: '#FBBC04',
    className: 'bg-[#FBBC04] text-[#111215] border-[#e0a600]',
  },
  {
    word: 'Ship',
    fillHex: '#34A853',
    className: 'bg-[#34A853] text-[#111215] border-[#298d44]',
  },
  {
    word: 'Lead',
    fillHex: '#EA4335',
    className: 'bg-[#EA4335] text-[#0A0A0A] border-[#d33426]',
  },
];

export function HeroRotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    // Stack all rotating words in one CSS grid cell (col-start-1 row-start-1).
    // The slot width naturally equals the widest word with no hardcoded fixed width and no blank gap after short words.
    <span
      className="inline-grid grid-cols-1 grid-rows-1 align-baseline select-none mx-[0.1em]"
      aria-label={`${words[index].word} together`}
    >
      {words.map((w, idx) => {
        const isActive = idx === index;
        return (
          <span
            key={w.word}
            className={`col-start-1 row-start-1 inline-flex items-center justify-center w-full px-[0.25em] py-[0.05em] rounded-[0.25em] border-[0.035em] font-medium tracking-tight transition-opacity duration-200 select-none align-baseline ${
              w.className
            } ${
              isActive
                ? 'opacity-100 z-10'
                : 'opacity-0 pointer-events-none invisible'
            }`}
            aria-hidden={!isActive}
          >
            <span className="block text-center">{w.word}</span>
          </span>
        );
      })}
    </span>
  );
}