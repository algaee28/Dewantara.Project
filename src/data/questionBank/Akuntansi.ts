const akuntansiQuestions = [
  // --- Akuntansi Dasar - Persamaan Akuntansi ---
  {
    type: "Akuntansi Dasar – Persamaan Akuntansi",
    question:
      "PT Andalas menerima investasi awal dari pemilik sebesar Rp100.000.000 dalam bentuk tunai. Bagaimana dampaknya terhadap persamaan akuntansi?",
    options: {
      a: "Aset naik, Liabilitas naik",
      b: "Aset naik, Ekuitas naik",
      c: "Aset turun, Ekuitas naik",
      d: "Liabilitas naik, Ekuitas naik",
      e: "Tidak ada perubahan",
    },
    correct: "b",
    explanation:
      "Kas (aset) bertambah Rp100.000.000 dan Ekuitas juga naik sebesar Rp100.000.000 karena modal disetor pemilik. Tidak ada liabilitas yang terlibat. Inilah contoh transaksi investasi pemilik yang menambah kekayaan perusahaan sekaligus menambah hak pemilik dalam perusahaan.",
  },
  // --- Akuntansi Dasar - Jurnal Umum ---
  {
    type: "Akuntansi Dasar – Jurnal Umum",
    question:
      "PT Nusantara membeli perlengkapan kantor senilai Rp5.000.000 secara tunai. Bagaimana pencatatan jurnal yang benar?",
    options: {
      a: "Debit Kas Rp5.000.000; Kredit Perlengkapan Rp5.000.000",
      b: "Debit Perlengkapan Rp5.000.000; Kredit Kas Rp5.000.000",
      c: "Debit Utang Usaha Rp5.000.000; Kredit Perlengkapan Rp5.000.000",
      d: "Debit Peralatan Rp5.000.000; Kredit Utang Usaha Rp5.000.000",
      e: "Debit Modal Rp5.000.000; Kredit Perlengkapan Rp5.000.000",
    },
    correct: "b",
    explanation:
      "Pembelian perlengkapan (aset lancar) menambah akun perlengkapan di debit. Karena dibayar tunai, kas berkurang sehingga dikredit. Prinsip dasar: debit menambah aset, kredit mengurangi aset.",
  },
  // --- Laporan Keuangan - Neraca ---
  {
    type: "Laporan Keuangan – Neraca",
    question:
      "Dalam neraca PT Garuda tercatat: Kas Rp40.000.000, Piutang Rp20.000.000, Peralatan Rp100.000.000, Utang Rp50.000.000, Modal Rp80.000.000. Berapakah saldo laba (retained earnings) perusahaan?",
    options: {
      a: "Rp30.000.000",
      b: "Rp40.000.000",
      c: "Rp20.000.000",
      d: "Rp10.000.000",
      e: "Rp50.000.000",
    },
    correct: "a",
    explanation:
      "Total aset = Rp40.000.000 + Rp20.000.000 + Rp100.000.000 = Rp160.000.000. Liabilitas = Rp50.000.000. Ekuitas = Aset – Liabilitas = Rp160.000.000 – Rp50.000.000 = Rp110.000.000. Modal = Rp80.000.000. Maka, sisa Rp30.000.000 adalah saldo laba.",
  },
  // --- Studi Kasus - Laporan Laba Rugi ---
  {
    type: "Studi Kasus – Laporan Laba Rugi",
    question:
      "Kasus: PT Indofood mencatat penjualan Rp500 miliar, harga pokok penjualan Rp300 miliar, beban operasional Rp100 miliar, dan beban bunga Rp20 miliar. Berapakah laba bersih sebelum pajak?",
    options: {
      a: "Rp80 miliar",
      b: "Rp100 miliar",
      c: "Rp120 miliar",
      d: "Rp200 miliar",
      e: "Rp150 miliar",
    },
    correct: "a",
    explanation:
      "Laba kotor = Rp500 miliar – Rp300 miliar = Rp200 miliar. Laba operasi = Rp200 miliar – Rp100 miliar = Rp100 miliar. Laba sebelum pajak = Rp100 miliar – Rp20 miliar = Rp80 miliar. Inilah cara penyusunan laporan laba rugi multi-step.",
  },
  // --- PSAK - Aset Tetap ---
  {
    type: "PSAK – Aset Tetap",
    question:
      "PT Astra membeli mesin Rp500 juta dengan umur ekonomis 10 tahun, tanpa nilai residu. Metode garis lurus digunakan. Berapa depresiasi tahunan?",
    options: {
      a: "Rp25 juta",
      b: "Rp40 juta",
      c: "Rp50 juta",
      d: "Rp100 juta",
      e: "Rp60 juta",
    },
    correct: "c",
    explanation:
      "Depresiasi garis lurus = (Harga perolehan – Nilai residu) / Umur ekonomis = (Rp500.000.000 – Rp0) / 10 = Rp50.000.000 per tahun. PSAK 16 mengatur metode depresiasi harus mencerminkan pola manfaat aset.",
  },
  // --- Studi Kasus - Persediaan (PSAK 14) ---
  {
    type: "Studi Kasus – Persediaan (PSAK 14)",
    question:
      "Kasus: PT Matahari menggunakan metode FIFO. Data persediaan barang A: Awal: 100 unit @ Rp10.000. Beli: 200 unit @ Rp12.000. Terjual: 250 unit. Hitung HPP.",
    options: {
      a: "Rp2.700.000",
      b: "Rp2.800.000",
      c: "Rp2.900.000",
      d: "Rp3.000.000",
      e: "Rp3.100.000",
    },
    correct: "b",
    explanation:
      "FIFO (First-In, First-Out) berarti barang yang dijual diambil dari yang paling awal dibeli. Perhitungan HPP: (100 unit x Rp10.000) + (150 unit x Rp12.000) = Rp1.000.000 + Rp1.800.000 = Rp2.800.000.",
  },
  // --- Akuntansi Manajemen - Biaya ---
  {
    type: "Akuntansi Manajemen – Biaya",
    question:
      "Dalam perusahaan manufaktur, biaya bahan baku, tenaga kerja langsung, dan overhead pabrik termasuk ke dalam:",
    options: {
      a: "Biaya administrasi",
      b: "Biaya pemasaran",
      c: "Biaya produksi",
      d: "Biaya periode",
      e: "Biaya non-operasional",
    },
    correct: "c",
    explanation:
      "Biaya produksi adalah seluruh biaya yang diperlukan untuk menghasilkan produk. Biaya ini akan masuk ke persediaan sampai produk dijual.",
  },
  // --- Studi Kasus - Break Even Point (BEP) ---
  {
    type: "Studi Kasus – Break Even Point (BEP)",
    question:
      "Kasus: PT Aqua menjual air minum dengan harga Rp5.000 per botol. Biaya variabel Rp3.000 per botol, biaya tetap Rp20 juta. Berapa BEP dalam unit?",
    options: {
      a: "5.000 unit",
      b: "8.000 unit",
      c: "10.000 unit",
      d: "12.000 unit",
      e: "15.000 unit",
    },
    correct: "c",
    explanation:
      "BEP = Biaya Tetap / (Harga – Biaya Variabel) = Rp20.000.000 / (Rp5.000 – Rp3.000) = Rp20.000.000 / Rp2.000 = 10.000 unit.",
  },
  // --- Audit - Konfirmasi ---
  {
    type: "Audit – Konfirmasi",
    question:
      "Dalam audit, prosedur konfirmasi paling sering digunakan untuk menguji akun:",
    options: {
      a: "Persediaan",
      b: "Kas kecil",
      c: "Piutang usaha",
      d: "Beban dibayar di muka",
      e: "Aset tetap",
    },
    correct: "c",
    explanation:
      "Konfirmasi digunakan auditor untuk menguji keberadaan dan kelengkapan piutang usaha dengan meminta konfirmasi langsung ke pihak debitur. Menurut PSA 505 di Indonesia, konfirmasi eksternal penting untuk piutang.",
  },
  // --- Studi Kasus - Skandal Akuntansi (Kasus Enron) ---
  {
    type: "Studi Kasus – Skandal Akuntansi (Kasus Enron)",
    question:
      "Kasus Enron (2001) mengajarkan pentingnya prinsip transparansi. Enron menggunakan Special Purpose Entities (SPEs) untuk menyembunyikan utang. Praktik ini melanggar konsep akuntansi apa?",
    options: {
      a: "Konsep Kesinambungan Usaha",
      b: "Konsep Kewajaran Penyajian (Fair Presentation)",
      c: "Konsep Basis Akrual",
      d: "Konsep Pengungkapan Penuh (Full Disclosure)",
      e: "Konsep Konsistensi",
    },
    correct: "d",
    explanation:
      "Enron tidak mengungkap utang dalam laporan keuangannya, padahal seharusnya sesuai prinsip full disclosure, semua informasi material harus dipaparkan agar laporan tidak menyesatkan pemakai.",
  },
  // --- Akuntansi Dasar - Jurnal Penyesuaian ---
  {
    type: "Akuntansi Dasar – Jurnal Penyesuaian",
    question:
      "PT Sejahtera memiliki beban gaji Rp10.000.000 yang belum dibayar pada akhir periode. Jurnal penyesuaian yang benar adalah:",
    options: {
      a: "Debit Kas Rp10.000.000; Kredit Gaji Dibayar Rp10.000.000",
      b: "Debit Gaji Dibayar Rp10.000.000; Kredit Kas Rp10.000.000",
      c: "Debit Beban Gaji Rp10.000.000; Kredit Utang Gaji Rp10.000.000",
      d: "Debit Utang Gaji Rp10.000.000; Kredit Beban Gaji Rp10.000.000",
      e: "Debit Modal Rp10.000.000; Kredit Kas Rp10.000.000",
    },
    correct: "c",
    explanation:
      "Jurnal penyesuaian mencatat beban yang sudah terjadi tapi belum dibayar. Beban gaji dicatat di debit, utang gaji di kredit. Ini konsisten dengan basis akrual sesuai PSAK.",
  },
  // --- Laporan Keuangan - Arus Kas ---
  {
    type: "Laporan Keuangan – Arus Kas",
    question:
      "Aktivitas berikut masuk dalam laporan arus kas bagian pendanaan (financing), kecuali:",
    options: {
      a: "Pembayaran dividen",
      b: "Penerbitan saham baru",
      c: "Pinjaman dari bank",
      d: "Pembelian peralatan",
      e: "Pelunasan obligasi",
    },
    correct: "d",
    explanation:
      "Pembelian peralatan masuk ke aktivitas investasi. Aktivitas pendanaan hanya mencakup transaksi dengan pemilik (ekuitas) atau kreditur (utang jangka panjang).",
  },
  // --- Studi Kasus - Laporan Keuangan Garuda Indonesia (2018) ---
  {
    type: "Studi Kasus – Laporan Keuangan Garuda Indonesia (2018)",
    question:
      "Kasus: Laporan keuangan Garuda 2018 sempat menuai kontroversi karena pencatatan pendapatan Rp239,94 juta dari kerja sama dengan Mahata. Mengapa kasus ini dipermasalahkan oleh OJK?",
    options: {
      a: "Pendapatan dicatat terlalu kecil",
      b: "Pendapatan dicatat sebelum direalisasi",
      c: "Liabilitas dicatat terlalu besar",
      d: "Beban tidak diakui",
      e: "Dividen dibagikan secara salah",
    },
    correct: "b",
    explanation:
      "Menurut PSAK 23, pendapatan hanya boleh diakui ketika manfaat ekonomis kemungkinan besar akan mengalir ke entitas dan dapat diukur secara andal. Dalam kasus Garuda, pendapatan dicatat padahal masih berupa piutang yang belum jelas realisasinya.",
  },
  // --- PSAK - Instrumen Keuangan ---
  {
    type: "PSAK – Instrumen Keuangan",
    question:
      "PT Bank Mandiri membeli obligasi korporasi untuk diperdagangkan jangka pendek. Sesuai PSAK 71 (IFRS 9), instrumen ini dikategorikan sebagai:",
    options: {
      a: "Amortized cost",
      b: "Held to maturity",
      c: "Fair value through profit or loss (FVTPL)",
      d: "Fair value through other comprehensive income (FVOCI)",
      e: "Loan and receivables",
    },
    correct: "c",
    explanation:
      "Instrumen yang dimiliki untuk tujuan trading wajib dikategorikan FVTPL, diukur pada nilai wajar, dan perubahan nilainya diakui ke laba rugi.",
  },
  // --- Akuntansi Manajemen - Activity Based Costing (ABC) ---
  {
    type: "Akuntansi Manajemen – Activity Based Costing (ABC)",
    question:
      "Keunggulan metode Activity Based Costing (ABC) dibanding metode tradisional adalah:",
    options: {
      a: "Lebih sederhana dan murah",
      b: "Mengalokasikan biaya hanya berdasarkan jam kerja langsung",
      c: "Memberikan alokasi biaya lebih akurat berdasarkan aktivitas",
      d: "Tidak menggunakan cost driver",
      e: "Tidak dapat digunakan untuk jasa",
    },
    correct: "c",
    explanation:
      "ABC mengalokasikan biaya overhead berdasarkan aktivitas yang menimbulkan biaya (cost drivers), sehingga menghasilkan harga pokok produk lebih realistis dibanding metode tradisional.",
  },
  // --- Studi Kasus - Skandal WorldCom (2002) ---
  {
    type: "Studi Kasus – Skandal WorldCom (2002)",
    question:
      "Kasus WorldCom melibatkan manipulasi pencatatan biaya dengan cara mengklasifikasikan beban operasional sebagai aset. Praktik ini melanggar prinsip akuntansi apa?",
    options: {
      a: "Matching principle",
      b: "Cost principle",
      c: "Revenue recognition",
      d: "Going concern",
      e: "Prudence",
    },
    correct: "a",
    explanation:
      "Beban seharusnya dicatat pada periode saat terjadi, bukan dikapitalisasi sebagai aset. Dengan memindahkan beban ke aset, laba terlihat lebih besar. Ini melanggar prinsip matching (kesesuaian biaya dan pendapatan).",
  },
  // --- Audit - Risiko Audit ---
  {
    type: "Audit – Risiko Audit",
    question:
      "Risiko audit yang terjadi ketika auditor menyimpulkan laporan keuangan bebas salah saji material padahal sebenarnya salah disebut:",
    options: {
      a: "Risiko deteksi",
      b: "Risiko pengendalian",
      c: "Risiko bawaan",
      d: "Risiko audit",
      e: "Risiko bisnis",
    },
    correct: "d",
    explanation:
      "Risiko audit adalah risiko auditor salah memberikan opini. Komponen utamanya: risiko bawaan, risiko pengendalian, dan risiko deteksi.",
  },
  // --- Perpajakan - PPh Badan ---
  {
    type: "Perpajakan – PPh Badan",
    question: "Tarif PPh Badan di Indonesia tahun 2023 adalah:",
    options: {
      a: "20%",
      b: "22%",
      c: "25%",
      d: "30%",
      e: "35%",
    },
    correct: "b",
    explanation:
      "UU HPP (Harmonisasi Peraturan Perpajakan) menetapkan tarif PPh Badan 22% berlaku tahun 2022 dan seterusnya. Tarif ini turun dari sebelumnya 25%.",
  },
  // --- Studi Kasus - Perpajakan Perusahaan ---
  {
    type: "Studi Kasus – Perpajakan Perusahaan",
    question:
      "Kasus: PT ABC mencatat penjualan Rp10 miliar dengan HPP Rp6 miliar, beban operasional Rp2 miliar, dan bunga Rp200 juta. Berapa PPh Badan terutang (tarif 22%)?",
    options: {
      a: "Rp396 juta",
      b: "Rp400 juta",
      c: "Rp420 juta",
      d: "Rp440 juta",
      e: "Rp450 juta",
    },
    correct: "a",
    explanation:
      "Laba sebelum pajak = Rp10 miliar – Rp6 miliar – Rp2 miliar – Rp0,2 miliar = Rp1,8 miliar. PPh Badan = 22% x Rp1,8 miliar = Rp396 juta.",
  },
  // --- Etika Profesi Akuntansi ---
  {
    type: "Etika Profesi Akuntansi",
    question:
      "Seorang akuntan publik menerima hadiah mewah dari klien menjelang proses audit. Hal ini melanggar prinsip etika profesi IAPI yaitu:",
    options: {
      a: "Kompetensi profesional",
      b: "Kerahasiaan",
      c: "Integritas",
      d: "Objektivitas dan independensi",
      e: "Perilaku profesional",
    },
    correct: "d",
    explanation:
      "Penerimaan hadiah dapat mengganggu independensi auditor. Prinsip utama profesi akuntan adalah objektivitas, artinya bebas dari benturan kepentingan dan tekanan eksternal.",
  },
  // --- Akuntansi Keuangan - Penyusutan Aset Tetap ---
  {
    type: "Akuntansi Keuangan – Penyusutan Aset Tetap",
    question:
      "PT Sentosa membeli mesin seharga Rp500.000.000 dengan umur ekonomis 10 tahun tanpa nilai residu. Jika perusahaan menggunakan metode garis lurus, beban penyusutan tahunan adalah:",
    options: {
      a: "Rp25.000.000",
      b: "Rp40.000.000",
      c: "Rp45.000.000",
      d: "Rp50.000.000",
      e: "Rp55.000.000",
    },
    correct: "d",
    explanation:
      "Metode garis lurus = (Harga perolehan – Nilai residu) / Umur manfaat = Rp500 juta / 10 = Rp50 juta per tahun.",
  },
  // --- Akuntansi Keuangan - Leasing (PSAK 73/IFRS 16) ---
  {
    type: "Akuntansi Keuangan – Leasing (PSAK 73/IFRS 16)",
    question:
      "Menurut PSAK 73, sewa gedung selama 5 tahun dengan kewajiban kontraktual harus dicatat sebagai:",
    options: {
      a: "Beban sewa langsung",
      b: "Aset sewa dan liabilitas sewa",
      c: "Hanya beban operasional",
      d: "Hanya dicatat jika sewa >10 tahun",
      e: "Tidak perlu dicatat",
    },
    correct: "b",
    explanation:
      "PSAK 73 mewajibkan perusahaan mengakui right-of-use asset (aset hak guna) dan lease liability (liabilitas sewa) kecuali untuk sewa jangka pendek (<12 bulan) atau aset bernilai rendah.",
  },
  // --- Studi Kasus - Skandal Enron (2001) ---
  {
    type: "Studi Kasus – Skandal Enron (2001)",
    question:
      "Enron menggunakan Special Purpose Entity (SPE) untuk menyembunyikan utang. Praktik ini melanggar prinsip konsolidasi dalam IFRS, karena:",
    options: {
      a: "Anak perusahaan hanya boleh dikonsolidasi jika menguntungkan",
      b: "Entitas dengan kendali substantif tetap harus dikonsolidasi",
      c: "SPE tidak dianggap sebagai entitas hukum",
      d: "Utang boleh dipindahkan jika ada perjanjian legal",
      e: "Tidak ada aturan konsolidasi sebelum 2010",
    },
    correct: "b",
    explanation:
      "IFRS 10 mewajibkan konsolidasi bila perusahaan memiliki power to control dan memperoleh manfaat dari entitas lain. Enron menyalahgunakan SPE untuk menyembunyikan utang sehingga neraca tampak sehat.",
  },
  // --- Akuntansi Keuangan - Konsolidasi ---
  {
    type: "Akuntansi Keuangan – Konsolidasi",
    question:
      "PT Induk memiliki 80% saham PT Anak. Laba bersih PT Anak tahun ini Rp500.000.000. Bagian laba yang diatribusikan kepada kepentingan nonpengendali adalah:",
    options: {
      a: "Rp50.000.000",
      b: "Rp80.000.000",
      c: "Rp100.000.000",
      d: "Rp150.000.000",
      e: "Rp200.000.000",
    },
    correct: "c",
    explanation:
      "Bagian laba untuk Kepentingan Nonpengendali (KNP) dihitung berdasarkan persentase kepemilikan minoritas. Perhitungan: 20% × Rp500 juta = Rp100 juta.",
  },
  // --- Studi Kasus - Bank Century (2008) ---
  {
    type: "Studi Kasus – Bank Century (2008)",
    question:
      "Kasus bailout Bank Century menimbulkan kontroversi karena penilaian aset tidak mencerminkan nilai sebenarnya. Prinsip akuntansi yang dilanggar adalah:",
    options: {
      a: "Going concern",
      b: "Historical cost",
      c: "Fair value measurement",
      d: "Prudence (kehati-hatian)",
      e: "Matching principle",
    },
    correct: "d",
    explanation:
      "Dalam kondisi krisis, aset bermasalah dicatat terlalu optimistis. Prinsip prudence mengharuskan pencatatan konservatif agar tidak menyesatkan pemakai laporan keuangan.",
  },
  // --- Audit - Bukti Audit ---
  {
    type: "Audit – Bukti Audit",
    question: "Bukti audit yang dianggap paling andal adalah:",
    options: {
      a: "Konfirmasi dari pihak eksternal",
      b: "Diskusi dengan manajemen",
      c: "Dokumen internal perusahaan",
      d: "Perhitungan auditor sendiri",
      e: "Observasi langsung auditor",
    },
    correct: "a",
    explanation:
      "Menurut SA 500, bukti eksternal lebih reliabel dibanding bukti internal karena independensi sumbernya lebih tinggi.",
  },
  // --- Akuntansi Biaya - Break Even Point (BEP) ---
  {
    type: "Akuntansi Biaya – Break Even Point (BEP)",
    question:
      "PT Maju memproduksi barang dengan harga jual Rp50.000/unit, biaya variabel Rp30.000/unit, biaya tetap Rp100.000.000. BEP dalam unit adalah:",
    options: {
      a: "2.000 unit",
      b: "3.000 unit",
      c: "4.000 unit",
      d: "5.000 unit",
      e: "6.000 unit",
    },
    correct: "d",
    explanation:
      "BEP = Biaya tetap / (Harga jual – Biaya variabel) = Rp100.000.000 / (Rp50.000 – Rp30.000) = 5.000 unit.",
  },
  // --- Perpajakan - PPN ---
  {
    type: "Perpajakan – PPN",
    question:
      "Tarif PPN Indonesia per 1 April 2022 sesuai UU HPP adalah:",
    options: {
      a: "10%",
      b: "11%",
      c: "12%",
      d: "15%",
      e: "20%",
    },
    correct: "b",
    explanation:
      "Tarif PPN naik dari 10% ke 11% mulai 1 April 2022, dan rencananya akan naik lagi menjadi 12% paling lambat 1 Januari 2025.",
  },
  // --- Studi Kasus - Pajak Digital Netflix & Google ---
  {
    type: "Studi Kasus – Pajak Digital Netflix & Google",
    question:
      "Pemerintah Indonesia mengenakan PPN atas layanan digital asing seperti Netflix dan Google Play. Kebijakan ini bertujuan untuk:",
    options: {
      a: "Melindungi perusahaan lokal dari persaingan",
      b: "Memperluas basis pajak dengan mengikuti digitalisasi ekonomi",
      c: "Mengurangi konsumsi masyarakat terhadap produk digital",
      d: "Mengganti PPh dengan PPN",
      e: "Menutup defisit anggaran",
    },
    correct: "b",
    explanation:
      "Era ekonomi digital menuntut pajak dipungut dari transaksi lintas negara. OECD juga mendorong negara-negara untuk mengenakan pajak atas perusahaan digital yang mendapat penghasilan signifikan.",
  },
  // --- Akuntansi Manajemen - Budgeting ---
  {
    type: "Akuntansi Manajemen – Budgeting",
    question: "Fungsi utama penyusunan anggaran (budgeting) adalah:",
    options: {
      a: "Menentukan dividen",
      b: "Membatasi kewenangan manajemen",
      c: "Menjadi alat perencanaan dan pengendalian",
      d: "Mengurangi risiko audit",
      e: "Menghindari pajak",
    },
    correct: "c",
    explanation:
      "Budgeting adalah alat perencanaan (planning) untuk masa depan, sekaligus pengendalian (controlling) agar realisasi sesuai target.",
  },
  // --- Etika - Skandal Arthur Andersen ---
  {
    type: "Etika – Skandal Arthur Andersen",
    question:
      "Arthur Andersen kehilangan reputasi karena terlibat dalam skandal Enron. Pelajaran utama kasus ini adalah pentingnya:",
    options: {
      a: "Fleksibilitas dalam interpretasi standar",
      b: "Independensi auditor dari klien",
      c: "Auditor fokus hanya pada angka, bukan kebijakan",
      d: "Audit tidak perlu mencakup pengendalian internal",
      e: "Akuntansi kreatif sah selama sesuai hukum",
    },
    correct: "b",
    explanation:
      "Arthur Andersen terlalu dekat dengan Enron (audit + konsultasi), sehingga kehilangan independensi dan gagal mendeteksi kecurangan.",
  },
  // --- Akuntansi Keuangan - Goodwill ---
  {
    type: "Akuntansi Keuangan – Goodwill",
    question: "Goodwill muncul ketika:",
    options: {
      a: "Nilai aset = nilai pasar",
      b: "Perusahaan membeli aset tetap lebih murah dari harga pasar",
      c: "Harga akuisisi > nilai wajar aset bersih yang diperoleh",
      d: "Nilai pasar saham turun",
      e: "Perusahaan menghapus piutang tak tertagih",
    },
    correct: "c",
    explanation:
      "Goodwill mencerminkan keunggulan nonfisik (brand, reputasi, loyalitas pelanggan). Dicatat hanya jika terjadi akuisisi.",
  },
  // --- Studi Kasus - Akuisisi Gojek-Tokopedia (GoTo) ---
  {
    type: "Studi Kasus – Akuisisi Gojek-Tokopedia (GoTo)",
    question:
      "Dalam merger Gojek-Tokopedia (GoTo), salah satu tantangan akuntansinya adalah pengukuran:",
    options: {
      a: "Piutang dagang",
      b: "Goodwill dan nilai wajar aset tidak berwujud",
      c: "Utang dagang",
      d: "Kas setara kas",
      e: "Persediaan",
    },
    correct: "b",
    explanation:
      "Merger startup sering menghasilkan goodwill besar karena valuasi berbasis prospek masa depan, bukan aset fisik.",
  },
  // --- Audit - Pengendalian Internal ---
  {
    type: "Audit – Pengendalian Internal",
    question: "Komponen utama COSO Framework (pengendalian internal) adalah:",
    options: {
      a: "Environment, risk assessment, control activities, information & communication, monitoring",
      b: "Planning, budgeting, controlling, directing, evaluating",
      c: "Leadership, governance, compliance, culture, ethics",
      d: "Assets, liabilities, equity, income, expense",
      e: "Input, process, output",
    },
    correct: "a",
    explanation:
      "COSO digunakan sebagai kerangka kerja internasional dalam merancang dan mengevaluasi pengendalian internal.",
  },
  // --- Akuntansi Sektor Publik ---
  {
    type: "Akuntansi Sektor Publik",
    question:
      "Menurut SAP (Standar Akuntansi Pemerintahan), laporan yang wajib disajikan pemerintah daerah adalah, kecuali:",
    options: {
      a: "Laporan Realisasi Anggaran",
      b: "Neraca",
      c: "Laporan Arus Kas",
      d: "Laporan Keuangan Konsolidasian BUMN",
      e: "Catatan atas Laporan Keuangan",
    },
    correct: "d",
    explanation:
      "BUMN bukan bagian dari pemerintah daerah, sehingga laporan konsolidasi BUMN tidak termasuk dalam SAP.",
  },
  // --- Studi Kasus - Korupsi Jiwasraya ---
  {
    type: "Studi Kasus – Korupsi Jiwasraya",
    question:
      "Kasus Jiwasraya terjadi karena perusahaan menempatkan investasi pada saham gorengan. Dari perspektif akuntansi, hal ini terkait dengan:",
    options: {
      a: "Misklasifikasi kas",
      b: "Penurunan nilai (impairment) aset keuangan",
      c: "Salah saji piutang",
      d: "Perhitungan pajak tidak tepat",
      e: "Tidak ada pelaporan goodwill",
    },
    correct: "b",
    explanation:
      "Saham gorengan overvalued, sehingga nilai investasinya turun drastis. Perusahaan gagal mengakui impairment loss sesuai PSAK 71.",
  },
  // --- Akuntansi Keuangan - Penurunan Nilai (Impairment) ---
  {
    type: "Akuntansi Keuangan – Penurunan Nilai (Impairment)",
    question:
      "Jika nilai tercatat aset tetap Rp1 miliar, nilai terpulihkan (recoverable amount) Rp800 juta, maka perusahaan harus:",
    options: {
      a: "Mencatat laba selisih Rp200 juta",
      b: "Mencatat rugi penurunan nilai Rp200 juta",
      c: "Tidak mencatat apa-apa",
      d: "Menghapus aset langsung",
      e: "Mengakui goodwill",
    },
    correct: "b",
    explanation:
      "PSAK 48 mengatur bahwa aset dicatat sebesar nilai terpulihkan. Jika nilai tercatat > recoverable amount, selisihnya diakui sebagai kerugian.",
  },
  // --- Akuntansi Manajemen - Balanced Scorecard ---
  {
    type: "Akuntansi Manajemen – Balanced Scorecard",
    question:
      "Balanced Scorecard mengukur kinerja dari 4 perspektif, yaitu:",
    options: {
      a: "Keuangan, pelanggan, proses internal, pembelajaran & pertumbuhan",
      b: "Keuangan, SDM, marketing, pelanggan",
      c: "Laba, pendapatan, efisiensi, pertumbuhan",
      d: "Input, output, outcome, impact",
      e: "Keuangan, pajak, aset, utang",
    },
    correct: "a",
    explanation:
      "Balanced Scorecard dikembangkan Kaplan & Norton untuk menilai kinerja organisasi lebih komprehensif, tidak hanya dari sisi keuangan.",
  },
  // --- Perpajakan - Transfer Pricing ---
  {
    type: "Perpajakan – Transfer Pricing",
    question: "Transfer pricing merujuk pada:",
    options: {
      a: "Harga jual eceran",
      b: "Penentuan harga jual antar perusahaan dalam satu grup",
      c: "Pajak atas ekspor-impor",
      d: "PPN atas barang digital",
      e: "Diskon khusus untuk anak perusahaan",
    },
    correct: "b",
    explanation:
      "Transfer pricing sering dipakai untuk mengalihkan laba ke yurisdiksi pajak rendah. Oleh karena itu, otoritas pajak menerapkan prinsip arm’s length (harga wajar pasar).",
  },
  // --- Studi Kasus - Starbucks & Pajak di UK ---
  {
    type: "Studi Kasus – Starbucks & Pajak di UK",
    question:
      "Starbucks dikritik di Inggris karena membayar pajak sangat kecil meskipun memiliki omzet besar. Hal ini terkait praktik:",
    options: {
      a: "Menghindari pencatatan pendapatan",
      b: "Transfer pricing melalui royalti & biaya lisensi",
      c: "Manipulasi kas",
      d: "Menghapus goodwill",
      e: "Tidak mengakui beban gaji",
    },
    correct: "b",
    explanation:
      "Starbucks memindahkan laba ke negara dengan pajak rendah melalui pembayaran royalti ke perusahaan afiliasi. Praktik ini legal tapi kontroversial karena dianggap tax avoidance.",
  },
  // --- IFRS - Fair Value Measurement (IFRS 13) ---
  {
    type: "IFRS – Fair Value Measurement (IFRS 13)",
    question:
      "Menurut IFRS 13, pengukuran fair value suatu aset atau liabilitas harus menggunakan:",
    options: {
      a: "Harga historis yang dibayar perusahaan",
      b: "Nilai residu dikurangi akumulasi penyusutan",
      c: "Harga keluar (exit price) di pasar utama atau pasar paling menguntungkan",
      d: "Estimasi manajemen tanpa rujukan ke pasar",
      e: "Nilai nominal ditambah bunga",
    },
    correct: "c",
    explanation:
      "Fair value bukan sekadar harga beli, melainkan nilai yang akan diterima untuk menjual aset atau dibayar untuk mengalihkan liabilitas pada tanggal pengukuran. IFRS 13 menekankan penggunaan market-based measurement, bukan entity-based.",
  },
  // --- Sustainability Reporting - ESG Disclosure ---
  {
    type: "Sustainability Reporting – ESG Disclosure",
    question:
      "Banyak perusahaan global kini diwajibkan melaporkan kinerja lingkungan, sosial, dan tata kelola (ESG). Standar yang umum digunakan adalah:",
    options: {
      a: "PSAK 1",
      b: "COSO Framework",
      c: "Global Reporting Initiative (GRI Standards)",
      d: "OECD Transfer Pricing Guidelines",
      e: "SAP (Standar Akuntansi Pemerintahan)",
    },
    correct: "c",
    explanation:
      "GRI adalah standar internasional untuk sustainability reporting. Perusahaan seperti Unilever, Nestlé, dan BUMN besar di Indonesia (misalnya Pertamina, PLN) menggunakan GRI untuk melaporkan emisi karbon, efisiensi energi, keberagaman gender, hingga dampak sosial.",
  },
  // --- Studi Kasus - Volkswagen Emission Scandal (2015) ---
  {
    type: "Studi Kasus – Volkswagen Emission Scandal (2015)",
    question:
      "Volkswagen ketahuan memasang software ilegal agar emisi mobil terlihat lebih rendah. Jika dilihat dari perspektif akuntansi & pelaporan keberlanjutan, masalah utamanya adalah:",
    options: {
      a: "Penyajian laporan arus kas tidak sesuai PSAK",
      b: "Manipulasi data non-keuangan yang memengaruhi persepsi pasar",
      c: "Penggunaan metode depresiasi tidak tepat",
      d: "Kesalahan klasifikasi persediaan",
      e: "Penilaian goodwill berlebihan",
    },
    correct: "b",
    explanation:
      "Kasus ini menunjukkan bahwa laporan keberlanjutan (sustainability report) sama pentingnya dengan laporan keuangan. Investor, regulator, dan masyarakat merasa tertipu karena angka emisi yang dilaporkan tidak sesuai realita.",
  },
  // --- Akuntansi Keuangan - Instrumen Keuangan (PSAK 71/IFRS 9) ---
  {
    type: "Akuntansi Keuangan – Instrumen Keuangan (PSAK 71/IFRS 9)",
    question:
      "Jika sebuah perusahaan membeli obligasi untuk diperdagangkan jangka pendek, maka aset tersebut diklasifikasikan sebagai:",
    options: {
      a: "Held to maturity (dimiliki hingga jatuh tempo)",
      b: "Fair value through profit or loss (FVTPL)",
      c: "Fair value through other comprehensive income (FVOCI)",
      d: "Amortized cost",
      e: "Historical cost",
    },
    correct: "b",
    explanation:
      "Obligasi untuk tujuan trading harus diukur pada fair value, dan perubahan nilainya langsung diakui dalam laba rugi. Misalnya, jika harga obligasi naik Rp2 miliar, perusahaan langsung mengakui laba investasi di laporan laba rugi.",
  },
  // --- Studi Kasus - Crypto Accounting (Bitcoin di Tesla) ---
  {
    type: "Studi Kasus – Crypto Accounting (Bitcoin di Tesla)",
    question:
      "Tesla membeli Bitcoin senilai USD 1,5 miliar pada 2021. Menurut US GAAP dan PSAK saat ini, aset kripto diperlakukan sebagai:",
    options: {
      a: "Kas setara kas",
      b: "Aset keuangan",
      c: "Aset tidak berwujud dengan masa manfaat tak terbatas",
      d: "Persediaan dagang",
      e: "Liabilitas jangka pendek",
    },
    correct: "c",
    explanation:
      "Bitcoin dan kripto lain diperlakukan sebagai intangible asset karena tidak memiliki bentuk fisik dan tidak dikategorikan sebagai kas/ekivalen kas. Namun, perlakuannya kontroversial, karena volatilitas harga sangat tinggi.",
  },
  // --- IFRS - Revenue Recognition (IFRS 15/PSAK 72) ---
  {
    type: "IFRS – Revenue Recognition (IFRS 15/PSAK 72)",
    question:
      "IFRS 15 mengatur pengakuan pendapatan berdasarkan:",
    options: {
      a: "Kas diterima",
      b: "Kontrak disetujui manajemen",
      c: "Transfer kendali barang/jasa kepada pelanggan",
      d: "Estimasi laba perusahaan",
      e: "Penetapan harga jual",
    },
    correct: "c",
    explanation:
      "Pendapatan tidak lagi diakui hanya ketika kas diterima, tetapi saat perusahaan mentransfer kendali barang/jasa. Misalnya, perusahaan kontraktor mengakui pendapatan secara bertahap sesuai progress pekerjaan (percentage of completion).",
  },
  // --- Studi Kasus - Garuda Indonesia (2018) ---
  {
    type: "Studi Kasus – Garuda Indonesia (2018)",
    question:
      "Garuda Indonesia dilaporkan mengakui pendapatan dari kerja sama penyedia WiFi meski belum diterima, sehingga mencatat laba padahal seharusnya rugi. Kesalahan ini terkait dengan:",
    options: {
      a: "PSAK 14 (Persediaan)",
      b: "PSAK 46 (Pajak Penghasilan)",
      c: "PSAK 72 (Pendapatan dari Kontrak dengan Pelanggan)",
      d: "PSAK 73 (Sewa)",
      e: "PSAK 71 (Instrumen Keuangan)",
    },
    correct: "c",
    explanation:
      "Pendapatan harus diakui saat kontrol berpindah ke pelanggan. Dalam kasus Garuda, pendapatan WiFi belum memenuhi kriteria sehingga tidak boleh diakui. Hal ini menimbulkan skandal laporan keuangan dan sanksi OJK.",
  },
  // --- Akuntansi Lingkungan - Carbon Accounting ---
  {
    type: "Akuntansi Lingkungan – Carbon Accounting",
    question:
      "Perusahaan yang menghasilkan emisi karbon besar sering diwajibkan melaporkan dan bahkan membeli izin emisi (carbon credit). Dalam akuntansi, carbon credit biasanya dicatat sebagai:",
    options: {
      a: "Kas setara kas",
      b: "Beban operasional",
      c: "Aset tak berwujud",
      d: "Liabilitas jangka panjang",
      e: "Pendapatan ditangguhkan",
    },
    correct: "c",
    explanation:
      "Carbon credit adalah hak untuk mengeluarkan sejumlah emisi. Perusahaan yang membelinya mencatat sebagai intangible asset. Misalnya, PLN atau pabrik semen membeli carbon credit untuk mematuhi peraturan lingkungan.",
  },
  // --- Studi Kasus - ExxonMobil dan Climate Risk Disclosure ---
  {
    type: "Studi Kasus – ExxonMobil dan Climate Risk Disclosure",
    question:
      "Investor mendesak ExxonMobil untuk mengungkapkan risiko iklim dalam laporan keuangan. Hal ini mencerminkan:",
    options: {
      a: "Permintaan agar perusahaan lebih transparan terkait going concern",
      b: "Permintaan agar perusahaan menurunkan laba",
      c: "Permintaan agar perusahaan mencatat utang lebih tinggi",
      d: "Permintaan agar perusahaan menambah goodwill",
      e: "Permintaan agar perusahaan tidak membayar dividen",
    },
    correct: "a",
    explanation:
      "Risiko iklim (climate risk) dapat mengancam kelangsungan usaha, misalnya jika bisnis berbasis energi fosil dilarang di masa depan. Investor ingin perusahaan transparan mengenai potensi dampak lingkungan terhadap profitabilitas jangka panjang.",
  },
  // --- Akuntansi Keuangan - Foreign Exchange (PSAK 10) ---
  {
    type: "Akuntansi Keuangan – Foreign Exchange (PSAK 10)",
    question:
      "Jika perusahaan Indonesia memiliki utang USD 1 juta, kurs saat pinjaman Rp14.000/USD, tetapi di akhir tahun kurs naik menjadi Rp15.000/USD, maka:",
    options: {
      a: "Tidak ada dampak laporan keuangan",
      b: "Perusahaan mencatat keuntungan kurs Rp1 miliar",
      c: "Perusahaan mencatat kerugian kurs Rp1 miliar",
      d: "Perusahaan mencatat kerugian kurs Rp15 miliar",
      e: "Perusahaan mencatat kerugian kurs Rp14 miliar",
    },
    correct: "c",
    explanation:
      "Kenaikan kurs membuat kewajiban meningkat. Selisih = (15.000 – 14.000) × 1 juta = Rp1 miliar rugi selisih kurs.",
  },
  // --- Studi Kasus - Laporan Keuangan PLN ---
  {
    type: "Studi Kasus – Laporan Keuangan PLN",
    question:
      "PLN melaporkan beban kurs besar karena utang dalam USD, sementara pendapatan utama dalam rupiah. Hal ini menunjukkan risiko:",
    options: {
      a: "Risiko likuiditas",
      b: "Risiko kredit",
      c: "Risiko pasar (valuta asing)",
      d: "Risiko operasional",
      e: "Risiko reputasi",
    },
    correct: "c",
    explanation:
      "Mismatch antara pendapatan (Rp) dan utang (USD) membuat PLN rentan terhadap fluktuasi kurs. Ini adalah foreign exchange risk.",
  },
  // --- IFRS - Impairment of Goodwill (IAS 36 / PSAK 48) ---
  {
    type: "IFRS – Impairment of Goodwill (IAS 36 / PSAK 48)",
    question: "Goodwill harus diuji penurunan nilainya minimal:",
    options: {
      a: "Setiap bulan",
      b: "Setiap kuartal",
      c: "Setiap akhir tahun atau lebih sering jika ada indikasi",
      d: "Hanya saat akuisisi",
      e: "Tidak perlu diuji",
    },
    correct: "c",
    explanation:
      "Goodwill tidak diamortisasi, tetapi diuji impairment tahunan. Contoh: Akuisisi startup yang gagal berkembang akan menyebabkan goodwill impairment.",
  },
  // --- Studi Kasus - Uber IPO (2019) ---
  {
    type: "Studi Kasus – Uber IPO (2019)",
    question:
      "Saat IPO, Uber mencatat kerugian besar tetapi valuasi tinggi. Investor tetap tertarik karena:",
    options: {
      a: "Laporan keuangan Uber salah saji",
      b: "Uber memiliki prospek pertumbuhan dan intangible asset seperti brand & network effect",
      c: "Uber menyembunyikan utang",
      d: "Uber tidak perlu mengikuti IFRS",
      e: "Uber memanipulasi kurs",
    },
    correct: "b",
    explanation:
      "Valuasi startup sering tidak mencerminkan aset fisik, tetapi aset tidak berwujud seperti platform, data pengguna, dan jaringan.",
  },
  // --- Akuntansi Manajemen - Activity Based Costing (ABC) ---
  {
    type: "Akuntansi Manajemen – Activity Based Costing (ABC)",
    question:
      "Activity Based Costing lebih akurat dibanding metode tradisional karena:",
    options: {
      a: "Mengalokasikan biaya berdasarkan volume produksi",
      b: "Mengalokasikan biaya berdasarkan aktivitas yang menimbulkan biaya",
      c: "Mengabaikan biaya overhead",
      d: "Hanya menghitung biaya variabel",
      e: "Menggunakan biaya standar",
    },
    correct: "b",
    explanation:
      "ABC mengidentifikasi cost driver. Misalnya, biaya listrik tidak dialokasikan per unit, tetapi per jam mesin. Cocok untuk industri kompleks seperti manufaktur pesawat (Airbus, Boeing).",
  },
  // --- Studi Kasus - Pertamina dan Biaya Overhead ---
  {
    type: "Studi Kasus – Pertamina dan Biaya Overhead",
    question:
      "Pertamina memiliki biaya operasional besar pada kilang minyak. Dengan metode ABC, biaya tersebut sebaiknya dialokasikan ke:",
    options: {
      a: "Volume produksi total",
      b: "Jumlah karyawan",
      c: "Aktivitas spesifik seperti jam operasi kilang",
      d: "Pendapatan perusahaan",
      e: "Hanya produk ekspor",
    },
    correct: "c",
    explanation:
      "Metode ABC membuat biaya lebih transparan dan adil, sehingga manajemen bisa menilai efisiensi aktivitas.",
  },
  // --- IFRS - Lease Accounting (IFRS 16 / PSAK 73) ---
  {
    type: "IFRS – Lease Accounting (IFRS 16 / PSAK 73)",
    question:
      "Salah satu dampak penerapan PSAK 73 bagi perusahaan dengan banyak sewa (leasing) adalah:",
    options: {
      a: "Tidak ada perubahan laporan keuangan",
      b: "Beban sewa lebih kecil",
      c: "Neraca menunjukkan liabilitas lebih besar karena semua sewa diakui",
      d: "Laba lebih tinggi",
      e: "Kas bertambah",
    },
    correct: "c",
    explanation:
      "Sewa jangka panjang yang dulu off-balance sheet kini harus diakui. Contoh: perusahaan retail seperti Alfamart, Indomaret kini mencatat ribuan kontrak sewa toko sebagai liabilitas.",
  },
  // --- Studi Kasus - WeWork Collapse (2019) ---
  {
    type: "Studi Kasus – WeWork Collapse (2019)",
    question:
      "WeWork gagal IPO karena investor sadar model bisnisnya terlalu bergantung pada sewa jangka panjang. Dari perspektif PSAK 73, masalah utama adalah:",
    options: {
      a: "Tidak transparan mengenai liabilitas sewa",
      b: "Tidak mengakui pendapatan",
      c: "Menghapus goodwill",
      d: "Tidak melaporkan kas",
      e: "Tidak membayar pajak",
    },
    correct: "a",
    explanation:
      "WeWork mencatat kontrak sewa jangka panjang, tapi tidak transparan soal kewajiban masa depan. PSAK 73/IFRS 16 kini mewajibkan keterbukaan.",
  },
  // --- Audit - Fraud Triangle ---
  {
    type: "Audit – Fraud Triangle",
    question:
      "Menurut teori Fraud Triangle, tiga elemen penyebab kecurangan adalah:",
    options: {
      a: "Opportunity, Pressure, Rationalization",
      b: "Cash, Assets, Liabilities",
      c: "Planning, Controlling, Monitoring",
      d: "Motivation, Execution, Reward",
      e: "Risk, Return, Compliance",
    },
    correct: "a",
    explanation:
      "Fraud terjadi ketika ada tekanan (pressure), kesempatan (opportunity), dan pembenaran diri (rationalization).",
  },
  // --- Studi Kasus - Kecurangan Toshiba (2015) ---
  {
    type: "Studi Kasus – Kecurangan Toshiba (2015)",
    question:
      "Toshiba ketahuan melebih-lebihkan laba hingga USD 1,2 miliar. Hal ini terutama karena:",
    options: {
      a: "Kesalahan depresiasi",
      b: "Manipulasi akrual pendapatan dan beban",
      c: "Salah klasifikasi kas",
      d: "Salah perhitungan kurs",
      e: "Salah hitung pajak",
    },
    correct: "b",
    explanation:
      "Manajemen Toshiba menekan unit bisnis untuk mencatat laba lebih tinggi dengan menunda beban dan mempercepat pendapatan.",
  },
  // --- Akuntansi Global - Sustainability Standards (ISSB) ---
  {
    type: "Akuntansi Global – Sustainability Standards (ISSB)",
    question:
      "Pada 2023, IFRS Foundation meluncurkan International Sustainability Standards Board (ISSB). Tujuannya adalah:",
    options: {
      a: "Menyatukan standar PSAK di seluruh dunia",
      b: "Menetapkan standar global untuk pelaporan keberlanjutan",
      c: "Mengatur audit di sektor publik",
      d: "Menghapus laporan arus kas",
      e: "Menetapkan tarif pajak karbon internasional",
    },
    correct: "b",
    explanation:
      "ISSB meluncurkan IFRS S1 & S2 untuk sustainability disclosure (iklim, ESG). Tujuannya adalah menciptakan standar internasional tunggal, mirip dengan IFRS untuk laporan keuangan.",
  },
  // --- Akuntansi Keuangan Lanjutan - Konsolidasi Laporan Keuangan ---
  {
    type: "Akuntansi Keuangan Lanjutan – Konsolidasi Laporan Keuangan",
    question:
      "PT Induk A memiliki 80% saham PT Anak B. Pada akhir tahun, PT Anak B melaporkan laba bersih Rp1.000.000.000. Bagaimana pengakuan laba dalam laporan keuangan konsolidasi?",
    options: {
      a: "Laba bersih induk hanya sebesar Rp800.000.000",
      b: "Laba bersih induk hanya sebesar Rp200.000.000",
      c: "Laba bersih konsolidasi seluruhnya Rp1.000.000.000 tanpa alokasi",
      d: "Laba bersih konsolidasi Rp1.000.000.000 dengan alokasi 80% ke induk dan 20% ke kepentingan nonpengendali",
      e: "Tidak ada laba konsolidasi karena laba hanya tercatat di entitas anak",
    },
    correct: "d",
    explanation:
      "Dalam laporan keuangan konsolidasi, laba bersih entitas anak ditambahkan secara penuh, lalu dialokasikan ke induk (80%) dan kepentingan nonpengendali (20%). Dengan demikian, konsolidasi mencerminkan pengendalian penuh meskipun kepemilikan tidak 100%.",
  },
  // --- Studi Kasus - Konsolidasi dan Goodwill ---
  {
    type: "Studi Kasus – Konsolidasi dan Goodwill",
    question:
      "Kasus: PT X membeli 100% saham PT Y seharga Rp15.000.000.000. Nilai wajar aset neto PT Y pada saat akuisisi adalah Rp12.000.000.000. Berapakah nilai goodwill yang diakui?",
    options: {
      a: "Rp2.000.000.000",
      b: "Rp3.000.000.000",
      c: "Rp12.000.000.000",
      d: "Rp15.000.000.000",
      e: "Tidak ada goodwill",
    },
    correct: "b",
    explanation:
      "Goodwill = Harga akuisisi – Nilai wajar aset neto = Rp15.000.000.000 – Rp12.000.000.000 = Rp3.000.000.000. Goodwill mencerminkan nilai lebih yang dibayar investor, biasanya karena reputasi, relasi bisnis, atau potensi keuntungan masa depan.",
  },
  // --- PSAK - Sewa (IFRS 16) ---
  {
    type: "PSAK – Sewa (IFRS 16)",
    question:
      "PT Z menyewa gedung untuk 10 tahun dengan pembayaran tetap. Sesuai PSAK 73 (adopsi IFRS 16), bagaimana perlakuan akuntansi bagi penyewa?",
    options: {
      a: "Dicatat sebagai beban sewa langsung setiap tahun",
      b: "Dicatat sebagai aset hak-guna dan liabilitas sewa",
      c: "Dicatat sebagai ekuitas tambahan",
      d: "Dicatat sebagai pendapatan tangguhan",
      e: "Tidak perlu dicatat karena hanya kontrak perjanjian",
    },
    correct: "b",
    explanation:
      "PSAK 73 mensyaratkan penyewa mengakui aset hak-guna (right-of-use asset) dan liabilitas sewa pada saat dimulainya kontrak. Hal ini menghapus perbedaan sewa operasi dan sewa pembiayaan yang sebelumnya ada di PSAK 30.",
  },
  // --- Studi Kasus - IFRS 16 di Maskapai Penerbangan ---
  {
    type: "Studi Kasus – IFRS 16 di Maskapai Penerbangan",
    question:
      "Kasus: Banyak maskapai global (termasuk Garuda Indonesia) melaporkan lonjakan besar pada total aset dan liabilitas sejak 2020. Apa penyebab utamanya?",
    options: {
      a: "Adanya restrukturisasi utang",
      b: "Penurunan harga bahan bakar",
      c: "Perubahan standar akuntansi sewa (IFRS 16)",
      d: "Peningkatan nilai goodwill",
      e: "Penjualan saham ke publik",
    },
    correct: "c",
    explanation:
      "Maskapai biasanya menyewa pesawat dalam kontrak jangka panjang. Sebelum IFRS 16, kontrak ini dicatat sebagai sewa operasi (hanya beban). Setelah IFRS 16 berlaku, kontrak sewa wajib diakui sebagai aset hak-guna dan liabilitas sewa, sehingga neraca perusahaan membengkak.",
  },
  // --- Akuntansi Manajemen - Analisis Break-Even Point (BEP) ---
  {
    type: "Akuntansi Manajemen – Analisis Break-Even Point (BEP)",
    question:
      "PT ABC menjual produk dengan harga Rp100.000/unit, biaya variabel Rp60.000/unit, dan biaya tetap Rp200.000.000. Berapakah titik impas penjualan dalam unit?",
    options: {
      a: "2.500 unit",
      b: "3.000 unit",
      c: "4.000 unit",
      d: "5.000 unit",
      e: "10.000 unit",
    },
    correct: "d",
    explanation:
      "BEP = Biaya Tetap / (Harga – Biaya Variabel) = Rp200.000.000 / (Rp100.000 – Rp60.000) = 5.000 unit. BEP membantu manajemen menentukan jumlah minimum penjualan agar tidak rugi.",
  },
  // --- Studi Kasus - Pricing Strategy ---
  {
    type: "Studi Kasus – Pricing Strategy",
    question:
      "Kasus: PT XYZ memiliki BEP pada 5.000 unit. Jika harga jual turun 10% karena persaingan pasar, bagaimana pengaruhnya terhadap BEP?",
    options: {
      a: "BEP turun karena harga lebih rendah",
      b: "BEP naik karena margin kontribusi lebih kecil",
      c: "BEP tetap sama",
      d: "BEP hanya berubah jika biaya tetap berubah",
      e: "BEP tidak terpengaruh",
    },
    correct: "b",
    explanation:
      "Jika harga turun, margin kontribusi per unit (harga – biaya variabel) menjadi lebih kecil, sehingga jumlah unit yang harus dijual untuk menutup biaya tetap akan meningkat.",
  },
  // --- Audit - Bukti Audit ---
  {
    type: "Audit – Bukti Audit",
    question:
      "Auditor ingin menguji keandalan piutang usaha PT A. Bukti audit mana yang paling andal?",
    options: {
      a: "Konfirmasi langsung ke pelanggan",
      b: "Laporan manajemen internal",
      c: "Wawancara dengan staf keuangan",
      d: "Analisis tren penjualan",
      e: "Perhitungan ulang umur piutang oleh auditor",
    },
    correct: "a",
    explanation:
      "Bukti audit yang diperoleh dari sumber eksternal independen (misalnya pelanggan) lebih dapat diandalkan daripada bukti dari internal perusahaan. Oleh karena itu, konfirmasi piutang adalah prosedur standar yang sangat penting.",
  },
  // --- Studi Kasus - Skandal Enron (2001) ---
  {
    type: "Studi Kasus – Skandal Enron (2001)",
    question:
      "Kasus: Skandal Enron terjadi karena penggunaan Special Purpose Entities (SPE) untuk menyembunyikan utang. Apa pelajaran utama yang diambil profesi akuntansi dari kasus ini?",
    options: {
      a: "Pentingnya akuntansi berbasis kas",
      b: "Perlunya auditor independen dan regulasi transparansi",
      c: "Penghapusan laporan arus kas",
      d: "Perlunya memperbesar laba bersih",
      e: "Penekanan pada matching principle",
    },
    correct: "b",
    explanation:
      "Kasus Enron mendorong lahirnya regulasi seperti Sarbanes-Oxley Act 2002 yang memperketat transparansi, tanggung jawab manajemen, serta independensi auditor. Enron menjadi contoh nyata bagaimana manipulasi laporan keuangan dapat menghancurkan perusahaan besar.",
  },
  // --- Perpajakan - Pajak Pertambahan Nilai (PPN) ---
  {
    type: "Perpajakan – Pajak Pertambahan Nilai (PPN)",
    question:
      "PT A menjual barang kena pajak senilai Rp1.000.000.000 dengan tarif PPN 11%. Berapakah jumlah PPN keluaran yang harus dipungut?",
    options: {
      a: "Rp100.000.000",
      b: "Rp110.000.000",
      c: "Rp111.000.000",
      d: "Rp120.000.000",
      e: "Rp121.000.000",
    },
    correct: "b",
    explanation:
      "PPN = 11% × Rp1.000.000.000 = Rp110.000.000. Perusahaan wajib memungut dari pembeli dan menyetorkannya ke negara, kecuali ada PPN masukan yang dapat dikreditkan.",
  },
  // --- Studi Kasus - PPN dalam Bisnis Digital ---
  {
    type: "Studi Kasus – PPN dalam Bisnis Digital",
    question:
      "Kasus: Sejak 2020, pemerintah Indonesia mewajibkan perusahaan digital asing (Netflix, Spotify, dll.) memungut PPN atas layanan mereka. Apa alasan utama kebijakan ini?",
    options: {
      a: "Agar perusahaan asing lebih kompetitif",
      b: "Untuk meningkatkan penggunaan dolar AS",
      c: "Untuk menciptakan level playing field dengan perusahaan lokal",
      d: "Untuk melarang layanan asing",
      e: "Untuk menggantikan pajak penghasilan",
    },
    correct: "c",
    explanation:
      "Sebelum aturan ini, perusahaan digital asing tidak memungut PPN sehingga harga mereka lebih murah dibandingkan penyedia lokal. Kebijakan PPN digital memastikan keadilan kompetisi dan memperluas basis pajak negara.",
  },
  // --- Akuntansi Keuangan Lanjutan - Revaluasi Aset Tetap ---
  {
    type: "Akuntansi Keuangan Lanjutan – Revaluasi Aset Tetap",
    question:
      "PT Nusantara melakukan revaluasi gedung yang awalnya dicatat Rp10.000.000.000 menjadi Rp15.000.000.000. Bagaimana perlakuan akuntansinya menurut PSAK 16?",
    options: {
      a: "Selisih Rp5.000.000.000 langsung diakui sebagai laba rugi",
      b: "Selisih Rp5.000.000.000 dicatat di ekuitas sebagai surplus revaluasi",
      c: "Nilai lama tetap digunakan, tidak boleh naik",
      d: "Selisih dicatat sebagai pendapatan ditangguhkan",
      e: "Dicatat sebagai utang jangka panjang",
    },
    correct: "b",
    explanation:
      "PSAK 16 mengatur bahwa kenaikan nilai akibat revaluasi tidak diakui sebagai laba rugi, melainkan dicatat dalam ekuitas (Surplus Revaluasi). Hal ini untuk mencegah fluktuasi laba akibat perubahan nilai pasar aset tetap.",
  },
  // --- Studi Kasus - Revaluasi Aset BUMN ---
  {
    type: "Studi Kasus – Revaluasi Aset BUMN",
    question:
      "Kasus: Tahun 2015, pemerintah mewajibkan BUMN melakukan revaluasi aset untuk meningkatkan ekuitas. Tujuan kebijakan ini adalah:",
    options: {
      a: "Memperbesar laba bersih tahunan",
      b: "Menaikkan nilai aset agar bisa menarik lebih banyak investor",
      c: "Menambah modal inti agar BUMN bisa memperoleh pinjaman lebih besar",
      d: "Mengurangi pembayaran pajak penghasilan",
      e: "Menghapuskan liabilitas jangka panjang",
    },
    correct: "c",
    explanation:
      "Revaluasi aset meningkatkan ekuitas, sehingga memperkuat struktur permodalan. Ini penting untuk BUMN yang membutuhkan leverage (pinjaman) untuk ekspansi proyek besar.",
  },
  // --- Akuntansi Pajak - Pajak Tangguhan ---
  {
    type: "Akuntansi Pajak – Pajak Tangguhan",
    question:
      "PT A mencatat penyusutan fiskal Rp500 juta, sedangkan penyusutan komersial Rp300 juta. Tarif pajak 22%. Bagaimana dampaknya?",
    options: {
      a: "Terjadi aset pajak tangguhan Rp44 juta",
      b: "Terjadi liabilitas pajak tangguhan Rp44 juta",
      c: "Terjadi aset pajak tangguhan Rp200 juta",
      d: "Terjadi liabilitas pajak tangguhan Rp200 juta",
      e: "Tidak ada dampak pajak tangguhan",
    },
    correct: "b",
    explanation:
      "Perbedaan temporer = Rp500 juta – Rp300 juta = Rp200 juta. Karena depresiasi fiskal lebih besar, laba kena pajak saat ini lebih kecil, sehingga pajak yang dibayar sekarang lebih kecil. Hal ini akan menimbulkan liabilitas pajak di masa depan. Perhitungan: Rp200 juta × 22% = Rp44 juta.",
  },
  // --- Studi Kasus - Pajak Tangguhan Perusahaan Tbk ---
  {
    type: "Studi Kasus – Pajak Tangguhan Perusahaan Tbk",
    question:
      "Kasus: Dalam laporan keuangan PT Telkom Indonesia 2021, terdapat akun “Liabilitas Pajak Tangguhan” yang cukup besar. Apa makna utamanya?",
    options: {
      a: "Pajak yang sudah dibayar berlebih",
      b: "Pajak masa depan yang harus dibayar akibat perbedaan temporer",
      c: "Pajak yang dihapuskan pemerintah",
      d: "Pajak yang tidak akan pernah dibayar",
      e: "Pajak final yang tidak relevan",
    },
    correct: "b",
    explanation:
      "Liabilitas pajak tangguhan timbul dari perbedaan waktu antara akuntansi komersial (PSAK) dan fiskal. Misalnya, penyusutan fiskal dipercepat sehingga laba fiskal lebih rendah saat ini, tetapi di masa depan laba fiskal lebih besar sehingga menimbulkan kewajiban pajak.",
  },
  // --- Akuntansi Keuangan - Penurunan Nilai Aset (Impairment) ---
  {
    type: "Akuntansi Keuangan – Penurunan Nilai Aset (Impairment)",
    question:
      "PT Delta memiliki mesin senilai Rp5 miliar, nilai tercatat Rp4 miliar, dan nilai kini arus kas masa depan Rp3,5 miliar. Bagaimana pencatatannya?",
    options: {
      a: "Tidak ada penurunan nilai",
      b: "Penurunan nilai Rp500 juta dicatat sebagai rugi",
      c: "Penurunan nilai Rp500 juta dicatat ke ekuitas",
      d: "Penurunan nilai Rp1 miliar dicatat sebagai rugi",
      e: "Aset tetap dihapuskan seluruhnya",
    },
    correct: "b",
    explanation:
      "Impairment terjadi jika nilai tercatat > nilai terpulihkan (recoverable amount). Nilai tercatat Rp4 miliar, sedangkan recoverable amount Rp3,5 miliar. Selisih Rp500 juta diakui sebagai rugi penurunan nilai di laporan laba rugi.",
  },
  // --- Studi Kasus - Impairment Goodwill ---
  {
    type: "Studi Kasus – Impairment Goodwill",
    question:
      "Kasus: Tahun 2020, PT Unilever Indonesia melakukan uji penurunan nilai goodwill dari akuisisi sebelumnya. Jika hasilnya nilai terpulihkan lebih rendah dari nilai tercatat, dampaknya adalah:",
    options: {
      a: "Dicatat sebagai laba komprehensif",
      b: "Dicatat sebagai rugi penurunan nilai",
      c: "Dicatat sebagai penambahan modal",
      d: "Tidak perlu dicatat",
      e: "Dicatat sebagai pendapatan ditangguhkan",
    },
    correct: "b",
    explanation:
      "Goodwill diuji impairment setiap tahun. Jika terjadi penurunan nilai, rugi dicatat langsung ke laporan laba rugi dan tidak dapat dipulihkan kembali (irreversible).",
  },
  // --- Akuntansi Keuangan - Instrumen Derivatif ---
  {
    type: "Akuntansi Keuangan – Instrumen Derivatif",
    question:
      "PT Bank membeli kontrak forward untuk lindung nilai pembelian dolar AS. Bagaimana pencatatan derivatif menurut PSAK 71?",
    options: {
      a: "Tidak perlu dicatat karena hanya kontrak",
      b: "Dicatat sebagai komitmen luar neraca",
      c: "Dicatat di neraca pada nilai wajar",
      d: "Dicatat sebagai aset tetap",
      e: "Dicatat sebagai modal disetor tambahan",
    },
    correct: "c",
    explanation:
      "PSAK 71 mengatur semua instrumen derivatif diakui di neraca pada nilai wajar, tidak peduli apakah digunakan untuk spekulasi atau lindung nilai.",
  },
  // --- Studi Kasus - Hedging Maskapai Indonesia ---
  {
    type: "Studi Kasus – Hedging Maskapai Indonesia",
    question:
      "Kasus: Garuda Indonesia pernah menggunakan kontrak hedging untuk bahan bakar avtur. Apa tujuan utama transaksi derivatif ini?",
    options: {
      a: "Untuk mendapatkan laba tambahan dari spekulasi",
      b: "Untuk menghindari pencatatan utang",
      c: "Untuk melindungi perusahaan dari risiko fluktuasi harga bahan bakar",
      d: "Untuk menurunkan nilai aset",
      e: "Untuk menghapuskan kewajiban pajak",
    },
    correct: "c",
    explanation:
      "Hedging adalah strategi manajemen risiko. Maskapai sangat bergantung pada harga avtur, sehingga kontrak derivatif digunakan untuk stabilisasi biaya.",
  },
  // --- Akuntansi Manajemen - Balanced Scorecard ---
  {
    type: "Akuntansi Manajemen – Balanced Scorecard",
    question:
      "Balanced Scorecard tidak hanya mengukur kinerja keuangan, tetapi juga mencakup aspek lain. Aspek yang termasuk dalam Balanced Scorecard adalah:",
    options: {
      a: "Keuangan, pelanggan, proses internal, pembelajaran & pertumbuhan",
      b: "Keuangan, pelanggan, pajak, regulasi",
      c: "Keuangan, operasional, utang, modal",
      d: "Keuangan, manajemen risiko, regulasi, pajak",
      e: "Keuangan, ekspor, impor, logistik",
    },
    correct: "a",
    explanation:
      "Balanced Scorecard (Kaplan & Norton) memperluas pengukuran kinerja agar lebih seimbang antara hasil keuangan jangka pendek dan kapabilitas jangka panjang.",
  },
  // --- Studi Kasus - Balanced Scorecard Bank ---
  {
    type: "Studi Kasus – Balanced Scorecard Bank",
    question:
      "Kasus: Sebuah bank menggunakan Balanced Scorecard. Mereka mengukur kepuasan nasabah, jumlah produk digital yang digunakan, efisiensi biaya, dan pelatihan karyawan. Perspektif mana yang dominan?",
    options: {
      a: "Hanya perspektif keuangan",
      b: "Semua perspektif Balanced Scorecard",
      c: "Perspektif pelanggan dan proses internal",
      d: "Perspektif pajak dan regulasi",
      e: "Perspektif modal dan utang",
    },
    correct: "b",
    explanation:
      "Indikator yang digunakan bank mencakup pelanggan (kepuasan), proses internal (efisiensi), keuangan (biaya), serta pembelajaran & pertumbuhan (pelatihan). Ini sejalan dengan konsep Balanced Scorecard yang holistik.",
  },
  // --- Audit - Independensi Auditor ---
  {
    type: "Audit – Independensi Auditor",
    question:
      "Auditor eksternal sedang melakukan audit laporan keuangan perusahaan yang juga merupakan klien jasa konsultasi mereka. Apa risiko utamanya?",
    options: {
      a: "Auditor terlalu detail memeriksa laporan",
      b: "Auditor tidak bisa memahami bisnis klien",
      c: "Auditor kehilangan independensi karena konflik kepentingan",
      d: "Auditor akan menurunkan biaya audit",
      e: "Auditor otomatis dianggap fraud",
    },
    correct: "c",
    explanation:
      "Independensi adalah prinsip utama audit. Jika auditor juga memberi jasa konsultasi, ada risiko self-review threat, yaitu auditor memeriksa hasil pekerjaannya sendiri.",
  },
  // --- Studi Kasus - Skandal Arthur Andersen & Enron ---
  {
    type: "Studi Kasus – Skandal Arthur Andersen & Enron",
    question:
      "Kasus: Arthur Andersen sebagai auditor Enron kehilangan reputasinya karena dianggap tidak independen. Apa pelajaran utama dari kasus ini?",
    options: {
      a: "Auditor harus bekerja lebih cepat",
      b: "Auditor boleh merangkap sebagai konsultan",
      c: "Auditor harus menjaga independensi dan profesionalisme",
      d: "Auditor boleh menyembunyikan kesalahan jika diminta klien",
      e: "Auditor tidak perlu memahami bisnis klien",
    },
    correct: "c",
    explanation:
      "Kasus Enron menunjukkan bagaimana hilangnya independensi auditor dapat menghancurkan profesi. Akhirnya, Arthur Andersen dibubarkan. Hal ini menekankan pentingnya etika profesi.",
  },
  // --- Perpajakan - Transfer Pricing ---
  {
    type: "Perpajakan – Transfer Pricing",
    question: "Transfer pricing menjadi isu penting karena:",
    options: {
      a: "Mempermudah laporan konsolidasi",
      b: "Dapat digunakan perusahaan multinasional untuk mengalihkan laba ke negara pajak rendah",
      c: "Menghapuskan pajak pertambahan nilai",
      d: "Meningkatkan laba operasional",
      e: "Tidak berdampak pada fiskus",
    },
    correct: "b",
    explanation:
      "Transfer pricing sering digunakan untuk tax avoidance. Oleh karena itu, pemerintah membuat regulasi dokumentasi transfer pricing (TP Doc) untuk mengawasi praktik ini.",
  },
  // --- Studi Kasus - Google Tax ---
  {
    type: "Studi Kasus – Google Tax",
    question:
      "Kasus: Pemerintah Indonesia mendorong pajak atas perusahaan digital global (Google, Facebook, dll.) yang memiliki aktivitas ekonomi di Indonesia. Isu utama yang berkaitan adalah:",
    options: {
      a: "Capital gain tax",
      b: "Transfer pricing dan pajak digital",
      c: "Pajak penjualan barang mewah",
      d: "Pajak final UMK",
      e: "Bea impor",
    },
    correct: "b",
    explanation:
      "Perusahaan digital global bisa mencatat pendapatan di negara pajak rendah, sehingga menurunkan pajak di Indonesia. Isu ini dikenal sebagai Google Tax dan menjadi perhatian G20.",
  },
  // --- Akuntansi Keuangan - Consolidation Adjustment ---
  {
    type: "Akuntansi Keuangan – Consolidation Adjustment",
    question:
      "PT Induk A menjual persediaan ke PT Anak B dengan laba Rp100 juta. Pada akhir tahun, persediaan belum terjual ke pihak ketiga. Bagaimana perlakuannya di laporan konsolidasi?",
    options: {
      a: "Laba tetap diakui penuh",
      b: "Laba dieliminasi dari laporan konsolidasi",
      c: "Laba dicatat sebagai dividen",
      d: "Laba dicatat sebagai goodwill",
      e: "Tidak ada penyesuaian",
    },
    correct: "b",
    explanation:
      "Transaksi antar entitas dalam grup (intercompany) tidak boleh menimbulkan laba fiktif dalam konsolidasi. Laba harus dieliminasi sampai persediaan dijual ke pihak eksternal.",
  },
  // --- Studi Kasus - Konsolidasi Indofood Group ---
  {
    type: "Studi Kasus – Konsolidasi Indofood Group",
    question:
      "Kasus: Indofood memiliki banyak anak usaha, termasuk Indofood CBP. Mengapa laporan konsolidasi penting bagi investor?",
    options: {
      a: "Karena hanya menampilkan laba induk",
      b: "Karena mencerminkan posisi keuangan grup sebagai satu entitas ekonomi",
      c: "Karena menghapus seluruh utang",
      d: "Karena hanya menampilkan laporan anak usaha",
      e: "Karena tidak menunjukkan kepentingan nonpengendali",
    },
    correct: "b",
    explanation:
      "Investor melihat grup usaha sebagai satu kesatuan. Konsolidasi menyajikan total aset, liabilitas, pendapatan, dan laba seolah-olah perusahaan grup adalah satu entitas.",
  },
  // --- Akuntansi Keuangan - Laba per Saham (EPS) ---
  {
    type: "Akuntansi Keuangan – Laba per Saham (EPS)",
    question:
      "PT XYZ memiliki laba bersih Rp10 miliar dan jumlah saham beredar 5 juta lembar. Berapa laba per saham dasar (Basic EPS)?",
    options: {
      a: "Rp500",
      b: "Rp1.000",
      c: "Rp2.000",
      d: "Rp5.000",
      e: "Rp10.000",
    },
    correct: "c",
    explanation:
      "EPS dasar = Laba bersih ÷ Jumlah saham beredar = Rp10.000.000.000 ÷ 5.000.000 = Rp2.000. EPS adalah indikator profitabilitas per lembar saham.",
  },
  // --- Studi Kasus - EPS dan Investor ---
  {
    type: "Studi Kasus – EPS dan Investor",
    question:
      "Kasus: Investor asing menilai saham perusahaan Tbk dengan EPS tinggi lebih menarik. Mengapa?",
    options: {
      a: "EPS tinggi menunjukkan perusahaan lebih banyak utang",
      b: "EPS tinggi menunjukkan profitabilitas per saham lebih besar",
      c: "EPS tinggi berarti dividen pasti lebih tinggi",
      d: "EPS tinggi berarti perusahaan tidak perlu modal baru",
      e: "EPS tinggi berarti aset lebih banyak",
    },
    correct: "b",
    explanation:
      "EPS menggambarkan kemampuan perusahaan menghasilkan laba untuk setiap saham. Investor membandingkan EPS dengan harga saham (PER) untuk menilai apakah saham undervalued atau overvalued.",
  },
  // --- Audit - Risiko Fraud ---
  {
    type: "Audit – Risiko Fraud",
    question:
      "Risiko fraud dalam laporan keuangan biasanya muncul karena:",
    options: {
      a: "Tekanan, peluang, dan rasionalisasi",
      b: "Kurangnya aset tetap",
      c: "Penjualan yang menurun",
      d: "Pajak tinggi",
      e: "Sistem IT modern",
    },
    correct: "a",
    explanation:
      "Fraud Triangle (Cressey) menjelaskan bahwa fraud timbul karena kombinasi tekanan (misalnya target laba), peluang (lemahnya kontrol internal), dan rasionalisasi (pembenaran moral oleh pelaku).",
  },
  // --- Studi Kasus - Fraud Jiwasraya ---
  {
    type: "Studi Kasus – Fraud Jiwasraya",
    question:
      "Kasus: Skandal Jiwasraya menimbulkan kerugian negara hingga Rp16 triliun. Faktor utama yang memungkinkan fraud ini terjadi adalah:",
    options: {
      a: "Tingginya tarif pajak",
      b: "Lemahnya pengendalian internal dan pengawasan investasi",
      c: "EPS rendah",
      d: "Perubahan standar akuntansi",
      e: "Penggunaan sistem ERP",
    },
    correct: "b",
    explanation:
      "Kasus Jiwasraya menunjukkan pentingnya governance, risk management, dan compliance (GRC). Investasi pada saham gorengan tanpa pengawasan yang memadai membuka peluang fraud berskala besar.",
  },
  // --- Akuntansi Keuangan - Pajak Tangguhan (Deferred Tax) ---
  {
    type: "Akuntansi Keuangan – Pajak Tangguhan (Deferred Tax)",
    question:
      "PT ABC melaporkan laba akuntansi sebesar Rp10.000.000.000. Namun, beban depresiasi fiskal lebih besar daripada depresiasi komersial, sehingga laba kena pajak lebih kecil. Apa dampak yang muncul?",
    options: {
      a: "Terjadi pajak tangguhan aset",
      b: "Terjadi pajak tangguhan liabilitas",
      c: "Tidak ada pengaruh pajak tangguhan",
      d: "Laba akuntansi harus disesuaikan agar sama dengan laba fiskal",
      e: "Pajak langsung naik saat ini",
    },
    correct: "b",
    explanation:
      "Perbedaan temporer karena depresiasi (lebih besar secara fiskal) menurunkan laba kena pajak saat ini. Namun, di masa depan, depresiasi fiskal akan lebih kecil dibanding depresiasi komersial, sehingga laba kena pajak akan lebih tinggi. Perbedaan ini menimbulkan liabilitas pajak tangguhan, karena perusahaan akan membayar pajak lebih besar di masa depan.",
  },
  // --- Studi Kasus - Pajak Tangguhan di Indonesia ---
  {
    type: "Studi Kasus – Pajak Tangguhan di Indonesia",
    question:
      "Kasus: Perusahaan manufaktur di Indonesia sering menggunakan metode saldo menurun untuk tujuan fiskal, sementara untuk laporan keuangan komersial menggunakan garis lurus. Mengapa hal ini menimbulkan pajak tangguhan?",
    options: {
      a: "Karena metode saldo menurun menghasilkan laba fiskal yang lebih besar",
      b: "Karena laba fiskal lebih kecil di awal, lalu lebih besar di akhir umur aset",
      c: "Karena metode garis lurus dilarang dalam perpajakan",
      d: "Karena aset tetap nilainya tidak berubah",
      e: "Karena fiskus tidak mengakui depresiasi",
    },
    correct: "b",
    explanation:
      "Metode saldo menurun mempercepat depresiasi pada awal periode, sehingga laba fiskal lebih rendah. Perbedaan ini bersifat temporer, bukan permanen, sehingga memunculkan liabilitas pajak tangguhan.",
  },
  // --- Akuntansi Keuangan - Instrumen Derivatif (Hedging) ---
  {
    type: "Akuntansi Keuangan – Instrumen Derivatif (Hedging)",
    question:
      "PT Exportindo melakukan kontrak forward untuk melindungi nilai tukar rupiah terhadap dolar AS atas piutang ekspor 6 bulan mendatang. Bagaimana perlakuan akuntansi derivatif tersebut sesuai PSAK 71?",
    options: {
      a: "Tidak perlu dicatat sampai kontrak jatuh tempo",
      b: "Dicatat sebagai off-balance sheet item",
      c: "Dicatat sebagai aset/liabilitas derivatif di neraca dengan nilai wajar",
      d: "Dicatat hanya saat ada selisih kurs",
      e: "Dicatat sebagai tambahan ekuitas",
    },
    correct: "c",
    explanation:
      "PSAK 71 (adopsi IFRS 9) mewajibkan perusahaan mengukur derivatif pada nilai wajar sejak kontrak dibuat. Jika digunakan untuk hedge accounting, perubahan nilai wajar dapat dialokasikan ke OCI (Other Comprehensive Income) untuk mengurangi volatilitas laba rugi.",
  },
  // --- Studi Kasus - Hedging pada Perusahaan Indonesia ---
  {
    type: "Studi Kasus – Hedging pada Perusahaan Indonesia",
    question:
      "Kasus: Garuda Indonesia pada 2019 mengalami kerugian besar akibat tidak efektifnya strategi lindung nilai bahan bakar (fuel hedging). Apa pelajaran utama terkait akuntansi derivatif?",
    options: {
      a: "Derivatif selalu mengurangi risiko",
      b: "Hedge accounting menjamin keuntungan",
      c: "Ketidakefektifan lindung nilai tetap harus diakui di laporan laba rugi",
      d: "Kerugian derivatif dapat ditunda tanpa batas waktu",
      e: "Akuntansi derivatif tidak berlaku di Indonesia",
    },
    correct: "c",
    explanation:
      "Hedge accounting hanya dapat diterapkan pada bagian efektif dari instrumen lindung nilai. Bagian yang tidak efektif wajib diakui dalam laba rugi, sehingga risiko tetap ada. Kasus Garuda menunjukkan bahwa strategi derivatif harus disertai manajemen risiko yang disiplin.",
  },
  // --- Akuntansi Keuangan - Revaluasi Aset Tetap ---
  {
    type: "Akuntansi Keuangan – Revaluasi Aset Tetap",
    question:
      "PT Properti Tbk melakukan revaluasi aset tanah dari Rp50.000.000.000 menjadi Rp80.000.000.000. Bagaimana pencatatan selisih revaluasi sesuai PSAK 16?",
    options: {
      a: "Dicatat sebagai laba rugi tahun berjalan",
      b: "Dicatat sebagai tambahan modal disetor",
      c: "Dicatat dalam ekuitas pada akun surplus revaluasi",
      d: "Dicatat sebagai liabilitas jangka panjang",
      e: "Tidak boleh diakui",
    },
    correct: "c",
    explanation:
      "PSAK 16 mengatur bahwa kenaikan nilai akibat revaluasi aset tetap tidak boleh diakui langsung dalam laba rugi, melainkan masuk ke ekuitas melalui akun surplus revaluasi. Jika kemudian aset dijual, surplus revaluasi dapat direklasifikasi ke saldo laba.",
  },
  // --- Studi Kasus - Revaluasi Aset pada Perusahaan BUMN ---
  {
    type: "Studi Kasus – Revaluasi Aset pada Perusahaan BUMN",
    question:
      "Kasus: Pada 2015, pemerintah Indonesia mendorong BUMN melakukan revaluasi aset tetap untuk memperkuat ekuitas dan meningkatkan rasio utang terhadap ekuitas (DER). Apa tujuan utama kebijakan ini?",
    options: {
      a: "Untuk meningkatkan laba bersih BUMN",
      b: "Untuk memperbesar nilai dividen ke negara",
      c: "Untuk memperbaiki permodalan agar bisa menarik utang lebih banyak",
      d: "Untuk mengurangi aset tetap",
      e: "Untuk menurunkan nilai pasar saham",
    },
    correct: "c",
    explanation:
      "Dengan revaluasi, aset tetap naik sehingga ekuitas juga naik. Rasio DER menjadi lebih rendah, sehingga bank dan investor lebih percaya memberikan pinjaman. Kebijakan ini menjadi strategi fiskal tidak langsung untuk memperkuat permodalan BUMN.",
  },
  // --- Audit - Going Concern ---
  {
    type: "Audit – Going Concern",
    question:
      "Auditor menemukan bahwa PT Maju Jaya mengalami kerugian besar berturut-turut, arus kas negatif, dan utang jangka pendek jauh lebih besar daripada aset lancarnya. Apa opini audit yang paling mungkin diberikan?",
    options: {
      a: "Wajar Tanpa Pengecualian (Unqualified Opinion)",
      b: "Wajar Dengan Pengecualian (Qualified Opinion)",
      c: "Tidak Wajar (Adverse Opinion)",
      d: "Tidak Memberikan Pendapat (Disclaimer)",
      e: "Wajar dengan Paragraf Penekanan tentang Going Concern",
    },
    correct: "e",
    explanation:
      "Jika auditor yakin laporan keuangan disajikan wajar tetapi terdapat keraguan signifikan atas kemampuan perusahaan melanjutkan usahanya, auditor memberikan opini Wajar Tanpa Pengecualian dengan paragraf penekanan (emphasis of matter).",
  },
  // --- Studi Kasus - Skandal Wirecard (2020) ---
  {
    type: "Studi Kasus – Skandal Wirecard (2020)",
    question:
      "Kasus: Wirecard, perusahaan pembayaran Jerman, bangkrut setelah terungkap adanya dana fiktif €1,9 miliar. Auditor sebelumnya tidak mendeteksi penipuan ini. Apa kelemahan audit yang terungkap dari kasus ini?",
    options: {
      a: "Auditor terlalu bergantung pada konfirmasi bank yang tidak independen",
      b: "Auditor terlalu sering melakukan prosedur sampling",
      c: "Auditor menggunakan basis kas, bukan akrual",
      d: "Auditor tidak menghitung ulang depresiasi",
      e: "Auditor menolak memberikan opini",
    },
    correct: "a",
    explanation:
      "Dana fiktif Wirecard dilaporkan tersimpan di bank luar negeri, tetapi ternyata dokumen konfirmasi palsu. Kasus ini memperlihatkan risiko reliabilitas bukti eksternal, terutama jika perantara tidak independen. Regulasi audit di Eropa pun diperketat setelah skandal ini.",
  },
  // --- Akuntansi Manajemen - Balanced Scorecard (BSC) ---
  {
    type: "Akuntansi Manajemen – Balanced Scorecard (BSC)",
    question:
      "Balanced Scorecard (BSC) menilai kinerja perusahaan berdasarkan empat perspektif. Perspektif apa saja yang digunakan?",
    options: {
      a: "Keuangan, Operasional, Regulasi, Pasar",
      b: "Keuangan, Pelanggan, Proses Internal, Pembelajaran & Pertumbuhan",
      c: "Keuangan, SDM, Teknologi, Pasar",
      d: "Laba, Penjualan, Pajak, Ekuitas",
      e: "Aset, Liabilitas, Ekuitas, Pendapatan",
    },
    correct: "b",
    explanation:
      "Balanced Scorecard dikembangkan Kaplan & Norton untuk memberikan pandangan menyeluruh atas kinerja perusahaan. Tidak hanya keuangan, tapi juga kepuasan pelanggan, efisiensi proses internal, dan kemampuan inovasi/SDM.",
  },
  // --- Studi Kasus - Balanced Scorecard di Perbankan ---
  {
    type: "Studi Kasus – Balanced Scorecard di Perbankan",
    question:
      "Kasus: Sebuah bank menggunakan Balanced Scorecard untuk mengukur keberhasilan transformasi digitalnya. Indikator apa yang paling tepat digunakan pada perspektif Pembelajaran & Pertumbuhan?",
    options: {
      a: "Laba bersih bank",
      b: "Return on Assets (ROA)",
      c: "Jumlah pengguna aplikasi mobile banking",
      d: "Tingkat kepuasan karyawan terhadap pelatihan digital",
      e: "Tingkat NPL (Non-Performing Loan)",
    },
    correct: "d",
    explanation:
      "Perspektif Pembelajaran & Pertumbuhan menekankan pada pengembangan kapasitas organisasi: pelatihan karyawan, budaya inovasi, dan penguasaan teknologi. Untuk transformasi digital bank, indikator paling relevan adalah keberhasilan pelatihan dan adaptasi SDM.",
  },
  // --- Akuntansi Sektor Publik - Laporan Keuangan Pemerintah ---
  {
    type: "Akuntansi Sektor Publik – Laporan Keuangan Pemerintah",
    question:
      "Laporan keuangan pemerintah pusat di Indonesia terdiri atas beberapa komponen utama. Berikut yang bukan termasuk laporan keuangan pokok adalah:",
    options: {
      a: "Laporan Realisasi Anggaran (LRA)",
      b: "Laporan Operasional (LO)",
      c: "Neraca",
      d: "Laporan Perubahan Ekuitas",
      e: "Laporan Laba Rugi Komprehensif",
    },
    correct: "e",
    explanation:
      "Laporan keuangan pemerintah pusat mengikuti Standar Akuntansi Pemerintahan (SAP), bukan PSAK. Laporan laba rugi komprehensif hanya ada pada entitas bisnis.",
  },
  // --- Studi Kasus - Audit BPK ---
  {
    type: "Studi Kasus – Audit BPK",
    question:
      "Kasus: Badan Pemeriksa Keuangan (BPK) memberikan opini Wajar Tanpa Pengecualian (WTP) atas LKPP (Laporan Keuangan Pemerintah Pusat) 2022. Apa makna dari opini tersebut?",
    options: {
      a: "Pemerintah berhasil mencapai surplus anggaran",
      b: "Tidak ditemukan satu pun kesalahan dalam laporan keuangan",
      c: "Laporan keuangan disajikan wajar sesuai SAP, meskipun mungkin ada temuan administratif",
      d: "Pemerintah bebas dari tindak korupsi",
      e: "Semua kementerian memiliki laporan yang sama baiknya",
    },
    correct: "c",
    explanation:
      "Opini WTP tidak berarti laporan keuangan sempurna tanpa kesalahan, tetapi bahwa penyajian laporan secara keseluruhan sudah sesuai SAP. BPK masih bisa menemukan kelemahan administratif atau SPI (Sistem Pengendalian Internal).",
  },
  // --- Akuntansi Pemerintahan - Dana Desa ---
  {
    type: "Akuntansi Pemerintahan – Dana Desa",
    question:
      "Pemerintah desa menerima Dana Desa Rp1 miliar untuk pembangunan jalan. Bagaimana pencatatan yang benar sesuai Permendagri 20/2018?",
    options: {
      a: "Langsung diakui sebagai pendapatan desa",
      b: "Dicatat sebagai utang jangka panjang",
      c: "Dicatat sebagai pendapatan transfer",
      d: "Dicatat sebagai ekuitas pemerintah pusat",
      e: "Tidak perlu dicatat karena hibah",
    },
    correct: "c",
    explanation:
      "Dana Desa merupakan transfer dari pemerintah pusat ke desa, sehingga dicatat sebagai pendapatan transfer. Dana ini digunakan untuk belanja pembangunan, pemberdayaan masyarakat, dan kegiatan desa lainnya.",
  },
  // --- Studi Kasus - Korupsi Dana Desa ---
  {
    type: "Studi Kasus – Korupsi Dana Desa",
    question:
      "Kasus: Banyak kasus korupsi Dana Desa terjadi akibat kurangnya pengendalian internal di tingkat desa. Apa solusi akuntansi yang paling tepat?",
    options: {
      a: "Menyederhanakan laporan keuangan desa",
      b: "Menghapus Dana Desa",
      c: "Menerapkan sistem akuntansi berbasis teknologi dengan transparansi publik",
      d: "Memberikan lebih banyak tunai langsung ke kepala desa",
      e: "Mengurangi anggaran Dana Desa",
    },
    correct: "c",
    explanation:
      "Pengendalian internal desa lemah karena keterbatasan SDM. Sistem akuntansi berbasis digital (e-government, aplikasi desa keuangan) memungkinkan pelacakan transaksi secara transparan, sehingga korupsi dapat ditekan.",
  },
  // --- Akuntansi Sektor Publik - BLU (Badan Layanan Umum) ---
  {
    type: "Akuntansi Sektor Publik – BLU (Badan Layanan Umum)",
    question:
      "BLU (misalnya rumah sakit pemerintah) memiliki fleksibilitas keuangan dibanding satuan kerja biasa. Apa keistimewaan utamanya?",
    options: {
      a: "Tidak perlu menyusun laporan keuangan",
      b: "Boleh mengelola penerimaan langsung tanpa setor ke kas negara",
      c: "Tidak diaudit oleh BPK",
      d: "Bebas menentukan standar akuntansi sendiri",
      e: "Tidak wajib menyusun anggaran",
    },
    correct: "b",
    explanation:
      "BLU diberikan fleksibilitas mengelola pendapatan operasional langsung (misalnya dari pasien atau mahasiswa) tanpa harus disetor dulu ke kas negara. Namun, BLU tetap wajib menyusun laporan keuangan sesuai SAP & PSAK.",
  },
  // --- Sustainability Reporting (ESG) ---
  {
    type: "Sustainability Reporting (ESG)",
    question:
      "Perusahaan pertambangan diwajibkan menyusun Laporan Keberlanjutan (Sustainability Report). Komponen utama laporan ESG biasanya mencakup:",
    options: {
      a: "Ekonomi, Sosial, dan Tata Kelola",
      b: "Ekonomi, Sosial, dan Lingkungan",
      c: "Lingkungan, Sosial, dan Tata Kelola",
      d: "Laba, Aset, dan Utang",
      e: "Operasional, Keuangan, dan Perpajakan",
    },
    correct: "c",
    explanation:
      "ESG = Environmental, Social, and Governance. Komponen ini mengukur dampak perusahaan terhadap lingkungan, kontribusi sosial, dan praktik tata kelola yang baik. Regulasi OJK 2022 mewajibkan perusahaan publik melaporkan keberlanjutan.",
  },
  // --- Studi Kasus - ESG di Indonesia ---
  {
    type: "Studi Kasus – ESG di Indonesia",
    question:
      "Kasus: PT Freeport Indonesia melaporkan program reklamasi lahan tambang dan kontribusi pada masyarakat Papua dalam laporan keberlanjutan. Bagian mana dari ESG yang tercermin?",
    options: {
      a: "Lingkungan dan Sosial",
      b: "Lingkungan saja",
      c: "Sosial dan Tata Kelola",
      d: "Ekonomi saja",
      e: "Tata Kelola saja",
    },
    correct: "a",
    explanation:
      "Reklamasi tambang termasuk kategori Lingkungan, sedangkan kontribusi ke masyarakat lokal masuk kategori Sosial. Tata kelola biasanya menyangkut transparansi, komite audit, dan anti-korupsi.",
  },
  // --- Forensic Accounting - Fraud Detection ---
  {
    type: "Forensic Accounting – Fraud Detection",
    question:
      "Dalam investigasi fraud, teknik Benford’s Law digunakan untuk:",
    options: {
      a: "Mengukur kewajaran pertumbuhan laba",
      b: "Menguji distribusi angka signifikan pertama pada data keuangan",
      c: "Menentukan harga pokok penjualan",
      d: "Mengestimasi pajak penghasilan",
      e: "Mengukur nilai wajar aset",
    },
    correct: "b",
    explanation:
      "Benford’s Law menyatakan bahwa dalam data keuangan normal, angka pertama cenderung lebih sering 1, 2, atau 3 dibandingkan 8 atau 9. Jika distribusi menyimpang signifikan, bisa jadi ada manipulasi. Ini salah satu teknik forensic accounting.",
  },
  // --- Studi Kasus - Fraud di Indonesia ---
  {
    type: "Studi Kasus – Fraud di Indonesia",
    question:
      "Kasus: Jiwasraya (2018) mengalami skandal korupsi Rp16,8 triliun. Auditor menemukan adanya investasi fiktif. Teknik audit forensik apa yang paling tepat digunakan untuk mengungkap kasus ini?",
    options: {
      a: "Konfirmasi eksternal ke bank kustodian dan manajer investasi",
      b: "Analisis tren laba",
      c: "Perhitungan ulang depresiasi aset tetap",
      d: "Pengujian arus kas operasi",
      e: "Perhitungan ulang pajak tangguhan",
    },
    correct: "a",
    explanation:
      "Fraud Jiwasraya melibatkan manipulasi nilai investasi. Bukti eksternal dari bank kustodian dan manajer investasi lebih andal dibanding data internal perusahaan. Konfirmasi eksternal adalah teknik utama forensic audit.",
  },
  // --- Akuntansi Kontemporer - Green Accounting ---
  {
    type: "Akuntansi Kontemporer – Green Accounting",
    question: "Green accounting adalah pendekatan akuntansi yang bertujuan:",
    options: {
      a: "Menghitung laba lebih besar dengan menekan biaya lingkungan",
      b: "Memasukkan biaya lingkungan dalam laporan keuangan",
      c: "Menghapus biaya lingkungan agar laporan bersih",
      d: "Meningkatkan beban pajak perusahaan",
      e: "Menambahkan goodwill pada neraca",
    },
    correct: "b",
    explanation:
      "Green accounting memperluas akuntansi tradisional dengan mengukur dampak lingkungan (emisi karbon, limbah, penggunaan sumber daya). Konsep ini semakin penting dalam kerangka ESG dan keberlanjutan bisnis.",
  },
  // --- Teori Akuntansi - Basis Pencatatan ---
  {
    type: "Teori Akuntansi – Basis Pencatatan",
    question: "Dua basis utama dalam akuntansi adalah:",
    options: {
      a: "Accrual basis dan cash basis",
      b: "FIFO dan LIFO",
      c: "IFRS dan US GAAP",
      d: "Revenue dan Expense basis",
      e: "Prudence dan Neutrality",
    },
    correct: "a",
    explanation:
      "Accrual basis: pendapatan & beban diakui saat terjadi, bukan saat kas diterima/dibayar. Cash basis: pendapatan & beban hanya diakui ketika kas benar-benar bergerak. SAP pemerintah pusat di Indonesia kini menggunakan accrual basis penuh sejak 2015.",
  },
  // --- Filsafat Akuntansi - Ontologi ---
  {
    type: "Filsafat Akuntansi – Ontologi",
    question:
      "Dalam filsafat akuntansi, ontologi akuntansi mengacu pada:",
    options: {
      a: "Bagaimana laporan keuangan digunakan investor",
      b: "Apa hakikat “realitas ekonomi” yang direpresentasikan oleh angka akuntansi",
      c: "Bagaimana standar akuntansi dibuat",
      d: "Peran akuntan publik dalam masyarakat",
      e: "Hubungan akuntansi dengan perpajakan",
    },
    correct: "b",
    explanation:
      "Ontologi = studi tentang keberadaan. Dalam akuntansi, pertanyaan ontologis: “Apakah laba itu nyata atau konstruksi sosial?” Angka dalam laporan keuangan bukan sekadar fakta, melainkan representasi realitas yang disusun dengan aturan tertentu.",
  },
  // --- Teori Akuntansi - Positivisme vs Normatif ---
  {
    type: "Teori Akuntansi – Positivisme vs Normatif",
    question: "Teori akuntansi normatif menekankan pada:",
    options: {
      a: "Prediksi perilaku manajer",
      b: "Menjelaskan praktik akuntansi yang ada",
      c: "Menentukan bagaimana akuntansi seharusnya dilakukan",
      d: "Statistik akuntansi keuangan",
      e: "Analisis regresi laporan keuangan",
    },
    correct: "c",
    explanation:
      "Teori positif: menjelaskan & memprediksi praktik (Watts & Zimmerman). Teori normatif: memberi preskripsi (contoh: “Laba seharusnya diukur dengan nilai wajar”).",
  },
  // --- Filsafat - Epistemologi Akuntansi ---
  {
    type: "Filsafat – Epistemologi Akuntansi",
    question: "Epistemologi akuntansi berkaitan dengan:",
    options: {
      a: "Siapa yang membuat standar akuntansi",
      b: "Bagaimana kita mengetahui dan membenarkan kebenaran informasi akuntansi",
      c: "Bagaimana laporan dipublikasikan",
      d: "Etika auditor dalam bekerja",
      e: "Perhitungan pajak tangguhan",
    },
    correct: "b",
    explanation:
      "Epistemologi = teori pengetahuan. Dalam akuntansi: bagaimana pengguna tahu laporan keuangan itu benar/wajar? Dasarnya adalah standar akuntansi, audit, dan verifikasi independen.",
  },
  // --- Studi Kasus - Etika Profesi ---
  {
    type: "Studi Kasus – Etika Profesi",
    question:
      "Kasus: Seorang auditor menemukan bahwa perusahaan klien melakukan manajemen laba kecil-kecilan untuk mengejar bonus manajer. Jika auditor diam demi menjaga hubungan bisnis, hal ini melanggar prinsip etika apa?",
    options: {
      a: "Objektivitas",
      b: "Kompetensi profesional",
      c: "Kerahasiaan",
      d: "Tanggung jawab sosial",
      e: "Independensi",
    },
    correct: "a",
    explanation:
      "Auditor wajib menjaga objektivitas & independensi. Mengabaikan temuan demi kepentingan bisnis jelas melanggar etika.",
  },
  // --- Konsep Laba ---
  {
    type: "Konsep Laba",
    question:
      "Menurut teori akuntansi, konsep Economic Income berbeda dari Accounting Income karena:",
    options: {
      a: "Economic income berbasis kas",
      b: "Economic income mencerminkan perubahan nilai kekayaan pemilik, sedangkan accounting income berbasis aturan pencatatan",
      c: "Accounting income selalu lebih tinggi",
      d: "Economic income hanya digunakan pemerintah",
      e: "Accounting income hanya untuk sektor publik",
    },
    correct: "b",
    explanation:
      "Accounting income: laba akuntansi sesuai PSAK (historical cost, accrual, matching). Economic income: perubahan kekayaan bersih (net worth) suatu periode, lebih luas & konseptual.",
  },
  // --- Filsafat - Konstruktivisme Akuntansi ---
  {
    type: "Filsafat – Konstruktivisme Akuntansi",
    question:
      "Pernyataan bahwa “angka laba adalah hasil konstruksi sosial, bukan fakta objektif” sejalan dengan aliran filsafat apa?",
    options: {
      a: "Realisme",
      b: "Positivisme",
      c: "Konstruktivisme",
      d: "Determinisme",
      e: "Hedonisme",
    },
    correct: "c",
    explanation:
      "Menurut konstruktivisme, laporan keuangan adalah produk kesepakatan sosial (standar, regulasi, praktik), bukan cerminan realitas absolut.",
  },
  // --- Teori - Agency Problem ---
  {
    type: "Teori – Agency Problem",
    question:
      "Dalam teori keagenan, konflik utama antara principal (pemegang saham) dan agent (manajer) sering terjadi karena:",
    options: {
      a: "Informasi yang sama-sama transparan",
      b: "Tujuan yang berbeda: pemegang saham ingin maksimisasi nilai, manajer mengejar kepentingan pribadi",
      c: "Regulasi yang ketat",
      d: "IFRS yang sulit dipahami",
      e: "Pajak tinggi",
    },
    correct: "b",
    explanation:
      "Agency problem melahirkan praktik earnings management, perquisite consumption, empire building. Solusinya: tata kelola perusahaan (corporate governance).",
  },
  // --- Akuntansi & Hukum ---
  {
    type: "Akuntansi & Hukum",
    question:
      "Konsep “true and fair view” dalam laporan keuangan berakar dari:",
    options: {
      a: "IFRS framework",
      b: "Hukum perusahaan Inggris",
      c: "UU Perseroan Terbatas Indonesia",
      d: "PSAK",
      e: "Pajak penghasilan",
    },
    correct: "b",
    explanation:
      "Konsep “true and fair view” pertama kali muncul dalam undang-undang perusahaan Inggris. IFRS kemudian mengadopsinya sebagai basis prinsip akuntansi global.",
  },
  // --- Studi Kasus - Skandal Enron (lanjutan filosofis) ---
  {
    type: "Studi Kasus – Skandal Enron (lanjutan filosofis)",
    question:
      "Kasus: Skandal Enron menunjukkan bahwa akuntansi bisa dijadikan alat manipulasi. Dari perspektif filsafat akuntansi, kasus ini menegaskan apa?",
    options: {
      a: "Akuntansi selalu objektif",
      b: "Laporan keuangan bebas dari politik",
      c: "Angka akuntansi adalah konstruksi yang bisa dipengaruhi kepentingan",
      d: "Standar akuntansi sempurna mencegah semua fraud",
      e: "Audit tidak diperlukan",
    },
    correct: "c",
    explanation:
      "Enron menunjukkan bahwa akuntansi bukan hanya “bahasa bisnis”, tetapi juga arena politik & kekuasaan. Standar bisa dieksploitasi untuk kepentingan manajerial.",
  },
  // --- IFRS vs US GAAP - Prinsip vs Aturan ---
  {
    type: "IFRS vs US GAAP – Prinsip vs Aturan",
    question:
      "Salah satu perbedaan mendasar antara IFRS dan US GAAP adalah:",
    options: {
      a: "IFRS berbasis prinsip, sedangkan US GAAP berbasis aturan",
      b: "IFRS berbasis kas, sedangkan US GAAP berbasis akrual",
      c: "IFRS tidak mengenal laporan arus kas, sedangkan US GAAP mewajibkan",
      d: "US GAAP hanya untuk perusahaan swasta, IFRS hanya untuk publik",
      e: "IFRS lebih fokus pada pajak, US GAAP pada laba",
    },
    correct: "a",
    explanation:
      "IFRS: memberi kerangka prinsip yang lebih fleksibel, memungkinkan judgment profesional. US GAAP: berbasis rule-based, detail, dan banyak aturan teknis. Implikasinya: IFRS lebih adaptif, tapi berisiko interpretasi berbeda; US GAAP lebih rigid tapi mengurangi grey area.",
  },
  // --- IFRS vs US GAAP - Revenue Recognition ---
  {
    type: "IFRS vs US GAAP – Revenue Recognition",
    question:
      "Perbedaan signifikan antara IFRS 15 dan US GAAP lama (sebelum ASC 606) terkait pengakuan pendapatan adalah:",
    options: {
      a: "IFRS selalu mengakui lebih cepat",
      b: "US GAAP lama lebih banyak menggunakan aturan industri spesifik, IFRS lebih prinsip umum",
      c: "IFRS tidak mengatur pengakuan pendapatan",
      d: "US GAAP membolehkan pendapatan diakui tanpa kontrak",
      e: "IFRS melarang metode persentase penyelesaian",
    },
    correct: "b",
    explanation:
      "Sebelum konvergensi (ASC 606/IFRS 15), US GAAP punya banyak aturan sektoral (software, real estate). IFRS lebih ringkas & berbasis prinsip. Sekarang keduanya harmonis lewat model 5-langkah pengakuan pendapatan.",
  },
  // --- IFRS vs US GAAP - Persediaan ---
  {
    type: "IFRS vs US GAAP – Persediaan",
    question: "Dalam penilaian persediaan:",
    options: {
      a: "IFRS & US GAAP sama-sama membolehkan LIFO",
      b: "IFRS melarang LIFO, US GAAP memperbolehkan",
      c: "IFRS hanya mengenal FIFO",
      d: "US GAAP selalu wajib average cost",
      e: "IFRS membolehkan LIFO hanya untuk sektor manufaktur",
    },
    correct: "b",
    explanation:
      "IFRS: melarang LIFO karena dianggap tidak mencerminkan arus fisik barang & bisa menurunkan relevansi informasi. US GAAP: masih memperbolehkan LIFO, walaupun makin jarang dipakai.",
  },
  // --- IFRS vs US GAAP - Impairment ---
  {
    type: "IFRS vs US GAAP – Impairment",
    question: "Perbedaan dalam perlakuan impairment aset:",
    options: {
      a: "IFRS tidak mengizinkan reversal impairment, US GAAP mengizinkan",
      b: "IFRS mengizinkan reversal impairment (kecuali goodwill), US GAAP melarang",
      c: "IFRS & US GAAP sama-sama melarang reversal",
      d: "IFRS menggunakan two-step test, US GAAP one-step",
      e: "IFRS tidak mengenal impairment",
    },
    correct: "b",
    explanation:
      "IFRS: impairment bisa dibalik jika kondisi membaik (misalnya aset pabrik pulih nilai pasarnya). Goodwill dikecualikan. US GAAP: impairment bersifat permanent, tidak bisa dibalik.",
  },
  // --- Studi Kasus - Tesla ---
  {
    type: "Studi Kasus – Tesla",
    question:
      "Kasus: Tesla melaporkan laba bersih pertama kali pada 2020 setelah bertahun-tahun rugi. Salah satu alasannya adalah pengakuan penjualan kredit emisi karbon (regulatory credits). Dalam IFRS, bagaimana hal ini dicatat?",
    options: {
      a: "Sebagai pendapatan operasional jika terkait aktivitas utama",
      b: "Sebagai pendapatan lain-lain non-operasional",
      c: "Sebagai kas masuk tanpa pencatatan laba",
      d: "Tidak diakui sebagai pendapatan",
      e: "Hanya dicatat sebagai ekuitas",
    },
    correct: "a",
    explanation:
      "IFRS mengizinkan pendapatan dari regulatory credits diakui sebagai bagian pendapatan karena merupakan hasil dari aktivitas bisnis yang sah. Namun, investor sering menilai laba Tesla “kurang berkualitas” karena ketergantungan pada pendapatan non-core.",
  },
  // --- IFRS vs US GAAP - Development Cost ---
  {
    type: "IFRS vs US GAAP – Development Cost",
    question:
      "Perbedaan utama IFRS dan US GAAP terkait biaya riset & pengembangan:",
    options: {
      a: "IFRS memperbolehkan kapitalisasi biaya pengembangan jika memenuhi syarat, US GAAP mewajibkan expense",
      b: "IFRS & US GAAP sama-sama wajib expense",
      c: "IFRS memperbolehkan semua dikapitalisasi",
      d: "US GAAP memperbolehkan kapitalisasi lebih fleksibel",
      e: "IFRS tidak mengenal akun R&D",
    },
    correct: "a",
    explanation:
      "IFRS (IAS 38): fase riset = expense, fase development = kapitalisasi jika memenuhi kriteria (teknis, komersial). US GAAP: hampir semua biaya R&D = expense langsung.",
  },
  // --- IFRS vs US GAAP - Leasing ---
  {
    type: "IFRS vs US GAAP – Leasing",
    question:
      "Setelah penerapan IFRS 16 dan ASC 842, perbedaan utama akuntansi leasing adalah:",
    options: {
      a: "IFRS menghapus kategori operating lease untuk lessee, US GAAP masih mempertahankannya",
      b: "US GAAP menghapus semua kategori lease, IFRS mempertahankan",
      c: "IFRS tidak mengenal leasing sama sekali",
      d: "IFRS tetap membolehkan operating lease penuh",
      e: "US GAAP membolehkan off-balance sheet leasing",
    },
    correct: "a",
    explanation:
      "IFRS 16: semua lease (kecuali jangka pendek & low-value) harus diakui on-balance sheet. US GAAP (ASC 842): masih mempertahankan dua kategori (finance lease & operating lease), meski sama-sama on-balance sheet.",
  },
  // --- Studi Kasus - WeWork ---
  {
    type: "Studi Kasus – WeWork",
    question:
      "Kegagalan IPO WeWork 2019 banyak dipicu oleh sorotan terhadap laporan keuangan yang menampilkan “community-adjusted EBITDA” — metrik non-GAAP. Apa masalah utamanya?",
    options: {
      a: "Metrik non-GAAP tidak boleh dipublikasikan",
      b: "Non-GAAP sering menyingkirkan beban signifikan, sehingga menyesatkan investor",
      c: "Non-GAAP selalu lebih akurat daripada GAAP",
      d: "Non-GAAP sama dengan laba bersih",
      e: "Non-GAAP tidak boleh digunakan oleh startup",
    },
    correct: "b",
    explanation:
      "WeWork mengeluarkan biaya sewa & pemasaran besar dari metrik mereka, membuat kinerja tampak lebih baik. SEC AS memperingatkan agar non-GAAP metrics tidak menyesatkan.",
  },
  // --- IFRS vs US GAAP - Goodwill ---
  {
    type: "IFRS vs US GAAP – Goodwill",
    question: "Perbedaan perlakuan goodwill:",
    options: {
      a: "IFRS: amortisasi goodwill wajib, US GAAP: impairment-only",
      b: "IFRS: impairment-only, US GAAP: impairment-only (tanpa amortisasi)",
      c: "IFRS: impairment-only, US GAAP: memperbolehkan amortisasi terbatas (untuk private company alternative)",
      d: "Keduanya mewajibkan amortisasi goodwill",
      e: "Goodwill tidak diakui dalam IFRS",
    },
    correct: "c",
    explanation:
      "IFRS: goodwill diuji impairment tahunan, tidak diamortisasi. US GAAP: default sama (impairment-only), tetapi ada opsi amortisasi untuk private company (maks 10 tahun).",
  },
  // --- Harmonisasi Akuntansi Global ---
  {
    type: "Harmonisasi Akuntansi Global",
    question: "Tujuan utama konvergensi IFRS dan US GAAP adalah:",
    options: {
      a: "Menyamakan pajak global",
      b: "Mengurangi biaya penyusunan laporan lintas negara dan meningkatkan keterbandingan laporan keuangan internasional",
      c: "Meningkatkan laba perusahaan multinasional",
      d: "Memudahkan investor lokal saja",
      e: "Menghapus semua standar akuntansi nasional",
    },
    correct: "b",
    explanation:
      "Harmonisasi membuat perusahaan multinasional tidak perlu menyusun laporan dobel (IFRS & US GAAP). Investor global juga lebih mudah membandingkan kinerja lintas negara.",
  },
  // --- Akuntansi Digital - Artificial Intelligence ---
  {
    type: "Akuntansi Digital – Artificial Intelligence",
    question: "Salah satu dampak utama penerapan AI dalam akuntansi adalah:",
    options: {
      a: "Menghapus kebutuhan laporan keuangan",
      b: "Otomatisasi proses rutin seperti pencatatan transaksi & rekonsiliasi",
      c: "Menghilangkan fungsi auditor eksternal sepenuhnya",
      d: "Membuat akuntansi tidak memerlukan standar",
      e: "Membatasi transparansi",
    },
    correct: "b",
    explanation:
      "AI dapat mengurangi pekerjaan manual (data entry, matching invoice, rekonsiliasi bank), sehingga akuntan bisa fokus pada analisis & pengambilan keputusan strategis. Namun, AI tidak bisa sepenuhnya menggantikan profesional karena judgment masih diperlukan.",
  },
  // --- Akuntansi Digital - Big Data ---
  {
    type: "Akuntansi Digital – Big Data",
    question: "Peran Big Data dalam akuntansi manajemen modern adalah:",
    options: {
      a: "Membuat laporan keuangan menjadi tidak relevan",
      b: "Memberikan insight prediktif melalui analisis pola transaksi, perilaku konsumen, dan tren pasar",
      c: "Menggantikan standar IFRS",
      d: "Membatasi informasi hanya untuk CFO",
      e: "Menghapus kebutuhan budgeting",
    },
    correct: "b",
    explanation:
      "Big Data membantu akuntan manajemen tidak hanya melihat masa lalu, tapi juga memprediksi masa depan (predictive & prescriptive analytics). Contoh: Amazon memprediksi demand untuk optimasi stok.",
  },
  // --- Blockchain & Akuntansi ---
  {
    type: "Blockchain & Akuntansi",
    question: "Blockchain dalam akuntansi berpotensi:",
    options: {
      a: "Membuat semua transaksi tidak perlu diverifikasi",
      b: "Meningkatkan transparansi & mengurangi risiko manipulasi data",
      c: "Menghapus laporan audit",
      d: "Menggantikan semua peran akuntan",
      e: "Menghilangkan pajak",
    },
    correct: "b",
    explanation:
      "Blockchain mencatat transaksi dalam ledger terdistribusi yang sulit diubah, sehingga meningkatkan keandalan data. Namun, standar akuntansi tetap diperlukan untuk interpretasi angka.",
  },
  // --- Studi Kasus - Blockchain di Audit ---
  {
    type: "Studi Kasus – Blockchain di Audit",
    question:
      "Kasus: Deloitte melakukan uji coba penggunaan blockchain dalam audit persediaan klien. Apa keunggulan utamanya?",
    options: {
      a: "Auditor tidak perlu ke gudang lagi",
      b: "Data transaksi persediaan bisa diverifikasi real-time dengan jejak digital yang tidak bisa diubah",
      c: "Laporan audit bisa digantikan sepenuhnya oleh smart contract",
      d: "Persediaan tidak perlu dihitung secara fisik",
      e: "Blockchain menghapus PSAK",
    },
    correct: "b",
    explanation:
      "Dengan blockchain, setiap pergerakan persediaan (masuk/keluar) terekam otomatis, sehingga auditor punya audit trail digital. Tetapi pemeriksaan fisik tetap penting untuk memastikan keberadaan barang.",
  },
  // --- Sustainability Reporting ---
  {
    type: "Sustainability Reporting",
    question:
      "Sustainability reporting berbeda dari laporan keuangan tradisional karena:",
    options: {
      a: "Hanya berisi informasi kas",
      b: "Fokus pada triple bottom line: profit, people, planet",
      c: "Hanya berlaku di sektor energi",
      d: "Tidak diatur oleh standar apapun",
      e: "Wajib hanya untuk perusahaan kecil",
    },
    correct: "b",
    explanation:
      "Sustainability reporting mencakup kinerja ekonomi (profit), sosial (people), dan lingkungan (planet). Standar populer: GRI (Global Reporting Initiative), SASB, dan kini ISSB (International Sustainability Standards Board).",
  },
  // --- ESG Disclosure ---
  {
    type: "ESG Disclosure",
    question: "ESG Reporting menjadi penting karena:",
    options: {
      a: "Hanya untuk reputasi perusahaan",
      b: "Investor global menggunakan informasi ESG untuk menilai risiko jangka panjang & keberlanjutan bisnis",
      c: "ESG hanya formalitas pemerintah",
      d: "ESG tidak relevan dengan kinerja keuangan",
      e: "ESG selalu mengurangi laba",
    },
    correct: "b",
    explanation:
      "ESG (Environmental, Social, Governance) kini menjadi pertimbangan utama investor institusi seperti BlackRock. Perusahaan dengan praktik ESG buruk berisiko ditinggalkan pasar modal.",
  },
  // --- Green Accounting ---
  {
    type: "Green Accounting",
    question: "Green accounting adalah:",
    options: {
      a: "Pencatatan pajak hijau",
      b: "Integrasi faktor lingkungan ke dalam sistem akuntansi tradisional",
      c: "Akuntansi hanya untuk perusahaan energi",
      d: "Menghapus laporan keuangan laba rugi",
      e: "Audit berbasis alam",
    },
    correct: "b",
    explanation:
      "Green accounting menilai biaya lingkungan (polusi, emisi, konsumsi energi) dalam perhitungan kinerja perusahaan. Contoh: biaya karbon dimasukkan dalam beban perusahaan.",
  },
  // --- Studi Kasus - Unilever ---
  {
    type: "Studi Kasus – Unilever",
    question:
      "Kasus: Unilever menerbitkan laporan keberlanjutan yang mengukur jejak karbon rantai pasoknya. Hal ini mencerminkan penerapan:",
    options: {
      a: "Laporan arus kas",
      b: "ESG Reporting",
      c: "Pajak progresif",
      d: "Blockchain",
      e: "IFRS 15",
    },
    correct: "b",
    explanation:
      "Unilever mengukur carbon footprint sebagai bagian dari laporan ESG, yang kini menjadi standar investor global untuk menilai keberlanjutan perusahaan.",
  },
  // --- Integrated Reporting ---
  {
    type: "Integrated Reporting",
    question: "Integrated Reporting (IR) bertujuan untuk:",
    options: {
      a: "Menyatukan laporan keuangan dengan laporan keberlanjutan dalam satu kerangka naratif yang menyajikan value creation jangka panjang",
      b: "Menghapus laba rugi",
      c: "Menyatukan laporan semua perusahaan dalam satu file global",
      d: "Membatasi informasi hanya untuk regulator",
      e: "Fokus pada pajak karbon",
    },
    correct: "a",
    explanation:
      "IR dikembangkan oleh IIRC (International Integrated Reporting Council). Tujuannya: menyajikan gambaran holistik tentang penciptaan nilai jangka panjang, tidak hanya profit jangka pendek.",
  },
  // --- Tantangan Sustainability Accounting ---
  {
    type: "Tantangan Sustainability Accounting",
    question: "Tantangan utama dalam sustainability accounting adalah:",
    options: {
      a: "Tidak ada data sama sekali",
      b: "Sulitnya mengukur dampak sosial & lingkungan secara kuantitatif yang reliabel",
      c: "Investor tidak tertarik pada isu keberlanjutan",
      d: "Semua perusahaan sudah seragam",
      e: "Standar tidak diperlukan",
    },
    correct: "b",
    explanation:
      "Contoh: menghitung nilai moneter dari emisi karbon atau dampak sosial program CSR sering sulit. Oleh karena itu, ISSB sedang berusaha mengharmonisasikan standar pelaporan ESG agar lebih konsisten.",
  },
  // --- Konsep Audit ---
  {
    type: "Konsep Audit",
    question: "Tujuan utama audit laporan keuangan adalah:",
    options: {
      a: "Menjamin laporan keuangan 100% bebas salah",
      b: "Memberikan opini atas kewajaran laporan keuangan berdasarkan standar akuntansi",
      c: "Menghitung pajak terutang",
      d: "Menentukan nilai pasar saham",
      e: "Mengganti fungsi akuntan internal",
    },
    correct: "b",
    explanation:
      "Audit tidak memberikan absolute assurance, hanya reasonable assurance. Auditor memberikan opini apakah laporan keuangan sesuai dengan PSAK/IFRS.",
  },
  // --- Fraud Triangle ---
  {
    type: "Fraud Triangle",
    question:
      "Menurut teori Fraud Triangle (Cressey), tiga elemen utama penyebab kecurangan adalah:",
    options: {
      a: "Kesempatan, tekanan, rasionalisasi",
      b: "Laba, kas, aset",
      c: "Tekanan, bonus, investor",
      d: "Sistem IT, blockchain, regulasi",
      e: "Manipulasi, pajak, inflasi",
    },
    correct: "a",
    explanation:
      "Fraud terjadi jika seseorang punya tekanan (misalnya hutang), kesempatan (lemahnya kontrol internal), dan rasionalisasi (membenarkan tindakan salah).",
  },
  // --- Studi Kasus - Enron ---
  {
    type: "Studi Kasus – Enron",
    question:
      "Kasus: Enron menggunakan special purpose entities (SPE) untuk menyembunyikan utang besar. Apa yang gagal dilakukan auditor (Arthur Andersen)?",
    options: {
      a: "Mendeteksi penggunaan off-balance sheet financing yang menyesatkan",
      b: "Menghitung kas keluar",
      c: "Menilai depresiasi",
      d: "Memeriksa laporan pajak",
      e: "Menggunakan blockchain",
    },
    correct: "a",
    explanation:
      "Enron menyembunyikan utang dalam SPE sehingga laporan keuangannya terlihat sehat. Auditor gagal mengungkapkan transparansi struktur ini.",
  },
  // --- Studi Kasus - Wirecard (Jerman) ---
  {
    type: "Studi Kasus – Wirecard (Jerman)",
    question:
      "Kasus: Wirecard mengaku punya €1,9 miliar kas di bank Filipina. Ternyata uang itu tidak ada. Apa kelemahan audit yang terjadi?",
    options: {
      a: "Auditor tidak melakukan konfirmasi langsung ke bank",
      b: "Auditor gagal menghitung depresiasi",
      c: "Auditor hanya memeriksa catatan internal tanpa verifikasi eksternal",
      d: "Auditor fokus pada laba rugi, bukan kas",
      e: "Auditor lupa memeriksa goodwill",
    },
    correct: "a",
    explanation:
      "Salah satu prosedur dasar audit adalah konfirmasi saldo bank. Jika dilakukan dengan benar, skandal ini bisa lebih cepat terungkap.",
  },
  // --- Forensic Audit ---
  {
    type: "Forensic Audit",
    question:
      "Perbedaan utama audit biasa dengan forensic audit adalah:",
    options: {
      a: "Audit biasa fokus pada kewajaran laporan, forensic audit fokus mengungkap fraud & evidence untuk proses hukum",
      b: "Audit biasa hanya internal, forensic audit hanya eksternal",
      c: "Audit biasa melihat aset, forensic audit hanya utang",
      d: "Audit biasa tidak pakai dokumen, forensic audit hanya pakai dokumen",
      e: "Sama saja",
    },
    correct: "a",
    explanation:
      "Forensic audit menggabungkan prosedur audit dengan investigasi hukum. Sering digunakan dalam kasus korupsi & penggelapan.",
  },
  // --- Studi Kasus - Theranos (AS) ---
  {
    type: "Studi Kasus – Theranos (AS)",
    question:
      "Theranos mengklaim bisa melakukan ratusan tes darah hanya dengan setetes darah. Apa kelemahan dalam pengendalian & audit?",
    options: {
      a: "Tidak ada verifikasi independen atas klaim teknologi",
      b: "Laporan keuangan tidak diaudit",
      c: "Penggunaan blockchain terlalu berlebihan",
      d: "Pengendalian pajak yang lemah",
      e: "Auditor hanya memeriksa persediaan",
    },
    correct: "a",
    explanation:
      "Theranos tidak transparan dan tidak ada pihak eksternal yang menguji validitas teknologinya. Akibatnya, investor tertipu oleh klaim palsu.",
  },
  // --- Studi Kasus - Kasus Jiwasraya (Indonesia) ---
  {
    type: "Studi Kasus – Kasus Jiwasraya (Indonesia)",
    question:
      "Kasus: Jiwasraya mengalami kerugian besar akibat investasi saham 'gorengan'. Dari sisi akuntansi, apa red flag yang bisa dideteksi?",
    options: {
      a: "Laba investasi sangat tinggi dan tidak konsisten dengan risiko",
      b: "Perusahaan tidak mencatat kas kecil",
      c: "Depresiasi terlalu rendah",
      d: "Persediaan terlalu tinggi",
      e: "Pajak terutang menurun",
    },
    correct: "a",
    explanation:
      "Return tinggi dalam waktu singkat tanpa risiko jelas adalah indikasi red flag. Auditor dan regulator seharusnya mencurigai pola tersebut.",
  },
  // --- Skandal Akuntansi Global ---
  {
    type: "Skandal Akuntansi Global",
    question:
      "Apa kesamaan utama kasus Enron, Wirecard, dan Jiwasraya?",
    options: {
      a: "Manipulasi laporan keuangan untuk menutupi kerugian/utang",
      b: "Kesalahan depresiasi",
      c: "Salah catat kas kecil",
      d: "Pajak selalu rendah",
      e: "Semua terkait blockchain",
    },
    correct: "a",
    explanation:
      "Ketiga kasus ini pada dasarnya adalah financial statement fraud, di mana manajemen berusaha menutupi kerugian besar melalui rekayasa laporan.",
  },
  // --- Fraud Detection Tools ---
  {
    type: "Fraud Detection Tools",
    question:
      "Metode analisis data yang sering digunakan auditor untuk mendeteksi fraud adalah:",
    options: {
      a: "Benford’s Law",
      b: "Rasio lancar",
      c: "Depresiasi garis lurus",
      d: "ROE",
      e: "EVA",
    },
    correct: "a",
    explanation:
      "Benford’s Law memprediksi distribusi angka awal dalam dataset. Jika distribusi tidak normal, bisa menjadi indikasi manipulasi data keuangan.",
  },
  // --- Studi Kasus - Auditor & Independence ---
  {
    type: "Studi Kasus – Auditor & Independence",
    question:
      "Kasus: Dalam skandal Enron, Arthur Andersen tidak hanya auditor, tetapi juga konsultan manajemen Enron. Mengapa ini bermasalah?",
    options: {
      a: "Auditor mendapat fee terlalu rendah",
      b: "Terdapat konflik kepentingan yang mengurangi independensi auditor",
      c: "Auditor tidak memakai software modern",
      d: "Auditor lupa mengaudit pajak",
      e: "Tidak ada pengaruh",
    },
    correct: "b",
    explanation:
      "Jika auditor juga menjadi konsultan, objektivitasnya terganggu karena auditor tidak ingin kehilangan klien besar. Hal ini memperbesar risiko audit failure.",
  },
  // --- Pajak Penghasilan Badan ---
  {
    type: "Pajak Penghasilan Badan",
    question:
      "Suatu perusahaan di Indonesia memperoleh laba kena pajak Rp10 miliar. Tarif pajak badan berlaku 22%. Berapa pajak penghasilan terutang?",
    options: {
      a: "Rp1,5 miliar",
      b: "Rp2,2 miliar",
      c: "Rp2,5 miliar",
      d: "Rp3 miliar",
      e: "Rp3,5 miliar",
    },
    correct: "b",
    explanation:
      "Perhitungan: 22% × Rp10 miliar = Rp2,2 miliar. Pajak badan adalah salah satu penerimaan terbesar APBN.",
  },
  // --- Pajak Pertambahan Nilai (PPN) ---
  {
    type: "Pajak Pertambahan Nilai (PPN)",
    question:
      "PT Sehat Jaya menjual produk obat-obatan senilai Rp1 miliar. Berdasarkan regulasi, obat termasuk kategori yang tidak dikenakan PPN. Apa implikasinya?",
    options: {
      a: "Perusahaan tetap harus memungut PPN 11%",
      b: "Penjualan dikecualikan dari pengenaan PPN",
      c: "Perusahaan wajib setor 5% PPN",
      d: "Penjualan masuk pajak final",
      e: "Perusahaan otomatis bebas pajak penghasilan",
    },
    correct: "b",
    explanation:
      "Obat termasuk barang tertentu yang tidak dikenai PPN untuk menjaga keterjangkauan publik. Namun, perusahaan tetap wajib bayar PPh Badan.",
  },
  // --- Transfer Pricing - Konsep ---
  {
    type: "Transfer Pricing – Konsep",
    question: "Transfer pricing adalah:",
    options: {
      a: "Proses transfer kas antarbank",
      b: "Penentuan harga transaksi antar perusahaan yang memiliki hubungan istimewa",
      c: "Pajak atas transaksi ekspor",
      d: "Penentuan kurs mata uang",
      e: "Tarif pajak final atas bunga",
    },
    correct: "b",
    explanation:
      "Transfer pricing sah jika wajar. Namun jika dipakai untuk mengalihkan laba ke negara dengan pajak rendah, menjadi bentuk penghindaran pajak (tax avoidance).",
  },
  // --- Studi Kasus - Starbucks UK ---
  {
    type: "Studi Kasus – Starbucks UK",
    question:
      "Kasus: Starbucks di Inggris dilaporkan tidak membayar pajak selama bertahun-tahun, meskipun omzet besar. Bagaimana caranya?",
    options: {
      a: "Mengklaim laba besar di Inggris",
      b: "Mengalihkan royalti ke negara pajak rendah (Belanda & Swiss)",
      c: "Membayar lebih banyak PPN",
      d: "Tidak mencatat penjualan kopi",
      e: "Menghapus biaya gaji",
    },
    correct: "b",
    explanation:
      "Starbucks UK membayar royalti tinggi kepada afiliasi di Belanda/Swiss, sehingga laba di Inggris tampak kecil. Ini bentuk transfer pricing.",
  },
  // --- Studi Kasus - Apple Irlandia ---
  {
    type: "Studi Kasus – Apple Irlandia",
    question:
      "Kasus: Uni Eropa pernah menuntut Apple karena menggunakan Irlandia sebagai basis pajak. Apa isu utamanya?",
    options: {
      a: "Irlandia tidak punya aturan pajak",
      b: "Apple menggunakan double Irish untuk menurunkan tarif efektif pajak",
      c: "Apple tidak mencatat penjualan iPhone",
      d: "Apple lupa bayar PPN",
      e: "Apple hanya membayar pajak di AS",
    },
    correct: "b",
    explanation:
      "Apple memindahkan keuntungan ke Irlandia (tarif pajak rendah). Uni Eropa menilai ini bentuk illegal state aid karena membuat pajak efektif sangat kecil.",
  },
  // --- Studi Kasus - Google & “Double Irish with Dutch Sandwich” ---
  {
    type: "Studi Kasus – Google & “Double Irish with Dutch Sandwich”",
    question:
      "Kasus: Google menggunakan struktur “Double Irish with Dutch Sandwich” dalam pajak. Apa tujuan utamanya?",
    options: {
      a: "Mengurangi biaya produksi",
      b: "Mengalihkan keuntungan ke yurisdiksi pajak rendah seperti Bermuda",
      c: "Meningkatkan royalti di AS",
      d: "Membayar PPN lebih tinggi",
      e: "Menurunkan harga iklan",
    },
    correct: "b",
    explanation:
      "Skema ini melibatkan anak perusahaan di Irlandia dan Belanda untuk mengalihkan keuntungan ke Bermuda yang tarif pajaknya hampir 0%.",
  },
  // --- Studi Kasus - Panama Papers ---
  {
    type: "Studi Kasus – Panama Papers",
    question: "Panama Papers membongkar praktik apa?",
    options: {
      a: "Penggelapan kas kecil",
      b: "Pendirian shell companies di tax haven untuk menyembunyikan aset & laba",
      c: "Pemalsuan laporan audit",
      d: "Manipulasi depresiasi",
      e: "Penjualan aset tetap",
    },
    correct: "b",
    explanation:
      "Dokumen Panama Papers (2016) mengungkap ribuan perusahaan offshore digunakan oleh individu & korporasi untuk menghindari pajak.",
  },
  // --- Studi Kasus - Asian Agri (Indonesia) ---
  {
    type: "Studi Kasus – Asian Agri (Indonesia)",
    question:
      "Kasus: Asian Agri (Grup Astra Agro Lestari) pernah tersandung kasus pajak. Modus yang digunakan adalah:",
    options: {
      a: "Mengalihkan laba ke luar negeri melalui transfer pricing",
      b: "Tidak mencatat pembelian pupuk",
      c: "Manipulasi depresiasi aset",
      d: "Menjual sawit tanpa faktur",
      e: "Menghapus piutang",
    },
    correct: "a",
    explanation:
      "Asian Agri dituduh memindahkan keuntungan ke perusahaan afiliasi luar negeri untuk menekan beban pajak di Indonesia.",
  },
  // --- Pajak Digital ---
  {
    type: "Pajak Digital",
    question:
      "Pemerintah Indonesia mulai menerapkan PPN untuk perusahaan digital asing seperti Netflix, Spotify, Google. Tujuan utamanya adalah:",
    options: {
      a: "Menarik investor asing",
      b: "Memastikan keadilan pajak di era ekonomi digital",
      c: "Mengurangi konsumsi digital",
      d: "Meningkatkan royalti asing",
      e: "Menghapus pajak penghasilan",
    },
    correct: "b",
    explanation:
      "Sebelumnya, perusahaan digital asing beroperasi tanpa bayar pajak. PPN Digital memberi level playing field dengan perusahaan lokal.",
  },
  // --- OECD - BEPS Project ---
  {
    type: "OECD – BEPS Project",
    question: "OECD meluncurkan Base Erosion and Profit Shifting (BEPS) project. Tujuan utamanya adalah:",
    options: {
      a: "Membantu perusahaan mengurangi pajak",
      b: "Menutup celah hukum yang memungkinkan perusahaan multinasional menghindari pajak melalui transfer pricing & tax haven",
      c: "Menghapus PPN",
      d: "Mengurangi pajak UMKM",
      e: "Mengatur pajak karbon",
    },
    correct: "b",
    explanation:
      "BEPS adalah inisiatif global OECD untuk melawan penghindaran pajak. Salah satu hasilnya adalah kesepakatan Pajak Minimum Global 15%.",
  },
];

export default akuntansiQuestions;
