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
        src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-1/464230662_552084477574816_1813731539948852348_n.jpg?stp=c0.0.638.638a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=R1D0RwQbPUUQ7kNvgG9_m6h&_nc_zt=24&_nc_ht=scontent.fspd3-1.fna&_nc_gid=Aqt_UONuE8swxPl7XVorbD6&oh=00_AYD2McLobzxlhJKplIaq7ww7P5Eqhd2SLLDu4nNY3hmL2Q&oe=676F1BEE"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default FloatingImage;