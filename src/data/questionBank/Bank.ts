// Kumpulan soal-soal tentang Bank Sentral dan Bank Indonesia
const bankQuestions = [
  // --- DASAR-DASAR EKONOMI TERKAIT BANK SENTRAL ---
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Konsep lender of last resort dalam sistem perbankan merujuk pada:",
    options: {
      A: "Bank yang memberikan kredit dengan bunga tertinggi",
      B: "Bank yang menjadi sumber pendanaan terakhir bagi bank-bank yang mengalami kesulitan likuiditas",
      C: "Bank yang pertama kali didirikan dalam suatu negara",
      D: "Bank yang memberikan kredit kepada nasabah dengan risiko tertinggi",
      E: "Bank yang melayani kredit konsumtif",
    },
    correct: "B",
    explanation:
      "Lender of last resort adalah fungsi bank sentral sebagai pemberi pinjaman terakhir bagi bank-bank yang mengalami kesulitan likuiditas untuk mencegah krisis sistemik.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Dalam teori ekonomi moneter, money multiplier adalah:",
    options: {
      A: "Rasio antara uang kartal dan uang giral",
      B: "Perbandingan antara jumlah uang beredar dengan cadangan bank",
      C: "Rasio yang menunjukkan kemampuan sistem perbankan menciptakan uang",
      D: "Perbandingan antara inflasi dan deflasi",
      E: "Rasio antara tabungan dan investasi",
    },
    correct: "C",
    explanation:
      "Money multiplier menunjukkan berapa kali lipat sistem perbankan dapat menciptakan uang melalui proses pemberian kredit, dihitung sebagai 1/reserve ratio.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Fenomena crowding out effect dalam kebijakan fiskal terjadi ketika:",
    options: {
      A: "Pemerintah meningkatkan pengeluaran publik sehingga mengurangi investasi swasta",
      B: "Bank sentral menurunkan suku bunga acuan",
      C: "Terjadi peningkatan ekspor yang drastis",
      D: "Inflasi turun di bawah target",
      E: "Nilai tukar menguat secara signifikan",
    },
    correct: "A",
    explanation:
      "Crowding out effect terjadi ketika pengeluaran pemerintah yang meningkat menyebabkan naiknya suku bunga, sehingga mengurangi investasi swasta.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Dalam model IS-LM, kurva LM menunjukkan:",
    options: {
      A: "Keseimbangan di pasar barang dan jasa",
      B: "Keseimbangan di pasar uang",
      C: "Hubungan antara inflasi dan pengangguran",
      D: "Keseimbangan neraca pembayaran",
      E: "Hubungan antara konsumsi dan tabungan",
    },
    correct: "B",
    explanation:
      "Kurva LM (Liquidity-Money) menunjukkan kombinasi tingkat bunga dan pendapatan yang menyeimbangkan pasar uang (permintaan uang = penawaran uang).",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Konsep output gap dalam analisis makroekonomi adalah:",
    options: {
      A: "Selisih antara ekspor dan impor",
      B: "Perbedaan antara PDB aktual dan PDB potensial",
      C: "Rasio antara investasi dan tabungan",
      D: "Selisih antara pendapatan dan pengeluaran pemerintah",
      E: "Perbedaan antara inflasi aktual dan target inflasi",
    },
    correct: "B",
    explanation:
      "Output gap adalah selisih antara PDB aktual dengan PDB potensial, menunjukkan kapasitas ekonomi yang belum dimanfaatkan atau overheating.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Dalam teori kuantitas uang (MV=PY), variabel V mewakili:",
    options: {
      A: "Volume perdagangan",
      B: "Velocity (kecepatan peredaran uang)",
      C: "Variabel acak",
      D: "Nilai tukar",
      E: "Volatilitas harga",
    },
    correct: "B",
    explanation:
      "Dalam persamaan $MV=PY$, V adalah velocity atau kecepatan peredaran uang, menunjukkan berapa kali uang berpindah tangan dalam periode tertentu.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Phillips Curve menggambarkan hubungan antara:",
    options: {
      A: "Inflasi dan pengangguran",
      B: "Suku bunga dan investasi",
      C: "Nilai tukar dan neraca perdagangan",
      D: "Konsumsi dan tabungan",
      E: "Ekspor dan impor",
    },
    correct: "A",
    explanation:
      "Phillips Curve menggambarkan trade-off jangka pendek antara tingkat inflasi dan pengangguran dalam suatu ekonomi.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Efek wealth effect dalam transmisi kebijakan moneter terjadi melalui:",
    options: {
      A: "Perubahan suku bunga yang mempengaruhi konsumsi",
      B: "Perubahan harga aset yang mempengaruhi kekayaan dan konsumsi rumah tangga",
      C: "Perubahan nilai tukar yang mempengaruhi ekspor-impor",
      D: "Perubahan kredit perbankan yang mempengaruhi investasi",
      E: "Perubahan ekspektasi inflasi yang mempengaruhi upah",
    },
    correct: "B",
    explanation:
      "Wealth effect terjadi ketika perubahan kebijakan moneter mempengaruhi harga aset (saham, obligasi, properti) yang kemudian mempengaruhi konsumsi rumah tangga.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Dalam analisis kebijakan moneter, neutral interest rate adalah:",
    options: {
      A: "Suku bunga yang ditetapkan bank sentral",
      B: "Suku bunga yang tidak mempengaruhi inflasi",
      C: "Suku bunga yang menyeimbangkan tabungan dan investasi dalam jangka panjang",
      D: "Suku bunga rata-rata perbankan",
      E: "Suku bunga deposito tertinggi",
    },
    correct: "C",
    explanation:
      "Neutral interest rate adalah tingkat suku bunga yang menyeimbangkan tabungan dan investasi dalam jangka panjang tanpa menciptakan tekanan inflasi atau deflasi.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Konsep time inconsistency dalam kebijakan moneter merujuk pada:",
    options: {
      A: "Perbedaan waktu implementasi kebijakan",
      B: "Konflik antara tujuan jangka pendek dan jangka panjang pembuat kebijakan",
      C: "Keterlambatan efek kebijakan moneter",
      D: "Perbedaan zona waktu dalam implementasi kebijakan",
      E: "Inkonsistensi data ekonomi",
    },
    correct: "B",
    explanation:
      "Time inconsistency problem terjadi ketika pembuat kebijakan tergoda untuk menyimpang dari rencana kebijakan jangka panjang demi keuntungan jangka pendek.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Impossible Trinity atau Mundell-Fleming Trilemma menyatakan bahwa tidak mungkin mencapai secara bersamaan:",
    options: {
      A: "Stabilitas harga, pertumbuhan ekonomi, dan keseimbangan fiskal",
      B: "Kurs tetap, kebijakan moneter independen, dan mobilitas modal bebas",
      C: "Inflasi rendah, pengangguran rendah, dan defisit anggaran rendah",
      D: "Ekspor tinggi, impor rendah, dan investasi tinggi",
      E: "Konsumsi tinggi, tabungan tinggi, dan investasi tinggi",
    },
    correct: "B",
    explanation:
      "Impossible Trinity menyatakan bahwa suatu negara tidak dapat mencapai kurs tetap, kebijakan moneter independen, dan mobilitas modal bebas secara bersamaan.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Dalam transmisi kebijakan moneter, credit channel bekerja melalui:",
    options: {
      A: "Perubahan suku bunga deposito",
      B: "Perubahan ketersediaan kredit perbankan",
      C: "Perubahan nilai tukar",
      D: "Perubahan harga komoditas",
      E: "Perubahan belanja pemerintah",
    },
    correct: "B",
    explanation:
      "Credit channel bekerja melalui pengaruh kebijakan moneter terhadap ketersediaan dan kondisi kredit perbankan, yang selanjutnya mempengaruhi pengeluaran ekonomi.",
  },

  // --- PERAN & FUNGSI BANK SENTRAL ---
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Fungsi utama bank sentral dalam suatu perekonomian meliputi:",
    options: {
      A: "Memberikan kredit kepada masyarakat",
      B: "Mengelola kebijakan moneter, mengatur sistem pembayaran, dan menjaga stabilitas sistem keuangan",
      C: "Menghimpun dana masyarakat dalam bentuk tabungan",
      D: "Memberikan layanan perbankan komersial",
      E: "Mengatur perdagangan internasional",
    },
    correct: "B",
    explanation:
      "Tiga fungsi utama bank sentral modern adalah: kebijakan moneter, sistem pembayaran, dan stabilitas sistem keuangan.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Independensi bank sentral penting untuk:",
    options: {
      A: "Meningkatkan keuntungan bank sentral",
      B: "Menghindari tekanan politik dalam pengambilan keputusan moneter",
      C: "Mempermudah koordinasi dengan pemerintah",
      D: "Meningkatkan pendapatan negara",
      E: "Mempercepat pertumbuhan ekonomi",
    },
    correct: "B",
    explanation:
      "Independensi bank sentral penting untuk menghindari bias politik dalam kebijakan moneter dan menjaga kredibilitas komitmen terhadap stabilitas harga.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Dalam menjalankan fungsi sebagai banker's bank, bank sentral:",
    options: {
      A: "Memberikan layanan perbankan kepada masyarakat umum",
      B: "Menyediakan layanan kliring dan settlement antar bank",
      C: "Menghimpun dana dari masyarakat",
      D: "Memberikan kredit konsumen",
      E: "Mengatur suku bunga deposito",
    },
    correct: "B",
    explanation:
      "Sebagai banker's bank, bank sentral menyediakan layanan perbankan untuk bank-bank komersial, termasuk kliring dan settlement.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Fungsi bank sentral sebagai fiscal agent of government meliputi:",
    options: {
      A: "Mengatur pajak dan retribusi",
      B: "Mengelola rekening pemerintah dan membantu dalam penerbitan surat utang pemerintah",
      C: "Menetapkan anggaran belanja negara",
      D: "Mengaudit keuangan pemerintah",
      E: "Menentukan kebijakan fiskal",
    },
    correct: "B",
    explanation:
      "Sebagai fiscal agent, bank sentral mengelola rekening pemerintah, membantu penerbitan dan pengelolaan surat utang pemerintah.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Dalam menjalankan fungsi pengaturan dan pengawasan perbankan, bank sentral:",
    options: {
      A: "Hanya mengawasi bank pemerintah",
      B: "Menetapkan ketentuan prudensial dan melakukan supervisi terhadap bank",
      C: "Memberikan kredit kepada bank bermasalah",
      D: "Menentukan produk perbankan yang boleh dijual",
      E: "Menetapkan tarif layanan perbankan",
    },
    correct: "B",
    explanation:
      "Bank sentral menetapkan ketentuan prudensial (kehati-hatian) dan melakukan pengawasan untuk menjaga kesehatan sistem perbankan.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Peran bank sentral dalam menjaga stabilitas nilai tukar dilakukan melalui:",
    options: {
      A: "Intervensi di pasar valuta asing dan pengelolaan cadangan devisa",
      B: "Pengaturan tarif impor",
      C: "Penetapan kuota ekspor",
      D: "Pengaturan investasi asing",
      E: "Penentuan harga komoditas ekspor",
    },
    correct: "A",
    explanation:
      "Bank sentral menjaga stabilitas nilai tukar melalui intervensi di pasar valuta asing dan pengelolaan cadangan devisa yang memadai.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Dalam sistem pembayaran, peran bank sentral sebagai settlement agent adalah:",
    options: {
      A: "Memproses pembayaran eceran",
      B: "Menyediakan layanan final settlement untuk transaksi bernilai besar",
      C: "Mengatur biaya transaksi",
      D: "Menetapkan mata uang yang berlaku",
      E: "Mengawasi merchant",
    },
    correct: "B",
    explanation:
      "Sebagai settlement agent, bank sentral menyediakan final settlement untuk transaksi bernilai besar antar bank (RTGS).",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Fungsi lender of last resort bank sentral bertujuan untuk:",
    options: {
      A: "Memberikan keuntungan kepada bank",
      B: "Mencegah bank run dan menjaga kepercayaan publik terhadap sistem perbankan",
      C: "Meningkatkan profitabilitas perbankan",
      D: "Mengurangi kompetisi antar bank",
      E: "Mengatur suku bunga kredit",
    },
    correct: "B",
    explanation:
      "Fungsi lender of last resort bertujuan mencegah bank run dan menjaga kepercayaan publik terhadap sistem perbankan secara keseluruhan.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Dalam menjalankan fungsi penelitian ekonomi, bank sentral:",
    options: {
      A: "Hanya meneliti sektor perbankan",
      B: "Melakukan analisis kondisi ekonomi makro untuk mendukung pengambilan kebijakan",
      C: "Meneliti teknologi perbankan",
      D: "Mengaudit bank-bank komersial",
      E: "Meneliti perilaku konsumen",
    },
    correct: "B",
    explanation:
      "Bank sentral melakukan penelitian ekonomi makro untuk mendukung pengambilan keputusan kebijakan yang berbasis bukti empiris.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Peran bank sentral dalam pengembangan pasar keuangan meliputi:",
    options: {
      A: "Menjadi peserta aktif di pasar modal",
      B: "Menciptakan infrastruktur dan mengatur kerangka kerja pasar keuangan",
      C: "Memberikan kredit untuk investasi saham",
      D: "Menetapkan harga saham",
      E: "Mengatur dividen perusahaan",
    },
    correct: "B",
    explanation:
      "Bank sentral mengembangkan infrastruktur pasar keuangan dan menciptakan kerangka regulasi untuk pasar yang efisien dan stabil.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Dalam konteks stabilitas sistem keuangan, bank sentral berperan sebagai:",
    options: {
      A: "Regulator utama semua lembaga keuangan",
      B: "Koordinator kebijakan makroprudensial dan pengawas risiko sistemik",
      C: "Penyedia asuransi simpanan",
      D: "Pengelola dana pensiun",
      E: "Pengatur pasar modal",
    },
    correct: "B",
    explanation:
      "Dalam stabilitas sistem keuangan, bank sentral berperan sebagai koordinator kebijakan makroprudensial dan pengawas risiko sistemik.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Fungsi komunikasi kebijakan (forward guidance) bank sentral bertujuan untuk:",
    options: {
      A: "Meningkatkan popularitas bank sentral",
      B: "Memberikan sinyal dan mengelola ekspektasi pasar terhadap kebijakan masa depan",
      C: "Mempromosikan produk bank sentral",
      D: "Meningkatkan literasi keuangan masyarakat",
      E: "Mengumumkan keuntungan bank sentral",
    },
    correct: "B",
    explanation:
      "Forward guidance memberikan sinyal kebijakan masa depan untuk mengelola ekspektasi pasar dan meningkatkan efektivitas transmisi kebijakan.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Dalam era digital, peran bank sentral berkembang mencakup:",
    options: {
      A: "Menggantikan bank komersial",
      B: "Pengaturan teknologi finansial dan kemungkinan penerbitan mata uang digital bank sentral (CBDC)",
      C: "Menyediakan platform e-commerce",
      D: "Mengatur media sosial",
      E: "Mengelola big data komersial",
    },
    correct: "B",
    explanation:
      "Peran bank sentral berkembang mencakup pengaturan fintech dan eksplorasi central bank digital currency (CBDC).",
  },

  // --- UNDANG-UNDANG & DASAR HUKUM BANK INDONESIA ---
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Bank Indonesia didirikan berdasarkan:",
    options: {
      A: "UU No. 13 Tahun 1968",
      B: "UU No. 23 Tahun 1999 tentang Bank Indonesia",
      C: "UU No. 7 Tahun 1992 tentang Perbankan",
      D: "UU No. 24 Tahun 1999 tentang Lalu Lintas Devisa",
      E: "UU No. 3 Tahun 2004 tentang Perubahan UU Bank Indonesia",
    },
    correct: "B",
    explanation:
      "Bank Indonesia didirikan berdasarkan UU No. 23 Tahun 1999 tentang Bank Indonesia yang kemudian diubah dengan UU No. 6 Tahun 2009.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Tujuan Bank Indonesia menurut UU No. 23 Tahun 1999 jo. UU No. 6 Tahun 2009 adalah:",
    options: {
      A: "Mencapai pertumbuhan ekonomi yang tinggi",
      B: "Mencapai dan memelihara kestabilan nilai rupiah",
      C: "Meningkatkan kesejahteraan masyarakat",
      D: "Mengatur sistem perbankan nasional",
      E: "Mengelola cadangan devisa negara",
    },
    correct: "B",
    explanation:
      "Tujuan tunggal Bl adalah mencapai dan memelihara kestabilan nilai rupiah terhadap barang dan jasa serta mata uang negara lain.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Status Bank Indonesia menurut undang-undang adalah:",
    options: {
      A: "Badan Usaha Milik Negara",
      B: "Lembaga negara yang independen dalam melaksanakan tugas dan wewenangnya",
      C: "Bagian dari Kementerian Keuangan",
      D: "Perusahaan perseroan terbatas",
      E: "Lembaga pemerintah non-departemen",
    },
    correct: "B",
    explanation:
      "Bl adalah lembaga negara yang independen dalam melaksanakan tugas dan wewenangnya, bebas dari campur tangan pemerintah atau pihak lain.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Masa jabatan Gubernur Bank Indonesia menurut undang-undang adalah:",
    options: {
      A: "3 tahun dan dapat diperpanjang",
      B: "4 tahun dan dapat diperpanjang satu kali",
      C: "5 tahun dan dapat diperpanjang sekali",
      D: "6 tahun tanpa perpanjangan",
      E: "Seumur hidup",
    },
    correct: "C",
    explanation:
      "Gubernur Bl menjabat selama 5 tahun dan dapat diperpanjang untuk satu kali masa jabatan.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Dewan Gubernur Bank Indonesia terdiri dari:",
    options: {
      A: "7 orang dengan masa jabatan 5 tahun",
      B: "9 orang termasuk Gubernur dan Deputi Gubernur Senior",
      C: "5 orang termasuk Gubernur",
      D: "11 orang termasuk Gubernur",
      E: "8 orang dengan masa jabatan 4 tahun",
    },
    correct: "A",
    explanation:
      "Dewan Gubernur Bl terdiri dari 7 orang (Gubernur, Deputi Gubernur Senior, dan 5 Deputi Gubernur) dengan masa jabatan 5 tahun.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Tugas Bank Indonesia menurut undang-undang meliputi:",
    options: {
      A: "Hanya kebijakan moneter",
      B: "Kebijakan moneter, pengaturan dan pengawasan perbankan, serta sistem pembayaran",
      C: "Kebijakan moneter, sistem pembayaran, dan stabilitas sistem keuangan",
      D: "Hanya pengaturan sistem pembayaran",
      E: "Semua kebijakan ekonomi makro",
    },
    correct: "C",
    explanation:
      "Setelah amandemen UU 2009, tugas Bl mencakup kebijakan moneter, sistem pembayaran, dan stabilitas sistem keuangan.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Berdasarkan UU No. 6 Tahun 2009, fungsi pengawasan perbankan dialihkan kepada:",
    options: {
      A: "Kementerian Keuangan",
      B: "Otoritas Jasa Keuangan (OJK)",
      C: "Komisi Pemberantasan Korupsi",
      D: "Badan Pengawas Keuangan dan Pembangunan",
      E: "Lembaga Penjamin Simpanan",
    },
    correct: "B",
    explanation:
      "Berdasarkan UU No. 6 Tahun 2009, fungsi pengawasan perbankan dialihkan dari Bl ke Otoritas Jasa Keuangan (OJK).",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Akuntabilitas Bank Indonesia dilakukan melalui:",
    options: {
      A: "Laporan bulanan kepada Presiden",
      B: "Laporan triwulanan kepada DPR dan penyampaian laporan tahunan",
      C: "Laporan mingguan kepada Menteri Keuangan",
      D: "Laporan harian kepada publik",
      E: "Laporan semester kepada MPR",
    },
    correct: "B",
    explanation:
      "BI menyampaikan laporan triwulanan kepada DPR dan laporan tahunan sebagai bentuk akuntabilitas publik.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Larangan bagi Bank Indonesia menurut undang-undang meliputi:",
    options: {
      A: "Menetapkan suku bunga",
      B: "Memberikan kredit atau pembiayaan kepada pemerintah kecuali dalam kondisi darurat",
      C: "Melakukan penelitian ekonomi",
      D: "Mengatur sistem pembayaran",
      E: "Menerbitkan uang rupiah",
    },
    correct: "B",
    explanation:
      "Bl dilarang memberikan kredit kepada pemerintah kecuali dalam kondisi darurat keuangan mendesak yang ditetapkan dalam undang-undang.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Penyelesaian sengketa antara Bank Indonesia dengan pihak lain dilakukan melalui:",
    options: {
      A: "Peradilan umum",
      B: "Peradilan tata usaha negara atau arbitrase sesuai dengan perjanjian",
      C: "Peradilan agama",
      D: "Peradilan militer",
      E: "Mahkamah Konstitusi",
    },
    correct: "B",
    explanation:
      "Sengketa diselesaikan melalui peradilan tata usaha negara untuk sengketa administratif atau arbitrase sesuai perjanjian.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Modal Bank Indonesia menurut undang-undang ditetapkan sebesar:",
    options: {
      A: "Rp 1 triliun",
      B: "Rp 2 triliun",
      C: "Minimum Rp 2 triliun",
      D: "Rp 5 triliun",
      E: "Tidak ada ketentuan minimum",
    },
    correct: "C",
    explanation:
      "Modal Bl ditetapkan minimum Rp 2 triliun dan dapat ditambah sesuai kebutuhan.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Sanksi administratif yang dapat dikenakan kepada pejabat Bank Indonesia meliputi:",
    options: {
      A: "Hanya teguran tertulis",
      B: "Teguran tertulis, penurunan jabatan, atau pemberhentian",
      C: "Hanya pemberhentian",
      D: "Denda administratif",
      E: "Kurungan administratif",
    },
    correct: "B",
    explanation:
      "Sanksi administratif meliputi teguran tertulis, penurunan jabatan, hingga pemberhentian sesuai dengan pelanggaran yang dilakukan.",
  },

  // --- STRUKTUR ORGANISASI & TATA KELOLA BANK INDONESIA ---
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Organ tertinggi dalam struktur organisasi Bank Indonesia adalah:",
    options: {
      A: "Gubernur Bank Indonesia",
      B: "Dewan Gubernur",
      C: "Deputi Gubernur Senior",
      D: "Dewan Pengawas",
      E: "Rapat Dewan Gubernur",
    },
    correct: "B",
    explanation:
      "Dewan Gubernur adalah organ tertinggi Bl yang terdiri dari Gubernur, Deputi Gubernur Senior, dan 5 Deputi Gubernur.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Jumlah Deputi Gubernur Bank Indonesia saat ini adalah:",
    options: {
      A: "3 orang",
      B: "4 orang",
      C: "5 orang",
      D: "6 orang",
      E: "7 orang",
    },
    correct: "C",
    explanation:
      "Bl memiliki 5 Deputi Gubernur dan 1 Deputi Gubernur Senior, total 6 deputi gubernur.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Dewan Pengawas Bank Indonesia memiliki fungsi:",
    options: {
      A: "Menentukan kebijakan moneter",
      B: "Mengawasi pelaksanaan tugas dan wewenang Bank Indonesia",
      C: "Mengatur sistem pembayaran",
      D: "Mengelola cadangan devisa",
      E: "Menetapkan suku bunga acuan",
    },
    correct: "B",
    explanation:
      "Dewan Pengawas mengawasi pelaksanaan tugas dan wewenang Bl serta memberikan nasihat kepada Dewan Gubernur.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Rapat Dewan Gubernur (RDG) Bank Indonesia dilaksanakan:",
    options: {
      A: "Setiap hari",
      B: "Mingguan",
      C: "Bulanan untuk membahas kebijakan moneter",
      D: "Triwulanan",
      E: "Tahunan",
    },
    correct: "C",
    explanation:
      "RDG dilaksanakan bulanan untuk membahas dan menetapkan kebijakan moneter dan kebijakan strategis lainnya.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Masa jabatan anggota Dewan Pengawas Bank Indonesia adalah:",
    options: {
      A: "3 tahun",
      B: "4 tahun",
      C: "5 tahun",
      D: "6 tahun",
      E: "Sama dengan masa jabatan Gubernur",
    },
    correct: "C",
    explanation:
      "Anggota Dewan Pengawas menjabat selama 5 tahun dan dapat diperpanjang satu kali.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Dalam struktur organisasi Bank Indonesia, terdapat berapa Kantor Perwakilan Dalam Negeri (KPwDN):",
    options: {
      A: "24 kantor",
      B: "32 kantor",
      C: "37 kantor",
      D: "45 kantor",
      E: "50 kantor",
    },
    correct: "C",
    explanation:
      "Bl memiliki 37 Kantor Perwakilan Dalam Negeri (KPwDN) yang tersebar di seluruh Indonesia.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Komite Audit Internal Bank Indonesia bertugas:",
    options: {
      A: "Melakukan audit eksternal",
      B: "Mengawasi efektivitas pengendalian internal dan proses audit internal",
      C: "Menentukan kebijakan akuntansi",
      D: "Menyusun laporan keuangan",
      E: "Mengatur sistem informasi",
    },
    correct: "B",
    explanation:
      "Komite Audit Internal mengawasi efektivitas sistem pengendalian internal dan memastikan independensi fungsi audit internal.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Sekretariat Dewan Gubernur memiliki fungsi:",
    options: {
      A: "Menentukan kebijakan strategis",
      B: "Memberikan dukungan administratif dan teknis kepada Dewan Gubernur",
      C: "Mengawasi implementasi kebijakan",
      D: "Melakukan hubungan internasional",
      E: "Mengelola sumber daya manusia",
    },
    correct: "B",
    explanation:
      "Sekretariat Dewan Gubernur memberikan dukungan administratif, teknis, dan logistik untuk Dewan Gubernur dan RDG.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Dalam tata kelola Bank Indonesia, prinsip transparency diwujudkan melalui:",
    options: {
      A: "Rapat tertutup Dewan Gubernur",
      B: "Publikasi laporan kebijakan dan komunikasi publik yang efektif",
      C: "Kerahasiaan seluruh dokumen internal",
      D: "Pembatasan akses informasi publik",
      E: "Komunikasi hanya dengan pemerintah",
    },
    correct: "B",
    explanation:
      "Transparansi diwujudkan melalui publikasi laporan kebijakan, press release, dan komunikasi publik yang terbuka.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Sistem remunerasi pejabat Bank Indonesia diatur berdasarkan:",
    options: {
      A: "Standar PNS",
      B: "Peraturan internal Bank Indonesia dengan persetujuan DPR",
      C: "Keputusan Menteri Keuangan",
      D: "Peraturan Presiden",
      E: "Keputusan DPR",
    },
    correct: "B",
    explanation:
      "Sistem remunerasi diatur dalam peraturan internal Bl dengan persetujuan DPR sesuai amanat undang-undang.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Dalam struktur organisasi BI, Departemen Komunikasi bertanggung jawab untuk:",
    options: {
      A: "Sistem informasi internal",
      B: "Strategi komunikasi publik dan manajemen krisis komunikasi",
      C: "Hubungan dengan bank komersial",
      D: "Pelatihan pegawai",
      E: "Penelitian ekonomi",
    },
    correct: "B",
    explanation:
      "Departemen Komunikasi mengelola strategi komunikasi publik, hubungan media, dan manajemen krisis komunikasi.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Komite Stabilitas Sistem Keuangan dipimpin oleh:",
    options: {
      A: "Menteri Keuangan",
      B: "Gubernur Bank Indonesia",
      C: "Ketua OJK",
      D: "Ketua LPS",
      E: "Bergiliran setiap tahun",
    },
    correct: "A",
    explanation:
      "Komite Stabilitas Sistem Keuangan dipimpin oleh Menteri Keuangan dengan anggota dari BI, OJK, dan LPS.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Mekanisme pengambilan keputusan dalam Rapat Dewan Gubernur menggunakan prinsip:",
    options: {
      A: "Suara mayoritas mutlak",
      B: "Konsensus, dan jika tidak tercapai maka Gubernur memiliki hak suara menentukan",
      C: "Suara terbanyak",
      D: "Unanimitas",
      E: "Voting tertutup",
    },
    correct: "B",
    explanation:
      "RDG menggunakan prinsip konsensus, namun jika tidak tercapai, Gubernur memiliki hak veto dan suara menentukan.",
  },

  // --- PRODUK & DOKUMEN STRATEGIS BANK INDONESIA ---
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Dokumen utama yang memuat strategi jangka menengah Bank Indonesia adalah:",
    options: {
      A: "Laporan Tahunan Bank Indonesia",
      B: "Rencana Strategis (Renstra) Bank Indonesia",
      C: "Laporan Kebijakan Moneter",
      D: "Kajian Ekonomi Regional",
      E: "Laporan Stabilitas Keuangan",
    },
    correct: "B",
    explanation:
      "Rencana Strategis (Renstra) Bank Indonesia memuat visi, misi, dan strategi jangka menengah Bl dalam mencapai tujuan organisasi selama 5 tahun.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "“Laporan Perekonomian Indonesia” yang diterbitkan BI berisi:",
    options: {
      A: "Hanya data statistik ekonomi",
      B: "Analisis komprehensif kondisi perekonomian dan outlook kebijakan",
      C: "Laporan keuangan Bank Indonesia",
      D: "Data perbankan nasional",
      E: "Proyeksi anggaran negara",
    },
    correct: "B",
    explanation:
      "Laporan Perekonomian Indonesia memberikan analisis komprehensif kondisi ekonomi terkini dan outlook kebijakan untuk periode mendatang.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Dokumen “Financial Stability Review” Bank Indonesia memuat:",
    options: {
      A: "Laporan audit keuangan Bl",
      B: "Analisis risiko dan stabilitas sistem keuangan Indonesia",
      C: "Evaluasi kinerja perbankan",
      D: "Laporan hasil pengawasan bank",
      E: "Strategi kebijakan moneter",
    },
    correct: "B",
    explanation:
      "Financial Stability Review berisi analisis mendalam tentang risiko-risiko yang dapat mengancam stabilitas sistem keuangan Indonesia.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "“Indonesia Banking Statistics” merupakan publikasi Bl yang berisi:",
    options: {
      A: "Teori ekonomi perbankan",
      B: "Data dan statistik industri perbankan Indonesia",
      C: "Regulasi perbankan terbaru",
      D: "Analisis kebijakan fiskal",
      E: "Laporan merger dan akuisisi bank",
    },
    correct: "B",
    explanation:
      "Indonesia Banking Statistics menyajikan data statistik lengkap industri perbankan Indonesia termasuk aset, kredit, DPK, dan indikator kinerja.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Dokumen “Transmission Mechanism of Monetary Policy” menjelaskan:",
    options: {
      A: "Sejarah kebijakan moneter Indonesia",
      B: "Mekanisme bagaimana kebijakan moneter mempengaruhi ekonomi riil",
      C: "Prosedur operasional pasar terbuka",
      D: "Sistem pembayaran nasional",
      E: "Struktur organisasi Bank Indonesia",
    },
    correct: "B",
    explanation:
      "Dokumen ini menjelaskan jalur-jalur transmisi kebijakan moneter BI ke ekonomi riil melalui suku bunga, nilai tukar, kredit, dan ekspektasi.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "“Survey Konsumen Bank Indonesia” bertujuan untuk:",
    options: {
      A: "Menilai kepuasan nasabah bank",
      B: "Mengukur ekspektasi dan persepsi masyarakat terhadap kondisi ekonomi",
      C: "Evaluasi produk perbankan",
      D: "Survei tingkat literasi keuangan",
      E: "Penelitian perilaku konsumen",
    },
    correct: "B",
    explanation:
      "Survey Konsumen mengukur persepsi dan ekspektasi masyarakat terhadap kondisi ekonomi saat ini dan masa depan sebagai input kebijakan.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Publikasi “Economic Survey” Bank Indonesia memuat:",
    options: {
      A: "Data ekonomi internasional",
      B: "Analisis mendalam sektor-sektor ekonomi tertentu",
      C: "Laporan neraca pembayaran",
      D: "Statistik moneter",
      E: "Evaluasi program pemerintah",
    },
    correct: "B",
    explanation:
      "Economic Survey memberikan analisis mendalam pada sektor ekonomi tertentu seperti pertanian, manufaktur, atau jasa.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "“Indonesia Payment System Blueprint” adalah dokumen yang:",
    options: {
      A: "Mengatur tarif sistem pembayaran",
      B: "Menetapkan visi dan roadmap pengembangan sistem pembayaran Indonesia",
      C: "Berisi data transaksi pembayaran",
      D: "Mengatur perizinan sistem pembayaran",
      E: "Evaluasi teknologi pembayaran",
    },
    correct: "B",
    explanation:
      "Blueprint sistem pembayaran menetapkan visi, misi, dan roadmap pengembangan sistem pembayaran Indonesia untuk 10-15 tahun.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Laporan “Regional Economic Study” BI bertujuan:",
    options: {
      A: "Membandingkan ekonomi regional ASEAN",
      B: "Menganalisis kondisi perekonomian regional di Indonesia",
      C: "Evaluasi kantor perwakilan BI",
      D: "Studi perdagangan internasional",
      E: "Analisis investasi asing di daerah",
    },
    correct: "B",
    explanation:
      "Regional Economic Study menganalisis kondisi perekonomian di berbagai provinsi/wilayah Indonesia untuk mendukung kebijakan regional.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Dokumen “Central Bank Digital Currency Exploration” memuat:",
    options: {
      A: "Regulasi cryptocurrency",
      B: "Kajian kemungkinan penerbitan rupiah digital oleh Bank Indonesia",
      C: "Analisis fintech lending",
      D: "Evaluasi sistem pembayaran digital",
      E: "Studi blockchain technology",
    },
    correct: "B",
    explanation:
      "Dokumen ini memuat kajian kemungkinan, manfaat, risiko, dan desain potensial rupiah digital yang diterbitkan Bank Indonesia.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "“Indonesia Bond Pricing Agency (IBPA) Report” berisi:",
    options: {
      A: "Analisis pasar saham",
      B: "Informasi harga dan yield obligasi pemerintah dan korporasi",
      C: "Laporan kredit perbankan",
      D: "Evaluasi risiko investasi",
      E: "Data foreign exchange",
    },
    correct: "B",
    explanation:
      "IBPA Report menyediakan informasi harga pasar dan yield berbagai instrumen obligasi sebagai benchmark pasar.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Publikasi “Macro Stress Test” Bank Indonesia menjelaskan:",
    options: {
      A: "Tes psikologi pegawai Bl",
      B: "Simulasi dampak shock ekonomi terhadap stabilitas sistem keuangan",
      C: "Evaluasi sistem teknologi Bl",
      D: "Tes ketahanan cyber security",
      E: "Analisis beban kerja organisasi",
    },
    correct: "B",
    explanation:
      "Macro Stress Test mensimulasikan dampak berbagai shock ekonomi terhadap kesehatan dan stabilitas sistem keuangan Indonesia.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Blueprint Sistem Pembayaran Indonesia 2025 memiliki visi:",
    options: {
      A: "Menjadi sistem pembayaran terbesar di ASEAN",
      B: "Mewujudkan sistem pembayaran yang efisien, lancar, aman, dan handal",
      C: "Menghapus uang tunai sepenuhnya",
      D: "Mengintegrasikan dengan sistem global",
      E: "Monopoli sistem pembayaran nasional",
    },
    correct: "B",
    explanation:
      "Blueprint SPI 2025 memiliki visi mewujudkan sistem pembayaran yang efisien, lancar, aman, dan handal untuk mendukung perekonomian nasional.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Blueprint Arah Pengembangan Ekonomi Syariah Indonesia memuat strategi:",
    options: {
      A: "Hanya pengembangan perbankan syariah",
      B: "Pengembangan ekosistem ekonomi dan keuangan syariah secara komprehensif",
      C: "Konversi bank konvensional ke syariah",
      D: "Penerapan hukum syariah dalam ekonomi",
      E: "Pembentukan bank sentral syariah",
    },
    correct: "B",
    explanation:
      "Blueprint ini mencakup pengembangan komprehensif seluruh aspek ekonomi syariah mulai dari perbankan, pasar modal, hingga ekonomi riil.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Indonesian Payment System Blueprint (IPSB) 2025 mengidentifikasi komponen utama:",
    options: {
      A: "Hanya RTGS dan kliring",
      B: "Infrastruktur, instrumen, kelembagaan, dan pengaturan pembayaran",
      C: "Bank dan lembaga keuangan",
      D: "Teknologi dan regulasi saja",
      E: "Pemerintah dan swasta",
    },
    correct: "B",
    explanation:
      "IPSB mengidentifikasi empat komponen utama: infrastruktur, instrumen, kelembagaan, dan pengaturan sebagai pilar sistem pembayaran.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Laku Pandai (Layanan Keuangan Tanpa Kantor dalam rangka Keuangan Inklusif) bertujuan:",
    options: {
      A: "Membuka cabang bank di desa",
      B: "Menyediakan layanan keuangan dasar kepada masyarakat yang belum terjangkau",
      C: "Meningkatkan keuntungan bank",
      D: "Mengurangi biaya operasional",
      E: "Digital transformation perbankan",
    },
    correct: "B",
    explanation:
      "Laku Pandai menyediakan layanan keuangan dasar kepada masyarakat di daerah terpencil yang belum memiliki akses ke layanan perbankan formal.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Strategi Nasional Literasi Keuangan Indonesia (SNLKI) yang didukung Bl menargetkan:",
    options: {
      A: "Semua masyarakat berpendidikan S1",
      B: "Peningkatan tingkat literasi dan inklusi keuangan masyarakat",
      C: "Pelatihan untuk banker saja",
      D: "Edukasi investasi saham",
      E: "Kurikulum ekonomi di sekolah",
    },
    correct: "B",
    explanation:
      "SNLKI bertujuan meningkatkan pemahaman masyarakat tentang produk dan layanan keuangan serta mendorong penggunaan layanan keuangan formal.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Pemberdayaan Ekonomi Pesantren (PEP) Bank Indonesia fokus pada:",
    options: {
      A: "Pembangunan infrastruktur pesantren",
      B: "Pengembangan ekonomi berbasis pesantren melalui keuangan syariah",
      C: "Beasiswa santri",
      D: "Pembangunan masjid",
      E: "Pelatihan ustadz",
    },
    correct: "B",
    explanation:
      "PEP mengintegrasikan potensi ekonomi pesantren dengan instrumen keuangan syariah untuk pengembangan ekonomi berbasis nilai-nilai Islam.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Blueprint Pengembangan Pasar Keuangan Syariah Indonesia bertujuan:",
    options: {
      A: "Menggantikan pasar konvensional",
      B: "Mengembangkan pasar keuangan syariah yang dalam dan likuid",
      C: "Meningkatkan harga saham syariah",
      D: "Monopoli instrumen syariah",
      E: "Integrasi dengan pasar global",
    },
    correct: "B",
    explanation:
      "Blueprint ini mengembangkan pasar keuangan syariah yang memiliki kedalaman dan likuiditas memadai untuk mendukung ekonomi syariah.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Tim Koordinasi Pengembangan Ekonomi dan Keuangan Syariah (TKPEKS) melibatkan:",
    options: {
      A: "Hanya Bank Indonesia",
      B: "Koordinasi lintas kementerian dan lembaga untuk pengembangan ekosistem syariah",
      C: "Bank syariah saja",
      D: "Ulama dan tokoh agama",
      E: "Organisasi Islam",
    },
    correct: "B",
    explanation:
      "TKPEKS melibatkan koordinasi lintas sektor untuk menciptakan ekosistem ekonomi syariah yang terintegrasi dan berkelanjutan.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Digital Banking Roadmap Indonesia 2020-2025 mengamanatkan:",
    options: {
      A: "Penutupan kantor cabang fisik",
      B: "Transformasi digital perbankan untuk meningkatkan layanan dan efisiensi",
      C: "Penggantian semua teller dengan mesin",
      D: "Eliminasi produk konvensional",
      E: "Adopsi cryptocurrency",
    },
    correct: "B",
    explanation:
      "Digital Banking Roadmap mendorong transformasi digital perbankan untuk meningkatkan layanan nasabah dan efisiensi operasional.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Strategi Pengembangan UMKM Bank Indonesia melalui:",
    options: {
      A: "Pemberian kredit langsung",
      B: "Penguatan akses pembiayaan, pendampingan, dan pengembangan pasar",
      C: "Subsidi modal usaha",
      D: "Pelatihan keterampilan saja",
      E: "Bantuan teknologi",
    },
    correct: "B",
    explanation:
      "Strategi komprehensif meliputi penguatan akses pembiayaan, pendampingan teknis, dan pengembangan pasar untuk UMKM.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Hybrid (Halal Value Chain, Integrity, dan Branding) Bl bertujuan:",
    options: {
      A: "Sertifikasi halal produk",
      B: "Pengembangan value chain halal terintegrasi untuk daya saing ekonomi syariah",
      C: "Pemasaran produk religi",
      D: "Standardisasi industri halal",
      E: "Ekspor produk halal",
    },
    correct: "B",
    explanation:
      "Program Hybrid mengintegrasikan value chain halal dari hulu ke hilir untuk meningkatkan daya saing produk halal Indonesia.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Blueprint Pendalaman Pasar Keuangan Indonesia memuat strategi:",
    options: {
      A: "Meningkatkan jumlah instrumen",
      B: "Mengembangkan pasar keuangan yang dalam, likuid, dan efisien",
      C: "Memperbesar kapitalisasi pasar",
      D: "Integrasi regional",
      E: "Privatisasi BUMN",
    },
    correct: "B",
    explanation:
      "Blueprint ini mengembangkan pasar keuangan domestik yang dalam dan likuid untuk mengurangi ketergantungan pada pembiayaan luar negeri.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Program Indonesia Banking Architecture (API) bertujuan:",
    options: {
      A: "Desain gedung bank",
      B: "Memperkuat struktur perbankan nasional yang sehat dan efisien",
      C: "Standardisasi teknologi",
      D: "Merger bank kecil",
      E: "Konsolidasi aset",
    },
    correct: "B",
    explanation:
      "API bertujuan memperkuat struktur perbankan nasional melalui konsolidasi dan peningkatan efisiensi untuk daya saing global.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Inisiatif Wakaf Produktif Bank Indonesia mengembangkan:",
    options: {
      A: "Sertifikat wakaf tunai",
      B: "Model wakaf yang produktif untuk pembangunan ekonomi umat",
      C: "Pengelolaan tanah wakaf",
      D: "Fundraising wakaf",
      E: "Audit wakaf",
    },
    correct: "B",
    explanation:
      "Inisiatif ini mengembangkan model wakaf yang menghasilkan manfaat ekonomi berkelanjutan untuk kesejahteraan umat.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Indonesia Islamic Economic Masterplan (MEKSI) merupakan:",
    options: {
      A: "Rencana bisnis bank syariah",
      B: "Roadmap pengembangan ekonomi syariah Indonesia jangka panjang",
      C: "Kurikulum ekonomi Islam",
      D: "Sertifikasi ekonom syariah",
      E: "Standardisasi produk syariah",
    },
    correct: "B",
    explanation:
      "MEKSI adalah roadmap jangka panjang pengembangan ekonomi syariah Indonesia sebagai kekuatan ekonomi global.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Blueprint Pengembangan Pasar Modal Syariah Indonesia bertujuan:",
    options: {
      A: "Meningkatkan harga sukuk",
      B: "Mengembangkan pasar modal syariah yang kompetitif dan sustainable",
      C: "Konversi emiten ke syariah",
      D: "Merger bursa syariah",
      E: "Eliminasi riba",
    },
    correct: "B",
    explanation:
      "Blueprint mengembangkan pasar modal syariah yang mampu bersaing dan berkelanjutan untuk mendukung pembiayaan investasi halal.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Gerakan Bangga Buatan Indonesia (GBBI) yang didukung Bl:",
    options: {
      A: "Kampanye nasionalisme",
      B: "Mendorong penggunaan produk dalam negeri untuk memperkuat ekonomi",
      C: "Proteksi industri lokal",
      D: "Pembatasan impor",
      E: "Subsidi ekspor",
    },
    correct: "B",
    explanation:
      "GBBI mendorong preferensi masyarakat terhadap produk dalam negeri untuk memperkuat daya beli domestik dan industri lokal.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Strategi Pendalaman Pasar Keuangan Syariah meliputi:",
    options: {
      A: "Hanya pengembangan sukuk",
      B: "Diversifikasi produk, pendalaman pasar, dan penguatan infrastruktur",
      C: "Peningkatan likuiditas",
      D: "Standardisasi harga",
      E: "Integrasi sistem",
    },
    correct: "B",
    explanation:
      "Strategi komprehensif meliputi diversifikasi instrumen, pendalaman pasar, dan penguatan infrastruktur pendukung.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Blueprint Pengembangan Fintech Syariah Indonesia memfokuskan pada:",
    options: {
      A: "Teknologi blockchain saja",
      B: "Pengembangan ekosistem fintech syariah yang inovatif dan compliant",
      C: "Aplikasi mobile banking",
      D: "Platform peer-to-peer",
      E: "Digital wallet syariah",
    },
    correct: "B",
    explanation:
      "Blueprint mengembangkan ekosistem fintech syariah yang inovatif namun tetap mematuhi prinsip-prinsip syariah.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Program Indonesia Sharia Economic Festival (ISEF) bertujuan:",
    options: {
      A: "Kompetisi ekonomi syariah",
      B: "Promosi dan edukasi ekonomi syariah kepada masyarakat luas",
      C: "Pameran produk halal",
      D: "Konferensi ulama",
      E: "Launching produk bank",
    },
    correct: "B",
    explanation:
      "ISEF merupakan platform edukasi dan promosi untuk meningkatkan awareness masyarakat tentang ekonomi syariah.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Inisiatif Central Bank Digital Currency (CBDC) Indonesia dalam tahap:",
    options: {
      A: "Implementasi penuh",
      B: "Research dan exploration untuk kemungkinan pengembangan masa depan",
      C: "Pilot project terbatas",
      D: "Penghentian kajian",
      E: "Kerjasama internasional",
    },
    correct: "B",
    explanation:
      "BI masih dalam tahap penelitian dan eksplorasi kemungkinan pengembangan CBDC dengan mempertimbangkan berbagai aspek.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Smart City dan Smart Region yang didukung Bank Indonesia meliputi:",
    options: {
      A: "Pembangunan infrastruktur IT",
      B: "Integrasi sistem pembayaran digital dalam pengembangan kota cerdas",
      C: "Pemerintahan elektronik",
      D: "Internet gratis",
      E: "Digitalisasi APBD",
    },
    correct: "B",
    explanation:
      "Program ini mengintegrasikan sistem pembayaran digital dalam konsep smart city untuk efisiensi layanan publik.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Blueprint Pengembangan Ekonomi Digital Indonesia memuat:",
    options: {
      A: "Rencana pembangunan data center",
      B: "Strategi komprehensif transformasi ekonomi digital nasional",
      C: "Regulasi e-commerce",
      D: "Infrastruktur telekomunikasi",
      E: "Aplikasi pemerintah",
    },
    correct: "B",
    explanation:
      "Blueprint memuat strategi transformasi menyeluruh ekonomi Indonesia menuju ekonomi digital yang berdaya saing.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Program Indonesia Payment System Blueprint 2030 memiliki visi:",
    options: {
      A: "Dominasi regional",
      B: "Sistem pembayaran Indonesia yang world-class dan mendukung ekonomi digital",
      C: "Cashless society total",
      D: "Integrasi ASEAN",
      E: "Teknologi terdepan dunia",
    },
    correct: "B",
    explanation:
      "Visi jangka panjang menciptakan sistem pembayaran berkelas dunia yang mendukung pertumbuhan ekonomi digital nasional.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Inisiatif Green Finance Bank Indonesia bertujuan:",
    options: {
      A: "Mengurangi penggunaan kertas",
      B: "Mendorong pembiayaan untuk pembangunan berkelanjutan dan ramah lingkungan",
      C: "Penghijauan kantor Bl",
      D: "Investasi energi terbarukan",
      E: "Carbon trading",
    },
    correct: "B",
    explanation:
      "Inisiatif ini mendorong alokasi pembiayaan untuk proyek-proyek yang mendukung pembangunan berkelanjutan dan perlindungan lingkungan.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Tingkat inflasi target Bank Indonesia saat ini adalah:",
    options: {
      A: "2% ± 1%",
      B: "3% ± 1%",
      C: "4% ± 1%",
      D: "5% ± 1%",
      E: "6% ± 1%",
    },
    correct: "B",
    explanation:
      "Target inflasi Indonesia saat ini adalah 3% dengan deviasi ±1%, sehingga berada dalam kisaran 2-4%.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "BI Checking adalah layanan Bank Indonesia untuk:",
    options: {
      A: "Mengecek keaslian uang",
      B: "Informasi riwayat kredit nasabah",
      C: "Verifikasi identitas nasabah",
      D: "Monitoring transaksi mencurigakan",
      E: "Audit internal bank",
    },
    correct: "B",
    explanation:
      "BI Checking menyediakan informasi debitor yang dapat diakses bank untuk penilaian risiko kredit.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Survei Penjualan Eceran (SPE) dilakukan Bank Indonesia untuk:",
    options: {
      A: "Memantau inflasi",
      B: "Mengukur pertumbuhan ekonomi",
      C: "Menilai kondisi sektor riil",
      D: "Semua jawaban benar",
      E: "Hanya a dan c yang benar",
    },
    correct: "D",
    explanation:
      "SPE digunakan untuk memantau perkembangan harga (inflasi), aktivitas ekonomi, dan kondisi sektor riil.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Indonesian Payment System Blueprint (IPSB) 2025 memiliki 6 pilar utama, salah satunya adalah:",
    options: {
      A: "Infrastruktur yang andal",
      B: "Instrumen yang beragam",
      C: "Institusi yang kokoh",
      D: "Semua jawaban benar",
      E: "Hanya a dan b yang benar",
    },
    correct: "D",
    explanation:
      "IPSB 2025 memiliki 6 pilar: infrastruktur andal, instrumen beragam, institusi kokoh, regulasi memadai, SDM kompeten, dan standardisasi.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Sertifikat Deposito Bank Indonesia (SDBI) adalah:",
    options: {
      A: "Instrumen kebijakan moneter",
      B: "Surat berharga yang diterbitkan Bank Indonesia",
      C: "Sarana sterilisasi moneter",
      D: "Semua jawaban benar",
      E: "Hanya a dan c yang benar",
    },
    correct: "D",
    explanation:
      "SDBI adalah instrumen kebijakan moneter berupa surat berharga untuk sterilisasi dan penyerapan likuiditas.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Rasio Loan to Deposit Ratio (LDR) yang sehat menurut Bank Indonesia adalah:",
    options: {
      A: "70% - 85%",
      B: "78% - 92%",
      C: "80% - 90%",
      D: "85% - 95%",
      E: "90% - 100%",
    },
    correct: "B",
    explanation:
      "Bank Indonesia menetapkan batas bawah LDR 78% dan batas atas 92% untuk menjaga fungsi intermediasi perbankan.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Sistem Monitoring Pasar Uang (SMPU) berfungsi untuk:",
    options: {
      A: "Memantau perkembangan suku bunga pasar uang",
      B: "Menganalisis likuiditas perbankan",
      C: "Mendeteksi anomali pasar",
      D: "Semua jawaban benar",
      E: "Hanya a dan b yang benar",
    },
    correct: "D",
    explanation:
      "SMPU digunakan untuk monitoring suku bunga pasar uang, analisis likuiditas, dan deteksi anomali pasar.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Digital Financial Services (DFS) yang diatur Bank Indonesia meliputi:",
    options: {
      A: "Electronic money saja",
      B: "Mobile payment saja",
      C: "Electronic money, mobile payment, dan digital banking",
      D: "Cryptocurrency",
      E: "Peer-to-peer lending saja",
    },
    correct: "C",
    explanation:
      "DFS mencakup berbagai layanan keuangan digital yang diatur Bank Indonesia untuk memastikan keamanan dan perlindungan konsumen.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Peraturan Bank Indonesia tentang Kewajiban Penggunaan Rupiah (PBI No. 17/3/PBI/2015) mengatur:",
    options: {
      A: "Semua transaksi harus menggunakan Rupiah",
      B: "Transaksi domestik wajib menggunakan Rupiah dengan pengecualian tertentu",
      C: "Hanya transaksi pemerintah yang wajib Rupiah",
      D: "Transaksi ekspor-impor harus Rupiah",
      E: "Tidak ada kewajiban penggunaan Rupiah",
    },
    correct: "B",
    explanation:
      "PBI mengatur kewajiban penggunaan Rupiah dalam transaksi domestik dengan pengecualian untuk transaksi tertentu.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Dalam rangka menjaga stabilitas makro ekonomi, Bank Indonesia menerapkan flexible inflation targeting yang berarti:",
    options: {
      A: "Target inflasi dapat berubah setiap saat",
      B: "Mempertimbangkan kondisi ekonomi dalam pencapaian target inflasi",
      C: "Tidak memiliki target inflasi yang pasti",
      D: "Target inflasi hanya berlaku jangka pendek",
      E: "Mengutamakan pertumbuhan ekonomi daripada inflasi",
    },
    correct: "B",
    explanation:
      "Flexible ITF memungkinkan Bank Indonesia mempertimbangkan kondisi ekonomi dan menghindari excessive volatility dalam mencapai target inflasi.",
  },

  // --- KEBIJAKAN MONETER ---
  {
    type: "Kebijakan Moneter",
    question: "Kerangka kebijakan moneter Bank Indonesia saat ini menggunakan:",
    options: {
      A: "Money targeting",
      B: "Inflation Targeting Framework (ITF)",
      C: "Exchange rate targeting",
      D: "Multiple targeting",
      E: "Fiscal dominance",
    },
    correct: "B",
    explanation:
      "Sejak 2005, BI mengadopsi Inflation Targeting Framework dengan target inflasi sebagai nominal anchor utama kebijakan moneter.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Target inflasi Indonesia yang ditetapkan pemerintah untuk 2024 adalah:",
    options: {
      A: "2,0% ± 1%",
      B: "2,5% ± 1%",
      C: "3,0% ± 1%",
      D: "3,5% ± 1%",
      E: "4,0% ± 1%",
    },
    correct: "C",
    explanation:
      "Pemerintah menetapkan target inflasi 2024 sebesar 3,0% ± 1% sebagai sasaran yang harus dicapai Bank Indonesia.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Instrumen utama kebijakan moneter Bank Indonesia adalah:",
    options: {
      A: "Reserve requirement",
      B: "BI 7-Day Reverse Repo Rate (BI7DRR)",
      C: "Operasi pasar terbuka",
      D: "Fasilitas diskonto",
      E: "Moral suasion",
    },
    correct: "B",
    explanation:
      "BI 7-Day Reverse Repo Rate (BI7DRR) adalah suku bunga kebijakan utama yang menjadi sinyal stance kebijakan moneter.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Dalam Inflation Targeting Framework, Bank Indonesia menggunakan inflasi:",
    options: {
      A: "Headline inflation",
      B: "Core inflation sebagai target operasional",
      C: "Food inflation",
      D: "Administered price inflation",
      E: "Volatile food inflation",
    },
    correct: "B",
    explanation:
      "Core inflation digunakan sebagai target operasional karena lebih mencerminkan tekanan inflasi yang dapat dipengaruhi kebijakan moneter.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Corridor system dalam implementasi kebijakan moneter Bl berarti:",
    options: {
      A: "Sistem target ganda inflasi dan nilai tukar",
      B: "BI7DRR berada di tengah antara suku bunga lending facility dan deposit facility",
      C: "Koordinasi kebijakan dengan fiscal authority",
      D: "Sistem komunikasi kebijakan bertingkat",
      E: "Mekanisme transmisi multi-channel",
    },
    correct: "B",
    explanation:
      "Corridor system menempatkan BI7DRR di tengah dengan lending facility di atas dan deposit facility di bawahnya.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Fasilitas Repo Bank Indonesia berfungsi untuk:",
    options: {
      A: "Memberikan kredit jangka panjang",
      B: "Menyediakan likuiditas jangka pendek dengan jaminan surat berharga",
      C: "Mengatur nilai tukar rupiah",
      D: "Mengendalikan inflasi volatile food",
      E: "Membiayai defisit pemerintah",
    },
    correct: "B",
    explanation:
      "Fasilitas Repo menyediakan likuiditas jangka pendek kepada bank dengan jaminan surat berharga berkualitas tinggi.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Term Repo merupakan instrumen Bl untuk:",
    options: {
      A: "Operasi moneter harian",
      B: "Menyediakan likuiditas jangka menengah (3-12 bulan)",
      C: "Sterilisasi surplus likuiditas",
      D: "Intervensi nilai tukar",
      E: "Emergency lending",
    },
    correct: "B",
    explanation:
      "Term Repo memberikan likuiditas dengan tenor lebih panjang (3-12 bulan) untuk kebutuhan struktural perbankan.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Reverse Repo Bl berfungsi untuk:",
    options: {
      A: "Menambah likuiditas perbankan",
      B: "Menyerap kelebihan likuiditas dari perbankan",
      C: "Menurunkan suku bunga pasar",
      D: "Meningkatkan kredit perbankan",
      E: "Stabilisasi nilai tukar",
    },
    correct: "B",
    explanation:
      "Reverse Repo berfungsi menyerap kelebihan likuiditas perbankan untuk mengendalikan tekanan inflasi.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Standing facilities Bank Indonesia terdiri dari:",
    options: {
      A: "Hanya lending facility",
      B: "Lending facility dan deposit facility",
      C: "Repo dan reverse repo",
      D: "Term repo dan fine tune operation",
      E: "Open market operation dan discount window",
    },
    correct: "B",
    explanation:
      "Standing facilities terdiri dari lending facility (pinjaman) dan deposit facility (penempatan) dengan akses otomatis 24/7.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Giro Wajib Minimum (GWM) dalam kebijakan moneter berfungsi:",
    options: {
      A: "Meningkatkan profitabilitas bank",
      B: "Mengatur likuiditas perbankan dan mendukung transmisi kebijakan moneter",
      C: "Menjamin simpanan nasabah",
      D: "Meningkatkan kapitalisasi bank",
      E: "Mengatur persaingan perbankan",
    },
    correct: "B",
    explanation:
      "GWM mengatur likuiditas perbankan dan memperkuat transmisi kebijakan moneter melalui availability of funds effect.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Fine Tune Operation (FTO) dilakukan Bl untuk:",
    options: {
      A: "Operasi rutin setiap hari",
      B: "Menyesuaikan kondisi likuiditas yang tidak terduga",
      C: "Penetapan suku bunga acuan",
      D: "Intervensi nilai tukar",
      E: "Operasi jangka panjang",
    },
    correct: "B",
    explanation:
      "FTO dilakukan untuk mengatasi ketidakseimbangan likuiditas yang tidak terduga di luar operasi rutin.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Dalam menghadapi capital inflow yang berlebihan, Bl dapat menggunakan:",
    options: {
      A: "Menaikkan suku bunga acuan",
      B: "Macroprudential measures dan sterilized intervention",
      C: "Menurunkan reserve requirement",
      D: "Menghentikan operasi moneter",
      E: "Devaluasi mata uang",
    },
    correct: "B",
    explanation:
      "Macroprudential measures dan sterilized intervention digunakan untuk mengelola capital flow tanpa mengganggu stance moneter.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Forward guidance Bank Indonesia bertujuan:",
    options: {
      A: "Memprediksi pergerakan harga saham",
      B: "Memberikan sinyal arah kebijakan moneter masa depan kepada pasar",
      C: "Mengatur ekspektasi nilai tukar",
      D: "Mengendalikan suku bunga deposito",
      E: "Koordinasi dengan kebijakan fiskal",
    },
    correct: "B",
    explanation:
      "Forward guidance memberikan panduan arah kebijakan masa depan untuk mengelola ekspektasi dan memperkuat transmisi kebijakan.",
  },

  // --- SISTEM PEMBAYARAN & PENGELOLAAN UANG RUPIAH ---
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Real Time Gross Settlement (RTGS) adalah sistem yang:",
    options: {
      A: "Memproses pembayaran secara batch",
      B: "Menyelesaikan transaksi secara real time dan final",
      C: "Hanya untuk transaksi internasional",
      D: "Khusus untuk transaksi ritel",
      E: "Sistem pembayaran manual",
    },
    correct: "B",
    explanation:
      "RTGS memproses transaksi satu per satu secara real time dengan settlement yang final dan irrevocable.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question:
      "Bank Indonesia-Real Time Gross Settlement (BI-RTGS) memproses transaksi dengan nilai minimum:",
    options: {
      A: "Rp 100 juta",
      B: "Rp 500 juta",
      C: "Rp 1 miliar",
      D: "Tidak ada minimum",
      E: "Rp 5 miliar",
    },
    correct: "C",
    explanation:
      "BI-RTGS memproses transaksi dengan nilai minimum Rp 1 miliar untuk efisiensi dan mengurangi risiko sistemik.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Sistem Kliring Nasional Bank Indonesia (SKNBI) menangani:",
    options: {
      A: "Hanya cek dan bilyet giro",
      B: "Instrumen pembayaran non-tunai termasuk transfer kredit dan debit",
      C: "Transaksi valuta asing",
      D: "Pembayaran internasional",
      E: "Hanya kartu kredit",
    },
    correct: "B",
    explanation:
      "SKNBI menangani berbagai instrumen non-tunai termasuk cek, bilyet giro, nota debit/kredit, dan transfer elektronik.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Indonesia Standard QR Code (QRIS) adalah inisiatif untuk:",
    options: {
      A: "Keamanan cyber",
      B: "Standardisasi pembayaran menggunakan QR code",
      C: "Identifikasi digital",
      D: "E-commerce regulation",
      E: "Blockchain implementation",
    },
    correct: "B",
    explanation:
      "QRIS menyatukan berbagai QR code payment menjadi satu standar untuk kemudahan dan interoperabilitas.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Dalam pengelolaan uang rupiah, Bank Indonesia melakukan:",
    options: {
      A: "Hanya pencetakan uang",
      B: "Perencanaan, pencetakan, pengedaran, pencabutan, dan pemusnahan uang",
      C: "Hanya distribusi uang",
      D: "Pengaturan nilai nominal uang",
      E: "Hanya pemusnahan uang rusak",
    },
    correct: "B",
    explanation:
      "Bl mengelola seluruh siklus hidup uang rupiah dari perencanaan hingga pemusnahan sesuai kebutuhan ekonomi.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Uang Rupiah terdiri dari:",
    options: {
      A: "Hanya uang kertas",
      B: "Uang kertas dan uang logam",
      C: "Hanya uang logam",
      D: "Uang elektronik dan kartal",
      E: "Digital currency dan physical currency",
    },
    correct: "B",
    explanation:
      "Uang rupiah terdiri dari uang kertas dan uang logam dalam berbagai pecahan yang ditetapkan Bl.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Kas Titipan (Kasti) Bank Indonesia adalah:",
    options: {
      A: "Brankas penyimpanan emas",
      B: "Fasilitas penyimpanan dan distribusi uang rupiah di daerah",
      C: "Sistem pembayaran digital",
      D: "Cadangan devisa regional",
      E: "Simpanan bank komersial",
    },
    correct: "B",
    explanation:
      "Kas Titipan adalah fasilitas penyimpanan dan distribusi uang rupiah di daerah untuk efisiensi distribusi.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Clean money policy Bank Indonesia bertujuan:",
    options: {
      A: "Anti pencucian uang",
      B: "Menjaga kualitas uang rupiah yang beredar tetap bersih dan layak edar",
      C: "Kebersihan lingkungan kantor BI",
      D: "Transparansi kebijakan moneter",
      E: "Good governance",
    },
    correct: "B",
    explanation:
      "Clean money policy memastikan uang yang beredar dalam kondisi bersih dan layak edar untuk kepercayaan publik.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Penukaran uang tidak layak edar di Bank Indonesia:",
    options: {
      A: "Dikenakan biaya administrasi",
      B: "Gratis sesuai dengan kriteria yang ditetapkan",
      C: "Hanya untuk bank",
      D: "Dengan potongan nilai",
      E: "Tidak dilayani",
    },
    correct: "B",
    explanation:
      "Bl menukar uang tidak layak edar secara gratis sesuai kriteria kerusakan yang telah ditetapkan.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Genuine Detection Kit yang disediakan Bl berfungsi untuk:",
    options: {
      A: "Deteksi korupsi",
      B: "Mendeteksi keaslian uang rupiah",
      C: "Sistem keamanan kantor",
      D: "Deteksi cyber crime",
      E: "Quality control produksi",
    },
    correct: "B",
    explanation:
      "Genuine Detection Kit membantu masyarakat mendeteksi keaslian uang rupiah untuk mencegah peredaran uang palsu.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Program sosialisasi “Aku Cinta Rupiah” bertujuan:",
    options: {
      A: "Promosi investasi rupiah",
      B: "Meningkatkan kecintaan dan penggunaan rupiah di dalam negeri",
      C: "Kampanye anti korupsi",
      D: "Edukasi sistem pembayaran",
      E: "Promosi pariwisata",
    },
    correct: "B",
    explanation:
      "Program ini meningkatkan kecintaan dan penggunaan rupiah dalam transaksi domestik untuk memperkuat kedaulatan mata uang.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Pecahan uang rupiah terbesar yang beredar saat ini adalah:",
    options: {
      A: "Rp 50.000",
      B: "Rp 75.000",
      C: "Rp 100.000",
      D: "Rp 200.000",
      E: "Rp 500.000",
    },
    correct: "C",
    explanation:
      "Pecahan Rp 100.000 adalah pecahan terbesar uang kertas rupiah yang saat ini beredar di masyarakat.",
  },

  // --- STABILITAS SISTEM KEUANGAN ---
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Stabilitas Sistem Keuangan didefinisikan sebagai kondisi dimana:",
    options: {
      A: "Semua bank mendapat keuntungan",
      B: "Sistem keuangan berfungsi efisien dan mampu bertahan terhadap guncangan",
      C: "Inflasi selalu rendah",
      D: "Nilai tukar stabil",
      E: "Suku bunga tidak berubah",
    },
    correct: "B",
    explanation:
      "Stabilitas sistem keuangan adalah kondisi dimana sistem keuangan dapat berfungsi efisien dan tahan terhadap guncangan internal maupun eksternal.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Risiko sistemik dalam konteks stabilitas sistem keuangan adalah:",
    options: {
      A: "Risiko yang hanya mempengaruhi satu bank",
      B: "Risiko yang dapat menyebar dan mempengaruhi stabilitas sistem keuangan secara keseluruhan",
      C: "Risiko teknologi informasi",
      D: "Risiko operasional bank",
      E: "Risiko kredit individu",
    },
    correct: "B",
    explanation:
      "Risiko sistemik adalah risiko yang dapat menyebar (contagion) dan mengancam stabilitas sistem keuangan secara keseluruhan.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Kebijakan makroprudensial bertujuan untuk:",
    options: {
      A: "Meningkatkan profitabilitas bank",
      B: "Membatasi risiko sistemik dan menjaga stabilitas sistem keuangan",
      C: "Mengatur suku bunga kredit",
      D: "Meningkatkan inklusi keuangan",
      E: "Mengatur produk perbankan",
    },
    correct: "B",
    explanation:
      "Kebijakan makroprudensial bertujuan membatasi penumpukan risiko sistemik dan menjaga stabilitas sistem keuangan.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Instrumen makroprudensial yang dapat diterapkan meliputi:",
    options: {
      A: "Hanya capital adequacy ratio",
      B: "Countercyclical capital buffer, loan-to-value ratio, debt-to-income ratio",
      C: "Hanya reserve requirement",
      D: "Penetapan suku bunga maksimum",
      E: "Pembatasan jam operasional bank",
    },
    correct: "B",
    explanation:
      "Instrumen makroprudensial meliputi countercyclical buffer, LTV ratio, DTI ratio, dan berbagai measures lainnya.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Loan-to-Value (LTV) ratio merupakan instrumen untuk:",
    options: {
      A: "Mengatur profitabilitas bank",
      B: "Membatasi risiko kredit properti dan mencegah bubble",
      C: "Meningkatkan kredit konsumer",
      D: "Mengatur suku bunga",
      E: "Menentukan spread banking",
    },
    correct: "B",
    explanation:
      "LTV ratio membatasi rasio kredit terhadap nilai properti untuk mencegah bubble dan mengurangi risiko kredit properti.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Debt-to-Income (DTI) ratio bertujuan:",
    options: {
      A: "Meningkatkan pendapatan bank",
      B: "Membatasi kemampuan debitur mengambil kredit berdasarkan penghasilan",
      C: "Mengatur distribusi kredit sektoral",
      D: "Menentukan collateral requirement",
      E: "Mengatur margin keuntungan",
    },
    correct: "B",
    explanation:
      "DTI ratio membatasi kemampuan debitur mengambil kredit berdasarkan rasio terhadap penghasilan untuk mengurangi risiko overleveraging.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Stress testing dalam konteks stabilitas sistem keuangan adalah:",
    options: {
      A: "Tes psikologis untuk banker",
      B: "Simulasi dampak skenario shock terhadap ketahanan sistem keuangan",
      C: "Evaluasi sistem teknologi",
      D: "Tes kemampuan manajerial",
      E: "Audit operasional bank",
    },
    correct: "B",
    explanation:
      "Stress testing mensimulasikan dampak berbagai skenario shock untuk menguji ketahanan sistem keuangan.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Early warning system untuk stabilitas sistem keuangan:",
    options: {
      A: "Sistem alarm kebakaran",
      B: "Sistem deteksi dini potensi krisis atau ketidakstabilan sistem keuangan",
      C: "Sistem keamanan gedung",
      D: "Warning untuk nasabah",
      E: "Sistem backup data",
    },
    correct: "B",
    explanation:
      "Early warning system mendeteksi dini indikator-indikator yang dapat mengancam stabilitas sistem keuangan.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Financial Safety Net Indonesia terdiri dari:",
    options: {
      A: "Hanya Bank Indonesia",
      B: "Bank Indonesia, OJK, LPS, dan Kementerian Keuangan",
      C: "Semua bank di Indonesia",
      D: "Hanya lembaga pemerintah",
      E: "Asosiasi perbankan",
    },
    correct: "B",
    explanation:
      "Financial Safety Net terdiri dari BI (lender of last resort), OJK (pengawas), LPS (penjamin simpanan), dan Kemenkeu (fiscal backstop).",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Dalam penanganan bank bermasalah sistemik, mekanisme bail-out berarti:",
    options: {
      A: "Bank ditutup secara permanen",
      B: "Pemerintah atau otoritas memberikan bantuan untuk menyelamatkan bank",
      C: "Bank dijual ke investor asing",
      D: "Manajemen bank diganti",
      E: "Bank direstrukturisasi internal",
    },
    correct: "B",
    explanation:
      "Bail-out adalah bantuan otoritas untuk menyelamatkan institusi keuangan yang mengalami kesulitan sistemik.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Interconnectedness dalam sistem keuangan merujuk pada:",
    options: {
      A: "Koneksi internet antar bank",
      B: "Keterkaitan dan ketergantungan antar institusi keuangan",
      C: "Sistem komunikasi internal",
      D: "Jaringan ATM bersama",
      E: "Integrasi sistem IT",
    },
    correct: "B",
    explanation:
      "Interconnectedness menunjukkan tingkat keterkaitan antar institusi keuangan yang dapat menyebarkan risiko sistemik.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Procyclicality dalam sistem keuangan adalah:",
    options: {
      A: "Siklus bisnis bank yang stabil",
      B: "Kecenderungan sistem keuangan memperkuat siklus ekonomi",
      C: "Rotasi manajemen bank",
      D: "Siklus audit rutin",
      E: "Pergantian regulasi berkala",
    },
    correct: "B",
    explanation:
      "Procyclicality adalah kecenderungan sistem keuangan memperkuat fluktuasi siklus ekonomi (boom dan bust).",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Systemically Important Financial Institution (SIFI) adalah:",
    options: {
      A: "Bank terbesar di Indonesia",
      B: "Institusi keuangan yang dampak kegagalannya dapat mempengaruhi stabilitas sistem",
      C: "Bank milik pemerintah",
      D: "Institusi keuangan internasional",
      E: "Bank dengan teknologi terdepan",
    },
    correct: "B",
    explanation:
      "SIFI adalah institusi keuangan yang kegagalannya dapat berdampak sistemik karena ukuran, keterkaitan, atau fungsi kritisnya.",
  },

  // --- KETENTUAN HUKUM TERKAIT RUPIAH ---
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Berdasarkan UU No. 7 Tahun 2011 tentang Mata Uang, yang berwenang menerbitkan Rupiah adalah:",
    options: {
      A: "Pemerintah Republik Indonesia",
      B: "Bank Indonesia",
      C: "Menteri Keuangan",
      D: "DPR RI",
      E: "Presiden RI",
    },
    correct: "B",
    explanation:
      "Berdasarkan UU No. 7 Tahun 2011, Bank Indonesia adalah satu-satunya lembaga yang berwenang mengeluarkan dan mengedarkan uang Rupiah.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Mata uang Rupiah wajib digunakan dalam:",
    options: {
      A: "Hanya transaksi pemerintah",
      B: "Setiap transaksi yang dilakukan di wilayah Negara Kesatuan Republik Indonesia",
      C: "Transaksi di atas Rp 1 miliar",
      D: "Hanya transaksi perbankan",
      E: "Transaksi dengan pihak domestik saja",
    },
    correct: "B",
    explanation:
      "Rupiah wajib digunakan dalam setiap transaksi yang memiliki tujuan pembayaran, penyelesaian kewajiban lain, atau transaksi keuangan lainnya yang dilakukan di NKRI.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Pengecualian kewajiban penggunaan Rupiah dimungkinkan untuk:",
    options: {
      A: "Semua transaksi internasional",
      B: "Transaksi tertentu yang diatur dalam peraturan Bank Indonesia",
      C: "Transaksi di atas USD 100.000",
      D: "Hanya transaksi ekspor-impor",
      E: "Transaksi dengan bank asing",
    },
    correct: "B",
    explanation:
      "Pengecualian kewajiban penggunaan Rupiah hanya untuk transaksi tertentu yang secara spesifik diatur dalam peraturan Bank Indonesia.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Tindakan merusak, mencabik, membakar uang Rupiah termasuk:",
    options: {
      A: "Tindakan pidana dengan ancaman penjara maksimal 5 tahun",
      B: "Pelanggaran administratif saja",
      C: "Tindakan perdata",
      D: "Tidak ada sanksi hukum",
      E: "Hanya pelanggaran etika",
    },
    correct: "A",
    explanation:
      "Merusak uang Rupiah dengan sengaja diancam pidana penjara maksimal 5 tahun dan/atau denda maksimal Rp 1 miliar.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Menolak menerima Rupiah yang masih layak edar dapat dikenakan sanksi:",
    options: {
      A: "Pidana penjara 1 tahun",
      B: "Denda administratif sesuai ketentuan",
      C: "Pencabutan izin usaha",
      D: "Teguran tertulis saja",
      E: "Tidak ada sanksi",
    },
    correct: "B",
    explanation:
      "Penolakan Rupiah yang layak edar dapat dikenakan sanksi administratif berupa denda sesuai dengan ketentuan yang berlaku.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Desain uang Rupiah ditetapkan oleh:",
    options: {
      A: "Presiden RI",
      B: "Bank Indonesia setelah mendapat persetujuan Presiden",
      C: "DPR RI",
      D: "Menteri Keuangan",
      E: "Tim khusus pemerintah",
    },
    correct: "B",
    explanation:
      "Desain uang Rupiah ditetapkan Bank Indonesia setelah mendapat persetujuan Presiden sesuai prosedur yang ditetapkan undang-undang.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Pencetakan uang Rupiah dilakukan oleh:",
    options: {
      A: "Hanya Peruri (Perusahaan Umum Percetakan Uang RI)",
      B: "Bank Indonesia atau pihak lain yang ditunjuk Bank Indonesia",
      C: "Perusahaan swasta nasional",
      D: "Kerjasama dengan bank sentral asing",
      E: "Menteri Keuangan",
    },
    correct: "B",
    explanation:
      "Pencetakan uang dapat dilakukan Bank Indonesia sendiri atau melalui pihak lain yang ditunjuk dengan memenuhi standar keamanan.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Pemusnahan uang Rupiah yang tidak layak edar dilakukan oleh:",
    options: {
      A: "Masing-masing bank komersial",
      B: "Bank Indonesia atau pihak yang ditunjuk",
      C: "Pemerintah daerah",
      D: "Perum Peruri",
      E: "Otoritas Jasa Keuangan",
    },
    correct: "B",
    explanation:
      "Pemusnahan uang dilakukan Bank Indonesia atau pihak yang ditunjuk sesuai dengan prosedur dan standar keamanan yang ketat.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Ketentuan mengenai ciri-ciri uang Rupiah tidak layak edar ditetapkan dalam:",
    options: {
      A: "Undang-undang",
      B: "Peraturan Bank Indonesia",
      C: "Keputusan Presiden",
      D: "Peraturan Pemerintah",
      E: "Keputusan Menteri Keuangan",
    },
    correct: "B",
    explanation:
      "Kriteria uang tidak layak edar ditetapkan dalam Peraturan Bank Indonesia dengan standar yang jelas dan terukur.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Peredaran uang palsu diancam dengan pidana:",
    options: {
      A: "Penjara maksimal 5 tahun dan denda",
      B: "Penjara maksimal 15 tahun dan denda maksimal Rp 50 miliar",
      C: "Hanya denda administratif",
      D: "Penjara maksimal 10 tahun",
      E: "Pidana seumur hidup",
    },
    correct: "B",
    explanation:
      "Pemalsuan mata uang diancam pidana penjara maksimal 15 tahun dan denda maksimal Rp 50 miliar karena termasuk kejahatan serius.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question: "Kewajiban melaporkan temuan uang palsu ditujukan kepada:",
    options: {
      A: "Polisi terdekat",
      B: "Bank Indonesia atau kepolisian",
      C: "Kejaksaan",
      D: "Pengadilan",
      E: "Pemerintah daerah",
    },
    correct: "B",
    explanation:
      "Temuan uang palsu wajib dilaporkan ke Bank Indonesia atau kepolisian untuk tindak lanjut sesuai prosedur hukum.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Dalam hal terjadi keraguan atas keaslian uang Rupiah, masyarakat dapat:",
    options: {
      A: "Meminta verifikasi ke bank komersial",
      B: "Meminta verifikasi keaslian kepada Bank Indonesia",
      C: "Langsung ke kepolisian",
      D: "Menghubungi OJK",
      E: "Konsultasi ke notaris",
    },
    correct: "B",
    explanation:
      "Bank Indonesia memiliki kewenangan dan fasilitas untuk memverifikasi keaslian uang Rupiah yang meragukan.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Sanksi bagi pelaku yang mengedarkan uang palsu dengan sengaja adalah:",
    options: {
      A: "Pidana penjara maksimal 10 tahun",
      B: "Pidana penjara seumur hidup atau penjara paling lama 20 tahun dan denda",
      C: "Hanya denda maksimal Rp 10 miliar",
      D: "Pidana penjara maksimal 5 tahun",
      E: "Sanksi administratif saja",
    },
    correct: "B",
    explanation:
      "Peredaran uang palsu dengan sengaja diancam pidana berat karena mengancam stabilitas sistem keuangan dan perekonomian nasional.",
  },

  // --- PIDANA & PERDATA TERKAIT UANG ---
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Tindak pidana pemalsuan mata uang Rupiah dikategorikan sebagai:",
    options: {
      A: "Kejahatan biasa",
      B: "Kejahatan terhadap keamanan negara",
      C: "Pelanggaran administratif",
      D: "Tindak pidana ekonomi",
      E: "Tindak pidana khusus",
    },
    correct: "B",
    explanation:
      "Pemalsuan mata uang dikategorikan sebagai kejahatan terhadap keamanan negara karena mengancam stabilitas ekonomi nasional.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Unsur kesengajaan dalam tindak pidana mata uang palsu meliputi:",
    options: {
      A: "Hanya mengetahui uang tersebut palsu",
      B: "Mengetahui dan berkehendak mengedarkan uang palsu",
      C: "Tidak tahu uang tersebut palsu",
      D: "Menerima dari orang lain",
      E: "Kealpaan dalam pengecekan",
    },
    correct: "B",
    explanation:
      "Unsur kesengajaan mensyaratkan pelaku mengetahui uang tersebut palsu dan berkehendak untuk mengedarkannya.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Ancaman pidana bagi percobaan membuat uang palsu adalah:",
    options: {
      A: "Sama dengan pelaku utama",
      B: "Dikurangi sepertiga dari ancaman maksimal",
      C: "Setengah dari ancaman maksimal",
      D: "Hanya denda administratif",
      E: "Tidak dapat dipidana",
    },
    correct: "B",
    explanation:
      "Percobaan kejahatan diancam pidana yang dikurangi sepertiga dari ancaman maksimal sesuai KUHP.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question:
      "Dalam perkara pidana mata uang palsu, yang berwenang melakukan penyidikan adalah:",
    options: {
      A: "Hanya Polri",
      B: "Polri dan penyidik Bank Indonesia",
      C: "Hanya Kejaksaan",
      D: "KPK",
      E: "Penyidik swasta",
    },
    correct: "B",
    explanation:
      "Penyidikan dapat dilakukan Polri sebagai penyidik umum dan penyidik Bank Indonesia sebagai penyidik khusus.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Barang bukti uang palsu dalam proses pidana:",
    options: {
      A: "Dikembalikan ke pemilik",
      B: "Dirampas untuk negara dan dimusnahkan",
      C: "Disimpan permanen",
      D: "Diserahkan ke Bl",
      E: "Dilelang negara",
    },
    correct: "B",
    explanation:
      "Uang palsu sebagai barang bukti dirampas negara dan dimusnahkan untuk mencegah peredaran kembali.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question:
      "Tindak pidana pencucian uang yang berasal dari kejahatan mata uang palsu:",
    options: {
      A: "Tidak dapat dipidana",
      B: "Dapat dipidana berdasarkan UU TPPU",
      C: "Hanya sanksi administratif",
      D: "Dikategorikan sebagai pelanggaran",
      E: "Masuk peradilan perdata",
    },
    correct: "B",
    explanation:
      "Pencucian uang dari hasil kejahatan mata uang palsu dapat dipidana berdasarkan UU Pencegahan dan Pemberantasan TPPU.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Dalam gugatan perdata terkait kerugian akibat uang palsu:",
    options: {
      A: "Tidak dapat digugat",
      B: "Pelaku wajib mengganti kerugian",
      C: "Hanya ganti rugi materiil",
      D: "Negara yang bertanggung jawab",
      E: "Bank Indonesia yang mengganti",
    },
    correct: "B",
    explanation:
      "Dalam gugatan perdata, pelaku wajib mengganti kerugian yang diderita korban akibat perbuatannya.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question:
      "Kewenangan Bank Indonesia dalam penyelidikan tindak pidana mata uang meliputi:",
    options: {
      A: "Melakukan penangkapan",
      B: "Melakukan pemeriksaan dan penelitian",
      C: "Menahan tersangka",
      D: "Mengadili perkara",
      E: "Menjatuhkan vonis",
    },
    correct: "B",
    explanation:
      "BI berwenang melakukan pemeriksaan dan penelitian sebagai bagian dari fungsi penyidikan tindak pidana mata uang.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Prinsip ne bis in idem dalam perkara mata uang palsu berarti:",
    options: {
      A: "Dapat diadili dua kali",
      B: "Tidak dapat diadili dua kali untuk perkara yang sama",
      C: "Harus ada saksi ahli",
      D: "Pembuktian terbalik",
      E: "Asas retroaktif",
    },
    correct: "B",
    explanation:
      "Prinsip ne bis in idem melarang pengadilan dua kali untuk perkara yang sama yang telah diputus dengan kekuatan hukum tetap.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Dalam hal korban menerima uang palsu dengan itikad baik:",
    options: {
      A: "Dapat menuntut ganti rugi dari negara",
      B: "Tidak mendapat ganti rugi apapun",
      C: "Dapat menuntut ganti rugi dari pelaku",
      D: "Diasuransikan pemerintah",
      E: "Ditanggung bank sentral",
    },
    correct: "C",
    explanation:
      "Korban yang menerima uang palsu dengan itikad baik dapat menuntut ganti rugi kepada pelaku melalui gugatan perdata.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Tindakan memproduksi alat untuk membuat uang palsu:",
    options: {
      A: "Bukan tindak pidana",
      B: "Dapat dipidana sebagai permufakatan jahat",
      C: "Hanya pelanggaran administratif",
      D: "Masuk kategori preparation act yang dapat dipidana",
      E: "Tidak diatur dalam undang-undang",
    },
    correct: "D",
    explanation:
      "Memproduksi alat untuk membuat uang palsu dapat dipidana sebagai perbuatan persiapan (preparation act) yang dapat dipidana.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Yurisdiksi pengadilan untuk perkara mata uang palsu:",
    options: {
      A: "Hanya Pengadilan Jakarta",
      B: "Pengadilan di tempat tindak pidana dilakukan",
      C: "Pengadilan Tipikor",
      D: "Mahkamah Agung langsung",
      E: "Pengadilan Niaga",
    },
    correct: "B",
    explanation:
      "Yurisdiksi pengadilan mengikuti prinsip umum yaitu di tempat tindak pidana dilakukan atau tempat tersangka ditangkap.",
  },

  // --- PROGRAM DAN KEBIJAKAN BANK INDONESIA ---
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Program Pemberdayaan Ekonomi Kerakyatan (PEK) Bank Indonesia bertujuan:",
    options: {
      A: "Meningkatkan profitabilitas bank",
      B: "Mengembangkan akses keuangan dan pemberdayaan UMKM",
      C: "Mengurangi suku bunga kredit",
      D: "Meningkatkan ekspor",
      E: "Mengatur persaingan usaha",
    },
    correct: "B",
    explanation:
      "Program PEK mengembangkan akses keuangan dan pemberdayaan UMKM untuk mendukung pertumbuhan ekonomi inklusif.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Gerakan Nasional Non Tunai (GNNT) yang diprakarsai BI bertujuan:",
    options: {
      A: "Mengurangi peredaran uang kartal",
      B: "Meningkatkan penggunaan instrumen pembayaran non tunai",
      C: "Meningkatkan literasi keuangan",
      D: "Mengurangi inflasi",
      E: "Memperkuat nilai tukar",
    },
    correct: "B",
    explanation:
      "GNNT bertujuan meningkatkan penggunaan instrumen pembayaran non tunai untuk efisiensi dan transparansi transaksi.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question: "Program Indonesiana Bank Indonesia merupakan:",
    options: {
      A: "Sistem pembayaran digital",
      B: "Program pelestarian budaya dan promosi ekonomi kreatif Indonesia",
      C: "Aplikasi mobile banking",
      D: "Program beasiswa",
      E: "Sistem informasi ekonomi",
    },
    correct: "B",
    explanation:
      "Program Indonesiana mempromosikan produk budaya dan ekonomi kreatif Indonesia sekaligus mendukung ekonomi digital.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question: "Tim Pengendalian Inflasi Daerah (TPID) dibentuk untuk:",
    options: {
      A: "Mengawasi bank daerah",
      B: "Mengendalikan inflasi di tingkat regional melalui koordinasi stakeholder",
      C: "Mengatur perdagangan antar daerah",
      D: "Mengelola APBD",
      E: "Mengawasi harga sembako",
    },
    correct: "B",
    explanation:
      "TPID mengoordinasikan stakeholder di daerah untuk mengendalikan inflasi melalui kebijakan terintegrasi.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question: "Program Wakaf Uang Bank Indonesia bertujuan:",
    options: {
      A: "Mengumpulkan dana CSR",
      B: "Mengembangkan instrumen keuangan syariah dan filantropi Islam",
      C: "Memberikan kredit mikro",
      D: "Mendirikan bank syariah",
      E: "Mengatur zakat perusahaan",
    },
    correct: "B",
    explanation:
      "Program Wakaf Uang mengembangkan instrumen keuangan syariah dan optimalisasi potensi filantropi Islam untuk pembangunan.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Strategi Nasional Keuangan Inklusif (SNKI) yang didukung Bl bertujuan:",
    options: {
      A: "Meningkatkan jumlah bank",
      B: "Meningkatkan akses dan penggunaan layanan keuangan formal",
      C: "Mengurangi suku bunga",
      D: "Mengatur fintech",
      E: "Meningkatkan modal bank",
    },
    correct: "B",
    explanation:
      "SNKI meningkatkan akses masyarakat terhadap layanan keuangan formal untuk mendukung pertumbuhan ekonomi inklusif.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Program Kuliah Kerja Nyata Tematik (KKN-T) BI bekerjasama dengan:",
    options: {
      A: "Perusahaan swasta",
      B: "Perguruan tinggi untuk pengembangan ekonomi daerah",
      C: "Bank komersial",
      D: "Pemerintah daerah saja",
      E: "Lembaga internasional",
    },
    correct: "B",
    explanation:
      "KKN-T BI bekerjasama dengan perguruan tinggi untuk mengimplementasikan program pembangunan ekonomi berbasis riset.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question: "Digital Payment Roadmap 2025 Bank Indonesia menargetkan:",
    options: {
      A: "Penghapusan uang tunai",
      B: "Rasio transaksi non tunai mencapai target tertentu",
      C: "Semua bank online",
      D: "Cryptocurrency legal",
      E: "Cashless society total",
    },
    correct: "B",
    explanation:
      "Digital Payment Roadmap menargetkan peningkatan rasio transaksi non tunai untuk modernisasi sistem pembayaran nasional.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Program Inklusi Keuangan Pesantren yang dicanangkan Bl bertujuan:",
    options: {
      A: "Mendirikan bank di pesantren",
      B: "Meningkatkan literasi dan akses keuangan syariah di pesantren",
      C: "Mengatur dana pendidikan",
      D: "Memberikan beasiswa santri",
      E: "Mengembangkan kurikulum ekonomi",
    },
    correct: "B",
    explanation:
      "Program ini meningkatkan literasi keuangan syariah dan akses layanan keuangan formal di lingkungan pesantren.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Festival Ekonomi Keuangan Syariah (FEKSI) merupakan program untuk:",
    options: {
      A: "Kompetisi bank syariah",
      B: "Edukasi dan sosialisasi ekonomi keuangan syariah",
      C: "Penelitian akademik",
      D: "Pelatihan banker",
      E: "Sertifikasi profesi",
    },
    correct: "B",
    explanation:
      "FEKSI mengedukasi masyarakat tentang produk dan layanan keuangan syariah melalui pendekatan festival yang menarik.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question: "Program Gerbang Pembayaran Nasional (GPN) bertujuan:",
    options: {
      A: "Mengatur tarif pembayaran",
      B: "Menciptakan switching nasional untuk interoperabilitas pembayaran",
      C: "Menghubungkan dengan sistem luar negeri",
      D: "Meningkatkan keamanan cyber",
      E: "Mengintegrasikan dengan blockchain",
    },
    correct: "B",
    explanation:
      "GPN menciptakan switching nasional yang memungkinkan interoperabilitas antar penyedia jasa pembayaran.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Inisiatif Bank Indonesia dalam pengembangan ekonomi digital meliputi:",
    options: {
      A: "Hanya regulatory sandbox",
      B: "Regulatory sandbox, digital payment, dan fintech development",
      C: "Pemberian modal ventura",
      D: "Investasi teknologi",
      E: "Akuisisi startup",
    },
    correct: "B",
    explanation:
      "BI mengembangkan ekosistem digital melalui regulatory sandbox, infrastruktur digital payment, dan pembinaan fintech.",
  },

  // --- INOVASI TEKNOLOGI KEUANGAN ---
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Regulatory Sandbox Bank Indonesia adalah:",
    options: {
      A: "Tempat uji coba fisik",
      B: "Kerangka pengujian terbatas untuk inovasi teknologi finansial",
      C: "Sistem keamanan siber",
      D: "Laboratorium Bl",
      E: "Ruang isolasi bank bermasalah",
    },
    correct: "B",
    explanation:
      "Regulatory sandbox adalah lingkungan pengujian terbatas untuk inovasi fintech dengan relaksasi regulasi tertentu.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Fintech yang wajib mendapat izin/terdaftar di Bank Indonesia adalah:",
    options: {
      A: "Semua fintech",
      B: "Fintech yang menyelenggarakan sistem pembayaran",
      C: "Hanya peer-to-peer lending",
      D: "Fintech investasi saja",
      E: "Cryptocurrency exchange",
    },
    correct: "B",
    explanation:
      "Fintech yang menyelenggarakan sistem pembayaran wajib mendapat izin BI karena masuk kewenangan BI.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Central Bank Digital Currency (CBDC) yang dikaji Bank Indonesia adalah:",
    options: {
      A: "Pengganti uang tunai sepenuhnya",
      B: "Mata uang digital yang diterbitkan bank sentral",
      C: "Cryptocurrency seperti Bitcoin",
      D: "Sistem pembayaran digital",
      E: "Token blockchain",
    },
    correct: "B",
    explanation:
      "CBDC adalah bentuk digital mata uang yang diterbitkan dan dijamin oleh bank sentral.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Open Banking yang dikembangkan dalam ekosistem pembayaran Indonesia memungkinkan:",
    options: {
      A: "Semua data bank terbuka",
      B: "Integrasi dan sharing data antar penyedia layanan keuangan dengan persetujuan nasabah",
      C: "Akses bebas ke rekening bank",
      D: "Transparansi total keuangan",
      E: "Penghapusan privacy",
    },
    correct: "B",
    explanation:
      "Open banking memungkinkan sharing data keuangan antar penyedia layanan dengan persetujuan dan kontrol nasabah.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Dalam pengaturan fintech, prinsip 'same activity, same risk, same regulation' berarti:",
    options: {
      A: "Semua fintech diatur sama",
      B: "Aktivitas dan risiko sama mendapat pengaturan yang setara",
      C: "Regulasi diseragamkan",
      D: "Bank dan fintech diatur identik",
      E: "Tidak ada perbedaan pengaturan",
    },
    correct: "B",
    explanation:
      "Prinsip ini memastikan aktivitas sejenis dengan risiko sama mendapat perlakuan regulasi yang setara.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Know Your Customer (KYC) digital dalam fintech memungkinkan:",
    options: {
      A: "Verifikasi identitas secara elektronik",
      B: "Menghilangkan proses verifikasi",
      C: "Akses tanpa identitas",
      D: "Verifikasi manual saja",
      E: "Penghapusan due diligence",
    },
    correct: "A",
    explanation:
      "KYC digital memungkinkan verifikasi identitas nasabah secara elektronik dengan teknologi yang aman.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Application Programming Interface (API) dalam sistem pembayaran berfungsi:",
    options: {
      A: "Sebagai aplikasi mobile",
      B: "Sebagai penghubung antar sistem untuk pertukaran data",
      C: "Sebagai database utama",
      D: "Sebagai sistem keamanan",
      E: "Sebagai user interface",
    },
    correct: "B",
    explanation:
      "API berfungsi sebagai jembatan komunikasi antar sistem untuk pertukaran data secara standar dan aman.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Quick Response Indonesian Standard (QRIS) menggunakan teknologi:",
    options: {
      A: "Blockchain",
      B: "QR Code dengan standar EMVCo",
      C: "Near Field Communication",
      D: "Biometric",
      E: "Artificial Intelligence",
    },
    correct: "B",
    explanation:
      "QRIS menggunakan teknologi QR code dengan standar internasional EMVCo untuk interoperabilitas.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Digital identity dalam ekosistem keuangan digital merujuk pada:",
    options: {
      A: "KTP elektronik",
      B: "Identitas digital yang dapat diverifikasi untuk transaksi keuangan",
      C: "Username dan password",
      D: "Nomor rekening bank",
      E: "PIN ATM",
    },
    correct: "B",
    explanation:
      "Digital identity adalah representasi digital identitas seseorang yang dapat diverifikasi untuk keperluan transaksi keuangan.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Artificial Intelligence dalam layanan keuangan dapat digunakan untuk:",
    options: {
      A: "Hanya customer service",
      B: "Risk assessment, fraud detection, dan personalisasi layanan",
      C: "Mengganti semua petugas bank",
      D: "Hanya analisis data",
      E: "Pemrosesan pembayaran saja",
    },
    correct: "B",
    explanation:
      "AI dapat digunakan untuk berbagai aplikasi seperti penilaian risiko, deteksi fraud, dan personalisasi layanan.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Blockchain technology dalam sistem keuangan menawarkan:",
    options: {
      A: "Hanya mata uang digital",
      B: "Immutable ledger dan transparansi transaksi",
      C: "Penggantian semua database",
      D: "Sistem pembayaran tercepat",
      E: "Eliminasi regulasi",
    },
    correct: "B",
    explanation:
      "Blockchain menawarkan ledger yang tidak dapat diubah (immutable) dan transparansi dalam pencatatan transaksi.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Machine Learning dalam deteksi fraud bekerja dengan:",
    options: {
      A: "Menghafal pola fraud lama",
      B: "Menganalisis pola dan anomali untuk mendeteksi transaksi mencurigakan",
      C: "Memblokir semua transaksi besar",
      D: "Hanya menggunakan rule-based system",
      E: "Mengandalkan laporan manual",
    },
    correct: "B",
    explanation:
      "Machine learning menganalisis pola historis dan mengidentifikasi anomali untuk mendeteksi potensi fraud.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Cloud computing dalam infrastruktur keuangan memberikan:",
    options: {
      A: "Hanya penyimpanan data",
      B: "Skalabilitas, fleksibilitas, dan efisiensi operasional",
      C: "Keamanan yang lebih rendah",
      D: "Ketergantungan internet saja",
      E: "Penggantian server fisik",
    },
    correct: "B",
    explanation:
      "Cloud computing memberikan skalabilitas infrastruktur IT, fleksibilitas deployment, dan efisiensi operasional.",
  },

  // --- HUBUNGAN INTERNASIONAL & ISU GLOBAL ---
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Bank Indonesia menjadi anggota Bank for International Settlements (BIS) dengan tujuan:",
    options: {
      A: "Memperoleh pinjaman internasional",
      B: "Berpartisipasi dalam koordinasi kebijakan bank sentral global",
      C: "Meningkatkan cadangan devisa",
      D: "Memperkuat nilai tukar rupiah",
      E: "Akses teknologi perbankan",
    },
    correct: "B",
    explanation:
      "Melalui BIS, BI berpartisipasi dalam forum koordinasi kebijakan bank sentral global dan sharing best practices.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam kerangka ASEAN+3 Chiang Mai Initiative Multilateralisation (CMIM), Indonesia:",
    options: {
      A: "Menjadi pemimpin organisasi",
      B: "Berpartisipasi dalam mekanisme regional financial safety net",
      C: "Memberikan pinjaman terbesar",
      D: "Mengatur kebijakan regional",
      E: "Menentukan nilai tukar regional",
    },
    correct: "B",
    explanation:
      "CMIM menyediakan jaring pengaman keuangan regional untuk menghadapi krisis likuiditas melalui currency swap arrangements.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Association of Southeast Asian Central Banks (SEACEN) berperan dalam:",
    options: {
      A: "Penetapan kebijakan moneter regional",
      B: "Capacity building dan knowledge sharing antar bank sentral ASEAN",
      C: "Pembentukan mata uang tunggal",
      D: "Pengawasan perbankan regional",
      E: "Operasi pasar regional",
    },
    correct: "B",
    explanation:
      "SEACEN memfasilitasi capacity building, penelitian, dan pertukaran pengalaman antar bank sentral Asia Tenggara.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Bank Indonesia berpartisipasi dalam International Monetary Fund (IMF) sebagai:",
    options: {
      A: "Pemegang saham terbesar",
      B: "Anggota yang berkontribusi dalam surveillance dan technical assistance",
      C: "Pemimpin regional",
      D: "Penerima bantuan permanen",
      E: "Koordinator Asia",
    },
    correct: "B",
    explanation:
      "BI berpartisipasi dalam program surveillance IMF dan menerima technical assistance untuk pengembangan kapasitas kelembagaan.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam Islamic Financial Services Board (IFSB), Bank Indonesia berperan:",
    options: {
      A: "Sebagai sekretariat",
      B: "Dalam pengembangan standar dan regulasi keuangan syariah internasional",
      C: "Mengatur pasar syariah global",
      D: "Penyedia dana terbesar",
      E: "Auditor standar syariah",
    },
    correct: "B",
    explanation:
      "BI berkontribusi dalam pengembangan standar internasional untuk industri keuangan syariah global melalui IFSB.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Financial Stability Board (FSB) yang diikuti Indonesia fokus pada:",
    options: {
      A: "Stabilitas harga global",
      B: "Koordinasi kebijakan untuk stabilitas sistem keuangan global",
      C: "Pengaturan nilai tukar",
      D: "Pemberian pinjaman darurat",
      E: "Audit sistem keuangan",
    },
    correct: "B",
    explanation:
      "FSB mengkoordinasikan kebijakan untuk mengatasi kerentanan sistem keuangan dan mencegah krisis keuangan global.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Basel Committee on Banking Supervision menghasilkan standar yang:",
    options: {
      A: "Wajib diterapkan semua negara",
      B: "Menjadi acuan regulasi perbankan internasional termasuk Indonesia",
      C: "Hanya untuk bank internasional",
      D: "Mengatur merger bank global",
      E: "Menentukan suku bunga global",
    },
    correct: "B",
    explanation:
      "Standar Basel menjadi rujukan global untuk regulasi perbankan termasuk ketentuan permodalan dan manajemen risiko.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam menghadapi krisis global, koordinasi G20 yang diikuti Indonesia meliputi:",
    options: {
      A: "Penyeragaman kebijakan moneter",
      B: "Koordinasi kebijakan makroekonomi dan keuangan global",
      C: "Pembentukan mata uang global",
      D: "Penetapan suku bunga dunia",
      E: "Pengaturan perdagangan internasional",
    },
    correct: "B",
    explanation:
      "G20 mengkoordinasikan respons kebijakan makroekonomi dan reformasi sistem keuangan global untuk stabilitas dan pertumbuhan.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question: "ASEAN Banking Integration Framework (ABIF) bertujuan:",
    options: {
      A: "Merger bank regional",
      B: "Memfasilitasi integrasi dan ekspansi perbankan di ASEAN",
      C: "Standardisasi mata uang",
      D: "Penghapusan batas negara",
      E: "Privatisasi bank nasional",
    },
    correct: "B",
    explanation:
      "ABIF memfasilitasi ekspansi bank regional di ASEAN melalui harmonisasi regulasi dan mutual recognition.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam Islamic Development Bank (IDB), Indonesia berpartisipasi untuk:",
    options: {
      A: "Menjadi anggota terbesar",
      B: "Mendukung pengembangan ekonomi syariah dan pembiayaan pembangunan",
      C: "Mengatur kebijakan syariah global",
      D: "Penyedia dana utama",
      E: "Sekretariat organisasi",
    },
    correct: "B",
    explanation:
      "Melalui IDB, Indonesia mendapat akses pembiayaan pembangunan berbasis syariah dan pengembangan ekonomi Islam.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Central Bank Digital Currency (CBDC) dalam konteks global menjadi isu karena:",
    options: {
      A: "Persaingan teknologi",
      B: "Dampaknya terhadap sistem moneter dan pembayaran internasional",
      C: "Keamanan cyber",
      D: "Biaya implementasi",
      E: "Resistensi bank komersial",
    },
    correct: "B",
    explanation:
      "CBDC berpotensi mengubah lanskap sistem moneter internasional dan mekanisme transmisi kebijakan moneter lintas negara.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Financial Action Task Force (FATF) yang diikuti Indonesia fokus pada:",
    options: {
      A: "Aksi pasar keuangan",
      B: "Pencegahan pencucian uang dan pendanaan terorisme",
      C: "Stabilitas keuangan",
      D: "Integrasi pasar",
      E: "Pengembangan fintech",
    },
    correct: "B",
    explanation:
      "FATF mengembangkan standar global untuk pencegahan pencucian uang dan pendanaan terorisme yang diadopsi Indonesia.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam mengatasi capital flow volatility, koordinasi internasional meliputi:",
    options: {
      A: "Penetapan kontrol modal",
      B: "Policy coordination dan macroprudential measures",
      C: "Devaluasi bersama",
      D: "Pembentukan blok ekonomi",
      E: "Proteksi perdagangan",
    },
    correct: "B",
    explanation:
      "Koordinasi internasional dalam mengelola volatilitas aliran modal melalui kebijakan makroprudensial dan komunikasi kebijakan.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Asian Infrastructure Investment Bank (AIIB) yang diikuti Indonesia bertujuan:",
    options: {
      A: "Persaingan dengan World Bank",
      B: "Pembiayaan infrastruktur untuk mendukung konektivitas Asia",
      C: "Dominasi ekonomi regional",
      D: "Pembentukan mata uang Asia",
      E: "Integrasi politik regional",
    },
    correct: "B",
    explanation:
      "AIIB mendukung pembangunan infrastruktur Asia untuk meningkatkan konektivitas dan pertumbuhan ekonomi regional.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question: "Green finance initiatives dalam forum internasional bertujuan:",
    options: {
      A: "Mengurangi emisi bank",
      B: "Mengintegrasikan pertimbangan lingkungan dalam sistem keuangan global",
      C: "Investasi hijau wajib",
      D: "Carbon tax universal",
      E: "Penutupan industri kotor",
    },
    correct: "B",
    explanation:
      "Green finance mengintegrasikan faktor lingkungan dalam keputusan investasi dan kebijakan keuangan untuk sustainability.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam menghadapi fintech disruption, koordinasi internasional meliputi:",
    options: {
      A: "Harmonisasi teknologi",
      B: "Regulatory coordination dan information sharing",
      C: "Standardisasi aplikasi",
      D: "Merger fintech global",
      E: "Pembatasan inovasi",
    },
    correct: "B",
    explanation:
      "Koordinasi regulasi fintech antar negara untuk mengelola risiko sambil mendorong inovasi teknologi keuangan.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Regional Comprehensive Economic Partnership (RCEP) berdampak pada:",
    options: {
      A: "Kebijakan moneter seragam",
      B: "Liberalisasi perdagangan dan investment yang mempengaruhi aliran modal",
      C: "Mata uang tunggal regional",
      D: "Bank sentral regional",
      E: "Sistem pembayaran tunggal",
    },
    correct: "B",
    explanation:
      "RCEP liberalisasi perdagangan mempengaruhi aliran investasi dan capital flows yang berdampak pada kebijakan moneter.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Climate-related financial risks dalam agenda internasional mencakup:",
    options: {
      A: "Risiko cuaca ekstrem saja",
      B: "Physical risks dan transition risks terhadap stabilitas keuangan",
      C: "Bencana alam",
      D: "Perubahan musim",
      E: "Krisis pangan",
    },
    correct: "B",
    explanation:
      "Climate risks mencakup risiko fisik dari perubahan iklim dan risiko transisi menuju ekonomi rendah karbon.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Cross-border payment improvements yang menjadi agenda global bertujuan:",
    options: {
      A: "Mengurangi biaya transfer",
      B: "Meningkatkan kecepatan, efisiensi, dan transparansi pembayaran lintas negara",
      C: "Penghapusan bank koresponden",
      D: "Mata uang digital global",
      E: "Eliminasi compliance",
    },
    correct: "B",
    explanation:
      "Inisiatif global untuk meningkatkan efisiensi pembayaran lintas negara melalui standardisasi dan teknologi digital.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam era deglobalization, tantangan bagi bank sentral meliputi:",
    options: {
      A: "Peningkatan cadangan devisa",
      B: "Pengelolaan dampak fragmentasi ekonomi terhadap stabilitas domestik",
      C: "Penarikan investasi asing",
      D: "Pembatasan perdagangan",
      E: "Isolasi ekonomi",
    },
    correct: "B",
    explanation:
      "Deglobalisasi menimbulkan tantangan pengelolaan dampak fragmentasi ekonomi global terhadap stabilitas domestik.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Sustainable finance taxonomy yang dikembangkan internasional bertujuan:",
    options: {
      A: "Klasifikasi bank hijau",
      B: "Standardisasi definisi aktivitas ekonomi berkelanjutan",
      C: "Sertifikasi produk ramah lingkungan",
      D: "Rating ESG wajib",
      E: "Green bond mandatory",
    },
    correct: "B",
    explanation:
      "Taxonomy menyediakan klasifikasi standar aktivitas ekonomi berkelanjutan untuk panduan investasi green finance.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Central Bank Network for Greening the Financial System (NGFS) yang diikuti Bl fokus pada:",
    options: {
      A: "Operasional hijau bank sentral",
      B: "Integrasi risiko iklim dalam pengawasan dan kebijakan bank sentral",
      C: "Investasi energi terbarukan",
      D: "Carbon footprint reduction",
      E: "Green office implementation",
    },
    correct: "B",
    explanation:
      "NGFS mengintegrasikan pertimbangan risiko iklim dalam kebijakan moneter dan pengawasan sistem keuangan.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam mengatasi cryptocurrency challenges, koordinasi internasional meliputi:",
    options: {
      A: "Pelarangan total global",
      B: "Regulatory harmonization dan risk mitigation measures",
      C: "Adopsi Bitcoin sebagai legal tender",
      D: "Penggantian mata uang nasional",
      E: "Monopoli bank sentral",
    },
    correct: "B",
    explanation:
      "Koordinasi internasional dalam regulasi cryptocurrency untuk mengelola risiko sambil memanfaatkan potensi inovasi.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Asian Bond Markets Initiative (ABMI) yang diikuti Indonesia bertujuan:",
    options: {
      A: "Kompetisi dengan pasar Barat",
      B: "Pengembangan pasar obligasi lokal mata uang untuk mengurangi currency mismatch",
      C: "Peningkatan yield obligasi",
      D: "Standardisasi rating",
      E: "Merger bursa regional",
    },
    correct: "B",
    explanation:
      "ABMI mengembangkan pasar obligasi mata uang lokal untuk mengurangi ketergantungan pada pembiayaan dollar dan currency mismatch.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Financial inclusion agenda dalam forum G20 dan internasional menekankan:",
    options: {
      A: "Pembukaan bank di semua desa",
      B: "Universal access to financial services untuk mendukung pembangunan inklusif",
      C: "Kredit gratis untuk masyarakat",
      D: "Digitalisasi wajib",
      E: "Subsidi perbankan",
    },
    correct: "B",
    explanation:
      "Agenda global financial inclusion menekankan akses universal terhadap layanan keuangan untuk mendukung pembangunan ekonomi inklusif.",
  },
  // Dasar-Dasar Ekonomi Terkait Bank Sentral
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Konsep velocity of money dalam ekonomi mengacu pada:",
    options: {
      A: "Kecepatan pencetakan uang oleh bank sentral",
      B: "Tingkat perputaran uang dalam perekonomian",
      C: "Kecepatan transfer dana antar bank",
      D: "Waktu yang diperlukan untuk mengedarkan uang baru",
      E: "Kecepatan pertumbuhan ekonomi",
    },
    correct: "B",
    explanation:
      "Velocity of money mengukur seberapa cepat uang beredar dan digunakan dalam transaksi ekonomi dalam periode tertentu.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Dalam teori kuantitas uang (MV = PT), huruf M melambangkan:",
    options: {
      A: "Margin keuntungan bank",
      B: "Multiplier effect",
      C: "Money supply (jumlah uang beredar)",
      D: "Monetary base",
      E: "Market value",
    },
    correct: "C",
    explanation:
      "Dalam persamaan kuantitas uang MV = PT, M adalah money supply (jumlah uang beredar), V adalah velocity, P adalah price level, dan T adalah volume transaksi.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Fenomena liquidity trap terjadi ketika:",
    options: {
      A: "Bank kelebihan likuiditas",
      B: "Suku bunga sangat rendah sehingga kebijakan moneter tidak efektif",
      C: "Masyarakat menimbun uang tunai",
      D: "Bank sentral menaikkan suku bunga drastis",
      E: "Terjadi krisis perbankan",
    },
    correct: "B",
    explanation:
      "Liquidity trap terjadi ketika suku bunga sudah sangat rendah (mendekati nol) sehingga kebijakan moneter ekspansif tidak efektif merangsang ekonomi.",
  },

  // --- PERAN & FUNGSI BANK SENTRAL ---
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Fungsi utama bank sentral sebagai 'lender of last resort' adalah:",
    options: {
      A: "Memberikan kredit kepada masyarakat",
      B: "Menyediakan likuiditas darurat kepada bank yang mengalami kesulitan",
      C: "Mengatur suku bunga deposito",
      D: "Mengelola dana pensiun",
      E: "Memberikan subsidi kepada UMKM",
    },
    correct: "B",
    explanation:
      "Lender of last resort adalah fungsi bank sentral memberikan pinjaman darurat kepada bank yang mengalami kesulitan likuiditas untuk mencegah krisis perbankan.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Peran bank sentral dalam menjaga stabilitas nilai tukar dilakukan melalui:",
    options: {
      A: "Intervensi di pasar valuta asing",
      B: "Mengatur impor dan ekspor",
      C: "Menetapkan tarif bea cukai",
      D: "Mengendalikan inflasi domestik saja",
      E: "Melarang transaksi mata uang asing",
    },
    correct: "A",
    explanation:
      "Bank sentral menjaga stabilitas nilai tukar melalui intervensi di pasar valas, baik dengan membeli atau menjual mata uang domestik/asing.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question: "Fungsi bank sentral sebagai banker's bank mencakup:",
    options: {
      A: "Memberikan kredit konsumsi",
      B: "Menerima simpanan dan memberikan kredit kepada bank umum",
      C: "Mengelola rekening tabungan masyarakat",
      D: "Menyediakan layanan kartu kredit",
      E: "Mengatur sistem asuransi",
    },
    correct: "B",
    explanation:
      "Sebagai banker's bank, bank sentral melayani bank-bank umum dengan menyediakan layanan perbankan seperti simpanan dan kredit.",
  },

  // --- UNDANG-UNDANG & DASAR HUKUM BANK INDONESIA ---
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Bank Indonesia didirikan berdasarkan:",
    options: {
      A: "UU No. 11 Tahun 1953",
      B: "UU No. 13 Tahun 1968",
      C: "UU No. 23 Tahun 1999",
      D: "UU No. 3 Tahun 2004",
      E: "UU No. 21 Tahun 2011",
    },
    correct: "A",
    explanation:
      "Bank Indonesia didirikan berdasarkan UU No. 11 Tahun 1953 tentang Pokok Bank Indonesia, menggantikan De Javasche Bank.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Prinsip independensi Bank Indonesia tercantum dalam:",
    options: {
      A: "UU No. 23 Tahun 1999 yang telah diubah dengan UU No. 3 Tahun 2004",
      B: "UU Perbankan",
      C: "UU Sistem Pembayaran",
      D: "UU Anti Monopoli",
      E: "UU Perlindungan Konsumen",
    },
    correct: "A",
    explanation:
      "Independensi Bank Indonesia diatur dalam UU No. 23/1999 yang kemudian diubah dengan UU No. 3/2004 tentang Bank Indonesia.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Masa jabatan Gubernur Bank Indonesia menurut undang-undang adalah:",
    options: {
      A: "3 tahun",
      B: "4 tahun",
      C: "5 tahun",
      D: "6 tahun",
      E: "7 tahun",
    },
    correct: "C",
    explanation:
      "Masa jabatan Gubernur dan Deputi Gubernur Bank Indonesia adalah 5 tahun dan dapat diperpanjang untuk satu kali masa jabatan.",
  },

  // --- STRUKTUR ORGANISASI & TATA KELOLA BANK INDONESIA ---
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Dewan Gubernur Bank Indonesia terdiri dari:",
    options: {
      A: "Gubernur saja",
      B: "Gubernur dan 1 Deputi Gubernur",
      C: "Gubernur dan 4-7 Deputi Gubernur",
      D: "Gubernur dan 8 Deputi Gubernur",
      E: "Gubernur dan 10 Deputi Gubernur",
    },
    correct: "C",
    explanation:
      "Dewan Gubernur BI terdiri dari seorang Gubernur dan 4-7 orang Deputi Gubernur sesuai kebutuhan organisasi.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Rapat Dewan Gubernur (RDG) Bank Indonesia dilakukan:",
    options: {
      A: "Setiap hari",
      B: "Setiap minggu",
      C: "Setiap bulan",
      D: "Setiap kuartal",
      E: "Setiap semester",
    },
    correct: "B",
    explanation:
      "Rapat Dewan Gubernur dilakukan setiap minggu untuk membahas kebijakan operasional dan strategis Bank Indonesia.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question: "Kantor pusat Bank Indonesia berlokasi di:",
    options: {
      A: "Bandung",
      B: "Surabaya",
      C: "Jakarta",
      D: "Yogyakarta",
      E: "Medan",
    },
    correct: "C",
    explanation:
      "Kantor pusat Bank Indonesia berlokasi di Jakarta sebagai ibu kota negara dan pusat kegiatan ekonomi.",
  },

  // --- PRODUK & DOKUMEN STRATEGIS BANK INDONESIA ---
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Laporan tahunan Bank Indonesia wajib disampaikan kepada:",
    options: {
      A: "Presiden saja",
      B: "DPR saja",
      C: "Presiden dan DPR",
      D: "Mahkamah Agung",
      E: "BPK saja",
    },
    correct: "C",
    explanation:
      "Sebagai bentuk akuntabilitas, Bank Indonesia wajib menyampaikan laporan tahunan kepada Presiden dan DPR.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Inflation Targeting Framework (ITF) Bank Indonesia bertujuan untuk:",
    options: {
      A: "Menjaga inflasi pada tingkat tertentu",
      B: "Mengendalikan nilai tukar",
      C: "Meningkatkan pertumbuhan ekonomi",
      D: "Mengurangi pengangguran",
      E: "Menstabilkan harga saham",
    },
    correct: "A",
    explanation:
      "ITF adalah kerangka kebijakan moneter yang bertujuan mencapai dan memelihara target inflasi yang telah ditetapkan.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question: "Blue Print Sistem Pembayaran Indonesia 2025 fokus pada:",
    options: {
      A: "Peningkatan literasi keuangan",
      B: "Penciptaan sistem pembayaran yang efisien, lancar, aman dan andal",
      C: "Pengembangan perbankan syariah",
      D: "Peningkatan inklusi keuangan saja",
      E: "Digitalisasi mata uang",
    },
    correct: "B",
    explanation:
      "Blue Print 2025 fokus pada pengembangan sistem pembayaran yang memenuhi kebutuhan ekonomi digital.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Program Indonesia Payment System Blueprint (IPSB) 2025 memiliki visi:",
    options: {
      A: "Menjadi negara maju",
      B: "Sistem pembayaran yang efisien, kompetitif, aman, dan andal",
      C: "Ekonomi digital terbesar di ASEAN",
      D: "Cashless society",
      E: "Pusat keuangan regional",
    },
    correct: "B",
    explanation:
      "IPSB 2025 memiliki visi mewujudkan sistem pembayaran Indonesia yang efisien, kompetitif, aman, dan andal.",
  },

  // --- KEBIJAKAN MONETER ---
  {
    type: "Kebijakan Moneter",
    question:
      "Instrumen kebijakan moneter yang paling sering digunakan Bank Indonesia adalah:",
    options: {
      A: "Reserve requirement",
      B: "BI 7-Day Reverse Repo Rate",
      C: "Moral suasion",
      D: "Open market operation",
      E: "Selective credit control",
    },
    correct: "B",
    explanation:
      "BI 7DRR adalah suku bunga acuan utama yang digunakan Bank Indonesia dalam implementasi kebijakan moneter.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Ketika Bank Indonesia menaikkan suku bunga acuan, dampaknya terhadap inflasi adalah:",
    options: {
      A: "Inflasi akan naik",
      B: "Inflasi akan turun",
      C: "Inflasi tidak berubah",
      D: "Inflasi menjadi negatif",
      E: "Tidak ada hubungan",
    },
    correct: "B",
    explanation:
      "Kenaikan suku bunga acuan akan mengurangi likuiditas dan konsumsi masyarakat, sehingga inflasi cenderung turun.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Operasi Pasar Terbuka (OPT) dilakukan Bank Indonesia dengan cara:",
    options: {
      A: "Menjual atau membeli SUN/SBN di pasar sekunder",
      B: "Mengubah suku bunga deposito",
      C: "Menaikkan cadangan wajib minimum",
      D: "Memberikan kredit langsung",
      E: "Mengatur nilai tukar",
    },
    correct: "A",
    explanation:
      "OPT dilakukan dengan jual-beli surat berharga di pasar sekunder untuk mengatur likuiditas perbankan.",
  },
  {
    type: "Kebijakan Moneter",
    question: "Giro Wajib Minimum (GWM) adalah:",
    options: {
      A: "Simpanan minimum yang harus dipelihara bank di Bank Indonesia",
      B: "Kredit minimum yang harus diberikan bank",
      C: "Modal minimum bank",
      D: "Keuntungan minimum bank",
      E: "Bunga minimum deposito",
    },
    correct: "A",
    explanation:
      "GWM adalah instrumen kebijakan moneter berupa kewajiban bank memelihara dana minimum di Bank Indonesia.",
  },

  // --- SISTEM PEMBAYARAN & PENGELOLAAN UANG RUPIAH ---
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question:
      "Real Time Gross Settlement (RTGS) adalah sistem pembayaran yang:",
    options: {
      A: "Memproses transaksi secara batch",
      B: "Memproses transaksi secara real time dan final",
      C: "Hanya untuk transaksi kecil",
      D: "Hanya untuk transaksi internasional",
      E: "Hanya untuk transaksi tunai",
    },
    correct: "B",
    explanation:
      "RTGS memproses transaksi bernilai besar secara individual, real time, dan bersifat final (tidak dapat dibatalkan).",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Sistem Kliring Nasional Bank Indonesia (SKNBI) digunakan untuk:",
    options: {
      A: "Transaksi bernilai besar",
      B: "Transaksi retail/ritel",
      C: "Transaksi valuta asing",
      D: "Transaksi obligasi",
      E: "Transaksi derivatif",
    },
    correct: "B",
    explanation:
      "SKNBI digunakan untuk memproses transaksi retail bernilai relatif kecil secara batch/berkala.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question: "Pengelolaan uang Rupiah mencakup kegiatan:",
    options: {
      A: "Perencanaan, pencetakan, pengeluaran, dan pengedaran",
      B: "Hanya pencetakan dan pengeluaran",
      C: "Hanya pengedaran",
      D: "Hanya pemusnahan",
      E: "Hanya penyimpanan",
    },
    correct: "A",
    explanation:
      "Pengelolaan uang Rupiah mencakup seluruh siklus hidup uang dari perencanaan hingga pemusnahan.",
  },

  // --- STABILITAS SISTEM KEUANGAN ---
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Komite Stabilitas Sistem Keuangan (KSSK) diketuai oleh:",
    options: {
      A: "Menteri Keuangan",
      B: "Gubernur Bank Indonesia",
      C: "Ketua OJK",
      D: "Ketua LPS",
      E: "Presiden",
    },
    correct: "A",
    explanation:
      "KSSK diketuai oleh Menteri Keuangan dengan anggota Gubernur BI, Ketua OJK, dan Ketua LPS.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question: "Macroprudential policy bertujuan untuk:",
    options: {
      A: "Mengatur bank secara individual",
      B: "Menjaga stabilitas sistem keuangan secara keseluruhan",
      C: "Meningkatkan profitabilitas bank",
      D: "Mengurangi suku bunga",
      E: "Meningkatkan kredit konsumsi",
    },
    correct: "B",
    explanation:
      "Kebijakan makroprudensial fokus pada stabilitas sistem keuangan secara keseluruhan, bukan individual.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Sistem peringatan dini (early warning system) dalam stabilitas sistem keuangan berfungsi untuk:",
    options: {
      A: "Mendeteksi potensi krisis sebelum terjadi",
      B: "Meningkatkan keuntungan bank",
      C: "Mengatur suku bunga",
      D: "Mengendalikan inflasi",
      E: "Menjaga nilai tukar",
    },
    correct: "A",
    explanation:
      "Early warning system dirancang untuk mendeteksi dini potensi gangguan atau krisis sistem keuangan.",
  },

  // --- KETENTUAN HUKUM TERKAIT RUPIAH ---
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Mata uang Rupiah mulai berlaku sebagai alat pembayaran yang sah di Indonesia sejak:",
    options: {
      A: "17 Agustus 1945",
      B: "30 Oktober 1946",
      C: "1 Januari 1950",
      D: "11 Maret 1953",
      E: "1 Juli 1959",
    },
    correct: "B",
    explanation:
      "Uang ORI (Oeang Republik Indonesia) mulai berlaku sebagai mata uang resmi pada 30 Oktober 1946.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Penggunaan mata uang asing sebagai alat pembayaran di wilayah Indonesia:",
    options: {
      A: "Diizinkan sepenuhnya",
      B: "Dilarang kecuali untuk transaksi tertentu yang diatur undang-undang",
      C: "Hanya diizinkan di daerah perbatasan",
      D: "Hanya diizinkan untuk wisatawan",
      E: "Diizinkan dengan persetujuan Bank Indonesia",
    },
    correct: "B",
    explanation:
      "Penggunaan mata uang asing dilarang kecuali untuk transaksi tertentu seperti ekspor-impor, hibah, dan transaksi internasional lainnya.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Kewajiban penggunaan Rupiah dalam transaksi domestik diatur dalam:",
    options: {
      A: "UU No. 7 Tahun 2011",
      B: "UU No. 23 Tahun 1999",
      C: "UU No. 10 Tahun 1998",
      D: "UU No. 21 Tahun 2011",
      E: "UU No. 8 Tahun 2010",
    },
    correct: "A",
    explanation:
      "UU No. 7 Tahun 2011 tentang Mata Uang mengatur kewajiban penggunaan Rupiah dalam transaksi domestik.",
  },

  // --- PIDANA & PERDATA TERKAIT UANG ---
  {
    type: "Pidana & Perdata Terkait Uang",
    question: "Tindakan memalsukan uang Rupiah diancam dengan hukuman:",
    options: {
      A: "Denda saja",
      B: "Penjara maksimal 5 tahun",
      C: "Penjara maksimal 10 tahun",
      D: "Penjara maksimal 15 tahun",
      E: "Penjara seumur hidup",
    },
    correct: "D",
    explanation:
      "Pemalsuan uang adalah kejahatan serius yang diancam dengan hukuman penjara maksimal 15 tahun dan denda.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question:
      "Menolak pembayaran dengan uang Rupiah yang sah dapat dikenakan sanksi:",
    options: {
      A: "Pidana saja",
      B: "Perdata saja",
      C: "Administrasi saja",
      D: "Pidana dan/atau denda",
      E: "Tidak ada sanksi",
    },
    correct: "D",
    explanation:
      "Menolak pembayaran dengan Rupiah yang sah dapat dikenakan sanksi pidana kurungan dan/atau denda.",
  },

  // --- PROGRAM DAN KEBIJAKAN BANK INDONESIA ---
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question: "Program Kredit Usaha Rakyat (KUR) merupakan inisiatif:",
    options: {
      A: "Bank Indonesia saja",
      B: "Pemerintah dengan dukungan Bank Indonesia",
      C: "Bank umum saja",
      D: "Koperasi saja",
      E: "BUMN saja",
    },
    correct: "B",
    explanation:
      "KUR adalah program pemerintah yang didukung Bank Indonesia melalui penjaminan dan subsidi bunga.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question: "Gerakan Nasional Non Tunai (GNNT) bertujuan untuk:",
    options: {
      A: "Mengurangi penggunaan uang tunai",
      B: "Meningkatkan penggunaan uang tunai",
      C: "Menghapus uang tunai sepenuhnya",
      D: "Mengatur nilai tukar",
      E: "Mengendalikan inflasi",
    },
    correct: "A",
    explanation:
      "GNNT bertujuan mendorong masyarakat menggunakan instrumen pembayaran non tunai untuk efisiensi dan keamanan.",
  },

  // --- INOVASI TEKNOLOGI KEUANGAN ---
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Quick Response Code Indonesian Standard (QRIS) adalah:",
    options: {
      A: "Sistem pembayaran menggunakan QR code yang terintegrasi",
      B: "Aplikasi mobile banking",
      C: "Sistem kredit digital",
      D: "Platform investasi online",
      E: "Sistem asuransi digital",
    },
    correct: "A",
    explanation:
      "QRIS adalah standar QR code terpadu yang memungkinkan interoperabilitas antar penyedia jasa pembayaran.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question: "Bank Indonesia dalam mengatur fintech berperan sebagai:",
    options: {
      A: "Operator fintech",
      B: "Regulator dan supervisor",
      C: "Investor fintech",
      D: "Konsumen fintech",
      E: "Pemilik platform fintech",
    },
    correct: "B",
    explanation:
      "Bank Indonesia berperan mengatur dan mengawasi penyelenggaraan teknologi finansial di Indonesia.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Central Bank Digital Currency (CBDC) yang sedang dikaji Bank Indonesia disebut:",
    options: {
      A: "Digital Rupiah",
      B: "e-Rupiah",
      C: "Crypto Rupiah",
      D: "Virtual Rupiah",
      E: "Cyber Rupiah",
    },
    correct: "A",
    explanation:
      "Bank Indonesia mengkaji pengembangan mata uang digital bank sentral yang disebut Digital Rupiah.",
  },

  // --- BLUEPRINT, PRODUK, & PROGRAM STRATEGIS BANK INDONESIA ---
  {
    type: "Blueprint, Produk, & Program Strategis Bank Indonesia",
    question: "Blueprint Sistem Pembayaran Indonesia 2025 fokus pada:",
    options: {
      A: "Peningkatan literasi keuangan",
      B: "Penciptaan sistem pembayaran yang efisien, lancar, aman dan andal",
      C: "Pengembangan perbankan syariah",
      D: "Peningkatan inklusi keuangan saja",
      E: "Digitalisasi mata uang",
    },
    correct: "B",
    explanation:
      "Blueprint 2025 fokus pada pengembangan sistem pembayaran yang memenuhi kebutuhan ekonomi digital.",
  },
  {
    type: "Blueprint, Produk, & Program Strategis Bank Indonesia",
    question:
      "Program Indonesia Payment System Blueprint (IPSB) 2025 memiliki visi:",
    options: {
      A: "Menjadi negara maju",
      B: "Sistem pembayaran yang efisien, kompetitif, aman, dan andal",
      C: "Ekonomi digital terbesar di ASEAN",
      D: "Cashless society",
      E: "Pusat keuangan regional",
    },
    correct: "B",
    explanation:
      "IPSB 2025 memiliki visi mewujudkan sistem pembayaran Indonesia yang efisien, kompetitif, aman, dan andal.",
  },

  // --- HUBUNGAN INTERNASIONAL & ISU GLOBAL ---
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Bank Indonesia menjadi anggota dari organisasi bank sentral internasional:",
    options: {
      A: "World Bank saja",
      B: "IMF saja",
      C: "BIS (Bank for International Settlements)",
      D: "ADB saja",
      E: "Islamic Development Bank saja",
    },
    correct: "C",
    explanation:
      "Bank Indonesia menjadi anggota BIS, forum kerjasama bank sentral dunia yang bermarkas di Basel, Swiss.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question: "Dalam forum G20, Bank Indonesia berpartisipasi dalam:",
    options: {
      A: "Finance Track saja",
      B: "Sherpa Track saja",
      C: "Finance Track dan Sherpa Track",
      D: "Business Track saja",
      E: "Civil Track saja",
    },
    correct: "A",
    explanation:
      "Bank Indonesia berpartisipasi dalam Finance Track G20 bersama menteri keuangan dan gubernur bank sentral lainnya.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Kerjasama swap mata uang yang dilakukan Bank Indonesia bertujuan untuk:",
    options: {
      A: "Meningkatkan cadangan devisa",
      B: "Menjaga stabilitas nilai tukar",
      C: "Memfasilitasi perdagangan bilateral",
      D: "Semua jawaban benar",
      E: "Hanya a dan b yang benar",
    },
    correct: "D",
    explanation:
      "Kerjasama swap mata uang bertujuan meningkatkan cadangan devisa, menjaga stabilitas nilai tukar, dan memfasilitasi perdagangan.",
  },
];

export default bankQuestions;
