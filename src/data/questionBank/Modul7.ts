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

const originalmodul7Questions: Question[] = [
  {
    type: "Inflasi Pangan",
    question: "Dalam skenario gejolak inflasi pangan akibat banjir besar di wilayah penghasil beras utama Indonesia, yang menyebabkan kenaikan harga pangan volatile dan tekanan pada inflasi inti, kebijakan mana yang paling konsisten dengan mandat BI untuk menjaga stabilitas harga sambil mendukung stabilitas sistem keuangan?",
    options: {
      A: "Menaikkan suku bunga acuan secara tajam untuk menekan inflasi, yang dapat mengurangi likuiditas bank dan memperkuat nilai tukar rupiah tetapi berisiko memperlambat pertumbuhan ekonomi.",
      B: "Melakukan intervensi langsung di pasar valas untuk menstabilkan rupiah, yang menjaga likuiditas domestik tetapi berpotensi meningkatkan inflasi impor dan menguras cadangan devisa.",
      C: "Meningkatkan operasi pasar terbuka untuk menyerap likuiditas berlebih, yang membantu mengendalikan inflasi tanpa langsung memengaruhi nilai tukar tetapi bisa menekan kredit sektor riil.",
      D: "Menurunkan rasio giro wajib minimum untuk meningkatkan likuiditas bank, yang mendukung kredit murah untuk sektor pertanian tetapi berisiko memperburuk inflasi pangan jangka pendek.",
      E: "Mengimplementasikan forward guidance untuk ekspektasi inflasi rendah, yang stabilkan nilai tukar tanpa perubahan likuiditas langsung tetapi bergantung pada kredibilitas BI di pasar.",
    },
    correct: "A",
    explanation: "Menaikkan suku bunga acuan efektif karena langsung menargetkan inflasi dengan mengurangi permintaan agregat, sehingga menekan harga pangan; meskipun mengurangi likuiditas, ini konsisten dengan mandat stabilitas harga BI, sementara efek penguatan rupiah membantu mengurangi tekanan impor, meski ada trade-off pertumbuhan.",
  },
  {
    type: "Capital Outflow",
    question: "Di tengah capital outflow masif akibat kenaikan suku bunga Fed AS, yang menyebabkan depresiasi rupiah dan ketegangan likuiditas di pasar uang domestik, tindakan kebijakan BI mana yang paling selaras dengan mandat menjaga stabilitas moneter dan keuangan?",
    options: {
      A: "Melakukan intervensi valas untuk membeli rupiah, yang mempertahankan nilai tukar tetapi mengurangi cadangan devisa dan berpotensi meningkatkan inflasi melalui likuiditas berlebih.",
      B: "Menaikkan rasio cadangan wajib untuk menyerap likuiditas, yang mengendalikan inflasi tetapi bisa memperburuk outflow dengan menekan kredit dan melemahkan nilai tukar lebih lanjut.",
      C: "Memperluas fasilitas repo untuk bank domestik, yang menjaga likuiditas sistem keuangan tanpa langsung memengaruhi inflasi tetapi berisiko mendorong spekulasi nilai tukar.",
      D: "Menurunkan suku bunga acuan untuk merangsang inflow, yang meningkatkan likuiditas dan mendukung pertumbuhan tetapi berpotensi mempercepat inflasi dan depresiasi rupiah.",
      E: "Mengeluarkan obligasi BI untuk menarik modal asing, yang stabilkan nilai tukar dan likuiditas tetapi bisa meningkatkan biaya utang dan tekanan inflasi jangka menengah.",
    },
    correct: "C",
    explanation: "Memperluas fasilitas repo efektif karena menyediakan likuiditas sementara kepada bank tanpa mengubah kebijakan moneter secara permanen, sehingga menjaga stabilitas keuangan; ini mencegah krisis likuiditas yang bisa memperburuk outflow, sementara inflasi tetap terkendali dan nilai tukar distabilkan melalui kepercayaan pasar.",
  },
  {
    type: "Krisis Sistem Pembayaran",
    question: "Saat terjadi krisis sistem pembayaran akibat gangguan cyber pada infrastruktur kliring nasional, yang mengancam likuiditas harian bank dan stabilitas keuangan secara keseluruhan, kebijakan BI mana yang paling sesuai dengan mandat hukumnya?",
    options: {
      A: "Memberikan pinjaman darurat ke bank terdampak, yang menjaga likuiditas tetapi berisiko moral hazard dan peningkatan inflasi jika tidak dikendalikan.",
      B: "Menghentikan sementara transaksi valas untuk lindungi rupiah, yang stabilkan nilai tukar tetapi bisa meningkatkan ketidakpastian likuiditas dan inflasi domestik.",
      C: "Meningkatkan pengawasan makroprudensial pada sistem pembayaran, yang mencegah eskalasi tanpa perubahan likuiditas langsung tetapi bergantung pada implementasi cepat.",
      D: "Menurunkan biaya transaksi digital untuk alihkan lalu lintas, yang tingkatkan likuiditas alternatif tetapi berpotensi memperburuk inflasi melalui percepatan uang beredar.",
      E: "Mengaktifkan protokol cadangan sistem pembayaran, yang pulihkan likuiditas cepat tanpa memengaruhi nilai tukar secara signifikan tetapi memerlukan koordinasi antarlembaga.",
    },
    correct: "E",
    explanation: "Mengaktifkan protokol cadangan efektif karena langsung mengembalikan fungsi pembayaran tanpa menambah likuiditas berlebih, sehingga mencegah krisis keuangan; ini selaras dengan mandat BI untuk stabilitas sistem, di mana likuiditas dipulihkan secara terkendali, inflasi tetap stabil, dan nilai tukar tidak terganggu oleh panic pasar.",
  },
  {
    type: "Adopsi Digital Rupiah",
    question: "Dalam fase awal adopsi digital rupiah (CBDC) di tengah fluktuasi kripto global, yang berpotensi mengganggu likuiditas tradisional dan stabilitas moneter, tindakan strategis BI mana yang paling konsisten dengan mandatnya?",
    options: {
      A: "Mempercepat peluncuran CBDC penuh untuk kompetisi dengan kripto, yang tingkatkan likuiditas digital tetapi berisiko inflasi tinggi dan volatilitas nilai tukar.",
      B: "Membatasi akses CBDC ke institusi keuangan saja, yang jaga stabilitas likuiditas tetapi bisa memperlambat adopsi dan melemahkan nilai tukar rupiah terhadap aset digital.",
      C: "Mengintegrasikan CBDC dengan regulasi anti-spekulasi, yang seimbangkan likuiditas tanpa memicu inflasi berlebih atau depresiasi nilai tukar signifikan.",
      D: "Menunda adopsi CBDC hingga stabilitas global pulih, yang lindungi likuiditas tradisional tetapi berpotensi meningkatkan inflasi melalui ketergantungan pada sistem lama.",
      E: "Mendorong kolaborasi dengan platform kripto swasta, yang tingkatkan likuiditas inovatif tetapi berisiko kehilangan kontrol moneter dan peningkatan inflasi impor.",
    },
    correct: "C",
    explanation: "Mengintegrasikan dengan regulasi anti-spekulasi efektif karena mencegah gejolak dari kripto sambil mempromosikan adopsi terkendali, sehingga likuiditas meningkat secara stabil; ini menjaga inflasi rendah melalui pengawasan, nilai tukar rupiah tetap kuat, dan selaras dengan mandat BI untuk inovasi keuangan yang aman.",
  },
  {
    type: "Fluktuasi Global",
    question: "Menghadapi fluktuasi global akibat perang dagang AS-China, yang menyebabkan volatilitas komoditas dan tekanan pada nilai tukar rupiah, kebijakan BI mana yang paling mendukung stabilitas sistem keuangan?",
    options: {
      A: "Menaikkan suku bunga untuk tarik inflow modal, yang kuatkan nilai tukar tetapi kurangi likuiditas domestik dan berpotensi tingkatkan inflasi melalui biaya pinjaman tinggi.",
      B: "Melakukan swap valas dengan bank sentral asing, yang stabilkan likuiditas tanpa memengaruhi inflasi langsung tetapi bergantung pada mitra dan bisa lemahkan rupiah jangka panjang.",
      C: "Memperketat aturan modal outflow domestik, yang lindungi nilai tukar tetapi bisa kurangi likuiditas pasar dan picu inflasi melalui ketidakefisienan alokasi.",
      D: "Menurunkan pajak instrumen keuangan untuk dorong investasi, yang tingkatkan likuiditas tetapi berisiko inflasi tinggi dan depresiasi nilai tukar akibat spekulasi.",
      E: "Mengeluarkan forward contract untuk hedge komoditas, yang seimbangkan nilai tukar tanpa perubahan likuiditas besar tetapi memerlukan cadangan dan bisa tingkatkan inflasi jika gagal.",
    },
    correct: "B",
    explanation: "Melakukan swap valas efektif karena menyediakan likuiditas asing sementara tanpa menguras cadangan BI, sehingga menstabilkan nilai tukar rupiah; ini mencegah inflasi dari impor mahal, menjaga stabilitas keuangan, dan konsisten dengan mandat BI untuk kerjasama internasional dalam menghadapi fluktuasi global.",
  },
  {
    type: "Inflasi Impor",
    question: "Saat inflasi impor melonjak karena kenaikan harga minyak global, yang mengancam stabilitas nilai tukar dan likuiditas domestik, tindakan BI mana yang paling sesuai dengan mandat hukumnya untuk stabilitas moneter?",
    options: {
      A: "Intervensi valas untuk jual dolar, yang kuatkan rupiah tetapi kurangi cadangan dan berpotensi tingkatkan likuiditas berlebih leading to inflasi domestik.",
      B: "Menaikkan rasio likuiditas makroprudensial, yang kendalikan inflasi tetapi bisa kurangi kredit dan lemahkan nilai tukar melalui pertumbuhan lambat.",
      C: "Memperluas instrumen hedging untuk importir, yang stabilkan nilai tukar tanpa ubah likuiditas langsung tetapi bergantung pada partisipasi pasar dan bisa tingkatkan inflasi jika salah harga.",
      D: "Menurunkan suku bunga untuk stimulasi ekonomi, yang tingkatkan likuiditas tetapi perburuk inflasi impor dan depresiasi rupiah.",
      E: "Koordinasi dengan pemerintah untuk subsidi energi, yang jaga inflasi tetapi bisa kurangi likuiditas BI dan memengaruhi nilai tukar melalui defisit fiskal.",
    },
    correct: "A",
    explanation: "Intervensi valas untuk jual dolar efektif karena langsung memperkuat rupiah, mengurangi biaya impor minyak sehingga menekan inflasi; meskipun mengurangi cadangan, ini menjaga likuiditas terkendali dan selaras dengan mandat BI untuk stabilitas nilai tukar, mencegah spiral inflasi dari efek sekunder.",
  },
  {
    type: "Deflasi Ekonomi",
    question: "Dalam situasi deflasi akibat penurunan permintaan pasca-pandemi, yang mengancam likuiditas bank dan stabilitas keuangan, kebijakan strategis BI mana yang paling konsisten dengan mandatnya?",
    options: {
      A: "Menurunkan suku bunga acuan secara bertahap, yang tingkatkan likuiditas dan dorong inflasi moderat tetapi berisiko melemahkan nilai tukar rupiah.",
      B: "Menaikkan pajak transaksi keuangan untuk kendalikan deflasi, yang stabilkan nilai tukar tetapi kurangi likuiditas dan perburuk deflasi melalui pengurangan aktivitas.",
      C: "Memperketat regulasi kredit konsumen, yang jaga stabilitas keuangan tetapi bisa tingkatkan deflasi dan memengaruhi likuiditas negatif.",
      D: "Meluncurkan program quantitative easing, yang banjiri likuiditas untuk lawan deflasi tetapi berpotensi tingkatkan inflasi jangka panjang dan depresiasi rupiah.",
      E: "Mengimplementasikan forward guidance untuk inflasi target, yang pengaruh ekspektasi tanpa ubah likuiditas langsung tetapi bergantung pada kredibilitas dan bisa gagal stabilkan nilai tukar.",
    },
    correct: "A",
    explanation: "Menurunkan suku bunga efektif karena merangsang pinjaman dan pengeluaran, meningkatkan likuiditas sehingga melawan deflasi; ini mendukung inflasi moderat tanpa ekses, meskipun ada risiko nilai tukar, dan konsisten dengan mandat BI untuk stabilitas harga melalui penyesuaian moneter yang hati-hati.",
  },
  {
    type: "Boom Kredit",
    question: "Menghadapi boom kredit berlebih yang berisiko bubble aset dan inflasi tinggi, sambil menjaga likuiditas sistem, tindakan BI mana yang paling mendukung stabilitas keuangan?",
    options: {
      A: "Menaikkan rasio loan-to-value untuk properti, yang kendalikan kredit tetapi kurangi likuiditas sektor riil dan bisa tingkatkan inflasi melalui biaya sewa.",
      B: "Menurunkan giro wajib minimum untuk tingkatkan likuiditas, yang dorong kredit lebih lanjut tetapi perburuk inflasi dan melemahkan nilai tukar.",
      C: "Memperketat aturan countercyclical capital buffer, yang kurangi risiko bubble tanpa ubah likuiditas langsung tetapi bisa memperlambat pertumbuhan dan stabilkan nilai tukar.",
      D: "Intervensi pasar obligasi untuk beli surat utang, yang tingkatkan likuiditas tetapi berpotensi tingkatkan inflasi dan depresiasi rupiah.",
      E: "Koordinasi dengan otoritas fiskal untuk pajak aset, yang kendalikan boom tetapi bisa kurangi likuiditas pasar dan memengaruhi inflasi negatif jangka pendek.",
    },
    correct: "C",
    explanation: "Memperketat countercyclical capital buffer efektif karena meningkatkan ketahanan bank terhadap bubble tanpa mengurangi likuiditas secara drastis, sehingga menekan inflasi dari kredit berlebih; ini stabilkan nilai tukar melalui kepercayaan investor dan selaras dengan mandat BI untuk pencegahan risiko sistemik.",
  },
  {
    type: "Krisis Likuiditas Bank",
    question: "Saat krisis likuiditas bank akibat penarikan massal simpanan, yang mengancam stabilitas sistem keuangan dan nilai tukar, kebijakan BI mana yang paling sesuai?",
    options: {
      A: "Memberikan lender of last resort facility, yang pulihkan likuiditas tetapi berisiko moral hazard dan peningkatan inflasi jika tidak dikembalikan.",
      B: "Menaikkan suku bunga deposito untuk tarik simpanan, yang stabilkan likuiditas tetapi bisa tingkatkan inflasi biaya dan lemahkan nilai tukar melalui pertumbuhan lambat.",
      C: "Memperluas jaminan simpanan LPS, yang cegah panic tanpa ubah likuiditas langsung tetapi bergantung pada dana dan bisa tingkatkan inflasi jangka panjang.",
      D: "Menurunkan pajak bunga simpanan, yang dorong simpanan tetapi kurangi pendapatan fiskal dan berpotensi tingkatkan likuiditas berlebih leading to inflasi.",
      E: "Intervensi valas untuk dukung bank asing, yang stabilkan nilai tukar tetapi bisa kurangi likuiditas domestik dan memengaruhi inflasi impor.",
    },
    correct: "A",
    explanation: "Memberikan lender of last resort efektif karena langsung menyuntik likuiditas ke bank bermasalah, mencegah contagion ke sistem keuangan; ini menjaga stabilitas tanpa inflasi signifikan jika bersyarat, nilai tukar tetap stabil, dan konsisten dengan mandat BI sebagai penjaga terakhir stabilitas.",
  },
  {
    type: "Volatilitas Komoditas",
    question: "Dalam volatilitas komoditas global yang memengaruhi ekspor Indonesia dan nilai tukar rupiah, sambil menjaga likuiditas domestik, tindakan strategis BI mana yang paling konsisten?",
    options: {
      A: "Membangun buffer cadangan komoditas, yang stabilkan nilai tukar tetapi kurangi likuiditas cadangan dan bisa tingkatkan inflasi melalui biaya penyimpanan.",
      B: "Menaikkan suku bunga untuk lindungi rupiah, yang kuatkan nilai tukar tetapi kurangi likuiditas kredit dan berpotensi deflasi jangka pendek.",
      C: "Mengembangkan instrumen derivatif komoditas, yang hedge volatilitas tanpa ubah likuiditas langsung tetapi memerlukan regulasi dan bisa tingkatkan inflasi jika spekulatif.",
      D: "Menurunkan ekspor pajak untuk dorong volume, yang tingkatkan likuiditas devisa tetapi berisiko depresiasi rupiah dan inflasi domestik.",
      E: "Koordinasi dengan ASEAN untuk stabilisasi regional, yang seimbangkan nilai tukar tetapi bergantung pada mitra dan bisa memengaruhi likuiditas tidak langsung.",
    },
    correct: "C",
    explanation: "Mengembangkan derivatif komoditas efektif karena memungkinkan hedging tanpa menguras cadangan, sehingga stabilkan nilai tukar rupiah; likuiditas tetap terjaga, inflasi terkendali melalui mitigasi harga, dan ini mendukung mandat BI untuk inovasi keuangan dalam menghadapi volatilitas eksternal.",
  },
  {
    type: "Krisis Utang Luar Negeri",
    question: "Menghadapi krisis utang luar negeri korporasi yang mengancam likuiditas devisa dan stabilitas nilai tukar, kebijakan BI mana yang paling mendukung mandat stabilitas?",
    options: {
      A: "Memperketat regulasi pinjaman luar negeri, yang lindungi nilai tukar tetapi kurangi likuiditas investasi dan bisa tingkatkan inflasi melalui biaya modal tinggi.",
      B: "Melakukan debt swap dengan kreditor asing, yang stabilkan likuiditas devisa tanpa memengaruhi inflasi langsung tetapi bergantung pada negosiasi dan bisa lemahkan rupiah.",
      C: "Menaikkan cadangan wajib devisa bank, yang kuatkan buffer tetapi kurangi likuiditas domestik dan berpotensi deflasi.",
      D: "Menurunkan suku bunga valas, yang dorong refinancing tetapi tingkatkan inflasi impor dan depresiasi rupiah.",
      E: "Mengeluarkan sukuk global untuk tarik dana, yang tingkatkan likuiditas tetapi berisiko utang baru dan peningkatan inflasi jangka menengah.",
    },
    correct: "A",
    explanation: "Memperketat regulasi pinjaman efektif karena mencegah akumulasi utang berisiko, sehingga lindungi nilai tukar rupiah; meskipun mengurangi likuiditas sementara, ini menekan inflasi dari default potensial dan selaras dengan mandat BI untuk pengawasan prudensial guna stabilitas keuangan jangka panjang.",
  },
  {
    type: "Inovasi Fintech",
    question: "Dalam ekspansi inovasi fintech yang berpotensi mengganggu likuiditas tradisional bank dan stabilitas moneter, tindakan BI mana yang paling konsisten dengan mandatnya?",
    options: {
      A: "Menerapkan sandbox regulasi untuk fintech, yang seimbangkan inovasi dengan pengawasan tanpa ubah likuiditas langsung tetapi bisa tingkatkan inflasi jika tidak terkontrol.",
      B: "Melarang integrasi fintech dengan bank konvensional, yang jaga stabilitas likuiditas tetapi memperlambat pertumbuhan dan melemahkan nilai tukar melalui kurang kompetitif.",
      C: "Menaikkan biaya lisensi fintech, yang kendalikan ekspansi tetapi kurangi likuiditas inovatif dan berpotensi deflasi.",
      D: "Menurunkan regulasi untuk dorong adopsi, yang tingkatkan likuiditas digital tetapi berisiko inflasi tinggi dan volatilitas nilai tukar.",
      E: "Koordinasi dengan OJK untuk standar bersama, yang stabilkan sistem tanpa memengaruhi inflasi langsung tetapi memerlukan waktu dan bisa memengaruhi likuiditas sementara.",
    },
    correct: "A",
    explanation: "Menerapkan sandbox efektif karena memungkinkan pengujian inovasi dalam lingkungan terkendali, sehingga jaga likuiditas bank tradisional; ini mencegah inflasi dari risiko tidak terkendali, stabilkan nilai tukar melalui kepercayaan, dan mendukung mandat BI untuk promosi inovasi keuangan yang aman.",
  },
  {
    type: "Gejolak Pasar Obligasi",
    question: "Saat gejolak pasar obligasi domestik akibat yield spike global, yang mengancam likuiditas pemerintah dan bank, kebijakan BI mana yang paling sesuai?",
    options: {
      A: "Melakukan operasi twist untuk stabilkan yield, yang seimbangkan likuiditas tanpa memicu inflasi berlebih tetapi bisa memengaruhi nilai tukar melalui ekspektasi.",
      B: "Menaikkan suku bunga jangka pendek, yang kendalikan inflasi tetapi kurangi likuiditas obligasi dan perburuk gejolak.",
      C: "Menurunkan pembelian obligasi BI, yang tingkatkan disiplin pasar tetapi berisiko likuiditas rendah dan depresiasi rupiah.",
      D: "Memperluas QE untuk beli obligasi, yang tingkatkan likuiditas tetapi berpotensi tingkatkan inflasi dan lemahkan nilai tukar.",
      E: "Intervensi langsung di pasar sekunder, yang stabilkan yield tetapi bisa kurangi likuiditas jangka panjang dan tingkatkan inflasi jika berlebih.",
    },
    correct: "A",
    explanation: "Operasi twist efektif karena menukar obligasi jangka pendek dengan panjang untuk menurunkan yield tanpa menambah uang beredar, sehingga jaga likuiditas; ini tekankan inflasi, stabilkan nilai tukar melalui pasar tenang, dan konsisten dengan mandat BI untuk intervensi moneter dalam gejolak obligasi.",
  },
  {
    type: "Krisis Regional ASEAN",
    question: "Dalam krisis regional ASEAN akibat default negara tetangga, yang memengaruhi likuiditas cross-border dan nilai tukar rupiah, tindakan BI mana yang paling mendukung stabilitas?",
    options: {
      A: "Memperkuat Chiang Mai Initiative untuk swap regional, yang tingkatkan likuiditas tanpa memicu inflasi domestik tetapi bergantung pada mitra dan bisa lemahkan rupiah jika gagal.",
      B: "Menaikkan tarif impor dari negara bermasalah, yang lindungi nilai tukar tetapi kurangi likuiditas perdagangan dan tingkatkan inflasi.",
      C: "Menurunkan eksposur bank domestik ke regional, yang jaga stabilitas likuiditas tetapi memperlambat integrasi dan bisa deflasi.",
      D: "Melakukan bilateral aid ke negara tetangga, yang stabilkan regional tetapi kurangi cadangan BI dan berpotensi inflasi.",
      E: "Memperketat capital control sementara, yang lindungi likuiditas domestik tetapi bisa tingkatkan inflasi dan isolasi nilai tukar.",
    },
    correct: "A",
    explanation: "Memperkuat Chiang Mai Initiative efektif karena menyediakan likuiditas regional melalui swap, mencegah contagion ke Indonesia; ini jaga inflasi stabil, perkuat nilai tukar melalui kerjasama, dan selaras dengan mandat BI untuk kontribusi pada stabilitas keuangan regional.",
  },
  {
    type: "Inflasi Hijau",
    question: "Menghadapi inflasi hijau akibat transisi energi berkelanjutan yang meningkatkan biaya produksi, sambil menjaga likuiditas green finance, kebijakan BI mana yang paling konsisten?",
    options: {
      A: "Mendorong green bond issuance dengan insentif, yang tingkatkan likuiditas hijau tanpa memicu inflasi berlebih tetapi bisa memengaruhi nilai tukar melalui inflow.",
      B: "Menaikkan suku bunga untuk kendalikan inflasi, yang kurangi likuiditas transisi tetapi stabilkan nilai tukar.",
      C: "Menurunkan regulasi untuk proyek hijau, yang dorong likuiditas tetapi berisiko inflasi tinggi dan depresiasi rupiah.",
      D: "Intervensi untuk subsidi energi fosil sementara, yang jaga inflasi tetapi kurangi likuiditas hijau dan memengaruhi nilai tukar negatif jangka panjang.",
      E: "Mengintegrasikan ESG dalam pengawasan bank, yang seimbangkan likuiditas tanpa ubah inflasi langsung tetapi memerlukan waktu adaptasi.",
    },
    correct: "E",
    explanation: "Mengintegrasikan ESG efektif karena mendorong alokasi likuiditas ke proyek hijau secara berkelanjutan, sehingga kendalikan inflasi dari transisi; ini stabilkan nilai tukar melalui kepercayaan investor, dan mendukung mandat BI untuk kebijakan moneter yang mendukung pembangunan berkelanjutan.",
  },
  {
    type: "Capital Inflow Berlebih",
    question: "Dalam capital inflow berlebih akibat carry trade, yang berisiko inflasi aset dan volatilitas nilai tukar, tindakan BI mana yang paling sesuai dengan mandat stabilitas?",
    options: {
      A: "Menaikkan pajak inflow modal asing, yang kendalikan inflasi tetapi kurangi likuiditas dan bisa lemahkan rupiah jangka pendek.",
      B: "Menurunkan suku bunga untuk kurangi daya tarik, yang stabilkan likuiditas tetapi berpotensi tingkatkan inflasi domestik dan depresiasi.",
      C: "Memperketat macroprudential pada sektor aset, yang kurangi risiko bubble tanpa ubah likuiditas langsung tetapi bisa memperlambat pertumbuhan.",
      D: "Intervensi valas untuk beli dolar, yang tingkatkan cadangan tetapi berpotensi inflasi melalui uang beredar lebih banyak.",
      E: "Mengeluarkan instrumen steril untuk serap likuiditas, yang jaga inflasi stabil tanpa memengaruhi nilai tukar signifikan.",
    },
    correct: "E",
    explanation: "Mengeluarkan instrumen steril efektif karena menyerap likuiditas berlebih dari inflow, mencegah inflasi aset; ini menjaga nilai tukar stabil tanpa intervensi langsung, dan konsisten dengan mandat BI untuk pengelolaan moneter guna menghindari gejolak dari modal panas.",
  },
  {
    type: "Krisis Non-Bank",
    question: "Saat krisis likuiditas di lembaga keuangan non-bank yang mengancam stabilitas sistemik dan nilai tukar, kebijakan strategis BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Memperluas pengawasan ke non-bank, yang jaga stabilitas tanpa ubah likuiditas langsung tetapi memerlukan reformasi dan bisa tingkatkan inflasi biaya regulasi.",
      B: "Memberikan fasilitas likuiditas ke non-bank, yang pulihkan likuiditas tetapi berisiko moral dan peningkatan inflasi.",
      C: "Menaikkan suku bunga untuk kendalikan spillover, yang stabilkan nilai tukar tetapi kurangi likuiditas keseluruhan.",
      D: "Menurunkan regulasi non-bank untuk dorong kompetisi, yang tingkatkan likuiditas tetapi perburuk krisis dan depresiasi rupiah.",
      E: "Koordinasi dengan OJK untuk resolusi bersama, yang seimbangkan likuiditas tanpa memicu inflasi tetapi bergantung pada kerjasama.",
    },
    correct: "A",
    explanation: "Memperluas pengawasan efektif karena mencegah risiko sistemik dari non-bank, sehingga jaga likuiditas keseluruhan; ini stabilkan inflasi dan nilai tukar melalui pencegahan, dan selaras dengan mandat BI untuk pengawasan makroprudensial di seluruh sektor keuangan.",
  },
  {
    type: "Fluktuasi Mata Uang Digital",
    question: "Dalam fluktuasi mata uang digital swasta yang memengaruhi likuiditas rupiah dan stabilitas moneter, tindakan BI mana yang paling konsisten?",
    options: {
      A: "Melarang transaksi digital swasta, yang lindungi rupiah tetapi kurangi likuiditas inovatif dan bisa tingkatkan inflasi melalui kanal informal.",
      B: "Menaikkan reservasi untuk aset digital bank, yang kendalikan risiko tetapi kurangi likuiditas dan memengaruhi nilai tukar negatif.",
      C: "Mengembangkan regulasi interoperability dengan rupiah, yang seimbangkan likuiditas tanpa memicu inflasi berlebih.",
      D: "Menurunkan biaya transaksi rupiah digital, yang dorong adopsi tetapi berisiko inflasi tinggi dan volatilitas nilai tukar.",
      E: "Intervensi pasar untuk stabilkan harga digital, yang jaga nilai tukar tetapi bisa tingkatkan likuiditas berlebih dan inflasi.",
    },
    correct: "C",
    explanation: "Mengembangkan interoperability efektif karena mengintegrasikan digital swasta dengan rupiah, sehingga jaga likuiditas moneter; ini tekankan inflasi dari spekulasi, stabilkan nilai tukar, dan mendukung mandat BI untuk adaptasi teknologi sambil menjaga kontrol moneter.",
  },
  {
    type: "Defisit Transaksi Berjalan",
    question: "Menghadapi defisit transaksi berjalan kronis yang melemahkan nilai tukar dan likuiditas devisa, kebijakan BI mana yang paling mendukung stabilitas keuangan?",
    options: {
      A: "Mendorong ekspor melalui devaluasi terkendali, yang kuatkan kompetitif tetapi tingkatkan inflasi impor dan kurangi likuiditas jangka pendek.",
      B: "Menaikkan suku bunga untuk tarik FDI, yang stabilkan nilai tukar tetapi kurangi likuiditas domestik dan bisa deflasi.",
      C: "Memperketat impor non-esensial, yang lindungi devisa tetapi bisa tingkatkan inflasi domestik dan memengaruhi likuiditas negatif.",
      D: "Meluncurkan program repatriasi devisa, yang tingkatkan likuiditas tanpa ubah inflasi langsung tetapi bergantung pada insentif.",
      E: "Koordinasi dengan pemerintah untuk diversifikasi ekspor, yang seimbangkan defisit tanpa memicu volatilitas nilai tukar.",
    },
    correct: "D",
    explanation: "Program repatriasi efektif karena membawa devisa kembali ke domestik, meningkatkan likuiditas cadangan; ini stabilkan nilai tukar tanpa inflasi signifikan, dan konsisten dengan mandat BI untuk pengelolaan devisa guna mengatasi defisit berjalan secara berkelanjutan.",
  },
  {
    type: "Boom Ekonomi Digital",
    question: "Dalam boom ekonomi digital yang berisiko inflasi teknologi dan ketidakseimbangan likuiditas, tindakan strategis BI mana yang paling sesuai dengan mandatnya?",
    options: {
      A: "Menerapkan pajak digital untuk kendalikan boom, yang tekankan inflasi tetapi kurangi likuiditas sektor dan bisa lemahkan nilai tukar.",
      B: "Menurunkan regulasi untuk dorong pertumbuhan, yang tingkatkan likuiditas tetapi berpotensi inflasi tinggi dan volatilitas.",
      C: "Menaikkan buffer modal untuk bank digital, yang jaga stabilitas tanpa ubah likuiditas langsung.",
      D: "Intervensi untuk subsidi startup, yang tingkatkan likuiditas tetapi risikokan inflasi dan depresiasi rupiah.",
      E: "Mengintegrasikan data digital dalam kebijakan moneter, yang seimbangkan respons tanpa memicu efek samping.",
    },
    correct: "C",
    explanation: "Menaikkan buffer modal efektif karena meningkatkan ketahanan bank digital terhadap boom, sehingga jaga likuiditas sistemik; ini tekankan inflasi dari overexpansion, stabilkan nilai tukar, dan mendukung mandat BI untuk pengawasan prudensial di era digital.",
  },
  {
    type: "Krisis Iklim",
    question: "Saat krisis iklim menyebabkan bencana alam yang mengganggu likuiditas pertanian dan inflasi pangan, kebijakan BI mana yang paling mendukung stabilitas?",
    options: {
      A: "Memberikan kredit khusus untuk rekonstruksi, yang tingkatkan likuiditas sektor tetapi berisiko inflasi dan memengaruhi nilai tukar.",
      B: "Menaikkan suku bunga untuk kendalikan inflasi, yang stabilkan nilai tukar tetapi kurangi likuiditas pemulihan.",
      C: "Memperluas asuransi iklim melalui bank, yang seimbangkan likuiditas tanpa ubah inflasi langsung.",
      D: "Menurunkan cadangan wajib untuk dorong pinjaman, yang tingkatkan likuiditas tetapi perburuk inflasi.",
      E: "Intervensi pasar pangan untuk stabilkan harga, yang jaga inflasi tetapi bisa kurangi likuiditas jangka panjang.",
    },
    correct: "C",
    explanation: "Memperluas asuransi iklim efektif karena mitigasi risiko bencana, sehingga jaga likuiditas pertanian; ini tekankan inflasi pangan, stabilkan nilai tukar melalui ketahanan ekonomi, dan selaras dengan mandat BI untuk integrasi risiko iklim dalam kebijakan keuangan.",
  },
  {
    type: "Volatilitas Saham",
    question: "Dalam volatilitas saham domestik akibat sentimen global, yang mengancam likuiditas pasar modal dan stabilitas keuangan, tindakan BI mana yang paling konsisten?",
    options: {
      A: "Melakukan stabilisasi melalui pembelian saham, yang tingkatkan likuiditas tetapi berisiko inflasi dan konflik mandat.",
      B: "Menaikkan regulasi short selling, yang kendalikan volatilitas tanpa ubah likuiditas langsung.",
      C: "Menurunkan biaya transaksi bursa, yang dorong likuiditas tetapi bisa tingkatkan inflasi spekulatif.",
      D: "Intervensi valas untuk dukung investor asing, yang stabilkan nilai tukar tetapi kurangi likuiditas domestik.",
      E: "Koordinasi dengan BEI untuk circuit breaker, yang jaga stabilitas tanpa memengaruhi inflasi.",
    },
    correct: "B",
    explanation: "Menaikkan regulasi short selling efektif karena mengurangi spekulasi, sehingga stabilkan likuiditas pasar; ini tekankan inflasi dari panic selling, jaga nilai tukar, dan mendukung mandat BI untuk pengawasan makroprudensial di pasar modal.",
  },
  {
    type: "Krisis Pandemi Lanjutan",
    question: "Menghadapi krisis pandemi lanjutan yang menekan likuiditas UMKM dan inflasi supply chain, kebijakan BI mana yang paling mendukung mandat stabilitas?",
    options: {
      A: "Memperluas program kredit UMKM dengan subsidi bunga, yang tingkatkan likuiditas sektor tetapi berisiko inflasi dan memengaruhi nilai tukar.",
      B: "Menaikkan suku bunga untuk kendalikan inflasi, yang stabilkan nilai tukar tetapi kurangi likuiditas UMKM.",
      C: "Menurunkan rasio cadangan untuk bank UMKM, yang dorong pinjaman tetapi perburuk inflasi.",
      D: "Intervensi supply chain melalui impor prioritas, yang jaga inflasi tetapi bisa kurangi likuiditas devisa.",
      E: "Mengimplementasikan targeted QE untuk UMKM, yang seimbangkan likuiditas tanpa inflasi berlebih.",
    },
    correct: "E",
    explanation: "Targeted QE efektif karena menyuntik likuiditas langsung ke UMKM tanpa banjir umum, sehingga lawan deflasi supply; ini stabilkan inflasi, jaga nilai tukar, dan konsisten dengan mandat BI untuk dukungan moneter di krisis kesehatan.",
  },
  {
    type: "Depresiasi Rupiah Berkepanjangan",
    question: "Dalam depresiasi rupiah berkepanjangan akibat ketidakpastian geopolitik, yang mengancam inflasi dan likuiditas, tindakan strategis BI mana yang paling sesuai?",
    options: {
      A: "Melakukan intervensi valas masif, yang kuatkan rupiah tetapi kurangi cadangan dan bisa tingkatkan likuiditas berlebih.",
      B: "Menaikkan suku bunga secara agresif, yang stabilkan nilai tukar tetapi kurangi likuiditas domestik dan deflasi.",
      C: "Memperketat kontrol modal outflow, yang lindungi rupiah tanpa ubah inflasi langsung.",
      D: "Menurunkan ekspor insentif, yang dorong inflow tetapi berisiko inflasi tinggi.",
      E: "Mengeluarkan komunikasi kredibel untuk ekspektasi, yang stabilkan tanpa memengaruhi likuiditas.",
    },
    correct: "B",
    explanation: "Menaikkan suku bunga agresif efektif karena menarik modal masuk, memperkuat rupiah; meskipun mengurangi likuiditas, ini tekankan inflasi impor, dan mendukung mandat BI untuk intervensi moneter dalam menangani depresiasi berkepanjangan.",
  },
  {
    type: "Inflasi Tenaga Kerja",
    question: "Saat inflasi tenaga kerja melonjak akibat kekurangan pekerja terampil, yang memengaruhi likuiditas industri dan stabilitas, kebijakan BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Mendorong kredit pendidikan dengan rate rendah, yang tingkatkan likuiditas jangka panjang tetapi berisiko inflasi sementara.",
      B: "Menaikkan suku bunga untuk kendalikan upah, yang stabilkan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan pajak tenaga kerja, yang dorong likuiditas tetapi perburuk inflasi.",
      D: "Intervensi pasar kerja melalui program, yang jaga inflasi tetapi bisa memengaruhi nilai tukar.",
      E: "Koordinasi dengan Kemenaker untuk pelatihan, yang seimbangkan tanpa ubah moneter langsung.",
    },
    correct: "E",
    explanation: "Koordinasi dengan Kemenaker efektif karena meningkatkan suplai tenaga kerja, sehingga tekankan inflasi upah; ini jaga likuiditas industri, stabilkan nilai tukar, dan selaras dengan mandat BI untuk kerjasama lintas sektor dalam stabilitas ekonomi.",
  },
  {
    type: "Krisis Energi Global",
    question: "Dalam krisis energi global yang menyebabkan inflasi biaya tinggi dan ketegangan likuiditas, tindakan BI mana yang paling konsisten dengan stabilitas keuangan?",
    options: {
      A: "Subsidi suku bunga untuk sektor energi, yang tingkatkan likuiditas tetapi berisiko inflasi dan depresiasi.",
      B: "Menaikkan cadangan wajib untuk bank energi, yang kendalikan risiko tetapi kurangi likuiditas.",
      C: "Mengembangkan derivatif energi domestik, yang hedge inflasi tanpa ubah likuiditas langsung.",
      D: "Menurunkan impor energi melalui regulasi, yang jaga nilai tukar tetapi bisa tingkatkan inflasi domestik.",
      E: "Intervensi valas untuk impor energi, yang stabilkan likuiditas tetapi kurangi cadangan.",
    },
    correct: "C",
    explanation: "Mengembangkan derivatif energi efektif karena memungkinkan hedging biaya, sehingga tekankan inflasi; ini jaga likuiditas sektor, stabilkan nilai tukar, dan mendukung mandat BI untuk instrumen keuangan dalam mitigasi krisis eksternal.",
  },
  {
    type: "Boom Properti",
    question: "Menghadapi boom properti yang berisiko bubble dan inflasi aset, sambil menjaga likuiditas konstruksi, kebijakan BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Menaikkan loan-to-value ratio, yang kendalikan boom tetapi kurangi likuiditas properti.",
      B: "Menurunkan suku bunga hipotek, yang dorong boom tetapi tingkatkan inflasi.",
      C: "Memperketat pengawasan kredit properti, yang seimbangkan tanpa ubah likuiditas langsung.",
      D: "Intervensi pasar properti melalui pajak, yang tekankan inflasi tetapi bisa memengaruhi nilai tukar.",
      E: "Mengeluarkan obligasi properti, yang tingkatkan likuiditas tetapi risikokan bubble lebih besar.",
    },
    correct: "C",
    explanation: "Memperketat pengawasan kredit efektif karena mencegah pinjaman berlebih, sehingga hindari bubble; ini jaga inflasi aset, stabilkan likuiditas, dan konsisten dengan mandat BI untuk macroprudential di sektor properti.",
  },
  {
    type: "Krisis Cyber Keuangan",
    question: "Saat krisis cyber keuangan mengganggu likuiditas digital dan stabilitas sistem, tindakan strategis BI mana yang paling sesuai?",
    options: {
      A: "Mengaktifkan backup sistem analog, yang pulihkan likuiditas tetapi bisa tingkatkan inflasi transaksi.",
      B: "Menaikkan standar keamanan cyber, yang jaga stabilitas tanpa ubah likuiditas langsung.",
      C: "Menurunkan batas transaksi digital, yang kendalikan risiko tetapi kurangi likuiditas.",
      D: "Intervensi dengan dana cyber recovery, yang tingkatkan likuiditas tetapi berisiko moral.",
      E: "Koordinasi internasional untuk protokol cyber, yang seimbangkan tanpa memengaruhi inflasi domestik.",
    },
    correct: "B",
    explanation: "Menaikkan standar cyber efektif karena mencegah serangan lanjutan, sehingga pulihkan likuiditas digital; ini stabilkan inflasi, jaga nilai tukar melalui kepercayaan, dan mendukung mandat BI untuk ketahanan infrastruktur keuangan.",
  },
  {
    type: "Inflasi Medis",
    question: "Dalam inflasi medis akibat pandemi, yang memengaruhi likuiditas kesehatan dan stabilitas, kebijakan BI mana yang paling mendukung mandat stabilitas?",
    options: {
      A: "Kredit khusus untuk sektor kesehatan, yang tingkatkan likuiditas tetapi berisiko inflasi.",
      B: "Menaikkan suku bunga untuk kendalikan, yang stabilkan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi impor medis, yang dorong suplai tetapi bisa depresiasi rupiah.",
      D: "Intervensi harga medis, yang jaga inflasi tetapi memengaruhi likuiditas negatif.",
      E: "Koordinasi dengan Kemenkes untuk subsidi, yang seimbangkan tanpa ubah moneter.",
    },
    correct: "A",
    explanation: "Kredit khusus efektif karena meningkatkan likuiditas sektor kesehatan, sehingga lawan inflasi medis melalui suplai lebih banyak; ini stabilkan nilai tukar, dan konsisten dengan mandat BI untuk dukungan targeted di krisis sektor spesifik.",
  },
  {
    type: "Volatilitas Logistik",
    question: "Menghadapi volatilitas logistik global yang menyebabkan inflasi supply dan ketegangan likuiditas, tindakan BI mana yang paling konsisten?",
    options: {
      A: "Mendorong kredit logistik domestik, yang tingkatkan likuiditas tetapi berisiko inflasi.",
      B: "Menaikkan buffer likuiditas bank, yang jaga stabilitas tetapi kurangi kredit.",
      C: "Mengembangkan hedging logistik, yang seimbangkan tanpa ubah inflasi langsung.",
      D: "Menurunkan impor pajak logistik, yang dorong likuiditas tetapi depresiasi rupiah.",
      E: "Intervensi pasar transportasi, yang stabilkan harga tetapi bisa kurangi likuiditas.",
    },
    correct: "C",
    explanation: "Mengembangkan hedging efektif karena mitigasi risiko harga logistik, sehingga tekankan inflasi; ini jaga likuiditas, stabilkan nilai tukar, dan mendukung mandat BI untuk instrumen risiko dalam krisis supply chain.",
  },
  {
    type: "Krisis Demografi",
    question: "Dalam krisis demografi aging population yang memengaruhi likuiditas pensiun dan inflasi konsumsi, kebijakan BI mana yang paling mendukung stabilitas?",
    options: {
      A: "Mendorong dana pensiun melalui insentif, yang tingkatkan likuiditas jangka panjang tetapi sementara inflasi.",
      B: "Menaikkan suku bunga tabungan, yang stabilkan likuiditas tetapi bisa deflasi.",
      C: "Menurunkan regulasi imigrasi pekerja, yang dorong suplai tetapi memengaruhi nilai tukar.",
      D: "Intervensi pasar tenaga kerja tua, yang jaga inflasi tetapi kurangi likuiditas.",
      E: "Koordinasi dengan BPS untuk proyeksi, yang seimbangkan tanpa ubah langsung.",
    },
    correct: "A",
    explanation: "Mendorong dana pensiun efektif karena meningkatkan tabungan jangka panjang, sehingga jaga likuiditas pensiun; ini tekankan inflasi konsumsi, stabilkan nilai tukar, dan selaras dengan mandat BI untuk kebijakan yang mendukung stabilitas demografis.",
  },
  {
    type: "Boom AI Keuangan",
    question: "Saat boom AI keuangan berisiko ketidakstabilan algoritma dan likuiditas, tindakan strategis BI mana yang paling sesuai dengan mandatnya?",
    options: {
      A: "Menerapkan audit AI reguler, yang jaga stabilitas tanpa ubah likuiditas langsung.",
      B: "Menurunkan biaya adopsi AI, yang dorong likuiditas tetapi risikokan inflasi.",
      C: "Menaikkan modal untuk bank AI, yang kendalikan risiko tetapi kurangi likuiditas.",
      D: "Intervensi pasar AI, yang stabilkan tetapi bisa memengaruhi nilai tukar.",
      E: "Koordinasi dengan tech regulator, yang seimbangkan inovasi.",
    },
    correct: "A",
    explanation: "Audit AI reguler efektif karena mencegah kesalahan algoritma, sehingga jaga likuiditas keuangan; ini tekankan inflasi dari kesalahan, stabilkan nilai tukar, dan mendukung mandat BI untuk pengawasan teknologi baru.",
  },
  {
    type: "Krisis Air",
    question: "Dalam krisis air yang memengaruhi likuiditas pertanian dan inflasi pangan, kebijakan BI mana yang paling mendukung mandat stabilitas?",
    options: {
      A: "Kredit irigasi dengan rate khusus, yang tingkatkan likuiditas sektor tetapi sementara inflasi.",
      B: "Menaikkan suku bunga untuk kendalikan, yang stabilkan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi air impor, yang dorong suplai tetapi depresiasi rupiah.",
      D: "Intervensi infrastruktur air, yang jaga inflasi tetapi memengaruhi likuiditas negatif.",
      E: "Koordinasi dengan KLHK untuk konservasi, yang seimbangkan tanpa ubah moneter.",
    },
    correct: "A",
    explanation: "Kredit irigasi efektif karena meningkatkan produktivitas pertanian, sehingga lawan inflasi pangan; ini jaga likuiditas sektor, stabilkan nilai tukar, dan konsisten dengan mandat BI untuk dukungan infrastruktur kritis.",
  },
  {
    type: "Volatilitas Geopolitik",
    question: "Menghadapi volatilitas geopolitik yang menyebabkan outflow dan inflasi sanksi, tindakan BI mana yang paling konsisten?",
    options: {
      A: "Membangun aliansi swap bilateral, yang tingkatkan likuiditas tanpa inflasi domestik.",
      B: "Menaikkan cadangan emas, yang stabilkan nilai tukar tetapi kurangi likuiditas devisa.",
      C: "Menurunkan ketergantungan impor sensitif, yang jaga inflasi tetapi bisa kurangi likuiditas.",
      D: "Intervensi valas defensif, yang lindungi rupiah tetapi tingkatkan inflasi.",
      E: "Diversifikasi portofolio cadangan, yang seimbangkan risiko.",
    },
    correct: "E",
    explanation: "Diversifikasi cadangan efektif karena mengurangi risiko geopolitik, sehingga jaga likuiditas; ini stabilkan inflasi, perkuat nilai tukar, dan mendukung mandat BI untuk pengelolaan cadangan yang resilien.",
  },
  {
    type: "Inflasi Pendidikan",
    question: "Saat inflasi pendidikan melonjak, memengaruhi likuiditas rumah tangga dan stabilitas, kebijakan BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Kredit pendidikan subsidi, yang tingkatkan likuiditas tetapi risikokan inflasi.",
      B: "Menaikkan suku bunga pinjaman siswa, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi beasiswa, yang dorong akses tetapi memengaruhi nilai tukar.",
      D: "Intervensi biaya pendidikan, yang jaga inflasi tetapi kurangi likuiditas institusi.",
      E: "Koordinasi dengan Kemendikbud untuk reformasi, yang seimbangkan tanpa ubah moneter.",
    },
    correct: "E",
    explanation: "Koordinasi dengan Kemendikbud efektif karena reformasi struktural tekankan inflasi pendidikan; ini jaga likuiditas rumah tangga, stabilkan nilai tukar, dan selaras dengan mandat BI untuk kerjasama sektor dalam stabilitas harga.",
  },
  {
    type: "Krisis Biodiversitas",
    question: "Dalam krisis biodiversitas yang memengaruhi likuiditas ekowisata dan inflasi sumber daya, tindakan BI mana yang paling sesuai?",
    options: {
      A: "Green credit untuk konservasi, yang tingkatkan likuiditas sektor tetapi sementara inflasi.",
      B: "Menaikkan pajak ekstraktif, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi ekowisata, yang dorong likuiditas tetapi risikokan inflasi.",
      D: "Intervensi pasar biodiversitas, yang stabilkan harga tetapi memengaruhi nilai tukar.",
      E: "Koordinasi dengan KLHK untuk kebijakan, yang seimbangkan stabilitas.",
    },
    correct: "A",
    explanation: "Green credit efektif karena mendukung konservasi, sehingga jaga likuiditas ekowisata; ini tekankan inflasi sumber daya, stabilkan nilai tukar, dan mendukung mandat BI untuk keuangan berkelanjutan.",
  },
  {
    type: "Boom Metaverse",
    question: "Menghadapi boom metaverse yang berisiko inflasi virtual asset dan likuiditas, kebijakan strategis BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Regulasi aset virtual, yang kendalikan boom tanpa ubah likuiditas langsung.",
      B: "Menurunkan biaya transaksi metaverse, yang dorong likuiditas tetapi tingkatkan inflasi.",
      C: "Menaikkan reservasi untuk investasi virtual, yang jaga stabilitas tetapi kurangi likuiditas.",
      D: "Intervensi pasar metaverse, yang stabilkan tetapi bisa depresiasi rupiah.",
      E: "Pengembangan rupiah virtual, yang seimbangkan inovasi.",
    },
    correct: "E",
    explanation: "Pengembangan rupiah virtual efektif karena integrasi metaverse dengan moneter resmi, sehingga jaga likuiditas; ini tekankan inflasi aset, stabilkan nilai tukar, dan konsisten dengan mandat BI untuk adaptasi digital.",
  },
  {
    type: "Krisis Sampah Plastik",
    question: "Saat krisis sampah plastik memengaruhi likuiditas industri daur ulang dan inflasi bahan baku, tindakan BI mana yang paling konsisten?",
    options: {
      A: "Kredit daur ulang subsidi, yang tingkatkan likuiditas sektor tetapi risikokan inflasi.",
      B: "Menaikkan pajak plastik, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi impor daur ulang, yang dorong suplai tetapi depresiasi rupiah.",
      D: "Intervensi pasar plastik, yang jaga inflasi tetapi memengaruhi likuiditas negatif.",
      E: "Koordinasi dengan KLHK untuk regulasi, yang seimbangkan tanpa ubah moneter.",
    },
    correct: "A",
    explanation: "Kredit daur ulang efektif karena meningkatkan kapasitas industri, sehingga lawan inflasi bahan; ini jaga likuiditas, stabilkan nilai tukar, dan mendukung mandat BI untuk keuangan lingkungan.",
  },
  {
    type: "Volatilitas Quantum Computing",
    question: "Dalam volatilitas quantum computing yang mengancam keamanan likuiditas digital, kebijakan BI mana yang paling mendukung stabilitas?",
    options: {
      A: "Upgrade enkripsi quantum-resistant, yang jaga likuiditas tanpa ubah inflasi.",
      B: "Menurunkan adopsi quantum, yang stabilkan tetapi kurangi likuiditas inovatif.",
      C: "Menaikkan riset quantum, yang dorong tetapi risikokan inflasi teknologi.",
      D: "Intervensi pasar quantum, yang stabilkan nilai tukar tetapi kurangi likuiditas.",
      E: "Koordinasi global untuk standar, yang seimbangkan risiko.",
    },
    correct: "A",
    explanation: "Upgrade enkripsi efektif karena lindungi sistem digital, sehingga jaga likuiditas; ini stabilkan inflasi, perkuat nilai tukar, dan selaras dengan mandat BI untuk ketahanan teknologi.",
  },
  {
    type: "Inflasi Space Economy",
    question: "Menghadapi inflasi space economy yang memengaruhi likuiditas satelit dan stabilitas, tindakan strategis BI mana yang paling sesuai?",
    options: {
      A: "Kredit space tech subsidi, yang tingkatkan likuiditas tetapi risikokan inflasi.",
      B: "Menaikkan regulasi space investasi, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan pajak space, yang dorong likuiditas tetapi tingkatkan inflasi.",
      D: "Intervensi pasar space, yang jaga nilai tukar tetapi memengaruhi likuiditas.",
      E: "Koordinasi dengan LAPAN untuk kebijakan, yang seimbangkan tanpa ubah.",
    },
    correct: "B",
    explanation: "Menaikkan regulasi efektif karena kendalikan investasi berlebih, sehingga tekankan inflasi space; ini jaga likuiditas, stabilkan nilai tukar, dan mendukung mandat BI untuk pengawasan sektor baru.",
  },
  {
    type: "Krisis AI Ethics",
    question: "Dalam krisis AI ethics yang mengganggu likuiditas fintech dan inflasi data, kebijakan BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Standar ethics AI untuk bank, yang jaga stabilitas tanpa ubah likuiditas.",
      B: "Menurunkan regulasi AI, yang dorong likuiditas tetapi risikokan inflasi.",
      C: "Menaikkan audit AI, yang kendalikan tetapi kurangi likuiditas inovasi.",
      D: "Intervensi data privacy, yang stabilkan inflasi tetapi memengaruhi nilai tukar.",
      E: "Koordinasi dengan Kominfo untuk framework, yang seimbangkan etika.",
    },
    correct: "E",
    explanation: "Koordinasi dengan Kominfo efektif karena bangun framework ethics, sehingga jaga likuiditas fintech; ini tekankan inflasi data, stabilkan nilai tukar, dan konsisten dengan mandat BI untuk kerjasama dalam inovasi etis.",
  },
  {
    type: "Boom Biotech",
    question: "Saat boom biotech berisiko inflasi medtech dan likuiditas, tindakan BI mana yang paling konsisten dengan stabilitas?",
    options: {
      A: "Regulasi patent biotech, yang kendalikan boom tanpa ubah likuiditas.",
      B: "Menurunkan biaya riset biotech, yang dorong likuiditas tetapi tingkatkan inflasi.",
      C: "Menaikkan modal untuk bank biotech, yang jaga stabilitas tetapi kurangi likuiditas.",
      D: "Intervensi pasar biotech, yang stabilkan nilai tukar tetapi risikokan inflasi.",
      E: "Pengembangan green biotech finance, yang seimbangkan inovasi.",
    },
    correct: "C",
    explanation: "Menaikkan modal bank biotech efektif karena tingkatkan ketahanan, sehingga jaga likuiditas; ini tekankan inflasi medtech, stabilkan nilai tukar, dan mendukung mandat BI untuk prudensial di sektor biotech.",
  },
  {
    type: "Krisis Ocean Economy",
    question: "Dalam krisis ocean economy yang memengaruhi likuiditas perikanan dan inflasi seafood, kebijakan BI mana yang paling mendukung mandat stabilitas?",
    options: {
      A: "Kredit akuakultur subsidi, yang tingkatkan likuiditas sektor tetapi risikokan inflasi.",
      B: "Menaikkan pajak impor seafood, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi maritim, yang dorong likuiditas tetapi tingkatkan inflasi.",
      D: "Intervensi pasar ocean, yang jaga nilai tukar tetapi memengaruhi likuiditas negatif.",
      E: "Koordinasi dengan KKP untuk kebijakan, yang seimbangkan tanpa ubah moneter.",
    },
    correct: "E",
    explanation: "Koordinasi dengan KKP efektif karena reformasi sektor, sehingga lawan inflasi seafood; ini jaga likuiditas perikanan, stabilkan nilai tukar, dan selaras dengan mandat BI untuk kerjasama dalam stabilitas sumber daya.",
  },
  {
    type: "Volatilitas Neurotech",
    question: "Menghadapi volatilitas neurotech yang mengancam likuiditas healthtech dan stabilitas, tindakan strategis BI mana yang paling sesuai?",
    options: {
      A: "Standar regulasi neurotech, yang jaga stabilitas tanpa ubah likuiditas langsung.",
      B: "Menurunkan biaya adopsi neuro, yang dorong likuiditas tetapi risikokan inflasi.",
      C: "Menaikkan riset neuro, yang tingkatkan inovasi tetapi kurangi likuiditas jangka pendek.",
      D: "Intervensi pasar neuro, yang stabilkan inflasi tetapi memengaruhi nilai tukar.",
      E: "Koordinasi global untuk ethics neuro, yang seimbangkan risiko.",
    },
    correct: "A",
    explanation: "Standar regulasi efektif karena mencegah volatilitas, sehingga jaga likuiditas healthtech; ini stabilkan inflasi, perkuat nilai tukar, dan mendukung mandat BI untuk pengawasan tech canggih.",
  },
  {
    type: "Inflasi Urbanisasi",
    question: "Saat inflasi urbanisasi melonjak, memengaruhi likuiditas perumahan dan stabilitas, kebijakan BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Kredit perumahan terjangkau, yang tingkatkan likuiditas tetapi risikokan inflasi.",
      B: "Menaikkan pajak tanah urban, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi zoning, yang dorong suplai tetapi tingkatkan inflasi sementara.",
      D: "Intervensi pasar properti urban, yang jaga nilai tukar tetapi kurangi likuiditas.",
      E: "Koordinasi dengan Pemda untuk planning, yang seimbangkan tanpa ubah moneter.",
    },
    correct: "E",
    explanation: "Koordinasi dengan Pemda efektif karena planning urban tekankan inflasi; ini jaga likuiditas perumahan, stabilkan nilai tukar, dan konsisten dengan mandat BI untuk kerjasama regional.",
  },
  {
    type: "Krisis Genetik Engineering",
    question: "Dalam krisis genetik engineering yang memengaruhi likuiditas agrotech dan inflasi makanan modifikasi, tindakan BI mana yang paling konsisten?",
    options: {
      A: "Regulasi genetik ketat, yang kendalikan risiko tanpa ubah likuiditas langsung.",
      B: "Menurunkan biaya genetik riset, yang dorong likuiditas tetapi tingkatkan inflasi.",
      C: "Menaikkan standar safety genetik, yang jaga stabilitas tetapi kurangi likuiditas.",
      D: "Intervensi pasar genetik, yang stabilkan inflasi tetapi memengaruhi nilai tukar.",
      E: "Koordinasi dengan Kementan untuk kebijakan, yang seimbangkan inovasi.",
    },
    correct: "A",
    explanation: "Regulasi ketat efektif karena mencegah risiko etis, sehingga jaga likuiditas agrotech; ini tekankan inflasi makanan, stabilkan nilai tukar, dan mendukung mandat BI untuk pengawasan biotech.",
  },
  {
    type: "Boom Nanotech",
    question: "Menghadapi boom nanotech berisiko inflasi material dan likuiditas, kebijakan strategis BI mana yang paling mendukung mandat stabilitas?",
    options: {
      A: "Pengawasan nano investasi, yang kendalikan boom tanpa ubah likuiditas.",
      B: "Menurunkan regulasi nano, yang dorong likuiditas tetapi risikokan inflasi.",
      C: "Menaikkan modal untuk nano bank, yang jaga stabilitas tetapi kurangi likuiditas.",
      D: "Intervensi pasar nano, yang stabilkan nilai tukar tetapi tingkatkan inflasi.",
      E: "Pengembangan nano finance framework, yang seimbangkan inovasi.",
    },
    correct: "E",
    explanation: "Framework nano finance efektif karena integrasi inovasi, sehingga jaga likuiditas; ini tekankan inflasi material, stabilkan nilai tukar, dan selaras dengan mandat BI untuk adaptasi nanotech.",
  },
  {
    type: "Krisis Virtual Reality",
    question: "Saat krisis virtual reality memengaruhi likuiditas entertainment dan inflasi konten digital, tindakan BI mana yang paling sesuai?",
    options: {
      A: "Kredit VR startup subsidi, yang tingkatkan likuiditas tetapi risikokan inflasi.",
      B: "Menaikkan pajak VR, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi konten VR, yang dorong likuiditas tetapi tingkatkan inflasi.",
      D: "Intervensi pasar VR, yang jaga nilai tukar tetapi memengaruhi likuiditas negatif.",
      E: "Koordinasi dengan Kemkominfo untuk standar, yang seimbangkan tanpa ubah.",
    },
    correct: "B",
    explanation: "Menaikkan pajak VR efektif karena kendalikan konsumsi berlebih, sehingga tekankan inflasi konten; ini jaga likuiditas entertainment, stabilkan nilai tukar, dan mendukung mandat BI untuk pengelolaan sektor digital.",
  },
  {
    type: "Volatilitas Fusion Energy",
    question: "Dalam volatilitas fusion energy yang mengancam likuiditas energi baru dan stabilitas, kebijakan BI mana yang paling mendukung mandatnya?",
    options: {
      A: "Insentif fusion riset, yang tingkatkan likuiditas jangka panjang tetapi sementara inflasi.",
      B: "Menaikkan regulasi fusion, yang kendalikan volatilitas tetapi kurangi likuiditas.",
      C: "Menurunkan biaya fusion investasi, yang dorong tetapi risikokan inflasi.",
      D: "Intervensi pasar fusion, yang stabilkan inflasi tetapi memengaruhi nilai tukar.",
      E: "Koordinasi dengan ESDM untuk kebijakan, yang seimbangkan energi.",
    },
    correct: "E",
    explanation: "Koordinasi dengan ESDM efektif karena kebijakan energi terintegrasi, sehingga jaga likuiditas fusion; ini stabilkan inflasi, perkuat nilai tukar, dan konsisten dengan mandat BI untuk dukungan transisi energi.",
  },
  {
    type: "Inflasi Teleportasi Hypothetical",
    question: "Menghadapi inflasi hipotetis teleportasi tech yang memengaruhi likuiditas transportasi dan stabilitas, tindakan strategis BI mana yang paling konsisten?",
    options: {
      A: "Regulasi teleportasi awal, yang kendalikan inflasi tanpa ubah likuiditas.",
      B: "Menurunkan regulasi teleport, yang dorong likuiditas tetapi tingkatkan inflasi.",
      C: "Menaikkan standar safety teleport, yang jaga stabilitas tetapi kurangi likuiditas.",
      D: "Intervensi pasar teleport, yang stabilkan nilai tukar tetapi risikokan inflasi.",
      E: "Pengembangan framework teleport finance, yang seimbangkan inovasi.",
    },
    correct: "C",
    explanation: "Menaikkan standar safety efektif karena mencegah risiko, sehingga jaga likuiditas transportasi; ini tekankan inflasi tech, stabilkan nilai tukar, dan mendukung mandat BI untuk pengawasan hipotetis tech.",
  },
  {
    type: "Krisis Time Travel Economic",
    question: "Dalam krisis hipotetis time travel yang mengganggu likuiditas temporal dan inflasi, kebijakan BI mana yang paling mendukung stabilitas?",
    options: {
      A: "Ban time travel transaksi, yang lindungi likuiditas tetapi kurangi inovasi.",
      B: "Menaikkan pajak time jump, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi time, yang dorong tetapi risikokan inflasi tinggi.",
      D: "Intervensi temporal market, yang jaga nilai tukar tetapi memengaruhi likuiditas.",
      E: "Koordinasi multiverse untuk standar, yang seimbangkan tanpa ubah.",
    },
    correct: "A",
    explanation: "Ban transaksi efektif karena mencegah paradox ekonomi, sehingga jaga likuiditas; ini stabilkan inflasi, perkuat nilai tukar, dan selaras dengan mandat BI untuk stabilitas hipotetis.",
  },
  {
    type: "Boom Multiverse Finance",
    question: "Saat boom multiverse finance berisiko inflasi dimensi dan likuiditas, tindakan BI mana yang paling konsisten dengan mandatnya?",
    options: {
      A: "Regulasi multiverse portal, yang kendalikan boom tanpa ubah likuiditas.",
      B: "Menurunkan biaya multiverse transfer, yang dorong likuiditas tetapi tingkatkan inflasi.",
      C: "Menaikkan cadangan multiverse, yang jaga stabilitas tetapi kurangi likuiditas.",
      D: "Intervensi pasar multiverse, yang stabilkan inflasi tetapi memengaruhi nilai tukar.",
      E: "Pengembangan rupiah multiverse, yang seimbangkan inovasi.",
    },
    correct: "E",
    explanation: "Pengembangan rupiah multiverse efektif karena integrasi, sehingga jaga likuiditas; ini tekankan inflasi dimensi, stabilkan nilai tukar, dan mendukung mandat BI untuk adaptasi hipotetis.",
  },
  {
    type: "Krisis Hologram Economy",
    question: "Dalam krisis hologram economy yang memengaruhi likuiditas virtual dan inflasi proyeksi, kebijakan BI mana yang paling mendukung mandat stabilitas?",
    options: {
      A: "Standar hologram regulasi, yang jaga stabilitas tanpa ubah likuiditas langsung.",
      B: "Menurunkan regulasi hologram, yang dorong likuiditas tetapi risikokan inflasi.",
      C: "Menaikkan audit hologram, yang kendalikan tetapi kurangi likuiditas.",
      D: "Intervensi pasar hologram, yang stabilkan nilai tukar tetapi tingkatkan inflasi.",
      E: "Koordinasi dengan tech untuk framework, yang seimbangkan ekonomi virtual.",
    },
    correct: "A",
    explanation: "Standar regulasi efektif karena mencegah penipuan hologram, sehingga jaga likuiditas virtual; ini tekankan inflasi proyeksi, stabilkan nilai tukar, dan konsisten dengan mandat BI untuk pengawasan hologram.",
  },
  {
    type: "Volatilitas Mind Upload",
    question: "Menghadapi volatilitas mind upload yang mengancam likuiditas consciousness dan stabilitas, tindakan strategis BI mana yang paling sesuai?",
    options: {
      A: "Ban mind upload finansial, yang lindungi likuiditas tetapi kurangi inovasi.",
      B: "Menaikkan pajak upload, yang kendalikan inflasi tetapi kurangi likuiditas.",
      C: "Menurunkan regulasi mind, yang dorong tetapi risikokan inflasi tinggi.",
      D: "Intervensi pasar mind, yang jaga nilai tukar tetapi memengaruhi likuiditas.",
      E: "Pengembangan etika mind finance, yang seimbangkan risiko.",
    },
    correct: "E",
    explanation: "Pengembangan etika efektif karena mitigasi risiko, sehingga jaga likuiditas consciousness; ini stabilkan inflasi, perkuat nilai tukar, dan mendukung mandat BI untuk hipotetis mind tech.",
  },
];

const modul7Questions = shuffleQuestions(originalmodul7Questions);

export default modul7Questions;