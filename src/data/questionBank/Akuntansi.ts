const akuntansiQuestions = [
  // --- Akuntansi Dasar - Persamaan Akuntansi ---
  {
    type: "Akuntansi Dasar – Persamaan Akuntansi",
    question:
      "PT Andalas menerima investasi awal dari pemilik sebesar Rp100.000.000 dalam bentuk tunai. Dampak paling akurat pada persamaan dasar akuntansi ($Aset = Liabilitas + Ekuitas$) adalah:",
    options: {
      a: "Aset (Kas) naik, Liabilitas (Utang) naik. (Implikasi: Sumber dana dari pihak ketiga)",
      b: "Aset (Kas) naik, Ekuitas (Modal Saham) naik. (Implikasi: Sumber dana dari pemilik)",
      c: "Aset (Kas) turun, Ekuitas (Modal Saham) naik. (Implikasi: Terjadi penarikan)",
      d: "Aset (Kas) naik, Aset (Piutang) naik. (Implikasi: Terjadi transaksi internal aset)",
      e: "Liabilitas (Utang) naik, Ekuitas (Modal Saham) naik. (Implikasi: Tidak ada kas masuk)",
    },
    correct: "b",
    explanation:
      "Transaksi ini adalah setoran modal. Aset (Kas) bertambah Rp100.000.000 dan Ekuitas (Modal Disetor) juga bertambah Rp100.000.000. Ini mencerminkan sumber pendanaan perusahaan berasal dari klaim pemilik, bukan klaim kreditor (liabilitas).",
  },
  // --- Akuntansi Dasar - Jurnal Umum ---
  {
    type: "Akuntansi Dasar – Jurnal Umum",
    question:
      "PT Nusantara membeli perlengkapan kantor senilai Rp5.000.000 secara tunai. Bagaimana pencatatan jurnal yang benar sesuai mekanisme debit/kredit?",
    options: {
      a: "Debit Kas Rp5.000.000; Kredit Perlengkapan Rp5.000.000 (Implikasi: Kas masuk, perlengkapan keluar)",
      b: "Debit Perlengkapan Rp5.000.000; Kredit Kas Rp5.000.000 (Implikasi: Pertukaran antar aset)",
      c: "Debit Beban Perlengkapan Rp5.000.000; Kredit Kas Rp5.000.000 (Implikasi: Diakui sebagai beban penuh)",
      d: "Debit Perlengkapan Rp5.000.000; Kredit Utang Usaha Rp5.000.000 (Implikasi: Pembelian kredit)",
      e: "Debit Modal Rp5.000.000; Kredit Perlengkapan Rp5.000.000 (Implikasi: Pengurangan modal)",
    },
    correct: "b",
    explanation:
      "Pembelian perlengkapan (akun Aset yang normalnya Debit) dicatat di Debit untuk menambah saldo. Karena dibayar tunai, Kas (akun Aset yang normalnya Debit) dicatat di Kredit untuk mengurangi saldo. Pada saat pembelian, perlengkapan dianggap sebagai aset, bukan beban.",
  },
  // --- Laporan Keuangan - Neraca ---
  {
    type: "Laporan Keuangan – Neraca",
    question:
      "Dalam neraca PT Garuda tercatat: Kas Rp40 juta, Piutang Rp20 juta, Peralatan Rp100 juta, Utang Usaha Rp50 juta, dan Modal Disetor Rp80 juta. Berapakah saldo Laba Ditahan (Retained Earnings) perusahaan?",
    options: {
      a: "Rp30.000.000",
      b: "Rp40.000.000",
      c: "Rp20.000.000",
      d: "Rp10.000.000",
      e: "Rp50.000.000",
    },
    correct: "a",
    explanation:
      "Persamaan Akuntansi: $Aset = Liabilitas + Ekuitas$. $\\text{Total Aset} = 40+20+100 = \mathbf{Rp160.000.000}$. $\\text{Total Liabilitas} = \mathbf{Rp50.000.000}$. $\\text{Total Ekuitas} = 160 - 50 = \mathbf{Rp110.000.000}$. $\\text{Ekuitas} = \text{Modal Disetor} + \mathbf{\\text{Laba Ditahan}}$. $\\text{Laba Ditahan} = 110 - 80 = \mathbf{Rp30.000.000}$.",
  },
  // --- Studi Kasus - Laporan Laba Rugi ---
  {
    type: "Studi Kasus – Laporan Laba Rugi",
    question:
      "Kasus: PT Indofood mencatat Penjualan Rp500 M, Harga Pokok Penjualan Rp300 M, Beban Operasional Rp100 M, dan Beban Bunga Rp20 M. Berapakah Laba Bersih Sebelum Pajak (EBIT) perusahaan?",
    options: {
      a: "Rp80 miliar",
      b: "Rp100 miliar",
      c: "Rp120 miliar",
      d: "Rp200 miliar",
      e: "Rp150 miliar",
    },
    correct: "a",
    explanation:
      "Perhitungan Laporan Laba Rugi Multi-Step:\n1. $\\text{Laba Kotor} = \text{Penjualan} - \text{HPP} = 500 - 300 = \mathbf{Rp200 M}$.\n2. $\\text{Laba Operasi (EBIT)} = \text{Laba Kotor} - \text{Beban Operasional} = 200 - 100 = \mathbf{Rp100 M}$.\n3. $\\text{Laba Sebelum Pajak} = \text{Laba Operasi} - \text{Beban Bunga} = 100 - 20 = \mathbf{Rp80 M}$.",
  },
  // --- PSAK - Aset Tetap ---
  {
    type: "PSAK – Aset Tetap",
    question:
      "PT Astra membeli mesin Rp500 juta dengan umur ekonomis 10 tahun, dan nilai residu diperkirakan Rp50 juta. Menggunakan metode garis lurus, berapa beban depresiasi tahunan?",
    options: {
      a: "Rp25 juta",
      b: "Rp40 juta",
      c: "Rp50 juta",
      d: "Rp45 juta",
      e: "Rp60 juta",
    },
    correct: "d",
    explanation:
      "$\\text{Depresiasi Garis Lurus} = (\\text{Harga Perolehan} - \\text{Nilai Residu}) / \\text{Umur Ekonomis}$.\nPerhitungan: $(\\text{Rp500.000.000} - \\text{Rp50.000.000}) / 10 = \\text{Rp450.000.000} / 10 = \mathbf{Rp45.000.000}$ per tahun. PSAK 16 mengatur dasar perhitungan depresiasi adalah depreciable amount.",
  },
  // --- Studi Kasus - Persediaan (PSAK 14) ---
  {
    type: "Studi Kasus – Persediaan (PSAK 14)",
    question:
      "Kasus: PT Matahari menggunakan metode FIFO. Data Persediaan Barang A: $\\text{Awal}: 100 \text{ unit} @ \text{Rp10.000}$. $\\text{Beli}: 200 \text{ unit} @ \text{Rp12.000}$. $\\text{Terjual}: 250 \text{ unit}$. Hitung Harga Pokok Penjualan (HPP).",
    options: {
      a: "Rp2.700.000",
      b: "Rp2.800.000",
      c: "Rp2.900.000",
      d: "Rp3.000.000",
      e: "Rp3.100.000",
    },
    correct: "b",
    explanation:
      "FIFO (First-In, First-Out) berasumsi barang yang dijual adalah stok paling awal. Total 250 unit yang terjual diambil dari:\n1. Stok Awal: $100 \text{ unit} \times \text{Rp10.000} = \text{Rp1.000.000}$.\n2. Stok Pembelian: $150 \text{ unit} \times \text{Rp12.000} = \text{Rp1.800.000}$.\n$\\text{Total HPP} = \text{Rp1.000.000} + \text{Rp1.800.000} = \mathbf{Rp2.800.000}$. Sisa persediaan akhir adalah $50 \text{ unit} @ \text{Rp12.000}$.",
  },
  // --- Akuntansi Manajemen - Biaya ---
  {
    type: "Akuntansi Manajemen – Biaya",
    question:
      "Dalam perusahaan manufaktur, biaya yang diklasifikasikan sebagai Biaya Produk (Product Costs) dan akan melekat pada persediaan hingga produk terjual, terdiri dari:",
    options: {
      a: "Biaya Administrasi dan Biaya Pemasaran.",
      b: "Biaya Bahan Baku, Biaya Tenaga Kerja Langsung, dan Biaya Overhead Pabrik.",
      c: "Biaya Bunga dan Biaya Non-Operasional lainnya.",
      d: "Biaya tetap dan Biaya variabel (period costs).",
      e: "Biaya periode (period costs) seperti gaji manajemen.",
    },
    correct: "b",
    explanation:
      "Biaya Produk adalah seluruh biaya yang diperlukan untuk menghasilkan produk jadi. Biaya ini dikapitalisasi sebagai aset (persediaan) dan baru menjadi Harga Pokok Penjualan (HPP) saat produk tersebut dijual. Opsi A dan E adalah Biaya Periode, yang dibebankan pada periode saat terjadinya (misalnya gaji marketing, sewa kantor).",
  },
  // --- Studi Kasus - Break Even Point (BEP) ---
  {
    type: "Studi Kasus – Break Even Point (BEP)",
    question:
      "Kasus: PT Aqua menjual air minum dengan harga Rp5.000/botol. Biaya variabel Rp3.000/botol, Biaya Tetap Rp20 juta. Berapa Break Even Point (BEP) dalam unit?",
    options: {
      a: "5.000 unit",
      b: "8.000 unit",
      c: "10.000 unit",
      d: "12.000 unit",
      e: "15.000 unit",
    },
    correct: "c",
    explanation:
      "$\\text{BEP (unit)} = \\text{Biaya Tetap} / \\text{Margin Kontribusi per unit}$.\n$\\text{Margin Kontribusi per unit} = \text{Rp5.000} - \text{Rp3.000} = \text{Rp2.000}$.\n$\\text{BEP} = \text{Rp20.000.000} / \text{Rp2.000} = \mathbf{10.000 \text{ unit}}$. BEP menunjukkan titik di mana Total Pendapatan sama dengan Total Biaya (laba = 0).",
  },
  // --- Audit - Konfirmasi ---
  {
    type: "Audit – Konfirmasi",
    question:
      "Dalam audit, prosedur konfirmasi eksternal paling sering digunakan untuk menguji asersi keberadaan (existence) dan kelengkapan (completeness) pada akun:",
    options: {
      a: "Persediaan (menguji fisik dengan observasi).",
      b: "Kas kecil (menguji fisik dengan hitung kas).",
      c: "Piutang usaha (menguji dengan pihak ketiga).",
      d: "Akumulasi Depresiasi (menguji dengan perhitungan ulang).",
      e: "Goodwill (menguji dengan penilaian wajar).",
    },
    correct: "c",
    explanation:
      "Konfirmasi adalah bukti audit yang sangat andal karena diperoleh dari sumber independen di luar entitas (pihak ketiga). Konfirmasi Piutang Usaha dan Saldo Bank adalah prosedur standar yang hampir selalu wajib dilakukan oleh auditor. SA 505 mengatur prosedur konfirmasi eksternal.",
  },
  // --- Studi Kasus - Skandal Akuntansi (Kasus Enron) ---
  {
    type: "Studi Kasus – Skandal Akuntansi (Kasus Enron)",
    question:
      "Kasus Enron (2001) menggunakan Special Purpose Entities (SPEs) di luar neraca untuk menyembunyikan utang. Praktik ini melanggar secara esensial konsep akuntansi:",
    options: {
      a: "Konsep Kesinambungan Usaha (Going Concern).",
      b: "Konsep Kewajaran Penyajian (Fair Presentation).",
      c: "Konsep Basis Akrual (Accrual Basis).",
      d: "Prinsip Pengungkapan Penuh (Full Disclosure) dan Substansi Mengungguli Bentuk.",
      e: "Konsep Konsistensi (Consistency).",
    },
    correct: "d",
    explanation:
      "Enron melanggar prinsip Full Disclosure karena tidak memaparkan semua informasi material yang dibutuhkan pengguna laporan. Selain itu, praktik ini juga melanggar prinsip Substansi Mengungguli Bentuk (SPE yang dikendalikan Enron seharusnya dikonsolidasikan, terlepas dari bentuk hukumnya), yang merupakan pilar dalam IFRS/PSAK.",
  },
  // --- Akuntansi Dasar - Jurnal Penyesuaian ---
  {
    type: "Akuntansi Dasar – Jurnal Penyesuaian",
    question:
      "PT Sejahtera memiliki beban gaji Rp10.000.000 yang belum dibayar pada akhir periode (gaji akrual). Jurnal penyesuaian yang benar adalah:",
    options: {
      a: "Debit Kas Rp10.000.000; Kredit Utang Gaji Rp10.000.000 (Implikasi: Kas masuk, utang naik)",
      b: "Debit Gaji Dibayar di Muka Rp10.000.000; Kredit Kas Rp10.000.000 (Implikasi: Aset naik, Kas keluar)",
      c: "Debit Beban Gaji Rp10.000.000; Kredit Utang Gaji Rp10.000.000 (Implikasi: Beban diakui, Liabilitas naik)",
      d: "Debit Utang Gaji Rp10.000.000; Kredit Beban Gaji Rp10.000.000 (Implikasi: Utang turun, Beban turun)",
      e: "Debit Modal Rp10.000.000; Kredit Beban Gaji Rp10.000.000 (Implikasi: Pengurangan ekuitas)",
    },
    correct: "c",
    explanation:
      "Sesuai basis akrual, beban harus diakui saat terjadi. Akun Beban Gaji (nominalnya Debit) diakui, dan karena belum dibayar, timbul Utang Gaji (akun Liabilitas yang normalnya Kredit). Ini adalah contoh penyesuaian untuk accrued expenses.",
  },
  // --- Laporan Keuangan - Arus Kas ---
  {
    type: "Laporan Keuangan – Arus Kas",
    question:
      "Aktivitas berikut yang diklasifikasikan dalam laporan arus kas bagian Investasi (Investing Activities) adalah:",
    options: {
      a: "Pembayaran dividen kepada pemegang saham.",
      b: "Penerbitan saham baru kepada investor.",
      c: "Pinjaman jangka panjang yang diterima dari bank.",
      d: "Pembelian Peralatan atau Aset Tetap lainnya.",
      e: "Pelunasan obligasi jangka panjang.",
    },
    correct: "d",
    explanation:
      "Aktivitas Investasi mencakup pembelian dan penjualan aset jangka panjang (aset tetap) dan investasi jangka panjang. Opsi a, b, c, dan e termasuk dalam aktivitas Pendanaan (Financing), yang berkaitan dengan klaim pemilik (ekuitas) dan klaim kreditor (utang jangka panjang).",
  },
  // --- Studi Kasus - Laporan Keuangan Garuda Indonesia (2018) ---
  {
    type: "Studi Kasus – Laporan Keuangan Garuda Indonesia (2018)",
    question:
      "Laporan keuangan Garuda 2018 menuai kontroversi karena mengakui pendapatan Rp239,94 juta dari kerja sama dengan Mahata, padahal belum ada kepastian arus kas masuk. Kesalahan akuntansi fundamental ini melanggar prinsip:",
    options: {
      a: "Prinsip Matching (kesesuaian beban dan pendapatan).",
      b: "Pengakuan Pendapatan (Revenue Recognition) sesuai PSAK 72 (IFRS 15).",
      c: "Prinsip Going Concern (kesinambungan usaha).",
      d: "Prinsip Prudence (kehati-hatian) dalam penilaian utang.",
      e: "PSAK 10 (Akuntansi Selisih Kurs).",
    },
    correct: "b",
    explanation:
      "PSAK 72 (adopsi IFRS 15) mengatur pendapatan diakui ketika kendali barang atau jasa telah berpindah ke pelanggan, dan jumlahnya kemungkinan besar akan direalisasi (probable). Garuda dianggap melanggar karena mengakui pendapatan dari piutang yang masih bersifat spekulatif, sehingga laporan laba rugi disajikan overstated.",
  },
  // --- PSAK - Instrumen Keuangan ---
  {
    type: "PSAK – Instrumen Keuangan",
    question:
      "PT Bank Mandiri membeli obligasi korporasi dengan tujuan utama untuk diperdagangkan jangka pendek (trading). Sesuai PSAK 71 (IFRS 9), instrumen ini diklasifikasikan dan diukur pada:",
    options: {
      a: "Amortized Cost, karena obligasi adalah kontrak utang.",
      b: "Held to Maturity, diukur pada biaya perolehan.",
      c: "Fair Value through Profit or Loss (FVTPL), dengan perubahan nilai diakui ke laba rugi.",
      d: "Fair Value through Other Comprehensive Income (FVOCI), dengan perubahan nilai diakui ke ekuitas.",
      e: "Cost Model, karena tidak ada niat menjual.",
    },
    correct: "c",
    explanation:
      "IFRS 9 / PSAK 71 mengklasifikasikan instrumen utang berdasarkan dua kriteria: model bisnis dan karakteristik arus kas kontraktual. Obligasi yang dipegang untuk trading (tujuan jual-beli) wajib diklasifikasikan FVTPL. Perubahan nilai wajarnya langsung memengaruhi laba bersih (volatilitas laba tinggi).",
  },
  // --- Akuntansi Manajemen - Activity Based Costing (ABC) ---
  {
    type: "Akuntansi Manajemen – Activity Based Costing (ABC)",
    question:
      "Keunggulan utama metode Activity Based Costing (ABC) dibandingkan metode alokasi biaya tradisional (misalnya berdasarkan jam kerja) adalah:",
    options: {
      a: "Jauh lebih sederhana dan murah untuk diterapkan di semua jenis perusahaan.",
      b: "Mengalokasikan biaya hanya berdasarkan volume produksi total.",
      c: "Memberikan alokasi biaya overhead yang lebih akurat dengan merujuk pada aktivitas yang mengonsumsi sumber daya (cost drivers).",
      d: "Mengabaikan biaya tetap dan hanya menggunakan biaya variabel.",
      e: "Tidak dapat digunakan untuk entitas jasa atau sektor publik.",
    },
    correct: "c",
    explanation:
      "ABC menggunakan berbagai cost drivers (pemicu biaya), tidak hanya volume, untuk mengalokasikan overhead. Ini menghasilkan harga pokok produk yang lebih realistis, khususnya bagi perusahaan yang memiliki produk dan proses yang beragam, sehingga mendukung keputusan manajerial seperti penetapan harga dan eliminasi produk.",
  },
  // --- Studi Kasus - Skandal WorldCom (2002) ---
  {
    type: "Studi Kasus – Skandal WorldCom (2002)",
    question:
      "Kasus WorldCom melibatkan manipulasi laba dengan cara mengklasifikasikan beban operasional (misalnya biaya sewa jaringan) sebagai aset. Praktik ini melanggar secara spesifik prinsip akuntansi:",
    options: {
      a: "Prinsip Biaya Historis (Cost Principle).",
      b: "Prinsip Kesesuaian (Matching Principle).",
      c: "Prinsip Pengakuan Pendapatan (Revenue Recognition).",
      d: "Prinsip Going Concern (kesinambungan usaha).",
      e: "Prinsip Konservatisme (Prudence).",
    },
    correct: "b",
    explanation:
      "Beban operasional (misalnya biaya jaringan) seharusnya dibebankan (expense) pada periode saat terjadi untuk dicocokkan dengan pendapatan yang dihasilkan. Dengan mengkapitalisasi beban tersebut sebagai aset, WorldCom secara ilegal menunda pengakuan beban, yang mengakibatkan laba (dan aset) disajikan overstated.",
  },
  // --- Audit - Risiko Audit ---
  {
    type: "Audit – Risiko Audit",
    question:
      "Risiko audit yang terjadi ketika auditor salah menyimpulkan bahwa laporan keuangan bebas dari salah saji material, padahal sebenarnya salah, disebut:",
    options: {
      a: "Risiko Deteksi (Detection Risk).",
      b: "Risiko Pengendalian (Control Risk).",
      c: "Risiko Bawaan (Inherent Risk).",
      d: "Risiko Bisnis (Risiko yang dihadapi perusahaan).",
      e: "Risiko Sampel (Risiko pengujian sampel tidak mewakili populasi).",
    },
    correct: "a",
    explanation:
      "Risiko Deteksi adalah risiko prosedur audit yang dilakukan auditor gagal mendeteksi salah saji material. Risiko Audit adalah fungsi dari ketiga risiko: $AR = DR \times CR \times IR$. Auditor harus merencanakan pengujian audit agar Risiko Deteksi tetap rendah, terutama jika Risiko Bawaan dan Pengendalian tinggi.",
  },
  // --- Perpajakan - PPh Badan ---
  {
    type: "Perpajakan – PPh Badan",
    question:
      "Tarif Pajak Penghasilan (PPh) Badan di Indonesia yang berlaku sejak 2022 sesuai UU Harmonisasi Peraturan Perpajakan (HPP) adalah:",
    options: {
      a: "20% (Target awal OECD).",
      b: "22%.",
      c: "25% (Tarif sebelum 2020).",
      d: "30%.",
      e: "35%.",
    },
    correct: "b",
    explanation:
      "UU HPP menetapkan tarif PPh Badan sebesar 22% mulai tahun 2022. Ini merupakan upaya pemerintah untuk menjaga penerimaan negara di tengah pandemi, meskipun tarif ini lebih tinggi daripada beberapa negara ASEAN lainnya.",
  },
  // --- Studi Kasus - Perpajakan Perusahaan ---
  {
    type: "Studi Kasus – Perpajakan Perusahaan",
    question:
      "Kasus: PT ABC mencatat Penjualan Rp10 M, HPP Rp6 M, Beban Operasional Rp2 M, dan Beban Bunga Rp200 juta. Semua pos ini diakui secara fiskal. Berapa PPh Badan terutang (tarif 22%)?",
    options: {
      a: "Rp396 juta",
      b: "Rp400 juta",
      c: "Rp420 juta",
      d: "Rp440 juta",
      e: "Rp450 juta",
    },
    correct: "a",
    explanation:
      "$\\text{Laba Kena Pajak} = \text{Penjualan} - \text{HPP} - \text{Beban Operasional} - \text{Beban Bunga}$.\n$\\text{Laba Kena Pajak} = 10 \text{ M} - 6 \text{ M} - 2 \text{ M} - 0.2 \text{ M} = \mathbf{Rp1.8 \text{ M}}$.\n$\\text{PPh Terutang} = 22\% \times \text{Rp1.8 M} = \mathbf{Rp396 \text{ juta}}$.",
  },
  // --- Etika Profesi Akuntansi ---
  {
    type: "Etika Profesi Akuntansi",
    question:
      "Seorang akuntan publik menerima hadiah mewah dari klien menjelang proses audit. Ancaman utama terhadap etika profesi IAPI yang muncul adalah:",
    options: {
      a: "Ancaman Kompetensi Profesional.",
      b: "Ancaman Kerahasiaan (Confidentiality).",
      c: "Ancaman Self-Review (auditor memeriksa hasil kerjanya sendiri).",
      d: "Ancaman Objektivitas dan Independensi.",
      e: "Ancaman Perilaku Profesional.",
    },
    correct: "d",
    explanation:
      "Penerimaan hadiah (atau imbalan yang tidak wajar) menimbulkan ancaman kepentingan pribadi (self-interest threat). Ancaman ini secara langsung mengganggu independensi dan objektivitas auditor, sehingga auditor mungkin tidak berani mengeluarkan opini yang merugikan klien. Ini dilarang keras dalam Kode Etik Profesi Akuntan Publik.",
  },
  // --- Akuntansi Keuangan - Penyusutan Aset Tetap ---
  {
    type: "Akuntansi Keuangan – Penyusutan Aset Tetap",
    question:
      "PT Sentosa membeli mesin seharga Rp500.000.000 dengan umur ekonomis 8 tahun dan nilai residu Rp20.000.000. Jika perusahaan menggunakan metode garis lurus, berapa beban penyusutan tahunan?",
    options: {
      a: "Rp62.500.000",
      b: "Rp50.000.000",
      c: "Rp55.000.000",
      d: "Rp60.000.000",
      e: "Rp58.000.000",
    },
    correct: "d",
    explanation:
      "$\\text{Depresiasi Garis Lurus} = (\\text{Harga Perolehan} - \\text{Nilai Residu}) / \\text{Umur Manfaat}$.\n$(\\text{Rp500.000.000} - \\text{Rp20.000.000}) / 8 = \text{Rp480.000.000} / 8 = \mathbf{Rp60.000.000}$ per tahun.",
  },
  // --- Akuntansi Keuangan - Leasing (PSAK 73/IFRS 16) ---
  {
    type: "Akuntansi Keuangan – Leasing (PSAK 73/IFRS 16)",
    question:
      "Menurut PSAK 73 (adopsi IFRS 16), sewa gedung selama 5 tahun dengan kewajiban pembayaran yang substansial harus dicatat di neraca sebagai:",
    options: {
      a: "Beban sewa langsung di Laba Rugi (metode operating lease lama).",
      b: "Aset Hak-Guna (Right-of-Use Asset) dan Liabilitas Sewa (Lease Liability).",
      c: "Hanya beban operasional, tidak memengaruhi neraca.",
      d: "Hanya dicatat sebagai off-balance sheet financing.",
      e: "Dicatat sebagai aset tetap (properti), bukan aset hak-guna.",
    },
    correct: "b",
    explanation:
      "PSAK 73 mengadopsi model single lessee accounting. Ini menghapus perbedaan antara operating dan finance lease bagi penyewa, mewajibkan hampir semua sewa diakui on-balance sheet sebagai Aset Hak-Guna dan Liabilitas Sewa. Hal ini meningkatkan transparansi liabilitas perusahaan.",
  },
  // --- Studi Kasus - Skandal Enron (2001) ---
  {
    type: "Studi Kasus – Skandal Enron (2001)",
    question:
      "Enron menggunakan Special Purpose Entity (SPE) untuk menyembunyikan utang. Praktik ini melanggar prinsip konsolidasi IFRS karena SPE tersebut seharusnya dikonsolidasikan berdasarkan kriteria:",
    options: {
      a: "Kepemilikan suara saham di atas 50% (legal form).",
      b: "Kendali Substantif (Substantive Control) dan perolehan manfaat dari SPE.",
      c: "Total aset SPE lebih besar dari total aset entitas induk.",
      d: "Utang boleh dipindahkan jika ada perjanjian legal yang sah.",
      e: "Tidak ada aturan konsolidasi yang berlaku untuk SPE.",
    },
    correct: "b",
    explanation:
      "IFRS 10 (PSAK 65) menetapkan konsolidasi berdasarkan kendali (control), bukan hanya kepemilikan. Meskipun kepemilikan formal mungkin kecil, jika Enron memiliki kendali atas SPE dan memperoleh manfaat/menanggung risiko, SPE wajib dikonsolidasikan (prinsip Substance Over Form).",
  },
  // --- Akuntansi Keuangan - Konsolidasi ---
  {
    type: "Akuntansi Keuangan – Konsolidasi",
    question:
      "PT Induk memiliki 80% saham PT Anak. Laba bersih PT Anak tahun ini Rp500.000.000. Berapakah bagian laba yang diatribusikan kepada Kepentingan Nonpengendali (KNP) (Non-Controlling Interest) dalam laporan konsolidasi?",
    options: {
      a: "Rp50.000.000",
      b: "Rp80.000.000",
      c: "Rp100.000.000",
      d: "Rp150.000.000",
      e: "Rp200.000.000",
    },
    correct: "c",
    explanation:
      "Kepentingan Nonpengendali (KNP) adalah bagian laba yang dimiliki oleh pihak minoritas. Persentase KNP: $100\% - 80\% = 20\%$. Perhitungan: $20\% \times \text{Rp500.000.000} = \mathbf{Rp100.000.000}$. Sisa Rp400 juta adalah laba milik entitas induk.",
  },
  // --- Studi Kasus - Bank Century (2008) ---
  {
    type: "Studi Kasus – Bank Century (2008)",
    question:
      "Kasus bailout Bank Century menimbulkan kontroversi karena penilaian aset bermasalah dicatat terlalu optimistis. Prinsip akuntansi yang dilanggar karena tidak mengakui kerugian secara memadai adalah:",
    options: {
      a: "Prinsip Matching (kesesuaian beban dan pendapatan).",
      b: "Prinsip Historical Cost (biaya perolehan).",
      c: "Prinsip Fair Value Measurement (pengukuran nilai wajar).",
      d: "Prinsip Kehati-hatian (Prudence/Conservatism).",
      e: "Prinsip Going Concern (kesinambungan usaha).",
    },
    correct: "d",
    explanation:
      "Prinsip Prudence mengharuskan perusahaan berhati-hati dalam membuat pertimbangan. Ini berarti kerugian harus diakui segera setelah teridentifikasi, sementara pendapatan tidak boleh diakui sampai realisasi pasti. Bank Century dianggap gagal mencatat kerugian secara konservatif, sehingga nilai aset disajikan lebih besar dari nilai yang dapat dipulihkan.",
  },
  // --- Audit - Bukti Audit ---
  {
    type: "Audit – Bukti Audit",
    question:
      "Dalam audit, urutan tingkat reliabilitas bukti (dari Paling Andal ke Kurang Andal) adalah:",
    options: {
      a: "Konfirmasi Pihak Eksternal > Dokumen Internal > Observasi Auditor",
      b: "Diskusi dengan Manajemen > Dokumen Internal > Konfirmasi Pihak Eksternal",
      c: "Perhitungan Auditor > Observasi Auditor > Konfirmasi Pihak Eksternal",
      d: "Bukti yang Dibuat Auditor > Bukti dari Pihak Eksternal > Bukti Internal",
      e: "Observasi Langsung Auditor > Diskusi Manajemen > Konfirmasi Pihak Eksternal",
    },
    correct: "d",
    explanation:
      "Menurut Standar Audit (SA 500), reliabilitas bukti audit ditentukan oleh sumbernya:\n1. Paling Andal: Bukti yang Diperoleh Auditor Sendiri (Observasi, Hitung Kas/Persediaan, Kalkulasi Ulang).\n2. Kedua: Bukti dari Pihak Eksternal (Konfirmasi Bank/Piutang/Utang).\n3. Kurang Andal: Bukti dari Internal (Invoice Penjualan, Memo).",
  },
  // --- Akuntansi Biaya - Break Even Point (BEP) ---
  {
    type: "Akuntansi Biaya – Break Even Point (BEP)",
    question:
      "PT Maju memproduksi barang dengan harga jual Rp50.000/unit, biaya variabel Rp30.000/unit, dan biaya tetap Rp100.000.000. Berapakah margin of safety jika perusahaan menjual 6.000 unit?",
    options: {
      a: "1.000 unit",
      b: "2.000 unit",
      c: "3.000 unit",
      d: "4.000 unit",
      e: "5.000 unit",
    },
    correct: "a",
    explanation:
      "1. $\\text{BEP (unit)} = \\text{Biaya Tetap} / (50.000 - 30.000) = 100.000.000 / 20.000 = \mathbf{5.000 \text{ unit}}$.\n2. $\\text{Margin of Safety (MOS)} = \\text{Penjualan Aktual} - \\text{BEP Penjualan}$.\n$\\text{MOS} = 6.000 \text{ unit} - 5.000 \text{ unit} = \mathbf{1.000 \text{ unit}}$. MOS menunjukkan seberapa jauh penjualan bisa turun sebelum perusahaan mulai rugi.",
  },
  // --- Perpajakan - PPN ---
  {
    type: "Perpajakan – PPN",
    question:
      "Tarif PPN Indonesia per 1 April 2022 sesuai UU HPP adalah 11%. Tarif ini merupakan bagian dari sistem PPN yang berkarakteristik:",
    options: {
      a: "Pajak Langsung (ditanggung penjual) dan Multitahap.",
      b: "Pajak Tidak Langsung (ditanggung konsumen) dan Dikenakan atas Nilai Tambah.",
      c: "Pajak Final (pembayaran sekali) dan Dikenakan atas Omzet.",
      d: "Pajak Progresif (tarif naik seiring nilai) dan Dikenakan atas Laba.",
      e: "Pajak Regresif (tarif turun seiring nilai) dan Dikenakan atas Nilai Jual.",
    },
    correct: "b",
    explanation:
      "PPN adalah Pajak Tidak Langsung karena meskipun dipungut penjual, beban pajak ditanggung oleh konsumen akhir. PPN juga dikenakan pada setiap tahap produksi dan distribusi, tetapi hanya atas nilai tambah yang tercipta (PPN Keluaran dikurangi PPN Masukan).",
  },
  // --- Studi Kasus - Pajak Digital Netflix & Google ---
  {
    type: "Studi Kasus – Pajak Digital Netflix & Google",
    question:
      "Pemerintah Indonesia mengenakan PPN atas layanan digital asing (Netflix, Google). Kebijakan ini merupakan bagian dari upaya global untuk mengatasi masalah perpajakan di era digital yang dikenal sebagai:",
    options: {
      a: "Kenaikan Pajak Minimum Global (Pillar Two).",
      b: "Isu Base Erosion and Profit Shifting (BEPS).",
      c: "Transfer Pricing Lintas Batas.",
      d: "Isu Tax Exemption (pengecualian pajak).",
      e: "Pajak Penghasilan Badan (PPh Badan).",
    },
    correct: "b",
    explanation:
      "Layanan digital asing sering tidak memiliki physical presence di Indonesia, sehingga sulit dipajaki PPh. Pengenaan PPN atas layanan digital adalah cara untuk memastikan mereka berkontribusi pada pendapatan negara, sejalan dengan inisiatif OECD-BEPS untuk mengatasi penggerusan basis pajak dan pergeseran laba.",
  },
];

export default akuntansiQuestions;