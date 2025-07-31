"use client"
import { useEffect, useState } from "react";

export default function TableOfContent({headings}){
    const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = null;
      for (const heading of headings) {
        const el = document.getElementById(heading.text);
        if (el) {
          const { top } = el.getBoundingClientRect();
          
        
          if (top <= 300) {
            current = heading.text;
          }
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  return (
    <nav className="hidden lg:block fixed top-20 left-8 text-sm text-[var(--neutral-800)]">
    <p>On this page</p>
      <ul className="relative space-y-2 border-l-1 border-neutral-700 mt-2">
        {headings.map((heading, index) => {
          const isActive = heading.text === activeId;
          return (
            <li key={index} className={`${isActive ? "border-l-2" : ""}  relative  pl-4 indent-${Number(heading.level) * 3} border-[var(--blue-800)]`}>
              <a
                href={`#${heading.text}`}
                className={`block transition-colors ${
                  isActive ? ' font-semibold' : 'hover:text-white'
                }`}
              >
                {heading.text}
              </a>
              {isActive && (
                <span className="absolute -left-4 top-1 h-2 w-2 rounded-full bg-white transition-all" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}