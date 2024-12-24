import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  color: string;
  textColor?: string;
}

const ProjectCard = ({ title, description, link, color, textColor = "white" }: ProjectCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="flex items-center space-x-4 md:space-x-8 relative hover:scale-105 transition-transform duration-300 w-full px-4 md:px-0"
    >
      <div 
        className="p-6 md:p-12 lg:p-16 rounded-3xl transition-transform duration-500 w-full"
        style={{ backgroundColor: color }}
      >
        <div className="max-w-4xl space-y-4 md:space-y-8">
          <div className="flex items-center justify-between">
            <h3 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              style={{ color: textColor }}
            >
              {title}
            </h3>
          </div>
          <p 
            className="text-lg sm:text-xl md:text-2xl leading-relaxed"
            style={{ color: textColor }} 
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      title: "CONSISTENT FROM CONCEPT TO LAUNCH",
      description: "As both a designer and a developer, I bridge the gap between these two fields. This ensures your vision is realized exactly as you imagined it, without compromises or misunderstandings.",
      link: "#",
      color: "#FF5722", 
      textColor: "white"
    },
    {
      title: "BRINGING IDEAS TO LIFE",
      description: "From concept to deployment, I create seamless digital experiences that engage users and drive results.",
      link: "#",
      color: "#1A1A1A", 
      textColor: "white"
    },
    {
      title: "INNOVATIVE SOLUTIONS",
      description: "Leveraging cutting-edge technology to build scalable and efficient web applications that stand out.",
      link: "#",
      color: "#6B46C1", 
      textColor: "white"
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen bg-[#eaffca] relative overflow-hidden py-16 md:py-32 flex items-center" id="projects">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-6 md:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
