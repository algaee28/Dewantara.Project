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
    
    shuffledOptionsArray.forEach(([originalKey, value], index) => {
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

const originalmodul6Questions: Question[] = [
  {
    type: "Koordinasi Moneter Global",
    question: "Dalam peran BI di G20, ketika menghadapi trade-off antara menjaga kedaulatan moneter nasional dan meningkatkan koordinasi kebijakan moneter global untuk mengatasi krisis likuiditas internasional, pilihan kebijakan mana yang paling rasional bagi BI untuk memprioritaskan stabilitas ekonomi domestik sambil berkontribusi pada ketahanan global?",
    options: {
      A: "Mempertahankan independensi kebijakan moneter sepenuhnya, yang dapat mengisolasi Indonesia dari gejolak global tetapi berisiko menimbulkan ketidakstabilan regional.",
      B: "Meningkatkan partisipasi dalam swap line bilateral, yang memperkuat akses likuiditas tetapi mengurangi fleksibilitas kebijakan domestik.",
      C: "Mendukung reformasi kuota IMF untuk akses lebih adil, yang menyeimbangkan kedaulatan dengan manfaat koordinasi tanpa mengorbankan otonomi nasional.",
      D: "Mengadopsi standar kebijakan moneter global secara penuh, yang memastikan harmonisasi tetapi berpotensi mengabaikan kebutuhan ekonomi lokal.",
      E: "Menolak inisiatif koordinasi multilateral, yang melindungi kedaulatan tetapi memperburuk ketergantungan pada bantuan unilateral selama krisis.",
    },
    correct: "C",
    explanation: "BI memilih untuk mendukung reformasi kuota IMF karena ini memungkinkan Indonesia mempertahankan kontrol atas kebijakan moneternya sendiri sambil memastikan akses yang lebih adil ke sumber daya global, sehingga menyeimbangkan kepentingan nasional dengan kontribusi pada stabilitas internasional tanpa mengorbankan otonomi.",
  },
  {
    type: "Stabilitas Keuangan Internasional",
    question: "Di forum IMF, BI dihadapkan pada trade-off geopolitik antara mempromosikan green finance untuk transisi energi berkelanjutan dan menjaga stabilitas keuangan jangka pendek di tengah volatilitas pasar global; kebijakan apa yang paling tepat untuk BI guna mengintegrasikan kedua aspek tersebut?",
    options: {
      A: "Mendorong alokasi dana IMF untuk proyek hijau secara eksklusif, yang mempercepat transisi tetapi berisiko meningkatkan ketidakstabilan sektor keuangan domestik.",
      B: "Mempertahankan fokus pada stabilitas konvensional tanpa elemen hijau, yang menjaga kestabilan jangka pendek tetapi menghambat kemajuan lingkungan global.",
      C: "Mengadvokasi kerangka green finance yang terintegrasi dengan penilaian risiko keuangan, yang menyeimbangkan transisi hijau dengan mitigasi risiko jangka pendek.",
      D: "Menolak partisipasi dalam inisiatif green IMF, yang melindungi stabilitas domestik tetapi mengisolasi Indonesia dari tren keuangan berkelanjutan internasional.",
      E: "Mengusulkan penundaan green finance hingga stabilitas global tercapai, yang menghindari risiko jangka pendek tetapi memperlambat respons terhadap isu iklim.",
    },
    correct: "C",
    explanation: "BI mengadvokasi kerangka yang menggabungkan green finance dengan penilaian risiko karena ini memungkinkan transisi ke ekonomi hijau tanpa mengorbankan stabilitas keuangan saat ini, sehingga mendukung tujuan jangka panjang sambil menjaga ketahanan ekonomi Indonesia.",
  },
  {
    type: "Reformasi Institusi Keuangan",
    question: "Dalam konteks BIS, BI menghadapi trade-off antara memperkuat standar Basel untuk ketahanan bank global dan mempertahankan fleksibilitas regulasi nasional untuk mendukung pertumbuhan ekonomi domestik; strategi mana yang paling logis bagi BI untuk menavigasi dinamika ini?",
    options: {
      A: "Mendukung penerapan Basel III secara ketat di semua negara, yang meningkatkan ketahanan global tetapi membatasi pertumbuhan di ekonomi berkembang seperti Indonesia.",
      B: "Mengusulkan pengecualian untuk negara berkembang dalam standar BIS, yang mempromosikan pertumbuhan lokal tetapi berisiko melemahkan stabilitas sistem keuangan internasional.",
      C: "Mengintegrasikan standar BIS dengan penyesuaian kontekstual nasional, yang menyeimbangkan ketahanan global dengan kebutuhan pertumbuhan domestik tanpa kompromi berlebih.",
      D: "Menolak adopsi standar baru BIS, yang mempertahankan fleksibilitas nasional tetapi mengundang kritik atas kurangnya komitmen terhadap koordinasi global.",
      E: "Mendorong harmonisasi penuh tanpa pengecualian, yang memastikan kesetaraan global tetapi berpotensi menghambat inklusi keuangan di Indonesia.",
    },
    correct: "C",
    explanation: "BI memilih integrasi dengan penyesuaian karena ini memungkinkan penerapan standar global yang kuat sambil menyesuaikan dengan kondisi lokal, sehingga mendukung pertumbuhan ekonomi Indonesia tanpa mengorbankan kontribusi pada ketahanan keuangan dunia.",
  },
  {
    type: "Pengawasan Sistemik",
    question: "Di FSB, trade-off antara mengadopsi regulasi makroprudensial global untuk mencegah krisis sistemik dan mempertahankan kedaulatan pengawasan nasional menjadi isu kunci bagi BI; pendekatan apa yang paling rasional untuk BI dalam menyeimbangkan keduanya?",
    options: {
      A: "Mengadvokasi regulasi FSB yang seragam di seluruh negara, yang mencegah krisis global tetapi mengurangi kemampuan BI untuk menanggapi risiko lokal secara independen.",
      B: "Menolak integrasi regulasi FSB, yang melindungi kedaulatan nasional tetapi berisiko meningkatkan kerentanan terhadap spillover keuangan internasional.",
      C: "Mendukung kerangka FSB dengan fleksibilitas nasional, yang menggabungkan pengawasan global dengan adaptasi lokal untuk mitigasi risiko yang efektif.",
      D: "Mendorong fokus FSB hanya pada negara maju, yang membebaskan Indonesia dari beban regulasi tetapi mengabaikan interkoneksi ekonomi global.",
      E: "Mengusulkan penundaan regulasi hingga konsensus dicapai, yang menghindari konflik jangka pendek tetapi memperlambat respons terhadap ancaman sistemik.",
    },
    correct: "C",
    explanation: "BI mendukung kerangka dengan fleksibilitas karena ini memastikan partisipasi dalam pengawasan global sambil mempertahankan kemampuan untuk menyesuaikan kebijakan dengan kebutuhan nasional, sehingga meningkatkan ketahanan tanpa kehilangan otonomi.",
  },
  {
    type: "Anti Pencucian Uang",
    question: "Dalam FATF, BI dihadapkan pada trade-off geopolitik antara menerapkan standar anti-pencucian uang yang ketat untuk integrasi global dan menjaga akses keuangan inklusif bagi sektor informal domestik; kebijakan mana yang paling tepat bagi BI?",
    options: {
      A: "Menerapkan standar FATF secara penuh tanpa penyesuaian, yang meningkatkan reputasi global tetapi berpotensi membatasi inklusi keuangan di Indonesia.",
      B: "Mengusulkan relaksasi standar untuk ekonomi berkembang, yang mempromosikan inklusi lokal tetapi berisiko menimbulkan sanksi internasional.",
      C: "Mengintegrasikan standar FATF dengan program inklusi keuangan nasional, yang menyeimbangkan pencegahan pencucian uang dengan akses keuangan bagi masyarakat.",
      D: "Menolak rekomendasi FATF baru, yang mempertahankan status quo domestik tetapi mengisolasi Indonesia dari sistem keuangan global.",
      E: "Mendorong fokus FATF pada negara maju saja, yang mengurangi beban nasional tetapi mengabaikan risiko pencucian uang transnasional.",
    },
    correct: "C",
    explanation: "BI memilih integrasi dengan program inklusi karena ini memungkinkan penerapan standar global yang efektif sambil memastikan bahwa sektor informal tidak terpinggirkan, sehingga mendukung pertumbuhan ekonomi inklusif tanpa mengorbankan komitmen internasional.",
  },
  {
    type: "Kerjasama Regional",
    question: "Di SEACEN, trade-off antara harmonisasi kebijakan moneter regional untuk stabilitas ASEAN dan mempertahankan kedaulatan nasional dalam menghadapi guncangan eksternal menjadi pertimbangan utama bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Mendukung harmonisasi penuh kebijakan SEACEN, yang memperkuat stabilitas regional tetapi mengurangi fleksibilitas respons nasional terhadap krisis.",
      B: "Menolak inisiatif harmonisasi, yang melindungi kedaulatan tetapi berpotensi memperburuk ketidakstabilan di ASEAN.",
      C: "Mengadvokasi kerangka SEACEN yang fleksibel dengan koordinasi sukarela, yang menyeimbangkan kerjasama regional dengan otonomi nasional.",
      D: "Mendorong fokus SEACEN pada pelatihan saja tanpa kebijakan, yang menghindari konflik tetapi membatasi manfaat stabilitas bersama.",
      E: "Mengusulkan penundaan harmonisasi hingga kondisi ekonomi seragam, yang menjaga status quo tetapi memperlambat integrasi regional.",
    },
    correct: "C",
    explanation: "BI mengadvokasi kerangka fleksibel karena ini memungkinkan kerjasama yang memperkuat stabilitas ASEAN sambil mempertahankan kemampuan BI untuk menyesuaikan kebijakan dengan kondisi Indonesia, sehingga mendukung tujuan regional tanpa kehilangan kontrol nasional.",
  },
  {
    type: "Koordinasi Kebijakan Global",
    question: "Dalam koordinasi global lintas forum, BI menghadapi trade-off antara mendukung inisiatif digital currency untuk inovasi keuangan dan menjaga stabilitas moneter tradisional; pendekatan mana yang paling rasional bagi BI?",
    options: {
      A: "Mendorong adopsi cepat CBDC global, yang mempromosikan inovasi tetapi berisiko mengganggu stabilitas moneter domestik.",
      B: "Menolak partisipasi dalam inisiatif CBDC, yang melindungi stabilitas tradisional tetapi menghambat kemajuan teknologi keuangan.",
      C: "Mengintegrasikan CBDC dengan regulasi moneter nasional yang ketat, yang menyeimbangkan inovasi dengan pencegahan risiko stabilitas.",
      D: "Mengusulkan penelitian saja tanpa implementasi, yang menghindari risiko tetapi memperlambat adaptasi global.",
      E: "Fokus pada CBDC regional daripada global, yang membatasi cakupan tetapi mengurangi ketergantungan internasional.",
    },
    correct: "C",
    explanation: "BI memilih integrasi dengan regulasi ketat karena ini memungkinkan pemanfaatan inovasi digital sambil memastikan bahwa stabilitas moneter tidak terganggu, sehingga mendukung kemajuan teknologi tanpa mengorbankan fondasi ekonomi nasional.",
  },
  {
    type: "Likuiditas Global",
    question: "Di G20, trade-off antara memperluas jaringan swap line untuk akses likuiditas global dan mempertahankan cadangan devisa nasional menjadi isu geopolitik bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Memperluas swap line secara bilateral eksklusif, yang meningkatkan akses likuiditas tetapi berpotensi meningkatkan ketergantungan geopolitik.",
      B: "Menolak ekspansi swap line, yang melindungi cadangan nasional tetapi berisiko kekurangan likuiditas selama krisis global.",
      C: "Mengadvokasi swap line multilateral melalui G20, yang menyeimbangkan akses likuiditas dengan diversifikasi risiko geopolitik.",
      D: "Fokus pada akumulasi cadangan devisa internal, yang memperkuat independensi tetapi membatasi kontribusi pada stabilitas global.",
      E: "Mengusulkan swap line kondisional berdasarkan reformasi, yang menunda akses tetapi memastikan keadilan jangka panjang.",
    },
    correct: "C",
    explanation: "BI mengadvokasi swap line multilateral karena ini memberikan akses likuiditas yang lebih aman tanpa ketergantungan berlebih pada satu negara, sehingga memperkuat ketahanan Indonesia sambil berkontribusi pada koordinasi global.",
  },
  {
    type: "Reformasi IMF",
    question: "Dalam IMF, BI dihadapkan pada trade-off antara mendukung reformasi governance untuk representasi lebih baik bagi negara berkembang dan menjaga akses cepat ke fasilitas pinjaman; strategi mana yang paling logis?",
    options: {
      A: "Mendorong reformasi governance secara agresif, yang meningkatkan representasi tetapi berpotensi menunda akses pinjaman jangka pendek.",
      B: "Mempertahankan status quo governance IMF, yang memastikan akses cepat tetapi mempertahankan ketidakadilan bagi negara berkembang.",
      C: "Mengintegrasikan reformasi dengan peningkatan fasilitas pinjaman paralel, yang menyeimbangkan representasi dengan keamanan akses.",
      D: "Menolak reformasi hingga kondisi ekonomi membaik, yang menghindari konflik tetapi memperlambat perubahan struktural.",
      E: "Fokus pada alternatif regional daripada IMF, yang mengurangi ketergantungan tetapi membatasi skala dukungan global.",
    },
    correct: "C",
    explanation: "BI memilih integrasi reformasi dengan fasilitas paralel karena ini memastikan peningkatan suara Indonesia di IMF sambil menjaga akses pinjaman yang diperlukan, sehingga mendukung kepentingan jangka panjang tanpa mengorbankan keamanan saat ini.",
  },
  {
    type: "Standar Basel",
    question: "Di BIS, trade-off antara menerapkan Basel IV untuk ketahanan modal bank global dan mempertahankan ruang untuk kebijakan pro-pertumbuhan nasional menjadi pertimbangan utama bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Menerapkan Basel IV secara ketat, yang meningkatkan ketahanan global tetapi membatasi pinjaman untuk pertumbuhan domestik.",
      B: "Menolak Basel IV, yang mempertahankan fleksibilitas nasional tetapi berisiko sanksi internasional.",
      C: "Mengadaptasi Basel IV dengan pengecualian untuk sektor prioritas nasional, yang menyeimbangkan ketahanan dengan dukungan pertumbuhan.",
      D: "Mengusulkan penundaan implementasi global, yang menjaga status quo tetapi memperlambat kemajuan standar.",
      E: "Fokus pada standar regional daripada BIS, yang mengurangi beban tetapi mengabaikan interkoneksi global.",
    },
    correct: "C",
    explanation: "BI mengadaptasi dengan pengecualian karena ini memungkinkan penerapan standar yang kuat sambil mendukung sektor ekonomi kunci di Indonesia, sehingga meningkatkan ketahanan tanpa menghambat pertumbuhan.",
  },
  {
    type: "Risiko Sistemik",
    question: "Dalam FSB, BI menghadapi trade-off geopolitik antara mengadopsi pengawasan shadow banking global untuk mencegah risiko sistemik dan menjaga inovasi keuangan domestik; kebijakan mana yang paling tepat?",
    options: {
      A: "Mengadopsi pengawasan ketat FSB pada shadow banking, yang mencegah risiko tetapi membatasi inovasi lokal.",
      B: "Menolak pengawasan FSB, yang mempromosikan inovasi tetapi meningkatkan kerentanan sistemik.",
      C: "Mengintegrasikan pengawasan FSB dengan insentif inovasi nasional, yang menyeimbangkan pencegahan risiko dengan pertumbuhan keuangan.",
      D: "Mengusulkan fokus FSB pada negara maju, yang mengurangi beban domestik tetapi mengabaikan risiko transnasional.",
      E: "Menunda adopsi hingga data lebih lengkap, yang menghindari kesalahan tetapi memperlambat mitigasi.",
    },
    correct: "C",
    explanation: "BI memilih integrasi dengan insentif karena ini memastikan pengawasan yang efektif terhadap risiko sambil mendorong inovasi, sehingga mendukung perkembangan keuangan Indonesia tanpa mengorbankan stabilitas global.",
  },
  {
    type: "Standar AML/CFT",
    question: "Di FATF, trade-off antara memperkuat standar AML/CFT untuk pencegahan terorisme global dan menjaga privasi data nasional menjadi isu kunci bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Memperkuat standar FATF secara penuh, yang mencegah terorisme tetapi berpotensi mengganggu privasi domestik.",
      B: "Menolak peningkatan standar, yang melindungi privasi tetapi meningkatkan risiko pencucian uang.",
      C: "Menggabungkan standar FATF dengan proteksi data nasional, yang menyeimbangkan pencegahan dengan hak privasi.",
      D: "Fokus pada kerjasama regional daripada FATF, yang mengurangi cakupan global tetapi mempertahankan kontrol lokal.",
      E: "Mengusulkan peninjauan ulang standar periodik, yang menunda implementasi tetapi memastikan adaptasi.",
    },
    correct: "C",
    explanation: "BI menggabungkan dengan proteksi data karena ini memungkinkan pencegahan efektif terhadap kejahatan keuangan sambil menjaga privasi warga Indonesia, sehingga mendukung komitmen global tanpa mengorbankan hak nasional.",
  },
  {
    type: "Pelatihan Regional",
    question: "Dalam SEACEN, BI dihadapkan pada trade-off antara berbagi pengetahuan kebijakan moneter untuk kapasitas regional dan mempertahankan keunggulan kompetitif nasional; pendekatan mana yang paling rasional?",
    options: {
      A: "Berbagi pengetahuan secara terbuka di SEACEN, yang meningkatkan kapasitas regional tetapi berpotensi mengurangi keunggulan Indonesia.",
      B: "Menahan pengetahuan kunci, yang mempertahankan keunggulan tetapi menghambat kerjasama ASEAN.",
      C: "Mengintegrasikan berbagi dengan program kolaborasi bersama, yang menyeimbangkan kapasitas regional dengan manfaat timbal balik.",
      D: "Fokus pada pelatihan internal saja, yang memperkuat nasional tetapi mengisolasi dari tren regional.",
      E: "Menunda berbagi hingga standar seragam, yang menghindari kerugian tetapi memperlambat kemajuan bersama.",
    },
    correct: "C",
    explanation: "BI memilih integrasi dengan kolaborasi karena ini memungkinkan peningkatan kapasitas bersama di ASEAN sambil memastikan manfaat bagi Indonesia, sehingga mendukung kerjasama tanpa kehilangan posisi kompetitif.",
  },
  {
    type: "Inovasi Keuangan Global",
    question: "Dalam koordinasi global, trade-off antara mendukung fintech global untuk inklusi keuangan dan menjaga regulasi nasional untuk pencegahan risiko menjadi pertimbangan bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Mendukung fintech global tanpa batas, yang mempromosikan inklusi tetapi meningkatkan risiko tidak terkontrol.",
      B: "Menolak integrasi fintech internasional, yang melindungi regulasi tetapi membatasi akses inklusi.",
      C: "Mengadopsi fintech dengan kerangka regulasi nasional yang adaptif, yang menyeimbangkan inklusi dengan mitigasi risiko.",
      D: "Fokus pada fintech domestik saja, yang memperkuat kontrol tetapi mengurangi inovasi global.",
      E: "Menunda adopsi hingga regulasi matang, yang menghindari kesalahan tetapi memperlambat kemajuan.",
    },
    correct: "C",
    explanation: "BI mengadopsi dengan regulasi adaptif karena ini memungkinkan pemanfaatan fintech untuk inklusi sambil menjaga kontrol risiko, sehingga mendukung pertumbuhan keuangan tanpa mengorbankan stabilitas.",
  },
  {
    type: "Transisi Energi",
    question: "Di G20, BI menghadapi trade-off antara mempromosikan transisi energi hijau untuk tujuan iklim global dan menjaga ketergantungan pada energi fosil untuk stabilitas ekonomi domestik; strategi mana yang paling logis?",
    options: {
      A: "Mempromosikan transisi hijau secara cepat, yang mendukung iklim tetapi berpotensi mengganggu stabilitas ekonomi jangka pendek.",
      B: "Mempertahankan ketergantungan fosil, yang menjaga stabilitas domestik tetapi menghambat komitmen iklim global.",
      C: "Mengintegrasikan transisi hijau dengan subsidi transisional untuk sektor fosil, yang menyeimbangkan iklim dengan stabilitas ekonomi.",
      D: "Menolak target transisi G20, yang melindungi ekonomi lokal tetapi mengisolasi Indonesia secara geopolitik.",
      E: "Menunda transisi hingga teknologi matang, yang menghindari risiko tetapi memperlambat respons iklim.",
    },
    correct: "C",
    explanation: "BI memilih integrasi dengan subsidi karena ini memungkinkan kemajuan menuju ekonomi hijau sambil memberikan dukungan sementara untuk sektor tradisional, sehingga mendukung tujuan global tanpa mengorbankan kestabilan nasional.",
  },
  {
    type: "Kuota IMF",
    question: "Dalam IMF, trade-off geopolitik antara mendukung peningkatan kuota untuk akses lebih besar bagi negara berkembang dan menjaga disiplin fiskal nasional menjadi isu utama bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Mendukung peningkatan kuota tanpa syarat, yang meningkatkan akses tetapi berpotensi mendorong ketidakdisiplinan fiskal.",
      B: "Menolak peningkatan kuota, yang menjaga disiplin tetapi membatasi dukungan selama krisis.",
      C: "Mengadvokasi peningkatan kuota dengan kondisi disiplin fiskal, yang menyeimbangkan akses dengan tanggung jawab nasional.",
      D: "Fokus pada alternatif bilateral daripada IMF, yang mengurangi ketergantungan tetapi membatasi skala.",
      E: "Menunda peningkatan hingga reformasi selesai, yang menghindari kesalahan tetapi memperlambat bantuan.",
    },
    correct: "A",
    explanation: "BI mendukung peningkatan kuota tanpa syarat karena ini memberikan akses lebih besar untuk negara seperti Indonesia selama krisis, sehingga memperkuat ketahanan tanpa menambah beban kondisional yang bisa membatasi kebijakan nasional.",
  },
  {
    type: "Pengawasan BIS",
    question: "Di BIS, BI dihadapkan pada trade-off antara mengadopsi pengawasan lintas batas untuk mencegah arbitrage regulasi dan mempertahankan kerahasiaan data nasional; kebijakan mana yang paling tepat?",
    options: {
      A: "Mengadopsi pengawasan lintas batas penuh, yang mencegah arbitrage tetapi berpotensi mengungkap data sensitif.",
      B: "Menolak pengawasan BIS, yang melindungi data tetapi meningkatkan risiko arbitrage.",
      C: "Mengintegrasikan pengawasan dengan protokol kerahasiaan, yang menyeimbangkan pencegahan dengan proteksi data.",
      D: "Fokus pada pengawasan regional, yang mengurangi cakupan global tetapi mempertahankan kontrol.",
      E: "Menunda adopsi hingga standar kerahasiaan ditingkatkan, yang menghindari risiko tetapi memperlambat implementasi.",
    },
    correct: "B",
    explanation: "BI menolak pengawasan BIS karena prioritas utama adalah melindungi kerahasiaan data nasional, yang mencegah potensi penyalahgunaan informasi sensitif meskipun berarti menerima risiko arbitrage regulasi yang lebih tinggi.",
  },
  {
    type: "Stabilitas FSB",
    question: "Dalam FSB, trade-off antara mendukung resolusi bank global untuk pencegahan bailout dan menjaga fleksibilitas intervensi nasional menjadi pertimbangan bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Mendukung resolusi global secara ketat, yang mencegah bailout tetapi membatasi intervensi domestik.",
      B: "Menolak resolusi FSB, yang mempertahankan fleksibilitas tetapi meningkatkan risiko bailout sistemik.",
      C: "Menggabungkan resolusi dengan opsi intervensi nasional, yang menyeimbangkan pencegahan dengan respons lokal.",
      D: "Fokus pada resolusi regional, yang mengurangi beban global tetapi mengabaikan interkoneksi.",
      E: "Menunda resolusi hingga pengujian selesai, yang menghindari kesalahan tetapi memperlambat persiapan.",
    },
    correct: "D",
    explanation: "BI fokus pada resolusi regional karena ini memungkinkan penanganan yang lebih relevan dengan konteks ASEAN, sehingga mengurangi ketergantungan pada mekanisme global yang mungkin tidak sesuai dengan kebutuhan domestik.",
  },
  {
    type: "Rekomendasi FATF",
    question: "Di FATF, BI menghadapi trade-off geopolitik antara menerapkan rekomendasi virtual asset untuk pencegahan pencucian dan menjaga pertumbuhan sektor crypto domestik; pendekatan mana yang paling rasional?",
    options: {
      A: "Menerapkan rekomendasi secara penuh, yang mencegah pencucian tetapi membatasi pertumbuhan crypto.",
      B: "Menolak rekomendasi FATF, yang mempromosikan pertumbuhan tetapi meningkatkan risiko pencucian.",
      C: "Mengadaptasi rekomendasi dengan insentif pertumbuhan, yang menyeimbangkan pencegahan dengan inovasi.",
      D: "Fokus pada regulasi nasional saja, yang memperkuat kontrol lokal tetapi mengisolasi dari standar global.",
      E: "Menunda implementasi hingga klarifikasi, yang menghindari konflik tetapi memperlambat adaptasi.",
    },
    correct: "E",
    explanation: "BI menunda implementasi hingga klarifikasi karena ini memberikan waktu untuk menilai dampak secara mendalam, sehingga menghindari keputusan tergesa yang bisa merugikan pertumbuhan atau pencegahan tanpa bukti lengkap.",
  },
  {
    type: "Riset SEACEN",
    question: "Dalam SEACEN, trade-off antara berkolaborasi dalam riset moneter regional untuk pengetahuan bersama dan mempertahankan rahasia strategi nasional menjadi isu kunci bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Berkolaborasi secara terbuka, yang meningkatkan pengetahuan tetapi berpotensi mengungkap strategi.",
      B: "Menahan kolaborasi, yang melindungi rahasia tetapi menghambat kemajuan regional.",
      C: "Mengintegrasikan kolaborasi dengan batasan kerahasiaan, yang menyeimbangkan pengetahuan dengan proteksi.",
      D: "Fokus pada riset internal, yang memperkuat nasional tetapi mengisolasi dari wawasan regional.",
      E: "Menunda kolaborasi hingga protokol aman, yang menghindari risiko tetapi memperlambat riset.",
    },
    correct: "A",
    explanation: "BI berkolaborasi secara terbuka karena manfaat pengetahuan bersama di ASEAN lebih besar daripada risiko, sehingga memperkuat kapasitas kolektif dan mendukung stabilitas regional tanpa mengorbankan inti strategi nasional.",
  },
  {
    type: "Kebijakan Global",
    question: "Dalam koordinasi global, BI dihadapkan pada trade-off antara mendukung kebijakan anti-proteksionisme untuk perdagangan bebas dan menjaga proteksi sektor strategis nasional; strategi mana yang paling logis?",
    options: {
      A: "Mendukung anti-proteksionisme penuh, yang mempromosikan perdagangan tetapi berpotensi merugikan sektor lokal.",
      B: "Menolak inisiatif global, yang melindungi sektor nasional tetapi menghambat perdagangan internasional.",
      C: "Mengadvokasi anti-proteksionisme dengan pengecualian strategis, yang menyeimbangkan perdagangan dengan proteksi.",
      D: "Fokus pada perjanjian bilateral, yang mengurangi cakupan global tetapi meningkatkan kontrol.",
      E: "Menunda dukungan hingga dampak jelas, yang menghindari kesalahan tetapi memperlambat kemajuan.",
    },
    correct: "B",
    explanation: "BI menolak inisiatif global karena prioritas adalah melindungi sektor strategis Indonesia dari kompetisi tidak adil, sehingga menjaga ketahanan ekonomi domestik meskipun berarti mengurangi manfaat perdagangan bebas jangka pendek.",
  },
  {
    type: "Likuiditas G20",
    question: "Di G20, trade-off antara memperkuat mekanisme likuiditas darurat global dan mempertahankan cadangan nasional untuk kemandirian menjadi pertimbangan utama bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Memperkuat mekanisme global secara eksklusif, yang meningkatkan likuiditas tetapi mengurangi kemandirian.",
      B: "Menolak mekanisme G20, yang mempertahankan cadangan tetapi berisiko kekurangan selama krisis.",
      C: "Mengintegrasikan mekanisme dengan peningkatan cadangan nasional, yang menyeimbangkan likuiditas dengan kemandirian.",
      D: "Fokus pada likuiditas regional, yang mengurangi ketergantungan global tetapi membatasi skala.",
      E: "Menunda penguatan hingga evaluasi, yang menghindari komitmen tetapi memperlambat persiapan.",
    },
    correct: "D",
    explanation: "BI fokus pada likuiditas regional karena ini memberikan dukungan yang lebih relevan dengan mitra ASEAN, sehingga mengurangi ketergantungan pada mekanisme global yang mungkin dipengaruhi oleh geopolitik besar.",
  },
  {
    type: "Fasilitas IMF",
    question: "Dalam IMF, BI menghadapi trade-off geopolitik antara mengakses fasilitas fleksibel untuk respons krisis cepat dan menjaga komitmen reformasi struktural nasional; kebijakan mana yang paling tepat?",
    options: {
      A: "Mengakses fasilitas fleksibel tanpa reformasi, yang memungkinkan respons cepat tetapi berpotensi mengabaikan perbaikan jangka panjang.",
      B: "Menolak fasilitas IMF, yang menjaga komitmen reformasi tetapi membatasi respons krisis.",
      C: "Menggabungkan akses fasilitas dengan agenda reformasi internal, yang menyeimbangkan respons dengan perbaikan.",
      D: "Fokus pada fasilitas bilateral, yang mengurangi kondisionalitas IMF tetapi meningkatkan ketergantungan geopolitik.",
      E: "Menunda akses hingga reformasi selesai, yang memastikan kesiapan tetapi memperlambat bantuan.",
    },
    correct: "E",
    explanation: "BI menunda akses hingga reformasi selesai karena ini memastikan bahwa dukungan IMF digunakan secara optimal setelah perbaikan internal, sehingga menghindari ketergantungan berulang dan mendukung ketahanan jangka panjang.",
  },
  {
    type: "Modal BIS",
    question: "Di BIS, trade-off antara meningkatkan persyaratan modal untuk ketahanan bank global dan menjaga akses kredit untuk UMKM domestik menjadi isu kunci bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Meningkatkan persyaratan modal secara global, yang meningkatkan ketahanan tetapi membatasi kredit UMKM.",
      B: "Menolak peningkatan BIS, yang mempertahankan akses kredit tetapi meningkatkan risiko bank.",
      C: "Mengadaptasi persyaratan dengan insentif UMKM, yang menyeimbangkan ketahanan dengan akses kredit.",
      D: "Fokus pada standar nasional, yang memperkuat kontrol lokal tetapi mengisolasi dari global.",
      E: "Menunda peningkatan hingga dampak dinilai, yang menghindari kerugian tetapi memperlambat ketahanan.",
    },
    correct: "A",
    explanation: "BI meningkatkan persyaratan modal karena ini memperkuat ketahanan sistem perbankan secara keseluruhan, yang pada akhirnya mendukung akses kredit berkelanjutan meskipun ada pembatasan jangka pendek pada UMKM.",
  },
  {
    type: "Pengawasan FSB",
    question: "Dalam FSB, BI dihadapkan pada trade-off antara mengadopsi pengawasan asuransi global untuk pencegahan risiko dan mempertahankan regulasi sektor asuransi nasional; pendekatan mana yang paling rasional?",
    options: {
      A: "Mengadopsi pengawasan global penuh, yang mencegah risiko tetapi mengurangi adaptasi lokal.",
      B: "Menolak pengawasan FSB, yang mempertahankan regulasi nasional tetapi meningkatkan risiko global.",
      C: "Mengintegrasikan pengawasan dengan penyesuaian nasional, yang menyeimbangkan pencegahan dengan fleksibilitas.",
      D: "Fokus pada asuransi regional, yang mengurangi cakupan tetapi meningkatkan relevansi.",
      E: "Menunda adopsi hingga riset lengkap, yang menghindari kesalahan tetapi memperlambat mitigasi.",
    },
    correct: "B",
    explanation: "BI menolak pengawasan FSB karena sektor asuransi Indonesia memerlukan regulasi yang disesuaikan dengan kondisi lokal, sehingga menjaga efektivitas tanpa intervensi global yang mungkin tidak sesuai.",
  },
  {
    type: "CFT FATF",
    question: "Di FATF, trade-off geopolitik antara memperkuat CFT untuk keamanan global dan menjaga alur perdagangan nasional menjadi pertimbangan bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Memperkuat CFT secara ketat, yang meningkatkan keamanan tetapi berpotensi menghambat perdagangan.",
      B: "Menolak peningkatan CFT, yang mempertahankan alur perdagangan tetapi meningkatkan risiko terorisme.",
      C: "Menggabungkan CFT dengan fasilitasi perdagangan, yang menyeimbangkan keamanan dengan ekonomi.",
      D: "Fokus pada CFT domestik, yang memperkuat kontrol lokal tetapi mengabaikan transnasional.",
      E: "Menunda penguatan hingga teknologi siap, yang menghindari gangguan tetapi memperlambat keamanan.",
    },
    correct: "D",
    explanation: "BI fokus pada CFT domestik karena ini memungkinkan penanganan risiko yang lebih tepat sasaran di Indonesia, sehingga menjaga keamanan tanpa mengganggu alur perdagangan global secara berlebih.",
  },
  {
    type: "Kapasitas SEACEN",
    question: "Dalam SEACEN, BI menghadapi trade-off antara meningkatkan kapasitas pengawasan regional untuk stabilitas bersama dan mempertahankan anggaran nasional untuk prioritas domestik; strategi mana yang paling logis?",
    options: {
      A: "Meningkatkan kapasitas regional secara signifikan, yang memperkuat stabilitas tetapi menguras anggaran nasional.",
      B: "Menolak peningkatan SEACEN, yang mempertahankan anggaran tetapi menghambat stabilitas regional.",
      C: "Mengintegrasikan peningkatan dengan kontribusi proporsional, yang menyeimbangkan stabilitas dengan anggaran.",
      D: "Fokus pada kapasitas nasional saja, yang memperkuat domestik tetapi mengisolasi regional.",
      E: "Menunda peningkatan hingga ekonomi pulih, yang menghindari beban tetapi memperlambat kemajuan.",
    },
    correct: "E",
    explanation: "BI menunda peningkatan hingga ekonomi pulih karena ini memastikan bahwa kontribusi tidak membebani anggaran saat ini, sehingga memungkinkan dukungan regional di masa depan tanpa mengorbankan prioritas domestik.",
  },
  {
    type: "Digital Global",
    question: "Dalam koordinasi global, trade-off antara mendukung regulasi data digital untuk privasi internasional dan menjaga inovasi teknologi nasional menjadi isu utama bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Mendukung regulasi data global ketat, yang melindungi privasi tetapi membatasi inovasi.",
      B: "Menolak regulasi global, yang mempromosikan inovasi tetapi meningkatkan risiko privasi.",
      C: "Mengadaptasi regulasi dengan zona inovasi nasional, yang menyeimbangkan privasi dengan pertumbuhan.",
      D: "Fokus pada regulasi domestik, yang memperkuat kontrol lokal tetapi mengabaikan standar global.",
      E: "Menunda regulasi hingga konsensus, yang menghindari konflik tetapi memperlambat perlindungan.",
    },
    correct: "A",
    explanation: "BI mendukung regulasi ketat karena prioritas adalah melindungi privasi pengguna di era digital, yang pada akhirnya mendukung kepercayaan dan inovasi berkelanjutan meskipun ada pembatasan awal.",
  },
  {
    type: "Iklim G20",
    question: "Di G20, BI dihadapkan pada trade-off geopolitik antara mempromosikan pajak karbon global untuk mitigasi iklim dan menjaga daya saing industri nasional; kebijakan mana yang paling tepat?",
    options: {
      A: "Mempromosikan pajak karbon global, yang mendukung mitigasi tetapi berpotensi merugikan industri lokal.",
      B: "Menolak pajak G20, yang mempertahankan daya saing tetapi menghambat upaya iklim.",
      C: "Mengintegrasikan pajak dengan subsidi industri, yang menyeimbangkan mitigasi dengan daya saing.",
      D: "Fokus pada pajak regional, yang mengurangi cakupan tetapi meningkatkan adaptasi.",
      E: "Menunda pajak hingga teknologi hijau matang, yang menghindari kerugian tetapi memperlambat aksi.",
    },
    correct: "B",
    explanation: "BI menolak pajak G20 karena industri Indonesia masih bergantung pada energi murah, sehingga menjaga daya saing ekonomi nasional lebih penting daripada komitmen global yang bisa menghambat pertumbuhan.",
  },
  {
    type: "SDR IMF",
    question: "Dalam IMF, trade-off antara mengalokasikan SDR lebih banyak untuk negara berkembang guna likuiditas dan menjaga nilai SDR untuk stabilitas global menjadi pertimbangan bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Mengalokasikan SDR lebih banyak tanpa batas, yang meningkatkan likuiditas tetapi berpotensi menurunkan nilai SDR.",
      B: "Menolak alokasi tambahan, yang menjaga nilai SDR tetapi membatasi likuiditas negara berkembang.",
      C: "Mengalokasikan SDR dengan mekanisme redistribusi, yang menyeimbangkan likuiditas dengan stabilitas nilai.",
      D: "Fokus pada SDR bilateral, yang mengurangi skala global tetapi meningkatkan kontrol.",
      E: "Menunda alokasi hingga inflasi terkendali, yang menghindari risiko tetapi memperlambat bantuan.",
    },
    correct: "D",
    explanation: "BI fokus pada SDR bilateral karena ini memberikan likuiditas yang ditargetkan tanpa memengaruhi stabilitas SDR global, sehingga mendukung kebutuhan Indonesia melalui kesepakatan langsung.",
  },
  {
    type: "Risiko BIS",
    question: "Di BIS, BI menghadapi trade-off antara mengadopsi model risiko klimatik untuk perbankan global dan menjaga fokus pada risiko kredit tradisional; pendekatan mana yang paling rasional?",
    options: {
      A: "Mengadopsi model klimatik penuh, yang mempersiapkan risiko masa depan tetapi mengalihkan dari kredit saat ini.",
      B: "Menolak model BIS, yang mempertahankan fokus kredit tetapi mengabaikan risiko klimatik.",
      C: "Mengintegrasikan model klimatik secara bertahap, yang menyeimbangkan persiapan dengan fokus tradisional.",
      D: "Fokus pada model nasional, yang memperkuat adaptasi lokal tetapi mengisolasi global.",
      E: "Menunda adopsi hingga data klimatik lengkap, yang menghindari kesalahan tetapi memperlambat transisi.",
    },
    correct: "E",
    explanation: "BI menunda adopsi hingga data lengkap karena ini memastikan model yang akurat, sehingga menghindari implementasi prematur yang bisa salah mengalokasikan sumber daya dari risiko kredit utama.",
  },
  {
    type: "Crypto FSB",
    question: "Dalam FSB, trade-off geopolitik antara regulasi crypto global untuk stabilitas dan menjaga ruang untuk adopsi crypto domestik menjadi isu kunci bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Regulasi crypto global ketat, yang meningkatkan stabilitas tetapi membatasi adopsi lokal.",
      B: "Menolak regulasi FSB, yang mempromosikan adopsi tetapi meningkatkan risiko stabilitas.",
      C: "Mengadaptasi regulasi dengan pilot domestik, yang menyeimbangkan stabilitas dengan adopsi.",
      D: "Fokus pada crypto regional, yang mengurangi cakupan tetapi meningkatkan relevansi.",
      E: "Menunda regulasi hingga teknologi stabil, yang menghindari gangguan tetapi memperlambat perlindungan.",
    },
    correct: "A",
    explanation: "BI regulasi ketat karena stabilitas keuangan global lebih prioritas daripada adopsi cepat, sehingga mencegah gejolak yang bisa memengaruhi ekonomi Indonesia secara negatif.",
  },
  {
    type: "Virtual FATF",
    question: "Di FATF, BI dihadapkan pada trade-off antara standar virtual asset service provider untuk pencegahan dan menjaga inklusi keuangan digital nasional; strategi mana yang paling logis?",
    options: {
      A: "Standar VASP ketat, yang mencegah kejahatan tetapi berpotensi membatasi inklusi digital.",
      B: "Menolak standar FATF, yang mempertahankan inklusi tetapi meningkatkan risiko kejahatan.",
      C: "Mengintegrasikan standar dengan program inklusi, yang menyeimbangkan pencegahan dengan akses.",
      D: "Fokus pada VASP domestik, yang memperkuat kontrol lokal tetapi mengabaikan transnasional.",
      E: "Menunda standar hingga evaluasi, yang menghindari kerugian tetapi memperlambat mitigasi.",
    },
    correct: "B",
    explanation: "BI menolak standar FATF karena inklusi keuangan digital krusial untuk populasi unbanked di Indonesia, sehingga prioritas pada akses meskipun ada risiko kejahatan yang bisa dikelola secara nasional.",
  },
  {
    type: "Moneter SEACEN",
    question: "Dalam SEACEN, trade-off antara harmonisasi moneter regional untuk integrasi ekonomi dan mempertahankan suku bunga nasional untuk inflasi domestik menjadi pertimbangan bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Harmonisasi moneter penuh, yang mempromosikan integrasi tetapi mengganggu kontrol inflasi.",
      B: "Menolak harmonisasi SEACEN, yang mempertahankan suku bunga tetapi menghambat integrasi.",
      C: "Harmonisasi bertahap dengan penyesuaian inflasi, yang menyeimbangkan integrasi dengan kontrol.",
      D: "Fokus pada moneter nasional, yang memperkuat domestik tetapi mengisolasi regional.",
      E: "Menunda harmonisasi hingga inflasi stabil, yang menghindari risiko tetapi memperlambat kemajuan.",
    },
    correct: "D",
    explanation: "BI fokus pada moneter nasional karena kontrol inflasi domestik lebih penting daripada integrasi regional cepat, sehingga menjaga stabilitas harga di Indonesia tanpa kompromi.",
  },
  {
    type: "Pandemi Global",
    question: "Dalam koordinasi global, BI menghadapi trade-off antara mendukung stimulus fiskal global pasca-pandemi untuk pemulihan dan menjaga defisit anggaran nasional; kebijakan mana yang paling tepat?",
    options: {
      A: "Mendukung stimulus global besar, yang mempercepat pemulihan tetapi meningkatkan defisit nasional.",
      B: "Menolak stimulus koordinasi, yang menjaga defisit tetapi memperlambat pemulihan global.",
      C: "Mengintegrasikan stimulus dengan target defisit nasional, yang menyeimbangkan pemulihan dengan fiskal.",
      D: "Fokus pada stimulus domestik, yang memperkuat kontrol lokal tetapi mengabaikan sinergi global.",
      E: "Menunda stimulus hingga vaksinasi lengkap, yang menghindari defisit berlebih tetapi memperlambat recovery.",
    },
    correct: "E",
    explanation: "BI menunda stimulus hingga vaksinasi lengkap karena ini memastikan pemulihan yang berkelanjutan tanpa menambah defisit secara tidak perlu, sehingga mendukung kestabilan jangka panjang.",
  },
  {
    type: "Perdagangan G20",
    question: "Di G20, trade-off geopolitik antara mendukung reformasi WTO untuk perdagangan adil dan menjaga subsidi pertanian nasional menjadi isu utama bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Mendukung reformasi WTO penuh, yang mempromosikan adil tetapi berpotensi menghapus subsidi lokal.",
      B: "Menolak reformasi G20, yang mempertahankan subsidi tetapi menghambat perdagangan global.",
      C: "Mengadvokasi reformasi dengan pengecualian subsidi, yang menyeimbangkan adil dengan proteksi.",
      D: "Fokus pada perjanjian regional, yang mengurangi cakupan WTO tetapi meningkatkan fleksibilitas.",
      E: "Menunda reformasi hingga konsensus, yang menghindari konflik tetapi memperlambat perubahan.",
    },
    correct: "C",
    explanation: "BI mengadvokasi reformasi dengan pengecualian karena ini memungkinkan perdagangan yang lebih adil secara global sambil melindungi subsidi pertanian yang vital untuk ketahanan pangan Indonesia.",
  },
  {
    type: "Krisis IMF",
    question: "Dalam IMF, BI dihadapkan pada trade-off antara mengakses pinjaman kondisional untuk krisis likuiditas dan mempertahankan kebijakan moneter independen; pendekatan mana yang paling rasional?",
    options: {
      A: "Mengakses pinjaman kondisional cepat, yang menyelesaikan likuiditas tetapi mengikat kebijakan nasional.",
      B: "Menolak pinjaman IMF, yang mempertahankan independensi tetapi berisiko prolong krisis.",
      C: "Menggabungkan pinjaman dengan negosiasi kondisi ringan, yang menyeimbangkan likuiditas dengan otonomi.",
      D: "Fokus pada cadangan internal, yang memperkuat independensi tetapi membatasi skala respons.",
      E: "Menunda akses hingga alternatif tersedia, yang menghindari kondisi tetapi memperlambat pemulihan.",
    },
    correct: "C",
    explanation: "BI menggabungkan dengan negosiasi karena ini memberikan akses likuiditas yang diperlukan sambil meminimalkan intervensi eksternal, sehingga menjaga sebagian besar otonomi kebijakan.",
  },
  {
    type: "Inklusi BIS",
    question: "Di BIS, trade-off antara standar inklusi keuangan global untuk akses universal dan menjaga standar risiko nasional menjadi pertimbangan bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Standar inklusi global ketat, yang meningkatkan akses tetapi berpotensi meningkatkan risiko.",
      B: "Menolak standar BIS, yang menjaga risiko tetapi membatasi inklusi.",
      C: "Mengintegrasikan standar dengan mitigasi risiko lokal, yang menyeimbangkan akses dengan keamanan.",
      D: "Fokus pada inklusi domestik, yang memperkuat nasional tetapi mengabaikan best practices global.",
      E: "Menunda standar hingga pengujian, yang menghindari kesalahan tetapi memperlambat inklusi.",
    },
    correct: "C",
    explanation: "BI mengintegrasikan dengan mitigasi karena ini mempromosikan inklusi keuangan sambil mengelola risiko secara efektif, sehingga mendukung akses luas tanpa mengorbankan stabilitas.",
  },
  {
    type: "Resolusi FSB",
    question: "Dalam FSB, BI menghadapi trade-off geopolitik antara mekanisme resolusi cross-border untuk bank gagal dan mempertahankan yurisdiksi nasional; strategi mana yang paling logis?",
    options: {
      A: "Mekanisme resolusi cross-border penuh, yang memudahkan penanganan gagal tetapi mengurangi yurisdiksi.",
      B: "Menolak mekanisme FSB, yang mempertahankan yurisdiksi tetapi mempersulit resolusi global.",
      C: "Mengadaptasi mekanisme dengan hak veto nasional, yang menyeimbangkan penanganan dengan kontrol.",
      D: "Fokus pada resolusi regional, yang mengurangi kompleksitas global tetapi membatasi cakupan.",
      E: "Menunda mekanisme hingga simulasi selesai, yang menghindari risiko tetapi memperlambat kesiapan.",
    },
    correct: "C",
    explanation: "BI mengadaptasi dengan hak veto karena ini memungkinkan kerjasama internasional dalam resolusi sambil menjaga otoritas nasional atas aset domestik.",
  },
  {
    type: "Beneficial FATF",
    question: "Di FATF, trade-off antara transparansi beneficial ownership global untuk anti-korupsi dan menjaga kerahasiaan bisnis nasional menjadi isu kunci bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Transparansi beneficial penuh, yang mencegah korupsi tetapi mengungkap kerahasiaan bisnis.",
      B: "Menolak transparansi FATF, yang melindungi kerahasiaan tetapi meningkatkan risiko korupsi.",
      C: "Mengintegrasikan transparansi dengan proteksi data bisnis, yang menyeimbangkan anti-korupsi dengan privasi.",
      D: "Fokus pada beneficial domestik, yang memperkuat lokal tetapi mengabaikan global.",
      E: "Menunda transparansi hingga sistem aman, yang menghindari kebocoran tetapi memperlambat pencegahan.",
    },
    correct: "C",
    explanation: "BI mengintegrasikan dengan proteksi karena ini efektif melawan korupsi sambil melindungi informasi bisnis sensitif, sehingga mendukung integritas tanpa kerugian kompetitif.",
  },
  {
    type: "Inflasi SEACEN",
    question: "Dalam SEACEN, BI dihadapkan pada trade-off antara target inflasi regional untuk stabilitas mata uang dan target inflasi nasional untuk pertumbuhan; kebijakan mana yang paling tepat?",
    options: {
      A: "Target inflasi regional seragam, yang memperkuat stabilitas mata uang tetapi mengabaikan pertumbuhan lokal.",
      B: "Menolak target SEACEN, yang mempertahankan target nasional tetapi menghambat stabilitas regional.",
      C: "Target regional dengan rentang nasional, yang menyeimbangkan stabilitas dengan pertumbuhan.",
      D: "Fokus pada inflasi domestik saja, yang memperkuat kontrol tetapi mengisolasi regional.",
      E: "Menunda target hingga data harmonis, yang menghindari kesalahan tetapi memperlambat implementasi.",
    },
    correct: "C",
    explanation: "BI memilih target dengan rentang karena ini memungkinkan koordinasi regional sambil memberikan fleksibilitas untuk menyesuaikan dengan kebutuhan pertumbuhan Indonesia.",
  },
  {
    type: "Sustainability Global",
    question: "Dalam koordinasi global, trade-off antara framework sustainability reporting untuk transparansi ESG dan menjaga biaya compliance nasional menjadi pertimbangan bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Framework sustainability global, yang meningkatkan transparansi tetapi meningkatkan biaya compliance.",
      B: "Menolak framework koordinasi, yang menjaga biaya tetapi mengurangi transparansi ESG.",
      C: "Mengadaptasi framework dengan subsidi compliance, yang menyeimbangkan transparansi dengan biaya.",
      D: "Fokus pada reporting domestik, yang memperkuat lokal tetapi mengabaikan standar global.",
      E: "Menunda framework hingga tools murah tersedia, yang menghindari beban tetapi memperlambat ESG.",
    },
    correct: "C",
    explanation: "BI mengadaptasi dengan subsidi karena ini mempromosikan transparansi lingkungan sambil meringankan beban finansial pada institusi domestik, sehingga mendukung keberlanjutan tanpa hambatan ekonomi.",
  },
  {
    type: "Debt G20",
    question: "Di G20, BI menghadapi trade-off geopolitik antara inisiatif debt relief untuk negara miskin dan menjaga kredibilitas kreditur nasional; pendekatan mana yang paling rasional?",
    options: {
      A: "Inisiatif debt relief luas, yang membantu negara miskin tetapi berpotensi merugikan kreditur Indonesia.",
      B: "Menolak debt relief G20, yang mempertahankan kredibilitas tetapi memperburuk hutang global.",
      C: "Debt relief dengan kompensasi kreditur, yang menyeimbangkan bantuan dengan perlindungan.",
      D: "Fokus pada relief bilateral, yang mengurangi skala tetapi meningkatkan kontrol.",
      E: "Menunda relief hingga recovery, yang menghindari kerugian tetapi memperlambat bantuan.",
    },
    correct: "C",
    explanation: "BI memilih relief dengan kompensasi karena ini memberikan bantuan kepada negara yang membutuhkan sambil melindungi posisi kreditur Indonesia, sehingga mendukung solidaritas global tanpa kerugian finansial.",
  },
  {
    type: "Surveillance IMF",
    question: "Dalam IMF, trade-off antara enhanced surveillance untuk prediksi krisis global dan mempertahankan kedaulatan data nasional menjadi isu utama bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Enhanced surveillance penuh, yang memprediksi krisis tetapi mengurangi kedaulatan data.",
      B: "Menolak surveillance IMF, yang mempertahankan data tetapi menghambat prediksi global.",
      C: "Surveillance dengan akses data terbatas, yang menyeimbangkan prediksi dengan kedaulatan.",
      D: "Fokus pada surveillance domestik, yang memperkuat nasional tetapi mengabaikan global.",
      E: "Menunda enhanced hingga protokol data, yang menghindari intrusi tetapi memperlambat prediksi.",
    },
    correct: "C",
    explanation: "BI memilih surveillance terbatas karena ini memungkinkan kontribusi pada prediksi krisis sambil menjaga kontrol atas data sensitif Indonesia.",
  },
  {
    type: "Payment BIS",
    question: "Di BIS, BI dihadapkan pada trade-off antara interconnectivity payment system global untuk efisiensi dan menjaga keamanan sistem pembayaran nasional; strategi mana yang paling logis?",
    options: {
      A: "Interconnectivity global lengkap, yang meningkatkan efisiensi tetapi berpotensi mengancam keamanan.",
      B: "Menolak interconnectivity BIS, yang menjaga keamanan tetapi mengurangi efisiensi.",
      C: "Interconnectivity dengan layer keamanan nasional, yang menyeimbangkan efisiensi dengan proteksi.",
      D: "Fokus pada payment regional, yang mengurangi risiko global tetapi membatasi skala.",
      E: "Menunda interconnectivity hingga tes keamanan, yang menghindari ancaman tetapi memperlambat efisiensi.",
    },
    correct: "C",
    explanation: "BI memilih interconnectivity dengan layer keamanan karena ini meningkatkan efisiensi transaksi internasional sambil memastikan sistem pembayaran Indonesia tetap aman dari ancaman eksternal.",
  },
  {
    type: "Macro FSB",
    question: "Dalam FSB, trade-off geopolitik antara macroprudential tools global untuk ketahanan dan fleksibilitas tools nasional untuk adaptasi menjadi pertimbangan bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Tools macroprudential global seragam, yang meningkatkan ketahanan tetapi mengurangi adaptasi lokal.",
      B: "Menolak tools FSB, yang mempertahankan fleksibilitas tetapi menghambat ketahanan global.",
      C: "Tools global dengan kalibrasi nasional, yang menyeimbangkan ketahanan dengan adaptasi.",
      D: "Fokus pada tools regional, yang mengurangi kompleksitas tetapi membatasi cakupan.",
      E: "Menunda tools hingga validasi, yang menghindari kesalahan tetapi memperlambat ketahanan.",
    },
    correct: "C",
    explanation: "BI memilih tools dengan kalibrasi karena ini memungkinkan penerapan standar global yang disesuaikan dengan kondisi Indonesia, sehingga meningkatkan ketahanan tanpa kehilangan fleksibilitas.",
  },
  {
    type: "Risk FATF",
    question: "Di FATF, BI menghadapi trade-off antara risk-based approach untuk AML yang efisien dan menjaga sumber daya pengawasan nasional; kebijakan mana yang paling tepat?",
    options: {
      A: "Risk-based approach global, yang efisien tetapi memerlukan sumber daya lebih banyak.",
      B: "Menolak approach FATF, yang menjaga sumber daya tetapi kurang efisien.",
      C: "Approach dengan alokasi sumber daya adaptif, yang menyeimbangkan efisiensi dengan pengelolaan.",
      D: "Fokus pada risk domestik, yang memperkuat lokal tetapi mengabaikan global.",
      E: "Menunda approach hingga training, yang menghindari overload tetapi memperlambat efisiensi.",
    },
    correct: "C",
    explanation: "BI memilih approach adaptif karena ini memfokuskan upaya pada risiko tinggi sambil mengelola sumber daya secara bijak, sehingga meningkatkan efektivitas tanpa kelebihan beban.",
  },
  {
    type: "Exchange SEACEN",
    question: "Dalam SEACEN, trade-off antara exchange rate coordination regional untuk stabilitas dan independensi exchange rate nasional untuk kompetitif menjadi isu kunci bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Coordination exchange regional penuh, yang meningkatkan stabilitas tetapi mengurangi kompetitif.",
      B: "Menolak coordination SEACEN, yang mempertahankan independensi tetapi menghambat stabilitas.",
      C: "Coordination dengan band nasional, yang menyeimbangkan stabilitas dengan kompetitif.",
      D: "Fokus pada exchange domestik, yang memperkuat kontrol tetapi mengisolasi regional.",
      E: "Menunda coordination hingga volatilitas rendah, yang menghindari konflik tetapi memperlambat stabilitas.",
    },
    correct: "C",
    explanation: "BI memilih coordination dengan band karena ini memungkinkan stabilitas mata uang regional sambil memberikan ruang untuk menjaga daya saing ekspor Indonesia.",
  },
  {
    type: "Cyber Global",
    question: "Dalam koordinasi global, BI dihadapkan pada trade-off antara cyber resilience standards internasional untuk keamanan dan biaya implementasi nasional; pendekatan mana yang paling rasional?",
    options: {
      A: "Standards cyber global ketat, yang meningkatkan keamanan tetapi tinggi biaya.",
      B: "Menolak standards koordinasi, yang menjaga biaya tetapi kurang keamanan.",
      C: "Standards dengan phased implementation, yang menyeimbangkan keamanan dengan biaya.",
      D: "Fokus pada cyber domestik, yang memperkuat lokal tetapi mengabaikan interkoneksi.",
      E: "Menunda standards hingga ancaman menurun, yang menghindari biaya tetapi memperlambat keamanan.",
    },
    correct: "C",
    explanation: "BI memilih phased implementation karena ini secara bertahap meningkatkan ketahanan cyber sambil mengelola biaya, sehingga mencapai keamanan tanpa tekanan finansial mendadak.",
  },
  {
    type: "Tax G20",
    question: "Di G20, trade-off geopolitik antara global minimum tax untuk keadilan dan menjaga insentif pajak nasional untuk investasi menjadi pertimbangan bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Global minimum tax penuh, yang mempromosikan keadilan tetapi mengurangi insentif investasi.",
      B: "Menolak tax G20, yang mempertahankan insentif tetapi menghambat keadilan global.",
      C: "Tax minimum dengan pengecualian investasi, yang menyeimbangkan keadilan dengan atraksi.",
      D: "Fokus pada tax regional, yang mengurangi skala tetapi meningkatkan adaptasi.",
      E: "Menunda tax hingga analisis dampak, yang menghindari kerugian tetapi memperlambat keadilan.",
    },
    correct: "C",
    explanation: "BI memilih tax dengan pengecualian karena ini mendukung keadilan pajak global sambil mempertahankan insentif untuk menarik investasi ke Indonesia.",
  },
  {
    type: "Capacity IMF",
    question: "Dalam IMF, BI menghadapi trade-off antara capacity building assistance untuk reformasi dan dependensi pada bantuan eksternal; strategi mana yang paling logis?",
    options: {
      A: "Assistance capacity penuh, yang mempercepat reformasi tetapi meningkatkan dependensi.",
      B: "Menolak assistance IMF, yang menjaga independensi tetapi memperlambat reformasi.",
      C: "Assistance dengan transfer pengetahuan, yang menyeimbangkan reformasi dengan kemandirian.",
      D: "Fokus pada capacity domestik, yang memperkuat internal tetapi mengabaikan expertise global.",
      E: "Menunda assistance hingga kebutuhan jelas, yang menghindari dependensi tetapi memperlambat kemajuan.",
    },
    correct: "C",
    explanation: "BI memilih assistance dengan transfer karena ini memperoleh keahlian untuk reformasi sambil membangun kapasitas internal, sehingga mengurangi dependensi jangka panjang.",
  },
  {
    type: "Innovation BIS",
    question: "Di BIS, trade-off antara innovation hub untuk teknologi keuangan global dan risiko ketidakstabilan dari inovasi cepat menjadi isu utama bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Innovation hub global aktif, yang mempromosikan teknologi tetapi berisiko ketidakstabilan.",
      B: "Menolak hub BIS, yang menjaga stabilitas tetapi menghambat inovasi.",
      C: "Hub dengan pengawasan risiko, yang menyeimbangkan inovasi dengan stabilitas.",
      D: "Fokus pada hub regional, yang mengurangi risiko global tetapi membatasi kolaborasi.",
      E: "Menunda hub hingga regulasi siap, yang menghindari ketidakstabilan tetapi memperlambat teknologi.",
    },
    correct: "C",
    explanation: "BI memilih hub dengan pengawasan karena ini mendorong inovasi teknologi sambil memitigasi risiko, sehingga mendukung kemajuan tanpa mengorbankan stabilitas keuangan.",
  },
  {
    type: "Climate FSB",
    question: "Dalam FSB, BI dihadapkan pada trade-off geopolitik antara climate-related financial risks disclosure untuk transparansi dan beban pelaporan pada institusi nasional; kebijakan mana yang paling tepat?",
    options: {
      A: "Disclosure climate penuh, yang meningkatkan transparansi tetapi tinggi beban pelaporan.",
      B: "Menolak disclosure FSB, yang menjaga beban rendah tetapi kurang transparansi.",
      C: "Disclosure dengan dukungan pelaporan, yang menyeimbangkan transparansi dengan bantuan.",
      D: "Fokus pada climate domestik, yang memperkuat lokal tetapi mengabaikan global.",
      E: "Menunda disclosure hingga tools tersedia, yang menghindari beban tetapi memperlambat transparansi.",
    },
    correct: "C",
    explanation: "BI memilih disclosure dengan dukungan karena ini meningkatkan transparansi risiko iklim sambil memberikan bantuan untuk mengurangi beban pada bank Indonesia.",
  },
  {
    type: "PEP FATF",
    question: "Di FATF, trade-off antara enhanced due diligence untuk PEP global anti-korupsi dan menjaga hubungan diplomatik nasional menjadi pertimbangan bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Due diligence PEP ketat, yang mencegah korupsi tetapi berpotensi mengganggu diplomatik.",
      B: "Menolak enhanced FATF, yang mempertahankan hubungan tetapi meningkatkan risiko korupsi.",
      C: "Due diligence dengan protokol diplomatik, yang menyeimbangkan anti-korupsi dengan hubungan.",
      D: "Fokus pada PEP domestik, yang memperkuat internal tetapi mengabaikan internasional.",
      E: "Menunda enhanced hingga panduan jelas, yang menghindari konflik tetapi memperlambat pencegahan.",
    },
    correct: "C",
    explanation: "BI memilih due diligence dengan protokol karena ini efektif melawan korupsi sambil menjaga sensitivitas diplomatik, sehingga mendukung integritas tanpa kerusakan hubungan.",
  },
  {
    type: "Financial SEACEN",
    question: "Dalam SEACEN, BI menghadapi trade-off antara financial stability forum regional untuk koordinasi dan biaya partisipasi nasional; pendekatan mana yang paling rasional?",
    options: {
      A: "Forum stability regional aktif, yang meningkatkan koordinasi tetapi tinggi biaya.",
      B: "Menolak forum SEACEN, yang menjaga biaya rendah tetapi kurang koordinasi.",
      C: "Forum dengan kontribusi berbagi, yang menyeimbangkan koordinasi dengan biaya.",
      D: "Fokus pada stability domestik, yang memperkuat nasional tetapi mengisolasi regional.",
      E: "Menunda forum hingga kebutuhan mendesak, yang menghindari biaya tetapi memperlambat koordinasi.",
    },
    correct: "C",
    explanation: "BI memilih forum dengan berbagi karena ini memperkuat koordinasi stabilitas ASEAN sambil mendistribusikan biaya secara adil di antara anggota.",
  },
  {
    type: "Biodiversity Global",
    question: "Dalam koordinasi global, trade-off antara biodiversity-linked finance untuk konservasi dan prioritas pembangunan ekonomi nasional menjadi isu kunci bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Biodiversity finance global, yang mempromosikan konservasi tetapi berpotensi menghambat pembangunan.",
      B: "Menolak linked finance, yang mempertahankan prioritas ekonomi tetapi mengabaikan konservasi.",
      C: "Finance dengan integrasi pembangunan, yang menyeimbangkan konservasi dengan ekonomi.",
      D: "Fokus pada biodiversity domestik, yang memperkuat lokal tetapi mengabaikan global.",
      E: "Menunda finance hingga target ekonomi tercapai, yang menghindari hambatan tetapi memperlambat konservasi.",
    },
    correct: "C",
    explanation: "BI memilih finance dengan integrasi karena ini mendukung konservasi keanekaragaman hayati sambil selaras dengan tujuan pembangunan Indonesia, sehingga mencapai keseimbangan berkelanjutan.",
  },
  {
    type: "Supply G20",
    question: "Di G20, BI dihadapkan pada trade-off geopolitik antara resilient supply chain initiative untuk ketahanan dan ketergantungan pada rantai pasok global murah; strategi mana yang paling logis?",
    options: {
      A: "Initiative supply resilient penuh, yang meningkatkan ketahanan tetapi meningkatkan biaya.",
      B: "Menolak initiative G20, yang mempertahankan murah tetapi kurang ketahanan.",
      C: "Initiative dengan diversifikasi pasok, yang menyeimbangkan ketahanan dengan biaya.",
      D: "Fokus pada supply regional, yang mengurangi ketergantungan global tetapi membatasi variasi.",
      E: "Menunda initiative hingga disrupsi berikutnya, yang menghindari biaya tetapi memperlambat kesiapan.",
    },
    correct: "C",
    explanation: "BI memilih initiative dengan diversifikasi karena ini membangun ketahanan rantai pasok sambil menjaga efisiensi biaya melalui sumber beragam.",
  },
  {
    type: "Technical IMF",
    question: "Dalam IMF, trade-off antara technical assistance untuk modernisasi moneter dan risiko adopsi model asing yang tidak sesuai menjadi pertimbangan bagi BI; pendekatan apa yang paling rasional?",
    options: {
      A: "Technical assistance penuh, yang memodernisasi moneter tetapi berisiko model tidak sesuai.",
      B: "Menolak assistance IMF, yang menghindari risiko tetapi memperlambat modernisasi.",
      C: "Assistance dengan customisasi nasional, yang menyeimbangkan modernisasi dengan kesesuaian.",
      D: "Fokus pada technical domestik, yang memperkuat internal tetapi kurang expertise.",
      E: "Menunda assistance hingga penilaian, yang menghindari kesalahan tetapi memperlambat kemajuan.",
    },
    correct: "C",
    explanation: "BI memilih assistance dengan customisasi karena ini memanfaatkan keahlian IMF sambil menyesuaikan dengan konteks Indonesia, sehingga mencapai modernisasi yang efektif.",
  },
  {
    type: "CBDC BIS",
    question: "Di BIS, BI menghadapi trade-off antara cross-border CBDC interoperability untuk pembayaran global dan menjaga kontrol moneter nasional; kebijakan mana yang paling tepat?",
    options: {
      A: "Interoperability CBDC global, yang memudahkan pembayaran tetapi mengurangi kontrol moneter.",
      B: "Menolak interoperability BIS, yang mempertahankan kontrol tetapi menghambat pembayaran global.",
      C: "Interoperability dengan gateway nasional, yang menyeimbangkan pembayaran dengan kontrol.",
      D: "Fokus pada CBDC domestik, yang memperkuat nasional tetapi mengisolasi global.",
      E: "Menunda interoperability hingga standar aman, yang menghindari risiko tetapi memperlambat efisiensi.",
    },
    correct: "C",
    explanation: "BI memilih interoperability dengan gateway karena ini meningkatkan efisiensi pembayaran internasional sambil mempertahankan kendali atas aliran moneter domestik.",
  },
  {
    type: "Non-Bank FSB",
    question: "Dalam FSB, trade-off geopolitik antara regulating non-bank financial intermediation untuk stabilitas dan mendorong pertumbuhan sektor non-bank nasional menjadi isu utama bagi BI; strategi apa yang paling logis?",
    options: {
      A: "Regulating non-bank ketat, yang meningkatkan stabilitas tetapi membatasi pertumbuhan.",
      B: "Menolak regulating FSB, yang mempromosikan pertumbuhan tetapi meningkatkan risiko stabilitas.",
      C: "Regulating dengan threshold pertumbuhan, yang menyeimbangkan stabilitas dengan ekspansi.",
      D: "Fokus pada non-bank domestik, yang memperkuat lokal tetapi mengabaikan global.",
      E: "Menunda regulating hingga data risiko, yang menghindari pembatasan tetapi memperlambat stabilitas.",
    },
    correct: "C",
    explanation: "BI memilih regulating dengan threshold karena ini mengelola risiko dari sektor non-bank sambil memungkinkan pertumbuhan yang berkelanjutan di Indonesia.",
  },
  {
    type: "NPO FATF",
    question: "Di FATF, BI dihadapkan pada trade-off antara supervising NPO untuk pencegahan terorisme dan menjaga kebebasan operasi NPO nasional; pendekatan mana yang paling rasional?",
    options: {
      A: "Supervising NPO global, yang mencegah terorisme tetapi membatasi kebebasan operasi.",
      B: "Menolak supervising FATF, yang mempertahankan kebebasan tetapi meningkatkan risiko terorisme.",
      C: "Supervising dengan pedoman kebebasan, yang menyeimbangkan pencegahan dengan operasi.",
      D: "Fokus pada NPO domestik, yang memperkuat kontrol lokal tetapi mengabaikan transnasional.",
      E: "Menunda supervising hingga assessment, yang menghindari pembatasan tetapi memperlambat pencegahan.",
    },
    correct: "C",
    explanation: "BI memilih supervising dengan pedoman karena ini efektif mencegah penyalahgunaan sambil menjaga peran penting NPO dalam masyarakat Indonesia.",
  },
  {
    type: "Macro SEACEN",
    question: "Dalam SEACEN, trade-off antara macro-financial linkage research regional untuk pemahaman dan alokasi sumber daya riset nasional menjadi pertimbangan bagi BI; kebijakan apa yang paling tepat?",
    options: {
      A: "Research linkage regional luas, yang meningkatkan pemahaman tetapi mengalihkan sumber daya nasional.",
      B: "Menolak research SEACEN, yang menjaga sumber daya tetapi kurang pemahaman regional.",
      C: "Research dengan kolaborasi berbagi, yang menyeimbangkan pemahaman dengan alokasi.",
      D: "Fokus pada linkage domestik, yang memperkuat nasional tetapi mengisolasi regional.",
      E: "Menunda research hingga prioritas jelas, yang menghindari pengalihan tetapi memperlambat wawasan.",
    },
    correct: "C",
    explanation: "BI memilih research dengan berbagi karena ini meningkatkan pemahaman linkage makro-finansial melalui kerjasama, sehingga efisien dalam penggunaan sumber daya.",
  },
  {
    type: "AI Global",
    question: "Dalam koordinasi global, BI menghadapi trade-off antara AI ethics guidelines untuk keuangan etis dan kecepatan adopsi AI nasional untuk kompetitif; strategi mana yang paling logis?",
    options: {
      A: "Guidelines AI ethics global, yang mempromosikan etis tetapi memperlambat adopsi.",
      B: "Menolak guidelines koordinasi, yang mempercepat kompetitif tetapi kurang etis.",
      C: "Guidelines dengan akselerasi adopsi, yang menyeimbangkan etis dengan kompetitif.",
      D: "Fokus pada AI domestik, yang memperkuat kontrol tetapi mengabaikan standar global.",
      E: "Menunda guidelines hingga maturitas AI, yang menghindari pembatasan tetapi memperlambat etika.",
    },
    correct: "C",
    explanation: "BI memilih guidelines dengan akselerasi karena ini memastikan penggunaan AI yang etis sambil mendorong adopsi cepat untuk menjaga daya saing keuangan Indonesia.",
  },
];

const modul6Questions = shuffleQuestions(originalmodul6Questions);

export default modul6Questions;