import React from 'react';
import Stats from './Stats';
import { useIntersectionObserver } from '../../utils/animation';

export default function About() {
  const [contentRef, isVisible] = useIntersectionObserver({
    threshold: 0.3
  });

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Crafting Digital
              <br />
              Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We are more than just a studio. We are innovators, dreamers, and creators
              who push the boundaries of digital experiences.
            </p>
            <button className="text-lg font-semibold bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
              alt="Our team"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}