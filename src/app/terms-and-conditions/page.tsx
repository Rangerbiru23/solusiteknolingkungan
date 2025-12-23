'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, CheckCircle, Gavel, DollarSign } from 'lucide-react'

export default function TermsAndConditions() {
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
                <p className="text-xs text-gray-600">Terms and Conditions</p>
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
          <FileText className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl opacity-90">
            Syarat dan ketentuan penggunaan layanan konsultansi transportasi kami
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
                <FileText className="w-6 h-6 text-blue-600" />
                <span>Pendahuluan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Selamat datang di PT SOLUSI TEKNO LINGKUNGAN. Syarat dan Ketentuan ini mengatur penggunaan layanan konsultansi transportasi yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p>
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>Definisi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>"Perusahaan"</strong> merujuk pada PT SOLUSI TEKNO LINGKUNGAN</li>
                <li><strong>"Klien"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</li>
                <li><strong>"Layanan"</strong> merujuk pada semua layanan konsultansi transportasi yang kami sediakan</li>
                <li><strong>"Proyek"</strong> merujuk pada pekerjaan konsultansi spesifik yang disepakati bersama</li>
                <li><strong>"Konten"</strong> merujuk pada semua materi, dokumen, dan informasi yang dibagikan</li>
                <li><strong>"Platform"</strong> merujuk pada website dan sistem digital kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-blue-600" />
                <span>Layanan Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ruang Lingkup Layanan</h3>
                <p>
                  PT SOLUSI TEKNO LINGKUNGAN menyediakan layanan konsultansi transportasi meliputi:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Manajemen transportasi dan lalu lintas</li>
                  <li>Analisis dampak lingkungan</li>
                  <li>Perencanaan strategis infrastruktur</li>
                  <li>Keselamatan transportasi</li>
                  <li>Optimalisasi sistem logistik</li>
                  <li>Konsultansi teknologi transportasi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Standar Kualitas</h3>
                <p>
                  Kami berkomitmen untuk menyediakan layanan dengan standar profesional tertinggi sesuai dengan:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Peraturan perundang-undangan yang berlaku di Indonesia</li>
                  <li>Standar internasional dalam konsultansi transportasi</li>
                  <li>Kode etik profesi konsultan</li>
                  <li>Best practices industri</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-green-600" />
                <span>Kewajiban Klien</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Sebagai klien, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Memberikan informasi yang akurat dan lengkap untuk keperluan konsultansi</li>
                <li>Menyediakan akses yang diperlukan untuk pelaksanaan proyek</li>
                <li>Melakukan pembayaran tepat waktu sesuai kesepakatan</li>
                <li>Kerjasama dalam proses pengumpulan data dan informasi</li>
                <li>Memberikan feedback konstruktif untuk hasil kerja kami</li>
                <li>Menghormati hak kekayaan intelektual kami</li>
                <li>Tidak menggunakan layanan kami untuk tujuan ilegal atau tidak etis</li>
              </ul>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-6 h-6 text-blue-600" />
                <span>Syarat Pembayaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Struktur Biaya</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Biaya konsultansi akan disepakati dalam proposal atau kontrak</li>
                  <li>Biaya dapat berbentuk project-based, retainer, atau hourly rate</li>
                  <li>Biaya tambahan mungkin berlaku untuk scope yang berubah</li>
                  <li>Biaya transportasi, akomodasi, dan lainnya ditanggung klien</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Jadwal Pembayaran</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Uang muka minimum 30% pada awal proyek</li>
                  <li>Pembayaran tahapan sesuai milestone yang disepakati</li>
                  <li>Pelunasan maksimal 14 hari setelah penyelesaian proyek</li>
                  <li>Denda keterlambatan 0.5% per hari dari total tagihan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span>Hak Kekayaan Intelektual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hak Milik Perusahaan</h3>
                <p>
                  PT SOLUSI TEKNO LINGKUNGAN memiliki hak milik atas:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Metodologi, framework, dan tools konsultansi</li>
                  <li>Template dokumen dan format laporan</li>
                  <li>Software dan sistem yang dikembangkan</li>
                  <li>Brand, logo, dan materi pemasaran</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hak Penggunaan Klien</h3>
                <p>
                  Setelah pelunasan pembayaran, klien mendapatkan hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Menggunakan hasil konsultansi untuk keperluan internal</li>
                  <li>Modifikasi hasil sesuai kebutuhan operasional</li>
                  <li>Mereferensikan hasil kerja dalam konteks profesional</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  Klien tidak diperbolehkan menjual, melisensikan, atau mendistribusikan ulang hasil kerja kami tanpa izin tertulis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>Kerahasiaan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Kedua belah pihak setuju untuk menjaga kerahasiaan:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Informasi Rahasia:</strong> Semua data teknis, finansial, operasional, dan strategis</li>
                <li><strong>Periode Kerahasiaan:</strong> Selama kerjasama dan 5 tahun setelahnya</li>
                <li><strong>Pengecualian:</strong> Informasi yang sudah publik, diwajibkan hukum, atau telah diizinkan</li>
                <li><strong>Kewajiban:</strong> Tidak mengungkapkan kepada pihak ketiga tanpa persetujuan tertulis</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-green-600" />
                <span>Pembatasan Tanggung Jawab</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Batas Tanggung Jawab</h3>
                <p>
                  Tanggung jawab PT SOLUSI TEKNO LINGKUNGAN dibatasi sebagai berikut:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Maksimal nilai total kontrak untuk kerugian langsung</li>
                  <li>Tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial</li>
                  <li>Tidak bertanggung jawab atas keputusan bisnis yang diambil klien</li>
                  <li>Tidak menjamin hasil spesifik dari implementasi rekomendasi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Force Majeure</h3>
                <p>
                  Kami tidak bertanggung jawab atas keterlambatan atau kegagalan pelaksanaan akibat:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Bencana alam, perang, atau kerusuhan</li>
                  <li>Kebijakan pemerintah yang berubah</li>
                  <li>Pemogokan atau gangguan industri</li>
                  <li>Kegagalan infrastruktur umum</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gavel className="w-6 h-6 text-blue-600" />
                <span>Terminasi Kontrak</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh Klien</h3>
                <p>
                  Klien dapat mengakhiri kontrak dengan:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Pemberitahuan tertulis 30 hari sebelumnya</li>
                  <li>Pembayaran untuk pekerjaan yang telah selesai</li>
                  <li>Pembayaran biaya terminasi sebesar 20% dari sisa nilai kontrak</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pengakhiran oleh Perusahaan</h3>
                <p>
                  Kami dapat mengakhiri kontrak jika:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Klien melanggar syarat dan ketentuan material</li>
                  <li>Klien gagal melakukan pembayaran tepat waktu</li>
                  <li>Adanya kondisi force majeure</li>
                  <li>Kegiatan klien melanggar hukum atau etika</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gavel className="w-6 h-6 text-green-600" />
                <span>Penyelesaian Sengketa</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Sengketa yang timbul dari syarat dan ketentuan ini akan diselesaikan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Negosiasi:</strong> Upaya damai antara kedua belah pihak</li>
                <li><strong>Mediasi:</strong> Melalui mediator profesional jika negosiasi gagal</li>
                <li><strong>Arbitrase:</strong> Melalui Badan Arbitrase Nasional Indonesia (BANI)</li>
                <li><strong>Yurisdiksi:</strong> Pengadilan Negeri Bandung untuk kasus terakhir</li>
              </ul>
              <p className="text-sm text-gray-600">
                Hukum yang berlaku adalah hukum Republik Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* General Provisions */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span>Ketentuan Umum</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Perubahan Syarat:</strong> Kami berhak mengubah syarat dan ketentuan dengan pemberitahuan 30 hari</li>
                <li><strong>Pemisahan:</strong> Jika bagian syarat tidak sah, bagian lain tetap berlaku</li>
                <li><strong>Pengabaian:</strong> Kegagalan menegakkan hak tidak berarti pengabaian hak tersebut</li>
                <li><strong>Perpindahan Hak:</strong> Klien tidak dapat memindahkan hak dan kewajiban tanpa persetujuan tertulis</li>
                <li><strong>Keseluruhan Perjanjian:</strong> Syarat dan ketentuan ini merupakan keseluruhan perjanjian antara pihak</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-green-600" />
                <span>Hubungi Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> legal@solusiteknolingkungan.com</p>
                <p><strong>Telepon:</strong> 085285703526</p>
                <p><strong>Alamat:</strong> Jl. Cimanuk No. 6, Gedung Office and Beyond Unit H, Kel. Citarum, Kec. Bandung Wetan, Kota Bandung, Provinsi Jawa Barat</p>
              </div>
              <p>
                Dengan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan ini.
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