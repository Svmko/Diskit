'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

// Reusable ProductCard component
const ProductCard = ({ product }: { product: Product }) => (
  <div className="p-4 border rounded">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
    <p className="mt-2 text-gray-500">${product.price.toFixed(2)}</p>
    <button className="mt-4 px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
      View Product
    </button>
  </div>
);

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const HomePage: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Head>
        <title>Diskit</title>
        <meta name="description" content="A place to find and buy disks while looking for your favorite courses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Bar */}
      <header className="w-full bg-black shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            className="relative w-8 h-8 focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div
              className={`absolute w-8 h-0.5 bg-white transition-transform duration-500 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
            ></div>
            <div
              className={`absolute w-8 h-0.5 bg-white transition-transform duration-500 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-2'}`}
            ></div>
            <div
              className={`absolute w-6 h-0.5 bg-white transition-opacity duration-490 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></div>
          </button>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">Account / Sign In</button>
          </div>
        </div>
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black border border-black rounded px-4 py-1">Shop</a></li>
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
              Find
            </button>
          </div>
          <div className="w-2/5"></div>
        </section>

        {/* Product Highlights */}
        <section className="grid w-full max-w-4xl grid-cols-1 gap-8 py-16 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
};

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: 'Minimalist Chair',
    price: 199.99,
    image: '/images/chair.jpg',
  },
  {
    id: 2,
    name: 'Modern Lamp',
    price: 89.99,
    image: '/images/lamp.jpg',
  },
  {
    id: 3,
    name: 'Sleek Desk',
    price: 299.99,
    image: '/images/desk.jpg',
  },
];

export default HomePage;
