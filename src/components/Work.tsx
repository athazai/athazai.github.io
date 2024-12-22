import React from 'react';
import { useParallax } from '../utils/animations';

const projects = [
  {
    title: "GDG UPM Website",
    category: "GDG UPM",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "PPI UPM Website",
    category: "PPI UPM",
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Starspace",
    category: "Telkomsat",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80"
  }
];


export default function Work() {
  return (
    <section id='work' className="bg-black py-32">
      <div className="max-w-5xl mx-auto px-6">
        {projects.map((project, index) => {
          const [ref, offset] = useParallax(0.1);
          return (
            <div
              key={index}
              ref={ref}
              className="group relative h-[80vh] mb-32 last:mb-0 overflow-hidden cursor-pointer"
              style={{ transform: `translateY(${offset}px)` }}
            >
              <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
                <h3 className="text-6xl font-light text-white mb-4 transition-transform duration-500 group-hover:translate-y-2">
                  {project.title}
                </h3>
                <p className="text-xl text-white/70 transition-transform duration-500 group-hover:translate-y-2">
                  {project.category}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}