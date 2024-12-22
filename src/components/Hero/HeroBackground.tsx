import React from 'react';
import { useParallax } from '../../utils/animation';

export default function HeroBackground() {
  const scrollOffset = useParallax();
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="w-full h-full bg-gradient-to-b from-blue-900 to-black opacity-70"
        style={{
          transform: `translateY(${scrollOffset * 0.5}px)`,
        }}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{
          transform: `scale(${1 + scrollOffset * 0.001})`,
        }}
      >
        <source src="https://www.apple.com/105/media/us/mac-pro/2019/466b43b2-6ca4-4c5a-8518-64a7b31714a2/anim/hero/large.mp4" type="video/mp4" />
      </video>
    </div>
  );
}