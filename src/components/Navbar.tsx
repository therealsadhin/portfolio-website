import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Mehedi-Web-Dev</div>
        
        <div className="flex items-center gap-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-white" />
            )}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex items-center justify-center"
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
        <div className="h-full flex flex-col items-center justify-center gap-8 text-white text-3xl">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#hire" className="hover:text-primary transition-colors">Hire me</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;