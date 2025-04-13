
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ardav</h3>
            <p className="text-gray-300 mb-6">
              Mahasiswa Informatika dengan keahlian dalam pengembangan web modern menggunakan React, Next.js, 
              dan Supabase.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/yourusername" className="hover:text-portfolio-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/yourusername" className="hover:text-portfolio-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="https://instagram.com/yourusername" className="hover:text-portfolio-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:youremail@example.com" className="hover:text-portfolio-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-portfolio-purple transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-portfolio-purple transition-colors">Tentang</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-portfolio-purple transition-colors">Proyek</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-portfolio-purple transition-colors">Keahlian</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-portfolio-purple transition-colors">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <p className="text-gray-300 mb-2">ardav@example.com</p>
            <p className="text-gray-300">Indonesia</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Ardav. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
