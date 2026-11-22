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
  peran: "Guru PJOK",
  sekolah: ["SD Jaya Manggala", "SMP Jaya Manggala"],
  kota: "Tangerang",
  motto: "Bergerak, bermain, bertumbuh.",
  tentang: "Pendidikan Jasmani, Olahraga, dan Kesehatan bukan sekadar berolahraga. Di sini kita belajar bergerak dengan benar, bermain dengan adil, dan menjaga tubuh tetap sehat. Buka folder kelasmu, pilih materinya, lalu kerjakan tantangannya di HP atau di layar kelas.",
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
    kelas: 4, semester: 2, jenjang: "SD",
    judul: "Petualangan Tubuh Bugar",
    sub: "Ayo, Bugarkan Tubuhmu!",
    ringkas: "Mengenal kebugaran jasmani dan aktivitas fisik yang menyenangkan, lalu menguji pemahaman lewat kuis dan permainan seret-lepas.",
    topik: ["Kebugaran", "Aktivitas Fisik"],
    ikon: "lari", warna: "#0EA5E9",
    link: "https://maswahid05.github.io/Mpikebugaranjasmani/"
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
    kelas: 9, semester: 1, jenjang: "SMP",
    judul: "Liga Basket Kelas",
    sub: "Bermain, Memimpin, dan Melayani",
    ringkas: "Liga 8 tim dengan peran kapten, wasit, skorer, jurnalis, dan petugas P3K. Susun strategi dan jaga fair play.",
    topik: ["Bola Basket", "Liga Kelas"],
    ikon: "piala", warna: "#C62828",
    link: "https://maswahid05.github.io/Mpibasketkelas9/"
  }
];
