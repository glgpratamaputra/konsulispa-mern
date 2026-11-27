import banner_img from './banner_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.jpg'
import about_image from './about_image.jpg'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.svg'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import telegram from './telegram.svg'
import twitter from './twitter.svg'
import skype from './skype.svg'
import instagram from './instagram.svg'
import whatsapp from './whatsapp.svg'
import googlemaps from './googlemaps.svg'
import med1 from './med1.png'
import med2 from './med2.png'
import med3 from './med3.png'
import med4 from './med4.png'
import med5 from './med5.png'
import med6 from './med6.png'
import med7 from './med7.png'
import med8 from './med8.png'
import med9 from './med9.png'
import med10 from './med10.png'
import med11 from './med11.png'
import med12 from './med12.png'
import med13 from './med13.png'
import med14 from './med14.png'
import med15 from './med15.png'
import place1 from './place1.jpg'
import place2 from './place2.jpg'
import place3 from './place3.jpg'
import place4 from './place4.jpg'
import place5 from './place5.jpg'
import place6 from './place6.jpg'
import place7 from './place7.jpg'
import place8 from './place8.jpg'
import place9 from './place9.png'
import place10 from './place10.png'
import place11 from './place11.png'
import place12 from './place12.png'
import place13 from './place13.png'
import place14 from './place14.png'
import place15 from './place15.png'
import Pilek from './Pilek.svg'
import Flu from './Flu.svg'
import Demam from './Demam.svg'
import PeredaNyeri from './PeredaNyeri.svg'
import Batuk from './Batuk.svg'
import Asma from './Asma.svg'
import Jakarta from './Jakarta.svg'
import Bogor from './Bogor.svg'
import Depok from './Depok.svg'
import Tangerang from './Tangerang.svg'
import Bekasi from './Bekasi.svg'


export const assets = {
    banner_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    skype,
    telegram,
    twitter,
    instagram,
    whatsapp,
    googlemaps
}

export const categoryData = [
    {
        Category: 'Batuk',
        image: Batuk
    },
    {
        Category: 'Pilek',
        image: Pilek
    },
    {
        Category: 'Flu',
        image: Flu
    },
    {
        Category: 'Asma',
        image: Asma
    },
    {
        Category: 'Demam',
        image: Demam
    },
    {
        Category: 'Nyeri',
        image: PeredaNyeri
    },
]

