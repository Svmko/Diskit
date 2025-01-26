"use client";

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center justify-items-center gap-4">
        <button
          className="text-gray-600 hover:text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Shop</a></li>
            <li><a href="/locator" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Find Store</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Hero Section */}
        <section className="w-full max-w-4xl py-16 flex">
          <div className="w-3/5 pr-8 text-left">
            <h1 className="text-6xl font-bold">Lost a Disk?</h1>
            <p className="mt-2 text-lg text-gray-600">
              Use our finder system to see if your disk has been found, then claim it!
            </p>
            <button
              className="mt-8 px-10 py-2 text-black bg-white border border-black rounded transition-colors duration-300 hover:bg-black hover:text-white hover:border-white"
              onClick={() => window.location.href = '/locator'}
            >
              Find
            </button>
          </div>
          <div className="w-2/5"></div>
        </section>

        {/* Product Highlights */}
        {/* Add your product highlights here */}
      </main>
    </div>
  );
}