import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      y: 50,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top center",
      end: "bottom top",
      onUpdate: (self) => {
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            rotation: self.progress * 10,
            duration: 1,
          });
        }
      },
    });
  }, []);

  return (
    <div
      ref={imageRef}
      className="w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-white/10"
    >
      <img
        src="/lovable-uploads/63a9338a-2a0a-4dc1-9d5e-9c98c8c90516.png"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FloatingImage;