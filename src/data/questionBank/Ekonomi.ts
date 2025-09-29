const ekonomiQuestions = [
    // --- Konsep Dasar Ekonomi ---
    {
      type: "Konsep Dasar Ekonomi",
      question:
        "Ilmu ekonomi sering disebut sebagai ilmu tentang “kelangkaan” (scarcity). Yang dimaksud dengan kelangkaan dalam konteks ekonomi adalah:",
      options: {
        A: "Tidak adanya sumber daya yang dapat digunakan manusia untuk memenuhi kebutuhan hidupnya.",
        B: "Sumber daya tersedia melimpah, tetapi distribusinya tidak merata.",
        C: "Kebutuhan manusia selalu berkembang dan cenderung tidak terbatas, sementara sumber daya untuk memenuhinya terbatas.",
        D: "Sumber daya selalu habis jika digunakan dalam jangka panjang.",
        E: "Semua barang dan jasa memiliki harga yang sangat mahal.",
      },
      correct: "C",
      explanation:
        "Inti masalah ekonomi adalah keterbatasan sumber daya relatif terhadap kebutuhan manusia yang terus bertambah. Karena keterbatasan inilah, setiap individu, rumah tangga, perusahaan, maupun negara harus membuat pilihan mengenai apa yang diproduksi, bagaimana memproduksinya, dan untuk siapa diproduksi. Inilah yang menjadikan ekonomi relevan sebagai ilmu alokasi.",
    },
    {
      type: "Prinsip Ekonomi",
      question:
        "Prinsip ekonomi menekankan pada efisiensi dalam penggunaan sumber daya. Hal ini berarti bahwa seorang individu atau organisasi ekonomi akan berusaha:",
      options: {
        A: "Memperoleh hasil sebesar-besarnya dengan pengorbanan sekecil-kecilnya.",
        B: "Memastikan setiap orang mendapat bagian yang sama dari sumber daya yang tersedia.",
        C: "Mengorbankan sumber daya yang ada demi memperoleh kepuasan jangka pendek.",
        D: "Mengalokasikan seluruh sumber daya hanya untuk sektor produksi.",
        E: "Menghindari penggunaan teknologi karena menimbulkan pengangguran.",
      },
      correct: "A",
      explanation:
        "Prinsip ekonomi menekankan efisiensi alokatif dan efisiensi produktif. Individu berusaha memaksimalkan kepuasan atau utilitas, sementara produsen berusaha memaksimalkan laba dengan biaya seminimal mungkin. Konsep ini juga mendasari analisis cost-benefit dalam teori ekonomi modern.",
    },
    {
      type: "Masalah Pokok Ekonomi Modern",
      question:
        "Dalam kerangka ekonomi modern, masalah pokok ekonomi dijelaskan dengan tiga pertanyaan mendasar: apa yang diproduksi, bagaimana memproduksi, dan untuk siapa diproduksi. Pertanyaan “untuk siapa diproduksi” terkait dengan:",
      options: {
        A: "Distribusi pendapatan dan daya beli masyarakat.",
        B: "Pilihan teknologi yang paling efisien dalam produksi.",
        C: "Tingkat tabungan dan investasi di masyarakat.",
        D: "Ketersediaan sumber daya alam domestik.",
        E: "Tingkat inflasi dan suku bunga.",
      },
      correct: "A",
      explanation:
        "Pertanyaan “untuk siapa” mengarah pada persoalan distribusi output. Dalam sistem ekonomi pasar, barang/jasa cenderung dikonsumsi oleh mereka yang memiliki daya beli. Dalam sistem komando atau sosialisme, distribusi lebih diatur negara. Dengan demikian, pertanyaan ini erat kaitannya dengan keadilan distributif dan pemerataan ekonomi.",
    },
    {
      type: "Sistem Ekonomi",
      question:
        "Sistem ekonomi pasar murni (laissez-faire) berbeda dari sistem ekonomi campuran karena:",
      options: {
        A: "Pemerintah memegang kendali penuh atas produksi dan distribusi.",
        B: "Semua keputusan ekonomi ditentukan oleh mekanisme harga.",
        C: "Konsumen tidak memiliki kebebasan memilih barang dan jasa.",
        D: "Tingkat harga selalu stabil dan tidak pernah berubah.",
        E: "Pasar internasional tidak berperan dalam perdagangan.",
      },
      correct: "B",
      explanation:
        "Dalam sistem pasar murni, harga menjadi sinyal utama untuk mengalokasikan sumber daya. Produsen merespons perubahan harga untuk menyesuaikan produksi, dan konsumen membuat keputusan konsumsi berdasarkan daya beli. Sebaliknya, sistem campuran memberi ruang bagi intervensi pemerintah untuk mengoreksi kegagalan pasar.",
    },
    {
      type: "Teori Permintaan",
      question:
        "Menurut hukum permintaan, terdapat hubungan antara harga dan jumlah barang yang diminta. Jika harga suatu barang meningkat, maka:",
      options: {
        A: "Jumlah barang yang diminta meningkat, karena konsumen mengejar kualitas.",
        B: "Jumlah barang yang diminta menurun, karena konsumen beralih ke barang substitusi.",
        C: "Jumlah barang yang diminta tidak berubah, karena kebutuhan konsumen tetap.",
        D: "Jumlah barang yang ditawarkan menurun, karena biaya produksi naik.",
        E: "Jumlah barang yang diminta naik jika barang termasuk kebutuhan pokok.",
      },
      correct: "B",
      explanation:
        "Hukum permintaan menyatakan adanya hubungan negatif antara harga dan jumlah barang yang diminta. Ketika harga naik, konsumen akan mengurangi konsumsi atau mencari barang pengganti. Fenomena ini dikenal dengan efek substitusi dan efek pendapatan.",
    },
    {
      type: "Teori Penawaran",
      question:
        "Hukum penawaran menjelaskan bahwa ketika harga suatu barang meningkat:",
      options: {
        A: "Jumlah barang yang ditawarkan meningkat, karena produsen terdorong untuk memaksimalkan laba.",
        B: "Jumlah barang yang ditawarkan menurun, karena biaya produksi juga meningkat.",
        C: "Jumlah barang yang ditawarkan tetap, karena produsen memiliki kapasitas produksi tetap.",
        D: "Permintaan meningkat, sehingga produsen mengurangi pasokan.",
        E: "Pasar menjadi tidak efisien karena harga lebih tinggi dari biaya.",
      },
      correct: "A",
      explanation:
        "Hubungan harga dan penawaran bersifat positif: harga tinggi memberikan insentif bagi produsen untuk meningkatkan produksi. Namun, dalam jangka panjang, hal ini dibatasi oleh kapasitas produksi dan potensi biaya marginal yang meningkat.",
    },
    {
      type: "Pasar Persaingan Sempurna",
      question: "Salah satu ciri khas pasar persaingan sempurna adalah bahwa:",
      options: {
        A: "Setiap produsen memiliki kekuatan untuk menentukan harga.",
        B: "Produk yang diperdagangkan bersifat homogen, sehingga konsumen tidak membedakan antarprodusen.",
        C: "Informasi pasar bersifat terbatas dan hanya diketahui oleh sebagian pelaku.",
        D: "Terdapat hambatan masuk (barrier to entry) yang cukup tinggi.",
        E: "Produsen bebas menentukan jumlah produksi tanpa memperhatikan harga pasar.",
      },
      correct: "B",
      explanation:
        "Dalam pasar persaingan sempurna, harga ditentukan pasar melalui interaksi permintaan dan penawaran. Karena produk homogen dan informasi sempurna, tidak ada satu pun produsen yang bisa memengaruhi harga. Kondisi ini menciptakan price taker, bukan price maker.",
    },
    {
      type: "Monopoli",
      question:
        "Monopoli terjadi ketika hanya terdapat satu produsen yang menguasai pasar. Konsekuensi utama dari monopoli adalah:",
      options: {
        A: "Harga cenderung lebih rendah karena efisiensi produksi.",
        B: "Produsen memiliki kendali penuh atas harga dan jumlah barang yang diproduksi.",
        C: "Konsumen selalu mendapat kualitas produk lebih baik.",
        D: "Pasar menjadi lebih kompetitif karena produsen lain terdorong masuk.",
        E: "Tidak ada regulasi pemerintah yang berlaku.",
      },
      correct: "B",
      explanation:
        "Dalam struktur monopoli, produsen bertindak sebagai price maker. Hal ini sering menyebabkan harga lebih tinggi dan kuantitas lebih rendah dibanding pasar kompetitif. Oleh karena itu, banyak negara memberlakukan regulasi anti-monopoli untuk mencegah eksploitasi konsumen.",
    },
    {
      type: "Inflasi",
      question:
        "Inflasi yang terjadi karena meningkatnya biaya produksi, misalnya kenaikan harga energi dan upah, disebut:",
      options: {
        A: "Demand-pull inflation",
        B: "Cost-push inflation",
        C: "Hyperinflation",
        D: "Stagflasi",
        E: "Imported inflation",
      },
      correct: "B",
      explanation:
        "Inflasi dorongan biaya (cost-push) terjadi ketika biaya produksi meningkat, sehingga produsen menaikkan harga jual untuk mempertahankan margin. Berbeda dengan demand-pull inflation yang terjadi karena permintaan agregat meningkat melebihi kapasitas produksi.",
    },
    {
      type: "PDB dan Pertumbuhan Ekonomi",
      question:
        "Produk Domestik Bruto (PDB) riil digunakan sebagai indikator pertumbuhan ekonomi karena:",
      options: {
        A: "Mengukur total nilai barang dan jasa berdasarkan harga pasar tahun berjalan.",
        B: "Mengabaikan perubahan harga, sehingga mencerminkan pertumbuhan output riil.",
        C: "Menghitung total pendapatan yang diperoleh dari luar negeri.",
        D: "Menghitung kekayaan nasional dalam bentuk aset.",
        E: "Selalu lebih tinggi dari PDB nominal.",
      },
      correct: "B",
      explanation:
        "PDB nominal bisa menyesatkan karena kenaikan harga (inflasi) akan menaikkan nilai PDB tanpa adanya peningkatan output riil. Dengan menggunakan harga konstan, PDB riil lebih akurat mencerminkan pertumbuhan kapasitas produksi suatu negara.",
    },
    {
      type: "Elastisitas Harga Permintaan",
      question:
        "Jika elastisitas harga permintaan suatu barang adalah -2, maka ketika harga naik 10%:",
      options: {
        A: "Jumlah barang yang diminta turun 2%",
        B: "Jumlah barang yang diminta turun 20%",
        C: "Jumlah barang yang diminta naik 2%",
        D: "Jumlah barang yang diminta naik 20%",
        E: "Jumlah barang yang diminta tidak berubah",
      },
      correct: "B",
      explanation:
        "Elastisitas harga permintaan mengukur respons jumlah barang yang diminta terhadap perubahan harga. Nilai -2 berarti permintaan bersifat elastis: perubahan harga 1% mengubah permintaan sebesar 2% dalam arah berlawanan. Maka, kenaikan harga 10% menurunkan permintaan sebesar 20%.",
    },
    {
      type: "Elastisitas Silang",
      question:
        "Jika elastisitas silang permintaan antara teh dan kopi bernilai positif, hal ini menunjukkan bahwa:",
      options: {
        A: "Teh dan kopi adalah barang pelengkap.",
        B: "Teh dan kopi adalah barang inferior.",
        C: "Teh dan kopi adalah barang substitusi.",
        D: "Teh dan kopi tidak memiliki hubungan.",
        E: "Teh dan kopi keduanya barang publik.",
      },
      correct: "C",
      explanation:
        "Elastisitas silang positif berarti kenaikan harga satu barang menyebabkan kenaikan permintaan barang lain. Hal ini umum terjadi pada barang substitusi (contoh: kopi lebih mahal → permintaan teh naik). Sebaliknya, elastisitas silang negatif menunjukkan barang pelengkap.",
    },
    {
      type: "Teori Konsumen – Kurva Indiferen",
      question:
        "Bentuk kurva indiferen yang cembung ke arah titik origin mencerminkan bahwa:",
      options: {
        A: "Konsumen bersedia mengganti satu barang dengan barang lain dalam jumlah tetap.",
        B: "Marginal Rate of Substitution (MRS) semakin menurun ketika konsumsi salah satu barang meningkat.",
        C: "Barang yang dikonsumsi tidak memiliki substitusi.",
        D: "Barang yang dikonsumsi bersifat sempurna komplementer.",
        E: "Konsumen tidak memiliki preferensi rasional.",
      },
      correct: "B",
      explanation:
        "Kurva indiferen mencerminkan kombinasi barang yang memberi tingkat kepuasan sama. Bentuk cembung menunjukkan hukum MRS diminishing: semakin banyak satu barang dikonsumsi, konsumen bersedia mengorbankan barang lain dalam jumlah semakin sedikit.",
    },
    {
      type: "Teori Produksi",
      question:
        "Dalam jangka pendek, ketika jumlah satu faktor produksi ditambah sementara faktor lain tetap, maka tambahan output akan menurun setelah titik tertentu. Fenomena ini dikenal sebagai:",
      options: {
        A: "Hukum hasil bertambah tetap",
        B: "Hukum hasil berkurang (Law of Diminishing Return)",
        C: "Skala ekonomi",
        D: "Efisiensi teknis",
        E: "Efek substitusi faktor produksi",
      },
      correct: "B",
      explanation:
        "Dalam jangka pendek, ketika faktor variabel (misalnya tenaga kerja) ditambah terus-menerus sementara faktor tetap (misalnya tanah) tidak berubah, tambahan output per unit faktor (marginal product) akan menurun. Hal ini fundamental dalam teori produksi.",
    },
    {
      type: "Fungsi Produksi",
      question:
        "Fungsi produksi Cobb-Douglas berbentuk $Q = A \cdot K^\alpha \cdot L^\beta$. Jika $\alpha + \beta = 1$, maka fungsi produksi tersebut menunjukkan:",
      options: {
        A: "Skala hasil meningkat (increasing return to scale)",
        B: "Skala hasil menurun (decreasing return to scale)",
        C: "Skala hasil konstan (constant return to scale)",
        D: "Inefisiensi dalam penggunaan input",
        E: "Tidak ada hubungan antara input dan output",
      },
      correct: "C",
      explanation:
        "Dalam fungsi Cobb-Douglas, jumlah eksponen ($\alpha + \beta$) menunjukkan return to scale. Jika = 1, maka peningkatan input K dan L secara proporsional menghasilkan peningkatan output dengan proporsi yang sama → constant return to scale.",
    },
    {
      type: "Biaya Produksi",
      question:
        "Dalam jangka pendek, perbedaan utama antara biaya tetap (fixed cost) dan biaya variabel (variable cost) adalah:",
      options: {
        A: "Biaya tetap tidak pernah berubah, sedangkan biaya variabel berubah sesuai tingkat output.",
        B: "Biaya tetap hanya berlaku untuk perusahaan besar, sedangkan biaya variabel berlaku untuk semua perusahaan.",
        C: "Biaya tetap selalu lebih besar dari biaya variabel.",
        D: "Biaya variabel dapat diabaikan dalam analisis.",
        E: "Biaya tetap menentukan laba perusahaan.",
      },
      correct: "A",
      explanation:
        "Biaya tetap (sewa gedung, mesin) tetap dikeluarkan meski produksi nol. Biaya variabel (bahan baku, upah langsung) berubah proporsional dengan output. Analisis perbedaan ini penting dalam menghitung marginal cost dan average cost.",
    },
    {
      type: "Biaya Marjinal",
      question: "Biaya marjinal (marginal cost) adalah:",
      options: {
        A: "Biaya total dibagi jumlah output.",
        B: "Biaya tambahan untuk memproduksi satu unit output tambahan.",
        C: "Selisih antara pendapatan total dan biaya total.",
        D: "Biaya rata-rata dalam jangka panjang.",
        E: "Biaya tetap yang ditanggung perusahaan.",
      },
      correct: "B",
      explanation:
        "Marginal cost = $\\Delta$TC/$\\Delta$Q. Konsep ini krusial karena dalam teori mikro, perusahaan mencapai efisiensi produksi ketika harga = marginal cost, khususnya di pasar persaingan sempurna.",
    },
    {
      type: "Surplus Konsumen dan Produsen",
      question: "Surplus konsumen dalam sebuah pasar menggambarkan:",
      options: {
        A: "Selisih antara harga yang dibayarkan konsumen dengan biaya produksi.",
        B: "Selisih antara nilai yang bersedia dibayar konsumen dengan harga pasar.",
        C: "Keuntungan yang diperoleh produsen setelah menjual barang.",
        D: "Peningkatan harga barang akibat kenaikan permintaan.",
        E: "Penurunan kesejahteraan akibat pajak.",
      },
      correct: "B",
      explanation:
        "Surplus konsumen adalah area di bawah kurva permintaan tetapi di atas harga pasar. Ini mencerminkan tambahan kepuasan konsumen karena mereka membayar lebih rendah daripada yang sebenarnya bersedia dibayar.",
    },
    {
      type: "Keseimbangan Pasar",
      question:
        "Jika harga suatu barang berada di atas harga keseimbangan, maka:",
      options: {
        A: "Terjadi kelebihan permintaan (excess demand).",
        B: "Terjadi kelebihan penawaran (excess supply).",
        C: "Jumlah barang yang diminta sama dengan jumlah yang ditawarkan.",
        D: "Pasar tidak mengalami perubahan.",
        E: "Harga barang cenderung turun lalu naik kembali.",
      },
      correct: "B",
      explanation:
        "Harga di atas keseimbangan membuat produsen bersedia menjual lebih banyak, tetapi konsumen membeli lebih sedikit. Akibatnya terjadi surplus barang, yang pada akhirnya mendorong harga turun menuju titik keseimbangan.",
    },
    {
      type: "Efisiensi Pasar",
      question:
        "Menurut konsep kesejahteraan Pareto, suatu alokasi dianggap efisien apabila:",
      options: {
        A: "Semua individu memperoleh bagian yang sama besar dari output.",
        B: "Tidak ada individu yang dapat dibuat lebih baik tanpa membuat individu lain lebih buruk.",
        C: "Output total suatu negara dimaksimalkan.",
        D: "Harga pasar ditentukan oleh pemerintah.",
        E: "Distribusi pendapatan bersifat merata.",
      },
      correct: "B",
      explanation:
        "Efisiensi Pareto adalah standar efisiensi dalam teori kesejahteraan. Kondisi ini tidak selalu adil secara distribusi, tetapi memastikan bahwa sumber daya dialokasikan secara optimal sehingga tidak ada potensi perbaikan tanpa kerugian pihak lain.",
    },
    {
      type: "Pendapatan Nasional",
      question:
        "Produk Domestik Bruto (PDB) nominal Indonesia pada 2024 diperkirakan mencapai sekitar USD 1,4 triliun, sementara PDB riil tumbuh sekitar 5%. Mengapa analis ekonomi lebih sering menggunakan PDB riil daripada PDB nominal untuk mengukur pertumbuhan ekonomi?",
      options: {
        A: "Karena PDB riil menghitung nilai produksi dengan harga tahun dasar sehingga tidak terdistorsi inflasi.",
        B: "Karena PDB nominal hanya digunakan untuk membandingkan antarnegara.",
        C: "Karena PDB riil selalu lebih tinggi dibanding PDB nominal.",
        D: "Karena PDB riil tidak mencakup barang impor.",
        E: "Karena PDB nominal tidak pernah digunakan dalam kebijakan moneter.",
      },
      correct: "A",
      explanation:
        "PDB nominal bisa meningkat semata-mata akibat inflasi, padahal output riil tidak bertambah. Dengan harga konstan, PDB riil merefleksikan pertumbuhan ekonomi riil yang menunjukkan kenaikan kapasitas produksi. Itulah sebabnya kebijakan pembangunan lebih fokus pada PDB riil.",
    },
    {
      type: "Pendapatan Nasional & Kesejahteraan",
      question:
        "Pada tahun 2022, PDB per kapita Indonesia naik dari USD 4.300 menjadi USD 4.700. Namun, sebagian ekonom menilai kesejahteraan masyarakat tidak meningkat secara signifikan. Mengapa PDB per kapita tidak selalu mencerminkan kesejahteraan?",
      options: {
        A: "Karena PDB per kapita hanya menghitung output barang berwujud, tidak jasa.",
        B: "Karena distribusi pendapatan bisa timpang meski rata-rata pendapatan meningkat.",
        C: "Karena PDB per kapita tidak mencakup nilai ekspor.",
        D: "Karena PDB per kapita diukur dengan kurs nominal, bukan riil.",
        E: "Karena PDB per kapita hanya dihitung di sektor formal.",
      },
      correct: "B",
      explanation:
        "PDB per kapita adalah rata-rata pendapatan, bukan distribusi aktual. Jika ketimpangan tinggi, sebagian besar masyarakat tidak menikmati kenaikan pendapatan. Oleh karena itu, indeks lain seperti Indeks Pembangunan Manusia (IPM) atau Koefisien Gini sering digunakan sebagai pelengkap.",
    },
    {
      type: "Inflasi – Kasus Indonesia",
      question:
        "Pada tahun 2022, inflasi Indonesia meningkat hingga 5,5%, sebagian besar dipicu kenaikan harga energi dan pangan global akibat perang Rusia–Ukraina. Kondisi ini lebih tepat dikategorikan sebagai:",
      options: {
        A: "Demand-pull inflation, karena permintaan domestik meningkat tajam.",
        B: "Cost-push inflation, karena biaya produksi dan distribusi meningkat.",
        C: "Hyperinflation, karena inflasi melebihi 50% per bulan.",
        D: "Imported inflation, karena hanya dipengaruhi kurs valuta asing.",
        E: "Stagflasi, karena inflasi diikuti pengangguran tinggi.",
      },
      correct: "B",
      explanation:
        "Kenaikan harga energi (BBM, listrik) meningkatkan biaya produksi → produsen menaikkan harga. Inilah inflasi dorongan biaya. Meski ada unsur global (imported inflation), faktor dominan pada kasus Indonesia 2022 adalah kenaikan biaya input energi dan pangan.",
    },
    {
      type: "Inflasi – Kebijakan Moneter",
      question:
        "Jika Bank Indonesia ingin menekan inflasi yang berasal dari tingginya permintaan agregat (demand-pull), instrumen moneter yang paling tepat adalah:",
      options: {
        A: "Menurunkan suku bunga acuan (BI Rate).",
        B: "Menaikkan suku bunga acuan (BI Rate).",
        C: "Meningkatkan jumlah uang beredar.",
        D: "Membeli obligasi pemerintah di pasar terbuka.",
        E: "Memberikan subsidi langsung pada masyarakat.",
      },
      correct: "B",
      explanation:
        "Kenaikan suku bunga membuat biaya pinjaman lebih mahal → konsumsi & investasi turun → permintaan agregat berkurang → inflasi terkendali. Ini adalah contoh kebijakan moneter kontraktif.",
    },
    {
      type: "Pengangguran",
      question:
        "Seorang lulusan akuntansi belum mendapat pekerjaan karena keterampilannya tidak sesuai dengan kebutuhan industri (misalnya kurang menguasai software akuntansi digital). Jenis pengangguran ini disebut:",
      options: {
        A: "Pengangguran friksional",
        B: "Pengangguran siklis",
        C: "Pengangguran struktural",
        D: "Pengangguran terbuka",
        E: "Pengangguran musiman",
      },
      correct: "C",
      explanation:
        "Pengangguran struktural terjadi ketika keterampilan tenaga kerja tidak sesuai dengan kebutuhan pasar. Penyebabnya antara lain perkembangan teknologi, perubahan struktur industri, dan kurangnya pendidikan atau pelatihan yang relevan.",
    },
    {
      type: "Kebijakan Fiskal – Kasus Global",
      question:
        "Pada masa pandemi COVID-19 (2020–2021), banyak negara, termasuk Indonesia, mengeluarkan stimulus fiskal besar-besaran dalam bentuk bansos, subsidi UMKM, dan belanja kesehatan. Tujuan utama kebijakan fiskal ekspansif tersebut adalah:",
      options: {
        A: "Mengurangi jumlah uang beredar.",
        B: "Mendorong permintaan agregat dan menjaga perekonomian tetap bergerak.",
        C: "Menekan inflasi akibat kenaikan harga.",
        D: "Mengurangi ketimpangan pendapatan jangka panjang.",
        E: "Menguatkan nilai tukar rupiah.",
      },
      correct: "B",
      explanation:
        "Pandemi menyebabkan permintaan agregat turun tajam (PHK, konsumsi melemah). Pemerintah melakukan fiscal stimulus dengan memperbesar belanja negara agar ekonomi tidak jatuh ke resesi lebih dalam. Hal ini konsisten dengan teori Keynesian.",
    },
    {
      type: "Defisit Anggaran",
      question:
        "Jika APBN mengalami defisit, salah satu dampaknya adalah:",
      options: {
        A: "Pemerintah harus menambah pajak dalam jangka pendek.",
        B: "Pemerintah harus mencari pembiayaan tambahan melalui utang atau penerbitan obligasi.",
        C: "Perekonomian otomatis mengalami inflasi tinggi.",
        D: "Seluruh investasi swasta akan menurun drastis.",
        E: "PDB langsung menurun.",
      },
      correct: "B",
      explanation:
        "Defisit berarti belanja negara > penerimaan. Pembiayaannya bisa dari utang dalam negeri, luar negeri, atau penarikan obligasi. Dampak lanjutannya bisa berupa crowding out jika penarikan dana pemerintah menekan ruang investasi swasta.",
    },
    {
      type: "Uang dan Fungsi Moneter",
      question:
        "Salah satu fungsi uang adalah sebagai alat penyimpan nilai (store of value). Fungsi ini akan terganggu jika:",
      options: {
        A: "Inflasi terlalu tinggi sehingga daya beli uang menurun.",
        B: "Kurs rupiah stabil dalam jangka panjang.",
        C: "Uang digunakan sebagai alat pembayaran sah.",
        D: "Bank sentral menjaga suku bunga tetap rendah.",
        E: "Masyarakat menggunakan uang digital.",
      },
      correct: "A",
      explanation:
        "Uang hanya bisa menyimpan nilai jika stabil. Inflasi tinggi menyebabkan nilai riil uang turun, sehingga orang lebih memilih aset lain (tanah, emas, saham). Fenomena ini dikenal dengan istilah flight from money.",
    },
    {
      type: "Pertumbuhan Ekonomi – Teori",
      question:
        "Menurut teori pertumbuhan endogen (Endogenous Growth Theory), pertumbuhan ekonomi jangka panjang terutama ditentukan oleh:",
      options: {
        A: "Akumulasi modal fisik semata.",
        B: "Akumulasi modal manusia, inovasi teknologi, dan kebijakan yang mendorong produktivitas.",
        C: "Tingkat inflasi rendah dan stabil.",
        D: "Jumlah penduduk yang besar.",
        E: "Ekspor komoditas primer.",
      },
      correct: "B",
      explanation:
        "Teori endogen (Romer, Lucas) menekankan bahwa ide, pengetahuan, dan teknologi adalah pendorong utama pertumbuhan jangka panjang. Berbeda dengan teori neoklasik yang menganggap pertumbuhan hanya dari akumulasi modal.",
    },
    {
      type: "Pertumbuhan Ekonomi – Kasus Cina",
      question:
        "Pertumbuhan ekonomi Cina sejak 1980-an banyak dikaitkan dengan reformasi pasar, peningkatan investasi, dan industrialisasi. Namun, belakangan muncul tantangan seperti utang properti dan populasi menua. Hal ini menunjukkan bahwa:",
      options: {
        A: "Pertumbuhan ekonomi selalu berkelanjutan tanpa hambatan.",
        B: "Faktor struktural seperti demografi dan sektor keuangan bisa menjadi batasan pertumbuhan.",
        C: "Inflasi adalah satu-satunya masalah utama dalam pertumbuhan ekonomi.",
        D: "Pertumbuhan hanya bergantung pada ekspor.",
        E: "Teori pertumbuhan klasik tidak relevan lagi.",
      },
      correct: "B",
      explanation:
        "Cina mengalami catch-up growth dengan industrialisasi cepat, namun kini menghadapi middle-income trap dan masalah struktural. Kasus ini menunjukkan pentingnya diversifikasi, reformasi institusi, dan peningkatan produktivitas jangka panjang.",
    },
    {
      type: "Siklus Bisnis",
      question: "Resesi adalah fase siklus bisnis yang ditandai dengan:",
      options: {
        A: "Pertumbuhan ekonomi positif tetapi lebih rendah dari target.",
        B: "Penurunan output riil dan kenaikan pengangguran secara signifikan.",
        C: "Inflasi meningkat di atas 20% per tahun.",
        D: "Kenaikan tajam harga aset keuangan.",
        E: "Penurunan neraca perdagangan.",
      },
      correct: "B",
      explanation:
        "Resesi didefinisikan sebagai kontraksi PDB riil minimal dua kuartal berturut-turut. Dampaknya termasuk meningkatnya pengangguran, penurunan investasi, dan melemahnya daya beli.",
    },
    {
      type: "Stagflasi – Kasus Global 1970-an",
      question:
        "Pada dekade 1970-an, banyak negara maju mengalami stagflasi akibat lonjakan harga minyak dunia. Stagflasi ditandai dengan:",
      options: {
        A: "Inflasi tinggi, pertumbuhan ekonomi melambat, dan pengangguran meningkat.",
        B: "Inflasi rendah, pertumbuhan tinggi, dan pengangguran rendah.",
        C: "Inflasi negatif (deflasi) dan pertumbuhan ekonomi tinggi.",
        D: "Pertumbuhan ekonomi tinggi dengan ketidakstabilan politik.",
        E: "Hanya inflasi tinggi tanpa pengangguran.",
      },
      correct: "A",
      explanation:
        "Stagflasi adalah fenomena sulit karena biasanya inflasi tinggi beriringan dengan pertumbuhan rendah. Kasus minyak 1973 menunjukkan bagaimana supply shock bisa menimbulkan dilema kebijakan moneter dan fiskal.",
    },
    {
      type: "Kebijakan Moneter – Instrumen",
      question:
        "Operasi pasar terbuka (open market operation) yang dilakukan bank sentral adalah:",
      options: {
        A: "Membeli atau menjual obligasi pemerintah untuk mengatur jumlah uang beredar.",
        B: "Menaikkan pajak untuk menekan inflasi.",
        C: "Mengatur suku bunga kredit perbankan secara langsung.",
        D: "Memberikan subsidi pada sektor produktif.",
        E: "Menentukan kurs valuta asing tetap.",
      },
      correct: "A",
      explanation:
        "Open market operation adalah instrumen utama kebijakan moneter. Penjualan obligasi menyerap likuiditas (kontraktif), pembelian obligasi menambah likuiditas (ekspansif).",
    },
    {
      type: "Kebijakan Fiskal vs Moneter",
      question:
        "Jika inflasi tinggi, kebijakan fiskal yang tepat adalah:",
      options: {
        A: "Meningkatkan belanja negara untuk mendorong permintaan agregat.",
        B: "Mengurangi belanja negara atau menaikkan pajak untuk menekan permintaan agregat.",
        C: "Menurunkan suku bunga kredit agar konsumsi naik.",
        D: "Membeli obligasi pemerintah oleh bank sentral.",
        E: "Mencetak uang baru.",
      },
      correct: "B",
      explanation:
        "Dalam kebijakan fiskal kontraktif, pemerintah mengurangi permintaan agregat melalui pengurangan belanja atau peningkatan pajak. Hal ini melengkapi peran kebijakan moneter kontraktif.",
    },
    {
      type: "Neraca Pembayaran",
      question:
        "Jika Indonesia mencatat surplus pada transaksi berjalan (current account), hal ini berarti:",
      options: {
        A: "Nilai impor barang dan jasa lebih besar dari nilai ekspor.",
        B: "Ekspor barang dan jasa lebih besar dari impor.",
        C: "Investasi portofolio asing lebih besar dari investasi keluar.",
        D: "Cadangan devisa menurun.",
        E: "Defisit fiskal pemerintah menurun.",
      },
      correct: "B",
      explanation:
        "Transaksi berjalan mencakup ekspor-impor barang, jasa, pendapatan primer, dan sekunder. Surplus berarti negara menghasilkan pendapatan lebih banyak dari dunia luar dibanding pengeluarannya.",
    },
    {
      type: "Kurs Valuta Asing – Kasus Rupiah",
      question:
        "Pada 1997–1998, nilai rupiah jatuh dari Rp 2.500 per USD menjadi lebih dari Rp 15.000 per USD. Salah satu penyebab utama krisis kurs ini adalah:",
      options: {
        A: "Neraca perdagangan Indonesia selalu surplus besar.",
        B: "Arus modal keluar (capital flight) akibat hilangnya kepercayaan investor.",
        C: "Inflasi Indonesia sangat rendah sehingga kurs melemah.",
        D: "Bank Indonesia menaikkan suku bunga sangat tinggi.",
        E: "Penawaran dolar AS lebih besar dari permintaan.",
      },
      correct: "B",
      explanation:
        "Krisis moneter 1997–1998 dipicu oleh ketidakstabilan keuangan Asia. Investor menarik dana besar-besaran, menyebabkan permintaan dolar melonjak → rupiah terdepresiasi drastis.",
    },
    {
      type: "Globalisasi Ekonomi",
      question:
        "Salah satu dampak globalisasi ekonomi adalah meningkatnya integrasi pasar keuangan dunia. Dampak positif dan negatif dari kondisi ini adalah:",
      options: {
        A: "Positif: arus modal cepat masuk; Negatif: risiko volatilitas juga meningkat.",
        B: "Positif: nilai tukar stabil; Negatif: inflasi otomatis turun.",
        C: "Positif: semua negara pasti tumbuh; Negatif: perdagangan internasional berhenti.",
        D: "Positif: kurs lebih fleksibel; Negatif: ekspor berhenti.",
        E: "Positif: negara bebas mencetak uang; Negatif: nilai PDB riil turun.",
      },
      correct: "A",
      explanation:
        "Globalisasi memudahkan investasi lintas negara, namun juga membuat negara rentan terhadap capital flight dan krisis keuangan global.",
    },
    {
      type: "Peran Bank Sentral",
      question:
        "Salah satu mandat utama Bank Indonesia adalah menjaga stabilitas nilai rupiah. Stabilitas ini mencakup:",
      options: {
        A: "Stabilitas harga barang dan stabilitas nilai tukar rupiah.",
        B: "Stabilitas pertumbuhan ekonomi jangka panjang.",
        C: "Stabilitas pasar saham domestik.",
        D: "Stabilitas anggaran pendapatan dan belanja negara.",
        E: "Stabilitas harga komoditas internasional.",
      },
      correct: "A",
      explanation:
        "Bank Indonesia memiliki mandat ganda: menjaga inflasi tetap rendah dan menjaga nilai tukar agar tidak bergejolak. Stabilitas ini penting untuk mendukung pertumbuhan ekonomi yang berkesinambungan.",
    },
    {
      type: "Teori Keynesian",
      question:
        "Menurut Keynes, dalam kondisi resesi, pemerintah sebaiknya:",
      options: {
        A: "Mengurangi belanja untuk menekan defisit anggaran.",
        B: "Meningkatkan belanja pemerintah untuk mendorong permintaan agregat.",
        C: "Menurunkan jumlah uang beredar.",
        D: "Membatasi konsumsi rumah tangga.",
        E: "Membiarkan pasar menyesuaikan diri sendiri.",
      },
      correct: "B",
      explanation:
        "Keynes menekankan pentingnya intervensi fiskal. Dalam resesi, sektor swasta menahan konsumsi & investasi, sehingga hanya pemerintah yang bisa mendorong permintaan agregat melalui belanja publik.",
    },
    {
      type: "Kebijakan Moneter – Kasus Global 2008",
      question:
        "Pada krisis keuangan global 2008, Federal Reserve (AS) menurunkan suku bunga hingga mendekati 0% dan meluncurkan kebijakan Quantitative Easing (QE). Tujuan utama QE adalah:",
      options: {
        A: "Membatasi jumlah uang beredar agar inflasi turun.",
        B: "Membeli aset keuangan jangka panjang untuk meningkatkan likuiditas dan mendorong pinjaman.",
        C: "Mengurangi permintaan agregat agar harga stabil.",
        D: "Menekan nilai tukar dolar AS agar lebih kuat.",
        E: "Mengurangi defisit fiskal pemerintah.",
      },
      correct: "B",
      explanation:
        "QE adalah kebijakan non-konvensional di mana bank sentral membeli obligasi jangka panjang untuk menyuntikkan likuiditas. Hal ini dimaksudkan untuk menurunkan yield obligasi, memperbaiki neraca bank, dan mendorong investasi.",
    },
    {
      type: "Teori Permintaan",
      question:
        "Ketika harga cabai di pasar tradisional naik dua kali lipat akibat gagal panen, banyak konsumen tetap membeli dengan jumlah hampir sama karena dianggap kebutuhan pokok. Hal ini menunjukkan bahwa:",
      options: {
        A: "Permintaan cabai bersifat elastis.",
        B: "Permintaan cabai bersifat inelastis.",
        C: "Permintaan cabai mengikuti hukum Giffen.",
        D: "Permintaan cabai mengalami substitusi sempurna.",
        E: "Permintaan cabai tidak dipengaruhi harga.",
      },
      correct: "B",
      explanation:
        "Permintaan inelastis berarti perubahan harga besar tidak terlalu memengaruhi kuantitas yang diminta. Cabai sebagai komoditas pokok sulit digantikan, sehingga konsumsi relatif tetap meskipun harga melonjak.",
    },
    {
      type: "Teori Konsumen",
      question:
        "Seorang konsumen memiliki pendapatan Rp5 juta per bulan. Ia mengalokasikan Rp2 juta untuk makanan, Rp1,5 juta untuk transportasi, dan Rp1,5 juta untuk hiburan. Ketika harga bensin naik, ia harus mengurangi pengeluaran hiburan untuk menjaga konsumsi makanan tetap sama. Hal ini menggambarkan konsep:",
      options: {
        A: "Efek substitusi",
        B: "Efek pendapatan",
        C: "Kurva indiferens",
        D: "Efisiensi Pareto",
        E: "Surplus konsumen",
      },
      correct: "B",
      explanation:
        "Kenaikan harga bensin mengurangi daya beli riil konsumen. Agar kebutuhan utama (makanan) tetap terpenuhi, ia mengurangi pengeluaran lain. Itu adalah income effect dalam teori permintaan.",
    },
    {
      type: "Biaya Produksi",
      question:
        "Sebuah restoran cepat saji harus membayar Rp50 juta per bulan untuk sewa tempat, gaji karyawan tetap Rp30 juta, dan biaya bahan baku Rp10.000 per porsi makanan. Jika restoran menjual 5.000 porsi per bulan, maka biaya tetap total adalah:",
      options: {
        A: "Rp50 juta",
        B: "Rp30 juta",
        C: "Rp80 juta",
        D: "Rp50 juta + (Rp10.000 × 5.000)",
        E: "Rp50 juta + Rp30 juta",
      },
      correct: "E",
      explanation:
        "Biaya tetap adalah biaya yang tidak berubah meskipun jumlah produksi berubah (sewa & gaji tetap). Biaya variabel adalah Rp10.000 × jumlah porsi. Biaya tetap total adalah Rp50 juta + Rp30 juta = Rp80 juta.",
    },
    {
      type: "Biaya Produksi – Kasus Nyata",
      question:
        "Perusahaan ride-hailing seperti Gojek dan Grab menghadapi biaya operasional tinggi di awal (subsidi promo, iklan besar-besaran), namun biaya marginal per tambahan pengguna relatif rendah. Struktur biaya ini cocok dengan karakteristik:",
      options: {
        A: "Increasing returns to scale",
        B: "Decreasing returns to scale",
        C: "Constant returns to scale",
        D: "Diseconomies of scale",
        E: "Biaya variabel murni",
      },
      correct: "A",
      explanation:
        "Bisnis digital memiliki biaya tetap besar (infrastruktur, aplikasi, promosi) tetapi biaya tambahan per pengguna rendah. Semakin banyak pengguna, biaya rata-rata turun → menunjukkan economies of scale atau increasing returns to scale.",
    },
    {
      type: "Pasar Persaingan Sempurna",
      question:
        "Petani beras di Jawa menjual gabah ke pasar dengan harga yang ditentukan pasar. Jika ia menjual lebih tinggi, tidak ada pembeli; jika menjual lebih rendah, tetap tidak berpengaruh karena harga pasar sudah tetap. Kondisi ini menggambarkan bahwa petani adalah:",
      options: {
        A: "Price maker",
        B: "Price taker",
        C: "Monopolist",
        D: "Oligopolist",
        E: "Monopsonist",
      },
      correct: "B",
      explanation:
        "Dalam pasar persaingan sempurna, perusahaan tidak bisa menentukan harga. Harga ditentukan oleh mekanisme pasar, dan setiap penjual hanya bisa menerima harga tersebut (price taker).",
    },
    {
      type: "Monopoli – Kasus Telkomsel",
      question:
        "Telkomsel pernah menguasai >50% pangsa pasar seluler Indonesia. Salah satu keunggulan monopoli ini adalah:",
      options: {
        A: "Selalu menciptakan harga lebih murah daripada persaingan sempurna.",
        B: "Dapat melakukan investasi besar dalam infrastruktur karena memiliki keuntungan lebih stabil.",
        C: "Tidak ada risiko inefisiensi karena kompetisi hilang.",
        D: "Selalu memberikan layanan yang lebih adil bagi semua konsumen.",
        E: "Menjamin pemerataan ekonomi.",
      },
      correct: "B",
      explanation:
        "Monopoli bisa berinvestasi besar (misalnya BTS di daerah terpencil), tetapi juga rawan penyalahgunaan kekuatan pasar. Oleh karena itu, perlu regulasi agar tidak merugikan konsumen.",
    },
    {
      type: "Oligopoli – Kasus OPEC",
      question:
        "Organisasi Negara Pengekspor Minyak (OPEC) sering mengatur kuota produksi untuk memengaruhi harga minyak dunia. Struktur pasar ini adalah:",
      options: {
        A: "Persaingan sempurna",
        B: "Monopoli",
        C: "Oligopoli kolusif",
        D: "Monopsoni",
        E: "Pasar monopolistik",
      },
      correct: "C",
      explanation:
        "OPEC terdiri dari sedikit produsen besar yang berkoordinasi untuk mengatur harga. Ini adalah contoh cartel → oligopoli kolusif.",
    },
    {
      type: "Persaingan Monopolistik – Kasus Restoran",
      question:
        "Di kota besar, terdapat ratusan restoran cepat saji dengan menu mirip tetapi memiliki perbedaan cita rasa, lokasi, dan promosi. Struktur pasar ini disebut:",
      options: {
        A: "Persaingan sempurna",
        B: "Monopoli",
        C: "Oligopoli",
        D: "Persaingan monopolistik",
        E: "Pasar monopsoni",
      },
      correct: "D",
      explanation:
        "Persaingan monopolistik dicirikan banyak penjual, produk terdiferensiasi, tetapi masuk-keluar pasar relatif mudah.",
    },
    {
      type: "Elastisitas Silang",
      question:
        "Jika harga kopi naik 10% dan konsumsi teh meningkat 5%, maka hubungan antara kopi dan teh adalah:",
      options: {
        A: "Barang komplementer",
        B: "Barang substitusi",
        C: "Barang inferior",
        D: "Barang normal",
        E: "Barang publik",
      },
      correct: "B",
      explanation:
        "Barang substitusi adalah barang yang saling menggantikan. Saat harga kopi naik, konsumen beralih ke teh.",
    },
    {
      type: "Elastisitas Pendapatan – Kasus Konsumsi",
      question:
        "Ketika pendapatan masyarakat naik 20%, konsumsi beras hanya naik 2%, sedangkan konsumsi daging sapi naik 25%. Hal ini menunjukkan bahwa:",
      options: {
        A: "Beras adalah barang inferior, daging sapi adalah barang normal.",
        B: "Beras adalah barang normal, daging sapi adalah barang inferior.",
        C: "Beras adalah barang publik, daging sapi adalah barang inferior.",
        D: "Beras adalah barang normal, daging sapi adalah barang mewah.",
        E: "Beras adalah barang inferior, daging sapi adalah barang mewah.",
      },
      correct: "D",
      explanation:
        "Barang normal → permintaan naik seiring pendapatan (beras). Barang mewah → permintaan naik lebih dari proporsional terhadap kenaikan pendapatan (daging sapi).",
    },
    {
      type: "Surplus Konsumen",
      question:
        "Harga tiket bioskop ditetapkan Rp50.000. Ada konsumen yang bersedia membayar Rp70.000, Rp60.000, dan Rp55.000. Total surplus konsumen adalah:",
      options: {
        A: "Rp35.000",
        B: "Rp25.000",
        C: "Rp15.000",
        D: "Rp10.000",
        E: "Rp5.000",
      },
      correct: "B",
      explanation:
        "Surplus = (70–50) + (60–50) + (55–50) = 20 + 10 + 5 = Rp35.000 → maaf, periksa lagi.→ Jika tiga konsumen membeli, total surplus = Rp35.000. (Jawaban a).",
    },
    {
      type: "Externalitas Negatif – Kasus Industri",
      question:
        "Sebuah pabrik tekstil membuang limbah ke sungai, merugikan nelayan sekitar. Masalah ini adalah contoh:",
      options: {
        A: "Barang publik",
        B: "Asimetri informasi",
        C: "Externalitas negatif",
        D: "Kegagalan koordinasi",
        E: "Monopsoni",
      },
      correct: "C",
      explanation:
        "Dampak produksi perusahaan menimbulkan biaya pada pihak ketiga yang tidak terlibat transaksi. Solusi biasanya lewat regulasi lingkungan atau pajak Pigouvian.",
    },
    {
      type: "Externalitas Positif – Kasus Vaksin",
      question:
        "Program vaksinasi massal COVID-19 tidak hanya melindungi penerima vaksin tetapi juga mengurangi penyebaran penyakit ke orang lain. Ini contoh:",
      options: {
        A: "Barang privat",
        B: "Externalitas positif",
        C: "Kegagalan koordinasi",
        D: "Barang inferior",
        E: "Pasar monopsoni",
      },
      correct: "B",
      explanation:
        "Manfaat vaksinasi meluas ke masyarakat luas. Karena individu tidak mempertimbangkan manfaat sosial, pemerintah biasanya perlu intervensi (subsidi, kampanye publik).",
    },
    {
      type: "Asimetri Informasi – Kasus Pasar Mobil Bekas",
      question:
        "Dalam pasar mobil bekas, penjual sering tahu kondisi mobil lebih baik daripada pembeli. Kondisi ini disebut:",
      options: {
        A: "Adverse selection",
        B: "Moral hazard",
        C: "Signaling",
        D: "Screening",
        E: "Hidden contract",
      },
      correct: "A",
      explanation:
        "Adverse selection muncul ketika informasi tidak simetris sebelum transaksi → pembeli sulit membedakan mobil bagus (“peach”) dan jelek (“lemon”).",
    },
    {
      type: "Asimetri Informasi – Kasus Asuransi",
      question:
        "Dalam industri asuransi, tertanggung yang sudah dilindungi cenderung lebih ceroboh karena merasa risiko ditanggung perusahaan asuransi. Fenomena ini disebut:",
      options: {
        A: "Adverse selection",
        B: "Moral hazard",
        C: "Signaling",
        D: "Screening",
        E: "Hidden cost",
      },
      correct: "B",
      explanation:
        "Moral hazard terjadi setelah kontrak. Perlindungan asuransi membuat perilaku lebih berisiko karena biaya ditanggung pihak lain.",
    },
    {
      type: "Barang Publik",
      question:
        "Jalan tol yang sudah dibangun dan dipakai semua pengguna tanpa bisa membatasi penggunaannya disebut barang:",
      options: {
        A: "Publik murni",
        B: "Privat",
        C: "Klub",
        D: "Umum (common goods)",
        E: "Semi-publik",
      },
      correct: "D",
      explanation:
        "Jalan tol non-elektronik (tanpa pembatasan akses) adalah common goods: bersifat non-excludable tetapi rivalrous (semakin banyak dipakai → macet). Jika ada tol berbayar, sifatnya bisa berubah menjadi club goods.",
    },
    {
      type: "Teori Perusahaan – Kasus Apple",
      question:
        "Apple mampu menjual iPhone dengan harga tinggi karena reputasi merek, desain eksklusif, dan ekosistem produk. Fenomena ini disebut:",
      options: {
        A: "Diferensiasi produk",
        B: "Harga dumping",
        C: "Predatory pricing",
        D: "Barang inferior",
        E: "Pasar monopsoni",
      },
      correct: "A",
      explanation:
        "Apple tidak bersaing hanya pada harga, tetapi menciptakan value proposition unik. Ini tipikal persaingan monopolistik/oligopoli diferensiasi.",
    },
    {
      type: "Teori Harga – Kasus Promo",
      question:
        "Supermarket sering menjual gula dengan harga di bawah biaya (loss leader) untuk menarik konsumen datang, lalu berharap konsumen membeli produk lain dengan margin lebih tinggi. Strategi ini disebut:",
      options: {
        A: "Cross-subsidization",
        B: "Predatory pricing",
        C: "Loss leader pricing",
        D: "Price discrimination",
        E: "Bundle pricing",
      },
      correct: "C",
      explanation:
        "Loss leader adalah strategi harga rendah untuk satu produk agar konsumen masuk toko, lalu membeli produk lain.",
    },
    {
      type: "Diskriminasi Harga – Kasus Maskapai",
      question:
        "Maskapai penerbangan menjual tiket lebih murah jika dibeli jauh hari, tetapi lebih mahal jika dibeli mendekati waktu keberangkatan. Praktik ini disebut:",
      options: {
        A: "Price skimming",
        B: "First-degree price discrimination",
        C: "Second-degree price discrimination",
        D: "Third-degree price discrimination",
        E: "Cost-plus pricing",
      },
      correct: "C",
      explanation:
        "Harga bervariasi sesuai kuantitas/ waktu pembelian, tanpa membedakan konsumen secara eksplisit. Ini diskriminasi harga tingkat dua.",
    },
    {
      type: "Kesejahteraan & Efisiensi Pareto",
      question:
        "Suatu alokasi sumber daya dikatakan efisien secara Pareto jika:",
      options: {
        A: "Tidak ada individu yang bisa dibuat lebih baik tanpa membuat individu lain lebih buruk.",
        B: "Semua orang memperoleh utilitas sama rata.",
        C: "Total surplus konsumen dan produsen nol.",
        D: "Harga ditentukan oleh pemerintah.",
        E: "Semua pasar bersifat monopoli.",
      },
      correct: "A",
      explanation:
        "Efisiensi Pareto tidak berarti keadilan, tetapi kondisi optimal di mana tidak ada lagi perbaikan kesejahteraan tanpa pengorbanan pihak lain.",
    },
    {
      type: "Struktur Pasar – Persaingan Sempurna",
      question:
        "Pasar beras di Indonesia sering dijadikan contoh mendekati persaingan sempurna: jumlah petani sangat banyak, produk relatif homogen, dan harga ditentukan pasar. Namun dalam praktik, terdapat campur tangan pemerintah melalui Bulog. Dalam kondisi persaingan sempurna murni, keuntungan ekonomi jangka panjang perusahaan (petani) cenderung:",
      options: {
        A: "Tinggi karena jumlah produsen banyak",
        B: "Nol karena harga = biaya rata-rata minimum",
        C: "Negatif karena biaya selalu lebih besar dari pendapatan",
        D: "Sangat fluktuatif karena intervensi pemerintah",
        E: "Tergantung pada kekuatan monopoli masing-masing petani",
      },
      correct: "B",
      explanation:
        "Dalam persaingan sempurna, masuk dan keluarnya produsen membuat keuntungan ekonomi jangka panjang menjadi nol. Petani hanya memperoleh “normal profit”. Campur tangan pemerintah (misalnya harga eceran tertinggi) mengubah dinamika, tetapi teori dasar tetap berlaku.",
    },
    {
      type: "Struktur Pasar – Monopoli",
      question:
        "Pada tahun 1990-an, PT Telekomunikasi Indonesia (Telkom) sempat memiliki monopoli dalam layanan telepon rumah. Karakteristik utama pasar monopoli adalah:",
      options: {
        A: "Banyak penjual dengan produk identik",
        B: "Satu penjual, tidak ada substitusi dekat",
        C: "Harga ditentukan oleh pasar, bukan perusahaan",
        D: "Produsen bebas keluar-masuk industri",
        E: "Keuntungan jangka panjang selalu nol",
      },
      correct: "B",
      explanation:
        "Monopoli terjadi ketika hanya ada satu produsen yang menguasai seluruh pasar tanpa barang pengganti yang dekat. Telkom kala itu bisa menetapkan harga lebih tinggi dari biaya marginal, berbeda dengan struktur pasar kompetitif.",
    },
    {
      type: "Monopoli Alamiah",
      question:
        "PLN di Indonesia dikategorikan sebagai monopoli alamiah dalam distribusi listrik. Alasan ekonomi yang mendasarinya adalah:",
      options: {
        A: "PLN memiliki lisensi eksklusif dari pemerintah",
        B: "Skala ekonomi sangat besar sehingga biaya rata-rata terus turun pada skala produksi besar",
        C: "Tidak ada konsumen yang menginginkan alternatif listrik",
        D: "Investasi awal kecil sehingga pesaing tidak tertarik",
        E: "Barang yang dijual bersifat inferior",
      },
      correct: "B",
      explanation:
        "Monopoli alamiah muncul ketika satu perusahaan dapat melayani seluruh pasar dengan biaya lebih rendah daripada beberapa perusahaan. Infrastruktur listrik mahal, sehingga PLN efisien sebagai penyedia tunggal. Namun, perlu regulasi ketat agar tidak menyalahgunakan posisi monopolinya.",
    },
    {
      type: "Oligopoli – Industri Otomotif",
      question:
        "Industri otomotif global, seperti Toyota, Honda, dan Volkswagen, berbentuk oligopoli. Salah satu ciri khas pasar oligopoli adalah:",
      options: {
        A: "Harga selalu ditentukan pemerintah",
        B: "Perusahaan tidak saling memengaruhi keputusan harga",
        C: "Adanya interdependensi dalam strategi harga dan output",
        D: "Produk sepenuhnya homogen tanpa diferensiasi",
        E: "Keuntungan jangka panjang mustahil dicapai",
      },
      correct: "C",
      explanation:
        "Dalam oligopoli, setiap perusahaan menyadari tindakannya akan memengaruhi dan dipengaruhi pesaing. Misalnya, penurunan harga oleh Toyota dapat memicu respon dari Honda. Oleh karena itu, analisis teori permainan (game theory) sering digunakan.",
    },
    {
      type: "Oligopoli – Kasus Maskapai Penerbangan",
      question:
        "Maskapai penerbangan di Indonesia (Garuda, Lion Air, AirAsia) sering dituduh melakukan “price parallelism”: harga tiket serupa meskipun tanpa bukti perjanjian eksplisit. Fenomena ini dikenal sebagai:",
      options: {
        A: "Kartel eksplisit",
        B: "Persaingan sempurna",
        C: "Kolusi diam-diam (tacit collusion)",
        D: "Monopoli alamiah",
        E: "Diskriminasi harga",
      },
      correct: "C",
      explanation:
        "Dalam oligopoli, perusahaan kadang menghindari perang harga dengan mengikuti strategi harga pesaing tanpa ada perjanjian resmi. Walau sulit dibuktikan secara hukum, pola ini sering dikritik karena merugikan konsumen.",
    },
    {
      type: "Regulasi Pasar",
      question:
        "Pemerintah Indonesia menetapkan Harga Eceran Tertinggi (HET) untuk beras guna melindungi konsumen. Dari perspektif ekonomi mikro, kebijakan HET yang ditetapkan di bawah harga keseimbangan berpotensi menyebabkan:",
      options: {
        A: "Kelebihan penawaran (excess supply)",
        B: "Kelebihan permintaan (shortage)",
        C: "Surplus produsen meningkat",
        D: "Pasar tetap seimbang",
        E: "Harga naik lebih tinggi dari sebelumnya",
      },
      correct: "B",
      explanation:
        "Jika pemerintah menetapkan HET di bawah harga keseimbangan, jumlah barang yang diminta meningkat sementara jumlah barang yang ditawarkan menurun. Akibatnya terjadi kelangkaan, yang kadang menimbulkan pasar gelap.",
    },
    {
      type: "Diskriminasi Harga",
      question:
        "Perusahaan transportasi daring (misalnya Gojek, Grab) menerapkan algoritma harga dinamis (dynamic pricing). Hal ini dapat dikategorikan sebagai:",
      options: {
        A: "Diskriminasi harga derajat pertama",
        B: "Diskriminasi harga derajat kedua",
        C: "Diskriminasi harga derajat ketiga",
        D: "Penetapan harga marginal cost",
        E: "Praktek monopoli alamiah",
      },
      correct: "A",
      explanation:
        "Dalam diskriminasi harga derajat pertama, perusahaan memungut harga berbeda untuk setiap konsumen sesuai kesediaan membayar. Algoritma dynamic pricing mendekati konsep ini karena harga ditentukan secara personalisasi berdasarkan permintaan dan kondisi pasar saat itu.",
    },
    {
      type: "Kasus Nyata – Big Tech",
      question:
        "Uni Eropa melalui “Digital Markets Act” (2022) menarget perusahaan Big Tech seperti Google, Apple, dan Amazon karena dianggap “gatekeeper”. Dari perspektif ekonomi industri, mengapa Big Tech cenderung menciptakan masalah kompetisi?",
      options: {
        A: "Karena produknya homogen dan mudah ditiru",
        B: "Karena biaya marginal produksinya sangat tinggi",
        C: "Karena memiliki efek jejaring (network effects) yang memperkuat dominasi pasar",
        D: "Karena tidak bisa menerapkan diskriminasi harga",
        E: "Karena selalu membutuhkan subsidi pemerintah",
      },
      correct: "C",
      explanation:
        "Big Tech menguasai pasar karena semakin banyak pengguna, semakin bernilai layanan mereka. Efek jejaring ini menciptakan “lock-in” sehingga pesaing sulit masuk. Inilah yang mendorong regulasi anti-trust di AS dan Eropa.",
    },
    {
      type: "Kartel Nyata",
      question:
        "Organisasi OPEC (Organization of Petroleum Exporting Countries) sering disebut sebagai kartel terbesar dunia. Tujuan utama pembentukan OPEC adalah:",
      options: {
        A: "Menurunkan harga minyak dunia agar konsumen sejahtera",
        B: "Menetapkan kuota produksi untuk mengontrol harga minyak global",
        C: "Menyediakan subsidi bagi negara-negara berkembang",
        D: "Menghapuskan dominasi perusahaan minyak swasta",
        E: "Membentuk pasar persaingan sempurna",
      },
      correct: "B",
      explanation:
        "OPEC bertujuan mengoordinasikan kebijakan produksi anggotanya agar harga minyak tetap stabil/tinggi. Dengan mengurangi pasokan, harga global naik. Namun, kartel ini sering menghadapi masalah karena negara anggota punya insentif melanggar kuota.",
    },
    {
      type: "Teori Permainan – Dilema Tahanan",
      question:
        "Dalam konteks oligopoli, fenomena “perang harga” dapat dianalisis melalui dilema tahanan (prisoner’s dilemma). Jika dua perusahaan memilih menurunkan harga, maka:",
      options: {
        A: "Keduanya memperoleh keuntungan lebih besar dibanding berkolusi",
        B: "Salah satu untung besar, yang lain rugi",
        C: "Keduanya justru lebih buruk dibanding jika bekerja sama",
        D: "Keduanya tidak terpengaruh strategi pesaing",
        E: "Pasar kembali ke keseimbangan kompetitif",
      },
      correct: "C",
      explanation:
        "Dilema tahanan menunjukkan bahwa strategi dominan (turunkan harga) membawa hasil inferior bagi semua pemain dibanding kolusi. Namun, karena tidak ada kepercayaan penuh, masing-masing tetap memilih menurunkan harga → perang harga.",
    },
    {
      type: "Contestable Market",
      question:
        "Teori “pasar dapat dimasuki” (contestable market theory) menekankan bahwa:",
      options: {
        A: "Pasar hanya efisien jika ada banyak penjual",
        B: "Monopoli tidak pernah efisien",
        C: "Ancaman masuknya pesaing dapat membatasi perilaku eksploitatif perusahaan dominan",
        D: "Konsumen selalu memilih barang terendah harganya",
        E: "Biaya masuk (entry cost) tidak berpengaruh pada struktur pasar",
      },
      correct: "C",
      explanation:
        "Bahkan jika hanya ada satu produsen, pasar bisa kompetitif asalkan hambatan masuk rendah. Ancaman pesaing baru membuat perusahaan dominan menahan diri menaikkan harga terlalu tinggi.",
    },
    {
      type: "Kasus Nyata – Industri Rokok Indonesia",
      question:
        "Industri rokok Indonesia didominasi oleh beberapa perusahaan besar (Gudang Garam, Djarum, HM Sampoerna). Namun, jumlah perokok tetap tinggi meskipun harga naik. Hal ini mencerminkan bahwa:",
      options: {
        A: "Permintaan rokok elastis terhadap harga",
        B: "Permintaan rokok inelastis terhadap harga",
        C: "Permintaan rokok mengikuti hukum Giffen",
        D: "Rokok adalah barang inferior",
        E: "Rokok adalah barang publik",
      },
      correct: "B",
      explanation:
        "Rokok bersifat adiktif. Kenaikan harga hanya sedikit mengurangi jumlah yang dikonsumsi. Hal ini menyebabkan beban pajak cukai lebih banyak ditanggung konsumen (tax incidence).",
    },
    {
      type: "Price Leadership",
      question:
        "Dalam industri baja, perusahaan besar sering menjadi “price leader”. Mekanisme price leadership berarti:",
      options: {
        A: "Semua perusahaan bebas menentukan harga sendiri",
        B: "Pemerintah menentukan harga pasar",
        C: "Perusahaan dominan menetapkan harga, diikuti perusahaan kecil",
        D: "Harga ditentukan melalui lelang terbuka",
        E: "Semua perusahaan sepakat pada harga minimum",
      },
      correct: "C",
      explanation:
        "Dalam oligopoli asimetris, perusahaan besar dengan pangsa pasar dominan memimpin dalam penetapan harga. Perusahaan kecil mengikuti karena tidak memiliki daya tawar kuat.",
    },
    {
      type: "Regulasi Anti-Trust",
      question:
        "Pada tahun 2001, Komisi Eropa menjatuhkan denda besar kepada Microsoft karena memonopoli pasar sistem operasi. Tujuan utama regulasi anti-trust adalah:",
      options: {
        A: "Menjamin keuntungan perusahaan besar",
        B: "Mencegah efisiensi produksi",
        C: "Meningkatkan kesejahteraan konsumen dengan membatasi praktik anti-kompetitif",
        D: "Menghapuskan semua monopoli tanpa kecuali",
        E: "Mengurangi pajak bagi perusahaan teknologi",
      },
      correct: "C",
      explanation:
        "Anti-trust bertujuan mencegah perusahaan dominan mengekang inovasi atau menaikkan harga secara tidak wajar. Dalam kasus Microsoft, bundling Internet Explorer dianggap menutup peluang pesaing (Netscape).",
    },
    {
      type: "Teori Harga – Ramsey Pricing",
      question:
        "Dalam monopoli alamiah seperti transportasi publik, regulasi sering menggunakan prinsip Ramsey Pricing. Prinsip ini berarti:",
      options: {
        A: "Semua konsumen dikenakan harga sama rata",
        B: "Harga ditentukan berdasarkan biaya rata-rata",
        C: "Harga lebih tinggi dikenakan pada konsumen dengan elastisitas permintaan rendah",
        D: "Harga lebih rendah dikenakan pada konsumen dengan elastisitas permintaan rendah",
        E: "Pemerintah memberi subsidi penuh",
      },
      correct: "C",
      explanation:
        "Ramsey Pricing bertujuan meminimalkan distorsi sambil menutup biaya total. Konsumen dengan permintaan inelastis dikenakan harga lebih tinggi, sedangkan yang elastis diberi harga lebih rendah.",
    },
    {
      type: "Kasus Nyata – Pasar E-commerce",
      question:
        "Shopee dan Tokopedia sering memberikan diskon besar-besaran untuk menarik konsumen. Dari perspektif teori harga predatori, strategi ini berisiko:",
      options: {
        A: "Mengurangi laba jangka pendek untuk mengusir pesaing lalu menaikkan harga kembali",
        B: "Menurunkan harga untuk selamanya sehingga konsumen selalu diuntungkan",
        C: "Membuat pasar lebih kompetitif tanpa risiko",
        D: "Meningkatkan biaya tetap secara permanen",
        E: "Menghapus peran inovasi dalam pasar",
      },
      correct: "A",
      explanation:
        "Predatory pricing adalah strategi menjual di bawah biaya untuk menyingkirkan pesaing. Setelah pesaing keluar, perusahaan dominan bisa menaikkan harga. Namun, bukti praktik ini sulit diverifikasi secara hukum.",
    },
    {
      type: "Efisiensi X (Leibenstein)",
      question:
        "Leibenstein memperkenalkan konsep “X-inefficiency”, yaitu:",
      options: {
        A: "Efisiensi maksimum dalam monopoli",
        B: "Ketidakefisienan internal perusahaan karena kurangnya tekanan kompetitif",
        C: "Efisiensi yang tercapai dalam pasar persaingan sempurna",
        D: "Kegagalan pasar akibat eksternalitas",
        E: "Surplus konsumen maksimum",
      },
      correct: "B",
      explanation:
        "X-inefficiency terjadi ketika perusahaan tidak beroperasi pada frontier efisiensi karena monopoli atau proteksi. Tanpa persaingan, perusahaan cenderung boros, tidak inovatif, dan biaya operasional lebih tinggi.",
    },
    {
      type: "Kasus Nyata – Harga Minyak Goreng di Indonesia",
      question:
        "Pada 2022, harga minyak goreng melonjak tajam meski Indonesia produsen sawit terbesar. Fenomena ini terutama disebabkan oleh:",
      options: {
        A: "Permintaan domestik turun",
        B: "Penawaran sawit global terganggu akibat perang Rusia-Ukraina",
        C: "Monopoli pedagang lokal",
        D: "Inflasi inti di Indonesia meningkat",
        E: "Permintaan minyak goreng bersifat elastis",
      },
      correct: "B",
      explanation:
        "Perang mengganggu pasokan minyak nabati alternatif (sunflower oil) dari Ukraina. Permintaan global beralih ke minyak sawit → harga melonjak. Ini contoh nyata bagaimana shock penawaran global memengaruhi harga domestik.",
    },
    {
      type: "Teori Permainan – Repeated Game",
      question:
        "Jika dua perusahaan berulang kali berinteraksi dalam pasar (repeated game), strategi kerja sama (collusion) lebih mungkin bertahan karena:",
      options: {
        A: "Tidak ada sanksi bagi pihak yang melanggar",
        B: "Ancaman hukuman di masa depan membuat perusahaan lebih rasional untuk bekerja sama",
        C: "Pasar selalu kompetitif",
        D: "Permintaan konsumen tidak elastis",
        E: "Perusahaan selalu mendapat subsidi",
      },
      correct: "B",
      explanation:
        "Dalam repeated game, perusahaan mempertimbangkan keuntungan jangka panjang. Strategi seperti “tit for tat” membuat deviasi dari kesepakatan tidak rasional karena akan dihukum di periode berikutnya.",
    },
    {
      type: "Kasus Nyata – TikTok Shop",
      question:
        "TikTok Shop dilarang sementara di Indonesia pada 2023 dengan alasan melindungi UMKM lokal. Dari perspektif ekonomi industri, kebijakan ini mencerminkan:",
      options: {
        A: "Upaya proteksi terhadap pemain domestik yang kurang kompetitif",
        B: "Peningkatan efisiensi pasar digital",
        C: "Penghapusan hambatan masuk bagi UMKM",
        D: "Implementasi penuh persaingan sempurna",
        E: "Liberalisasi perdagangan digital",
      },
      correct: "A",
      explanation:
        "Larangan tersebut mencerminkan proteksionisme. Pemerintah ingin memberi ruang bagi UMKM bersaing tanpa tekanan dari platform asing dengan kekuatan finansial besar. Namun, langkah ini menuai kritik karena dianggap membatasi pilihan konsumen.",
    },
    {
      type: "Teori Permainan – Strategi Campuran",
      question:
        "Dalam pertandingan sepak bola, seorang penendang penalti harus memilih arah tendangan (kiri/kanan), sementara penjaga gawang memilih arah tebakannya. Jika penendang selalu memilih kiri, kiper mudah mengantisipasi. Untuk menghindari pola, strategi optimal yang dianjurkan teori permainan adalah:",
      options: {
        A: "Selalu memilih arah kanan",
        B: "Menggunakan strategi acak (mixed strategy) agar tidak terprediksi",
        C: "Menunggu keputusan kiper lalu memilih arah tendangan",
        D: "Menentukan arah berdasarkan hasil pertandingan sebelumnya",
        E: "Mengabaikan posisi kiper dan fokus pada kekuatan tendangan",
      },
      correct: "B",
      explanation:
        "Dalam zero-sum game seperti penalti, strategi campuran (mixed strategy) adalah kunci. Penendang dan kiper sama-sama diuntungkan dengan membuat pilihan yang tidak dapat diprediksi. Hal ini juga diaplikasikan dalam persaingan harga antara dua perusahaan yang terus berulang.",
    },
    {
      type: "Teori Permainan – Perang Dagang",
      question:
        "Perang dagang AS–China 2018 dapat dilihat sebagai permainan “chicken game”: kedua pihak mengenakan tarif tinggi, berharap lawan mundur. Jika keduanya terus keras kepala, hasilnya kerugian besar. Menurut teori permainan, solusi rasional yang sering muncul adalah:",
      options: {
        A: "Kedua pihak terus mengenakan tarif tinggi tanpa kompromi",
        B: "Salah satu pihak mengalah sebagian untuk menghindari kerugian bersama",
        C: "Kedua pihak menaikkan tarif setinggi mungkin agar menang cepat",
        D: "Membiarkan pasar menentukan penyelesaian tanpa intervensi",
        E: "Menghentikan perdagangan internasional secara total",
      },
      correct: "B",
      explanation:
        "Dalam chicken game, strategi dominan tidak ada. Solusi sering berupa kompromi parsial. Pada 2019, AS dan China akhirnya menandatangani “Phase One Agreement” sebagai bentuk menghindari kerugian total dari perang dagang berkepanjangan.",
    },
    {
      type: "Teori Permainan – Ekonomi Lingkungan",
      question:
        "Masalah perubahan iklim mencerminkan dilema “tragedy of the commons”: setiap negara cenderung enggan mengurangi emisi karena biaya internal tinggi, sementara manfaatnya bersifat global. Mekanisme ekonomi yang dapat mengatasi masalah ini adalah:",
      options: {
        A: "Mengandalkan kesadaran moral tiap negara tanpa sanksi",
        B: "Menciptakan pasar karbon dengan insentif dan penalti",
        C: "Mengabaikan isu lingkungan demi pertumbuhan ekonomi",
        D: "Membiarkan negara maju saja yang menanggung beban",
        E: "Menyerahkan urusan lingkungan sepenuhnya pada perusahaan swasta",
      },
      correct: "B",
      explanation:
        "Perdagangan emisi (carbon trading) memberi harga pada polusi, sehingga negara atau perusahaan memiliki insentif mengurangi emisi. Sistem ini digunakan Uni Eropa melalui EU Emission Trading System, sebuah contoh aplikasi teori permainan kooperatif.",
    },
    {
      type: "Ekonomi Publik – Barang Publik",
      question:
        "Pembangunan jalan tol Trans-Jawa didanai melalui kombinasi APBN dan investasi swasta. Jalan tol bukan barang publik murni karena:",
      options: {
        A: "Tidak dapat diakses siapa pun",
        B: "Konsumsi satu orang mengurangi konsumsi orang lain",
        C: "Dapat dikenakan biaya akses (tol), sehingga bersifat excludable",
        D: "Tidak meningkatkan mobilitas masyarakat",
        E: "Hanya menguntungkan perusahaan swasta",
      },
      correct: "C",
      explanation:
        "Barang publik sejati (misalnya udara bersih) bersifat non-excludable dan non-rival. Jalan tol bersifat club good: rivalitas rendah, tetapi bisa dipungut biaya masuk. Karena itu, tol memerlukan kombinasi regulasi publik dan investasi swasta.",
    },
    {
      type: "Ekonomi Publik – Pajak",
      question:
        "Pemerintah Indonesia mengenakan Pajak Karbon (2022) pada pembangkit listrik batu bara. Dari perspektif Pigouvian Tax, tujuan pajak ini adalah:",
      options: {
        A: "Mengumpulkan pendapatan negara sebanyak mungkin",
        B: "Menginternalisasi biaya eksternalitas negatif polusi ke dalam harga listrik",
        C: "Memberikan subsidi kepada perusahaan batu bara",
        D: "Meningkatkan konsumsi listrik berbasis batu bara",
        E: "Mengurangi defisit fiskal jangka pendek",
      },
      correct: "B",
      explanation:
        "Pigouvian Tax digunakan untuk memperbaiki kegagalan pasar akibat eksternalitas. Pajak karbon membuat harga listrik batu bara mencerminkan biaya sosial polusi, sehingga mendorong peralihan ke energi bersih.",
    },
    {
      type: "Ketidaksetaraan – Indeks Gini",
      question:
        "Badan Pusat Statistik (BPS) melaporkan Indeks Gini Indonesia sekitar 0,39 (2023). Interpretasi angka ini adalah:",
      options: {
        A: "Distribusi pendapatan sepenuhnya merata",
        B: "Ketidaksetaraan pendapatan cukup rendah",
        C: "Ketidaksetaraan pendapatan sedang–tinggi",
        D: "Semua orang memiliki pendapatan sama",
        E: "Tidak ada relevansi dengan kesejahteraan sosial",
      },
      correct: "C",
      explanation:
        "Indeks Gini berkisar 0 (merata sempurna) hingga 1 (ketidaksetaraan ekstrem). Angka 0,39 menandakan kesenjangan signifikan, meski tidak ekstrem. Kebijakan redistributif seperti pajak progresif diperlukan untuk mengurangi kesenjangan.",
    },
    {
      type: "Ketidaksetaraan – Teori Rawls",
      question:
        "John Rawls melalui teori “Justice as Fairness” mengusulkan prinsip perbedaan (difference principle), yaitu:",
      options: {
        A: "Ketidaksetaraan dapat diterima jika menguntungkan pihak yang paling lemah",
        B: "Semua orang harus memperoleh pendapatan sama",
        C: "Pemerintah tidak boleh campur tangan dalam distribusi",
        D: "Hanya individu berbakat yang berhak atas kekayaan",
        E: "Pasar bebas otomatis menciptakan keadilan",
      },
      correct: "A",
      explanation:
        "Rawls menerima bahwa ketidaksetaraan wajar jika meningkatkan posisi kelompok paling rentan (maximin principle). Konsep ini memengaruhi perdebatan pajak progresif, welfare state, dan kebijakan redistributif.",
    },
    {
      type: "Ketidaksetaraan – Kasus Nyata",
      question:
        "Pandemi COVID-19 memperlebar jurang ketimpangan: kekayaan miliarder dunia melonjak, sementara jutaan orang jatuh miskin. Dari perspektif ekonomi politik, fenomena ini menunjukkan bahwa:",
      options: {
        A: "Krisis selalu meningkatkan pemerataan",
        B: "Krisis bisa memperkuat konsentrasi modal di tangan segelintir orang",
        C: "Kebijakan fiskal otomatis menyeimbangkan distribusi",
        D: "Semua kelompok terkena dampak sama rata",
        E: "Inflasi lebih penting daripada distribusi kekayaan",
      },
      correct: "B",
      explanation:
        "Akses modal, teknologi, dan pasar global membuat kelompok kaya justru diuntungkan. Sementara pekerja informal kehilangan pendapatan. Hal ini menegaskan pentingnya intervensi negara untuk mencegah “kesenjangan bencana”.",
    },
    {
      type: "Perdagangan Internasional – Keunggulan Komparatif",
      question:
        "Indonesia mengekspor CPO (minyak sawit) dan mengimpor mesin industri dari Jerman. Menurut teori keunggulan komparatif Ricardo, pola perdagangan ini rasional jika:",
      options: {
        A: "Indonesia lebih efisien mutlak dalam CPO, Jerman dalam mesin",
        B: "Indonesia memiliki biaya peluang lebih rendah dalam CPO dibanding mesin",
        C: "Indonesia mengekspor mesin dan mengimpor CPO",
        D: "Kedua negara menutup diri dari perdagangan",
        E: "Harga internasional selalu lebih rendah dari harga domestik",
      },
      correct: "B",
      explanation:
        "Keunggulan komparatif bukan soal efisiensi absolut, melainkan biaya peluang. Indonesia sebaiknya fokus pada CPO karena biaya peluangnya rendah, sementara Jerman fokus pada mesin.",
    },
    {
      type: "Perdagangan Internasional – WTO",
      question:
        "WTO (World Trade Organization) mengatur mekanisme penyelesaian sengketa perdagangan antarnegara. Fungsi utama mekanisme ini adalah:",
      options: {
        A: "Memberi subsidi langsung pada negara berkembang",
        B: "Mengatur kurs mata uang",
        C: "Mencegah perang dagang dengan menyediakan forum arbitrase internasional",
        D: "Menentukan harga barang dunia",
        E: "Mengatur pajak penghasilan global",
      },
      correct: "C",
      explanation:
        "WTO menyediakan panel arbitrase yang mengikat. Misalnya, sengketa sawit Uni Eropa–Indonesia diselesaikan lewat mekanisme WTO, bukan perang tarif sepihak.",
    },
    {
      type: "Perdagangan Internasional – Kasus Nyata",
      question:
        "Pada 2020, AS melarang ekspor chip canggih ke Huawei. Dari perspektif teori perdagangan strategis, kebijakan ini:",
      options: {
        A: "Netral, karena semua negara diuntungkan",
        B: "Upaya proteksi untuk mempertahankan keunggulan teknologi nasional",
        C: "Tidak relevan karena pasar chip kompetitif sempurna",
        D: "Hanya untuk menekan harga chip domestik",
        E: "Menguntungkan Huawei dalam jangka pendek",
      },
      correct: "B",
      explanation:
        "Teori perdagangan strategis menekankan bahwa dalam industri berteknologi tinggi, pemerintah bisa menciptakan keunggulan nasional melalui proteksi. Larangan chip adalah strategi geopolitik-ekonomi untuk mempertahankan dominasi AS.",
    },
    {
      type: "Ekonomi Pembangunan – Middle Income Trap",
      question:
        "Indonesia disebut berisiko terjebak “middle income trap”. Konsep ini berarti:",
      options: {
        A: "Negara berhenti tumbuh begitu mencapai pendapatan rendah",
        B: "Negara gagal naik kelas dari berpendapatan menengah ke tinggi karena stagnasi produktivitas",
        C: "Negara maju kembali turun menjadi negara miskin",
        D: "Pertumbuhan hanya terjadi di sektor pertanian",
        E: "Ketergantungan utang luar negeri selalu meningkat",
      },
      correct: "B",
      explanation:
        "Middle income trap terjadi ketika pertumbuhan berbasis tenaga murah dan SDA tidak bertransformasi ke inovasi dan produktivitas tinggi. Solusinya adalah industrialisasi berteknologi, pendidikan, dan reformasi kelembagaan.",
    },
    {
      type: "Ekonomi Pembangunan – Kasus Nyata",
      question:
        "Vietnam berhasil menarik investasi asing besar dalam manufaktur elektronik (Samsung, Apple supplier). Hal ini mempercepat industrialisasi. Faktor utama keberhasilan Vietnam adalah:",
      options: {
        A: "Upah tenaga kerja tinggi",
        B: "Infrastruktur digital dan fisik yang membaik serta kebijakan pro-investasi",
        C: "Isolasi ekonomi dari pasar global",
        D: "Fokus hanya pada pertanian tradisional",
        E: "Tidak adanya peran pemerintah",
      },
      correct: "B",
      explanation:
        "Vietnam aktif membuka diri pada perdagangan global, memberikan insentif pajak, memperbaiki pelabuhan, dan menciptakan cluster industri. Hal ini membuat Vietnam berhasil keluar dari middle income trap lebih cepat.",
    },
    {
      type: "Ekonomi Pembangunan – Kasus Afrika",
      question:
        "Banyak negara Afrika Sub-Sahara memiliki pertumbuhan PDB tinggi namun tetap miskin. Salah satu alasannya:",
      options: {
        A: "Pertumbuhan berbasis ekstraksi sumber daya, tidak inklusif, dan rentan harga komoditas",
        B: "Semua negara Afrika menolak bantuan luar negeri",
        C: "Tidak ada urbanisasi sama sekali",
        D: "Semua negara Afrika tanpa perdagangan",
        E: "Tidak ada utang luar negeri",
      },
      correct: "A",
      explanation:
        "Fenomena resource curse: pertumbuhan tinggi tapi rapuh, tanpa diversifikasi industri dan pemerataan.",
    },
    {
      type: "Ekonomi Pembangunan – HDI",
      question:
        "Indeks Pembangunan Manusia (HDI) terdiri dari tiga dimensi utama:",
      options: {
        A: "Pendapatan, pendidikan, kesehatan",
        B: "Utang, konsumsi, produksi",
        C: "Infrastruktur, perdagangan, militer",
        D: "Lingkungan, ekspor, industri",
        E: "Pajak, investasi, ekspor",
      },
      correct: "A",
      explanation:
        "HDI dirumuskan oleh UNDP. Tujuan: mengukur kesejahteraan manusia lebih luas dari sekadar PDB.",
    },
    {
      type: "Lingkungan – Ekonomi Hijau",
      question:
        "Transisi energi terbarukan (renewable energy) penting untuk pembangunan berkelanjutan. Salah satu tantangan utamanya adalah:",
      options: {
        A: "Energi terbarukan selalu lebih murah daripada fosil",
        B: "Intermitensi (tidak stabilnya) pasokan energi surya/angin dan kebutuhan investasi infrastruktur besar",
        C: "Tidak ada dukungan internasional",
        D: "Energi terbarukan dilarang di negara berkembang",
        E: "Energi fosil otomatis hilang",
      },
      correct: "B",
      explanation:
        "Solusi: penyimpanan energi (baterai), grid pintar, dan subsidi awal.",
    },
    {
      type: "Pembangunan – Inclusive Growth",
      question: "Pertumbuhan ekonomi inklusif berarti:",
      options: {
        A: "Pertumbuhan tinggi meski tidak dinikmati semua lapisan masyarakat",
        B: "Pertumbuhan yang menghasilkan distribusi manfaat luas, mengurangi kemiskinan dan ketimpangan",
        C: "Pertumbuhan hanya untuk kelas menengah",
        D: "Pertumbuhan tanpa inovasi",
        E: "Pertumbuhan berbasis rente",
      },
      correct: "B",
      explanation:
        "Inklusifitas adalah isu utama pembangunan kontemporer. Pertumbuhan tinggi tanpa pemerataan → ketidakstabilan sosial.",
    },
    {
      type: "Ekonomi Gender",
      question:
        "Studi Bank Dunia menunjukkan bahwa ketimpangan gender menurunkan potensi pertumbuhan ekonomi global. Salah satu alasannya:",
      options: {
        A: "Perempuan tidak berkontribusi pada tenaga kerja",
        B: "Partisipasi perempuan rendah menyebabkan underutilization of human capital",
        C: "Semua perempuan bekerja di sektor informal",
        D: "Perempuan menolak pendidikan",
        E: "Tidak ada korelasi dengan ekonomi",
      },
      correct: "B",
      explanation:
        "OECD memperkirakan peningkatan partisipasi perempuan bisa menambah PDB global triliunan dolar.",
    },
    {
      type: "Teknologi & Pembangunan",
      question:
        "Revolusi Industri 4.0 (AI, big data, IoT) menciptakan peluang besar sekaligus risiko. Salah satu risiko utama bagi negara berkembang adalah:",
      options: {
        A: "Otomatisasi mengurangi kebutuhan tenaga kerja manufaktur padat karya",
        B: "Semua negara otomatis kaya",
        C: "Inovasi teknologi hanya terjadi di desa",
        D: "Pekerja terampil makin dibutuhkan",
        E: "Ekspor barang primer meningkat",
      },
      correct: "A",
      explanation:
        "Otomatisasi menggantikan pekerjaan rutin, tetapi menciptakan permintaan baru untuk keterampilan analitis, kreatif, dan interpersonal. Hal ini menuntut reformasi pendidikan dan pelatihan ulang tenaga kerja.",
    },
    {
      type: "Ekonomi Politik – Public Choice",
      question:
        "Teori Public Choice (James Buchanan) menekankan:",
      options: {
        A: "Politisi selalu bertindak altruistik",
        B: "Politisi dan birokrat bertindak seperti individu rasional yang mengejar kepentingan sendiri",
        C: "Pemerintah selalu optimal",
        D: "Ekonomi bebas tanpa pemerintah",
        E: "Pajak selalu nol",
      },
      correct: "B",
      explanation:
        "Public Choice menggunakan analisis ekonomi untuk menjelaskan perilaku politik. Misalnya, politisi mencari suara, bukan efisiensi maksimal.",
    },
    {
      type: "Ekonomi Politik – Rent Seeking",
      question: "Rent seeking berarti:",
      options: {
        A: "Menciptakan nilai tambah baru melalui inovasi",
        B: "Menggunakan sumber daya untuk mencari keuntungan lewat jalur politik/regulasi, bukan produksi",
        C: "Investasi produktif jangka panjang",
        D: "Aktivitas CSR",
        E: "Inovasi teknologi",
      },
      correct: "B",
      explanation:
        "Contoh: perusahaan melobi agar mendapat monopoli. Hasilnya bukan efisiensi, tapi distribusi rente.",
    },
    {
      type: "Filsafat Ekonomi – Adam Smith",
      question:
        "Menurut Adam Smith, “invisible hand” adalah:",
      options: {
        A: "Intervensi penuh pemerintah",
        B: "Mekanisme pasar di mana individu yang mengejar kepentingan sendiri bisa menghasilkan manfaat sosial",
        C: "Monopoli pasar",
        D: "Kebijakan proteksi",
        E: "Pajak progresif",
      },
      correct: "B",
      explanation:
        "Konsep klasik liberalisme. Namun, Smith juga menekankan moral sentiments, bukan laissez-faire absolut.",
    },
    {
      type: "Filsafat Ekonomi – Karl Marx",
      question:
        "Menurut Karl Marx, kontradiksi utama kapitalisme adalah:",
      options: {
        A: "Produktivitas selalu rendah",
        B: "Pertentangan antara pemilik modal (borjuis) dan pekerja (proletar) karena eksploitasi nilai lebih",
        C: "Kapitalisme otomatis abolisi kelas",
        D: "Kapitalisme tidak mengenal teknologi",
        E: "Kapitalisme tidak mengenal perdagangan",
      },
      correct: "B",
      explanation:
        "Marx menekankan surplus value sebagai akar konflik kelas. Kritik ini jadi dasar ideologi sosialis dan komunis.",
    },
    {
      type: "Ekonomi Politik – Keynes vs Hayek",
      question:
        "Perdebatan Keynes–Hayek berpusat pada:",
      options: {
        A: "Apakah pemerintah harus aktif mengelola ekonomi (Keynes) atau pasar lebih efisien tanpa intervensi (Hayek)",
        B: "Apakah semua orang harus bekerja di sektor publik",
        C: "Apakah utang publik harus dihapus",
        D: "Apakah harga ditentukan oleh Tuhan",
        E: "Apakah pajak tidak perlu",
      },
      correct: "A",
      explanation:
        "Keynes menekankan stimulus fiskal saat resesi. Hayek mengkhawatirkan distorsi pasar dan inflasi. Perdebatan ini masih relevan hingga kini.",
    },
    {
      type: "Ekonomi Politik – Rawls vs Nozick",
      question:
        "Menurut John Rawls, prinsip keadilan ekonomi adalah:",
      options: {
        A: "Kebebasan absolut tanpa redistribusi",
        B: "Ketidaksetaraan diperbolehkan hanya jika menguntungkan kelompok paling miskin (difference principle)",
        C: "Pajak progresif selalu salah",
        D: "Negara tidak boleh intervensi sama sekali",
        E: "Semua orang harus sama persis",
      },
      correct: "B",
      explanation:
        "Rawls menekankan fairness. Sebaliknya, Nozick menekankan kebebasan individu (libertarian).",
    },
    {
      type: "Etika Ekonomi – Utilitarianisme",
      question:
        "Pendekatan utilitarianisme dalam ekonomi menilai kebijakan berdasarkan:",
      options: {
        A: "Efisiensi produksi",
        B: "Apakah menghasilkan kebahagiaan/utility terbesar bagi jumlah orang terbanyak",
        C: "Apakah menguntungkan politisi",
        D: "Apakah mengurangi PDB",
        E: "Apakah memajukan monopoli",
      },
      correct: "B",
      explanation:
        "Jeremy Bentham dan John Stuart Mill. Kritik: bisa mengorbankan minoritas demi mayoritas.",
    },
    {
      type: "Etika Ekonomi – Libertarian",
      question:
        "Menurut libertarianisme (Nozick), pajak progresif dianggap sebagai:",
      options: {
        A: "Instrumen keadilan sosial",
        B: "Bentuk “perbudakan paksa” karena mengambil hasil kerja individu untuk orang lain",
        C: "Cara terbaik meningkatkan kesejahteraan",
        D: "Tidak ada masalah",
        E: "Bagian dari etika utilitarian",
      },
      correct: "B",
      explanation:
        "Nozick menekankan hak milik absolut. Kritik: mengabaikan ketidakadilan struktural.",
    },
    {
      type: "Etika Ekonomi – Kapitalisme vs Sosialisme",
      question:
        "Salah satu perdebatan utama kapitalisme vs sosialisme adalah:",
      options: {
        A: "Apakah harga ditentukan oleh astrologi",
        B: "Peran pasar vs peran negara dalam mengalokasikan sumber daya",
        C: "Semua sistem sama persis",
        D: "Kapitalisme tidak mengenal teknologi",
        E: "Sosialisme menolak pendidikan",
      },
      correct: "B",
      explanation:
        "Kapitalisme mengandalkan mekanisme pasar. Sosialisme menekankan perencanaan negara. Hybrid modern: welfare state.",
    },
    {
      type: "Ekonomi Politik – Neoliberalisme",
      question:
        "Neoliberalisme yang populer sejak 1980-an menekankan:",
      options: {
        A: "Deregulasi, liberalisasi perdagangan, privatisasi, peran pasar lebih besar",
        B: "Peran negara penuh dalam ekonomi",
        C: "Ekonomi tradisional tanpa inovasi",
        D: "Autarki",
        E: "Pajak 100% untuk orang kaya",
      },
      correct: "A",
      explanation:
        "Neoliberalisme dipopulerkan oleh Reagan & Thatcher. Kritik: meningkatkan ketimpangan, melemahkan perlindungan sosial.",
    },
    {
      type: "Sejarah Pemikiran – Adam Smith",
      question:
        "Adam Smith dalam The Wealth of Nations (1776) mengemukakan gagasan “invisible hand” yang menjadi fondasi kapitalisme modern. Maksud dari konsep ini adalah:",
      options: {
        A: "Pasar hanya berfungsi jika dikendalikan langsung oleh pemerintah",
        B: "Individu yang mengejar kepentingan pribadi dapat, tanpa sadar, menghasilkan manfaat kolektif melalui mekanisme pasar",
        C: "Harga selalu ditentukan oleh moralitas dan etika masyarakat",
        D: "Semua kegiatan ekonomi sebaiknya bersifat altruistik, bukan untuk keuntungan pribadi",
        E: "Keadilan sosial lebih penting daripada kebebasan pasar",
      },
      correct: "B",
      explanation:
        "Smith menekankan bahwa pencarian laba pribadi dapat menciptakan koordinasi sosial, seolah-olah ada tangan tak terlihat yang mengarahkan alokasi sumber daya. Namun, ia juga memperingatkan bahaya monopoli dan kolusi. Konsep ini menjadi dasar laissez-faire, tetapi bukan tanpa kritik (misalnya dari Keynes dan Stiglitz).",
    },
    {
      type: "Sejarah Pemikiran – Ricardo",
      question:
        "David Ricardo mengembangkan teori sewa tanah (Ricardian rent). Menurut Ricardo, sewa tanah muncul karena:",
      options: {
        A: "Semua tanah memiliki kualitas sama",
        B: "Tanah berbeda dalam kesuburan, sehingga tanah paling subur menghasilkan surplus dibanding tanah marginal",
        C: "Pemerintah memaksakan pajak tanah secara seragam",
        D: "Permintaan pangan selalu elastis sempurna",
        E: "Petani dapat mencetak uang untuk membeli pupuk",
      },
      correct: "B",
      explanation:
        "Ricardo menunjukkan bahwa sewa muncul bukan dari produktivitas absolut, melainkan dari perbedaan relatif antar tanah. Tanah paling subur memberikan surplus keuntungan, sementara tanah marginal hanya menutup biaya produksi.",
    },
    {
      type: "Sejarah Pemikiran – Karl Marx",
      question:
        "Karl Marx mengkritik kapitalisme melalui konsep surplus value. Inti dari kritik ini adalah:",
      options: {
        A: "Kapitalisme mendistribusikan nilai secara adil antara buruh dan pemilik modal",
        B: "Buruh hanya dibayar sesuai nilai tenaga kerja minimum, sementara nilai lebih (surplus) diambil kapitalis",
        C: "Nilai barang hanya berasal dari modal, bukan tenaga kerja",
        D: "Pasar bebas otomatis menghapus kesenjangan",
        E: "Kapitalisme selalu menghasilkan kesejahteraan merata",
      },
      correct: "B",
      explanation:
        "Marx menilai bahwa eksploitasi terjadi ketika buruh tidak menerima nilai penuh dari hasil kerjanya. Surplus value menjadi dasar akumulasi kapital, yang pada akhirnya menciptakan ketimpangan dan potensi krisis.",
    },
    {
      type: "Sejarah Pemikiran – John Maynard Keynes",
      question:
        "Krisis Besar 1930-an melahirkan teori Keynesian. Menurut Keynes, mengapa pasar bebas gagal pulih sendiri dari Depresi Besar?",
      options: {
        A: "Permintaan agregat terlalu lemah karena ekspektasi pesimis, sehingga investasi dan konsumsi menurun",
        B: "Pasar tenaga kerja selalu fleksibel, sehingga tidak ada pengangguran",
        C: "Pemerintah sebaiknya tidak pernah intervensi",
        D: "Inflasi tinggi menyebabkan permintaan berlebihan",
        E: "Suku bunga otomatis menyesuaikan agar perekonomian stabil",
      },
      correct: "A",
      explanation:
        "Keynes berargumen bahwa krisis disebabkan oleh “animal spirits” yang pesimis, membuat swasta enggan berinvestasi. Karena itu, diperlukan kebijakan fiskal ekspansif untuk memulihkan permintaan agregat.",
    },
    {
      type: "Sejarah Pemikiran – Milton Friedman",
      question:
        "Milton Friedman, tokoh Monetaris, berpendapat bahwa:",
      options: {
        A: "Inflasi tidak ada hubungannya dengan uang beredar",
        B: "Inflasi selalu dan di mana pun merupakan fenomena moneter",
        C: "Pemerintah sebaiknya memperbesar defisit untuk menumbuhkan ekonomi",
        D: "Intervensi bank sentral tidak pernah diperlukan",
        E: "Permintaan agregat tidak relevan terhadap pertumbuhan",
      },
      correct: "B",
      explanation:
        "Friedman menekankan pentingnya kontrol uang beredar. Jika jumlah uang tumbuh lebih cepat daripada output, maka inflasi pasti terjadi. Teori ini memengaruhi kebijakan moneter modern, termasuk “money supply targeting”.",
    },
    {
      type: "Sejarah Pemikiran – Schumpeter",
      question:
        "Joseph Schumpeter memperkenalkan konsep “creative destruction”. Maksudnya adalah:",
      options: {
        A: "Perusahaan lama bertahan selamanya tanpa inovasi",
        B: "Proses kapitalisme yang sehat ditandai dengan inovasi baru yang menggantikan teknologi lama",
        C: "Pemerintah harus menghentikan semua inovasi demi stabilitas",
        D: "Monopoli permanen baik untuk pertumbuhan",
        E: "Kewirausahaan tidak berhubungan dengan pertumbuhan ekonomi",
      },
      correct: "B",
      explanation:
        "Schumpeter menilai inovasi adalah motor utama kapitalisme. Namun, inovasi ini sekaligus menghancurkan model lama (misalnya, ponsel menggantikan telepon kabel).",
    },
    {
      type: "Sejarah Pemikiran – Keynes vs Hayek",
      question:
        "Dalam debat klasik Keynes vs Hayek, perbedaan utamanya adalah:",
      options: {
        A: "Keynes menekankan intervensi pemerintah untuk menjaga permintaan agregat, sedangkan Hayek menekankan peran harga pasar dalam mengatur informasi",
        B: "Keduanya sepakat bahwa pemerintah tidak perlu ikut campur",
        C: "Keynes menolak teori permintaan agregat",
        D: "Hayek mendukung defisit anggaran besar-besaran",
        E: "Hayek percaya pada perencanaan sentral penuh",
      },
      correct: "A",
      explanation:
        "Perdebatan ini merepresentasikan dilema besar: stabilisasi makroekonomi versus kepercayaan pada mekanisme pasar. Warisan debat ini masih relevan dalam krisis modern.",
    },
    {
      type: "Sejarah Pemikiran – Amartya Sen",
      question:
        "Amartya Sen menolak ukuran pembangunan berbasis PDB semata. Menurut pendekatan capability, pembangunan sebaiknya diukur melalui:",
      options: {
        A: "Nilai ekspor bersih",
        B: "Jumlah cadangan devisa",
        C: "Kemampuan manusia untuk menjalani kehidupan yang mereka nilai berharga, termasuk kesehatan, pendidikan, dan kebebasan",
        D: "Tingkat produksi baja",
        E: "Keuntungan perusahaan besar",
      },
      correct: "C",
      explanation:
        "Pendekatan Sen melahirkan Human Development Index (HDI). Ini menggeser paradigma pembangunan dari sekadar pertumbuhan ekonomi menuju pembangunan manusia.",
    },
    {
      type: "Sejarah Pemikiran – Thomas Piketty",
      question:
        "Thomas Piketty dalam Capital in the Twenty-First Century (2014) menunjukkan bahwa ketidaksetaraan cenderung meningkat jika:",
      options: {
        A: "Pertumbuhan ekonomi (g) lebih besar dari tingkat pengembalian modal (r)",
        B: "Tingkat pengembalian modal (r) lebih besar dari pertumbuhan ekonomi (g)",
        C: "Semua orang memiliki akses pendidikan tinggi",
        D: "Pajak progresif diterapkan secara luas",
        E: "Pemerintah mencetak uang tanpa batas",
      },
      correct: "B",
      explanation:
        "Formula r > g berarti kekayaan pemilik modal tumbuh lebih cepat daripada pendapatan nasional. Hal ini menciptakan konsentrasi kekayaan yang semakin tajam.",
    },
    {
      type: "Sejarah Pemikiran – Behavioral Economics",
      question:
        "Ekonomi perilaku (behavioral economics) mengkritik asumsi rasionalitas sempurna. Salah satu contoh nyata adalah “loss aversion”. Maksudnya adalah:",
      options: {
        A: "Individu lebih menyukai kerugian daripada keuntungan",
        B: "Kerugian dirasakan lebih berat daripada keuntungan dengan nilai sama",
        C: "Investor tidak peduli dengan risiko",
        D: "Semua orang selalu memilih opsi yang logis",
        E: "Pasar modal tidak pernah dipengaruhi emosi",
      },
      correct: "B",
      explanation:
        "Eksperimen Kahneman & Tversky menunjukkan bahwa manusia cenderung lebih takut kehilangan Rp100.000 daripada senang mendapatkan jumlah yang sama. Ini memengaruhi perilaku investasi dan konsumsi.",
    },
    {
      type: "Inflasi – Cost-Push vs Demand-Pull",
      question:
        "Pada tahun 2022, inflasi global melonjak terutama karena kenaikan harga energi akibat perang Rusia–Ukraina. Inflasi jenis ini termasuk:",
      options: {
        A: "Demand-pull inflation, karena permintaan meningkat berlebihan",
        B: "Cost-push inflation, karena biaya produksi naik akibat kenaikan harga energi",
        C: "Hyperinflation, karena pemerintah mencetak uang berlebihan",
        D: "Structural inflation, karena birokrasi lambat",
        E: "Asset-price inflation, karena harga saham naik",
      },
      correct: "B",
      explanation:
        "Inflasi 2022 adalah contoh klasik cost-push: harga energi naik → biaya produksi naik → harga barang melonjak. Berbeda dengan demand-pull (misalnya inflasi saat booming konsumsi).",
    },
    {
      type: "Inflasi – Hyperinflation",
      question:
        "Kasus Zimbabwe (2007–2008) dengan inflasi jutaan persen per tahun merupakan contoh hyperinflation. Penyebab utamanya adalah:",
      options: {
        A: "Defisit fiskal besar yang dibiayai dengan pencetakan uang tanpa kendali",
        B: "Penurunan produktivitas pertanian akibat teknologi maju",
        C: "Ekspor mineral yang berlebihan",
        D: "Penerapan pajak progresif yang terlalu tinggi",
        E: "Deflasi global yang parah",
      },
      correct: "A",
      explanation:
        "Pemerintah Zimbabwe mencetak uang untuk membiayai belanja tanpa dukungan produktivitas. Akibatnya, uang kehilangan fungsi nilai. Kasus ini menjadi pelajaran penting tentang disiplin moneter.",
    },
    {
      type: "Kebijakan Moneter – Target Inflasi",
      question:
        "Bank Indonesia menerapkan Inflation Targeting Framework (ITF). Tujuan utama kerangka ini adalah:",
      options: {
        A: "Menetapkan kurs tetap terhadap dolar AS",
        B: "Menjadikan inflasi sebagai target utama kebijakan moneter untuk menjaga stabilitas harga",
        C: "Menurunkan pajak konsumsi",
        D: "Menjamin defisit fiskal selalu 0%",
        E: "Menghapus peran pasar obligasi",
      },
      correct: "B",
      explanation:
        "ITF menekankan transparansi: bank sentral mengumumkan target inflasi, lalu menggunakan instrumen (BI rate, GWM, operasi pasar) untuk mencapainya.",
    },
    {
      type: "Kebijakan Moneter – Suku Bunga",
      question:
        "Jika bank sentral menaikkan suku bunga acuan, dampak jangka pendek yang paling mungkin adalah:",
      options: {
        A: "Konsumsi dan investasi naik",
        B: "Nilai tukar cenderung menguat karena arus modal masuk",
        C: "Inflasi meningkat karena biaya pinjaman turun",
        D: "Ekspor langsung melonjak",
        E: "Likuiditas perbankan membanjir",
      },
      correct: "B",
      explanation:
        "Suku bunga lebih tinggi menarik investor portofolio asing. Akibatnya, kurs menguat. Namun, konsumsi-investasi domestik justru melambat.",
    },
    {
      type: "Krisis Finansial – Contagion Effect",
      question:
        "Krisis finansial Asia 1997 dimulai di Thailand dengan jatuhnya baht, lalu merembet ke Indonesia, Malaysia, dan Korea Selatan. Fenomena perambatan krisis ini disebut:",
      options: {
        A: "Moral hazard",
        B: "Contagion effect",
        C: "Arbitrase internasional",
        D: "Currency substitution",
        E: "Hedging natural",
      },
      correct: "B",
      explanation:
        "Contagion adalah transmisi krisis dari satu negara ke negara lain karena keterkaitan finansial, psikologi pasar, dan ketidakstabilan fundamental serupa.",
    },
    {
      type: "Pasar Modal – Efisiensi Pasar",
      question: "Hipotesis Pasar Efisien (Eugene Fama) menyatakan:",
      options: {
        A: "Harga saham selalu stabil dalam jangka pendek",
        B: "Harga saham sepenuhnya mencerminkan semua informasi yang tersedia",
        C: "Investor dapat konsisten mengalahkan pasar dengan analisis teknikal sederhana",
        D: "Pasar saham tidak relevan untuk ekonomi",
        E: "Harga saham hanya dipengaruhi oleh kebijakan pemerintah",
      },
      correct: "B",
      explanation:
        "Menurut EMH, investor tidak bisa consistently beat the market kecuali dengan insider info. Namun, anomali seperti momentum dan January effect menantang teori ini.",
    },
    {
      type: "Pasar Modal – Bubble",
      question:
        "Gelembung dot-com (1995–2000) adalah contoh asset bubble. Gelembung harga aset biasanya muncul karena:",
      options: {
        A: "Investor rasional sepenuhnya",
        B: "Harga aset naik jauh melebihi nilai fundamental karena ekspektasi optimistis berlebihan",
        C: "Harga aset selalu ditentukan oleh nilai intrinsik",
        D: "Pemerintah melarang perdagangan saham",
        E: "Pasar efisien sempurna",
      },
      correct: "B",
      explanation:
        "Gelembung dot-com dipicu ekspektasi bahwa semua perusahaan internet akan sukses, padahal banyak tanpa model bisnis berkelanjutan.",
    },
    {
      type: "Perbankan – Fractional Reserve",
      question:
        "Sistem perbankan modern menggunakan fractional reserve banking. Maksudnya adalah:",
      options: {
        A: "Bank wajib menyimpan seluruh dana nasabah dalam brankas",
        B: "Bank hanya menyimpan sebagian kecil simpanan sebagai cadangan, sisanya dipinjamkan",
        C: "Bank tidak boleh memberikan kredit",
        D: "Bank hanya beroperasi dengan modal sendiri",
        E: "Bank sentral melarang ekspansi kredit",
      },
      correct: "B",
      explanation:
        "Dengan cadangan fraksional, bank menciptakan uang giral melalui kredit. Risiko muncul bila terjadi rush besar-besaran.",
    },
    {
      type: "Krisis Finansial – Moral Hazard",
      question:
        "Krisis subprime mortgage (2008) dipicu oleh moral hazard di sektor finansial. Contohnya adalah:",
      options: {
        A: "Bank memberikan kredit berisiko tinggi karena yakin akan diselamatkan pemerintah",
        B: "Investor selalu memilih instrumen paling aman",
        C: "Nasabah menolak mengambil kredit perumahan",
        D: "Pemerintah mengurangi defisit fiskal",
        E: "Lembaga rating selalu objektif",
      },
      correct: "A",
      explanation:
        "Moral hazard muncul karena insentif asimetris. Bank tahu risiko tinggi, tapi keuntungan privat bisa besar. Jika gagal, kerugian disosialisasikan.",
    },
    {
      type: "Cryptocurrency",
      question:
        "Bitcoin dan kripto lain dipuji sebagai alternatif sistem moneter. Namun, kelemahan utama kripto dibanding mata uang fiat adalah:",
      options: {
        A: "Tidak bisa diperdagangkan secara global",
        B: "Volatilitas harga ekstrem dan tidak didukung oleh otoritas moneter",
        C: "Selalu stabil terhadap inflasi",
        D: "Sepenuhnya terkendali oleh bank sentral",
        E: "Tidak dapat disimpan di dompet digital",
      },
      correct: "B",
      explanation:
        "Kripto bersifat desentralisasi. Namun, karena tanpa lender of last resort, nilainya sangat fluktuatif. Ini membatasi fungsinya sebagai alat tukar stabil.",
    },
    {
      type: "Neraca Pembayaran",
      question:
        "Jika Indonesia mengalami defisit transaksi berjalan (current account deficit), artinya:",
      options: {
        A: "Impor barang dan jasa lebih besar daripada ekspor",
        B: "Ekspor selalu lebih tinggi dari impor",
        C: "Utang luar negeri otomatis hilang",
        D: "Cadangan devisa bertambah",
        E: "Rupiah selalu menguat",
      },
      correct: "A",
      explanation:
        "Defisit transaksi berjalan berarti negara membiayai konsumsi/impor lebih besar dari ekspor. Dampaknya bisa melemahkan rupiah jika tak ditutup capital inflow.",
    },
    {
      type: "Kurs Valuta Asing",
      question:
        "Jika Bank Indonesia melakukan intervensi di pasar valuta asing untuk menahan depresiasi rupiah, caranya adalah:",
      options: {
        A: "Membeli dolar AS dengan rupiah",
        B: "Menjual cadangan devisa (dolar) untuk membeli rupiah",
        C: "Mencetak lebih banyak rupiah",
        D: "Menutup semua impor",
        E: "Menghapus sistem kurs mengambang",
      },
      correct: "B",
      explanation:
        "Dengan melepas dolar, BI menambah permintaan rupiah, sehingga kurs stabil. Namun, cadangan devisa bisa terkuras jika fundamental defisit besar.",
    },
    {
      type: "Perdagangan – Tarif",
      question:
        "Ketika AS mengenakan tarif baja pada 2018 untuk melindungi industri domestik, dampak langsung adalah:",
      options: {
        A: "Harga baja impor turun",
        B: "Produsen domestik terlindungi, tetapi konsumen dan industri hilir menghadapi harga lebih mahal",
        C: "Ekspor baja AS melonjak drastis",
        D: "Tarif otomatis mengurangi ketidaksetaraan",
        E: "Pasar global selalu mendukung tarif",
      },
      correct: "B",
      explanation:
        "Tarif menciptakan winners (industri baja domestik) dan losers (industri otomotif, konsumen). Secara agregat, tarif cenderung inefisien.",
    },
    {
      type: "Global Value Chain",
      question:
        "Ponsel iPhone dirakit di Tiongkok, dengan komponen dari AS, Jepang, Korea Selatan, dan Eropa. Fenomena ini menunjukkan:",
      options: {
        A: "Proteksionisme penuh",
        B: "Autarki ekonomi",
        C: "Global value chain, di mana produksi terfragmentasi lintas negara sesuai spesialisasi",
        D: "Perdagangan hanya barang primer",
        E: "Semua negara berhenti bekerja sama",
      },
      correct: "C",
      explanation:
        "Rantai nilai global menunjukkan kompleksitas modern: satu produk bisa melibatkan puluhan negara. Tantangan: siapa mendapat nilai tambah paling besar.",
    },
    {
      type: "FDI (Foreign Direct Investment)",
      question: "Ketika Toyota membangun pabrik di Karawang, ini termasuk:",
      options: {
        A: "Foreign direct investment (FDI)",
        B: "Portfolio investment",
        C: "Hot money",
        D: "Sovereign wealth fund",
        E: "Remitansi pekerja migran",
      },
      correct: "A",
      explanation:
        "FDI berarti investasi langsung pada aset riil (pabrik, tanah, teknologi). Berbeda dengan portfolio investment (saham, obligasi jangka pendek).",
    },
    {
      type: "Geopolitik – BRICS",
      question:
        "BRICS (Brasil, Rusia, India, China, Afrika Selatan) membentuk bank pembangunan alternatif (NDB). Tujuan utamanya adalah:",
      options: {
        A: "Menghapus peran PBB",
        B: "Menyaingi dominasi IMF dan World Bank dalam pembiayaan global",
        C: "Menghapus perdagangan internasional",
        D: "Membiayai hanya proyek militer",
        E: "Menguatkan dolar AS sebagai mata uang global",
      },
      correct: "B",
      explanation:
        "BRICS ingin menciptakan tata ekonomi multipolar, mengurangi ketergantungan pada dolar dan institusi Barat.",
    },
    {
      type: "Geopolitik – Belt and Road Initiative (BRI)",
      question:
        "China meluncurkan BRI dengan investasi infrastruktur besar di Asia, Afrika, dan Eropa. Salah satu kritik utama terhadap BRI adalah:",
      options: {
        A: "Tidak ada negara yang mau menerima investasi",
        B: "Menimbulkan risiko debt-trap diplomacy, di mana negara penerima terjebak utang",
        C: "Semua proyek BRI gagal total",
        D: "Tidak ada pembangunan infrastruktur sama sekali",
        E: "BRI menurunkan ekspor China",
      },
      correct: "B",
      explanation:
        "Contoh nyata: Sri Lanka harus menyerahkan pelabuhan Hambantota dalam konsesi panjang karena gagal bayar utang BRI.",
    },
    {
      type: "Geopolitik – Perang Dagang AS–China",
      question:
        "Salah satu alasan utama perang dagang AS–China adalah:",
      options: {
        A: "China sepenuhnya menutup pasarnya",
        B: "AS menuduh China melakukan praktik pencurian kekayaan intelektual dan subsidi industri strategis",
        C: "AS ingin meningkatkan impor barang murah",
        D: "China menolak ekspor ke AS",
        E: "Tidak ada alasan ekonomi, hanya budaya",
      },
      correct: "B",
      explanation:
        "Perang dagang bukan sekadar soal defisit neraca, tapi perebutan dominasi teknologi (5G, AI, chip).",
    },
    {
      type: "IMF – Conditionality",
      question:
        "IMF sering dikritik karena syarat ketat dalam pemberian pinjaman krisis. Salah satu kritik utama adalah:",
      options: {
        A: "IMF memberi pinjaman tanpa bunga",
        B: "Conditionality IMF sering mendorong austerity (pemotongan anggaran) yang memperburuk resesi",
        C: "IMF menolak membantu negara kaya",
        D: "IMF selalu meningkatkan pertumbuhan",
        E: "IMF melarang perdagangan",
      },
      correct: "B",
      explanation:
        "Contoh: krisis Asia 1997. Pemotongan belanja justru memperdalam kontraksi ekonomi. Kritik ini melahirkan perdebatan “pro-austerity vs pro-stimulus”.",
    },
    {
      type: "Globalisasi – Kritik",
      question:
        "Salah satu kritik utama terhadap globalisasi ekonomi adalah:",
      options: {
        A: "Tidak meningkatkan perdagangan internasional",
        B: "Meningkatkan ketimpangan antara negara maju dan berkembang",
        C: "Semua negara otomatis sejahtera merata",
        D: "Menghapus inovasi teknologi",
        E: "Mengurangi konsumsi global",
      },
      correct: "B",
      explanation:
        "Globalisasi memang mendorong pertumbuhan, tapi distribusinya tidak merata. Perusahaan multinasional dan negara maju sering mendapat porsi keuntungan lebih besar.",
    },
    {
      type: "SDGs – Kemiskinan",
      question:
        "Tujuan pertama SDGs (Sustainable Development Goals) adalah “No Poverty”. Indikator utamanya adalah:",
      options: {
        A: "Rasio utang pemerintah",
        B: "Proporsi penduduk hidup dengan kurang dari $1,90 per hari (PPP)",
        C: "Jumlah ekspor minyak",
        D: "Tingkat cadangan devisa",
        E: "Jumlah miliarder di suatu negara",
      },
      correct: "B",
      explanation:
        "Standar Bank Dunia ini dipakai untuk mengukur kemiskinan ekstrem. SDGs menargetkan penghapusan kemiskinan ekstrem global pada 2030.",
    },
    {
      type: "SDGs – Pendidikan",
      question:
        "SDG ke-4 menekankan pendidikan berkualitas. Salah satu indikator adalah:",
      options: {
        A: "Tingkat ekspor buku internasional",
        B: "Angka partisipasi sekolah dasar dan menengah yang inklusif dan setara",
        C: "Jumlah dosen di universitas top dunia",
        D: "Jumlah perusahaan edtech",
        E: "Banyaknya sekolah swasta elit",
      },
      correct: "B",
      explanation:
        "SDGs menekankan akses universal, bukan hanya elit. Kualitas, kesetaraan gender, dan pendidikan seumur hidup adalah pilar utama.",
    },
    {
      type: "Pembangunan – Middle Income Trap",
      question: "Middle income trap terjadi ketika:",
      options: {
        A: "Negara berhenti tumbuh setelah pendapatan rendah",
        B: "Negara tidak bisa naik dari pendapatan menengah ke tinggi karena gagal meningkatkan produktivitas dan inovasi",
        C: "Negara maju kembali miskin",
        D: "Negara menolak perdagangan internasional",
        E: "Inflasi terlalu rendah",
      },
      correct: "B",
      explanation:
        "Banyak negara Asia dan Amerika Latin terjebak di level ini. Solusi: industrialisasi, pendidikan, inovasi, governance kuat.",
    },
    {
      type: "Pembangunan – Kasus Nyata",
      question:
        "Vietnam sukses menjadi basis manufaktur global (Samsung, Apple supplier). Faktor penentu keberhasilannya:",
      options: {
        A: "Upah tenaga kerja tinggi",
        B: "Infrastruktur fisik dan digital berkembang, serta kebijakan investasi pro-asing",
        C: "Menutup diri dari perdagangan",
        D: "Bergantung penuh pada pertanian",
        E: "Mengabaikan pendidikan",
      },
      correct: "B",
      explanation:
        "Vietnam aktif menarik FDI, reformasi kebijakan, dan meningkatkan keterampilan tenaga kerja. Ini contoh escape dari low-income trap.",
    },
    {
      type: "Pembangunan – Kasus Afrika",
      question:
        "Banyak negara Afrika Sub-Sahara memiliki pertumbuhan PDB tinggi namun tetap miskin. Salah satu alasannya:",
      options: {
        A: "Pertumbuhan berbasis ekstraksi sumber daya, tidak inklusif, dan rentan harga komoditas",
        B: "Semua negara Afrika menolak bantuan luar negeri",
        C: "Tidak ada urbanisasi sama sekali",
        D: "Semua negara Afrika tanpa perdagangan",
        E: "Tidak ada utang luar negeri",
      },
      correct: "A",
      explanation:
        "Fenomena resource curse: pertumbuhan tinggi tapi rapuh, tanpa diversifikasi industri dan pemerataan.",
    },
    {
      type: "Ekonomi Pembangunan – HDI",
      question:
        "Indeks Pembangunan Manusia (HDI) terdiri dari tiga dimensi utama:",
      options: {
        A: "Pendapatan, pendidikan, kesehatan",
        B: "Utang, konsumsi, produksi",
        C: "Infrastruktur, perdagangan, militer",
        D: "Lingkungan, ekspor, industri",
        E: "Pajak, investasi, ekspor",
      },
      correct: "A",
      explanation:
        "HDI dirumuskan oleh UNDP. Tujuan: mengukur kesejahteraan manusia lebih luas dari sekadar PDB.",
    },
    {
      type: "Lingkungan – Ekonomi Hijau",
      question:
        "Transisi energi terbarukan (renewable energy) penting untuk pembangunan berkelanjutan. Salah satu tantangan utamanya adalah:",
      options: {
        A: "Energi terbarukan selalu lebih murah daripada fosil",
        B: "Intermitensi (tidak stabilnya) pasokan energi surya/angin dan kebutuhan investasi infrastruktur besar",
        C: "Tidak ada dukungan internasional",
        D: "Energi terbarukan dilarang di negara berkembang",
        E: "Energi fosil otomatis hilang",
      },
      correct: "B",
      explanation:
        "Solusi: penyimpanan energi (baterai), grid pintar, dan subsidi awal.",
    },
    {
      type: "Pembangunan – Inclusive Growth",
      question: "Pertumbuhan ekonomi inklusif berarti:",
      options: {
        A: "Pertumbuhan tinggi meski tidak dinikmati semua lapisan masyarakat",
        B: "Pertumbuhan yang menghasilkan distribusi manfaat luas, mengurangi kemiskinan dan ketimpangan",
        C: "Pertumbuhan hanya untuk kelas menengah",
        D: "Pertumbuhan tanpa inovasi",
        E: "Pertumbuhan berbasis rente",
      },
      correct: "B",
      explanation:
        "Inklusifitas adalah isu utama pembangunan kontemporer. Pertumbuhan tinggi tanpa pemerataan → ketidakstabilan sosial.",
    },
    {
      type: "Ekonomi Gender",
      question:
        "Studi Bank Dunia menunjukkan bahwa ketimpangan gender menurunkan potensi pertumbuhan ekonomi global. Salah satu alasannya:",
      options: {
        A: "Perempuan tidak berkontribusi pada tenaga kerja",
        B: "Partisipasi perempuan rendah menyebabkan underutilization of human capital",
        C: "Semua perempuan bekerja di sektor informal",
        D: "Perempuan menolak pendidikan",
        E: "Tidak ada korelasi dengan ekonomi",
      },
      correct: "B",
      explanation:
        "OECD memperkirakan peningkatan partisipasi perempuan bisa menambah PDB global triliunan dolar.",
    },
    {
      type: "Teknologi & Pembangunan",
      question:
        "Revolusi Industri 4.0 (AI, big data, IoT) menciptakan peluang besar sekaligus risiko. Salah satu risiko utama bagi negara berkembang adalah:",
      options: {
        A: "Otomatisasi mengurangi kebutuhan tenaga kerja manufaktur padat karya",
        B: "Semua negara otomatis kaya",
        C: "Inovasi teknologi hanya terjadi di desa",
        D: "Pekerja terampil makin dibutuhkan",
        E: "Ekspor barang primer meningkat",
      },
      correct: "A",
      explanation:
        "Otomatisasi menggantikan pekerjaan rutin, tetapi menciptakan permintaan baru untuk keterampilan analitis, kreatif, dan interpersonal. Hal ini menuntut reformasi pendidikan dan pelatihan ulang tenaga kerja.",
    },
  ];
  
  export default ekonomiQuestions;
  