/* =====================================================================
   DATA WEB UTAMA PJOK — profil guru dan isi folder setiap kelas
   Cara menambah materi baru (bisa langsung di github.com, tombol pensil):
   1. Salin satu blok { ... } di bagian MATERI, tempel di bawahnya, beri koma.
   2. Ganti kelas (1-9), semester (1 = Ganjil, 2 = Genap), judul, ringkas, dan link.
   3. Klik "Commit changes". Web utama berubah dalam 1-2 menit.
   Materi otomatis masuk ke folder kelasnya, di kolom semesternya.
   Semester yang belum punya materi tampil "Segera hadir".
   ===================================================================== */
window.PROFIL = {
  nama: "Syaifudin Wahid",
  gelar: "M.Pd",
  sapaan: "Mr.",
  peran: "Physical Education Teacher",
  sekolah: ["SD Jaya Manggala", "SMP Jaya Manggala"],
  kota: "Tangerang",
  motto: "Move, play, grow.",
  tentang: "Physical Education, Sports, and Health is more than just exercise. Here we learn to move correctly, play fairly, and keep our bodies healthy. Open your class folder, choose a lesson, then take on the challenges on your phone or on the classroom screen.",
  // Tautan tambahan (opsional). Kosongkan link bila tidak dipakai.
  tautan: [
    // { label: "Instagram", link: "" },
  ]
};

