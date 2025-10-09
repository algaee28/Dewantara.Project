interface Question {
  type: string;
  question: string;
  imageUrl?: string;
  matrixData?: (string | number)[][];
  options: Record<string, string>; // Opsi adalah objek string:string
  correct: string;
  explanation: string;
  explanationUrl?: string;
}

// Fungsi untuk mengacak array dengan tipe generik (T)
const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Fungsi untuk memproses dan mengacak setiap pertanyaan (mengubah urutan opsi)
const shuffleQuestions = (questions: Question[]): Question[] => {
  return questions.map(q => {
    // Simpan teks jawaban yang benar
    const correctAnswerText = q.options[q.correct];
    
    // Ubah opsi menjadi array [kunci, nilai] dan acak
    // Object.entries(q.options) menghasilkan array tuple: [['A', 'Teks Opsi A'], ...]
    let shuffledOptionsArray = shuffleArray(Object.entries(q.options));
    
    // Buat objek opsi baru dan temukan kunci jawaban yang baru
    const newOptions: Record<string, string> = {};
    let newCorrectKey: string = '';
    const optionKeys = ['A', 'B', 'C', 'D', 'E'];
    
    // PERBAIKAN: Ganti originalKey menjadi _originalKey
    shuffledOptionsArray.forEach(([_originalKey, value], index) => { 
      const newKey = optionKeys[index];
      newOptions[newKey] = value;
      // Cek apakah nilai ini adalah jawaban yang benar
      if (value === correctAnswerText) {
        newCorrectKey = newKey;
      }
    });
    
    // Kembalikan objek pertanyaan yang sudah diperbarui
    return {
      ...q,
      options: newOptions,
      correct: newCorrectKey,
    };
  });
};

