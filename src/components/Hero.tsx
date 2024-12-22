import React from 'react';
import { useMousePosition } from '../utils/animations';

export default function Hero() {
  const mousePosition = useMousePosition();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center gap-[32px]">
            <h2 className="text-5xl font-medium">
              Always create
              <br />
              meaningful
              <br />
              experiences.
            </h2>
            <p className="text-gray-400 font-light">
              Through minimalism and attention to detail, crafting digital experiences
              will leave lasting impressions.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute bg-white mix-blend-difference group-hover:opacity-0 transition-opacity duration-500" />
            <img
              src="/src/assets/atha-waves-black.gif"
              alt="me"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}