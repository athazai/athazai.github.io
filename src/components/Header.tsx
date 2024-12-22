import React from "react";
import { useSmoothScroll } from "../utils/animations";

export default function Header() {
  const handleScroll = useSmoothScroll();

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <nav className="max-w-5xl mx-auto px-6 py-8">
        <ul className="flex justify-between space-x-12 text-white">
          <a href="#" className="text-white text-[20px] font-bold">a.</a>
          <div className="flex gap-[18px] items-center">
            {["work", "experiences", "contact"].map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item}`}
                  onClick={handleScroll}
                  className="text-sm uppercase tracking-wider"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}
