import React from 'react';
import { useIntersectionObserver } from '../../utils/animation';
import { ArrowRight } from 'lucide-react';

export default function HeroContent() {
  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '-100px',
  });

  return (
    <div className="relative z-10 text-white">
      <h1 
        ref={titleRef}
        className={`text-6xl md:text-8xl font-bold mb-8 transition-all duration-1000 transform
          ${isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        Create Beyond
        <br />
        Imagination
      </h1>
      <p className="text-xl md:text-2xl mb-12 max-w-2xl">
        We craft digital experiences that push the boundaries of what's possible.
      </p>
      <button className="group flex items-center space-x-2 text-lg font-semibold bg-white/10 backdrop-blur-md px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300">
        <span>Explore Our Work</span>
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}