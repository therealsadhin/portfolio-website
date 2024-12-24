import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">sadhin-web</a>
        
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative w-8 h-8 flex items-center justify-center ${
              isMenuOpen ? 'z-50' : ''
            }`}
            aria-label="Toggle menu"
          >
            <div
              className={`hamburger-menu relative w-6 h-5 cursor-pointer ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <span className="absolute w-full h-0.5 bg-white transition-all duration-300 top-0"></span>
              <span className="absolute w-full h-0.5 bg-white transition-all duration-300 top-1/2 -translate-y-1/2"></span>
              <span className="absolute w-full h-0.5 bg-white transition-all duration-300 bottom-0"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/95 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-12 group/menu">
            <a 
              href="#hire" 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl text-white relative group/item transition-all duration-500 ease-out group-hover/menu:translate-y-0"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover/item:scale-110">Hire me</span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary scale-0 rounded-full group-hover/item:scale-100 transition-all duration-500 ease-out -z-0"></span>
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl text-white relative group/item transition-all duration-500 ease-out group-hover/menu:hover:translate-y-0 group-hover/menu:translate-y-16"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover/item:scale-110">Projects</span>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary scale-0 rounded-full group-hover/item:scale-100 transition-all duration-500 ease-out -z-0"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;