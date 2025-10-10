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

const originalmodul8Questions: Question[] = [
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Pada Oktober 2025, Bank Indonesia menerbitkan Sukuk valuta asing dengan tenor satu bulan untuk menarik likuiditas sebesar berapa?",
    "options": {
      "A": "US$20 juta",
      "B": "US$40 juta",
      "C": "US$60 juta",
      "D": "US$80 juta",
      "E": "US$100 juta"
    },
    "correct": "B",
    "explanation": "Bank Indonesia menerbitkan Sukuk valuta asing senilai US$40 juta pada 8 Oktober 2025 untuk mengelola likuiditas valas berbasis syariah."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Penurunan BI-Rate ke 4.75% pada September 2025 bertujuan utama untuk apa dalam bauran kebijakan BI?",
    "options": {
      "A": "Mengendalikan inflasi yang melonjak",
      "B": "Mendorong pertumbuhan ekonomi di tengah inflasi rendah",
      "C": "Menarik investasi asing melalui yield tinggi",
      "D": "Memperkuat cadangan devisa secara langsung",
      "E": "Mengurangi defisit anggaran pemerintah"
    },
    "correct": "B",
    "explanation": "Pemotongan BI-Rate ke 4.75% di September 2025 adalah langkah tidak terduga untuk stimulus ekonomi karena inflasi tetap terkendali."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Inflasi tahunan Indonesia pada September 2025 mencapai berapa, yang memengaruhi strategi stabilitas harga pangan BI?",
    "options": {
      "A": "1.95%",
      "B": "2.31%",
      "C": "2.65%",
      "D": "3.12%",
      "E": "3.45%"
    },
    "correct": "C",
    "explanation": "Inflasi naik ke 2.65% pada September 2025, tertinggi sejak Mei 2024, memerlukan penguatan strategi GNPIP untuk stabilitas harga pangan."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Revisi draft RUU sistem keuangan pada Oktober 2025 melunakkan klausul apa terkait wewenang BI?",
    "options": {
      "A": "Pengawasan langsung atas bank swasta",
      "B": "Review parlemen atas kebijakan moneter BI",
      "C": "Penerbitan instrumen moneter pro-market",
      "D": "Kerja sama bilateral dengan bank asing",
      "E": "Pengelolaan cadangan devisa nasional"
    },
    "correct": "B",
    "explanation": "Draft baru melunakkan klausul yang memungkinkan parlemen mereview kebijakan BI, mempertahankan independensi sesuai UU P2SK."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Dalam konteks burden-sharing dengan pemerintah pada September 2025, BI membantu melalui apa?",
    "options": {
      "A": "Peningkatan suku bunga deposito negara",
      "B": "Pemotongan BI-Rate untuk stimulus fiskal",
      "C": "Intervensi valas untuk stabilisasi rupiah",
      "D": "Penerbitan Sukuk bersama Kementerian Keuangan",
      "E": "Kerja sama dengan bank sentral ASEAN"
    },
    "correct": "A",
    "explanation": "BI menaikkan suku bunga deposito negara untuk membantu program pemerintah melalui burden-sharing."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Pada Agustus 2025, evolusi kebijakan BI mencakup prediksi pemotongan BI-Rate tambahan ke berapa?",
    "options": {
      "A": "4.00%",
      "B": "4.25%",
      "C": "4.50%",
      "D": "4.75%",
      "E": "5.00%"
    },
    "correct": "B",
    "explanation": "Prediksi menunjukkan pemotongan tambahan 75bps, membawa BI-Rate ke 4.25% sebagai bagian dari evolusi kebijakan pasca-pemotongan Agustus."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Penurunan yield obligasi 10-tahun Indonesia pada Oktober 2025 disebabkan oleh apa?",
    "options": {
      "A": "Inflasi tinggi yang memicu penjualan obligasi",
      "B": "Ekspektasi pemotongan suku bunga lebih lanjut",
      "C": "Penurunan cadangan devisa nasional",
      "D": "Kenaikan defisit anggaran pemerintah",
      "E": "Volatilitas politik domestik"
    },
    "correct": "B",
    "explanation": "Yield turun ke terendah dalam 4 tahun karena harapan pemotongan BI-Rate lebih lanjut, mendukung instrumen moneter pro-market."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Dana Rp200 triliun yang ditempatkan di bank BUMN pada Oktober 2025 diharapkan meningkatkan pertumbuhan kredit hingga berapa?",
    "options": {
      "A": "8%",
      "B": "9%",
      "C": "10%",
      "D": "11%",
      "E": "12%"
    },
    "correct": "C",
    "explanation": "Kementerian Keuangan mengharapkan dana tersebut mendorong pertumbuhan kredit hingga 10%, selaras dengan bauran kebijakan pro-growth BI."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Akselerasi inflasi pada September 2025 memengaruhi inisiatif BI seperti GNPIP dengan fokus pada apa?",
    "options": {
      "A": "Pengurangan impor komoditas pangan",
      "B": "Peningkatan koordinasi TPID regional",
      "C": "Subsidi langsung ke konsumen",
      "D": "Regulasi harga eceran tertinggi",
      "E": "Pengembangan varietas tanaman baru"
    },
    "correct": "B",
    "explanation": "Kenaikan inflasi memerlukan penguatan koordinasi TPID untuk menjaga stabilitas harga pangan melalui strategi 4K."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK memungkinkan BI mempertahankan independensi meskipun ada tekanan politik pada September 2025 terkait apa?",
    "options": {
      "A": "Pemotongan BI-Rate mendadak",
      "B": "Guncangan politik yang memengaruhi rupiah",
      "C": "Peningkatan inflasi pangan",
      "D": "Penurunan yield obligasi",
      "E": "Penerbitan Sukuk valas"
    },
    "correct": "B",
    "explanation": "Meskipun guncangan politik memengaruhi rupiah, BI mempertahankan suku bunga sesuai mandat independen di UU P2SK."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan pemerintah melalui burden-sharing pada 2025 melibatkan peningkatan apa?",
    "options": {
      "A": "Suku bunga deposito negara untuk program pemerintah",
      "B": "Pemotongan pajak atas transaksi keuangan",
      "C": "Intervensi bersama di pasar saham",
      "D": "Penerbitan obligasi bersama dengan negara ASEAN",
      "E": "Swap mata uang dengan bank sentral Eropa"
    },
    "correct": "A",
    "explanation": "Burden-sharing mencakup peningkatan suku bunga deposito negara untuk mendukung program pemerintah tanpa mengganggu independensi BI."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pada 2025 mencakup respons terhadap inflasi 2.65% dengan apa?",
    "options": {
      "A": "Pengetatan moneter mendadak",
      "B": "Pemotongan suku bunga lebih lanjut",
      "C": "Peningkatan cadangan wajib minimum",
      "D": "Intervensi valas intensif",
      "E": "Regulasi baru atas kripto aset"
    },
    "correct": "B",
    "explanation": "Dengan inflasi masih terkendali, BI berevolusi dengan pemotongan suku bunga untuk mendukung pertumbuhan."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "SUVBI pada Oktober 2025 digunakan untuk menarik likuiditas valas sebesar US$40 juta dengan tenor apa?",
    "options": {
      "A": "Satu minggu",
      "B": "Satu bulan",
      "C": "Tiga bulan",
      "D": "Enam bulan",
      "E": "Satu tahun"
    },
    "correct": "B",
    "explanation": "SUVBI dengan tenor satu bulan diterbitkan untuk mengelola likuiditas valas secara syariah."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Dalam bauran kebijakan 2025, BI memperkirakan pemotongan BI-Rate tambahan 75bps untuk mencapai target apa?",
    "options": {
      "A": "Inflasi di bawah 2%",
      "B": "Pertumbuhan kredit 10%",
      "C": "Stabilitas rupiah terhadap dolar",
      "D": "Pengurangan defisit fiskal",
      "E": "Peningkatan ekspor nasional"
    },
    "correct": "B",
    "explanation": "Pemotongan tersebut diharapkan mendukung pertumbuhan kredit, selaras dengan dana Rp200 triliun di bank BUMN."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Kenaikan inflasi ke 2.65% pada September 2025 memerlukan penguatan program apa dari BI?",
    "options": {
      "A": "SPHP untuk distribusi beras",
      "B": "GNPIP untuk pengendalian inflasi pangan",
      "C": "KLM untuk likuiditas bank",
      "D": "LCS untuk transaksi bilateral",
      "E": "CBDC untuk pembayaran digital"
    },
    "correct": "B",
    "explanation": "GNPIP diperkuat untuk mengatasi akselerasi inflasi, fokus pada stabilitas harga pangan."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK mendukung wewenang BI untuk menjaga stabilitas di tengah guncangan politik pada September 2025 dengan cara apa?",
    "options": {
      "A": "Pemotongan BI-Rate mendadak",
      "B": "Menahan suku bunga meskipun tekanan rupiah",
      "C": "Peningkatan inflasi target",
      "D": "Penerbitan obligasi baru",
      "E": "Kerja sama dengan IMF"
    },
    "correct": "B",
    "explanation": "BI menahan suku bunga untuk stabilitas, sesuai wewenang independen di UU P2SK."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Pada 2025, kerja sama BI dengan pemerintah melibatkan penempatan dana di bank BUMN untuk apa?",
    "options": {
      "A": "Meningkatkan cadangan devisa",
      "B": "Mendorong pertumbuhan kredit hingga 10%",
      "C": "Mengendalikan inflasi pangan",
      "D": "Memperkuat pasar saham domestik",
      "E": "Mengembangkan CBDC"
    },
    "correct": "B",
    "explanation": "Penempatan Rp200 triliun di bank BUMN bertujuan mendorong kredit, sebagai bentuk kolaborasi."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pasca-pemotongan Agustus 2025 mencakup perubahan forecast ke pemotongan tambahan berapa bps?",
    "options": {
      "A": "25 bps",
      "B": "50 bps",
      "C": "75 bps",
      "D": "100 bps",
      "E": "125 bps"
    },
    "correct": "C",
    "explanation": "Forecast berubah ke pemotongan tambahan 75 bps, menyesuaikan dengan kondisi ekonomi terkini."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Penurunan yield obligasi 10-tahun pada Oktober 2025 mencerminkan ekspektasi apa terhadap instrumen BI?",
    "options": {
      "A": "Peningkatan penerbitan SRBI",
      "B": "Pemotongan suku bunga lebih lanjut",
      "C": "Penurunan likuiditas valas",
      "D": "Kenaikan cadangan wajib",
      "E": "Regulasi baru atas Sukuk"
    },
    "correct": "B",
    "explanation": "Ekspektasi pemotongan suku bunga mendorong penurunan yield, memengaruhi instrumen moneter pro-market."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Bauran kebijakan BI pada 2025 mengintegrasikan pemotongan BI-Rate dengan apa untuk pro-growth?",
    "options": {
      "A": "Peningkatan inflasi target",
      "B": "Dana Rp200 triliun di bank BUMN",
      "C": "Intervensi valas harian",
      "D": "Regulasi anti-pencucian uang",
      "E": "Pengembangan infrastruktur digital"
    },
    "correct": "B",
    "explanation": "Integrasi dengan dana di bank BUMN untuk mendorong kredit dan pertumbuhan ekonomi."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Strategi BI untuk stabilitas harga pangan pada 2025 merespons inflasi 2.65% dengan penguatan apa?",
    "options": {
      "A": "Subsidi impor komoditas",
      "B": "Koordinasi TPIP dan TPID yang lebih intensif",
      "C": "Pemotongan suku bunga khusus sektor pertanian",
      "D": "Penerbitan obligasi pangan",
      "E": "Regulasi ekspor beras"
    },
    "correct": "B",
    "explanation": "Penguatan koordinasi pusat dan daerah melalui TPIP dan TPID untuk mengendalikan inflasi pangan."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Wewenang BI di UU P2SK untuk mengelola kebijakan moneter tetap independen meskipun revisi RUU pada Oktober 2025 melunakkan apa?",
    "options": {
      "A": "Pengawasan OJK atas bank",
      "B": "Review parlemen atas BI",
      "C": "Penerbitan instrumen syariah",
      "D": "Kerja sama bilateral LCS",
      "E": "Pengembangan CBDC"
    },
    "correct": "B",
    "explanation": "Revisi melunakkan review parlemen, mempertahankan independensi BI dalam kebijakan moneter."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Burden-sharing BI dengan pemerintah pada 2025 membantu program apa melalui suku bunga deposito?",
    "options": {
      "A": "Program vaksinasi nasional",
      "B": "Program stimulus ekonomi pemerintah",
      "C": "Program pendidikan keuangan",
      "D": "Program lingkungan hijau",
      "E": "Program infrastruktur digital"
    },
    "correct": "B",
    "explanation": "Burden-sharing mendukung stimulus pemerintah dengan menaikkan suku bunga deposito negara."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Pada 2025, evolusi tugas BI mencakup respons terhadap guncangan politik dengan mempertahankan apa?",
    "options": {
      "A": "Inflasi target rendah",
      "B": "Suku bunga stabil meskipun tekanan rupiah",
      "C": "Cadangan devisa minimum",
      "D": "Pertumbuhan kredit 8%",
      "E": "Penerbitan Sukuk bulanan"
    },
    "correct": "B",
    "explanation": "BI mempertahankan suku bunga untuk stabilitas, menunjukkan evolusi tugas independen."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Penerbitan Sukuk valas BI pada Oktober 2025 bertujuan untuk mengoptimalkan apa?",
    "options": {
      "A": "Likuiditas rupiah domestik",
      "B": "Likuiditas valuta asing syariah",
      "C": "Pertumbuhan ekspor non-migas",
      "D": "Pengurangan defisit perdagangan",
      "E": "Stabilitas pasar saham"
    },
    "correct": "B",
    "explanation": "Sukuk valas senilai US$40 juta optimalkan likuiditas valas berbasis syariah sebagai instrumen pro-market."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Pada tahun 2025, Bank Indonesia menaikkan Kebijakan Insentif Likuiditas Makroprudensial (KLM) untuk tujuan utama apa?",
    "options": {
      "A": "Meningkatkan cadangan devisa melalui intervensi valas",
      "B": "Mendorong pertumbuhan kredit perbankan ke sektor prioritas",
      "C": "Mengendalikan inflasi melalui pengetatan moneter",
      "D": "Memperkuat stabilitas sistem pembayaran digital",
      "E": "Mendukung transisi ke ekonomi hijau secara langsung"
    },
    "correct": "B",
    "explanation": "KLM dinaikkan efektif April 2025 untuk merangsang pinjaman perbankan dan menciptakan lapangan kerja, sebagai bagian dari kebijakan akomodatif makroprudensial."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Dalam bauran kebijakan BI tahun 2025, penurunan BI-Rate ke 5.75% bertujuan untuk apa?",
    "options": {
      "A": "Menarik inflow modal asing secara masif",
      "B": "Mendukung pertumbuhan ekonomi karena inflasi di bawah target",
      "C": "Mengurangi risiko sistemik dari perubahan iklim",
      "D": "Mempercepat adopsi mata uang digital sentral",
      "E": "Menstabilkan harga pangan melalui subsidi langsung"
    },
    "correct": "B",
    "explanation": "Penurunan BI-Rate awal 2025 dilakukan untuk stimulus ekonomi saat inflasi rendah dan diharapkan tetap terkendali."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Koordinasi BI dengan pemerintah melalui Tim Pengendalian Inflasi (TPI) menekankan strategi 4K, yang tidak termasuk apa?",
    "options": {
      "A": "Keterjangkauan harga",
      "B": "Ketersediaan pasokan",
      "C": "Kelancaran distribusi",
      "D": "Komunikasi efektif",
      "E": "Kualitas produksi"
    },
    "correct": "E",
    "explanation": "Strategi 4K mencakup keterjangkauan, ketersediaan, kelancaran, dan komunikasi; kualitas produksi bukan bagian utama dari framework ini."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Menurut UU P2SK, wewenang BI dalam menjaga stabilitas sistem keuangan termasuk integrasi dengan kebijakan apa?",
    "options": {
      "A": "Fiskal untuk pengelolaan defisit anggaran",
      "B": "Makroprudensial untuk batas risiko sistemik",
      "C": "Perdagangan untuk regulasi ekspor impor",
      "D": "Pendidikan untuk inklusi keuangan masyarakat",
      "E": "Lingkungan untuk pengawasan emisi karbon"
    },
    "correct": "B",
    "explanation": "BI mengintegrasikan kebijakan makroprudensial untuk membatasi risiko sistemik dan menjaga stabilitas keuangan secara keseluruhan."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan negara-negara ASEAN melalui Chiang Mai Initiative Multilateralization (CMIM) bertujuan untuk apa?",
    "options": {
      "A": "Memperdalam integrasi pasar saham regional",
      "B": "Menyediakan likuiditas darurat selama krisis keuangan",
      "C": "Mendorong adopsi mata uang tunggal ASEAN",
      "D": "Mengatur standar akuntansi keuangan bersama",
      "E": "Memfasilitasi perdagangan bebas tarif antarnegara"
    },
    "correct": "B",
    "explanation": "CMIM adalah fasilitas multilateral untuk swap mata uang guna menyediakan likuiditas jangka pendek selama krisis."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pasca-UU No. 4/2023 menambahkan penekanan pada apa?",
    "options": {
      "A": "Pengelolaan langsung aset kripto nasional",
      "B": "Dukungan stabilitas sistem keuangan melalui UU P2SK",
      "C": "Pengawasan atas sektor non-bank secara eksklusif",
      "D": "Pembangunan infrastruktur fisik untuk ekonomi digital",
      "E": "Koordinasi dengan bank sentral global untuk CBDC"
    },
    "correct": "B",
    "explanation": "UU 2023 memperkuat mandat BI dalam stabilitas keuangan melalui integrasi dengan UU P2SK."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Fungsi SUVBI sebagai instrumen syariah BI adalah untuk mengelola likuiditas apa?",
    "options": {
      "A": "Rupiah domestik melalui lelang konvensional",
      "B": "Valuta asing berbasis prinsip Islam",
      "C": "Surat utang pemerintah jangka menengah",
      "D": "Investasi ekuitas syariah di pasar modal",
      "E": "Komoditas halal untuk cadangan nasional"
    },
    "correct": "B",
    "explanation": "SUVBI menarik likuiditas valuta asing dengan prinsip syariah, cocok untuk investor Muslim."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Dalam bauran kebijakan pro-growth BI 2025, pendalaman pasar uang difokuskan untuk meningkatkan apa?",
    "options": {
      "A": "Efisiensi alokasi dana dan likuiditas pasar",
      "B": "Pengendalian inflasi melalui target ketat",
      "C": "Inklusi keuangan bagi sektor informal",
      "D": "Stabilitas kurs melalui intervensi harian",
      "E": "Transisi hijau via insentif pajak"
    },
    "correct": "A",
    "explanation": "Pendalaman pasar uang meningkatkan likuiditas dan efisiensi, mendukung pertumbuhan ekonomi berkelanjutan."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Program GNPIP BI tahun 2025 menekankan sinergi apa untuk pengendalian inflasi pangan?",
    "options": {
      "A": "Pusat dan daerah melalui TPIP dan TPID",
      "B": "Internasional dengan impor komoditas",
      "C": "Swasta untuk distribusi e-commerce",
      "D": "Teknologi untuk prediksi cuaca",
      "E": "Pendidikan untuk konsumsi bijak"
    },
    "correct": "A",
    "explanation": "GNPIP melibatkan sinergi pusat (TPIP) dan daerah (TPID) untuk strategi adaptif pengendalian inflasi pangan."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK memberikan wewenang BI untuk mengintegrasikan kebijakan moneter dengan apa?",
    "options": {
      "A": "Kebijakan fiskal untuk anggaran negara",
      "B": "Stabilitas sistem keuangan makroprudensial",
      "C": "Regulasi perdagangan luar negeri",
      "D": "Pengembangan SDM di sektor keuangan",
      "E": "Pengawasan anti-korupsi internal"
    },
    "correct": "B",
    "explanation": "Integrasi dengan makroprudensial untuk menjaga stabilitas keuangan secara holistik."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama LCS BI dengan India memungkinkan transaksi menggunakan mata uang apa?",
    "options": {
      "A": "Dolar AS dan Euro secara bergantian",
      "B": "Rupiah dan Rupee untuk perdagangan bilateral",
      "C": "Yen Jepang sebagai intermediary",
      "D": "Renminbi Cina untuk stabilitas regional",
      "E": "Won Korea untuk investasi teknologi"
    },
    "correct": "B",
    "explanation": "LCS dengan India memfasilitasi transaksi dengan rupiah dan rupee, mengurangi ketergantungan pada mata uang ketiga."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Pada evolusi tugas BI di era Flexible ITF pasca-2008, fokus ditambahkan pada integrasi apa?",
    "options": {
      "A": "Moneter dengan stabilitas sistem keuangan",
      "B": "Fiskal dengan pengelolaan utang negara",
      "C": "Perdagangan dengan regulasi ekspor",
      "D": "Pendidikan dengan literasi keuangan",
      "E": "Lingkungan dengan kebijakan hijau"
    },
    "correct": "A",
    "explanation": "Flexible ITF mengintegrasikan stabilitas moneter dan keuangan untuk respons pasca-krisis global."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "SRBI digunakan BI untuk menarik likuiditas rupiah dalam kondisi apa?",
    "options": {
      "A": "Defisit likuiditas untuk stimulus ekonomi",
      "B": "Kelebihan likuiditas untuk cegah inflasi",
      "C": "Volatilitas kurs untuk stabilisasi valas",
      "D": "Penurunan kredit untuk dorong pinjaman",
      "E": "Risiko iklim untuk kebijakan hijau"
    },
    "correct": "B",
    "explanation": "SRBI menarik kelebihan likuiditas rupiah guna mengendalikan inflasi melalui mekanisme pasar."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Ekonomi keuangan hijau dalam bauran BI 2025 mendukung transisi melalui apa?",
    "options": {
      "A": "Insentif makroprudensial untuk proyek ramah lingkungan",
      "B": "Penurunan BI-Rate untuk sektor fosil",
      "C": "Intervensi valas untuk impor teknologi hijau",
      "D": "Regulasi pajak atas emisi karbon",
      "E": "Subsidi langsung ke industri hijau"
    },
    "correct": "A",
    "explanation": "BI menggunakan insentif makroprudensial untuk mendorong investasi di proyek hijau dan mitigasi risiko iklim."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Inisiatif BI untuk stabilitas harga pangan melalui SPHP melibatkan kolaborasi dengan siapa?",
    "options": {
      "A": "Kementerian Perdagangan untuk regulasi harga",
      "B": "Badan Pangan Nasional untuk distribusi komoditas",
      "C": "OJK untuk pengawasan keuangan pangan",
      "D": "LPS untuk asuransi panen",
      "E": "Kementerian Lingkungan untuk pertanian berkelanjutan"
    },
    "correct": "B",
    "explanation": "SPHP bekerja sama dengan NFA untuk stabilisasi pasokan dan harga pangan seperti beras."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Wewenang BI berdasarkan UU P2SK untuk bertindak sebagai lender of last resort dalam krisis apa?",
    "options": {
      "A": "Krisis fiskal pemerintah daerah",
      "B": "Kegagalan sistemik bank komersial",
      "C": "Penurunan ekspor nasional",
      "D": "Inflasi tinggi akibat bencana alam",
      "E": "Volatilitas pasar saham global"
    },
    "correct": "B",
    "explanation": "BI menyediakan likuiditas darurat untuk mencegah kegagalan bank yang bisa memicu krisis sistemik."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama bilateral BI dengan Australia fokus pada apa di bidang keuangan?",
    "options": {
      "A": "Pengembangan CBDC bersama",
      "B": "Kooperasi regulasi lintas batas",
      "C": "Swap mata uang untuk perdagangan mineral",
      "D": "Inisiatif keuangan hijau regional",
      "E": "Integrasi sistem pembayaran ritel"
    },
    "correct": "B",
    "explanation": "Kooperasi regulasi untuk pengawasan risiko keuangan lintas batas."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pasca-pandemi COVID-19 menambahkan pengembangan apa?",
    "options": {
      "A": "Central Bank Digital Currency (CBDC) seperti Digital Rupiah",
      "B": "Pengawasan kripto aset secara eksklusif",
      "C": "Pengelolaan utang swasta pasca-krisis",
      "D": "Pembangunan infrastruktur kesehatan",
      "E": "Regulasi e-commerce nasional"
    },
    "correct": "A",
    "explanation": "BI mengembangkan Digital Rupiah sebagai CBDC untuk modernisasi pembayaran."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "SVBI dirancang untuk mengoptimalkan likuiditas apa di pasar internasional?",
    "options": {
      "A": "Rupiah melalui obligasi domestik",
      "B": "Valuta asing untuk inflow modal",
      "C": "Surat utang syariah jangka pendek",
      "D": "Investasi ekuitas untuk pertumbuhan",
      "E": "Komoditas untuk cadangan strategis"
    },
    "correct": "B",
    "explanation": "SVBI menarik likuiditas valas untuk memperkuat cadangan devisa dan stabilisasi rupiah."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Digitalisasi sistem pembayaran BI seperti BI-FAST bertujuan untuk mendukung pro-growth melalui apa?",
    "options": {
      "A": "Peningkatan kecepatan dan inklusi transaksi",
      "B": "Pengendalian likuiditas valas ketat",
      "C": "Regulasi rasio kredit properti",
      "D": "Intervensi pasar obligasi negara",
      "E": "Subsidi untuk UMKM digital"
    },
    "correct": "A",
    "explanation": "BI-FAST mempercepat transaksi pembayaran, meningkatkan efisiensi dan inklusi ekonomi."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Strategi BI dalam GNPIP 2025 untuk daerah seperti Kalimantan fokus pada apa?",
    "options": {
      "A": "Swasembada pangan regional untuk kurangi impor",
      "B": "Subsidi transportasi antar pulau",
      "C": "Pengembangan pasar online komoditas",
      "D": "Regulasi harga minimum untuk petani",
      "E": "Inovasi teknologi penyimpanan dingin"
    },
    "correct": "A",
    "explanation": "Fokus pada swasembada untuk mengurangi ketergantungan impor dan stabilisasi harga lokal."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK memungkinkan BI mengelola cadangan devisa dengan prinsip apa?",
    "options": {
      "A": "Keuntungan maksimal melalui investasi berisiko",
      "B": "Likuiditas, keamanan, dan imbal hasil seimbang",
      "C": "Peminjaman ke swasta untuk pertumbuhan",
      "D": "Penjualan untuk subsidi impor strategis",
      "E": "Alokasi untuk proyek infrastruktur nasional"
    },
    "correct": "B",
    "explanation": "Pengelolaan cadangan devisa BI prioritaskan likuiditas, keamanan, dan imbal hasil untuk stabilitas."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan Uni Eropa di bidang keuangan hijau melalui partnership apa?",
    "options": {
      "A": "EU-Indonesia Green Finance Partnership",
      "B": "Bilateral Climate Finance Agreement",
      "C": "European Financial Stability Facility",
      "D": "Cross-Continent Currency Swap",
      "E": "Sustainable Goals Finance Initiative"
    },
    "correct": "A",
    "explanation": "Partnership ini mendukung transisi ekonomi hijau melalui kolaborasi keuangan."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pada 1953 menjadikannya bertanggung jawab atas apa?",
    "options": {
      "A": "Keseimbangan moneter dan keuangan negara",
      "B": "Pengembangan industri perbankan swasta",
      "C": "Pengawasan pasar modal awal",
      "D": "Kebijakan ekonomi hijau dini",
      "E": "Koordinasi dengan bank sentral Asia"
    },
    "correct": "A",
    "explanation": "BI menjadi bank sentral dengan tugas utama mengatur moneter untuk stabilitas nasional."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Ketiga instrumen SRBI, SVBI, SUVBI secara bersama mendukung optimasi apa?",
    "options": {
      "A": "Cadangan devisa melalui ekspor",
      "B": "Likuiditas domestik dan internasional",
      "C": "Pinjaman pemerintah untuk defisit",
      "D": "Regulasi bank syariah eksklusif",
      "E": "Posisi rupiah di derivatif"
    },
    "correct": "B",
    "explanation": "Instrumen ini mengelola likuiditas rupiah dan valas melalui pasar untuk stabilitas moneter."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Menurut Undang-Undang P2SK, apa wewenang utama Bank Indonesia dalam menjaga stabilitas sistem keuangan?",
    "options": {
      "A": "Mengatur dan mengawasi seluruh lembaga keuangan non-bank",
      "B": "Melakukan operasi moneter terbuka untuk mengendalikan inflasi",
      "C": "Menyusun kebijakan fiskal bersama Kementerian Keuangan",
      "D": "Mengawasi praktik anti-pencucian uang di sektor swasta",
      "E": "Menetapkan target pertumbuhan ekonomi tahunan"
    },
    "correct": "B",
    "explanation": "UU P2SK memberikan wewenang kepada BI untuk melakukan operasi moneter seperti penjualan atau pembelian surat berharga guna mengendalikan jumlah uang beredar dan inflasi, yang mendukung stabilitas keuangan secara keseluruhan."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Bank Indonesia menjalin kerja sama bilateral dengan Bank of Korea untuk memfasilitasi transaksi lintas batas menggunakan mata uang lokal. Kerja sama ini dikenal sebagai apa?",
    "options": {
      "A": "Bilateral Swap Arrangement (BSA)",
      "B": "Local Currency Settlement (LCS)",
      "C": "Cross-Border Payment Initiative (CBPI)",
      "D": "Asian Financial Cooperation Framework (AFCF)",
      "E": "Regional Currency Stabilization Pact (RCSP)"
    },
    "correct": "B",
    "explanation": "Local Currency Settlement (LCS) adalah kerja sama yang memungkinkan transaksi perdagangan dan investasi antara Indonesia dan Korea Selatan dilakukan dengan rupiah dan won, mengurangi ketergantungan pada dolar AS."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Dalam evolusi tugasnya, pada periode pasca-UU No. 23/1999, Bank Indonesia mengalami perubahan fokus utama menjadi apa?",
    "options": {
      "A": "Bank komersial yang memberikan kredit langsung ke sektor swasta",
      "B": "Bank sentral independen dengan tujuan tunggal menjaga stabilitas rupiah",
      "C": "Lembaga pengawas fiskal yang mengelola anggaran negara",
      "D": "Institusi yang mengatur perdagangan internasional secara langsung",
      "E": "Badan yang bertanggung jawab atas pengembangan infrastruktur keuangan"
    },
    "correct": "B",
    "explanation": "UU No. 23/1999 membuat BI independen dengan tugas utama menjaga stabilitas nilai rupiah melalui kebijakan moneter, berbeda dari era sebelumnya yang lebih berorientasi pada fungsi komersial."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Apa fungsi utama dari instrumen SRBI yang diterbitkan oleh Bank Indonesia sebagai bagian dari operasi moneter pro-market?",
    "options": {
      "A": "Menyediakan pinjaman jangka pendek kepada bank komersial",
      "B": "Menarik likuiditas rupiah dari pasar untuk mengendalikan inflasi",
      "C": "Mendukung ekspor melalui subsidi mata uang asing",
      "D": "Mengatur tarif pajak atas transaksi keuangan internasional",
      "E": "Memfasilitasi investasi asing di sektor infrastruktur"
    },
    "correct": "B",
    "explanation": "SRBI (Sekuritas Rupiah Bank Indonesia) digunakan BI untuk menarik kelebihan likuiditas di pasar uang rupiah, membantu mengendalikan inflasi tanpa mengganggu mekanisme pasar."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Kegiatan apa yang diinisiasi oleh Bank Indonesia bersama pemerintah untuk menjaga stabilitas harga pangan melalui koordinasi regional?",
    "options": {
      "A": "Program Stabilisasi Harga Beras Nasional (PSHBN)",
      "B": "Gerakan Nasional Pengendalian Inflasi Pangan (GNPIP)",
      "C": "Inisiatif Distribusi Pangan Digital (IDPD)",
      "D": "Rencana Aksi Ketahanan Pangan Lokal (RAKPL)",
      "E": "Strategi Pengawasan Pasar Komoditas (SPPK)"
    },
    "correct": "B",
    "explanation": "GNPIP adalah program kolaborasi BI dan pemerintah yang fokus pada pengendalian inflasi pangan melalui strategi 4K: keterjangkauan, ketersediaan, kelancaran distribusi, dan komunikasi efektif."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Dalam bauran kebijakan pro-stability dan pro-growth Bank Indonesia, apa peran utama kebijakan makroprudensial?",
    "options": {
      "A": "Mengatur suku bunga acuan untuk mengendalikan inflasi",
      "B": "Mendorong inklusi keuangan melalui digitalisasi pembayaran",
      "C": "Menjaga kestabilan sektor keuangan dengan batas rasio kredit",
      "D": "Memperdalam pasar uang untuk meningkatkan likuiditas",
      "E": "Mendukung ekonomi hijau melalui insentif investasi berkelanjutan"
    },
    "correct": "C",
    "explanation": "Kebijakan makroprudensial BI bertujuan menjaga stabilitas sistem keuangan dengan mengatur rasio seperti LTV atau DTI, mencegah gelembung aset dan risiko sistemik."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Berdasarkan UU P2SK, Bank Indonesia memiliki wewenang untuk melakukan intervensi di pasar valuta asing dalam kondisi apa?",
    "options": {
      "A": "Ketika nilai rupiah menguat secara berlebihan",
      "B": "Saat terjadi gejolak yang mengancam stabilitas ekonomi",
      "C": "Untuk mendukung ekspor dengan melemahkan mata uang secara sengaja",
      "D": "Bila cadangan devisa melebihi target tahunan",
      "E": "Ketika inflasi di bawah target minimum"
    },
    "correct": "B",
    "explanation": "UU P2SK memungkinkan BI intervensi di pasar valas untuk menstabilkan rupiah saat ada gejolak, seperti volatilitas tinggi akibat faktor eksternal."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama bilateral Bank Indonesia dengan negara ASEAN seperti Thailand melibatkan mekanisme apa untuk memperkuat stabilitas regional?",
    "options": {
      "A": "ASEAN Payment Connectivity Initiative",
      "B": "Chiang Mai Initiative Multilateralization (CMIM)",
      "C": "Bilateral Currency Swap Agreement (BCSA)",
      "D": "Regional Comprehensive Economic Partnership (RCEP)",
      "E": "ASEAN Financial Integration Framework (AFIF)"
    },
    "correct": "C",
    "explanation": "BCSA adalah perjanjian swap mata uang bilateral yang memungkinkan pertukaran rupiah dengan baht Thailand untuk menjaga likuiditas selama krisis."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Pada era UU No. 13/1968, tugas Bank Indonesia berevolusi menjadi apa selain sebagai bank sentral?",
    "options": {
      "A": "Mengawasi seluruh sektor keuangan non-bank",
      "B": "Mendukung pembangunan ekonomi melalui kredit selektif",
      "C": "Menjadi lembaga independen dari pemerintah",
      "D": "Fokus eksklusif pada stabilitas moneter",
      "E": "Mengatur kebijakan fiskal nasional"
    },
    "correct": "B",
    "explanation": "UU 1968 menambahkan tugas BI untuk mendukung pembangunan dengan memberikan kredit ke sektor prioritas, selain tugas moneter dasar."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Instrumen SVBI dari Bank Indonesia dirancang untuk menarik likuiditas dalam bentuk apa?",
    "options": {
      "A": "Mata uang rupiah melalui lelang terbuka",
      "B": "Valuta asing seperti dolar AS dari investor global",
      "C": "Surat utang negara untuk stabilisasi fiskal",
      "D": "Komoditas berharga untuk cadangan nasional",
      "E": "Obligasi syariah dalam rupiah domestik"
    },
    "correct": "B",
    "explanation": "SVBI (Sekuritas Valas Bank Indonesia) menarik likuiditas valuta asing dari pasar untuk mengelola cadangan devisa dan stabilitas rupiah."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Dalam kerangka TPID, strategi 4K yang diterapkan oleh Bank Indonesia dan pemerintah mencakup apa saja?",
    "options": {
      "A": "Kualitas, kuantitas, keamanan, dan kestabilan",
      "B": "Keterjangkauan, ketersediaan, kelancaran, dan komunikasi",
      "C": "Kesehatan, keberlanjutan, ketahanan, dan koordinasi",
      "D": "Kemudahan, kecepatan, keakuratan, dan kebijakan",
      "E": "Kontribusi, kolaborasi, kontrol, dan kapitalisasi"
    },
    "correct": "B",
    "explanation": "Strategi 4K TPID fokus pada keterjangkauan harga, ketersediaan pasokan, kelancaran distribusi, dan komunikasi efektif untuk menjaga stabilitas harga pangan."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Bagian dari bauran kebijakan BI yang mendukung pro-growth melalui digitalisasi sistem pembayaran adalah apa?",
    "options": {
      "A": "Penerbitan SRBI untuk likuiditas rupiah",
      "B": "Implementasi BI-FAST untuk transaksi cepat",
      "C": "Pengaturan rasio LTV untuk kredit properti",
      "D": "Intervensi valas untuk stabilisasi kurs",
      "E": "Program inklusi keuangan hijau"
    },
    "correct": "B",
    "explanation": "BI-FAST adalah sistem pembayaran digital BI yang mempercepat transaksi, mendukung pertumbuhan ekonomi dengan efisiensi dan inklusi."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK memberikan wewenang kepada Bank Indonesia untuk mengawasi apa dalam konteks stabilitas makro?",
    "options": {
      "A": "Aktivitas perdagangan saham di bursa efek",
      "B": "Risiko sistemik di sektor keuangan secara keseluruhan",
      "C": "Pengelolaan anggaran belanja negara",
      "D": "Regulasi pajak atas pendapatan individu",
      "E": "Pengembangan teknologi fintech swasta"
    },
    "correct": "B",
    "explanation": "BI bertanggung jawab mengawasi risiko sistemik untuk mencegah krisis keuangan, sesuai mandat stabilitas di UU P2SK."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama bilateral BI dengan Jepang melibatkan fasilitas apa untuk mendukung likuiditas rupiah?",
    "options": {
      "A": "Japan-Indonesia Economic Partnership Agreement",
      "B": "Bilateral Swap Arrangement in Local Currencies",
      "C": "Asian Infrastructure Investment Bank Facility",
      "D": "Yen-Rupiah Cross-Currency Swap Line",
      "E": "Pacific Rim Financial Stability Pact"
    },
    "correct": "D",
    "explanation": "Yen-Rupiah Swap Line memungkinkan pertukaran mata uang untuk menjaga likuiditas selama volatilitas pasar."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pasca-amandemen UUD 1945 pada 2004 menekankan independensi BI dalam aspek apa?",
    "options": {
      "A": "Pengelolaan cadangan emas nasional",
      "B": "Pelaksanaan kebijakan moneter tanpa campur tangan pemerintah",
      "C": "Pengawasan langsung atas bank syariah",
      "D": "Pembangunan infrastruktur keuangan rural",
      "E": "Koordinasi dengan OJK untuk regulasi asuransi"
    },
    "correct": "B",
    "explanation": "Amandemen 2004 memperkuat independensi BI dalam kebijakan moneter untuk fokus pada stabilitas, bebas dari intervensi politik."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "SUVBI sebagai instrumen moneter BI bertujuan untuk menarik likuiditas dalam bentuk apa?",
    "options": {
      "A": "Rupiah melalui obligasi konvensional",
      "B": "Valuta asing berbasis sukuk syariah",
      "C": "Komoditas pertanian untuk cadangan pangan",
      "D": "Surat utang pemerintah jangka panjang",
      "E": "Investasi ekuitas di pasar saham"
    },
    "correct": "B",
    "explanation": "SUVBI (Sukuk Valas Bank Indonesia) adalah instrumen syariah untuk menarik likuiditas valuta asing, sesuai prinsip Islam."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Program yang diinisiasi BI untuk stabilitas harga pangan melalui sinergi TPIP dan TPID adalah apa?",
    "options": {
      "A": "Rencana Aksi Nasional Ketahanan Pangan",
      "B": "Gerakan Nasional Pengendalian Inflasi Pangan",
      "C": "Inisiatif Stabilisasi Harga Komoditas Utama",
      "D": "Strategi Distribusi Pangan Berkelanjutan",
      "E": "Program Pengawasan Pasar Regional"
    },
    "correct": "B",
    "explanation": "GNPIP melibatkan koordinasi pusat dan daerah untuk mengendalikan inflasi pangan dengan strategi adaptif."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Dalam bauran kebijakan BI, pendalaman pasar uang bertujuan untuk apa?",
    "options": {
      "A": "Meningkatkan inklusi keuangan masyarakat pedesaan",
      "B": "Memperkuat likuiditas dan efisiensi alokasi dana",
      "C": "Mengatur regulasi anti-pencucian uang",
      "D": "Mendukung transisi ke ekonomi hijau",
      "E": "Mengendalikan inflasi melalui suku bunga"
    },
    "correct": "B",
    "explanation": "Pendalaman pasar uang BI meningkatkan kedalaman dan likuiditas pasar, membantu alokasi dana lebih efisien untuk pertumbuhan."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK memberikan wewenang BI untuk menerbitkan regulasi terkait apa?",
    "options": {
      "A": "Sistem pembayaran dan infrastruktur keuangan",
      "B": "Pengaturan tarif impor barang konsumsi",
      "C": "Pengawasan langsung atas perusahaan asuransi",
      "D": "Penetapan anggaran belanja daerah",
      "E": "Regulasi perdagangan saham harian"
    },
    "correct": "A",
    "explanation": "BI mengatur sistem pembayaran untuk memastikan efisiensi dan keamanan transaksi keuangan nasional."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan China melalui mekanisme apa untuk transaksi mata uang lokal?",
    "options": {
      "A": "Renminbi-Rupiah Direct Trading Agreement",
      "B": "Belt and Road Financial Initiative",
      "C": "Sino-Indonesian Currency Swap Facility",
      "D": "Asian Currency Unit Exchange Program",
      "E": "Pacific Bilateral Payment Corridor"
    },
    "correct": "C",
    "explanation": "Currency Swap Facility memungkinkan pertukaran renminbi dan rupiah untuk mendukung perdagangan bilateral."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Sebelum menjadi bank sentral independen, tugas BI pada masa De Javasche Bank evolusi menjadi apa?",
    "options": {
      "A": "Fungsi sirkulasi uang dan bank komersial",
      "B": "Pengawas utama sektor keuangan modern",
      "C": "Lembaga fiskal untuk anggaran kolonial",
      "D": "Institusi moneter untuk stabilitas global",
      "E": "Badan pengembangan ekonomi pasca-perang"
    },
    "correct": "A",
    "explanation": "De Javasche Bank berfungsi sebagai bank sirkulasi dan komersial, yang kemudian diwarisi BI pada awal kemerdekaan."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Ketiga instrumen moneter pro-market BI (SRBI, SVBI, SUVBI) secara kolektif bertujuan untuk apa?",
    "options": {
      "A": "Meningkatkan cadangan devisa melalui ekspor",
      "B": "Mengoptimalkan likuiditas di pasar domestik dan internasional",
      "C": "Mendukung pinjaman pemerintah untuk defisit anggaran",
      "D": "Mengatur regulasi bank syariah secara eksklusif",
      "E": "Memperkuat posisi rupiah di pasar derivatif"
    },
    "correct": "B",
    "explanation": "Instrumen ini membantu BI mengelola likuiditas rupiah dan valas melalui mekanisme pasar, mendukung stabilitas moneter."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Dalam inisiatif stabilitas harga pangan, BI berkolaborasi dengan NFA untuk program apa?",
    "options": {
      "A": "Stabilisasi Pasokan dan Harga Pangan (SPHP)",
      "B": "Gerakan Ketahanan Pangan Nasional (GKPN)",
      "C": "Inovasi Distribusi Komoditas Utama (IDKU)",
      "D": "Rencana Pengendalian Inflasi Regional (RPIR)",
      "E": "Strategi Keamanan Pangan Berkelanjutan (SKPB)"
    },
    "correct": "A",
    "explanation": "SPHP adalah program untuk menstabilkan pasokan dan harga pangan melalui distribusi beras dan komoditas lain."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Ekonomi keuangan inklusif dan hijau dalam bauran kebijakan BI mendukung pro-growth melalui apa?",
    "options": {
      "A": "Insentif untuk investasi berkelanjutan dan akses keuangan luas",
      "B": "Pengaturan suku bunga untuk sektor konvensional",
      "C": "Intervensi langsung di pasar saham",
      "D": "Regulasi pajak atas transaksi hijau",
      "E": "Pengawasan atas emisi karbon bank"
    },
    "correct": "A",
    "explanation": "BI mendorong inklusi dengan akses keuangan bagi UMKM dan hijau melalui insentif untuk proyek ramah lingkungan."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Wewenang BI berdasarkan UU P2SK untuk menangani krisis keuangan termasuk apa?",
    "options": {
      "A": "Memberikan bailout langsung ke perusahaan swasta",
      "B": "Bertindak sebagai lender of the last resort untuk bank",
      "C": "Mengambil alih aset pemerintah daerah",
      "D": "Menetapkan moratorium hutang nasional",
      "E": "Mengatur ulang anggaran belanja pusat"
    },
    "correct": "B",
    "explanation": "BI dapat memberikan likuiditas darurat sebagai lender of the last resort untuk mencegah kegagalan sistemik bank."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama bilateral BI dengan Malaysia melibatkan integrasi sistem pembayaran apa?",
    "options": {
      "A": "DuitNow-QR Cross-Border Payment",
      "B": "Ringgit-Rupiah Bilateral Exchange",
      "C": "ASEAN Local Currency Transaction Framework",
      "D": "Malaysia-Indonesia Financial Corridor",
      "E": "Southeast Asia Swap Arrangement"
    },
    "correct": "A",
    "explanation": "DuitNow-QR memungkinkan pembayaran lintas batas menggunakan QR code, memfasilitasi transaksi ritel antara kedua negara."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Pada periode 2009 pasca-UU No. 6/2009, evolusi tugas BI menambahkan fokus pada apa?",
    "options": {
      "A": "Pengawasan mikroprudensial atas bank",
      "B": "Stabilitas sistem keuangan makroprudensial",
      "C": "Pengelolaan utang luar negeri pemerintah",
      "D": "Pembangunan ekonomi regional",
      "E": "Regulasi perdagangan internasional"
    },
    "correct": "B",
    "explanation": "UU 2009 memperkuat tugas BI dalam stabilitas makroprudensial untuk mencegah risiko sistemik pasca-krisis global."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Bagaimana SRBI berbeda dari SVBI dalam operasi moneter BI?",
    "options": {
      "A": "SRBI berbasis syariah, SVBI konvensional",
      "B": "SRBI untuk rupiah, SVBI untuk valuta asing",
      "C": "SRBI jangka panjang, SVBI jangka pendek",
      "D": "SRBI untuk domestik, SVBI untuk ekspor",
      "E": "SRBI untuk inflasi, SVBI untuk kurs"
    },
    "correct": "B",
    "explanation": "SRBI menangani likuiditas rupiah, sementara SVBI fokus pada valuta asing seperti dolar."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Inisiatif BI untuk stabilitas harga pangan melalui capacity building TPID fokus pada apa?",
    "options": {
      "A": "Peningkatan produksi pertanian nasional",
      "B": "Penguatan sinergi pengendalian inflasi daerah",
      "C": "Regulasi harga eceran tertinggi",
      "D": "Subsidi langsung ke petani",
      "E": "Pengembangan pasar online pangan"
    },
    "correct": "B",
    "explanation": "Capacity building TPID meningkatkan kemampuan daerah dalam mengendalikan inflasi melalui koordinasi yang lebih baik."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Kebijakan moneter dalam bauran BI pro-stability mencakup penetapan apa?",
    "options": {
      "A": "Target inflasi tahunan dan suku bunga acuan",
      "B": "Rasio inklusi keuangan nasional",
      "C": "Standar emisi karbon untuk bank",
      "D": "Batas investasi asing di pasar uang",
      "E": "Regulasi digitalisasi UMKM"
    },
    "correct": "A",
    "explanation": "BI menetapkan target inflasi dan BI-Rate untuk menjaga stabilitas harga dan nilai rupiah."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Berdasarkan UU P2SK, wewenang BI dalam pengelolaan cadangan devisa termasuk apa?",
    "options": {
      "A": "Investasi di aset berisiko tinggi untuk keuntungan",
      "B": "Pengelolaan portofolio untuk menjaga likuiditas dan keamanan",
      "C": "Peminjaman devisa ke pemerintah daerah",
      "D": "Penjualan devisa untuk subsidi impor",
      "E": "Pengaturan alokasi devisa untuk swasta"
    },
    "correct": "B",
    "explanation": "BI mengelola cadangan devisa dengan prinsip likuiditas, keamanan, dan imbal hasil untuk mendukung stabilitas."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan Singapura melalui framework apa untuk stabilitas keuangan?",
    "options": {
      "A": "Singapore-Indonesia Financial Partnership",
      "B": "Bilateral Supervisory Arrangement",
      "C": "ASEAN Banking Integration Framework",
      "D": "Cross-Border Collateral Arrangement",
      "E": "Regional Fintech Collaboration Initiative"
    },
    "correct": "D",
    "explanation": "Cross-Border Collateral memungkinkan penggunaan aset sebagai jaminan lintas batas untuk likuiditas."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pada masa 1953 menjadikannya bank sentral dengan tugas utama apa?",
    "options": {
      "A": "Mengatur keseimbangan moneter dan keuangan negara",
      "B": "Mendukung industri perbankan swasta",
      "C": "Pengawasan atas pasar modal",
      "D": "Pengembangan ekonomi hijau awal",
      "E": "Koordinasi dengan bank internasional"
    },
    "correct": "A",
    "explanation": "Pada 1953, BI menjadi bank sentral dengan tugas mengatur moneter untuk stabilitas ekonomi nasional."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "SUVBI berbeda dari SVBI karena apa?",
    "options": {
      "A": "SUVBI untuk rupiah, SVBI untuk valas",
      "B": "SUVBI berbasis syariah, SVBI konvensional",
      "C": "SUVBI jangka pendek, SVBI jangka panjang",
      "D": "SUVBI untuk domestik, SVBI untuk internasional",
      "E": "SUVBI untuk inflasi, SVBI untuk pertumbuhan"
    },
    "correct": "B",
    "explanation": "SUVBI adalah versi syariah dari sekuritas valas, sesuai untuk investor yang mengikuti prinsip Islam."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Kegiatan BI untuk stabilitas harga pangan melalui HLM TPID fokus pada apa?",
    "options": {
      "A": "Peningkatan ekspor komoditas pangan",
      "B": "Koordinasi tingkat tinggi untuk ketahanan pangan",
      "C": "Subsidi harga eceran nasional",
      "D": "Pengembangan varietas tanaman baru",
      "E": "Regulasi impor pangan strategis"
    },
    "correct": "B",
    "explanation": "High Level Meeting TPID memastikan koordinasi antarinstansi untuk menjaga ketahanan dan stabilitas harga pangan."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Digitalisasi sistem pembayaran dalam bauran BI mendukung pro-growth dengan cara apa?",
    "options": {
      "A": "Meningkatkan efisiensi transaksi dan inklusi keuangan",
      "B": "Mengendalikan inflasi melalui batas transaksi",
      "C": "Memperkuat cadangan devisa asing",
      "D": "Mengatur rasio kredit bank syariah",
      "E": "Mendukung intervensi pasar valas"
    },
    "correct": "A",
    "explanation": "Digitalisasi seperti QRIS meningkatkan akses dan kecepatan pembayaran, mendorong aktivitas ekonomi."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK memberikan wewenang BI untuk mengintegrasikan kebijakan dengan OJK dalam aspek apa?",
    "options": {
      "A": "Pengawasan mikroprudensial bank",
      "B": "Stabilitas sistem keuangan secara makro",
      "C": "Regulasi asuransi dan pensiun",
      "D": "Pengelolaan pasar modal harian",
      "E": "Pengaturan fintech non-bank"
    },
    "correct": "B",
    "explanation": "BI dan OJK berkolaborasi untuk stabilitas makro, dengan BI fokus pada aspek moneter dan sistemik."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan Australia melibatkan inisiatif apa untuk keamanan keuangan?",
    "options": {
      "A": "Australia-Indonesia Partnership for Economic Governance",
      "B": "Bilateral Cyber Security Framework",
      "C": "Pacific Financial Inclusion Program",
      "D": "Cross-Border Regulatory Cooperation",
      "E": "Oceania Currency Stability Initiative"
    },
    "correct": "D",
    "explanation": "Regulatory Cooperation memastikan pengawasan lintas batas untuk mencegah risiko keuangan."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Dalam evolusi terkini, tugas BI pasca-pandemi menambahkan fokus pada apa?",
    "options": {
      "A": "Pengembangan Central Bank Digital Currency (CBDC)",
      "B": "Pengawasan langsung atas kripto aset",
      "C": "Pengelolaan utang swasta nasional",
      "D": "Pembangunan infrastruktur digital",
      "E": "Regulasi perdagangan e-commerce"
    },
    "correct": "A",
    "explanation": "BI mengembangkan CBDC seperti Digital Rupiah untuk modernisasi sistem pembayaran pasca-pandemi."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "Instrumen pro-market BI seperti SRBI dioptimalkan untuk kondisi ekonomi apa?",
    "options": {
      "A": "Inflasi rendah dan pertumbuhan lambat",
      "B": "Kelebihan likuiditas dan risiko gelembung aset",
      "C": "Defisit anggaran pemerintah tinggi",
      "D": "Penurunan cadangan devisa asing",
      "E": "Volatilitas pasar saham domestik"
    },
    "correct": "B",
    "explanation": "SRBI menarik likuiditas berlebih untuk mencegah gelembung aset dan menjaga stabilitas."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Program BI untuk stabilitas harga pangan melalui sinergi wilayah seperti Kalimantan fokus pada apa?",
    "options": {
      "A": "Peningkatan swasembada pangan regional",
      "B": "Subsidi transportasi komoditas",
      "C": "Pengembangan pasar grosir baru",
      "D": "Regulasi harga minimum petani",
      "E": "Inovasi penyimpanan pangan"
    },
    "correct": "A",
    "explanation": "Sinergi TPID wilayah mendorong swasembada untuk mengurangi ketergantungan impor dan stabilisasi harga."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Dalam bauran kebijakan, BI mendukung pro-stability melalui kebijakan apa?",
    "options": {
      "A": "Penurunan suku bunga untuk stimulus",
      "B": "Stabilisasi nilai tukar rupiah",
      "C": "Ekspansi kredit UMKM tanpa batas",
      "D": "Liberalisasi pasar uang sepenuhnya",
      "E": "Subsidi langsung ke sektor hijau"
    },
    "correct": "B",
    "explanation": "Stabilisasi kurs rupiah mencegah volatilitas yang bisa memicu inflasi impor."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "Wewenang BI di UU P2SK untuk mengembangkan CBDC termasuk aspek apa?",
    "options": {
      "A": "Pengaturan penggunaan kripto swasta",
      "B": "Desain dan uji coba mata uang digital sentral",
      "C": "Pengawasan transaksi blockchain",
      "D": "Integrasi dengan sistem perbankan global",
      "E": "Regulasi pajak atas aset digital"
    },
    "correct": "B",
    "explanation": "BI merancang Digital Rupiah sebagai CBDC untuk efisiensi pembayaran dan stabilitas moneter."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan India melalui mekanisme apa untuk perdagangan?",
    "options": {
      "A": "Rupee-Rupiah Local Currency Trade",
      "B": "Indo-Pacific Economic Framework",
      "C": "Bilateral Investment Treaty Update",
      "D": "South Asia Financial Stability Pact",
      "E": "Cross-Border Digital Payment Link"
    },
    "correct": "A",
    "explanation": "Local Currency Trade memungkinkan penyelesaian perdagangan menggunakan rupee dan rupiah."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pada 1999 menekankan pemisahan dari apa?",
    "options": {
      "A": "Pengawasan bank oleh OJK",
      "B": "Campur tangan pemerintah dalam moneter",
      "C": "Fungsi komersial perbankan",
      "D": "Koordinasi dengan bank regional",
      "E": "Pengelolaan cadangan emas"
    },
    "correct": "B",
    "explanation": "UU 1999 memastikan independensi BI dari pemerintah untuk kebijakan moneter yang lebih kredibel."
  },
  {
    "type": "Instrumen Moneter Pro-Market BI",
    "question": "SVBI digunakan BI untuk mengelola apa di pasar internasional?",
    "options": {
      "A": "Likuiditas rupiah domestik",
      "B": "Cadangan devisa dan inflow modal asing",
      "C": "Inflasi impor komoditas",
      "D": "Rasio kredit bank syariah",
      "E": "Investasi di infrastruktur"
    },
    "correct": "B",
    "explanation": "SVBI menarik inflow valas untuk memperkuat cadangan devisa dan stabilisasi rupiah."
  },
  {
    "type": "Stabilitas Harga Pangan",
    "question": "Inisiatif BI untuk stabilitas harga pangan di Sumatera melalui apa?",
    "options": {
      "A": "Inovasi produksi dan distribusi pangan",
      "B": "Subsidi pupuk nasional",
      "C": "Pengembangan irigasi regional",
      "D": "Regulasi ekspor beras",
      "E": "Program tanam massal"
    },
    "correct": "A",
    "explanation": "BI mendorong inovasi untuk meningkatkan produksi dan distribusi, mengurangi volatilitas harga."
  },
  {
    "type": "Bauran Kebijakan BI",
    "question": "Pro-growth dalam bauran BI didukung melalui kebijakan apa?",
    "options": {
      "A": "Peningkatan cadangan wajib minimum",
      "B": "Ekspansi likuiditas moneter",
      "C": "Pembatasan impor barang modal",
      "D": "Pengetatan regulasi kredit",
      "E": "Intervensi fiskal langsung"
    },
    "correct": "B",
    "explanation": "Ekspansi likuiditas mendorong kredit dan investasi untuk pertumbuhan ekonomi."
  },
  {
    "type": "Wewenang Bank Indonesia sesuai UU P2SK",
    "question": "UU P2SK memberikan wewenang BI untuk mengkoordinasikan dengan pemerintah dalam apa?",
    "options": {
      "A": "Pengendalian inflasi dan stabilitas ekonomi",
      "B": "Pengaturan anggaran belanja tahunan",
      "C": "Regulasi pajak progresif",
      "D": "Pengawasan korupsi keuangan",
      "E": "Pembangunan infrastruktur nasional"
    },
    "correct": "A",
    "explanation": "BI berkoordinasi untuk inflasi dan stabilitas, sambil menjaga independensinya."
  },
  {
    "type": "Kerja Sama BI secara Bilateral",
    "question": "Kerja sama BI dengan Uni Eropa melibatkan framework apa untuk keuangan berkelanjutan?",
    "options": {
      "A": "EU-Indonesia Green Finance Partnership",
      "B": "Bilateral Climate Finance Agreement",
      "C": "European Financial Stability Facility",
      "D": "Cross-Continent Currency Swap Line",
      "E": "Sustainable Development Goals Finance Initiative"
    },
    "correct": "A",
    "explanation": "Green Finance Partnership mendukung transisi ke ekonomi hijau melalui kolaborasi keuangan."
  },
  {
    "type": "Evolusi Tugas Bank Indonesia",
    "question": "Evolusi tugas BI pasca-1968 menambahkan peran dalam apa?",
    "options": {
      "A": "Pembangunan ekonomi melalui kredit",
      "B": "Pengawasan fintech modern",
      "C": "Pengelolaan kripto aset",
      "D": "Koordinasi dengan IMF",
      "E": "Regulasi e-money"
    },
    "correct": "A",
    "explanation": "BI mendukung pembangunan dengan kredit selektif untuk sektor prioritas."
  }
];
const modul8Questions = shuffleQuestions(originalmodul8Questions);

export default modul8Questions;