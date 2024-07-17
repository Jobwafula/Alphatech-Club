// components/Navbar.tsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Alphatech Club</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/#about" className="hover:text-gray-400">About</Link>
          <Link href="/members" className="hover:text-gray-400">Members</Link>
          <Link href="/payments" className="hover:text-gray-400">Payments</Link>
          <Link href="/workshops" className="hover:text-gray-400">Workshops</Link>
          <Link href="/#contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Home</Link>
            <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">About</Link>
            <Link href="/members" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Members</Link>
            <Link href="/payments" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Payments</Link>
            <Link href="/workshops" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Workshops</Link>
            <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
