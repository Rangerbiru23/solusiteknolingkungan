'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Users, 
  Target,
  Lightbulb,
  Shield,
  Globe,
  Truck,
  BarChart3,
  FileText,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Manajemen Transportasi",
      description: "Perencanaan dan pengelolaan sistem transportasi yang efisien dan berkelanjutan."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Analisis Lalu Lintas",
      description: "Studi komprehensif mengenai pola lalu lintas dan rekomendasi optimalisasi."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Keselamatan Transportasi",
      description: "Audit keselamatan dan implementasi standar keselamatan transportasi."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Dampak Lingkungan",
      description: "Analisis dan mitigasi dampak lingkungan dari proyek transportasi."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Perencanaan Strategis",
      description: "Pengembangan rencana jangka panjang untuk infrastruktur transportasi."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Inovasi Teknologi",
      description: "Implementasi solusi teknologi terkini dalam sistem transportasi."
    }
  ]

  const projects = [
    {
      title: "Sistem Transportasi Kota Bandung",
      description: "Perencanaan ulang sistem transportasi publik untuk mengurangi kemacetan 30%",
      category: "Urban Planning",
      status: "Completed"
    },
    {
      title: "Analisis Dampak Lalu Lintas Tol Cisumdawu",
      description: "Studi dampak lingkungan dan sosial pembangunan tol Cisumdawu",
      category: "Impact Assessment",
      status: "Completed"
    },
    {
      title: "Optimalisasi Logistik Pelabuhan",
      description: "Sistem manajemen logistik terintegrasi untuk pelabuhan utama Jawa Barat",
      category: "Logistics",
      status: "Ongoing"
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="PT SOLUSI TEKNO LINGKUNGAN" 
                className="w-10 h-10 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900">PT SOLUSI TEKNO LINGKUNGAN</h1>
                <p className="text-xs text-gray-600">Konsultansi Transportasi</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('beranda')} className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('tentang')} className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('layanan')} className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('kontak')} className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</button>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Konsultasi Gratis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('beranda')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Beranda</button>
              <button onClick={() => scrollToSection('tentang')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Tentang</button>
              <button onClick={() => scrollToSection('layanan')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Layanan</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Portfolio</button>
              <button onClick={() => scrollToSection('kontak')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Kontak</button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                Konsultan Transportasi Profesional
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  PT SOLUSI TEKNO LINGKUNGAN
                </span>
                <br />
                Solusi Transportasi Masa Depan
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kami adalah konsultan profesional yang berdedikasi untuk menyediakan solusi inovatif dalam bidang transportasi dengan pendekatan teknologi dan kelestarian lingkungan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3"
                  onClick={() => scrollToSection('kontak')}
                >
                  Mulai Konsultasi
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                  onClick={() => scrollToSection('layanan')}
                >
                  Lihat Layanan
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Kepuasan Klien</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <img 
                src="/logo.png" 
                alt="PT SOLUSI TEKNO LINGKUNGAN" 
                className="relative w-full h-auto max-w-md mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesional berpengalaman dalam konsultansi transportasi dengan komitmen terhadap keberlanjutan dan inovasi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Profesional Berpengalaman</h4>
                    <p className="text-gray-600">Tim konsultan dengan pengalaman lebih dari 10 tahun di bidang transportasi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Solusi Inovatif</h4>
                    <p className="text-gray-600">Pendekatan teknologi terkini untuk setiap permasalahan transportasi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ramah Lingkungan</h4>
                    <p className="text-gray-600">Komitmen terhadap keberlanjutan lingkungan dalam setiap solusi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hasil Terbukti</h4>
                    <p className="text-gray-600">Track record berhasil dalam 50+ proyek transportasi</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">Visi & Misi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">Visi</h4>
                  <p className="text-gray-700">
                    Menjadi konsultan transportasi terdepan di Indonesia yang mengintegrasikan teknologi, keberlanjutan, dan inovasi untuk menciptakan sistem transportasi yang efisien dan ramah lingkungan.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-green-600 mb-2">Misi</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Memberikan solusi transportasi yang inovatif dan berkelanjutan</li>
                    <li>• Mengintegrasikan teknologi terkini dalam perencanaan transportasi</li>
                    <li>• Berkontribusi pada pengembangan infrastruktur transportasi nasional</li>
                    <li>• Memberikan nilai tambah maksimal bagi stakeholder</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk setiap kebutuhan konsultansi transportasi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Proyek</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya nyata yang telah memberikan dampak positif bagi masyarakat
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white opacity-50" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {project.category}
                    </Badge>
                    <Badge className={project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap memberikan solusi transportasi terbaik untuk Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 mb-4">Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Cimanuk No. 6, Gedung Office and Beyond Unit H<br />
                        Kel. Citarum, Kec. Bandung Wetan<br />
                        Kota Bandung, Provinsi Jawa Barat
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">085285703526</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@solusiteknolingkungan.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 17:00<br />
                        Sabtu: 08:00 - 12:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 mb-4">Form Konsultasi</CardTitle>
                  <CardDescription>
                    Kirimkan pertanyaan atau permintaan konsultasi Anda
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Perusahaan
                      </label>
                      <Input placeholder="PT Example" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telepon
                    </label>
                    <Input placeholder="08123456789" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Pilih Layanan</option>
                      <option>Manajemen Transportasi</option>
                      <option>Analisis Lalu Lintas</option>
                      <option>Keselamatan Transportasi</option>
                      <option>Dampak Lingkungan</option>
                      <option>Perencanaan Strategis</option>
                      <option>Inovasi Teknologi</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <Textarea 
                      placeholder="Jelaskan kebutuhan konsultasi Anda..." 
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Kirim Pesan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="PT SOLUSI TEKNO LINGKUNGAN" 
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-lg font-bold">PT SOLUSI TEKNO LINGKUNGAN</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Konsultan profesional dalam bidang transportasi dengan fokus pada teknologi dan keberlanjutan lingkungan.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Manajemen Transportasi</li>
                <li>Analisis Lalu Lintas</li>
                <li>Keselamatan Transportasi</li>
                <li>Dampak Lingkungan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Tentang Kami</li>
                <li>Portfolio</li>
                <li>Karir</li>
                <li>Blog</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PT SOLUSI TEKNO LINGKUNGAN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}