export const dataObat = [
    {
        _id: 'med1',
        name: 'Dekstrometorfan',
        image: med1,
        category: 'Batuk',
        kelasterapi: 'Antitusif',
        mekanismekerja: 'Penekan batuk yang cukup efektif, kecuali pada batuk yang mendadak dan berat',
        bentuksediaan: 'Tablet, kapsul, sirup, suspensi',
        indikasi: 'Batuk Kronis',
        kontraindikasi: 'Hipertensi berat, penyakit arteri koroner, wanita hamil, hipersensitivitas',
        efeksamping: 'Mual, pusing, depresi pernapasan',
        dosis: {
            dewasa:'10-20 mg, 3 x 1 hari',
            anakanak:'5-10 mg, 3 x 1 hari'
        },
        fees: 50,
    },
    {
        _id: 'med2',
        name: 'Klorfenon CTM',
        image: med2,
        category: 'Pilek',
        kelasterapi: 'Antihistamin',
        mekanismekerja: 'Menghambat reseptor histamin secara reversibel pada sel dan mengahmbat kerja histamin pada target organ',
        bentuksediaan: 'Tablet, kapsul',
        indikasi: 'Rinitis dan sinuitis alergika, batuk - pilek',
        kontraindikasi: 'Hipertensi berat, penyakit arteri koroner, glaukoma, hipersensitivitas, asma',
        efeksamping: 'Mengantuk, pusing, mual, muntah, mulut kering, pandangan kabur, palpitasi',
        dosis: {
            dewasa:'2-4 mg 3-4 x 1 hari, 8 mg 1-3 x 1 hari',
            anakanak:'< 12 tahun 0.35 mg/kg berat badan, terbagi dalam 4 dosis '
        },        
        fees: 50,
    },
    {
        _id: 'med3',
        name: 'Parasetamol',
        image: med3,
        category: 'Flu',
        kelasterapi: 'Antipiretik/Analgetik',
        mekanismekerja: 'Menghilangkan rasa sakit, misalnya sakit kepala, sakit gigi, nyeri haid. Menurunkan demam, misalnya setelah imunisasi, influenza',
        bentuksediaan: 'Tablet, sirup, obat tetes, bubuk/puter, suspensi',
        indikasi: 'Analgesik-antipiretik, demam rematik akut',
        kontraindikasi: 'Penderita dengan gangguan fungsi hati, alergi terhadap obat ini',
        efeksamping: 'Reaksi alergi, anemia, mual, muntal',
        dosis: {
            dewasa:'325-600 mg setiap 4 atau 6 jam',
            anakanak:'0-1 tahun : 60-120 mg, 1-5 tahun : 120-250 mg, 6-12 tahun : 250-500 mg (setiap 4 atau 6 jam)'
        },        
        fees: 50,
    },
    {
        _id: 'med4',
        name: 'Teofilin',
        image: med4,
        category: 'Asma',
        kelasterapi: 'Antiasma',
        mekanismekerja: 'Bekerja pada otot polos jalan napas (bronkiolus) dan pembuluh darah paru, mempengaruhi siklus adenosin monofosfat sehingga terjadi dilatasi otot polos',
        bentuksediaan: 'Tablet, kapsul, sirup / eliksir',
        indikasi: 'Asma, sesak napas yang disebabkan bronkitis kronis, emfisema, apnea pada bayi prematur',
        kontraindikasi: 'Hipersensitivitas. Hati-hati pada pemberian pada wanita hamil',
        efeksamping: 'Mual, muntah, sakit kepala, takikardia, palpitasi, hipotensi, takipnea',
        dosis: {
            dewasa:'Rata-rata 2x200 mg / 1 hari',
            anakanak:'Anak (20-25 kg) : 150 mg / 1 hari, Anak (15-20 kg) : 100 mg / 1 hari'
        },        
        fees: 50,
    },
    {
        _id: 'med5',
        name: 'Ibuproven',
        image: med5,
        category: 'Demam',
        kelasterapi: 'Antiinflamasi Non-Steroid, Antipretik/Analgesik',
        mekanismekerja: 'Ibuproven menghambat enzim COX-1 dan COX-2 yang memproduksi prostaglandin, senyawa yang berperan dalam peningkatan suhu tubuh dan inflamasi',
        bentuksediaan: 'Tablet, sirup',
        indikasi: 'Demam, nyeri akibat peradangan, misalnya pada artritis atau sakit kepala',
        kontraindikasi: 'Penderita gangguan lambung atau tukak lambung, penyakit ginjal atau hati berat, gangguan pendarahan atau pembekuan darah, hipertensi yang tidak terkontrol, wanita hamil terutama trimester ketiga, alergi terhadap Ibuprofen atau NSAID lainnya',
        efeksamping: 'Gangguan pencernaan, seperti mual, diare, nyeri perut. Pusing atau sakit kepala, gangguan fungsi ginjal, reaksi alergi seperti ruam kulit, gatal, sesak napas dan meningkatkan tekanan darah',
        dosis: {
            dewasa:'200-400 mg, 3-4 x 1 hari',
            anakanak:'Anak (6 bulan - 12 tahun) : 5-10 mg/kg berat badan, 3-4 x 1 hari'
        },        
        fees: 50,
    },
    {
        _id: 'med6',
        name: 'Diklofenak',
        image: med6,
        category: 'Nyeri',
        kelasterapi: 'Antiinflamasi non steroid (AINS)',
        mekanismekerja: 'Menghambat enzim COX yang mengurangi produksi prostaglandin, sehingga mengurangi nyeri dan peradangan',
        bentuksediaan: 'Tablet, kapsul, salep, injeksi, suppositoria',
        indikasi: 'Nyeri otot dan sendi, nyeri haid, nyeri pasca operasi, nyeri karena radang sendi (osteoartritis/rheumatoid arthritis)',
        kontraindikasi: 'Penderita tukak lambung, asma karena AINS, gangguan ginjal/hati berat, dan hipersensitivitas terhadap diklofenak',
        efeksamping: 'Nyeri lambung, mual, pusing, gangguan hati, reaksi alergi, peningkatan risiko perdarahan saluran cerna',
        dosis: {
            dewasa:'50 mg, 2-3 x 1 hari',
            anakanak:'Ikuti petunjuk dokter'
        },        
        fees: 50,
    },
    {
        _id: 'med7',
        name: 'Difenhidramin',
        image: med7,
        category: 'Batuk',
        kelasterapi: 'Antitusif',
        mekanismekerja: 'Mempunyai sifat antitusif pada dosis yang menyebabkan mengantuk, juga mempunyai efek antihistamin sehingga sesuai untuk batuk yang disebabkan alergi',
        bentuksediaan: 'Tablet, sirup, suspensi',
        indikasi: 'Konjungtivitas alergika, alergi kulit, mosion sickness, parkinson, kombinasi untuk antitusif',
        kontraindikasi: 'Bayi prematur dan neonatus, wanita menyusui, hati-hati untuk penderita glaukoma, ulkus peptikum, obstruksi piloroduodenal dan kandung kemih, hipertrofi prostat',
        efeksamping: 'Urtikaria, syok anafilaktik, sakit kepala, hipotensi, mengantuk, nyeri epigastrium',
        dosis: {
            dewasa:'25-50 mg, 3-4 x 1 hari',
            anakanak:'> 10 kg : 12.5-25 mg, 3-4 x 1 hari'
        },        
        fees: 50,
    },
    {
        _id: 'med8',
        name: 'Fenilipropanolamin',
        image: med8,
        category: 'Pilek',
        kelasterapi: 'Dekongestan Oral',
        mekanismekerja: 'Bekerja dengan dekongestan dengan vasokonstriksi pembuluh darah hidung',
        bentuksediaan: 'Sirup',
        indikasi: 'Hidung tersumbat, gejala selesma',
        kontraindikasi: 'Penderita diabet juvenil mengakibatkan kenaikan gula darah',
        efeksamping: 'Menaikan tekanan darah, aritmia untuk penderita jantung',
        dosis: {
            dewasa:'1-2 mg, 3 x 1 hari',
            anakanak:'-'
        },        
        fees: 50,
    },
    {
        _id: 'med9',
        name: 'Asetosal',
        image: med9,
        category: 'Flu',
        kelasterapi: 'Antipiretik/Analgetik',
        mekanismekerja: 'Menghambat enzim siklooksigenase sehingga konversi asam arakidonat menjadi terganggu',
        bentuksediaan: 'Tablet, sirup, bubuk/puyer',
        indikasi: 'Analgesik-antipiretik, demam reumatik, mencegah trombus koroner',
        kontraindikasi: 'Ulkus peptikum, gagal hati dan ginjal, wanita hamil',
        efeksamping: 'Mual, muntah, anemia sekunder',
        dosis: {
            dewasa:'4-6 x 365-650 mg/hari',
            anakanak:'4-6 x 15-20 mg/hari'
        },        
        fees: 50,
    },
    {
        _id: 'med10',
        name: 'Efedrin',
        image: med10,
        category: 'Asma',
        kelasterapi: 'Antiasma',
        mekanismekerja: 'Efedrin suatu simpatomimetikamin, mempunyai efek bronkhodilatasi yang lemah. Bekerja mempengaruhi sistem saraf adrenergik secara langsung maupun tidak langsung, karena itu hanya digunakan pada asma ringan',
        bentuksediaan: 'Tablet, kapsul, sirup',
        indikasi: 'Asma ringan, sesak napas karena bronkhitis',
        kontraindikasi: 'Penderita yang alergi terhadap komponen obat ini, penderita hipertiroid, jantung, hipertensi',
        efeksamping: 'Pada susunan saraf pusat sakit kepala, sukar tidur, gelisah, jantung berdebar',
        dosis: {
            dewasa:'1-2 tablet, 2-3 x 1 hari',
            anakanak:'Anak < 12 tahun : 1/2 tablet, 2-3 x 1 hari'
        },        
        fees: 50,
    },
    {
        _id: 'med11',
        name: 'Parasetamol',
        image: med11,
        category: 'Demam',
        kelasterapi: 'Antipiretik/Analgetik',
        mekanismekerja: 'Menghilangkan rasa sakit, misalnya sakit kepala, sakit gigi, nyeri haid. Menurunkan demam, misalnya setelah imunisasi, influenza',
        bentuksediaan: 'Tablet, sirup, obat tetes, bubuk/puter, suspensi',
        indikasi: 'Analgesik-antipiretik, demam rematik akut',
        kontraindikasi: 'Penderita dengan gangguan fungsi hati, alergi terhadap obat ini',
        efeksamping: 'Reaksi alergi, anemia, mual, muntal',
        dosis: {
            dewasa:'325-600 mg setiap 4 atau 6 jam',
            anakanak:'0-1 tahun : 60-120 mg, 1-5 tahun : 120-250 mg, 6-12 tahun : 250-500 mg (setiap 4 atau 6 jam)'
        },        
        fees: 50,
    },
    {
        _id: 'med12',
        name: 'Tramadol',
        image: med12,
        category: 'Nyeri',
        kelasterapi: 'Analgesik Opioid',
        mekanismekerja: 'Bekerja dengan mengikat reseptor opioid di sistem saraf pusat dan menghambat reuptake serotonin serta norepinefrin, sehingga mengurangi persepsi nyeri',
        bentuksediaan: 'Tablet, kapsul, injeksi, tetes oral',
        indikasi: 'Untuk mengatasi nyeri sedang hingga berat seperti nyeri pasca operasi, nyeri kanker, atau nyeri kronis lainnya',
        kontraindikasi: 'Pasien dengan gangguan pernapasan berat, keracunan alkohol, penggunaan obat depresan sistem saraf pusat, epilepsi tak terkontrol',
        efeksamping: 'Mual, pusing, kantuk, konstipasi, sakit kepala, risiko ketergantungan, kejang (pada dosis tinggi)',
        dosis: {
            dewasa:'50-100 mg setiap 4 atau 6 jam sesuai kebutuhan, maksimal 400 mg/hari',
            anakanak:'Tidak direkomendasikan tanpa resep dan pengawasan medis, ikuti petunjuk dokter'
        },        
        fees: 50,
    },
    {
        _id: 'med13',
        name: 'Gliserilguaikolat',
        image: med13,
        category: 'Batuk',
        kelasterapi: 'Ekspetoran',
        mekanismekerja: 'Mengencerkan lendir saluran napas',
        bentuksediaan: 'Kapsul, sirup, tablet',
        indikasi: 'Batuk berdahak',
        kontraindikasi: 'Anak dibawah 2 tahun dan wanita hamil dibawah pengawasan dokter',
        efeksamping: 'Mual, muntah',
        dosis: {
            dewasa:'200-400 mg / 4 jam',
            anakanak:'2-6 tahun 50-100 mg / 4 jam, 6-12 tahun 100-200 mg / 4 jam'
        },        
        fees: 50,
    },
    {
        _id: 'med14',
        name: 'Oksimetazolin',
        image: med14,
        category: 'Pilek',
        kelasterapi: 'Dekongestan Topikal',
        mekanismekerja: 'Tidak boleh digunakan terus menerus lebih dari 7 hari, karena pemakaian jangka lama terus-menerus dapat menimbulkan efek balik',
        bentuksediaan: 'Larutan tetes hidung, semprot hidung',
        indikasi: 'Pilek, sinus prahidung, rinitis akut, faringitis, laringitis',
        kontraindikasi: 'Hampir tidak ada',
        efeksamping: 'Hampir tidak ada, kecuali pada balita dan usia lanjut yang lebih peka terhadap efek sistemik, tetapi ada efek samping akibat vasokonstriksi lokal secara cepat, yaitu jika pemberian obat hidung dihentikan dapat terjadi sumbatan hidung yang lebih berat. Sumbatan ini dapat menyebabkan kerusakan jaringan setempat dan mengganggu fungsi bulu hidung',
        dosis: {
            dewasa:'> 6 tahun : 2-3 tetes / semprot oksimetazolin, 0.05% pada setiap lubang hidung',
            anakanak:' 2-5 tahun : 2-3 tetes / semprot oksimetazolin 0.025%, < 2 tahun : Ikuti petunjuk dokter '
        },        
        fees: 50,
    },
    {
        _id: 'med15',
        name: 'Oksimetazolin',
        image: med15,
        category: 'Flu',
        kelasterapi: 'Dekongestan Topikal',
        mekanismekerja: 'Tidak boleh digunakan terus menerus lebih dari 7 hari, karena pemakaian jangka lama terus-menerus dapat menimbulkan efek balik',
        bentuksediaan: 'Larutan tetes hidung, semprot hidung',
        indikasi: 'Pilek, sinus prahidung, rinitis akut, faringitis, laringitis',
        kontraindikasi: 'Hampir tidak ada',
        efeksamping: 'Hampir tidak ada, kecuali pada balita dan usia lanjut yang lebih peka terhadap efek sistemik, tetapi ada efek samping akibat vasokonstriksi lokal secara cepat, yaitu jika pemberian obat hidung dihentikan dapat terjadi sumbatan hidung yang lebih berat. Sumbatan ini dapat menyebabkan kerusakan jaringan setempat dan mengganggu fungsi bulu hidung',
        dosis: {
            dewasa:'> 6 tahun : 2-3 tetes / semprot oksimetazolin, 0.05% pada setiap lubang hidung',
            anakanak:' 2-5 tahun : 2-3 tetes / semprot oksimetazolin 0.025%, < 2 tahun : Ikuti petunjuk dokter '
        },        
        fees: 50,
    },
]

