import React from "react";
import { motion } from "framer-motion";

const FloatingImage = () => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-2 bg-gradient-to-r from-primary/20 to-primary/40"
    >
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-black">
        <img
          src="/Floating_image.jpg"
          alt="Floating Image"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export default FloatingImage;