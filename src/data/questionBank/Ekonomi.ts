const ekonomiQuestions = [
  // --- Konsep Dasar Ekonomi ---
  {
    type: "Konsep Dasar Ekonomi",
    question:
      "Ilmu ekonomi sering disebut sebagai ilmu tentang “kelangkaan” (scarcity). Yang dimaksud dengan kelangkaan dalam konteks ilmu ekonomi adalah:",
    options: {
      A: "Tidak adanya sumber daya yang dapat digunakan manusia untuk memenuhi kebutuhan hidupnya.",
      B: "Sumber daya tersedia melimpah, tetapi distribusinya tidak merata sehingga menimbulkan masalah keadilan distributif.",
      C: "Kebutuhan dan keinginan manusia selalu berkembang dan cenderung tidak terbatas, sementara sumber daya untuk memenuhinya terbatas.",
      D: "Sumber daya selalu habis jika digunakan dalam jangka panjang dan tidak dapat diperbaharui.",
      E: "Semua barang dan jasa memiliki biaya produksi yang sangat tinggi, melampaui kemampuan daya beli rata-rata.",
    },
    correct: "C",
    explanation:
      "Inti masalah ekonomi adalah ketidakseimbangan antara kebutuhan manusia yang relatif tidak terbatas dengan ketersediaan sumber daya (waktu, tenaga, modal, alam) yang terbatas. Kelangkaan ini memaksa individu dan masyarakat untuk selalu membuat pilihan alokasi yang rasional (Opsi B terkait keadilan, bukan kelangkaan fundamental).",
  },
  {
    type: "Prinsip Ekonomi",
    question:
      "Prinsip ekonomi menekankan pada efisiensi dalam penggunaan sumber daya. Dalam kerangka teori perilaku rasional (rational choice theory), seorang pelaku ekonomi (individu/produsen) akan berusaha:",
    options: {
      A: "Memperoleh hasil (utilitas/output) sebesar-besarnya dengan pengorbanan (biaya/waktu) sekecil-kecilnya.",
      B: "Memastikan setiap orang mendapat bagian yang sama dari sumber daya yang tersedia untuk mencapai pemerataan.",
      C: "Mengorbankan sumber daya yang ada demi memperoleh kepuasan instan jangka pendek, mengabaikan manfaat marginal.",
      D: "Mengalokasikan seluruh sumber daya hanya untuk investasi dan mengeliminasi konsumsi saat ini.",
      E: "Menghindari penggunaan teknologi karena berpotensi menimbulkan creative destruction dan pengangguran struktural.",
    },
    correct: "A",
    explanation:
      "Prinsip efisiensi dalam ekonomi (baik efisiensi alokatif maupun produktif) adalah upaya memaksimalkan rasio manfaat terhadap biaya. Prinsip ini mendasari analisis cost-benefit dan keputusan optimal (marginal). Opsi B adalah prinsip keadilan/egalitarian, bukan efisiensi.",
  },
  {
    type: "Masalah Pokok Ekonomi Modern",
    question:
      "Dalam kerangka ekonomi modern, masalah pokok ekonomi dijelaskan dengan tiga pertanyaan mendasar: What, How, dan For Whom. Pertanyaan 'untuk siapa diproduksi' (For Whom) terkait secara langsung dengan:",
    options: {
      A: "Distribusi pendapatan, kekayaan, dan daya beli yang menentukan siapa yang dapat mengonsumsi output.",
      B: "Pilihan teknologi yang paling efisien (padat modal vs. padat karya) yang meminimalkan biaya produksi.",
      C: "Tingkat tabungan dan investasi di masyarakat yang menentukan pertumbuhan output potensial.",
      D: "Banyaknya jenis barang yang akan diproduksi versus jenis jasa yang akan ditawarkan.",
      E: "Tingkat inflasi dan suku bunga yang dipertahankan bank sentral.",
    },
    correct: "A",
    explanation:
      "Pertanyaan For Whom (untuk siapa) mengarah pada persoalan distribusi output. Dalam sistem ekonomi pasar, output didistribusikan kepada mereka yang memiliki daya beli dan kontribusi faktor produksi (upah, sewa, bunga, laba). Ini terkait erat dengan isu ketimpangan dan keadilan distributif.",
  },
  {
    type: "Sistem Ekonomi",
    question:
      "Sistem ekonomi pasar murni (laissez-faire) berbeda dari sistem ekonomi campuran terutama karena dalam sistem pasar murni:",
    options: {
      A: "Pemerintah memegang kendali penuh atas harga dan kuantitas produksi untuk menghindari kegagalan pasar.",
      B: "Semua keputusan ekonomi mendasar (what, how, for whom) sepenuhnya ditentukan oleh mekanisme harga dan insentif privat.",
      C: "Konsumen tidak memiliki kebebasan memilih barang dan jasa, hanya diproduksi yang menguntungkan.",
      D: "Tingkat harga selalu stabil karena tidak ada intervensi dari bank sentral.",
      E: "Pasar internasional tidak berperan, sehingga negara menganut kebijakan autarki.",
    },
    correct: "B",
    explanation:
      "Sistem pasar murni didasarkan pada prinsip invisible hand Adam Smith: harga adalah sinyal utama yang mengalokasikan sumber daya. Tidak ada atau minim intervensi pemerintah. Sebaliknya, sistem campuran melibatkan intervensi pemerintah untuk mengoreksi eksternalitas dan menyediakan barang publik.",
  },
  {
    type: "Teori Permintaan",
    question:
      "Menurut hukum permintaan (Law of Demand), terdapat hubungan negatif antara harga dan jumlah barang yang diminta. Jika harga suatu barang normal meningkat (ceteris paribus), maka:",
    options: {
      A: "Jumlah barang yang diminta meningkat karena konsumen mengejar kualitas yang lebih tinggi (Veblen Good).",
      B: "Jumlah barang yang diminta menurun karena konsumen beralih ke barang substitusi dan daya beli riil menurun.",
      C: "Jumlah barang yang diminta tidak berubah karena kebutuhan konsumen adalah tetap (permintaan inelastis sempurna).",
      D: "Jumlah barang yang ditawarkan menurun, karena produsen menarik produk dari pasar.",
      E: "Jumlah barang yang diminta naik jika barang tersebut merupakan barang inferior (Giffen Good).",
    },
    correct: "B",
    explanation:
      "Hubungan negatif permintaan disebabkan oleh dua efek: Efek Substitusi (barang jadi relatif lebih mahal, konsumen beralih ke pengganti) dan Efek Pendapatan (daya beli riil konsumen menurun). Opsi A, C, dan E adalah pengecualian (Veblen/Giffen/Inelastis) atau kesalahan kausalitas (Opsi D adalah penawaran).",
  },
  {
    type: "Teori Penawaran",
    question:
      "Hukum penawaran menjelaskan bahwa terdapat hubungan positif antara harga dan kuantitas yang ditawarkan. Ketika harga jual suatu barang meningkat (ceteris paribus), maka:",
    options: {
      A: "Jumlah barang yang ditawarkan meningkat, karena harga yang lebih tinggi meningkatkan profitabilitas marjinal produksi.",
      B: "Jumlah barang yang ditawarkan menurun, karena produsen khawatir permintaan akan turun di masa depan.",
      C: "Jumlah barang yang ditawarkan tetap, karena produsen memiliki kapasitas produksi yang bersifat fixed dalam jangka pendek.",
      D: "Permintaan pasar meningkat, sehingga produsen harus mengurangi pasokan untuk menjaga harga.",
      E: "Biaya produksi rata-rata meningkat, yang mendorong produsen menghentikan produksi.",
    },
    correct: "A",
    explanation:
      "Hubungan positif penawaran mencerminkan insentif bagi produsen. Harga jual yang lebih tinggi per unit memungkinkan produsen menutupi biaya marjinal yang lebih tinggi, sehingga mereka terdorong untuk meningkatkan kuantitas yang ditawarkan demi memaksimalkan laba.",
  },
  {
    type: "Pasar Persaingan Sempurna",
    question:
      "Salah satu ciri khas fundamental pasar persaingan sempurna (Perfectly Competitive Market) adalah bahwa:",
    options: {
      A: "Setiap produsen memiliki kekuatan untuk menentukan harga jual, terlepas dari keputusan pesaing.",
      B: "Produk yang diperdagangkan bersifat homogen (identik), sehingga perusahaan adalah price taker.",
      C: "Informasi pasar bersifat terbatas dan asimetris, hanya diketahui oleh penjual.",
      D: "Terdapat hambatan masuk (barrier to entry) yang sangat tinggi bagi perusahaan baru.",
      E: "Dalam jangka panjang, perusahaan dapat mempertahankan keuntungan ekonomi yang positif (di atas normal profit).",
    },
    correct: "B",
    explanation:
      "Ciri produk homogen dan banyak pembeli/penjual membuat permintaan yang dihadapi perusahaan individu elastis sempurna. Artinya, perusahaan harus menerima harga yang ditentukan pasar (price taker). Opsi E salah; keuntungan ekonomi jangka panjang di pasar ini cenderung nol.",
  },
  {
    type: "Monopoli",
    question:
      "Struktur pasar monopoli terjadi ketika hanya terdapat satu produsen yang menguasai pasar. Konsekuensi utama yang membedakannya dari pasar kompetitif adalah:",
    options: {
      A: "Harga yang ditetapkan selalu sama dengan biaya marjinal (Marginal Cost).",
      B: "Produsen bertindak sebagai price maker, di mana ia menentukan harga berdasarkan kurva permintaan yang dihadapinya.",
      C: "Konsumen selalu mendapat kualitas produk terbaik karena tidak ada pesaing yang bisa meniru.",
      D: "Pasar menjadi lebih kompetitif karena ancaman masuknya pesaing baru (contestable market).",
      E: "Pasar monopoli tidak pernah menghadapi permintaan inelastis.",
    },
    correct: "B",
    explanation:
      "Monopolis menghadapi kurva permintaan yang sama dengan permintaan pasar, sehingga ia memiliki kekuatan penuh untuk memilih kombinasi harga dan kuantitas. Monopolis akan memproduksi pada titik di mana Pendapatan Marjinal ($MR$) sama dengan Biaya Marjinal ($MC$), menghasilkan harga ($P$) yang lebih tinggi dari $MC$. Opsi A adalah kondisi efisiensi alokatif di pasar sempurna.",
  },
  {
    type: "Inflasi",
    question:
      "Inflasi yang disebabkan oleh lonjakan harga bahan baku, kenaikan upah buruh, atau depresiasi nilai tukar yang meningkatkan biaya impor input produksi, disebut:",
    options: {
      A: "Demand-pull inflation, karena total permintaan agregat meningkat.",
      B: "Cost-push inflation, karena biaya agregat produksi (supply side shock) meningkat.",
      C: "Hyperinflation, karena inflasi melebihi 50% per bulan.",
      D: "Imported inflation, karena hanya dipengaruhi kurs valuta asing tanpa unsur biaya produksi.",
      E: "Deflasi, karena harga-harga mengalami penurunan.",
    },
    correct: "B",
    explanation:
      "Cost-push inflation (inflasi dorongan biaya) terjadi karena pergeseran kurva penawaran agregat ke kiri (biaya naik). Ini merupakan supply side shock. Berbeda dengan Demand-pull inflation (Opsi A) yang terjadi karena pergeseran kurva permintaan agregat ke kanan (permintaan berlebihan).",
  },
  {
    type: "PDB dan Pertumbuhan Ekonomi",
    question:
      "Produk Domestik Bruto (PDB riil) digunakan sebagai indikator pertumbuhan ekonomi riil karena:",
    options: {
      A: "Mengukur total nilai barang dan jasa berdasarkan harga pasar tahun berjalan (PDB nominal).",
      B: "Mengabaikan efek perubahan harga (inflasi/deflasi), sehingga mencerminkan pertumbuhan output fisik murni.",
      C: "Menghitung total pendapatan yang diperoleh oleh warga negara (PNB) di luar negeri.",
      D: "Menghitung kekayaan nasional dalam bentuk aset infrastruktur dan modal tetap.",
      E: "Selalu lebih tinggi dari PDB nominal, sehingga lebih baik untuk mengukur kinerja.",
    },
    correct: "B",
    explanation:
      "PDB riil adalah nilai PDB yang telah disesuaikan dengan perubahan harga (dideflasi). Dengan menggunakan harga konstan (harga tahun dasar), PDB riil secara akurat merefleksikan peningkatan kapasitas produksi dan output fisik suatu negara. Opsi A adalah definisi PDB nominal.",
  },
  {
    type: "Elastisitas Harga Permintaan",
    question:
      "Jika elastisitas harga permintaan suatu barang adalah $-0.5$, maka barang ini dikategorikan inelastis. Konsekuensinya, jika produsen menaikkan harga sebesar $10\%$, maka:",
    options: {
      A: "Jumlah barang yang diminta akan turun sebesar $20\%$ (elastis).",
      B: "Jumlah barang yang diminta akan turun sebesar $5\%$ (inelastis).",
      C: "Jumlah barang yang diminta akan naik sebesar $5\%$ (hukum permintaan terlanggar).",
      D: "Total pendapatan produsen (Total Revenue) akan turun.",
      E: "Permintaan menjadi elastis sempurna.",
    },
    correct: "B",
    explanation:
      "Elastisitas $E = (\% \Delta Q) / (\% \Delta P)$. Dengan $E=-0.5$, maka $\% \Delta Q = -0.5 \times (+10\%) = -5\%$. Permintaan inelastis berarti persentase perubahan kuantitas lebih kecil daripada persentase perubahan harga. Dalam kondisi inelastis, kenaikan harga akan meningkatkan Total Revenue produsen.",
  },
  {
    type: "Elastisitas Silang",
    question:
      "Jika elastisitas silang permintaan (Cross-Price Elasticity of Demand) antara produk X (Teh) dan produk Y (Kopi) bernilai positif ($E_{XY} > 0$), hal ini menunjukkan bahwa:",
    options: {
      A: "Teh dan Kopi adalah barang pelengkap (complementary goods).",
      B: "Teh dan Kopi adalah barang substitusi (substitute goods).",
      C: "Teh dan Kopi adalah barang inferior (inferior goods).",
      D: "Teh dan Kopi tidak memiliki hubungan konsumsi yang signifikan.",
      E: "Permintaan Tehdipengaruhi oleh perubahan pendapatan konsumen (income elasticity).",
    },
    correct: "B",
    explanation:
      "Elastisitas silang positif berarti kenaikan harga barang Y (Kopi) menyebabkan kenaikan permintaan barang X (Teh). Hal ini menunjukkan kedua barang adalah pengganti (substitusi). Sebaliknya, elastisitas silang negatif menunjukkan barang pelengkap (misalnya, mobil dan bensin).",
  },
  {
    type: "Teori Konsumen – Kurva Indiferen",
    question:
      "Bentuk kurva indiferen yang cembung ke arah titik origin (convex to the origin) dalam teori konsumen mencerminkan prinsip:",
    options: {
      A: "Utilitas total akan selalu meningkat seiring bertambahnya konsumsi.",
      B: "Marginal Rate of Substitution (MRS) yang semakin menurun (diminishing MRS) ketika konsumsi salah satu barang meningkat.",
      C: "Hukum Utilitas Marjinal yang Meningkat (Increasing Marginal Utility).",
      D: "Barang yang dikonsumsi bersifat sempurna komplementer (perfect complement).",
      E: "Konsumen tidak memiliki preferensi rasional yang konsisten (prinsip transitivity dilanggar).",
    },
    correct: "B",
    explanation:
      "Bentuk cembung menunjukkan MRS yang menurun: konsumen bersedia mengorbankan semakin sedikit barang Y untuk mendapatkan tambahan satu unit barang X, seiring bertambahnya persediaan barang X yang sudah dimiliki. Ini adalah implikasi logis dari kerangka rasionalitas dan Hukum Utilitas Marjinal yang Menurun.",
  },
  {
    type: "Teori Produksi – Jangka Pendek",
    question:
      "Dalam proses produksi jangka pendek, ketika jumlah satu faktor produksi variabel (misalnya tenaga kerja) ditambah terus-menerus sementara faktor lain tetap (misalnya modal), maka tambahan output akan menurun setelah titik tertentu. Fenomena ini dikenal sebagai:",
    options: {
      A: "Skala hasil meningkat (Increasing Return to Scale), yang terjadi dalam jangka panjang.",
      B: "Hukum Hasil yang Semakin Menurun (Law of Diminishing Marginal Returns).",
      C: "Efek substitusi faktor produksi (perpindahan modal ke tenaga kerja).",
      D: "Inefisiensi teknis alokasi input.",
      E: "Hukum Biaya Marjinal yang Menurun (Diminishing Marginal Cost).",
    },
    correct: "B",
    explanation:
      "Law of Diminishing Marginal Returns adalah konsep fundamental dalam produksi jangka pendek. Ketika input variabel (misalnya buruh) ditambahkan, produktivitas marjinal (Marginal Product) buruh akan menurun karena faktor tetap (modal, tanah) menjadi hambatan (bottleneck) dalam proses produksi.",
  },
  {
    type: "Fungsi Produksi",
    question:
      "Fungsi produksi Cobb-Douglas berbentuk $Q = A \cdot K^{\\alpha} \cdot L^{\\beta}$. Dalam analisis jangka panjang, jika $\\alpha + \\beta > 1$, maka perusahaan tersebut sedang beroperasi pada kondisi:",
    options: {
      A: "Skala hasil konstan (Constant Return to Scale).",
      B: "Skala hasil menurun (Decreasing Return to Scale).",
      C: "Skala hasil meningkat (Increasing Return to Scale) atau Economies of Scale.",
      D: "Inefisiensi dalam penggunaan input (X-Inefficiency).",
      E: "Terjadi Hukum Hasil yang Semakin Menurun.",
    },
    correct: "C",
    explanation:
      "Dalam fungsi Cobb-Douglas, total eksponen ($\\alpha + \\beta$) menentukan Return to Scale (jangka panjang). Jika $\\alpha + \\beta > 1$, peningkatan input K dan L secara proporsional menghasilkan peningkatan output dengan proporsi yang lebih besar. Ini menunjukkan adanya economies of scale.",
  },
  {
    type: "Biaya Produksi",
    question:
      "Dalam analisis biaya jangka pendek, perbedaan paling signifikan antara Biaya Tetap (Fixed Cost/FC) dan Biaya Variabel (Variable Cost/VC) adalah:",
    options: {
      A: "Biaya tetap tidak pernah berubah, sedangkan biaya variabel berubah sesuai tingkat output yang diproduksi.",
      B: "Biaya tetap (FC) hanya ada jika output yang diproduksi lebih besar dari nol.",
      C: "Biaya variabel (VC) dapat diabaikan dalam keputusan produksi jangka pendek.",
      D: "Biaya tetap selalu lebih besar dari biaya variabel.",
      E: "Biaya tetap secara permanen menentukan laba maksimum perusahaan.",
    },
    correct: "A",
    explanation:
      "Di jangka pendek, FC (misalnya sewa gedung, biaya mesin) adalah biaya yang harus dikeluarkan terlepas dari volume produksi. VC (misalnya bahan baku, upah buruh langsung) adalah biaya yang berubah sebanding dengan output. Perbedaan ini krusial dalam keputusan shutdown point jangka pendek.",
  },
  {
    type: "Biaya Marjinal",
    question:
      "Konsep Biaya Marjinal (Marginal Cost/MC) adalah faktor kunci dalam keputusan alokasi sumber daya. Definisi paling tepat dari Marginal Cost adalah:",
    options: {
      A: "Biaya total dibagi jumlah output ($ATC$).",
      B: "Biaya tambahan yang dikeluarkan untuk memproduksi satu unit output tambahan.",
      C: "Biaya rata-rata yang dikeluarkan dalam proses produksi jangka panjang.",
      D: "Selisih antara total pendapatan dan total biaya (Laba).",
      E: "Biaya yang harus ditanggung perusahaan meskipun output sama dengan nol (Fixed Cost).",
    },
    correct: "B",
    explanation:
      "Marginal Cost ($MC = \\Delta TC / \\Delta Q$) adalah perubahan biaya total akibat perubahan satu unit output. Dalam kondisi optimal, perusahaan akan terus memproduksi selama Harga ($P$) $\\ge MC$. Pilihan A adalah Average Total Cost (ATC).",
  },
  {
    type: "Surplus Konsumen dan Produsen",
    question:
      "Surplus Konsumen dalam sebuah pasar yang efisien menggambarkan:",
    options: {
      A: "Selisih antara harga yang dibayarkan konsumen dengan biaya marjinal produksi.",
      B: "Selisih antara total nilai yang bersedia dibayar konsumen dengan total yang benar-benar dibayarkan (harga pasar).",
      C: "Keuntungan di atas rata-rata yang diperoleh produsen setelah menjual barang.",
      D: "Peningkatan harga barang akibat kenaikan permintaan mendadak.",
      E: "Penurunan total kesejahteraan sosial (Deadweight Loss) akibat regulasi harga.",
    },
    correct: "B",
    explanation:
      "Surplus Konsumen adalah manfaat yang diperoleh konsumen karena mereka membayar harga yang lebih rendah daripada nilai maksimum yang siap mereka bayarkan. Secara grafis, ini adalah area di bawah kurva permintaan tetapi di atas harga pasar. Opsi C adalah Surplus Produsen (atau Laba).",
  },
  {
    type: "Keseimbangan Pasar",
    question:
      "Jika harga suatu barang di pasar berada di atas harga keseimbangan yang ditentukan oleh interaksi permintaan dan penawaran, maka mekanisme penyesuaian pasar yang logis adalah:",
    options: {
      A: "Terjadi kelebihan permintaan (excess demand), sehingga harga akan naik lebih lanjut.",
      B: "Terjadi kelebihan penawaran (excess supply), sehingga produsen harus menurunkan harga untuk menjual stok.",
      C: "Jumlah barang yang diminta secara otomatis sama dengan yang ditawarkan, karena pasar selalu mencapai efisiensi Pareto.",
      D: "Pemerintah harus melakukan intervensi dengan subsidi untuk menggeser kurva permintaan.",
      E: "Harga barang cenderung turun lalu naik kembali (cyclical fluctuation) tanpa mekanisme penyesuaian yang jelas.",
    },
    correct: "B",
    explanation:
      "Harga di atas keseimbangan ($P > P_{e}$) berarti kuantitas yang ditawarkan ($Q_s$) lebih besar dari kuantitas yang diminta ($Q_d$), menyebabkan surplus barang. Surplus ini menciptakan tekanan pada produsen untuk menurunkan harga kembali ke titik keseimbangan.",
  },
  {
    type: "Efisiensi Pasar",
    question:
      "Menurut konsep Efisiensi Pareto, suatu alokasi sumber daya dalam perekonomian dianggap efisien apabila:",
    options: {
      A: "Semua individu memperoleh bagian yang sama besar dari output (kesetaraan hasil).",
      B: "Tidak ada individu yang dapat dibuat lebih baik tanpa membuat individu lain menjadi lebih buruk (kondisi optimal).",
      C: "Output total suatu negara dimaksimalkan, terlepas dari distribusi pendapatan.",
      D: "Harga pasar ditentukan secara mutlak oleh pemerintah untuk mencapai stabilisasi.",
      E: "Terjadi penurunan utang dan defisit fiskal secara signifikan.",
    },
    correct: "B",
    explanation:
      "Efisiensi Pareto adalah kondisi di mana semua peluang untuk perbaikan bersama (mutual gain) telah dieksploitasi. Penting untuk dicatat, alokasi yang efisien secara Pareto tidak menjamin alokasi tersebut adil secara distributif (Opsi A).",
  },
  {
    type: "Pendapatan Nasional",
    question:
      "PDB per kapita adalah indikator yang umum digunakan, namun memiliki keterbatasan mendasar dalam mengukur kesejahteraan. Salah satu keterbatasan PDB per kapita adalah:",
    options: {
      A: "PDB per kapita menghitung secara berlebihan nilai aktivitas ekonomi di sektor informal.",
      B: "PDB per kapita adalah rata-rata, sehingga tidak mencerminkan ketimpangan distribusi pendapatan dan kekayaan.",
      C: "PDB per kapita diukur dengan kurs nominal, bukan kurs paritas daya beli (PPP).",
      D: "PDB per kapita mencakup nilai ekspor, tetapi tidak memasukkan barang impor.",
      E: "PDB per kapita mencakup nilai polusi dan kerusakan lingkungan sebagai output positif.",
    },
    correct: "B",
    explanation:
      "PDB per kapita adalah nilai rata-rata, sehingga tidak sensitif terhadap ketimpangan. Kenaikan PDB per kapita bisa dinikmati hanya oleh kelompok kecil masyarakat. Oleh karena itu, diperlukan indeks pelengkap seperti Koefisien Gini dan Indeks Pembangunan Manusia (IPM). Opsi E adalah kelemahan PDB karena mengabaikan eksternalitas negatif.",
  },
  {
    type: "Inflasi – Kebijakan Moneter",
    question:
      "Jika Bank Indonesia ingin menekan Demand-Pull Inflation (inflasi akibat permintaan agregat berlebihan), instrumen moneter yang paling tepat adalah:",
    options: {
      A: "Menurunkan suku bunga acuan (BI7DRR) dan membeli obligasi pemerintah.",
      B: "Menaikkan suku bunga acuan (BI7DRR), yang akan meningkatkan biaya pinjaman dan mengurangi konsumsi/investasi.",
      C: "Meningkatkan belanja pemerintah dan memberikan subsidi langsung pada masyarakat.",
      D: "Menurunkan Giro Wajib Minimum (GWM) untuk meningkatkan likuiditas perbankan.",
      E: "Melakukan sterilized intervention di pasar valas tanpa mengubah suku bunga domestik.",
    },
    correct: "B",
    explanation:
      "Demand-pull inflation diatasi dengan kebijakan moneter kontraktif. Kenaikan suku bunga acuan akan menaikkan suku bunga pinjaman di pasar, mengurangi investasi dan konsumsi rumah tangga, sehingga menurunkan total permintaan agregat. Opsi C adalah kebijakan fiskal ekspansif, yang justru memperburuk demand-pull inflation.",
  },
  {
    type: "Pengangguran",
    question:
      "Seorang insinyur sipil di-PHK karena proyek pembangunan infrastruktur berhenti total akibat resesi ekonomi. Jenis pengangguran yang dialami insinyur ini adalah:",
    options: {
      A: "Pengangguran friksional, karena ia sedang mencari pekerjaan yang lebih baik.",
      B: "Pengangguran siklis, karena disebabkan oleh penurunan aktivitas ekonomi (resesi).",
      C: "Pengangguran struktural, karena keterampilan yang dimiliki sudah usang.",
      D: "Pengangguran musiman, karena terkait dengan fluktuasi cuaca atau panen.",
      E: "Pengangguran tersembunyi (disguised unemployment), karena ia bekerja di bawah kapasitas.",
    },
    correct: "B",
    explanation:
      "Pengangguran siklis (cyclical unemployment) terjadi akibat siklus bisnis yang lesu (resesi atau depresi). Permintaan barang/jasa menurun, sehingga perusahaan mengurangi produksi dan mem-PHK pekerja. Pengangguran ini biasanya diatasi dengan stimulus moneter/fiskal ekspansif.",
  },
  {
    type: "Kebijakan Fiskal – Stimulus",
    question:
      "Pada masa krisis (misalnya pandemi), pemerintah mengeluarkan kebijakan fiskal ekspansif besar-besaran (defisit anggaran). Menurut teori Keynesian, tujuan utama dari kebijakan ini adalah:",
    options: {
      A: "Menghindari crowding out effect pada investasi swasta.",
      B: "Mendorong permintaan agregat dan mencegah penurunan PDB riil yang lebih dalam (resesi).",
      C: "Menekan inflasi dan menjaga stabilitas harga jangka panjang.",
      D: "Mengurangi utang publik secara signifikan dalam jangka pendek.",
      E: "Menguatkan nilai tukar Rupiah di pasar valuta asing.",
    },
    correct: "B",
    explanation:
      "Keynesianisme menganjurkan intervensi pemerintah saat resesi. Ketika konsumsi dan investasi swasta lesu, belanja pemerintah menjadi satu-satunya 'penarik' yang efektif untuk menaikkan permintaan agregat ($AD = C+I+G+X-M$), yang pada gilirannya akan memicu pemulihan ekonomi.",
  },
  {
    type: "Uang dan Fungsi Moneter",
    question:
      "Salah satu fungsi esensial uang adalah sebagai alat penyimpan nilai (store of value). Fungsi ini akan terganggu secara signifikan jika suatu negara mengalami:",
    options: {
      A: "Tingkat pengangguran yang tinggi (pengangguran siklis).",
      B: "Deflasi moderat (penurunan harga) yang mendorong masyarakat menimbun uang.",
      C: "Tingkat inflasi tinggi yang persisten (berkepanjangan) sehingga daya beli uang menurun drastis.",
      D: "Nilai tukar mata uang yang stabil dalam jangka panjang.",
      E: "Pemerintah meningkatkan pajak progresif atas pendapatan modal.",
    },
    correct: "C",
    explanation:
      "Fungsi penyimpan nilai mensyaratkan uang harus memiliki daya beli yang relatif stabil. Inflasi tinggi menyebabkan nilai riil uang turun cepat. Jika terjadi hyperinflation, uang akan kehilangan fungsi ini sepenuhnya, dan masyarakat akan beralih ke barter atau aset riil (emas, valas, tanah).",
  },
  {
    type: "Pertumbuhan Ekonomi – Teori",
    question:
      "Teori Pertumbuhan Endogen (Endogenous Growth Theory), yang dikembangkan oleh ekonom seperti Romer dan Lucas, menekankan bahwa pendorong utama pertumbuhan ekonomi jangka panjang yang berkelanjutan adalah:",
    options: {
      A: "Hanya akumulasi modal fisik (mesin dan pabrik) murni.",
      B: "Akumulasi modal manusia (human capital), inovasi teknologi, dan pengetahuan yang bersifat non-rival.",
      C: "Tingkat inflasi yang sangat rendah dan stabil, mendekati nol.",
      D: "Jumlah penduduk yang besar (populasi), yang meningkatkan permintaan agregat.",
      E: "Ekspor komoditas primer berbasis sumber daya alam (SDA).",
    },
    correct: "B",
    explanation:
      "Berbeda dengan teori Neoklasik yang menganggap teknologi sebagai faktor eksternal, teori Endogen menekankan bahwa pertumbuhan didorong dari dalam sistem (endogen) melalui investasi dalam pendidikan (modal manusia), Penelitian & Pengembangan (R&D), dan inovasi. Pengetahuan adalah faktor kunci yang dapat digunakan oleh semua orang tanpa berkurang (non-rival).",
  },
  {
    type: "Siklus Bisnis",
    question:
      "Dalam siklus bisnis (Business Cycle), fase Resesi secara teknis ditandai dengan:",
    options: {
      A: "Pertumbuhan PDB riil yang positif, tetapi lebih rendah dari PDB potensial.",
      B: "Penurunan output PDB riil selama minimal dua kuartal berturut-turut, diikuti kenaikan pengangguran.",
      C: "Inflasi meningkat di atas $20\%$ per tahun (Severe Inflation).",
      D: "Kenaikan tajam harga aset keuangan (Asset Bubble).",
      E: "Neraca perdagangan selalu mencatat surplus yang besar.",
    },
    correct: "B",
    explanation:
      "Resesi adalah fase kontraksi di mana aktivitas ekonomi secara agregat menurun. Definisinya adalah penurunan PDB riil selama setidaknya dua kuartal berturut-turut. Ini akan disertai dengan penurunan investasi, konsumsi, dan peningkatan pengangguran siklis.",
  },
  {
    type: "Stagflasi – Kasus Global 1970-an",
    question:
      "Fenomena stagflasi yang melanda banyak negara maju pada dekade 1970-an (akibat oil shock) merupakan kondisi ekonomi yang ditandai dengan kombinasi:",
    options: {
      A: "Pertumbuhan ekonomi lambat (stagnasi) atau resesi, bersamaan dengan tingkat inflasi tinggi dan pengangguran meningkat.",
      B: "Inflasi rendah (stabilisasi harga), pertumbuhan tinggi, dan pengangguran rendah.",
      C: "Inflasi negatif (deflasi) dan pertumbuhan ekonomi tinggi.",
      D: "Hanya inflasi tinggi, tanpa adanya dampak terhadap output dan pengangguran.",
      E: "PDB nominal menurun drastis tetapi PDB riil meningkat.",
    },
    correct: "A",
    explanation:
      "Stagflasi adalah dilema kebijakan yang sulit: stagnasi (pertumbuhan rendah/negatif) dan inflasi terjadi bersamaan. Ini biasanya disebabkan oleh supply side shock (misalnya lonjakan harga energi), yang menggeser kurva penawaran agregat ke kiri. Instrumen kebijakan moneter/fiskal standar menjadi tidak efektif atau bahkan kontradiktif.",
  },
  {
    type: "Perdagangan Internasional – Keunggulan Komparatif",
    question:
      "Indonesia mengekspor CPO (minyak sawit mentah) dan mengimpor mesin industri dari Jerman. Menurut teori Keunggulan Komparatif (Comparative Advantage) David Ricardo, pola perdagangan ini rasional jika:",
    options: {
      A: "Indonesia memiliki keunggulan absolut dalam produksi CPO, dan Jerman memiliki keunggulan absolut dalam produksi mesin.",
      B: "Indonesia memiliki biaya peluang (opportunity cost) yang lebih rendah dalam produksi CPO dibanding mesin.",
      C: "Indonesia memiliki harga jual CPO yang lebih tinggi di pasar domestik dibanding harga internasional.",
      D: "Kedua negara memiliki biaya produksi yang identik untuk CPO dan mesin.",
      E: "Perdagangan hanya terjadi jika Indonesia memiliki surplus neraca perdagangan.",
    },
    correct: "B",
    explanation:
      "Keunggulan Komparatif (KK) didasarkan pada biaya peluang atau biaya relatif (bukan absolut). Indonesia harus berspesialisasi pada CPO karena biaya peluang untuk memproduksi CPO (dihitung dari seberapa banyak mesin yang harus dikorbankan) lebih rendah dibanding Jerman. KK adalah dasar filosofis utama perdagangan bebas.",
  },
  {
    type: "Externalitas Negatif – Kasus Pajak",
    question:
      "Pemerintah mengenakan Pajak Pigouvian pada pabrik yang menghasilkan polusi. Tujuan utama dari pajak ini dari perspektif ekonomi kesejahteraan adalah:",
    options: {
      A: "Menciptakan defisit anggaran agar pemerintah dapat meningkatkan belanja.",
      B: "Mengumpulkan pendapatan negara sebanyak mungkin untuk membiayai utang.",
      C: "Menginternalisasi biaya eksternalitas negatif (polusi) ke dalam harga jual produk pabrik.",
      D: "Mendorong konsumen untuk membeli barang yang memiliki eksternalitas negatif.",
      E: "Mencapai efisiensi Pareto dengan menghapus semua jenis eksternalitas.",
    },
    correct: "C",
    explanation:
      "Pajak Pigouvian (diambil dari ekonom Arthur Pigou) adalah instrumen untuk mengoreksi kegagalan pasar. Tujuannya adalah membuat produsen (pabrik) membayar biaya sosial penuh dari produksinya, sehingga biaya eksternal menjadi biaya internal, yang pada gilirannya mengurangi produksi polusi ke tingkat yang optimal secara sosial.",
  },
  {
    type: "Asimetri Informasi – Kasus Pasar Mobil Bekas",
    question:
      "Dalam pasar mobil bekas, penjual (pemilik) sering tahu kondisi mobil (good quality atau lemon) jauh lebih baik daripada pembeli. Kondisi di mana informasi tidak simetris sebelum transaksi terjadi ini disebut:",
    options: {
      A: "Moral hazard, di mana perilaku berubah setelah kontrak.",
      B: "Adverse selection, di mana kualitas buruk mendorong kualitas baik keluar dari pasar.",
      C: "Signaling, di mana penjual berusaha mengirimkan sinyal kualitas.",
      D: "Screening, di mana pembeli berusaha menyaring kualitas.",
      E: "Externalitas negatif, di mana pihak ketiga dirugikan.",
    },
    correct: "B",
    explanation:
      "Adverse Selection muncul ketika informasi tidak simetris sebelum kesepakatan/transaksi. Dalam kasus mobil bekas (seperti yang dijelaskan oleh Akerlof), pembeli yang tidak tahu kualitas mobil hanya mau membayar harga rata-rata, sehingga mobil berkualitas baik (peach) ditarik penjual, menyisakan mobil buruk (lemon).",
  },
  {
    type: "Pasar Modal – Hipotesis Pasar Efisien",
    question:
      "Hipotesis Pasar Efisien (Efficient Market Hypothesis/EMH) dalam bentuk strong form (bentuk kuat) menyatakan bahwa:",
    options: {
      A: "Harga saham mencerminkan semua informasi publik dan privat, sehingga mustahil mendapat abnormal return.",
      B: "Harga saham hanya mencerminkan informasi historis (analisis teknikal tidak berguna).",
      C: "Harga saham mencerminkan semua informasi publik (analisis fundamental tidak berguna).",
      D: "Semua investor bertindak secara irasional, menyebabkan volatilitas tinggi.",
      E: "Hanya bank sentral yang bisa memengaruhi pergerakan harga aset.",
    },
    correct: "A",
    explanation:
      "EMH bentuk kuat menyatakan bahwa harga mencerminkan semua informasi—publik maupun pribadi (insider information). Dalam bentuk ini, tidak ada investor, bahkan dengan informasi non-publik, yang dapat secara konsisten mengungguli pasar. Kenyataan pasar sering menunjukkan anomali yang menantang bentuk kuat EMH.",
  },
  {
    type: "Ekonomi Politik – Rent Seeking",
    question:
      "Aktivitas Rent Seeking (pencarian rente) dalam ekonomi politik merujuk pada:",
    options: {
      A: "Upaya individu atau perusahaan untuk menciptakan nilai tambah baru melalui inovasi teknologi dan peningkatan produktivitas.",
      B: "Penggunaan sumber daya (misalnya lobi politik) untuk mendapatkan keuntungan melalui perubahan regulasi, bukan melalui produksi nilai riil.",
      C: "Investasi produktif jangka panjang dalam aset riil dan modal manusia.",
      D: "Kegiatan corporate social responsibility (CSR) untuk meningkatkan citra publik perusahaan.",
      E: "Penetapan harga sewa tanah oleh David Ricardo.",
    },
    correct: "B",
    explanation:
      "Rent Seeking adalah aktivitas non-produktif (seperti melobi, suap, atau kolusi) yang bertujuan untuk memperoleh atau mempertahankan rente ekonomi (keuntungan di atas kompetitif) yang dihasilkan dari kebijakan atau regulasi pemerintah. Kegiatan ini dianggap membuang-buang sumber daya dan menurunkan efisiensi ekonomi secara agregat.",
  },
];

export default ekonomiQuestions;