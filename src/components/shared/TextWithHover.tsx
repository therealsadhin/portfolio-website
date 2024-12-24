import React, { useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface TextWithHoverProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  circleColor?: string;
  textColorOnHover?: string;
}

const TextWithHover = ({ 
  children, 
  delay = 0,
  className = "",
  circleColor = "black",
  textColorOnHover = "white"
}: TextWithHoverProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (textRef.current && circleRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Use transform instead of left/top for better performance
      circleRef.current.style.transform = `translate(${x - 75}px, ${y - 75}px) scale(1)`;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (circleRef.current) {
      circleRef.current.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
      circleRef.current.style.opacity = '1';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (circleRef.current) {
      circleRef.current.style.opacity = '0';
      circleRef.current.style.transform = 'translate(0, 0) scale(0)';
    }
  }, []);

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block pointer-events-auto group/item"
    >
      <span 
        className={`relative z-10 transition-all duration-300 group-hover/item:text-${textColorOnHover} ${className}`}
        style={{ willChange: 'transform' }}
      >
        {children}
      </span>
      <span 
        ref={circleRef}
        className={`absolute w-[150px] h-[150px] opacity-0 rounded-full pointer-events-none`}
        style={{ 
          backgroundColor: circleColor,
          willChange: 'transform',
          transform: 'translate(0, 0) scale(0)',
        }}
      />
    </motion.div>
  );
};

export default TextWithHover;
