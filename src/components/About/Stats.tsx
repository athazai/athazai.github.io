import React from 'react';
import { useIntersectionObserver } from '../../utils/animation';

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '200+', label: 'Projects Delivered' },
  { number: '50+', label: 'Team Members' },
  { number: '98%', label: 'Client Satisfaction' }
];

export default function Stats() {
  const [statsRef, isVisible] = useIntersectionObserver({
    threshold: 0.5
  });

  return (
    <div 
      ref={statsRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center transition-all duration-1000 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
          <div className="text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}