// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-4">
          <h3 className="text-lg font-bold">Connect with Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mb-4 text-center">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>Email: info@alphatechclub.com</p>
          <p>Phone: +254 741699821</p>
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Alphatech Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
