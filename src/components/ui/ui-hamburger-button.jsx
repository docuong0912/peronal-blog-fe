'use client';
import { use, useEffect, useState } from 'react';

export default function HamburgerButton({ onClick, open }) {

  useEffect(() => {
    console.log(open)
  }, [open])

  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 flex flex-col items-center justify-center group bg-[var(--background)]"
      aria-label="Toggle Menu"
    >
      <span
        className={`block w-5 h-0.5 bg-[var(--foreground)] transform transition duration-300 ease-in-out ${
          open ? 'rotate-45 translate-y-1.5' : ''
        }`}
      ></span>
      <span
        className={`block w-5 h-0.5 bg-[var(--foreground)] my-1 transition duration-300 ease-in-out ${
          open ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`block w-5 h-0.5 bg-[var(--foreground)] transform transition duration-300 ease-in-out ${
          open ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      ></span>
    </button>
  );
}
