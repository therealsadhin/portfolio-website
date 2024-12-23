import React from "react";
import Navbar from "../components/Navbar";
import FloatingImage from "../components/FloatingImage";
import { ArrowRight, Wave } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary overflow-hidden">
      <Navbar />
      
      <main className="pt-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white flex items-center gap-2">
                Hi, I'm Mika <Wave className="w-8 h-8 animate-bounce" />
              </h1>
              <div className="flex items-center gap-2 text-2xl md:text-4xl text-white/90">
                Designer <ArrowRight className="w-6 h-6" /> Developer
              </div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              ALL-IN-ONE WEBSITE MAKER
            </h2>
          </div>

          <div className="flex justify-center lg:justify-end">
            <FloatingImage />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;