
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted!");
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={20} />, 
      link: "https://linkedin.com/in/yourusername", 
      color: "bg-blue-600" 
    },
    { 
      name: "GitHub", 
      icon: <Github size={20} />, 
      link: "https://github.com/yourusername", 
      color: "bg-gray-800" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={20} />, 
      link: "https://instagram.com/yourusername", 
      color: "bg-pink-600" 
    },
    { 
      name: "Email", 
      icon: <Mail size={20} />, 
      link: "mailto:youremail@example.com", 
      color: "bg-red-500" 
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Hubungi Saya</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-portfolio-darkPurple">Tertarik untuk Berkolaborasi?</h3>
            <p className="text-gray-700 mb-8">
              Jika Anda tertarik untuk berkolaborasi dalam proyek, memiliki pertanyaan, atau ingin berdiskusi, 
              jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk peluang dan koneksi baru!
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3 text-portfolio-darkPurple">Media Sosial</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-2 rounded-full hover:opacity-90 transition-opacity`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-portfolio-darkPurple">Email</h4>
                <a 
                  href="mailto:ardav@example.com" 
                  className="text-portfolio-purple hover:underline"
                >
                  ardav@example.com
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-portfolio-darkPurple">Lokasi</h4>
                <p className="text-gray-700">Indonesia</p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">Nama</label>
                <Input id="name" placeholder="Masukkan nama Anda" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">Email</label>
                <Input id="email" type="email" placeholder="Masukkan email Anda" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">Pesan</label>
                <Textarea id="message" placeholder="Ketik pesan Anda disini..." className="min-h-[150px]" />
              </div>
              
              <Button type="submit" className="w-full bg-portfolio-purple hover:bg-portfolio-darkPurple">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
