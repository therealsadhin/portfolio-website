import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Text3D = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="relative py-4"
    >
      <div className="text-3d-container">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="text-3d-layer"
            style={{
              transform: `translateZ(${index * -20}px) translateY(${index * -2}px) rotateX(${index * 2}deg)`,
              opacity: 1 - index * 0.15,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-32" id="experience">
      <style jsx global>{`
        .text-3d-container {
          position: relative;
          transform-style: preserve-3d;
          perspective: 1000px;
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: white;
          padding: 0 20px;
        }

        .text-3d-layer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          transform-style: preserve-3d;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .text-3d-container {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          <Text3D text="i am Mehedi" delay={0} />
          <Text3D text="who loves to build Web App" delay={0.2} />
          <Text3D text="build your business" delay={0.4} />
          <Text3D text="Hire Me Now" delay={0.6} />
          <Text3D text="Im Available" delay={0.8} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
