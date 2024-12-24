import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send } from "lucide-react";

const HireMe = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="min-h-screen bg-[#cacfd2] relative overflow-hidden flex flex-col" id="hire">
      {/* Hire Me Text */}
      <div className="w-full px-6 pt-20">
        <h1 className="text-[15vw] font-bold text-black leading-none text-center">
          Hire Me
        </h1>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start py-32">
          {/* Left Side - Copyright */}
          <div className="mb-16 lg:mb-0">
            <p className="text-sm text-black">
              &copy; 2024 sadhin
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Middle - Message */}
          <div className="mb-16 lg:mb-0">
            <h2 className="text-xl font-medium mb-4 text-black">MESSAGE</h2>
            <a href="mailto:therealsadhin@gmail.com" className="text-xl text-black hover:underline block mb-6">
              therealsadhin@gmail.com
            </a>
            <a 
              href="https://t.me/therealmehedi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300"
            >
              <Send size={20} />
              Send a message
            </a>
          </div>

          {/* Right Side - Social */}
          <div>
            <h2 className="text-xl font-medium mb-4 text-black">SOCIAL</h2>
            <div className="space-y-2">
              <a href="https://linkedin.com/therealmehedi" target="_blank" rel="noopener noreferrer" className="block text-xl text-black hover:underline">LinkedIn</a>
              <a href="https://facebook.com/sadhin.mh" target="_blank" rel="noopener noreferrer" className="block text-xl text-black hover:underline">Facebook</a>
              <a href="https://instagram.com/therealmehedi" target="_blank" rel="noopener noreferrer" className="block text-xl text-black hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
