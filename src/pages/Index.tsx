import React from "react";
import Navbar from "../components/Navbar";
import SplineSection from "../components/SplineSection";
import FloatingImage from "../components/FloatingImage";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";
import { ArrowRight, Waves } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-[40%] bg-primary"></div>
          <div className="h-[60%] bg-secondary dark:bg-[#f3f3f3]"></div>
        </div>
        
        <div className="relative">
          <Navbar />
          
          <main className="pt-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                ref={textRef}
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white flex items-center gap-2">
                    Hi, I'm sadhin <Waves className="w-8 h-8 animate-bounce" />
                  </h1>
                  <div className="flex items-center gap-2 text-2xl md:text-4xl text-white/90">
                    Designer <ArrowRight className="w-6 h-6" /> Developer
                  </div>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                  ALL-IN-ONE WEBSITE MAKER
                </h2>
              </motion.div>

              <motion.div 
                ref={imageRef}
                initial={{ opacity: 0, x: 100 }}
                animate={imageInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <FloatingImage />
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      <SplineSection />
      <Projects />
      <HireMe />
    </>
  );
};

export default Index;