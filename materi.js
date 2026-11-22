/* =====================================================================
   DATA WEB UTAMA PJOK — profil guru dan daftar materi per kelas
   Cara menambah materi baru (bisa langsung di github.com, tombol pensil):
   1. Salin satu blok { ... } di bagian MATERI, tempel di bawahnya, beri koma.
   2. Ganti kelas, judul, ringkas, dan link (alamat web materinya).
   3. Klik "Commit changes". Web utama berubah dalam 1-2 menit.
   Kelas yang belum punya materi otomatis tampil "Segera hadir".
   ===================================================================== */
window.PROFIL = {
  nama: "Syaifudin Wahid",
  gelar: "M.Pd",
  sapaan: "Mr.",
  peran: "Guru PJOK",
  sekolah: ["SD Jaya Manggala", "SMP Jaya Manggala"],
  kota: "Tangerang",
  motto: "Bergerak, bermain, bertumbuh.",
  tentang: "Pendidikan Jasmani, Olahraga, dan Kesehatan bukan sekadar berolahraga. Di sini kita belajar bergerak dengan benar, bermain dengan adil, dan menjaga tubuh tetap sehat. Pilih kelasmu, buka materinya, lalu kerjakan tantangannya di HP atau di layar kelas.",
  // Tautan tambahan (opsional). Kosongkan link bila tidak dipakai.
  tautan: [
    // { label: "Instagram", link: "" },
  ]
};

window.MATERI = [
  {
    kelas: 6, jenjang: "SD",
    judul: "Energi Super",
    sub: "Algoritma Gerak untuk Jantung Sehat",
    ringkas: "Kebugaran jasmani yang digabung dengan koding: susun algoritma gerak, ukur denyut nadi, dan jaga jantung tetap sehat.",
    topik: ["Kebugaran", "Koding"],
    ikon: "jantung", warna: "#E8323F",
    link: "https://maswahid05.github.io/Mpikebugaranjasmanivi/"
  },
  {
    kelas: 7, jenjang: "SMP",
    judul: "Dari Keranjang ke Ring",
    sub: "Sejarah dan Gerak Dasar Bola Basket",
    ringkas: "Sejarah bola basket, menggiring, mengoper, menangkap, menembak BEEF, menguasai ruang, dan mencoba aturan yang adil.",
    topik: ["Bola Basket", "Gerak Dasar"],
    ikon: "basket", warna: "#1565C0",
    link: "https://maswahid05.github.io/Mpibasketkelas7/"
  },
  {
    kelas: 8, jenjang: "SMP",
    judul: "Satu Bola, Semua Bermain",
    sub: "Variasi Teknik dan Permainan Modifikasi",
    ringkas: "Operan atas kepala, crossover, lay up kanan dan kiri, merancang aturan sendiri, dan praktik RICE.",
    topik: ["Bola Basket", "Modifikasi"],
    ikon: "basket", warna: "#1E9B4C",
    link: "https://maswahid05.github.io/Mpibasketkelas8/"
  },
  {
    kelas: 9, jenjang: "SMP",
    judul: "Liga Basket Kelas",
    sub: "Bermain, Memimpin, dan Melayani",
    ringkas: "Liga 8 tim dengan peran kapten, wasit, skorer, jurnalis, dan petugas P3K. Susun strategi dan jaga fair play.",
    topik: ["Bola Basket", "Liga Kelas"],
    ikon: "piala", warna: "#C62828",
    link: "https://maswahid05.github.io/Mpibasketkelas9/"
  }
];