const originalmodul2Questions: Question[] = [
  {
    type: "Kebijakan Moneter - Transmisi",
    question: "Jika BI menaikkan BI7DRR saat inflasi disebabkan oleh kenaikan harga energi impor, respons paling konsisten dengan ITF adalah...",
    options: {
      A: "Menaikkan BI7DRR dan menahan komunikasi sampai data inti turun.",
      B: "Menaikkan BI7DRR sementara menjelaskan bahwa inflasi sebagian bersifat pasokan.",
      C: "Menahan BI7DRR dan fokus pada kebijakan fiskal untuk subsidi energi.",
      D: "Menurunkan BI7DRR untuk mendorong pertumbuhan meski inflasi naik.",
      E: "Melakukan intervensi valuta tanpa perubahan suku bunga acuan."
    },
    correct: "B",
    explanation: "ITF memerlukan respons moneter yang mempertimbangkan sumber inflasi; komunikasi penting untuk mengelola ekspektasi."
  },
  {
    type: "Kebijakan Moneter - Ekspektasi",
    question: "Dalam situasi di mana ekspektasi inflasi jangka panjang mulai naik, langkah kebijakan BI yang paling tepat adalah...",
    options: {
      A: "Menaikkan suku bunga acuan dan menyampaikan target inflasi secara tegas.",
      B: "Menurunkan suku bunga untuk merangsang output dan menenangkan pasar.",
      C: "Mengandalkan intervensi valas untuk menahan kenaikan harga impor.",
      D: "Menggunakan kebijakan makroprudensial untuk menekan permintaan kredit.",
      E: "Menunda keputusan sampai data inflasi inti lebih jelas."
    },
    correct: "A",
    explanation: "Mengembalikan kredibilitas target inflasi melalui kenaikan suku bunga dan komunikasi menurunkan ekspektasi."
  },
  {
    type: "Kebijakan Moneter - Sterilisasi",
    question: "Bank sentral melakukan intervensi valas yang besar dan menahan dampak likuiditas domestik melalui OMO. Ini disebut...",
    options: {
      A: "Sterilisasi penuh dengan netralisasi melalui surat berharga domestik.",
      B: "Intervensi tak tersentralisasi dengan pembelian aset asing jangka panjang.",
      C: "Quantitative easing domestik untuk menyerap kelebihan rupiah.",
      D: "Forward guidance terhadap aliran modal masuk dan keluar.",
      E: "Penggunaan cadangan devisa tanpa tindakan pasar terbuka."
    },
    correct: "A",
    explanation: "Sterilisasi melibatkan penyerapan likuiditas domestik lewat surat berharga atau OMO setelah intervensi valas."
  },
  {
    type: "Kebijakan Moneter - Trade-off",
    question: "Saat terjadi capital outflow besar, trade-off utama bagi BI dalam memilih respons jangka pendek ialah...",
    options: {
      A: "Memilih antara mempertahankan stabilitas nilai tukar atau menjaga stabilitas harga.",
      B: "Memilih antara meningkatkan cadangan devisa atau menurunkan suku bunga acuan.",
      C: "Memilih antara memperketat pengawasan bank atau menerapkan capital control sementara.",
      D: "Memilih antara melonggarkan GWM atau menaikkan LTV perumahan.",
      E: "Memilih antara melakukan bailout bank atau membiarkan pasar menilai ulang."
    },
    correct: "A",
    explanation: "Capital outflow memaksa BI menimbang dukungan nilai tukar versus konsekuensi terhadap inflasi lewat suku bunga."
  },
  {
    type: "Kebijakan Moneter - Forward Guidance",
    question: "Forward guidance efektif bila pasar percaya kredibilitas bank sentral. Penguatan kredibilitas paling efektif dilakukan lewat...",
    options: {
      A: "Menetapkan target inflasi jelas dan rutin menilai gap keluaran.",
      B: "Mengumumkan target nilai tukar jangka menengah yang kaku.",
      C: "Memberikan subsidi langsung kepada sektor yang terdampak inflasi.",
      D: "Meningkatkan cadangan devisa melalui pinjaman luar negeri.",
      E: "Mengurangi transparansi operasional untuk fleksibilitas kebijakan."
    },
    correct: "A",
    explanation: "Transparansi target inflasi dan analisis output gap meningkatkan kredibilitas dan efektivitas forward guidance."
  },
  {
    type: "Nilai Tukar - Pass-through",
    question: "Jika rupiah terdepresiasi tajam, transmission yang paling mempengaruhi inflasi domestik jangka pendek adalah...",
    options: {
      A: "Pass-through harga impor terhadap harga konsumen terutama untuk energi dan bahan baku.",
      B: "Perubahan neraca pembayaran kapital jangka panjang yang mempengaruhi investasi asing.",
      C: "Perubahan ekspektasi pasar saham yang memengaruhi wealth effect konsumsi.",
      D: "Perubahan cadangan devisa publik yang mengubah kebijakan fiskal.",
      E: "Perubahan struktur tenaga kerja yang mempengaruhi biaya produksi."
    },
    correct: "A",
    explanation: "Depresiasi mata uang langsung menaikkan harga barang impor, mendorong headline inflation terutama sektor energi dan input produksi."
  },
  {
    type: "Kebijakan Moneter - Targeting",
    question: "Dalam kondisi supply shock global yang bersifat sementara, strategi moneter terbaik sesuai ITF adalah...",
    options: {
      A: "Respons tajam menaikkan suku bunga untuk menurunkan headline inflation segera.",
      B: "Menahan suku bunga dan mengkomunikasikan bahwa inflasi bersifat transitory.",
      C: "Mengadopsi kebijakan suku bunga negatif untuk meningkatkan likuiditas domestik.",
      D: "Melakukan operasi pasar terbuka besar untuk mengejar inflasi target.",
      E: "Menetapkan kurs tetap untuk menahan volatilitas harga impor."
    },
    correct: "B",
    explanation: "Untuk shock supply sementara, menjaga suku bunga dan komunikasi yang tepat mencegah overreaction yang merugikan output."
  },
  {
    type: "Kebijakan Moneter - Macroprudential",
    question: "Jika kenaikan suku bunga global mengancam stabilitas kredit domestik, kombinasi kebijakan BI yang optimal adalah...",
    options: {
      A: "Menaikkan suku bunga acuan dan menerapkan countercyclical capital buffer.",
      B: "Menurunkan GWM dan meningkatkan forward guidance untuk pinjaman bank.",
      C: "Melonggarkan aturan LTV untuk menjaga permintaan properti.",
      D: "Menetapkan suku bunga negatif untuk mengurangi tekanan kredit.",
      E: "Menambah subsidi kredit pemerintah untuk sektor prioritas tanpa koordinasi."
    },
    correct: "A",
    explanation: "Kombinasi moneter kontraktif dan instrumen makroprudensial melindungi stabilitas sistem keuangan tanpa menimbulkan risiko berlebih."
  },
  {
    type: "Kebijakan Moneter - Operasi Pasar Terbuka",
    question: "Ketika likuiditas domestik surplus akibat capital inflow, OMO BI yang paling tepat untuk stabilisasi jangka pendek adalah...",
    options: {
      A: "Penyerapan likuiditas lewat reverse repo tenor pendek dan peningkatan GWM sementara.",
      B: "Pembelian obligasi domestik untuk menurunkan suku bunga jangka panjang.",
      C: "Penyaluran kredit subsidi untuk sektor riil guna menyerap likuiditas.",
      D: "Peningkatan operasi valas intervensi tanpa penyerapan rupiah.",
      E: "Penukaran cadangan devisa menjadi aset rumah tangga lewat program kredit."
    },
    correct: "A",
    explanation: "Reverse repo dan penyesuaian GWM adalah instrumen biasa BI untuk menyerap likuiditas jangka pendek dari pasar."
  },
  {
    type: "Kebijakan Moneter - Time Inconsistency",
    question: "Time inconsistency problem menuntut bank sentral membangun kredibilitas. Salah satu solusi jangka panjang yang efektif adalah...",
    options: {
      A: "Menetapkan aturan moneternya secara jelas dan transparan serta independensi kelembagaan.",
      B: "Menyerahkan penetapan suku bunga kepada komite politik untuk fleksibilitas.",
      C: "Mengurangi frekuensi publikasi data untuk menghindari spekulasi pasar.",
      D: "Mengadopsi kebijakan kurs tetap tanpa mekanisme penyesuaian.",
      E: "Menggunakan intervensi fiskal jangka pendek untuk menstabilkan harga."
    },
    correct: "A",
    explanation: "Aturan yang jelas dan independensi mengurangi godaan kebijakan oportunistik serta memperkuat ekspektasi stabil."
  },
  {
    type: "Kebijakan Moneter - Term Structure",
    question: "Jika yield curve menggeser naik di semua tenor karena ekspektasi inflasi jangka panjang meningkat, respons kebijakan fiskal-moneter yang paling tepat adalah...",
    options: {
      A: "BI menaikkan suku bunga acuan untuk menjaga ekspektasi inflasi jangka panjang stabil.",
      B: "Kemenkeu menurunkan penerbitan obligasi jangka panjang tanpa koordinasi BI.",
      C: "BI melakukan quantitative easing untuk menekan yield jangka panjang.",
      D: "Kemenkeu meningkatkan subsidi untuk mendukung konsumsi rumah tangga.",
      E: "BI menahan suku bunga dan mengandalkan intervensi pasar uang."
    },
    correct: "A",
    explanation: "Mengendalikan ekspektasi inflasi jangka panjang lewat suku bunga membantu meredam kenaikan yield di seluruh tenor."
  },
  {
    type: "Kebijakan Moneter - Net Interest Margin",
    question: "Pengetatan moneter domestik sementara suku bunga global stabil berisiko memperkecil NIM bank. Kebijakan BI untuk mengurangi dampak negatif ke stabilitas kredit adalah...",
    options: {
      A: "Koordinasi dengan OJK untuk menyesuaikan persyaratan modal dan memberikan kelonggaran sementara.",
      B: "Memaksa bank menurunkan biaya operasional tanpa perubahan regulasi.",
      C: "Mewajibkan bank menahan laba untuk meningkatkan cadangan sendiri secara paksa.",
      D: "Menetapkan suku bunga acuan negatif untuk mendongkrak permintaan kredit.",
      E: "Melarang penyaluran kredit baru sampai NIM pulih."
    },
    correct: "A",
    explanation: "Koordinasi regulasi dapat meredam tekanan NIM tanpa mengorbankan tujuan kebijakan moneter."
  },
  {
    type: "Nilai Tukar - Rezim",
    question: "Jika negara menghadapi arus modal masuk volatil dan tujuan jangka menengah adalah stabilitas harga, rezim kurs yang paling konsisten adalah...",
    options: {
      A: "Kurs mengambang terkendali (managed float) dengan fleksibilitas intervensi BI.",
      B: "Kurs tetap penuh yang mengorbankan independensi moneter.",
      C: "Dollarization penuh untuk menghilangkan risiko kurs domestik.",
      D: "Kurs bebas tanpa intervensi untuk membiarkan pasar menyesuaikan sendiri.",
      E: "Mekanisme swap terikat dengan satu negara mitra sebagai pengaman."
    },
    correct: "A",
    explanation: "Managed float memberi ruang kebijakan moneter sambil memungkinkan intervensi untuk meredam volatilitas ekstrem."
  },
  {
    type: "Kebijakan Moneter - Liquidity Trap",
    question: "Jika ekonomi masuk kondisi near-zero interest rates dan output gap negatif besar, instrumen BI yang paling relevan adalah...",
    options: {
      A: "Unconventional measures seperti pembelian aset jangka panjang dan forward guidance.",
      B: "Menaikkan BI7DRR untuk menarik investor asing dan stabilkan kurs.",
      C: "Menerapkan restriksi kredit untuk menekan permintaan rumah tangga.",
      D: "Mengurangi cadangan devisa secara signifikan untuk merangsang eksport.",
      E: "Mewajibkan bank meningkatkan GWM untuk menyerap likuiditas."
    },
    correct: "A",
    explanation: "Dalam liquidity trap, kebijakan konvensional kurang efektif; kebijakan kuantitatif dan sinyal masa depan digunakan."
  },
  {
    type: "Kebijakan Moneter - Currency Mismatch",
    question: "Jika sektor swasta memiliki utang asing besar dan rupiah melemah, risiko yang paling mendesak adalah...",
    options: {
      A: "Risiko pembiayaan eksternal meningkat dan penurunan kewajiban bersih perusahaan.",
      B: "Peningkatan cadangan devisa pemerintah otomatis mengurangi risiko ini.",
      C: "Kenaikan suku bunga domestik menghapus semua risiko mata uang.",
      D: "Perubahan LTV properti secara langsung menyelesaikan mismatch mata uang.",
      E: "Intervensi fiskal jangka pendek tanpa koordinasi akan mengeliminasi risiko."
    },
    correct: "A",
    explanation: "Utang dalam valuta asing membuat pelemahan rupiah memperbesar beban pembayaran dan risiko solvabilitas."
  },
  {
    type: "Kebijakan Moneter - Sterilization Cost",
    question: "Biaya sterilisasi intervensi valas muncul karena spread antara yield domestik dan biaya penyerapan. Untuk mengurangi biaya itu BI dapat...",
    options: {
      A: "Memperpanjang tenor penyerapan agar menyesuaikan profil aset-liabilitas.",
      B: "Menaikkan suku bunga acuan untuk membuat sterilization lebih menarik bank.",
      C: "Langsung melepas cadangan devisa tanpa penyerapan pasar terbuka.",
      D: "Mengalihkan intervensi ke kebijakan fiskal untuk pembiayaan subsidi.",
      E: "Mengharuskan bank menukar valuta asing ke obligasi pemerintah."
    },
    correct: "A",
    explanation: "Perpanjangan tenor bisa mengurangi kebutuhan sering melakukan operasi penyerapan yang mahal."
  },
  {
    type: "Kebijakan Moneter - Coordination",
    question: "Dalam kondisi stagflasi domestik (inflasi tinggi, growth rendah), koordinasi BI–fiskal yang ideal adalah...",
    options: {
      A: "Kebijakan moneter fokus menahan inflasi sedangkan fiskal target dukungan struktural tepat sasaran.",
      B: "Keduanya menurunkan stimulus secara simultan untuk mengurangi defisit anggaran.",
      C: "Fiskal mengambil alih semua langkah pengendalian inflasi sementara BI menahan suku bunga.",
      D: "BI menanggung semua beban stabilisasi sementara fiskal menjaga popularitas politik.",
      E: "Menetapkan kebijakan kurs tetap dan mengabaikan kebijakan fiskal jangka pendek."
    },
    correct: "A",
    explanation: "Pembagian tugas: moneter jaga harga, fiskal mendukung pertumbuhan lewat reformasi dan bantuan terarah."
  },
  {
    type: "Nilai Tukar - Intervention",
    question: "Intervensi valas tanpa sterilisasi cenderung berdampak pada...",
    options: {
      A: "Peningkatan likuiditas rupiah dan potensi tekanan inflasi domestik.",
      B: "Pengurangan cadangan devisa tetapi tidak mempengaruhi likuiditas.",
      C: "Langsung menurunkan suku bunga domestik melalui mekanisme pasar.",
      D: "Meningkatkan cadangan devisa sekaligus menurunkan inflasi.",
      E: "Menjadikan kurs tetap permanen tanpa biaya apapun."
    },
    correct: "A",
    explanation: "Membeli mata uang asing menambah rupiah beredar; tanpa penyerapan ini dapat mendorong inflasi."
  },
  {
    type: "Kebijakan Moneter - Expectations Management",
    question: "Jika pasar meragukan komitmen BI terhadap target inflasi, langkah komunikasi yang efektif adalah...",
    options: {
      A: "Menerbitkan target kuantitatif jangka menengah sekaligus rencana kebijakan terukur.",
      B: "Mengurangi frekuensi rapat kebijakan untuk menghindari sinyal campur tangan.",
      C: "Membiarkan pasar mengetahuinya lewat kebocoran kebijakan terkontrol.",
      D: "Meminta OJK mengeluarkan pernyataan bersama tanpa data ekonomi.",
      E: "Menaikkan suku bunga tajam tanpa penjelasan publik."
    },
    correct: "A",
    explanation: "Target kuantitatif dan rencana kebijakan menunjukkan komitmen terukur yang meningkatkan kredibilitas."
  },
  {
    type: "Kebijakan Moneter - Open Economy",
    question: "Dalam ekonomi terbuka, kenaikan suku bunga domestik relatif terhadap global cenderung menyebabkan...",
    options: {
      A: "Appresiasi mata uang lokal dan potensi penurunan tekanan inflasi impor.",
      B: "Depresiasi mata uang lokal karena aliran modal keluar.",
      C: "Kenaikan harga barang impor akibat kenaikan suku bunga.",
      D: "Tidak ada perubahan nilai tukar karena pasar selalu efisien.",
      E: "Penurunan cadangan devisa seketika tanpa intervensi."
    },
    correct: "A",
    explanation: "Suku bunga relatif lebih tinggi menarik modal masuk, mendorong apresiasi kurs dan menurunkan inflasi impor."
  },
  {
    type: "Kebijakan Moneter - Core vs Headline",
    question: "Jika headline inflation naik karena kenaikan harga pangan volatile, tetapi core inflation stabil, kebijakan BI yang konsisten adalah...",
    options: {
      A: "Menahan perubahan suku bunga sambil meningkatkan komunikasi mengenai penyebab inflasi.",
      B: "Menaikkan suku bunga drastis untuk segera meredam headline inflation.",
      C: "Melakukan intervensi pasar komoditas tanpa tindakan moneter.",
      D: "Membuka operasi fiskal untuk subsidi harga pangan tanpa koordinasi BI.",
      E: "Mengubah target inflasi menjadi core-only permanen."
    },
    correct: "A",
    explanation: "BI fokus pada core inflation; respons moneter agresif terhadap volatile food bisa merugikan output."
  },
  {
    type: "Kebijakan Moneter - Reserve Requirements",
    question: "Mengetatkan GWM (reserve requirement) efektif untuk menyerap likuiditas cepat, tetapi efek sampingnya adalah...",
    options: {
      A: "Menurunkan kemampuan pemberian kredit bank sehingga menekan pertumbuhan ekonomi.",
      B: "Meningkatkan NPL bank secara otomatis dalam jangka pendek.",
      C: "Meningkatkan cadangan devisa melalui arus modal yang keluar.",
      D: "Menurunkan suku bunga deposito secara langsung tanpa mekanisme lain.",
      E: "Menghilangkan kebutuhan OJK untuk pengawasan prudensial."
    },
    correct: "A",
    explanation: "GWM menyita dana bank yang bisa dipinjamkan, sehingga pengetatan dapat menekan kredit dan pertumbuhan."
  },
  {
    type: "Kebijakan Moneter - FX Swap Lines",
    question: "Akses BI ke swap line dengan bank sentral asing paling berguna saat...",
    options: {
      A: "Tekanan likuiditas valas domestik akut untuk menahan gejolak nilai tukar.",
      B: "Kebutuhan untuk membeli obligasi domestik dalam jumlah besar.",
      C: "Meningkatkan cadangan rupiah bank komersial tanpa implikasi valas.",
      D: "Mengganti seluruh cadangan devisa jangka panjang secara mendadak.",
      E: "Menerapkan kebijakan suku bunga negatif jangka panjang."
    },
    correct: "A",
    explanation: "Swap line menyediakan likuiditas valas temporer untuk meredam tekanan kurs tanpa menguras cadangan."
  },
  {
    type: "Kebijakan Moneter - Taylor Rule",
    question: "Menurut logika rule-based seperti Taylor rule, jika inflasi di atas target dan output di bawah potensial, sinyal kebijakan adalah...",
    options: {
      A: "Menetapkan suku bunga lebih tinggi dari neutral untuk menurunkan inflasi.",
      B: "Menetapkan suku bunga lebih rendah dari neutral untuk mendorong output.",
      C: "Mengabaikan suku bunga dan melakukan intervensi valas saja.",
      D: "Meminta fiskal menutup selisih tanpa peran moneter.",
      E: "Melakukan operasi pasar terbuka untuk meningkatkan likuiditas."
    },
    correct: "A",
    explanation: "Taylor rule merekomendasikan suku bunga naik jika inflasi melebihi target, walau ada output gap negatif."
  },
  {
    type: "Kebijakan Moneter - Inflation Expectations",
    question: "Jika ekspektasi inflasi jangka menengah meleset ke atas, efek yang paling cepat muncul adalah pada...",
    options: {
      A: "Penetapan upah dan harga oleh pelaku ekonomi sehingga mendorong inflasi berkelanjutan.",
      B: "Cadangan devisa yang otomatis menurun tanpa tindakan pasar.",
      C: "Kebijakan fiskal yang langsung menurunkan pajak untuk menenggelamkan ekspektasi.",
      D: "Penurunan permintaan agregat karena ketidakpastian harga.",
      E: "Perubahan struktural dalam industri manufaktur secara otomatis."
    },
    correct: "A",
    explanation: "Ekspektasi inflasi mempengaruhi negosiasi upah dan penetapan harga yang memperkuat inflasi aktual."
  },
  {
    type: "Kebijakan Moneter - Quantitative Tightening",
    question: "Jika BI melakukan quantitative tightening (penurunan neraca) setelah periode ekspansi, tujuan utama kebijakan ini adalah...",
    options: {
      A: "Mengurangi likuiditas jangka panjang untuk menekan tekanan inflasi.",
      B: "Menambah cadangan devisa untuk meminimalkan kebutuhan intervensi.",
      C: "Meningkatkan pembiayaan fiskal lewat pembelian aset asing.",
      D: "Menurunkan suku bunga pasar secara langsung.",
      E: "Mengubah struktur neraca bank tanpa efek pasar."
    },
    correct: "A",
    explanation: "QT mengurangi aset di neraca bank sentral, menyerap likuiditas dan menahan tekanan inflasi."
  },
  {
    type: "Nilai Tukar - Real Effective Exchange Rate",
    question: "Apresiasi kurs riil (REER) yang berkepanjangan berisiko merugikan ekonomi melalui...",
    options: {
      A: "Penurunan daya saing ekspor dan potensi defisit neraca berjalan.",
      B: "Peningkatan investasi asing langsung secara permanen.",
      C: "Penurunan inflasi inti tanpa dampak pada output.",
      D: "Peningkatan cadangan devisa otomatis karena surplus perdagangan.",
      E: "Peningkatan pertumbuhan domestik tanpa trade-off."
    },
    correct: "A",
    explanation: "Apresiasi REER membuat barang domestik lebih mahal relatif ke asing sehingga menekan ekspor."
  },
  {
    type: "Kebijakan Moneter - Negative Rates",
    question: "Penerapan suku bunga negatif di negara berkembang menghadirkan risiko utama berupa...",
    options: {
      A: "Tekanan pada margin bank dan kemungkinan arus modal keluar.",
      B: "Kenaikan tajam cadangan devisa karena investasi asing.",
      C: "Stabilisasi nilai tukar jangka menengah tanpa biaya.",
      D: "Peningkatan otomatis kredit produktif tanpa risiko NPL.",
      E: "Eliminasi kebutuhan koordinasi dengan OJK."
    },
    correct: "A",
    explanation: "Negatif rates menekan profitabilitas bank dan dapat mendorong pencarian yield keluar negeri."
  },
  {
    type: "Kebijakan Moneter - Policy Rate Signaling",
    question: "Signaling effect dari perubahan BI7DRR lebih kuat jika bank sentral juga melakukan...",
    options: {
      A: "Komunikasi terpadu tentang proyeksi inflasi dan jalur suku bunga ke depan.",
      B: "Pembelian aset besar-besaran tanpa penjelasan publik.",
      C: "Pengurangan frekuensi rapat kebijakan untuk kejutan pasar.",
      D: "Transfer langsung cadangan devisa ke sektor riil.",
      E: "Menaikkan GWM tanpa pemberitahuan publik."
    },
    correct: "A",
    explanation: "Sinergi antara keputusan dan komunikasi proyeksi meningkatkan efektivitas sinyal kebijakan."
  },
  {
    type: "Kebijakan Moneter - Exchange Rate Policy",
    question: "Dalam konteks trilemma moneter, jika BI memilih stabilitas kurs dan mobilitas modal tinggi, maka...",
    options: {
      A: "Independensi kebijakan moneter harus dikorbankan.",
      B: "Inflasi domestik otomatis menurun karena stabilitas kurs.",
      C: "Suku bunga domestik dapat ditetapkan bebas tanpa tekanan eksternal.",
      D: "Cadangan devisa tidak diperlukan karena modal mengalir bebas.",
      E: "BI dapat menjalankan kebijakan fiskal ekspansif tanpa risiko nilai tukar."
    },
    correct: "A",
    explanation: "Trilemma menyatakan tidak mungkin memiliki kurs stabil, mobilitas modal bebas, dan independensi moneter sekaligus."
  },
  {
    type: "Nilai Tukar - Intervensi",
    question: "Intervensi valas steril berbeda dengan non-steril karena...",
    options: {
      A: "Intervensi steril menahan dampak pada basis moneter domestik.",
      B: "Intervensi steril selalu menaikkan inflasi domestik.",
      C: "Intervensi steril dilakukan tanpa transaksi valas nyata.",
      D: "Intervensi steril mengubah kurs nominal secara permanen.",
      E: "Intervensi steril menggunakan instrumen fiskal bukan moneter."
    },
    correct: "A",
    explanation: "Sterilisasi menjaga agar pembelian atau penjualan valas tidak mengubah jumlah uang beredar."
  },
  {
    type: "Kebijakan Moneter - Output Gap",
    question: "Output gap negatif dengan inflasi rendah menunjukkan...",
    options: {
      A: "Permintaan agregat lemah dan tekanan deflasi potensial.",
      B: "Ekonomi terlalu panas dan BI perlu mengetatkan moneter.",
      C: "Potensi kelebihan investasi publik dan inflasi tinggi.",
      D: "Permintaan domestik berlebih dan kurs tertekan.",
      E: "Tekanan inflasi impor yang kuat akibat depresiasi rupiah."
    },
    correct: "A",
    explanation: "Output di bawah potensial dan inflasi rendah menandakan pelemahan permintaan agregat."
  },
  {
    type: "Kebijakan Moneter - Interest Parity",
    question: "Menurut covered interest parity, bila suku bunga domestik lebih tinggi dari luar negeri, maka...",
    options: {
      A: "Forward rate akan mengalami diskonto terhadap kurs spot.",
      B: "Forward rate akan mengalami premium terhadap kurs spot.",
      C: "Tidak ada hubungan antara suku bunga dan kurs forward.",
      D: "Investor akan selalu menukar ke mata uang asing.",
      E: "Arus modal keluar meningkat karena arbitrase negatif."
    },
    correct: "A",
    explanation: "Suku bunga lebih tinggi domestik menyebabkan forward discount agar paritas bunga terpenuhi."
  },
  {
    type: "Kebijakan Moneter - Policy Lag",
    question: "Policy lag terutama menjadi masalah karena...",
    options: {
      A: "Efek kebijakan moneter baru dirasakan setelah jeda waktu signifikan.",
      B: "Suku bunga acuan dapat diubah kapan saja tanpa pengaruh pasar.",
      C: "Kebijakan moneter langsung mempengaruhi inflasi dalam sebulan.",
      D: "BI tidak memiliki data ekonomi apapun untuk prediksi.",
      E: "Semua efek moneter hanya bersifat jangka pendek."
    },
    correct: "A",
    explanation: "Kebijakan moneter bekerja dengan lag waktu panjang melalui transmisi sektor keuangan."
  },
  {
    type: "Inflasi - Demand Pull vs Cost Push",
    question: "Kenaikan inflasi akibat peningkatan konsumsi rumah tangga tergolong...",
    options: {
      A: "Demand-pull inflation.",
      B: "Cost-push inflation.",
      C: "Imported inflation.",
      D: "Structural inflation.",
      E: "Hyperinflation spontan."
    },
    correct: "A",
    explanation: "Permintaan agregat yang meningkat mendorong harga naik tanpa perubahan biaya produksi."
  },
  {
    type: "Kebijakan Moneter - Fisher Effect",
    question: "Menurut efek Fisher, kenaikan suku bunga nominal jangka panjang disebabkan oleh...",
    options: {
      A: "Ekspektasi inflasi yang meningkat.",
      B: "Penurunan ekspektasi inflasi.",
      C: "Kebijakan fiskal kontraktif.",
      D: "Kurs tetap jangka panjang.",
      E: "Penurunan permintaan uang riil."
    },
    correct: "A",
    explanation: "Fisher effect: suku bunga nominal = suku bunga riil + ekspektasi inflasi."
  },
  {
    type: "Kebijakan Moneter - Real Interest Rate",
    question: "Jika BI menurunkan BI7DRR namun inflasi naik lebih cepat, maka suku bunga riil...",
    options: {
      A: "Turun, menandakan pelonggaran moneter lebih dalam.",
      B: "Naik, menandakan pengetatan moneter otomatis.",
      C: "Tidak berubah karena suku nominal sudah turun.",
      D: "Menjadi negatif karena deflasi.",
      E: "Stabil karena kompensasi fiskal."
    },
    correct: "A",
    explanation: "Suku bunga riil = nominal - inflasi; inflasi naik lebih cepat berarti suku riil turun."
  },
  {
    type: "Kebijakan Moneter - Money Multiplier",
    question: "Penurunan money multiplier biasanya disebabkan oleh...",
    options: {
      A: "Kenaikan cadangan wajib dan preferensi masyarakat memegang uang tunai.",
      B: "Penurunan GWM dan peningkatan kecepatan uang.",
      C: "Kenaikan kredit perbankan tanpa perubahan basis moneter.",
      D: "Kebijakan ekspansif yang memperbesar pinjaman antarbank.",
      E: "Penurunan likuiditas bank sentral melalui OMO."
    },
    correct: "A",
    explanation: "Money multiplier menurun saat bank menahan cadangan lebih dan publik memegang uang tunai lebih besar."
  },
  {
    type: "Kebijakan Moneter - Inflation Targeting",
    question: "Elemen kunci Inflation Targeting Framework (ITF) BI adalah...",
    options: {
      A: "Target inflasi eksplisit, independensi operasional, dan komunikasi transparan.",
      B: "Target pertumbuhan ekonomi dan koordinasi fiskal penuh.",
      C: "Target defisit fiskal dan kurs tetap.",
      D: "Pengendalian langsung harga pangan dan energi.",
      E: "Kewajiban BI membiayai anggaran pemerintah."
    },
    correct: "A",
    explanation: "ITF bergantung pada target inflasi eksplisit dan transparansi untuk menjaga ekspektasi."
  },
  {
    type: "Inflasi - Core vs Headline",
    question: "Core inflation lebih stabil dibanding headline karena...",
    options: {
      A: "Tidak memasukkan komponen volatile seperti harga pangan dan energi.",
      B: "Hanya menghitung harga impor yang dikendalikan BI.",
      C: "Menentukan inflasi berdasarkan kurs nominal.",
      D: "Mengabaikan semua harga jasa.",
      E: "Berbasis ekspektasi jangka pendek."
    },
    correct: "A",
    explanation: "Core inflation mengecualikan komponen yang mudah berfluktuasi."
  },
  {
    type: "Kebijakan Moneter - Quantitative Easing",
    question: "Tujuan utama quantitative easing (QE) adalah...",
    options: {
      A: "Menurunkan suku bunga jangka panjang dan meningkatkan likuiditas sistemik.",
      B: "Menurunkan suku bunga acuan jangka pendek secara langsung.",
      C: "Menahan defisit fiskal pemerintah pusat.",
      D: "Menurunkan nilai tukar untuk mendorong ekspor.",
      E: "Menaikkan suku bunga untuk menekan inflasi."
    },
    correct: "A",
    explanation: "QE meningkatkan basis moneter dan menekan yield jangka panjang untuk mendukung permintaan agregat."
  },
  {
    type: "Inflasi - Expectations Channel",
    question: "Ekspektasi inflasi berperan penting karena...",
    options: {
      A: "Dapat mewujudkan inflasi aktual melalui penetapan harga dan upah.",
      B: "Tidak mempengaruhi inflasi aktual sama sekali.",
      C: "Hanya relevan bagi sektor publik.",
      D: "Menentukan kurs nominal secara otomatis.",
      E: "Menurunkan tingkat pengangguran secara langsung."
    },
    correct: "A",
    explanation: "Ekspektasi menjadi self-fulfilling; harga dan upah ditetapkan berdasarkan prediksi inflasi."
  },
  {
    type: "Nilai Tukar - Purchasing Power Parity",
    question: "Menurut teori PPP, depresiasi mata uang domestik jangka panjang akan...",
    options: {
      A: "Menyesuaikan hingga harga barang domestik dan asing seimbang dalam mata uang yang sama.",
      B: "Meningkatkan daya beli riil secara permanen.",
      C: "Menurunkan inflasi domestik tanpa penyesuaian harga.",
      D: "Meningkatkan defisit neraca berjalan tanpa batas.",
      E: "Menghapus semua volatilitas kurs jangka pendek."
    },
    correct: "A",
    explanation: "PPP menyatakan nilai tukar akan menyesuaikan agar harga barang setara antarnegara."
  },
  {
    type: "Kebijakan Moneter - Liquidity Management",
    question: "Ketika BI ingin menyerap kelebihan likuiditas jangka pendek, instrumen paling cepat digunakan adalah...",
    options: {
      A: "Reverse repo jangka pendek atau penjualan surat berharga BI.",
      B: "Kenaikan cadangan devisa melalui pembelian valas.",
      C: "Kebijakan suku bunga negatif.",
      D: "Penurunan GWM.",
      E: "Peningkatan kredit pemerintah."
    },
    correct: "A",
    explanation: "Reverse repo cepat menyerap likuiditas tanpa mengubah stance kebijakan."
  },
  {
    type: "Kebijakan Moneter - Monetary Base",
    question: "Komponen utama dari monetary base (high-powered money) adalah...",
    options: {
      A: "Uang kartal dan cadangan bank di BI.",
      B: "Kredit konsumsi dan tabungan masyarakat.",
      C: "Uang giral dan deposito berjangka panjang.",
      D: "Cadangan devisa dan obligasi pemerintah.",
      E: "Penerimaan pajak dan belanja modal pemerintah."
    },
    correct: "A",
    explanation: "Basis moneter meliputi uang kartal beredar dan cadangan bank di bank sentral."
  },
  {
    type: "Nilai Tukar - J Curve",
    question: "Setelah depresiasi mata uang, neraca perdagangan biasanya memburuk sementara karena...",
    options: {
      A: "Volume ekspor-impor menyesuaikan lambat terhadap harga relatif baru.",
      B: "Permintaan ekspor meningkat seketika.",
      C: "Kurs nominal tidak berubah.",
      D: "Cadangan devisa otomatis bertambah.",
      E: "Impor dan ekspor tidak bereaksi terhadap kurs."
    },
    correct: "A",
    explanation: "Efek J-curve: pada awalnya nilai impor tetap tinggi sebelum volume ekspor meningkat."
  },
  {
    type: "Kebijakan Moneter - Balance Sheet Channel",
    question: "Kenaikan suku bunga dapat memperlemah ekonomi melalui balance sheet channel karena...",
    options: {
      A: "Nilai aset turun, meningkatkan rasio utang dan risiko kredit.",
      B: "Pendapatan bunga naik bagi semua rumah tangga.",
      C: "Cadangan devisa otomatis meningkat.",
      D: "Permintaan uang riil meningkat.",
      E: "Penawaran agregat meningkat tajam."
    },
    correct: "A",
    explanation: "Suku bunga tinggi menurunkan nilai aset dan memperburuk posisi keuangan debitur."
  },
  {
    type: "Inflasi - Phillips Curve",
    question: "Phillips curve jangka pendek menunjukkan hubungan...",
    options: {
      A: "Negatif antara inflasi dan pengangguran.",
      B: "Positif antara inflasi dan pengangguran.",
      C: "Netral antara inflasi dan output.",
      D: "Negatif antara output dan nilai tukar.",
      E: "Positif antara inflasi dan cadangan devisa."
    },
    correct: "A",
    explanation: "Jangka pendek: inflasi naik saat pengangguran rendah karena tekanan upah."
  },
  {
    type: "Kebijakan Moneter - Taylor Principle",
    question: "Taylor principle menyarankan bahwa ketika inflasi naik 1%, suku bunga nominal sebaiknya...",
    options: {
      A: "Naik lebih dari 1% agar suku bunga riil meningkat.",
      B: "Turun sedikit untuk menjaga output.",
      C: "Naik sama persis dengan inflasi agar netral.",
      D: "Tidak berubah karena kebijakan fiskal kompensatif.",
      E: "Turun drastis untuk menahan capital inflow."
    },
    correct: "A",
    explanation: "Taylor principle menjaga suku riil positif agar inflasi terkendali."
  },
  {
    type: "Nilai Tukar - Capital Flow",
    question: "Arus modal jangka pendek sangat sensitif terhadap...",
    options: {
      A: "Perbedaan suku bunga antarnegara dan ekspektasi nilai tukar.",
      B: "Harga barang konsumsi dalam negeri.",
      C: "Kebijakan fiskal daerah.",
      D: "Pertumbuhan demografis jangka panjang.",
      E: "Penerimaan pajak ekspor."
    },
    correct: "A",
    explanation: "Perbedaan yield dan ekspektasi kurs mendorong arbitrase modal jangka pendek."
  },
  {
    type: "Kebijakan Moneter - Exchange Rate Pass-through",
    question: "Pass-through nilai tukar ke inflasi di Indonesia relatif terbatas karena...",
    options: {
      A: "Struktur impor lebih banyak barang modal daripada konsumsi langsung.",
      B: "Seluruh barang impor diatur harga oleh pemerintah.",
      C: "Rupiah jarang berfluktuasi terhadap dolar.",
      D: "Kebijakan fiskal otomatis menghapus efek kurs.",
      E: "Inflasi tidak dipengaruhi oleh impor sama sekali."
    },
    correct: "A",
    explanation: "Dominasi impor input membuat pass-through ke CPI tidak penuh."
  },
  {
    type: "Kebijakan Moneter - Forward Premium Puzzle",
    question: "Forward premium puzzle menggambarkan bahwa...",
    options: {
      A: "Mata uang dengan suku bunga tinggi cenderung terapresiasi, berlawanan teori UIP.",
      B: "Suku bunga tinggi selalu menurunkan kurs spot.",
      C: "Tidak ada hubungan antara suku bunga dan ekspektasi kurs.",
      D: "Suku bunga rendah menaikkan arus modal keluar secara permanen.",
      E: "Kurs forward identik dengan kurs spot masa depan."
    },
    correct: "A",
    explanation: "Secara empiris, mata uang dengan suku tinggi justru sering menguat—anomali dari UIP."
  },
  {
    type: "Kebijakan Moneter - Sterilized Intervention Effectiveness",
    question: "Efektivitas intervensi steril bergantung pada...",
    options: {
      A: "Segmentasi pasar aset domestik dan asing.",
      B: "Paritas suku bunga sempurna antarnegara.",
      C: "Kurs tetap absolut terhadap dolar.",
      D: "Tidak adanya arus modal internasional.",
      E: "Kebijakan fiskal ekspansif bersamaan."
    },
    correct: "A",
    explanation: "Jika pasar aset tersegmentasi, intervensi steril masih bisa memengaruhi kurs."
  },
  {
    type: "Kebijakan Moneter - Exchange Rate Channel",
    question: "Dalam open-economy IS-LM, pengetatan moneter menyebabkan...",
    options: {
      A: "Apresiasi kurs dan penurunan ekspor neto.",
      B: "Depresiasi kurs dan peningkatan ekspor.",
      C: "Kenaikan permintaan agregat.",
      D: "Peningkatan inflasi jangka pendek.",
      E: "Stabilisasi ekspor tanpa perubahan kurs."
    },
    correct: "A",
    explanation: "Suku bunga naik → arus modal masuk → apresiasi kurs → ekspor turun."
  },
  {
    type: "Kebijakan Moneter - Policy Mix",
    question: "Kebijakan moneter ekspansif dan fiskal ekspansif bersamaan berpotensi menimbulkan...",
    options: {
      A: "Tekanan inflasi dan defisit transaksi berjalan.",
      B: "Deflasi jangka pendek.",
      C: "Krisis perbankan langsung.",
      D: "Apresiasi kurs permanen.",
      E: "Penurunan suku bunga global."
    },
    correct: "A",
    explanation: "Permintaan agregat melonjak menyebabkan inflasi dan tekanan eksternal meningkat."
  },
  {
    type: "Inflasi - Adaptive Expectations",
    question: "Model ekspektasi adaptif mengasumsikan bahwa...",
    options: {
      A: "Pelaku ekonomi memperbarui ekspektasi inflasi berdasarkan pengalaman masa lalu.",
      B: "Ekspektasi inflasi bersifat acak dan tak bergantung masa lalu.",
      C: "Inflasi selalu konstan karena ekspektasi rasional.",
      D: "Ekspektasi tidak memengaruhi kebijakan moneter.",
      E: "Ekspektasi bergantung hanya pada data global."
    },
    correct: "A",
    explanation: "Ekspektasi adaptif: orang menyesuaikan prediksi inflasi dari kesalahan sebelumnya."
  },
  {
    type: "Kebijakan Moneter - Monetary Transmission",
    question: "Saluran transmisi yang paling cepat menghubungkan kebijakan suku bunga ke permintaan agregat adalah...",
    options: {
      A: "Interest rate channel.",
      B: "Credit channel.",
      C: "Asset price channel.",
      D: "Exchange rate channel.",
      E: "Fiscal coordination channel."
    },
    correct: "A",
    explanation: "Perubahan suku bunga langsung memengaruhi konsumsi dan investasi melalui biaya pinjaman."
  }
]

const modul2Questions = shuffleQuestions(originalmodul2Questions);

export default modul2Questions;