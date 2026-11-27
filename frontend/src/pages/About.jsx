import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-900'>
          <p className='text-gray-700'>TENTANG KAMI</p>
        </div>

        <div className='flex flex-col my-10 md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px] md:max-h-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center text-justify gap-5 text-gray-600'>
              <p>Selamat datang di CISPA, platform inovatif yang dirancang untuk membantu Anda memahami dan mengelola kesehatan Anda dengan lebih baik. Kami percaya bahwa pengetahuan adalah kekuatan, dan tujuan kami adalah memberikan informasi yang akurat dan terpercaya mengenai pengobatan berdasarkan diagnosis gejala yang Anda alami.</p>
              <p>Kami berkomitmen untuk memberdayakan individu dalam mengambil keputusan yang tepat terkait kesehatan mereka. Dengan menyediakan rekomendasi pengobatan yang berbasis pada gejala yang Anda alami, kami bertujuan untuk membantu Anda dalam praktik pengobatan mandiri maupun medis. Kami ingin setiap pengguna merasa lebih percaya diri dalam memahami kondisi kesehatan mereka dan menemukan solusi yang sesuai.</p>
              <b className='text-gray-700'>Tujuan Kami</b>
              <p>Menjadi panduan untuk mendukung pengambilan keputusan dalam praktik swamedikasi ditengah beragamnya jumlah obat-obatan yang beredar, serta meningkatkan kesadaran tentang pentingnya penanganan penyakit yang tepat dan profesional baik bagi tenaga professional ataupun masyarakat umum.</p>
          </div>
        </div>

        <div className='text-center text-2xl pt-10 pb-10 text-gray-900'>
          <p className='text-gray-700'>APA YANG KAMI TAWARKAN</p>
        </div>

        <div className='flex flex-col md:flex-row mb-20 text-justify'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>REKOMENDASI PENGOBATAN:</b>
            <p>Berdasarkan gejala yang Anda masukkan, kami menyediakan rekomendasi pengobatan yang relevan, baik itu obat-obatan over-the-counter maupun saran untuk konsultasi dengan tenaga medis profesional.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>INFORMASI TERPERCAYA:</b>
            <p>Tim kami terdiri dari profesional kesehatan dan peneliti yang berkomitmen untuk memberikan informasi terkini dan akurat tentang berbagai kondisi kesehatan, obat, penyakit dan jenis pengobatan.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>KEMUDAHAN PENGGUNA</b>
            <p>Website kami dirancang dengan antarmuka yang ramah pengguna, sehingga Anda dapat dengan mudah mencari informasi dan mendapatkan rekomendasi dalam waktu singkat.</p>
          </div>
        </div>
    </div>
  )
}

export default About