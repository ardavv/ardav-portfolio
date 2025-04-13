
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-portfolio-purple/5">
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <p className="text-portfolio-purple font-medium mb-2">Mahasiswa Informatika</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Halo, Saya <span className="gradient-text">Ardav</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Mahasiswa semester 4 jurusan Informatika Fakultas Ilmu Komputer, dengan pengalaman di React, Next.js, dan Supabase.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-purple hover:bg-portfolio-darkPurple">
                <a href="#projects">Lihat Proyek</a>
              </Button>
              <Button variant="outline" className="border-portfolio-purple text-portfolio-darkPurple hover:bg-portfolio-purple/10">
                <a href="#contact">Hubungi Saya</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-portfolio-purple/20 blur-2xl transform -translate-x-2 translate-y-2"></div>
              <div className="rounded-full overflow-hidden border-4 border-white shadow-xl h-64 w-64 md:h-80 md:w-80 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Ardav"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="text-portfolio-purple" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
