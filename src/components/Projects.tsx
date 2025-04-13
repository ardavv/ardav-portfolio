
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Heart, Wallet } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Proyek Terbaru</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="KangKeliling Project"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">KangKeliling</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-portfolio-purple/10 text-portfolio-darkPurple border-portfolio-purple">Featured</Badge>
                </div>
              </div>
              <CardDescription className="text-gray-600">Platform layanan keliling berbasis web</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                KangKeliling adalah platform yang menghubungkan masyarakat dengan pedagang keliling di sekitar mereka. 
                Aplikasi ini memungkinkan pengguna untuk memesan jasa atau produk dari pedagang keliling terdekat, 
                dan melacak kedatangan mereka secara real-time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Next.js</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Supabase</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">React</Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Tailwind CSS</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <Github size={18} />
                <span>Kode Sumber</span>
              </Button>
              <Button className="bg-portfolio-purple hover:bg-portfolio-darkPurple flex items-center gap-2">
                <ExternalLink size={18} />
                <span>Demo Live</span>
              </Button>
            </CardFooter>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold mb-4 gradient-text">KangKeliling</h3>
              <p className="text-gray-700 mb-6">
                Proyek KangKeliling merupakan solusi digital untuk mengatasi masalah aksesibilitas terhadap pedagang 
                keliling tradisional di era modern. Dengan memanfaatkan teknologi web terkini, proyek ini membawa layanan 
                pedagang keliling ke ujung jari pengguna.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-portfolio-darkPurple">Teknologi yang digunakan:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-2 text-gray-700">
                    <li>Next.js untuk frontend dan backend API</li>
                    <li>Supabase untuk manajemen database dan autentikasi</li>
                    <li>React untuk komponen UI yang reaktif</li>
                    <li>Geolokasi untuk pelacakan real-time</li>
                    <li>Tailwind CSS untuk styling yang responsif</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-darkPurple">Fitur Utama:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-2 text-gray-700">
                    <li>Pencarian pedagang berdasarkan lokasi</li>
                    <li>Sistem pemesanan real-time</li>
                    <li>Pelacakan lokasi pedagang</li>
                    <li>Sistem peringkat dan ulasan</li>
                    <li>Panel admin untuk pedagang</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nucare.jaksel.or.id Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center order-last lg:order-first">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Nucare.jaksel.or.id</h3>
              <p className="text-gray-700 mb-6">
                Nucare adalah platform filantropi digital yang mempermudah masyarakat untuk menyalurkan zakat, 
                infak, wakaf, dan sedekah untuk berbagai program sosial dan kemanusiaan. Platform ini juga 
                menjadi solusi cepat untuk penggalangan dana bencana.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-portfolio-darkPurple">Teknologi yang digunakan:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-2 text-gray-700">
                    <li>Next.js untuk frontend dan API routes</li>
                    <li>Supabase untuk database dan otentikasi</li>
                    <li>Midtrans sebagai payment gateway</li>
                    <li>Tailwind CSS untuk desain responsif</li>
                    <li>Server-side rendering untuk SEO</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-portfolio-darkPurple">Fitur Utama:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-2 text-gray-700">
                    <li>Pembayaran zakat, infak, wakaf online</li>
                    <li>Penggalangan dana untuk program khusus</li>
                    <li>Dashboard donatur</li>
                    <li>Laporan transparansi penggunaan dana</li>
                    <li>Kalkulasi zakat otomatis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-60 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Nucare Project"
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">Nucare.jaksel.or.id</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Charity</Badge>
                </div>
              </div>
              <CardDescription className="text-gray-600">Platform filantropi digital islami</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700">
                Nucare.jaksel.or.id adalah platform filantropi digital yang memudahkan masyarakat untuk menyalurkan zakat, 
                infak, wakaf, dan sedekah untuk program sosial dan kemanusiaan, termasuk bantuan untuk korban bencana.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Next.js</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Supabase</Badge>
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Midtrans</Badge>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Tailwind CSS</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <Github size={18} />
                <span>Kode Sumber</span>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
                <Heart size={18} />
                <span>Kunjungi</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
