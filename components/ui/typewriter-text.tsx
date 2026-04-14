'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
}

export function TypewriterText({
  text,
  delay = 0,
  speed = 50,
  className = '',
  showCursor = true,
  cursorClassName = '',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursorChar, setShowCursorChar] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setShowCursorChar(false);

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setShowCursorChar(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className={`inline ${className}`}>
      <span>{displayedText}</span>
      {showCursor && (
        <span
          className={`inline-block ml-0.5 animate-pulse cursor-blink ${cursorClassName}`}
        >
          |
        </span>
      )}
    </span>
  );
}
