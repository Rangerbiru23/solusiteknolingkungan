'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, Scale, Cookie, Globe } from 'lucide-react'

export default function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="PT SOLUSI TEKNO LINGKUNGAN" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <h1 className="text-sm font-bold text-gray-900">PT SOLUSI TEKNO LINGKUNGAN</h1>
                <p className="text-xs text-gray-600">Privacy Policy</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={scrollToTop}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">
            Perlindungan data dan privasi Anda adalah prioritas utama kami
          </p>
          <p className="text-sm opacity-75 mt-4">
            Terakhir diperbarui: 1 Januari 2024
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                PT SOLUSI TEKNO LINGKUNGAN ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan menyimpan informasi pribadi Anda ketika Anda menggunakan layanan konsultansi transportasi kami.
              </p>
              <p>
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-green-600" />
                <span>Informasi yang Kami Kumpulkan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nama lengkap dan identitas perusahaan</li>
                  <li>Alamat email dan nomor telepon</li>
                  <li>Alamat fisik perusahaan</li>
                  <li>Informasi pembayaran dan penagihan</li>
                  <li>Data identifikasi seperti KTP atau NPWP (jika diperlukan)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Alamat IP dan informasi perangkat</li>
                  <li>Jenis browser dan sistem operasi</li>
                  <li>Informasi penggunaan website</li>
                  <li>Cookies dan data pelacakan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Konsultansi</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Detail proyek dan kebutuhan konsultansi</li>
                  <li>Dokumen dan file yang dibagikan</li>
                  <li>Komunikasi dan catatan pertemuan</li>
                  <li>Hasil analisis dan rekomendasi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-blue-600" />
                <span>Penggunaan Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Penyediaan Layanan:</strong> Untuk memberikan konsultansi transportasi yang berkualitas dan sesuai kebutuhan Anda</li>
                <li><strong>Komunikasi:</strong> Untuk menghubungi Anda terkait layanan, penawaran, dan update proyek</li>
                <li><strong>Penagihan:</strong> Untuk proses penagihan dan pembayaran layanan</li>
                <li><strong>Perbaikan Layanan:</strong> Untuk menganalisis dan meningkatkan kualitas layanan kami</li>
                <li><strong>Keamanan:</strong> Untuk menjaga keamanan sistem dan mencegah penyalahgunaan</li>
                <li><strong>Kepatuhan Hukum:</strong> Untuk memenuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cookie className="w-6 h-6 text-green-600" />
                <span>Kebijakan Cookie</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookie Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookie Analitik:</strong> Membantu kami memahami cara pengguna menggunakan website</li>
                <li><strong>Cookie Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                <li><strong>Cookie Pemasaran:</strong> Digunakan untuk menampilkan konten yang relevan</li>
              </ul>
              <p>
                Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="w-6 h-6 text-blue-600" />
                <span>Hak Anda sebagai Pengguna</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Sesuai dengan peraturan perlindungan data, Anda memiliki hak-hak berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Hak Koreksi:</strong> Memperbaiki data pribadi yang tidak akurat</li>
                <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi dalam kondisi tertentu</li>
                <li><strong>Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                <li><strong>Hak Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                <li><strong>Hak Penolakan:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span>Pembagian Informasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi Anda dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Partner Layanan:</strong> Dengan penyedia layanan yang membantu operasional kami</li>
                <li><strong>Otoritas Hukum:</strong> Jika diwajibkan oleh hukum atau perintah pengadilan</li>
                <li><strong>Keamanan:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>Keamanan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami menerapkan langkah-langkah keamanan yang komprehensif untuk melindungi data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke data pribadi</li>
                <li>System monitoring dan deteksi intrusi</li>
                <li>Regular security audit dan vulnerability assessment</li>
                <li>Training keamanan untuk seluruh staf</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-green-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait kebijakan privasi kami, silakan hubungi:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@solusiteknolingkungan.com</p>
                <p><strong>Telepon:</strong> 085285703526</p>
                <p><strong>Alamat:</strong> Jl. Cimanuk No. 6, Gedung Office and Beyond Unit H, Kel. Citarum, Kec. Bandung Wetan, Kota Bandung, Provinsi Jawa Barat</p>
              </div>
              <p>
                Kami akan merespons pertanyaan Anda dalam waktu 7 hari kerja.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-blue-600" />
                <span>Perubahan Kebijakan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pemberitahuan di website kami</li>
                <li>Email kepada pengguna terdaftar</li>
                <li>Pemberitahuan langsung untuk perubahan material</li>
              </ul>
              <p>
                Penggunaan terus menerus layanan kami setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/logo.png" 
              alt="PT SOLUSI TEKNO LINGKUNGAN" 
              className="w-6 h-6 object-contain"
            />
            <h3 className="text-sm font-bold">PT SOLUSI TEKNO LINGKUNGAN</h3>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 PT SOLUSI TEKNO LINGKUNGAN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}