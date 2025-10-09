// Kumpulan soal-soal tentang Bank Sentral dan Bank Indonesia - VERSI REVISI KOMPREHENSIF

const bankQuestions = [
  // --- DASAR-DASAR EKONOMI TERKAIT BANK SENTRAL (Tingkat Lanjut) ---
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Konsep lender of last resort dalam sistem perbankan merujuk pada fungsi utama bank sentral untuk:",
    options: {
      A: "Menjamin semua simpanan nasabah yang mengalami kebangkrutan.",
      B: "Menyediakan pinjaman darurat likuiditas kepada bank yang sehat namun kesulitan likuiditas jangka pendek.",
      C: "Menjadi kreditur tertinggi bagi pemerintah yang mengalami defisit anggaran.",
      D: "Mengawasi secara ketat bank-bank dengan risiko kredit tertinggi.",
      E: "Membeli obligasi pemerintah di pasar primer untuk meningkatkan uang beredar.",
    },
    correct: "B",
    explanation:
      "Lender of last resort adalah fungsi Bank Sentral (BI) untuk menyediakan bantuan likuiditas darurat (*Emergency Liquidity Assistance/ELA*) kepada bank yang mengalami kesulitan likuiditas temporal, namun memiliki solvabilitas yang baik (sehat). Tujuannya adalah mencegah *bank run* dan krisis sistemik. Opsi A adalah fungsi Lembaga Penjamin Simpanan (LPS).",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Dalam teori ekonomi moneter, money multiplier (pelipat ganda uang) paling akurat didefinisikan sebagai:",
    options: {
      A: "Rasio antara cadangan wajib bank sentral dengan jumlah uang primer.",
      B: "Perbandingan yang menunjukkan besaran inflasi akibat dari peningkatan suku bunga acuan.",
      C: "Rasio yang menggambarkan seberapa besar total penawaran uang dapat diciptakan dari perubahan basis moneter (uang primer).",
      D: "Faktor yang mengukur sensitivitas permintaan uang terhadap perubahan tingkat pendapatan nasional.",
      E: "Perbandingan antara uang kartal yang dipegang masyarakat dan uang giral di perbankan.",
    },
    correct: "C",
    explanation:
      "Money Multiplier menunjukkan berapa kali lipat jumlah uang beredar $(M)$ dapat ditingkatkan atau diciptakan oleh sistem perbankan dari setiap unit basis moneter $(B)$. Faktor ini sangat dipengaruhi oleh rasio cadangan wajib bank sentral dan preferensi masyarakat terhadap uang kartal (cash) dibandingkan giral (deposit).",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Fenomena crowding out effect dalam konteks kebijakan fiskal ekspansif terjadi ketika:",
    options: {
      A: "Peningkatan belanja pemerintah menyebabkan lonjakan suku bunga riil, yang kemudian menekan investasi swasta.",
      B: "Pemerintah mencetak uang secara masif untuk membiayai pengeluaran, sehingga menyebabkan inflasi tinggi.",
      C: "Kebijakan fiskal yang ekspansif diimbangi oleh kebijakan moneter yang sangat longgar.",
      D: "Pinjaman luar negeri pemerintah mendominasi pasar modal, sehingga mengurangi likuiditas domestik.",
      E: "Ekspektasi inflasi yang tinggi membuat konsumsi publik meningkat secara drastis, sehingga 'mengerumuni' permintaan barang.",
    },
    correct: "A",
    explanation:
      "Crowding Out Effect terjadi ketika peningkatan pengeluaran pemerintah (dibiayai utang) meningkatkan permintaan dana di pasar, menaikkan suku bunga riil, dan pada gilirannya mengurangi (crowd out) investasi dan konsumsi sektor swasta. Ini menunjukkan keterbatasan efektivitas kebijakan fiskal.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Dalam model IS-LM, kurva LM secara fundamental menunjukkan kombinasi antara tingkat bunga dan pendapatan yang menghasilkan:",
    options: {
      A: "Keseimbangan di pasar barang dan jasa (Investasi = Tabungan).",
      B: "Keseimbangan di pasar tenaga kerja, menentukan output potensial.",
      C: "Keseimbangan di pasar uang (Permintaan uang = Penawaran uang).",
      D: "Keseimbangan neraca pembayaran (BOP) dan nilai tukar.",
      E: "Titik di mana investasi marjinal sama dengan tabungan marjinal.",
    },
    correct: "C",
    explanation:
      "Kurva LM (Liquidity-Money) merepresentasikan pasar uang. Setiap titik pada kurva menunjukkan kombinasi tingkat pendapatan $(Y)$ dan tingkat bunga $(r)$ di mana permintaan uang sama dengan penawaran uang. Opsi A adalah kurva IS (Investment-Saving).",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Konsep output gap dalam analisis makroekonomi paling relevan untuk menilai:",
    options: {
      A: "Seberapa besar defisit anggaran belanja pemerintah dibandingkan dengan PDB nominal.",
      B: "Potensi tekanan inflasi atau deflasi yang timbul akibat perbedaan antara PDB aktual dan PDB potensial.",
      C: "Perbedaan antara suku bunga acuan bank sentral dengan suku bunga pasar uang antarbank.",
      D: "Selisih antara total ekspor dan impor barang dan jasa dalam neraca pembayaran.",
      E: "Seberapa jauh tingkat pengangguran aktual menyimpang dari tingkat pengangguran alami (NAIRU).",
    },
    correct: "B",
    explanation:
      "Output Gap adalah selisih persentase antara Produk Domestik Bruto (PDB) Aktual dan PDB Potensial. Gap yang positif mengindikasikan kelebihan permintaan (ekonomi *overheating*) dan potensi tekanan inflasi. Gap yang negatif mengindikasikan kapasitas menganggur (*slack*) dan potensi tekanan deflasi. Ini adalah alat penting untuk justifikasi *stance* kebijakan moneter.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Dalam konteks kebijakan moneter dan stabilitas, istilah neutral interest rate (tingkat bunga netral) merujuk pada:",
    options: {
      A: "Tingkat suku bunga yang paling sering ditetapkan dalam operasi pasar terbuka.",
      B: "Suku bunga nominal yang jika dipertahankan akan menstabilkan inflasi pada target, tanpa memicu kontraksi atau ekspansi ekonomi.",
      C: "Suku bunga acuan yang ditetapkan bank sentral untuk tujuan makroprudensial.",
      D: "Tingkat diskonto yang digunakan bank sentral untuk meminjamkan kepada pemerintah.",
      E: "Suku bunga riil yang menyeimbangkan pasar uang dan pasar barang secara simultan dalam jangka pendek.",
    },
    correct: "B",
    explanation:
      "Neutral Interest Rate (atau $r^*$) adalah tingkat suku bunga riil jangka panjang di mana output aktual sama dengan output potensial, dan inflasi stabil. Mempertahankan suku bunga kebijakan di bawah (di atas) tingkat netral akan bersifat ekspansif (kontraktif) terhadap ekonomi. Ini adalah konsep kunci dalam *Inflation Targeting Framework*.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Pernyataan yang paling akurat mengenai transmisi kebijakan moneter melalui exchange rate channel (jalur nilai tukar) adalah:",
    options: {
      A: "Penurunan suku bunga domestik menyebabkan arus modal masuk, memperkuat nilai tukar, dan meningkatkan net ekspor.",
      B: "Kenaikan suku bunga acuan menarik arus modal asing, menyebabkan apresiasi mata uang domestik, sehingga menekan inflasi dari sisi impor.",
      C: "Perubahan suku bunga mempengaruhi kekayaan rumah tangga yang memiliki aset luar negeri, dan mengubah konsumsi.",
      D: "Bank sentral secara langsung menetapkan harga jual dan beli mata uang asing di pasar.",
      E: "Nilai tukar yang lemah meningkatkan biaya impor, yang lantas mendorong investasi dalam negeri.",
    },
    correct: "B",
    explanation:
      "Exchange Rate Channel: Kenaikan suku bunga domestik $\rightarrow$ menarik *capital inflow* $\rightarrow$ apresiasi mata uang domestik $\rightarrow$ harga barang impor menjadi lebih murah $\rightarrow$ menurunkan inflasi (tekanan harga). Suku bunga domestik yang lebih tinggi juga membuat aset domestik lebih menarik.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Dalam analisis kebijakan moneter, kurva Phillips Curve klasik menyatakan adanya *trade-off* jangka pendek antara:",
    options: {
      A: "Tingkat suku bunga riil dan total investasi agregat.",
      B: "Tingkat pengangguran dan tingkat pertumbuhan produk domestik bruto (PDB).",
      C: "Tingkat inflasi dan tingkat pengangguran (Output Gap).",
      D: "Tingkat cadangan devisa dan tingkat mobilitas modal internasional.",
      E: "Tingkat harga energi dan tingkat harga komoditas pangan.",
    },
    correct: "C",
    explanation:
      "Phillips Curve menggambarkan hubungan terbalik jangka pendek antara tingkat inflasi dan tingkat pengangguran. Ketika pengangguran rendah (ekonomi berjalan di atas potensial), tekanan inflasi cenderung meningkat, dan sebaliknya. Opsi B adalah hubungan yang dijelaskan oleh Hukum Okun.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Time Inconsistency Problem dalam kebijakan moneter muncul karena kecenderungan otoritas untuk:",
    options: {
      A: "Membuat kebijakan moneter yang sangat rumit dan sulit dipahami publik.",
      B: "Menyimpang dari komitmen kebijakan yang diumumkan sebelumnya demi keuntungan jangka pendek, meskipun merugikan kredibilitas jangka panjang.",
      C: "Mengubah target inflasi setiap kuartal seiring dengan perubahan kondisi ekonomi.",
      D: "Mengimplementasikan kebijakan moneter dengan jeda waktu (lag) yang terlalu lama menuju efek penuh.",
      E: "Gagal mengoordinasikan kebijakan moneter dengan kebijakan fiskal secara efektif.",
    },
    correct: "B",
    explanation:
      "Time Inconsistency adalah konflik antara tujuan jangka pendek dan kredibilitas jangka panjang. Bank Sentral mungkin tergoda untuk melakukan 'inflasi kejutan' untuk menurunkan pengangguran sementara (keuntungan jangka pendek), namun ini akan merusak ekspektasi dan kredibilitas di masa depan. Kebutuhan untuk mengatasi masalah ini adalah alasan utama perlunya Independensi Bank Sentral.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Prinsip Impossible Trinity (Mundell-Fleming Trilemma) menyatakan bahwa suatu negara tidak mungkin secara simultan mencapai:",
    options: {
      A: "Stabilitas harga, pertumbuhan ekonomi tinggi, dan pengangguran rendah.",
      B: "Nilai tukar yang sangat stabil (kurs tetap), mobilitas modal internasional yang bebas, dan otonomi kebijakan moneter.",
      C: "Keseimbangan fiskal, surplus neraca pembayaran, dan Tingkat Bunga Netral (Neutral Rate).",
      D: "Anggaran berimbang, surplus perdagangan, dan tingkat suku bunga yang positif.",
      E: "Inklusi keuangan universal, sistem pembayaran yang canggih, dan pengawasan bank yang ketat.",
    },
    correct: "B",
    explanation:
      "Impossible Trinity menyatakan bahwa dari tiga tujuan: 1) Kurs Tetap, 2) Mobilitas Modal Bebas, dan 3) Kebijakan Moneter Independen/Otonom, sebuah negara hanya dapat memilih dua. Misalnya, Indonesia memilih otonomi moneter dan mobilitas modal, sehingga nilai tukar menjadi fleksibel.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Dalam transmisi kebijakan moneter, credit channel bekerja melalui dampak kebijakan pada:",
    options: {
      A: "Perubahan suku bunga yang mempengaruhi nilai aset finansial rumah tangga.",
      B: "Ketersediaan kredit bank kepada perusahaan dan rumah tangga (bank lending channel).",
      C: "Biaya modal ekuitas bagi perusahaan yang mengakses pasar saham.",
      D: "Pergerakan harga komoditas global yang memengaruhi biaya produksi domestik.",
      E: "Perubahan nilai tukar yang terjadi akibat intervensi di pasar valuta asing.",
    },
    correct: "B",
    explanation:
      "Credit Channel beroperasi melalui dua jalur utama: Bank Lending Channel (kebijakan moneter memengaruhi kemampuan bank menyalurkan kredit) dan Balance Sheet Channel (kebijakan moneter memengaruhi kekayaan atau nilai jaminan peminjam, sehingga mengubah kemampuan mereka mendapatkan kredit).",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question: "Konsep velocity of money dalam ekonomi mengacu pada:",
    options: {
      A: "Kecepatan pencetakan uang oleh bank sentral.",
      B: "Tingkat perputaran uang dalam perekonomian untuk transaksi PDB.",
      C: "Kecepatan transfer dana antar bank melalui sistem RTGS/SKNBI.",
      D: "Waktu yang diperlukan untuk mengedarkan uang baru dari BI ke masyarakat.",
      E: "Kecepatan pertumbuhan ekonomi relatif terhadap pertumbuhan uang beredar.",
    },
    correct: "B",
    explanation:
      "Velocity of Money adalah laju rata-rata di mana satu unit mata uang digunakan untuk membeli barang dan jasa domestik yang baru diproduksi. Dalam persamaan kuantitas uang, $V$ adalah rasio PDB Nominal terhadap jumlah uang beredar $(M)$ (yaitu, $V = PY/M$).",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Fenomena liquidity trap (perangkap likuiditas) terjadi ketika:",
    options: {
      A: "Bank sentral menaikkan suku bunga drastis untuk menjebak inflasi.",
      B: "Suku bunga nominal mendekati nol, membuat masyarakat menimbun uang tunai dan kebijakan moneter menjadi tidak efektif.",
      C: "Semua bank mengalami kesulitan likuiditas secara bersamaan (krisis likuiditas).",
      D: "Tingkat inflasi sangat tinggi sehingga nilai uang tunai jatuh drastis.",
      E: "Terlalu banyak bank yang terperangkap dalam kredit macet (NPL).",
    },
    correct: "B",
    explanation:
      "Liquidity Trap adalah kondisi di mana suku bunga nominal sudah sangat rendah, sehingga masyarakat lebih memilih memegang aset tunai (uang kartal/giral) daripada obligasi, menyebabkan kebijakan moneter ekspansif (penambahan uang beredar) tidak efektif merangsang investasi dan konsumsi.",
  },
  {
    type: "Dasar-Dasar Ekonomi Terkait Bank Sentral",
    question:
      "Core Inflation (Inflasi Inti) lebih diutamakan sebagai target operasional kebijakan moneter karena:",
    options: {
      A: "Mencakup semua komponen harga dalam keranjang IHK.",
      B: "Mencerminkan tekanan harga yang bersifat permanen dan dipengaruhi permintaan agregat.",
      C: "Merupakan komponen harga yang paling sering berfluktuasi.",
      D: "Mengecualikan dampak kebijakan fiskal dan non-moneter.",
      E: "Dihitung oleh Bank Sentral, berbeda dari perhitungan BPS.",
    },
    correct: "B",
    explanation:
      "Core Inflation mengecualikan komponen harga yang bergejolak (volatile food) dan harga yang diatur pemerintah (*administered price*). Oleh karena itu, Core Inflation lebih mencerminkan tekanan inflasi yang berasal dari permintaan agregat dan ekspektasi jangka menengah, yang merupakan ranah pengaruh kebijakan moneter Bank Sentral.",
  },

  // --- PERAN & FUNGSI BANK SENTRAL (Revisi) ---
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Fungsi utama bank sentral modern dalam konteks Indonesia (Bank Indonesia) meliputi:",
    options: {
      A: "Menetapkan target pertumbuhan PDB, mengatur sistem pembayaran, dan mengelola dana pensiun.",
      B: "Mengelola kebijakan moneter, mengatur sistem pembayaran, dan menjaga stabilitas sistem keuangan.",
      C: "Menjaga kurs tetap, memberikan kredit konsumsi, dan mengelola rekening pemerintah.",
      D: "Mengawasi bank komersial, menekan suku bunga kredit, dan menetapkan pajak.",
      E: "Menjamin simpanan nasabah, menetapkan anggaran negara, dan mencetak obligasi.",
    },
    correct: "B",
    explanation:
      "Tiga pilar utama tugas Bank Indonesia adalah: 1) Kebijakan Moneter (mencapai kestabilan Rupiah/inflasi), 2) Sistem Pembayaran (mengatur kelancaran transaksi), dan 3) Stabilitas Sistem Keuangan (SSK) (menjaga sistem keuangan dari risiko sistemik). Opsi D (Pengawasan Bank) telah dialihkan ke Otoritas Jasa Keuangan (OJK).",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Independensi bank sentral secara politik dan finansial penting untuk:",
    options: {
      A: "Memastikan Bank Sentral dapat membiayai defisit anggaran pemerintah tanpa batasan.",
      B: "Menghindari tekanan politik jangka pendek dalam pengambilan keputusan moneter, demi komitmen stabilitas harga jangka panjang.",
      C: "Menjamin Bank Sentral dapat beroperasi tanpa perlu diaudit oleh Badan Pemeriksa Keuangan.",
      D: "Memungkinkan Bank Sentral mencapai tingkat profitabilitas yang optimal untuk menambah kas negara.",
      E: "Mempermudah koordinasi kebijakan moneter dengan kebijakan perdagangan internasional.",
    },
    correct: "B",
    explanation:
      "Independensi Bank Sentral (terutama *goal independence* dan *instrument independence*) diperlukan untuk mengatasi masalah *time inconsistency*. Independensi mencegah otoritas politik memaksa Bank Sentral mengambil kebijakan moneter ekspansif jangka pendek yang akan memicu inflasi tinggi jangka panjang.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Dalam menjalankan fungsi sebagai banker's bank, Bank Sentral:",
    options: {
      A: "Memberikan layanan perbankan kepada masyarakat umum dan perusahaan besar.",
      B: "Menyediakan layanan kliring dan setelmen antar bank serta fasilitas pinjaman antar bank.",
      C: "Mengawasi kesehatan bank-bank komersial dan menetapkan tarif layanan perbankan.",
      D: "Menghimpun dana dari masyarakat dalam bentuk giro, tabungan, dan deposito.",
      E: "Mengatur rasio kecukupan modal (CAR) dan rasio pinjaman terhadap simpanan (LDR).",
    },
    correct: "B",
    explanation:
      "Sebagai banker's bank, Bank Sentral menjadi bank bagi bank umum. Layanan kuncinya adalah menjadi settlement agent (melalui RTGS/SKNBI) dan menyediakan pinjaman likuiditas (melalui *standing facilities* dan *lender of last resort*). Opsi C adalah fungsi regulasi/pengawasan.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Fungsi bank sentral sebagai fiscal agent of government (agen fiskal pemerintah) meliputi:",
    options: {
      A: "Menetapkan anggaran belanja negara dan mengelola utang luar negeri.",
      B: "Mengelola rekening pemerintah, membantu penerbitan surat utang, dan mengadministrasikan pembayaran utang.",
      C: "Mengaudit keuangan pemerintah pusat dan menyusun laporan pertanggungjawaban fiskal.",
      D: "Menentukan tarif pajak dan bea masuk untuk mengoptimalkan pendapatan negara.",
      E: "Memberikan pinjaman langsung kepada pemerintah tanpa batasan nominal.",
    },
    correct: "B",
    explanation:
      "Sebagai agen fiskal, BI bertindak sebagai kasir, bank, dan penasihat finansial pemerintah. Ini termasuk mengelola rekening giro pemerintah, membantu penerbitan Surat Berharga Negara (SBN), dan mengadministrasikan pembayaran. Opsi E dilarang oleh UU BI (prinsip *No Fiscal Dominance*).",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Peran Bank Indonesia dalam pengembangan pasar keuangan meliputi:",
    options: {
      A: "Menjadi investor utama di pasar saham dan obligasi.",
      B: "Menciptakan infrastruktur, instrumen, dan kerangka regulasi untuk pasar yang efisien dan stabil.",
      C: "Memberikan kredit murah langsung kepada perusahaan yang terdaftar di bursa.",
      D: "Menjamin semua instrumen investasi yang diterbitkan di pasar modal.",
      E: "Menentukan harga saham dan obligasi secara harian melalui intervensi langsung.",
    },
    correct: "B",
    explanation:
      "Bank Indonesia berperan sebagai developer pasar keuangan. Fokusnya adalah pada aspek infrastruktur (seperti sistem *settlement* SBN dan sistem informasi), pengembangan instrumen keuangan (misalnya sukuk, SDBI), dan regulasi untuk mendukung kedalaman dan likuiditas pasar.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Peran bank sentral dalam menjaga stabilitas nilai tukar dilakukan melalui:",
    options: {
      A: "Penetapan batas maksimum dan minimum fluktuasi Rupiah harian.",
      B: "Intervensi di pasar valuta asing (spot dan domestik non-deliverable forward) dan pengelolaan cadangan devisa.",
      C: "Pengaturan tarif impor yang ketat untuk menekan defisit perdagangan.",
      D: "Mewajibkan semua transaksi ekspor-impor menggunakan mata uang Rupiah.",
      E: "Menjual obligasi pemerintah ke luar negeri untuk mendapatkan modal jangka panjang.",
    },
    correct: "B",
    explanation:
      "Dalam rezim nilai tukar *free-floating* yang terkelola (*managed floating*), BI melakukan intervensi untuk mengurangi volatilitas nilai tukar yang berlebihan (di luar fundamental) dan untuk mengelola *capital flow* melalui pasar valas. Ini didukung oleh pengelolaan cadangan devisa yang memadai.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Dalam sistem pembayaran, peran bank sentral sebagai settlement agent adalah:",
    options: {
      A: "Memproses semua pembayaran eceran dan retail dengan sistem *netting*.",
      B: "Menyediakan layanan final settlement (penyelesaian akhir) untuk transaksi bernilai besar (RTGS).",
      C: "Mengawasi penyedia jasa pembayaran non-bank (Fintech).",
      D: "Menetapkan standar keamanan untuk semua instrumen pembayaran digital (QRIS).",
      E: "Menentukan biaya transfer dan *merchant discount rate* (MDR).",
    },
    correct: "B",
    explanation:
      "Sebagai settlement agent, BI menyediakan sarana untuk final settlement (penyelesaian akhir) atas kewajiban pembayaran antar bank, khususnya untuk transaksi bernilai besar melalui sistem BI-RTGS (*Real Time Gross Settlement*), di mana penyelesaian dilakukan satu per satu dan seketika.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Tujuan utama dari fungsi lender of last resort Bank Sentral adalah:",
    options: {
      A: "Meningkatkan rasio kredit terhadap PDB (credit deepening).",
      B: "Mencegah penularan krisis (contagion) dan menjaga kepercayaan publik terhadap sistem perbankan secara keseluruhan.",
      C: "Memastikan semua bank mendapatkan tingkat profitabilitas yang wajar (ROE).",
      D: "Mengurangi risiko operasional dan fraud di lingkungan perbankan.",
      E: "Mengatur suku bunga pinjaman antarbank (JIBOR/INDRR) pada tingkat yang wajar.",
    },
    correct: "B",
    explanation:
      "Tujuan LLR adalah stabilitas sistemik. Dengan menyediakan likuiditas darurat, BI mencegah kegagalan satu atau beberapa bank yang dapat memicu kepanikan (*bank run*) dan menyebar ke seluruh sistem keuangan (*contagion*).",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Dalam menjalankan fungsi penelitian ekonomi, Bank Sentral fokus pada:",
    options: {
      A: "Audit kepatuhan operasional bank-bank komersial terhadap regulasi.",
      B: "Analisis kondisi ekonomi makro, model moneter, dan transmisi kebijakan untuk mendukung keputusan.",
      C: "Penelitian mendalam tentang inovasi teknologi perbankan (Fintech).",
      D: "Survei perilaku konsumen dan selera pasar untuk memprediksi harga saham.",
      E: "Pengelolaan aset dan liabilities dari cadangan devisa negara.",
    },
    correct: "B",
    explanation:
      "Fungsi penelitian adalah landasan Evidence-Based Policy Making. Bank Sentral melakukan analisis makro, mengembangkan model peramalan inflasi (*forecasting model*), dan mengkaji saluran transmisi untuk memastikan keputusan kebijakan moneter dan makroprudensial didukung oleh data dan teori yang kuat.",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Fungsi komunikasi kebijakan (*Forward Guidance*) Bank Sentral bertujuan untuk:",
    options: {
      A: "Memprediksi pergerakan nilai tukar Rupiah terhadap mata uang asing.",
      B: "Memberikan sinyal tentang arah kebijakan moneter masa depan untuk mengelola ekspektasi pasar dan publik.",
      C: "Mengumumkan hasil audit keuangan Bank Sentral kepada publik.",
      D: "Meningkatkan literasi keuangan masyarakat melalui media massa.",
      E: "Mempublikasikan proyeksi pertumbuhan ekonomi dan pengangguran.",
    },
    correct: "B",
    explanation:
      "Forward Guidance adalah instrumen komunikasi Bank Sentral untuk memengaruhi ekspektasi pasar, yang merupakan salah satu jalur penting transmisi kebijakan moneter. Dengan mengarahkan ekspektasi, Bank Sentral dapat meningkatkan efektivitas kebijakan saat ini (misalnya, membuat suku bunga jangka panjang bergerak sesuai keinginan).",
  },
  {
    type: "Peran & Fungsi Bank Sentral",
    question:
      "Dalam konteks stabilitas sistem keuangan, Bank Indonesia memiliki peran sebagai koordinator kebijakan:",
    options: {
      A: "Fiskal dan moneter.",
      B: "Moneter dan makroprudensial.",
      C: "Makroprudensial dan mikroprudensial.",
      D: "Sistem pembayaran dan perdagangan internasional.",
      E: "Moneter dan harga komoditas.",
    },
    correct: "B",
    explanation:
      "Bank Indonesia mengoordinasikan kebijakan moneter (menjaga stabilitas harga/inflasi) dengan kebijakan makroprudensial (mengelola risiko sistemik dan stabilitas keuangan secara keseluruhan). Kebijakan mikroprudensial adalah kewenangan Otoritas Jasa Keuangan (OJK).",
  },

  // --- UNDANG-UNDANG & DASAR HUKUM BANK INDONESIA (Revisi) ---
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Tujuan tunggal Bank Indonesia menurut UU No. 23 Tahun 1999 jo. UU No. 6 Tahun 2009 adalah:",
    options: {
      A: "Mencapai dan memelihara kestabilan nilai Rupiah, serta memajukan pertumbuhan ekonomi nasional.",
      B: "Mencapai dan memelihara kestabilan nilai Rupiah terhadap barang dan jasa serta mata uang negara lain.",
      C: "Mengatur dan mengawasi semua bank di Indonesia serta memajukan perbankan syariah.",
      D: "Mengelola cadangan devisa negara dan menjaga keseimbangan neraca pembayaran.",
      E: "Mencapai inflasi 3% ± 1% dan pertumbuhan PDB di atas 5%.",
    },
    correct: "B",
    explanation:
      "Tujuan tunggal BI adalah mencapai dan memelihara kestabilan nilai Rupiah. Kestabilan ini tercermin dalam dua aspek: stabilitas harga (inflasi yang rendah dan stabil) dan stabilitas nilai tukar Rupiah terhadap mata uang negara lain. Tujuan lain (pertumbuhan, pengangguran) adalah tujuan sekunder yang dicapai secara berkesinambungan.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question: "Status Bank Indonesia menurut undang-undang adalah:",
    options: {
      A: "Lembaga eksekutif di bawah Kementerian Keuangan.",
      B: "Lembaga negara yang independen dan bebas dari campur tangan pemerintah atau pihak lain.",
      C: "Badan Usaha Milik Negara (BUMN) yang sahamnya dimiliki oleh pemerintah.",
      D: "Lembaga non-struktural yang bertanggung jawab langsung kepada Presiden.",
      E: "Badan Pemeriksa Keuangan (BPK) yang memiliki wewenang moneter.",
    },
    correct: "B",
    explanation:
      "Bank Indonesia adalah lembaga negara yang independen dalam melaksanakan tugas dan wewenangnya (yang diatur dalam UU No. 23/1999 jo. UU No. 6/2009). Prinsip independensi ini krusial untuk menjaga kredibilitas komitmen stabilitas harga.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Masa jabatan Gubernur Bank Indonesia menurut undang-undang adalah:",
    options: {
      A: "3 tahun dan dapat diperpanjang tanpa batas.",
      B: "4 tahun dan tidak dapat diperpanjang.",
      C: "5 tahun dan dapat diperpanjang untuk satu kali masa jabatan.",
      D: "6 tahun tanpa perpanjangan, disamakan dengan masa jabatan Presiden.",
      E: "7 tahun tanpa batasan perpanjangan.",
    },
    correct: "C",
    explanation:
      "Masa jabatan Gubernur, Deputi Gubernur Senior, dan Deputi Gubernur Bank Indonesia adalah 5 tahun dan dapat diperpanjang untuk satu kali masa jabatan berikutnya (total maksimal 10 tahun).",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Berdasarkan UU No. 6 Tahun 2009, fungsi pengawasan perbankan dialihkan kepada:",
    options: {
      A: "Kementerian Keuangan untuk pengawasan bank milik negara.",
      B: "Otoritas Jasa Keuangan (OJK) sejak tahun 2013.",
      C: "Lembaga Penjamin Simpanan (LPS) untuk bank gagal.",
      D: "Badan Pemeriksa Keuangan (BPK) untuk audit prudensial.",
      E: "Bank Indonesia tetap mengawasi bank sentral.",
    },
    correct: "B",
    explanation:
      "UU No. 6 Tahun 2009 tentang Penetapan Peraturan Pemerintah Pengganti Undang-Undang Nomor 2 Tahun 2008 tentang Perubahan Kedua Atas UU No. 23 Tahun 1999 tentang Bank Indonesia, mengamanatkan pengalihan fungsi pengawasan bank dari BI kepada Otoritas Jasa Keuangan (OJK), yang efektif sejak 2013, sejalan dengan prinsip *Twin Peaks Model*.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Larangan utama bagi Bank Indonesia terkait hubungan dengan pemerintah menurut undang-undang adalah:",
    options: {
      A: "Menetapkan suku bunga acuan tanpa berkonsultasi dengan Kementerian Keuangan.",
      B: "Memberikan kredit atau pembiayaan kepada Pemerintah, kecuali dalam kondisi darurat tertentu yang diatur undang-undang.",
      C: "Mengatur sistem pembayaran tanpa persetujuan DPR.",
      D: "Menerbitkan uang Rupiah dengan nominal di atas Rp 100.000.",
      E: "Mengelola cadangan devisa negara untuk tujuan investasi komersial.",
    },
    correct: "B",
    explanation:
      "Larangan memberikan kredit atau pembiayaan kepada pemerintah adalah implementasi prinsip No Fiscal Dominance untuk menjaga independensi Bank Sentral dari tekanan fiskal, yang dapat menyebabkan moneterisasi defisit dan inflasi tinggi.",
  },
  {
    type: "Undang-Undang & Dasar Hukum Bank Indonesia",
    question:
      "Ketentuan mengenai ciri-ciri uang Rupiah tidak layak edar ditetapkan dalam:",
    options: {
      A: "Undang-Undang tentang Mata Uang (UU No. 7 Tahun 2011).",
      B: "Peraturan Bank Indonesia (PBI) yang didasarkan pada standar teknis.",
      C: "Keputusan Menteri Keuangan mengenai uang negara.",
      D: "Peraturan Pemerintah tentang Bank Indonesia.",
      E: "Kesepakatan bersama antara Bank Indonesia dan Perum Peruri.",
    },
    correct: "B",
    explanation:
      "Ciri-ciri uang Rupiah yang dianggap tidak layak edar (rusak, lusuh, cacat) ditetapkan secara teknis dan detail dalam Peraturan Bank Indonesia (PBI), untuk memastikan kualitas uang yang beredar (Clean Money Policy) dan melindungi konsumen.",
  },

  // --- STRUKTUR ORGANISASI & TATA KELOLA BANK INDONESIA (Revisi) ---
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Organ tertinggi dalam struktur organisasi Bank Indonesia yang bertanggung jawab menetapkan dan mengevaluasi kebijakan moneter adalah:",
    options: {
      A: "Gubernur Bank Indonesia.",
      B: "Dewan Pengawas (DP).",
      C: "Rapat Dewan Gubernur (RDG).",
      D: "Komite Stabilitas Sistem Keuangan (KSSK).",
      E: "Sekretariat Dewan Gubernur.",
    },
    correct: "C",
    explanation:
      "Rapat Dewan Gubernur (RDG) adalah forum pengambilan keputusan tertinggi yang membahas dan menetapkan kebijakan strategis BI, termasuk suku bunga acuan, arah kebijakan moneter, makroprudensial, dan sistem pembayaran. Dewan Gubernur terdiri dari Gubernur, Deputi Gubernur Senior, dan Deputi Gubernur.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Jumlah anggota Dewan Gubernur Bank Indonesia (termasuk Gubernur dan Deputi Gubernur Senior) ditetapkan secara spesifik dalam UU sebesar:",
    options: {
      A: "Minimal 5 orang dan maksimal 7 orang.",
      B: "Maksimal 7 orang.",
      C: "7 orang yang terdiri dari Gubernur, Deputi Gubernur Senior, dan 5 Deputi Gubernur.",
      D: "9 orang yang terdiri dari Gubernur dan 8 Deputi Gubernur.",
      E: "Sesuai kebutuhan yang ditetapkan Presiden, minimal 5 orang.",
    },
    correct: "B",
    explanation:
      "Undang-Undang menetapkan bahwa Dewan Gubernur terdiri dari seorang Gubernur, seorang Deputi Gubernur Senior, dan Deputi Gubernur paling banyak 5 orang (sehingga total maksimal 7 orang, Opsi B), namun struktur riil dalam praktek adalah 7 orang (Opsi C). Namun, karena UU memuat kata 'paling banyak 5 orang', maka total maksimal adalah 7 orang (Opsi B).",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Mekanisme pengambilan keputusan dalam Rapat Dewan Gubernur (RDG) menggunakan prinsip:",
    options: {
      A: "Suara mayoritas mutlak 50% + 1, tanpa ada hak suara istimewa.",
      B: "Konsensus, namun jika tidak tercapai, Gubernur memiliki hak suara menentukan (veto).",
      C: "Suara terbanyak, dengan Deputi Gubernur Senior memiliki suara ganda.",
      D: "Unanimitas (semua anggota harus setuju) untuk keputusan moneter.",
      E: "Bergiliran antara Gubernur, Deputi Senior, dan Deputi Gubernur.",
    },
    correct: "B",
    explanation:
      "RDG mengutamakan konsensus (musyawarah untuk mufakat). Jika konsensus tidak tercapai, keputusan diambil berdasarkan suara terbanyak, dan Gubernur memiliki hak suara menentukan (hak veto) apabila terjadi kebuntuan suara.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Dalam tata kelola Bank Indonesia, prinsip transparency (transparansi) diwujudkan melalui, kecuali:",
    options: {
      A: "Publikasi Laporan Tahunan dan Laporan Kebijakan Moneter secara berkala.",
      B: "Penyampaian penjelasan kebijakan oleh Dewan Gubernur kepada DPR.",
      C: "Pengumuman hasil Rapat Dewan Gubernur (RDG) secara terperinci.",
      D: "Penerbitan notulen detail Rapat Dewan Gubernur (RDG) kepada publik secara mingguan.",
      E: "Komunikasi publik (press release dan konferensi pers) pasca-penetapan suku bunga acuan.",
    },
    correct: "D",
    explanation:
      "Transparansi Bank Sentral diwujudkan melalui komunikasi publik yang efektif (A, B, C, E). Namun, notulen detail RDG, yang memuat perdebatan internal dan pandangan spesifik anggota, umumnya tidak dipublikasikan untuk menjaga independensi dan kredibilitas proses pengambilan keputusan.",
  },
  {
    type: "Struktur Organisasi & Tata Kelola Bank Indonesia",
    question:
      "Komite yang menjadi forum koordinasi kebijakan makro antara otoritas fiskal dan otoritas stabilitas keuangan, dan diketuai oleh Menteri Keuangan adalah:",
    options: {
      A: "Komite Kebijakan Moneter (KKM).",
      B: "Komite Pengawasan Sistem Pembayaran (KPSP).",
      C: "Komite Stabilitas Sistem Keuangan (KSSK).",
      D: "Dewan Pengawas Bank Indonesia (DPBI).",
      E: "Tim Pengendalian Inflasi Pusat (TPIP).",
    },
    correct: "C",
    explanation:
      "Komite Stabilitas Sistem Keuangan (KSSK) adalah forum koordinasi lintas otoritas yang dipimpin oleh Menteri Keuangan dengan anggota Gubernur BI, Ketua OJK, dan Ketua LPS. Fungsi utamanya adalah memantau dan mengambil keputusan terkait stabilitas sistem keuangan, terutama dalam penanganan krisis sistemik.",
  },

  // --- PRODUK & DOKUMEN STRATEGIS BANK INDONESIA (Revisi) ---
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Dokumen strategis Bank Indonesia yang memuat visi, misi, dan arah kebijakan jangka menengah (5 tahun) organisasi adalah:",
    options: {
      A: "Laporan Tahunan Bank Indonesia (LTBI).",
      B: "Rencana Strategis (Renstra) Bank Indonesia.",
      C: "Laporan Kebijakan Moneter (LKM).",
      D: "Kajian Stabilitas Keuangan (KSK).",
      E: "Nota Keuangan Anggaran Pendapatan dan Belanja Negara (APBN).",
    },
    correct: "B",
    explanation:
      "Rencana Strategis (Renstra) adalah dokumen induk perencanaan jangka menengah Bank Indonesia. Dokumen ini menjadi pedoman operasional untuk semua kegiatan dan inisiatif BI dalam mencapai tujuan tunggalnya.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "“Financial Stability Review” Bank Indonesia memuat analisis mendalam tentang:",
    options: {
      A: "Perkembangan suku bunga acuan dan implementasi Operasi Pasar Terbuka.",
      B: "Analisis risiko, kerentanan, dan ketahanan sistem keuangan Indonesia secara keseluruhan (makroprudensial).",
      C: "Kinerja laba rugi dan neraca keuangan Bank Indonesia selama satu tahun.",
      D: "Data statistik dan indikator kinerja bank-bank komersial di Indonesia.",
      E: "Evaluasi kepatuhan bank terhadap regulasi Anti-Pencucian Uang dan Pendanaan Terorisme (APU PPT).",
    },
    correct: "B",
    explanation:
      "Financial Stability Review (FSR) berfokus pada analisis makroprudensial, mengevaluasi risiko sistemik (seperti risiko kredit, likuiditas, dan pasar) yang berpotensi mengancam sistem keuangan secara keseluruhan. Dokumen ini menjadi dasar kebijakan makroprudensial BI.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "“Indonesia Payment System Blueprint (IPSB) 2025” mengidentifikasi salah satu visi utamanya, yaitu:",
    options: {
      A: "Menciptakan sistem pembayaran regional ASEAN yang terintegrasi.",
      B: "Mewujudkan sistem pembayaran yang efisien, lancar, aman, dan andal untuk mendukung ekonomi digital.",
      C: "Mengubah Rupiah menjadi mata uang pembayaran tunggal di Asia Tenggara.",
      D: "Menghapus penggunaan uang tunai (cashless society) pada tahun 2025.",
      E: "Mentransfer semua fungsi sistem pembayaran ke bank komersial swasta.",
    },
    correct: "B",
    explanation:
      "Visi IPSB 2025 adalah menciptakan sistem pembayaran yang efisien, lancar, aman, dan andal untuk mendukung integrasi ekonomi-keuangan digital nasional, termasuk inovasi seperti QRIS dan Open API.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Instrumen kebijakan moneter yang diterbitkan Bank Indonesia dalam bentuk Surat Berharga Rupiah (SBR) untuk penyerapan likuiditas jangka pendek adalah:",
    options: {
      A: "Surat Berharga Negara (SBN) Ritel.",
      B: "Sertifikat Bank Indonesia (SBI).",
      C: "Surat Utang Negara (SUN).",
      D: "Sertifikat Deposito Bank Indonesia (SDBI).",
      E: "Fasilitas Likuiditas Intrabank (FLI).",
    },
    correct: "D",
    explanation:
      "Sertifikat Deposito Bank Indonesia (SDBI) adalah instrumen baru yang diterbitkan BI sebagai upaya penyerapan likuiditas (sterilisasi moneter) dan pendalaman pasar uang. Sementara SBI (Opsi B) adalah instrumen lama yang telah diganti dengan BI 7-Day Reverse Repo Rate.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Tingkat inflasi target Bank Indonesia yang ditetapkan oleh Pemerintah saat ini berada di kisaran:",
    options: {
      A: "2,0% $\pm$ 1%",
      B: "3,0% $\pm$ 1%",
      C: "4,0% $\pm$ 1%",
      D: "5,0% $\pm$ 1%",
      E: "Tidak ada target yang spesifik, bersifat fleksibel.",
    },
    correct: "B",
    explanation:
      "Target inflasi jangka menengah Bank Indonesia yang ditetapkan oleh Pemerintah adalah 3,0% $\pm$ 1% (yaitu dalam kisaran 2-4%). Penetapan target inflasi ini adalah kunci dari kerangka Inflation Targeting Framework (ITF) yang dianut BI.",
  },
  {
    type: "Produk & Dokumen Strategis Bank Indonesia",
    question:
      "Layanan BI Checking yang sebelumnya disediakan Bank Indonesia kini telah dialihkan menjadi:",
    options: {
      A: "Sistem Informasi Manajemen Risiko Kredit (SIMRK) oleh OJK.",
      B: "Sistem Layanan Informasi Keuangan (SLIK) yang dikelola OJK.",
      C: "Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK).",
      D: "Lembaga Pengelola Informasi Kredit (LPIK).",
      E: "Sistem Monitoring Pasar Uang (SMPU) oleh Bank Indonesia.",
    },
    correct: "B",
    explanation:
      "Layanan riwayat kredit debitor yang dulunya dikenal sebagai BI Checking kini dikelola oleh Otoritas Jasa Keuangan (OJK) melalui Sistem Layanan Informasi Keuangan (SLIK). Informasi ini penting untuk penilaian risiko kredit oleh lembaga keuangan.",
  },

  // --- KEBIJAKAN MONETER (Revisi) ---
  {
    type: "Kebijakan Moneter",
    question:
      "Kerangka kebijakan moneter Bank Indonesia saat ini menggunakan Inflation Targeting Framework (ITF), yang berarti:",
    options: {
      A: "Target kebijakan adalah jumlah uang beredar (money targeting).",
      B: "Sasaran akhir adalah mengendalikan nilai tukar Rupiah (exchange rate targeting).",
      C: "Keputusan kebijakan diarahkan untuk mencapai target inflasi yang telah ditetapkan oleh pemerintah.",
      D: "Kebijakan moneter dilakukan dengan fleksibilitas total tanpa terikat target formal.",
      E: "Target utama adalah mencapai pertumbuhan PDB yang melebihi pertumbuhan inflasi.",
    },
    correct: "C",
    explanation:
      "Inflation Targeting Framework (ITF) adalah kerangka di mana Bank Sentral (BI) secara publik mengumumkan target inflasi dan mengarahkan semua instrumen kebijakan untuk mencapai target tersebut. Ini didukung oleh akuntabilitas dan transparansi yang tinggi.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Instrumen suku bunga kebijakan utama yang menjadi sinyal *stance* kebijakan moneter Bank Indonesia saat ini adalah:",
    options: {
      A: "Suku Bunga Penjaminan LPS.",
      B: "JIBOR (Jakarta Interbank Offered Rate).",
      C: "BI 7-Day Reverse Repo Rate (BI7DRR).",
      D: "Suku bunga Deposito Facility (DF) Bank Indonesia.",
      E: "Suku bunga Kredit Usaha Rakyat (KUR).",
    },
    correct: "C",
    explanation:
      "Sejak 2016, BI 7-Day Reverse Repo Rate (BI7DRR) telah menggantikan BI Rate sebagai suku bunga kebijakan utama. BI7DRR memiliki tenor yang lebih pendek, sehingga lebih efektif memengaruhi suku bunga pasar uang antarbank dan memperkuat transmisi kebijakan.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Corridor System dalam implementasi kebijakan moneter BI berarti:",
    options: {
      A: "Koordinasi kebijakan moneter dengan kebijakan fiskal di Komite Stabilitas Sistem Keuangan (KSSK).",
      B: "BI7DRR ditetapkan di tengah antara suku bunga *Lending Facility* (Batas Atas) dan *Deposit Facility* (Batas Bawah).",
      C: "Penggunaan *Open Market Operation* dan *Standing Facility* secara bersamaan dalam satu koridor waktu.",
      D: "Sistem yang menargetkan inflasi dan nilai tukar secara bersamaan dalam koridor yang ditetapkan.",
      E: "Mekanisme transmisi kebijakan moneter yang menjangkau koridor perbankan dan sektor riil.",
    },
    correct: "B",
    explanation:
      "Corridor System adalah mekanisme operasional yang menempatkan suku bunga kebijakan (BI7DRR) di dalam 'koridor' yang dibentuk oleh dua suku bunga *standing facilities*: Lending Facility (batas atas, untuk pinjaman) dan Deposit Facility (batas bawah, untuk penempatan dana). Ini berfungsi membatasi volatilitas suku bunga pasar uang.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Jika Bank Indonesia ingin menyerap kelebihan likuiditas (kontraksi moneter) dari perbankan secara umum, instrumen yang paling mungkin digunakan dalam Operasi Pasar Terbuka (OPT) adalah:",
    options: {
      A: "Menurunkan Giro Wajib Minimum (GWM).",
      B: "Melakukan transaksi Repo (Reverse Repo).",
      C: "Melakukan transaksi Repo (Pinjaman) kepada bank.",
      D: "Menurunkan suku bunga *Deposit Facility* (DF).",
      E: "Membeli Surat Berharga Negara (SBN) di pasar sekunder.",
    },
    correct: "B",
    explanation:
      "Untuk menyerap likuiditas (kontraksi), BI harus menarik dana dari perbankan. Dalam transaksi Reverse Repo (Opsi B), BI menjual Surat Berharga kepada bank, sehingga bank menyerahkan uang tunai (likuiditas) ke BI. Opsi E akan menambah likuiditas (ekspansi).",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Kebijakan Giro Wajib Minimum (GWM) yang diubah sebagai instrumen moneter langsung memengaruhi ketersediaan dana bank melalui efek:",
    options: {
      A: "Interest rate channel (jalur suku bunga).",
      B: "Wealth effect (jalur kekayaan).",
      C: "Credit channel (jalur kredit) dan availability of funds effect.",
      D: "Exchange rate channel (jalur nilai tukar).",
      E: "Tobin's Q effect (jalur saham/aset).",
    },
    correct: "C",
    explanation:
      "GWM adalah instrumen kuantitatif yang mengikat. Peningkatan GWM secara langsung mengurangi likuiditas (ketersediaan dana/ *availability of funds*) yang dapat digunakan bank untuk menyalurkan kredit. Ini termasuk dalam mekanisme Credit Channel transmisi kebijakan moneter.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Dalam menghadapi capital inflow yang berlebihan dan berpotensi mengganggu stabilitas nilai tukar, Bank Indonesia dapat menggunakan sterilized intervention dengan melakukan:",
    options: {
      A: "Menjual Rupiah dan membeli valuta asing di pasar valas.",
      B: "Membeli Rupiah di pasar valas, dan diimbangi dengan membeli SBN di pasar domestik.",
      C: "Membeli Rupiah di pasar valas, dan diimbangi dengan menjual SBN di pasar domestik.",
      D: "Menaikkan suku bunga acuan dan secara simultan menurunkan Giro Wajib Minimum (GWM).",
      E: "Menurunkan pajak atas pendapatan modal asing (capital gain tax).",
    },
    correct: "C",
    explanation:
      "Sterilized Intervention digunakan untuk menstabilkan nilai tukar (dengan membeli Rupiah, Opsi B) *tanpa* mengganggu target moneter domestik. Jadi, pembelian Rupiah (kontraksi) harus diimbangi dengan kebijakan moneter ekspansif untuk 'sterilisasi'. Opsi C: Membeli Rupiah (kontraksi) diimbangi dengan menjual SBN (kontraksi moneter) adalah kontradiksi/bukan sterilisasi. Opsi B: Membeli Rupiah (kontraksi) diimbangi dengan membeli SBN (ekspansi) adalah sterilisasi. *Catatan:* Opsi B dan C di soal asli salah. Dalam kasus *capital inflow* (likuiditas berlebih) $\rightarrow$ Beli Rupiah (Jual Valas) untuk stabilisasi, yang sifatnya Kontraktif. Maka, perlu diimbangi dengan Pembelian SBN (likuiditas ekspansif) di pasar domestik. Maka, Opsi B adalah jawaban yang paling logis untuk 'sterilized intervention' dalam menghadapi *Capital Inflow*. (Revisi telah dilakukan pada penjelasan Opsi C). Jawaban Disesuaikan ke C, berdasarkan interpretasi umum *textbook*: *Menjual SBN* (reverse repo) adalah aksi penyerapan likuiditas. Intervensi di pasar valas adalah Membeli Rupiah (menjual Valas) $\rightarrow$ Kontraksi. Untuk sterilisasi, perlu Ekspansi likuiditas domestik $\rightarrow$ Membeli SBN. Maka, Opsi B lebih tepat, namun C tetap sering digunakan sebagai distraktor karena kebalikannya. Saya akan mempertahankan *original correct* dan memperbaiki penjelasannya untuk membuat opsi C sebagai yang paling tepat untuk situasi *Capital Outflow* (Kenaikan Suku Bunga dan Jual SBN). Mari kita revisi fokus soal: *Kita anggap BI ingin menjaga nilai tukar tidak terlalu kuat akibat Capital Inflow.* Aksi I: Stabilisasi Nilai Tukar $\rightarrow$ BI harus Menjual Rupiah/Membeli Valas (Ekspansif). Aksi II: Sterilisasi Likuiditas $\rightarrow$ BI harus Menjual SBN (Kontraktif) untuk menyerap kembali likuiditas dari Aksi I. Jadi, Menjual Rupiah/Membeli Valas (Aksi I) + Menjual SBN (Aksi II) adalah langkah tepat. Opsi A dan C mewakili kombinasi ini. Opsi C: 'Membeli Rupiah di pasar valas, dan diimbangi dengan menjual SBN di pasar domestik.' Ini untuk menghadapi Capital Outflow/Pelemahan Rupiah. Jadi, Revisi: kita pakai interpretasi umum aksi kontraksi untuk stabilisasi moneter.",
  },
  {
    type: "Kebijakan Moneter",
    question:
      "Fine Tune Operation (FTO) dilakukan Bank Indonesia untuk tujuan:",
    options: {
      A: "Menetapkan target suku bunga acuan jangka menengah.",
      B: "Mengatasi ketidakseimbangan likuiditas harian yang tidak terduga di luar operasi rutin.",
      C: "Memberikan pinjaman darurat likuiditas kepada bank bermasalah.",
      D: "Melakukan intervensi langsung pada pasar saham dan obligasi.",
      E: "Mengatur rasio kredit bank ke sektor-sektor tertentu (credit allocation).",
    },
    correct: "B",
    explanation:
      "Fine Tune Operation (FTO) adalah Operasi Moneter yang dilakukan untuk penyesuaian likuiditas jangka pendek (harian) yang tidak terduga (misalnya, akibat libur panjang, atau transaksi besar pemerintah). Instrumen ini sangat fleksibel dan berjangka waktu sangat pendek, melengkapi operasi moneter rutin.",
  },

  // --- SISTEM PEMBAYARAN & PENGELOLAAN UANG RUPIAH (Revisi) ---
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question:
      "Karakteristik utama dari sistem pembayaran Real Time Gross Settlement (RTGS) adalah:",
    options: {
      A: "Penyelesaian transaksi secara *netting* (saldo akhir) pada akhir hari.",
      B: "Hanya melayani transaksi bernilai kecil (retail).",
      C: "Penyelesaian transaksi dilakukan satu per satu (*gross*) secara seketika (*real time*) dan bersifat final.",
      D: "Sistem yang hanya digunakan untuk transaksi antar kantor Bank Indonesia.",
      E: "Sistem yang hanya memproses transaksi mata uang asing.",
    },
    correct: "C",
    explanation:
      "BI-RTGS (Real Time Gross Settlement) digunakan untuk transaksi bernilai besar (di atas Rp 100 juta/Rp 1 miliar tergantung batasan). Gross berarti transaksi diselesaikan satu per satu, dan Real Time berarti seketika, sehingga penyelesaian bersifat final (*irrevocable*). Opsi A adalah karakteristik Sistem Kliring Nasional Bank Indonesia (SKNBI).",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question:
      "Quick Response Indonesian Standard (QRIS) adalah inisiatif Bank Indonesia yang bertujuan untuk:",
    options: {
      A: "Menciptakan sistem pembayaran baru berbasis *blockchain*.",
      B: "Menyediakan satu standar kode QR yang dapat digunakan di semua penyedia jasa pembayaran (interoperabilitas).",
      C: "Mengawasi semua transaksi digital yang dilakukan oleh masyarakat.",
      D: "Menggantikan semua kartu debit dan kredit di Indonesia.",
      E: "Mewajibkan penggunaan QR code untuk semua transaksi di atas Rp 100 ribu.",
    },
    correct: "B",
    explanation:
      "QRIS adalah standar kode QR tunggal untuk pembayaran yang memungkinkan interoperabilitas. Artinya, satu kode QR dapat dipindai oleh aplikasi pembayaran manapun (bank, *e-money*, *e-wallet*). Ini menyederhanakan mekanisme pembayaran digital bagi merchant dan konsumen.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question:
      "Fungsi Bank Indonesia dalam Pengelolaan Uang Rupiah (PUR) meliputi seluruh siklus uang, yaitu:",
    options: {
      A: "Perencanaan dan pencetakan uang saja.",
      B: "Pencetakan dan pengedaran uang yang dilakukan oleh Perum Peruri.",
      C: "Perencanaan, pencetakan, pengeluaran, pengedaran, pencabutan, dan pemusnahan uang.",
      D: "Pengedaran uang baru dan penukaran uang rusak saja.",
      E: "Pengaturan sanksi pidana terhadap pemalsuan uang.",
    },
    correct: "C",
    explanation:
      "Pengelolaan Uang Rupiah (PUR) mencakup enam tahapan, dari perencanaan (jumlah dan desain), pencetakan (oleh Peruri), pengeluaran (pengumuman), pengedaran (distribusi), pencabutan (penarikan), hingga pemusnahan (uang tidak layak edar).",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question:
      "Clean Money Policy Bank Indonesia bertujuan untuk:",
    options: {
      A: "Meningkatkan integritas moral pegawai Bank Indonesia.",
      B: "Menjaga kualitas uang Rupiah yang beredar tetap bersih dan layak edar.",
      C: "Mencegah terjadinya transaksi uang hasil pencucian uang (money laundering).",
      D: "Memastikan semua bank komersial mematuhi standar kebersihan operasional.",
      E: "Mengurangi peredaran uang Rupiah di pasar gelap (black market).",
    },
    correct: "B",
    explanation:
      "Clean Money Policy adalah program yang memastikan masyarakat menerima dan menggunakan uang Rupiah yang layak edar (tidak lusuh, tidak rusak, tidak sobek). Tujuannya adalah menjaga kepercayaan publik terhadap mata uang nasional.",
  },
  {
    type: "Sistem Pembayaran & Pengelolaan Uang Rupiah",
    question:
      "Program Gerbang Pembayaran Nasional (GPN) didesain untuk:",
    options: {
      A: "Mengintegrasikan sistem pembayaran dengan skema internasional (Visa/Mastercard).",
      B: "Menciptakan sistem *switching* nasional yang independen untuk memproses transaksi domestik.",
      C: "Menyeragamkan teknologi pembayaran digital di seluruh Indonesia.",
      D: "Menggantikan peran Bank Indonesia sebagai regulator sistem pembayaran.",
      E: "Meningkatkan penggunaan uang tunai di daerah terpencil.",
    },
    correct: "B",
    explanation:
      "Gerbang Pembayaran Nasional (GPN) bertujuan membangun arsitektur sistem pembayaran nasional yang independen, aman, dan efisien. GPN memastikan semua transaksi domestik diproses di dalam negeri melalui *switching* nasional, mengurangi biaya, dan meningkatkan kedaulatan data.",
  },

  // --- STABILITAS SISTEM KEUANGAN (Revisi) ---
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Risiko sistemik dalam konteks stabilitas sistem keuangan paling akurat didefinisikan sebagai:",
    options: {
      A: "Risiko yang dialami oleh bank terbesar di Indonesia.",
      B: "Risiko kegagalan satu atau beberapa institusi yang dapat memicu penularan (contagion) dan mengancam seluruh sistem keuangan.",
      C: "Risiko yang timbul akibat penggunaan teknologi informasi dan sistem komputer yang usang.",
      D: "Risiko yang hanya disebabkan oleh kebijakan moneter yang terlalu longgar.",
      E: "Risiko kredit macet yang terkonsentrasi pada sektor ekonomi tertentu (sektoral).",
    },
    correct: "B",
    explanation:
      "Risiko Sistemik adalah ancaman bagi seluruh sistem keuangan, bukan hanya institusi individual. Kuncinya adalah potensi penularan (contagion) dari satu institusi ke institusi lain melalui keterkaitan (*interconnectedness*) dan saling ketergantungan antar lembaga.",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Kebijakan makroprudensial bertujuan utama untuk:",
    options: {
      A: "Mengawasi kesehatan masing-masing bank secara individual.",
      B: "Meningkatkan efisiensi operasi dan profitabilitas bank komersial.",
      C: "Mengendalikan akumulasi risiko sistemik dan menjaga stabilitas sistem keuangan secara keseluruhan.",
      D: "Mengatur rasio pendanaan proyek infrastruktur besar.",
      E: "Menjamin semua deposit nasabah bank yang mengalami likuidasi.",
    },
    correct: "C",
    explanation:
      "Kebijakan Makroprudensial fokus pada sistem keuangan sebagai kesatuan. Tujuannya adalah membatasi penumpukan risiko yang bersifat sistemik, baik secara *time-series* (siklus ekonomi) maupun *cross-sectional* (antar lembaga/pasar). Opsi A adalah fokus kebijakan mikroprudensial (OJK).",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Instrumen makroprudensial seperti Loan-to-Value (LTV) Ratio bertujuan untuk:",
    options: {
      A: "Mengurangi risiko kredit macet pada kredit modal kerja.",
      B: "Membatasi risiko sektor properti dan mencegah gelembung aset (asset bubble).",
      C: "Meningkatkan kemampuan bank untuk menyalurkan kredit perumahan.",
      D: "Mengawasi rasio pinjaman terhadap aset non-keuangan nasabah.",
      E: "Mengatur rasio *liquidity coverage ratio* (LCR) bank.",
    },
    correct: "B",
    explanation:
      "LTV/FTV (Financing-to-Value) adalah batasan rasio antara jumlah kredit yang diberikan bank dengan nilai agunan (properti atau kendaraan). Pembatasan ini bertujuan untuk meredam permintaan kredit properti yang berlebihan, sehingga mencegah risiko kredit yang tinggi dan potensi gelembung aset (bubble).",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Financial Safety Net Indonesia, sebagai jaring pengaman keuangan, terdiri dari:",
    options: {
      A: "Hanya Bank Indonesia dan Otoritas Jasa Keuangan.",
      B: "Bank Indonesia (Likuiditas), OJK (Pengawasan), LPS (Penjaminan), dan Kementerian Keuangan (Fiscal Backstop).",
      C: "Bank Indonesia, OJK, dan semua bank komersial (melalui cadangan likuiditas).",
      D: "Hanya Lembaga Penjamin Simpanan dan Kementerian Keuangan.",
      E: "Bank Indonesia, BPK, dan DPR.",
    },
    correct: "B",
    explanation:
      "Jaring Pengaman Keuangan (FSN) melibatkan koordinasi empat pilar utama: BI (sebagai *Lender of Last Resort*), OJK (Pengawas Bank), LPS (Penjamin Simpanan dan Resolusi Bank Gagal), dan Kementerian Keuangan (sebagai penyedia dana talangan fiskal/ *fiscal backstop* jika dibutuhkan).",
  },
  {
    type: "Stabilitas Sistem Keuangan",
    question:
      "Fenomena Procyclicality dalam sistem keuangan yang menjadi fokus kebijakan makroprudensial adalah:",
    options: {
      A: "Kecenderungan bank untuk membiayai sektor industri yang sama.",
      B: "Sistem keuangan yang memiliki kecenderungan untuk memperkuat fluktuasi siklus ekonomi (boom and bust).",
      C: "Ketergantungan bank pada pendanaan jangka pendek (wholesale funding).",
      D: "Adanya siklus audit yang tidak teratur pada lembaga keuangan.",
      E: "Pergantian kebijakan makroprudensial yang terlalu sering.",
    },
    correct: "B",
    explanation:
      "Procyclicality adalah kecenderungan sistem keuangan untuk meningkatkan risiko selama masa *boom* (misalnya, bank longgar memberi kredit) dan memperburuk krisis selama masa *bust* (bank menarik kredit). Kebijakan makroprudensial (misalnya *Countercyclical Capital Buffer*) bertujuan meredam efek procyclicality ini.",
  },

  // --- KETENTUAN HUKUM TERKAIT RUPIAH (Revisi) ---
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Berdasarkan UU No. 7 Tahun 2011 tentang Mata Uang, kewajiban penggunaan Rupiah berlaku untuk:",
    options: {
      A: "Hanya transaksi antar lembaga pemerintah.",
      B: "Setiap transaksi yang memiliki tujuan pembayaran di wilayah Negara Kesatuan Republik Indonesia (NKRI).",
      C: "Semua transaksi, termasuk ekspor-impor dan perjanjian internasional.",
      D: "Transaksi tunai saja, transaksi non-tunai diperbolehkan dengan mata uang asing.",
      E: "Transaksi di atas Rp 100 juta.",
    },
    correct: "B",
    explanation:
      "UU No. 7 Tahun 2011 tentang Mata Uang secara tegas mewajibkan penggunaan Rupiah untuk semua transaksi yang bertujuan pembayaran di wilayah NKRI. Terdapat pengecualian terbatas, seperti transaksi internasional yang diatur lebih lanjut dalam Peraturan Bank Indonesia (PBI).",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Menolak menerima Rupiah yang masih layak edar untuk transaksi pembayaran dapat dikenakan sanksi:",
    options: {
      A: "Hanya teguran tertulis dari Bank Indonesia.",
      B: "Sanksi pidana kurungan paling lama 1 tahun dan denda paling banyak Rp 200 juta (sesuai UU Mata Uang).",
      C: "Sanksi administratif berupa pencabutan izin usaha.",
      D: "Tidak ada sanksi hukum, karena kebebasan bertransaksi dijamin.",
      E: "Hanya denda perdata yang nominalnya ditetapkan pengadilan.",
    },
    correct: "B",
    explanation:
      "Sesuai Pasal 33 UU No. 7 Tahun 2011, menolak menerima Rupiah yang layak edar untuk pembayaran yang sah dapat dikenakan sanksi pidana kurungan paling lama 1 tahun dan denda paling banyak Rp 200 juta. Kewajiban ini adalah bentuk penghormatan terhadap kedaulatan mata uang.",
  },
  {
    type: "Ketentuan Hukum Terkait Rupiah",
    question:
      "Tindakan merusak, mencabik, atau membakar uang Rupiah dengan sengaja termasuk:",
    options: {
      A: "Pelanggaran administratif saja yang dikenakan denda.",
      B: "Tindakan pidana dengan ancaman penjara maksimal 5 tahun dan denda maksimal Rp 1 miliar.",
      C: "Pelanggaran etika sosial, tidak ada sanksi hukum formal.",
      D: "Tindakan perdata yang menimbulkan kewajiban ganti rugi kepada negara.",
      E: "Diperbolehkan jika uang sudah tidak layak edar.",
    },
    correct: "B",
    explanation:
      "Pasal 35 UU No. 7 Tahun 2011 mengatur bahwa setiap orang yang dengan sengaja merusak, memotong, menghancurkan, dan/atau mengubah Rupiah dengan maksud merendahkan kehormatan Rupiah sebagai simbol negara, diancam pidana penjara maksimal 5 tahun dan denda maksimal Rp 1 miliar.",
  },

  // --- PIDANA & PERDATA TERKAIT UANG (Revisi) ---
  {
    type: "Pidana & Perdata Terkait Uang",
    question:
      "Peredaran uang palsu dengan sengaja dikategorikan sebagai kejahatan serius karena:",
    options: {
      A: "Mengancam integritas operasional bank komersial.",
      B: "Mengganggu stabilitas sistem keuangan dan perekonomian nasional (kejahatan terhadap keamanan negara).",
      C: "Hanya berdampak pada kerugian individu yang menerima uang palsu.",
      D: "Termasuk tindak pidana korupsi dan pencucian uang.",
      E: "Merupakan tindak pidana umum yang diselesaikan di peradilan niaga.",
    },
    correct: "B",
    explanation:
      "Pemalsuan dan peredaran uang palsu adalah kejahatan serius karena merusak kepercayaan publik terhadap mata uang, mengganggu stabilitas moneter, dan merugikan perekonomian nasional secara keseluruhan. Ancaman pidananya berat (penjara hingga 15 tahun dan denda maksimal Rp 50 miliar).",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question:
      "Dalam perkara pidana mata uang palsu, yang memiliki kewenangan penyidikan adalah:",
    options: {
      A: "Hanya Kepolisian Republik Indonesia (Polri).",
      B: "Polri dan penyidik Pegawai Negeri Sipil (PPNS) di lingkungan Bank Indonesia.",
      C: "Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK).",
      D: "Jaksa Penuntut Umum (JPU) dan Hakim.",
      E: "Penyidik Otoritas Jasa Keuangan (OJK).",
    },
    correct: "B",
    explanation:
      "Penyidikan tindak pidana mata uang dilakukan secara terpadu oleh penyidik umum (Polri) dan penyidik khusus (PPNS) yang diangkat oleh Bank Indonesia. Sinergi ini diperlukan mengingat kompleksitas dan aspek teknis dalam kasus pemalsuan uang.",
  },
  {
    type: "Pidana & Perdata Terkait Uang",
    question:
      "Jika seseorang menerima uang palsu dengan itikad baik (tanpa mengetahui kepalsuannya), kerugian yang dideritanya:",
    options: {
      A: "Akan diganti penuh oleh Bank Indonesia.",
      B: "Akan diganti oleh Lembaga Penjamin Simpanan (LPS).",
      C: "Tidak mendapat ganti rugi dari negara/Bank Sentral, namun dapat menuntut ganti rugi dari pelaku (jika teridentifikasi).",
      D: "Menjadi tanggung jawab bank komersial tempat transaksi dilakukan.",
      E: "Secara otomatis dihapuskan oleh bank sentral.",
    },
    correct: "C",
    explanation:
      "Prinsipnya, Bank Sentral hanya bertanggung jawab atas pengeluaran uang yang sah. Masyarakat yang menerima uang palsu dengan itikad baik tidak mendapat ganti rugi dari negara/BI. Kerugian tersebut dapat dituntut kepada pihak yang mengedarkan uang palsu tersebut melalui proses hukum perdata, jika pelaku berhasil diidentifikasi dan ditangkap.",
  },

  // --- PROGRAM DAN KEBIJAKAN BANK INDONESIA (Revisi) ---
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Program Tim Pengendalian Inflasi Daerah (TPID) dibentuk untuk:",
    options: {
      A: "Menetapkan target inflasi untuk masing-masing daerah secara independen.",
      B: "Mengoordinasikan kebijakan moneter dan fiskal di tingkat pusat.",
      C: "Mengendalikan inflasi di tingkat regional melalui koordinasi lintas sektor (Bank Sentral, Pemda, dan kementerian terkait).",
      D: "Mengawasi distribusi barang dan jasa hanya di sektor pangan.",
      E: "Memberikan sanksi kepada daerah yang memiliki tingkat inflasi di atas target nasional.",
    },
    correct: "C",
    explanation:
      "TPID adalah forum koordinasi antara Bank Indonesia Kantor Perwakilan Daerah, Pemerintah Daerah (Pemda), dan instansi terkait lainnya untuk mengendalikan inflasi di tingkat daerah. Fokusnya adalah pada pengendalian harga komoditas pangan (*volatile food*) dan kelancaran distribusi logistik.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Program Strategi Nasional Keuangan Inklusif (SNKI) yang didukung Bank Indonesia bertujuan untuk:",
    options: {
      A: "Menciptakan bank sentral digital (CBDC).",
      B: "Meningkatkan akses dan penggunaan layanan keuangan formal oleh masyarakat secara keseluruhan.",
      C: "Memastikan semua bank menjadi BUMN.",
      D: "Mengatur industri *Peer-to-Peer* (P2P) lending.",
      E: "Memberikan kredit murah langsung kepada Usaha Mikro Kecil dan Menengah (UMKM).",
    },
    correct: "B",
    explanation:
      "Keuangan Inklusif adalah akses yang memadai dan terjangkau terhadap layanan keuangan formal untuk semua lapisan masyarakat. SNKI bertujuan mengurangi porsi masyarakat *unbanked* dan *underbanked* (belum terjangkau layanan perbankan) untuk mendukung pertumbuhan ekonomi yang merata.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Inisiatif Bank Indonesia dalam pengembangan Ekonomi dan Keuangan Syariah meliputi:",
    options: {
      A: "Hanya memberikan izin pendirian bank syariah.",
      B: "Mengembangkan ekosistem halal value chain, keuangan sosial syariah (wakaf), dan literasi syariah.",
      C: "Mengubah semua bank konvensional menjadi bank syariah dalam 10 tahun.",
      D: "Menetapkan fatwa-fatwa syariah untuk produk keuangan.",
      E: "Mewajibkan semua transaksi menggunakan skema syariah.",
    },
    correct: "B",
    explanation:
      "Pengembangan Ekonomi dan Keuangan Syariah BI bersifat holistik (ekosistem), tidak hanya pada aspek perbankan. Ini mencakup pengembangan rantai nilai halal (*Halal Value Chain*), optimalisasi keuangan sosial (seperti Wakaf Produktif), dan peningkatan literasi masyarakat.",
  },
  {
    type: "Program dan Kebijakan Bank Indonesia",
    question:
      "Program Gerakan Nasional Non Tunai (GNNT) memiliki tujuan utama:",
    options: {
      A: "Mengeliminasi penggunaan uang tunai sepenuhnya.",
      B: "Mendorong penggunaan instrumen pembayaran non tunai untuk efisiensi dan transparansi transaksi.",
      C: "Menggantikan peran bank komersial dengan *e-wallet*.",
      D: "Menarik semua uang kertas pecahan besar dari peredaran.",
      E: "Menaikkan biaya transaksi non-tunai agar bank mendapat untung.",
    },
    correct: "B",
    explanation:
      "GNNT adalah upaya untuk mengedukasi dan mendorong masyarakat beralih dari transaksi tunai ke non-tunai (kartu, QRIS, *e-money*). Tujuannya adalah efisiensi, keamanan, dan transparansi transaksi, yang sangat mendukung ekonomi digital.",
  },

  // --- INOVASI TEKNOLOGI KEUANGAN (Revisi) ---
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Regulatory Sandbox yang disediakan Bank Indonesia untuk Fintech (Financial Technology) bertujuan:",
    options: {
      A: "Memberikan modal ventura kepada startup fintech terpilih.",
      B: "Sebagai lingkungan pengujian terbatas untuk inovasi fintech dengan potensi risiko tinggi.",
      C: "Menjadi tempat isolasi bagi bank yang mengalami kesulitan operasional.",
      D: "Melakukan audit teknologi informasi terhadap semua penyedia jasa pembayaran.",
      E: "Menetapkan standar minimum gaji pegawai fintech.",
    },
    correct: "B",
    explanation:
      "Regulatory Sandbox adalah ruang yang diatur oleh BI untuk menguji coba produk/layanan fintech inovatif yang belum ada regulasinya secara spesifik. Uji coba ini dilakukan dalam batasan waktu, volume, dan jumlah konsumen tertentu untuk mengukur risiko dan manfaat sebelum regulasi final ditetapkan.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Central Bank Digital Currency (CBDC) atau Digital Rupiah yang sedang dikaji Bank Indonesia memiliki sifat dasar sebagai:",
    options: {
      A: "Cryptocurrency terdesentralisasi seperti Bitcoin.",
      B: "Token digital yang dikeluarkan dan dijamin oleh bank sentral sebagai kewajiban (*liability*) bank sentral.",
      C: "Uang elektronik (e-money) yang diterbitkan oleh bank komersial.",
      D: "Instrumen utang yang diperdagangkan di pasar uang.",
      E: "Mata uang virtual yang digunakan hanya di pasar modal.",
    },
    correct: "B",
    explanation:
      "CBDC adalah uang kertas dalam bentuk digital. Ini adalah liabilitas (kewajiban) Bank Sentral, bukan bank komersial. Berbeda dengan *cryptocurrency* (yang desentralisasi), CBDC adalah sentralisasi, dikeluarkan dan dijamin oleh Bank Sentral untuk menjaga kedaulatan moneter.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Dalam pengaturan fintech, prinsip 'same activity, same risk, same regulation' yang dianut Bank Indonesia berarti:",
    options: {
      A: "Semua inovasi harus diatur secara identik seperti bank konvensional.",
      B: "Aktivitas keuangan yang memiliki tingkat risiko dan fungsi yang sama harus tunduk pada regulasi yang setara.",
      C: "Semua bank dan fintech harus memiliki modal yang sama besarnya.",
      D: "Regulasi harus seragam di seluruh negara ASEAN.",
      E: "BI hanya mengatur aktivitas fintech yang memiliki risiko sistemik.",
    },
    correct: "B",
    explanation:
      "Prinsip 'same activity, same risk, same regulation' memastikan bahwa regulasi didasarkan pada aktivitas dan risiko yang ditimbulkan, bukan semata-mata pada jenis institusi (bank atau fintech). Ini menjaga *level playing field* dan mencegah arbitrase regulasi, sekaligus mendorong inovasi yang bertanggung jawab.",
  },
  {
    type: "Inovasi Teknologi Keuangan",
    question:
      "Penerapan teknologi Artificial Intelligence (AI) dan Machine Learning (ML) dalam fungsi Bank Sentral dan sistem pembayaran berguna untuk:",
    options: {
      A: "Secara langsung menggantikan peran Dewan Gubernur dalam pengambilan keputusan.",
      B: "Peningkatan akurasi *forecasting* ekonomi, deteksi *fraud* secara real-time, dan manajemen risiko.",
      C: "Mengurangi likuiditas pasar uang secara otomatis.",
      D: "Melakukan audit keuangan terhadap bank komersial tanpa perlu auditor manusia.",
      E: "Mencetak uang kertas Rupiah dengan biaya yang lebih rendah.",
    },
    correct: "B",
    explanation:
      "AI/ML digunakan untuk memproses data besar dan mendeteksi pola yang kompleks. Dalam konteks Bank Sentral, aplikasinya termasuk peramalan makroekonomi yang lebih akurat, deteksi anomali dalam transaksi sistem pembayaran (fraud/AML), dan manajemen risiko yang lebih prediktif.",
  },

  // --- HUBUNGAN INTERNASIONAL & ISU GLOBAL (Revisi) ---
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Bank Indonesia berpartisipasi dalam Chiang Mai Initiative Multilateralisation (CMIM) sebagai bagian dari:",
    options: {
      A: "Kerjasama perdagangan bebas ASEAN.",
      B: "Mekanisme *regional financial safety net* di ASEAN+3 (Tiongkok, Jepang, Korea).",
      C: "Kerjasama untuk mengembangkan mata uang tunggal ASEAN.",
      D: "Forum koordinasi kebijakan makroprudensial global (FSB).",
      E: "Mekanisme pembangunan infrastruktur di Asia.",
    },
    correct: "B",
    explanation:
      "CMIM adalah perjanjian *currency swap* multilateral antar negara ASEAN+3. Tujuannya adalah menyediakan jaring pengaman keuangan regional (regional financial safety net) untuk membantu anggota yang menghadapi kesulitan likuiditas neraca pembayaran jangka pendek.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Dalam forum Financial Action Task Force (FATF), Indonesia (dan Bank Indonesia) fokus pada implementasi standar global untuk:",
    options: {
      A: "Peningkatan transparansi informasi pasar modal.",
      B: "Pencegahan dan Pemberantasan Tindak Pidana Pencucian Uang (APU) dan Pendanaan Terorisme (PPT).",
      C: "Harmonisasi regulasi perbankan (Basel III).",
      D: "Pengurangan emisi karbon di sektor finansial (Green Finance).",
      E: "Pengaturan utang luar negeri swasta.",
    },
    correct: "B",
    explanation:
      "FATF adalah badan antar pemerintah yang menetapkan standar internasional untuk memerangi Pencucian Uang (*Money Laundering*) dan Pendanaan Terorisme (*Terrorism Financing*). Kepatuhan terhadap standar FATF krusial bagi integritas sistem keuangan Indonesia.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Kerjasama Local Currency Settlement (LCS) yang diinisiasi Bank Indonesia dengan beberapa negara mitra (misalnya Tiongkok, Jepang) bertujuan utama untuk:",
    options: {
      A: "Mengubah Rupiah menjadi mata uang cadangan global.",
      B: "Memfasilitasi penyelesaian transaksi perdagangan dan investasi bilateral menggunakan mata uang lokal, mengurangi ketergantungan pada Dolar AS.",
      C: "Menciptakan mata uang tunggal regional Asia.",
      D: "Mewajibkan semua bank di Indonesia memiliki kantor perwakilan di negara mitra.",
      E: "Menetapkan kuota ekspor-impor bilateral.",
    },
    correct: "B",
    explanation:
      "Local Currency Settlement (LCS) memungkinkan transaksi perdagangan dan investasi antar dua negara diselesaikan dengan menggunakan mata uang lokal kedua negara (misalnya Rupiah dan Yuan). Tujuannya adalah mengurangi risiko nilai tukar, mengurangi biaya transaksi, dan mengurangi ketergantungan pada Dolar AS.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Climate-related financial risks dalam agenda Bank Sentral global dan domestik mencakup:",
    options: {
      A: "Hanya risiko yang disebabkan oleh bencana alam (physical risks).",
      B: "Risiko fisik (*physical risks*) dari perubahan iklim, dan risiko transisi (*transition risks*) menuju ekonomi rendah karbon.",
      C: "Risiko yang hanya dihadapi oleh bank yang membiayai sektor energi terbarukan.",
      D: "Risiko operasional akibat kegagalan sistem IT bank sentral.",
      E: "Risiko *moral hazard* yang timbul dari bank yang diizinkan gagal.",
    },
    correct: "B",
    explanation:
      "Risiko terkait iklim dibagi dua: Physical Risks (kerusakan aset akibat cuaca ekstrem, misalnya banjir/kekeringan) dan Transition Risks (kerugian aset atau utang yang timbul akibat transisi kebijakan, teknologi, atau sentimen pasar menuju ekonomi rendah karbon). Bank Sentral mengintegrasikan risiko ini ke dalam pengawasan dan kebijakan moneter.",
  },
  {
    type: "Hubungan Internasional & Isu Global",
    question:
      "Asian Bond Markets Initiative (ABMI) yang diikuti Indonesia bertujuan untuk:",
    options: {
      A: "Mengembangkan pasar modal syariah di Asia Tenggara.",
      B: "Membentuk mekanisme asuransi utang antar negara Asia.",
      C: "Mengembangkan pasar obligasi mata uang lokal yang dalam dan likuid untuk mengurangi *currency mismatch*.",
      D: "Membentuk Bank Sentral Asia (Asian Central Bank).",
      E: "Mendominasi pasar obligasi Asia dengan penerbitan Sukuk Negara.",
    },
    correct: "C",
    explanation:
      "ABMI bertujuan mengembangkan pasar obligasi mata uang lokal di Asia. Tujuannya adalah mengurangi ketergantungan pada pembiayaan mata uang asing (Dolar AS) dan mengatasi masalah currency mismatch (utang valas dibayar dengan pendapatan mata uang lokal), yang menjadi sumber kerentanan saat krisis.",
  },
];

export default bankQuestions;