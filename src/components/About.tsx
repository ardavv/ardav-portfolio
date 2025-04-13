
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Tentang Saya</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-portfolio-purple/10 p-3 rounded-full mb-4">
                <GraduationCap size={24} className="text-portfolio-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pendidikan</h3>
              <p className="text-gray-600">
                Mahasiswa semester 4 jurusan Informatika di Fakultas Ilmu Komputer, angkatan 2023
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-portfolio-purple/10 p-3 rounded-full mb-4">
                <Code size={24} className="text-portfolio-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pengalaman</h3>
              <p className="text-gray-600">
                Berpengalaman dalam pengembangan aplikasi web dengan React, Next.js, dan Supabase
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-portfolio-purple/10 p-3 rounded-full mb-4">
                <BookOpen size={24} className="text-portfolio-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Minat</h3>
              <p className="text-gray-600">
                Pengembangan web, desain UI/UX, dan teknologi cloud
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-portfolio-purple/5 rounded-xl p-6 md:p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-darkPurple">Latar Belakang</h3>
            <p className="text-gray-700 mb-4">
              Saya adalah mahasiswa semester 4 jurusan Informatika di Fakultas Ilmu Komputer angkatan 2023. Saya memiliki 
              minat yang kuat dalam pengembangan aplikasi web dan teknologi modern.
            </p>
            <p className="text-gray-700 mb-4">
              Selama perkuliahan, saya telah mempelajari dasar-dasar pemrograman, struktur data, algoritma, dan 
              pengembangan perangkat lunak. Di luar kelas, saya memperdalam pemahaman saya tentang React, Next.js, 
              dan Supabase melalui pembelajaran mandiri dan pengerjaan proyek-proyek.
            </p>
            <p className="text-gray-700">
              Saya selalu mencari peluang untuk belajar teknologi baru dan menerapkan pengetahuan saya dalam proyek-proyek
              nyata. Tujuan saya adalah menjadi seorang pengembang web yang kompeten dan kreatif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