window.MATERI = [
  /* ---------- SD ---------- */
  {
    kelas: 1, semester: 1, jenjang: "SD",
    judul: "Ayo Berpindah!",
    sub: "Jalan, Lari, Lompat, Loncat",
    ringkas: "Menirukan gerak binatang: kucing berjalan, kuda berlari, kijang melompat, katak meloncat. Ada aba-aba ajaib, permainan sentuh, dan kuis.",
    topik: ["Gerak Lokomotor", "Gerak Binatang"],
    ikon: "lari", warna: "#FF7A1F",
    link: "https://maswahid05.github.io/Mpilokomotorkelas1/"
  },
  {
    kelas: 1, semester: 1, jenjang: "SD",
    judul: "Asyik Main Bola!",
    sub: "Bab 3 · Bergerak Menggunakan Benda",
    ringkas: "Melempar, menangkap, memukul balon, menendang, dan menggiring bola, lalu main Bola Keranjang dan Bola Roket.",
    topik: ["Gerak Manipulatif", "Bab 3"],
    ikon: "bola", warna: "#1E88E5",
    link: "https://maswahid05.github.io/Mpimanipulatifkelas1/"
  },
  {
    kelas: 2, semester: 1, jenjang: "SD",
    judul: "Sehatkan Badanmu!",
    sub: "Bab 3 · Cepat, Lentur, Seimbang",
    ringkas: "Berlatih cepat seperti kelinci, lentur seperti kucing, dan seimbang seperti bangau. Ada aba-aba, lampu gerak, pos latihan, permainan sentuh, dan kuis.",
    topik: ["Bab 3", "Kebugaran"],
    ikon: "jantung", warna: "#16A34A",
    link: "https://maswahid05.github.io/Mpibab3kelas2/"
  },
  {
    kelas: 4, semester: 1, jenjang: "SD",
    judul: "Ayo, Bergerak!",
    sub: "Bab 1 · Ayo, Bergerak!",
    ringkas: "Gerak berpindah tempat, gerak di tempat, gerak memakai benda, dan bergerak di air dengan aman. Materi bergambar, permainan, dan kuis acak.",
    topik: ["Bab 1", "Gerak Dasar"],
    ikon: "lari", warna: "#EA580C",
    link: "https://maswahid05.github.io/Mpibab1kelas4/"
  },
  {
    kelas: 4, semester: 1, jenjang: "SD",
    judul: "Ayo, Bermain!",
    sub: "Bab 2 · Ayo, Bermain!",
    ringkas: "Permainan invasi, net, lapangan, target, dan kerja sama. Ada boling botol, kasti mini, dan banyak game di rumah.",
    topik: ["Bab 2", "Permainan"],
    ikon: "bola", warna: "#2563EB",
    link: "https://maswahid05.github.io/Mpibab2kelas4/"
  },
  {
    kelas: 4, semester: 1, jenjang: "SD",
    judul: "Rangkai Gerakmu!",
    sub: "Bab 3 · Ayo, Merangkai Gerak!",
    ringkas: "Gerak berirama 1 × 8, senam keseimbangan dan guling depan, serta gerak dasar pencak silat.",
    topik: ["Bab 3", "Rangkaian Gerak"],
    ikon: "piala", warna: "#DB2777",
    link: "https://maswahid05.github.io/Mpibab3kelas4/"
  },
  {
    kelas: 4, semester: 2, jenjang: "SD",
    judul: "Petualangan Tubuh Bugar",
    sub: "Ayo, Bugarkan Tubuhmu!",
    ringkas: "Mengenal kebugaran jasmani dan aktivitas fisik yang menyenangkan, lalu menguji pemahaman lewat kuis dan permainan seret-lepas.",
    topik: ["Kebugaran", "Aktivitas Fisik"],
    ikon: "lari", warna: "#0EA5E9",
    link: "https://maswahid05.github.io/Mpikebugaranjasmani/"
  },
  {
    kelas: 5, semester: 1, jenjang: "SD",
    judul: "Ayo Jelajah Gerak!",
    sub: "Bab 1 · Eksplorasi Gerak",
    ringkas: "Jalan, lari, lompat, loncat, melempar-menangkap, menendang-menghentikan bola, dan gerak aman di air. Ada aba-aba, pos gerak, permainan sentuh, dan kuis 15 soal.",
    topik: ["Bab 1", "Gerak Dasar"],
    ikon: "lari", warna: "#F05A28",
    link: "https://maswahid05.github.io/Mpibab1kelas5/"
  },
  {
    kelas: 5, semester: 1, jenjang: "SD",
    judul: "Gerak Cerdas!",
    sub: "Bab 2 · Berpikir Cerdas, Bergerak Taktis",
    ringkas: "Kesadaran ruang, usaha, dan hubungan saat bergerak, lalu memperkirakan dan menguji strategi tim di papan taktik.",
    topik: ["Bab 2", "Strategi"],
    ikon: "bola", warna: "#0E8F6E",
    link: "https://maswahid05.github.io/Mpibab2kelas5/"
  },
  {
    kelas: 5, semester: 1, jenjang: "SD",
    judul: "Racik Permainanmu!",
    sub: "Bab 3 · Aturan Baru, Permainan Seru",
    ringkas: "Unsur dan prinsip permainan, modifikasi yang inklusif, lalu merancang dan menguji permainan baru buatan kelompokmu.",
    topik: ["Bab 3", "Modifikasi Permainan"],
    ikon: "piala", warna: "#7A3FD1",
    link: "https://maswahid05.github.io/Mpibab3kelas5/"
  },
  {
    kelas: 6, semester: 1, jenjang: "SD",
    judul: "Energi Super",
    sub: "Algoritma Gerak untuk Jantung Sehat",
    ringkas: "Kebugaran jasmani yang digabung dengan koding: susun algoritma gerak, ukur denyut nadi, dan jaga jantung tetap sehat.",
    topik: ["Kebugaran", "Koding"],
    ikon: "jantung", warna: "#E8323F",
    link: "https://maswahid05.github.io/Mpikebugaranjasmanivi/"
  },
  {
    kelas: 6, semester: 1, jenjang: "SD",
    judul: "Pesilat Cilik!",
    sub: "Bab 4 · Aktivitas Bela Diri Pencak Silat",
    ringkas: "Sikap hormat, kuda-kuda, pukulan, tendangan depan-T-sabit, tangkisan, elakan, dan kombinasinya. Materi bergambar, gerakan beranimasi, 10 permainan, main di rumah, dan kuis acak.",
    topik: ["Bab 4", "Pencak Silat"],
    ikon: "lari", warna: "#C0262D",
    link: "https://maswahid05.github.io/Mpibab4kelas6/"
  },

  /* ---------- SMP ---------- */
  {
    kelas: 7, semester: 1, jenjang: "SMP",
    judul: "Mesin Waktu Basket",
    sub: "Sejarah Bola Basket",
    ringkas: "Menjelajah sejarah bola basket dari keranjang persik sampai sekarang, dengan kuis 15 soal dan tantangan seret-lepas.",
    topik: ["Bola Basket", "Sejarah"],
    ikon: "jam", warna: "#B45309",
    link: "https://maswahid05.github.io/Mpisejarahbasket/"
  },
  {
    kelas: 7, semester: 1, jenjang: "SMP",
    judul: "Dari Keranjang ke Ring",
    sub: "Sejarah dan Gerak Dasar Bola Basket",
    ringkas: "Sejarah bola basket, menggiring, mengoper, menangkap, menembak BEEF, menguasai ruang, dan mencoba aturan yang adil.",
    topik: ["Bola Basket", "Gerak Dasar"],
    ikon: "basket", warna: "#1565C0",
    link: "https://maswahid05.github.io/Mpibasketkelas7/"
  },
  {
    kelas: 7, semester: 1, jenjang: "SMP",
    judul: "Naik Level!",
    sub: "Bab 1 · Meningkatkan Keterampilan Gerak",
    ringkas: "Gerak dasar ke gerak spesifik, cara tubuh belajar gerak baru, dan umpan balik visual, kinestetik, auditori, HA dan KT.",
    topik: ["Bab 1", "Keterampilan Gerak"],
    ikon: "lari", warna: "#0F9D8A",
    link: "https://maswahid05.github.io/Mpibab1kelas7/"
  },
  {
    kelas: 7, semester: 1, jenjang: "SMP",
    judul: "Kuasai Ruang!",
    sub: "Bab 2 · Memperagakan Strategi Gerak",
    ringkas: "Masalah taktik, konsep ruang, gerak dengan dan tanpa bola, serta memilih pertahanan zona atau satu lawan satu.",
    topik: ["Bab 2", "Strategi Gerak"],
    ikon: "bola", warna: "#5B3CC4",
    link: "https://maswahid05.github.io/Mpibab2kelas7/"
  },
  {
    kelas: 7, semester: 1, jenjang: "SMP",
    judul: "Gerak Cerdas",
    sub: "Bab 3 · Belajar Melalui Gerak",
    ringkas: "Konsep gerak, empat fase gerak, enam jenis transfer keterampilan, dan solusi masalah gerak lewat permainan kecil.",
    topik: ["Bab 3", "Belajar Gerak"],
    ikon: "piala", warna: "#D9480F",
    link: "https://maswahid05.github.io/Mpibab3kelas7/"
  },
  {
    kelas: 8, semester: 1, jenjang: "SMP",
    judul: "Satu Bola, Semua Bermain",
    sub: "Variasi Teknik dan Permainan Modifikasi",
    ringkas: "Operan atas kepala, crossover, lay up kanan dan kiri, merancang aturan sendiri, dan praktik RICE.",
    topik: ["Bola Basket", "Modifikasi"],
    ikon: "basket", warna: "#1E9B4C",
    link: "https://maswahid05.github.io/Mpibasketkelas8/"
  },
  {
    kelas: 8, semester: 1, jenjang: "SMP",
    judul: "Gerak Efektif!",
    sub: "Bab 1 · Mengefektifkan Gerak",
    ringkas: "Komponen gerak, gaya dan hukum Newton, latihan kekuatan dan power, serta analisis gerak per fase. Materi bergambar, permainan, dan kuis acak.",
    topik: ["Bab 1", "Gaya & Gerak"],
    ikon: "lari", warna: "#16A34A",
    link: "https://maswahid05.github.io/Mpibab1kelas8/"
  },
  {
    kelas: 8, semester: 1, jenjang: "SMP",
    judul: "Ilmu Lintasan!",
    sub: "Bab 2 · Menerapkan Konsep Gerak",
    ringkas: "Gerak parabola dan proyektil, rahasia sudut lepas, serta keseimbangan dan stabilitas tubuh. Ada eksperimen kelas dan game di rumah.",
    topik: ["Bab 2", "Konsep Gerak"],
    ikon: "bola", warna: "#0D9488",
    link: "https://maswahid05.github.io/Mpibab2kelas8/"
  },
  {
    kelas: 8, semester: 1, jenjang: "SMP",
    judul: "Atur Strategi!",
    sub: "Bab 3 · Menyusun dan Menerapkan Strategi Gerak",
    ringkas: "Strategi dan taktik, menyusun rencana tim, menyerang dan bertahan, lalu analisis keberhasilan dengan data. Ada papan strategi.",
    topik: ["Bab 3", "Strategi"],
    ikon: "piala", warna: "#4D7C0F",
    link: "https://maswahid05.github.io/Mpibab3kelas8/"
  },
  {
    kelas: 9, semester: 1, jenjang: "SMP",
    judul: "Liga Basket Kelas",
    sub: "Bermain, Memimpin, dan Melayani",
    ringkas: "Liga 8 tim dengan peran kapten, wasit, skorer, jurnalis, dan petugas P3K. Susun strategi dan jaga fair play.",
    topik: ["Bola Basket", "Liga Kelas"],
    ikon: "piala", warna: "#C62828",
    link: "https://maswahid05.github.io/Mpibasketkelas9/"
  }
];
