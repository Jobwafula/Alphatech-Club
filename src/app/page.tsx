// app/page.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className="">
      <Navbar />
      {/* Hero Section */}
      <section className="hero bg-cover bg-center h-screen text-white" style={{backgroundImage:'url(/nairobi-garage.png)'}} >
      <Button className='bg-blue-600 right-8 absolute mt-2 border py-3 px-6 rounded font-bold'>Sign In</Button>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-6xl font-bold mb-4">Welcome to Alphatech Club</h1>
          <p className="text-xl mb-8">Empowering the future of telecommunications and IT</p>
          {/* buttons */}
          <div className='flex gap-4'>
            
          <Link  href='/register' className='bg-transparent border py-2 px-6 rounded font-bold'>Join Us</Link>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
            Learn More
          </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          Alphatech Club is dedicated to fostering knowledge and innovation in the fields of telecommunications and IT. We provide a platform for students to learn, collaborate, and grow together.
        </p>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Workshop Title</h3>
            <p className="text-gray-700">Description of the workshop and its benefits.</p>
            <p className="text-gray-700 mt-4">Date: YYYY-MM-DD</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Workshop Title</h3>
            <p className="text-gray-700">Description of the workshop and its benefits.</p>
            <p className="text-gray-700 mt-4">Date: YYYY-MM-DD</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-2xl font-bold mb-2">Workshop Title</h3>
            <p className="text-gray-700">Description of the workshop and its benefits.</p>
            <p className="text-gray-700 mt-4">Date: YYYY-MM-DD</p>
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Members Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-gray-700 italic mb-4">"Alphatech Club has been a game-changer for my career in IT."</p>
            <p className="text-gray-900 font-bold">- Member Name</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-gray-700 italic mb-4">"The workshops and resources provided by the club are top-notch."</p>
            <p className="text-gray-900 font-bold">- Member Name</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <p className="text-gray-700 italic mb-4">"Being part of this community has opened up many opportunities for me."</p>
            <p className="text-gray-900 font-bold">- Member Name</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-6 rounded shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 border rounded" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 border rounded" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" className="w-full p-3 border rounded" placeholder="Your Message" rows={5}></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
