import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

const TextWithHover = ({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      className="relative group/item transition-all duration-500 ease-out group-hover/menu:hover:translate-y-0 group-hover/menu:-translate-y-16 pointer-events-auto"
    >
      <span className={`relative z-10 transition-transform duration-500 group-hover/item:scale-110 ${className}`}>
        {children}
      </span>
      <span 
        className="absolute w-[150px] h-[150px] bg-black scale-0 rounded-full group-hover/item:scale-100 transition-all duration-500 pointer-events-none"
        style={{
          left: `${mousePosition.x - 75}px`,
          top: `${mousePosition.y - 75}px`,
        }}
      />
    </motion.div>
  );
};

const SplineSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black" id="spline-section">
      {/* Spline container with full interaction */}
      <div className="absolute inset-0 w-full h-full">
        {isLoaded && (
          <spline-viewer 
            url="https://prod.spline.design/WOlafSBZCnSmsUvt/scene.splinecode"
            className="w-full h-full"
            events-target="global"
            loading-anim
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>

      {/* Content overlay with pointer events only on interactive elements */}
      <div className="relative h-full pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col items-start space-y-8">
            <div className="flex flex-col items-start gap-12 group/menu">
              <TextWithHover className="text-5xl md:text-7xl font-bold text-[#1A1A1A] group-hover/item:text-white">
                i am sadhin
              </TextWithHover>

              <TextWithHover 
                delay={0.2}
                className="text-3xl md:text-5xl font-light text-[#262626] group-hover/item:text-white"
              >
                who loves to build Web App
              </TextWithHover>

              <TextWithHover
                delay={0.4}
                className="text-3xl md:text-5xl font-light text-[#262626] group-hover/item:text-white"
              >
                build your business
              </TextWithHover>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative pointer-events-auto"
              >
                <a
                  href="#hire"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#hire')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-transparent overflow-hidden rounded-full hover:scale-110 transition-all duration-300"
                >
                  <span className="absolute w-full h-full bg-gradient-to-r from-[#000000] via-[#1A1A1A] to-[#333333] rounded-full group-hover:scale-110 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10">Hire Me Now</span>
                </a>
              </motion.div>

              <TextWithHover
                delay={0.8}
                className="text-2xl md:text-3xl font-bold text-[#404040] group-hover/item:text-white flex items-center gap-2 font-serif tracking-wide"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                Im Available
              </TextWithHover>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplineSection;
