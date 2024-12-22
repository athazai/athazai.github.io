import { useEffect, useState, useRef } from 'react';

export const useSmoothCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const target = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => (
      start + (end - start) * factor
    );

    let frame: number;
    const animate = () => {
      setCursor(prev => ({
        x: lerp(prev.x, target.current.x, 0.15),
        y: lerp(prev.y, target.current.y, 0.15),
        visible: true
      }));
      frame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({ ...prev, visible: false }));
    };

    const handleMouseEnter = () => {
      setCursor(prev => ({ ...prev, visible: true }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(frame);
    };
  }, []);

  return [cursor, cursorRef] as const;
};

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
};

export const useSmoothScroll = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const element = document.querySelector(href);
    if (!element) return;
    
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return handleClick;
};

export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      setOffset((rect.top + scrolled - scrolled) * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset] as const;
};