export const categoryDataKlinik = [
    {
        Category: 'Jakarta',
        image: Jakarta
    },
    {
        Category: 'Bogor',
        image: Bogor
    },
    {
        Category: 'Depok',
        image: Depok
    },
    {
        Category: 'Tangerang',
        image: Tangerang
    },
    {
        Category: 'Bekasi',
        image: Bekasi
    },
]

export const dataKlinikApotek = [
    {
        _id: 'place1',
        name: 'Klinik Pratama Sahira',
        image: place1,
        category: 'Jakarta',
        alamat: ' Jl. Cipinang Muara Raya No. 10, Jakarta Timur',
        jamoperasional: 'Senin-Sabtu, 08.00-20.00 WIB',
        layanan: 'Dokter umum 24 jam, layanan telemedisin',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place2',
        name: 'Klinik Pelita Sehat Bangbarung',
        image: place2,
        category: 'Bogor',
        alamat: 'Jl. Achmad Sobana / Bangbarung Raya No. 77 E-F, Tegal Gundil, Bogor',
        jamoperasional: 'Setiap hari, 07.00-22.00 WIB',
        layanan: 'Faskes BPJS tingkat pertama, konsultasi umum, pemeriksaan laboratorium',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place3',
        name: 'Apotek Vidi',
        image: place3,
        category: 'Depok',
        alamat: 'Jl. Proklamasi Kompl Ruko Bl A/5, Depok',
        jamoperasional: 'Senin-Sabtu, 08.00-21.00 WIB',
        layanan: 'Obat resep dan non-resep, suplemen',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place4',
        name: 'Apotek Anaya',
        image: place4,
        category: 'Tangerang',
        alamat: 'Jl. Untung Suropati No. 24, Tangerang',
        jamoperasional: 'Setiap hari, 08.00-20.00 WIB',
        layanan: 'Obat generik, konsultasi farmasi',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place5',
        name: 'Apotek Citra Medika',
        image: place5,
        category: 'Bekasi',
        alamat: 'Jl. Pekayon Raya No.6, Bekasi Selatan',
        jamoperasional: 'Senin-Sabtu, 08.00-20.00 WIB',
        layanan: 'Obat resep dan non-resep, suplemen',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place6',
        name: 'Apotek Century',
        image: place6,
        category: 'Jakarta',
        alamat: 'Jl. Gatot Subroto No. 10, Jakarta Selatan',
        jamoperasional: 'Setiap hari, 08.00-22.00 WIB',
        layanan: 'Obat resep dan non-resep, suplemen, alat kesehatan',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place7',
        name: 'Klinik Medissa',
        image: place7,
        category: 'Bogor',
        alamat: 'Jl. Raya Sukaraja-Sukabumi No.400, Teluk Pinang, Bogor Selatan',
        jamoperasional: 'Setiap hari, 24 jam',
        layanan: 'Konsultasi umum, pemeriksaan kesehatan, layanan 24 jam',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place8',
        name: 'Apotek Tumbuh Sehat',
        image: place8,
        category: 'Depok',
        alamat: 'Jl. Tole Iskandar No. 13, Depok',
        jamoperasional: 'Senin-Sabtu, 08.00-20.00 WIB',
        layanan: 'Obat generik, konsultasi farmasi',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place9',
        name: 'Apotek Andini',
        image: place9,
        category: 'Tangerang',
        alamat: 'Jl. Pondok Kacang No. 44, Tangerang',
        jamoperasional: 'Setiap hari, 08.00-21.00 WIB',
        layanan: 'Obat resep dan non-resep, alat kesehatan',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place10',
        name: 'Apotek K24 Veteran',
        image: place10,
        category: 'Bekasi',
        alamat: 'Jl. Veteran No.34, Bekasi Selatan',
        jamoperasional: 'Senin-Sabtu, 08.00-20.00 WIB',
        layanan: 'Obat generik, konsultasi farmasi',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place11',
        name: 'Apotek Puji',
        image: place11,
        category: 'Jakarta',
        alamat: 'Jl. Daan Mogot No. 50, Jakarta Barat',
        jamoperasional: 'Setiap hari, 08.00-22.00 WIB',
        layanan: 'Obat generik, konsultasi farmasi, alat kesehatan',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place12',
        name: 'Klinik Medira',
        image: place12,
        category: 'Bogor',
        alamat: 'Jl. Baru Kemang Raya, Semplak, Cibadak, Tanah Sereal, Bogor',
        jamoperasional: 'Senin-Sabtu, 08.00-20.00 WIB',
        layanan: 'Konsultasi umum, rapid test Covid-19, layanan 24 jam',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place13',
        name: 'Apotek K24 Margonda',
        image: place13,
        category: 'Depok',
        alamat: ' Jl. Margonda Raya, Depok',
        jamoperasional: 'Senin-Sabtu, 08.00-21.00 WIB',
        layanan: 'Obat resep dan non-resep, suplemen, alat kesehatan',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place14',
        name: 'Apotek Kharisma',
        image: place14,
        category: 'Tangerang',
        alamat: ' Jl. Bilabong No. 10, Tangerang Selatan',
        jamoperasional: 'Senin-Sabtu, 08.00-22.00 WIB',
        layanan: 'Obat resep dan non-resep, suplemen, alat kesehatan',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
    {
        _id: 'place15',
        name: 'Klinik Pratama Bekasi',
        image: place15,
        category: 'Bekasi',
        alamat: ' Jl. Cipinang Baru No. 10, Bekasi Barat',
        jamoperasional: 'Senin-Sabtu, 08.00-20.00 WIB',
        layanan: 'Dokter umum 24 jam, layanan telemedisin',
        kontak: '(+62) 888-999',
        mapsLink: 'https://www.google.com/maps?q=Jl.+Cipinang+Muara+Raya+No.+10,+Jakarta+Timur',
        waLink: 'https://wa.me/+6281292278233',
        fees: 50,
    },
]

export const diagnosisData = {
    questions: [
        { id: 1, question: "Apakah Anda mengalami demam (>38°C)?", key: "demam" },
        { id: 2, question: "Apakah Anda mengalami batuk?", key: "batuk" },
        {
            id: 3,
            question: "Jenis batuk yang dialami:",
            key: "jenis_batuk",
            options: ["Tidak", "Kering", "Berdahak"]
        },
        { id: 4, question: "Apakah Anda mengalami pilek?", key: "pilek" },
        { id: 5, question: "Apakah Anda mengalami hidung tersumbat?", key: "hidung_tersumbat" },
        { id: 6, question: "Apakah Anda mengalami sesak napas?", key: "sesak_napas" },
        { id: 7, question: "Apakah napas berbunyi (mengi)?", key: "mengi" }
    ],
    rules: [
        {
            conditions: { batuk: true, jenis_batuk: "Berdahak"},
            result: {
                diagnosis: "Anda menderita batuk berdahak",
                treatment: [
                    "Terapi Ekspetoran atau",
                    "Terapi OBH",
                    "Keduanya bekerja mengencerkan lendir"
                ],
                cf: 0.80 // Certainty Factor
            }
        },
        {
            conditions: { batuk: true, jenis_batuk: "Berdahak", sesak_napas: true },
            result: {
                diagnosis: "Anda menderita batuk berdahak, kemungkinan alergi dan asma",
                treatment: [
                    "Konsultasikan terlebih dahulu ke Dokter",
                    "Terapi kelompok obat Antiasma",
                    "Antiasma mengandung Bromheksin yang berfungsi sebagai pengencer lendir saluran napas"
                ],
                cf: 0.85 // Certainty Factor
            }
        },
        {
            conditions: { batuk: true, jenis_batuk: "Berdahak", sesak_napas: true, mengi: true },
            result: {
                diagnosis: "Anda menderita batuk, berdahak, sesak napas dan berbunyi. Anda terserang gejala Asma",
                treatment: [
                    "Sebaiknya konsultasikan ke terlebih dahulu ke Dokter",
                    "Terapi Antiasma",
                    "Antiasma mengandung Bromheksin yang berfungsi sebagai pengencer lendir saluran napas"
                ],
                cf: 0.88 // Certainty Factor
            }
        },
        {
            conditions: { pilek: true, hidung_tersumbat: false },
            result: {
                diagnosis: "Common Cold (Pilek Biasa)",
                treatment: [
                    "Paracetamol 500mg 3x sehari",
                    "Pseudoefedrin 60mg 3x sehari",
                    "Istirahat cukup dan perbanyak cairan"
                ],
                cf: 0.75 // Certainty Factor
            }
        },
        {
            conditions: { batuk: true, jenis_batuk: "Berdahak", demam: true },
            result: {
                diagnosis: "Anda menderita batuk berdahak dan demam, Anda terserang infeksi saluran pernapasan atas",
                treatment: [
                    "Terapi Parasetamol dan Ekspektoran OBH",
                    "Parasetamol bekerja menurunkan demam",
                    "Ekspektoran atau OBH mengencerkan lendir pada saluran napas"
                ],
                cf: 0.88 // Certainty Factor
            }
        },
        {
            conditions: { batuk: true, jenis_batuk: "Berdahak", demam: true, sesak_napas: true },
            result: {
                diagnosis: "Anda menderita batuk berdahak, demam dan sesak nafas",
                treatment: [
                    "Anda terserang infeksi saluran pernapasan atas",
                    "Pengobatan harus dengan antibiotik",
                    "Konsultasikan ke dokter"
                ],
                cf: 0.89 // Certainty Factor // Rule 5
            }
        },
        {
            conditions: { batuk: true, jenis_batuk: "Berdahak", demam: true, sesak_napas: true, mengi: true},
            result: {
                diagnosis: "Anda menderita batuk berdahak, demam, sesak nafas dan berbunyi",
                treatment: [
                    "Anda terserang infeksi saluran pernapasan atas yang berakibat asma",
                    "Pengobatan harus dengan antibiotik",
                    "Konsultasikan ke dokter"
                ],
                cf: 0.90 // Certainty Factor // rule 6 // batas batuk & demam
            }
        },
        {
            conditions: { batuk: true, jenis_batuk: "Berdahak", pilek: true },
            result: {
                diagnosis: "Anda menderita batuk berdahak, pilek",
                treatment: [
                    "Kemungkinan Anda menderita alergi",
                    "Terapi Ekspektoran dan Antihistamin",
                    "Antihistamin bekerja menghambat reseptor histamin, Ekspektoran bekerja mengencerkan lendir pada saluran napas"
                ],
                cf: 0.88 // Certainty Factor // rule 7 // batuk pilek
            }
        }
    ]
};

export default diagnosisData;


