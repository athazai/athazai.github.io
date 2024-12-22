import React from 'react';
import { useSmoothCursor } from '../utils/animations';

export default function Cursor() {
  const [cursor, cursorRef] = useSmoothCursor();

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${
        cursor.visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div className="w-4 h-4 bg-white rounded-full" />
    </div>
  );
}