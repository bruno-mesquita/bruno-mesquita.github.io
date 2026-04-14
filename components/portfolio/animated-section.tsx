'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

export function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible
    ? direction === 'left'
      ? 'animate-slide-in-left'
      : direction === 'right'
        ? 'animate-slide-in-right'
        : 'animate-fade-in-up'
    : 'opacity-0';

  return (
    <section
      ref={ref}
      id={id}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms`, animationDuration: '0.7s' }}
    >
      {children}
    </section>
  );
}

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedItem({
  children,
  className = '',
  delay = 0,
}: AnimatedItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3, rootMargin: '0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms`, animationDuration: '0.7s' }}
    >
      {children}
    </div>
  );
}
