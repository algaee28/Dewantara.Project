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

const originalmodul1Questions: Question[] = [
  {
    type: "Dasar Hukum",
    question: "Dalam UU No. 23 Tahun 1999 jo. UU No. 6 Tahun 2009, yang dimaksud dengan 'kestabilan nilai rupiah' mencakup stabilitas terhadap dua aspek utama. Manakah pernyataan yang PALING TEPAT menggambarkan kedua aspek tersebut?",
    options: {
      A: "Stabilitas nilai tukar rupiah terhadap dollar AS dan stabilitas harga emas domestik",
      B: "Stabilitas nilai internal yang tercermin dari inflasi dan stabilitas nilai eksternal yang tercermin dari nilai tukar",
      C: "Stabilitas cadangan devisa negara dan stabilitas suku bunga perbankan nasional",
      D: "Stabilitas harga komoditas strategis dan stabilitas neraca perdagangan internasional",
      E: "Stabilitas pertumbuhan ekonomi dan stabilitas tingkat pengangguran nasional"
    },
    correct: "B",
    explanation: "Kestabilan nilai rupiah memiliki dua dimensi: (1) Stabilitas nilai internal - kemampuan rupiah terhadap barang dan jasa yang diukur dari inflasi, dan (2) Stabilitas nilai eksternal - nilai rupiah terhadap mata uang negara lain. Ini adalah definisi komprehensif yang tercantum dalam penjelasan UU BI."
  },
  {
    type: "Dasar Hukum",
    question: "Berdasarkan UU No. 6 Tahun 2009, Bank Indonesia dilarang memberikan kredit kepada Pemerintah, KECUALI dalam satu kondisi tertentu. Apa syarat dan batasan pemberian kredit dalam kondisi tersebut?",
    options: {
      A: "Saat defisit APBN melebihi 3% dari PDB dengan persetujuan DPR dan jangka waktu maksimal 6 bulan",
      B: "Dalam kondisi darurat keuangan yang ditetapkan undang-undang, bersifat jangka pendek maksimal 3 bulan dan harus dilunasi dari penerimaan APBN tahun anggaran berjalan",
      C: "Ketika terjadi krisis ekonomi global dengan persetujuan Presiden dan tenor maksimal 12 bulan",
      D: "Pada saat perang atau bencana nasional dengan keputusan DPR dan bunga maksimal 2% per tahun",
      E: "Jika cadangan devisa di bawah 3 bulan impor dengan approval Menteri Keuangan dan limit 5% dari belanja negara"
    },
    correct: "B",
    explanation: "Pasal 56 UU No. 6/2009 mengatur bahwa BI hanya boleh memberi kredit kepada Pemerintah dalam kondisi darurat keuangan mendesak yang diatur UU, bersifat jangka pendek (maksimal 3 bulan), dan wajib dilunasi dari penerimaan APBN tahun berjalan. Ini untuk mencegah fiscal dominance."
  },
  {
    type: "Kelembagaan",
    question: "Dalam struktur Dewan Gubernur Bank Indonesia yang terdiri dari 7 anggota, mekanisme pengambilan keputusan menggunakan prinsip konsensus. Namun, jika konsensus tidak tercapai, bagaimana mekanisme pengambilan keputusan dilakukan?",
    options: {
      A: "Dilakukan voting dengan suara terbanyak menang, dan setiap anggota memiliki satu suara yang setara",
      B: "Keputusan ditunda hingga RDG berikutnya sampai tercapai konsensus penuh dari seluruh anggota",
      C: "Gubernur memiliki hak veto dan suara yang menentukan untuk memutuskan kebijakan yang deadlock",
      D: "Dibentuk tim khusus yang terdiri dari 3 deputi senior untuk merumuskan kompromi keputusan",
      E: "Keputusan diserahkan kepada Dewan Pengawas untuk memberikan rekomendasi final"
    },
    correct: "C",
    explanation: "Berdasarkan UU BI, jika konsensus tidak tercapai dalam RDG, Gubernur BI memiliki hak istimewa berupa hak veto dan suara yang menentukan. Ini untuk memastikan kebijakan tetap dapat diambil secara efektif sambil menjaga akuntabilitas pada posisi tertinggi."
  },
  {
    type: "Independensi",
    question: "UU No. 3 Tahun 2004 memperkuat independensi Bank Indonesia. Manakah di antara berikut ini yang BUKAN merupakan bentuk independensi yang dijamin dalam undang-undang tersebut?",
    options: {
      A: "Independensi tujuan (goal independence) dalam menetapkan sendiri sasaran akhir kebijakan moneter",
      B: "Independensi instrumen dalam memilih dan menggunakan instrumen kebijakan moneter",
      C: "Independensi personel dimana pihak lain dilarang campur tangan dalam proses pengangkatan dan pemberhentian Gubernur/Deputi",
      D: "Independensi keuangan dengan anggaran sendiri tanpa persetujuan pihak eksternal",
      E: "Independensi administratif dalam mengelola organisasi dan SDM internal"
    },
    correct: "A",
    explanation: "BI memiliki independensi instrumen, personel, keuangan, dan administratif. NAMUN, target inflasi ditetapkan oleh Pemerintah berkoordinasi dengan BI (bukan BI sendiri), sehingga BI tidak memiliki full goal independence. BI hanya independen dalam cara mencapai target yang sudah ditetapkan."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Pasca pembentukan Otoritas Jasa Keuangan (OJK) melalui UU No. 21 Tahun 2011, terjadi perubahan signifikan dalam pembagian tugas pengaturan dan pengawasan sektor keuangan. Manakah pembagian tugas yang TEPAT antara BI dan OJK?",
    options: {
      A: "BI mengawasi bank sistemik, OJK mengawasi bank non-sistemik dan lembaga keuangan lainnya",
      B: "BI mengatur aspek makroprudensial perbankan, OJK mengawasi mikroprudensial bank dan seluruh lembaga jasa keuangan",
      C: "BI mengawasi perbankan konvensional, OJK mengawasi perbankan syariah dan pasar modal",
      D: "BI mengatur kebijakan perbankan, OJK melakukan pengawasan implementasi kebijakan tersebut",
      E: "BI mengawasi aspek likuiditas bank, OJK mengawasi aspek solvabilitas dan tata kelola bank"
    },
    correct: "B",
    explanation: "Pembagian tugas: BI fokus pada regulasi makroprudensial (risiko sistemik, stabilitas sistem keuangan) untuk seluruh sektor perbankan, sementara OJK mengawasi mikroprudensial (kesehatan individual lembaga) untuk bank, asuransi, pasar modal, dan lembaga jasa keuangan lainnya."
  },
  {
    type: "Akuntabilitas",
    question: "Bank Indonesia memiliki kewajiban akuntabilitas kepada publik. Berdasarkan UU yang berlaku, bagaimana mekanisme akuntabilitas Bank Indonesia dilaksanakan?",
    options: {
      A: "Laporan bulanan kepada Presiden dan laporan semester kepada DPR RI",
      B: "Laporan triwulanan kepada DPR RI dan laporan tahunan yang dipublikasikan kepada masyarakat",
      C: "Laporan tahunan kepada MPR dan audit eksternal oleh BPK setiap tahun",
      D: "Laporan semester kepada Presiden dan presentasi publik setiap kuartal",
      E: "Laporan keuangan bulanan kepada Kemenkeu dan evaluasi kinerja tahunan oleh DPR"
    },
    correct: "B",
    explanation: "Pasal 58 UU BI mengatur bahwa BI menyampaikan laporan triwulanan kepada DPR (terkait pelaksanaan tugas dan wewenang) dan laporan tahunan yang dipublikasikan (mencakup laporan keuangan yang telah diaudit). Ini memastikan transparansi dan akuntabilitas publik."
  },
  {
    type: "Dasar Hukum",
    question: "UU No. 24 Tahun 2004 tentang Lembaga Penjamin Simpanan (LPS) mengatur tentang penjaminan simpanan nasabah bank. Dalam konteks Jaring Pengaman Sistem Keuangan (JPSK), apa peran koordinasi antara LPS dan Bank Indonesia?",
    options: {
      A: "LPS menentukan bank yang akan dilikuidasi, BI menyediakan dana talangan untuk proses likuidasi",
      B: "BI melakukan assessment kesehatan bank, LPS memutuskan tindakan penyelamatan atau resolusi bank gagal",
      C: "LPS menjamin simpanan, BI memberikan rekomendasi bank yang layak dijamin berdasarkan tingkat kesehatannya",
      D: "BI sebagai lender of last resort untuk masalah likuiditas, LPS menangani bank yang mengalami insolvency",
      E: "LPS mengatur premi penjaminan, BI mengawasi implementasi program penjaminan di seluruh bank"
    },
    correct: "D",
    explanation: "Dalam JPSK, pembagian peran jelas: BI menangani masalah likuiditas (temporary cash flow problem) melalui fasilitas pembiayaan darurat, sedangkan LPS menangani bank yang insolvent (liabilities > assets) melalui mekanisme resolusi. Keduanya berkoordinasi dalam Forum Koordinasi JPSK."
  },
  {
    type: "Dasar Hukum",
    question: "UU No. 9 Tahun 2016 tentang Pencegahan dan Penanganan Krisis Sistem Keuangan (PPKSK) memperkenalkan konsep Komite Stabilitas Sistem Keuangan (KSSK). Siapakah yang menjadi ketua KSSK dan apa kewenangan utamanya?",
    options: {
      A: "Gubernur BI sebagai ketua, dengan kewenangan menetapkan status krisis dan koordinasi penanganan",
      B: "Menteri Keuangan sebagai ketua, dengan kewenangan menetapkan kebijakan funding untuk penanganan krisis",
      C: "Ketua OJK sebagai ketua, dengan kewenangan melakukan resolusi lembaga keuangan sistemik",
      D: "Presiden RI melalui Menko Perekonomian, dengan kewenangan mobilisasi seluruh sumber daya negara",
      E: "Rotasi antara Menkeu-Gubernur BI-Ketua OJK setiap tahun, dengan kewenangan sesuai bidang masing-masing"
    },
    correct: "B",
    explanation: "KSSK diketuai oleh Menteri Keuangan dengan anggota Gubernur BI, Ketua OJK, dan Ketua LPS. Menkeu sebagai ketua mencerminkan bahwa penanganan krisis sistemik memerlukan dukungan fiskal (public money). KSSK berwenang menetapkan status dan kebijakan penanganan krisis."
  },
  {
    type: "Kelembagaan",
    question: "Dewan Pengawas Bank Indonesia memiliki masa jabatan tertentu dan mekanisme pengangkatan yang spesifik. Manakah pernyataan yang BENAR terkait Dewan Pengawas BI?",
    options: {
      A: "Terdiri dari 5 anggota dengan masa jabatan 4 tahun, diangkat oleh Presiden atas usul DPR",
      B: "Terdiri dari 4 anggota dengan masa jabatan 5 tahun, diangkat oleh DPR atas usul Presiden",
      C: "Terdiri dari 7 anggota dengan masa jabatan 5 tahun, diangkat oleh Presiden setelah fit and proper test DPR",
      D: "Terdiri dari 4 anggota dengan masa jabatan 5 tahun, diangkat Presiden atas usul DPR setelah fit and proper test",
      E: "Terdiri dari 5 anggota dengan masa jabatan 3 tahun, diangkat bersama oleh Presiden dan DPR"
    },
    correct: "D",
    explanation: "Berdasarkan UU BI, Dewan Pengawas terdiri dari 4 orang anggota yang diangkat oleh Presiden atas usul DPR, dengan masa jabatan 5 tahun dan dapat diperpanjang 1 kali. Mereka harus melalui fit and proper test di DPR sebelum diangkat."
  },
  {
    type: "Dasar Hukum",
    question: "UU No. 7 Tahun 2011 tentang Mata Uang mengatur secara komprehensif tentang Rupiah. Dalam undang-undang ini, siapakah yang berwenang menetapkan DESAIN uang Rupiah dan bagaimana prosesnya?",
    options: {
      A: "DPR RI menetapkan desain melalui voting, kemudian BI melaksanakan pencetakan sesuai desain tersebut",
      B: "Bank Indonesia menetapkan desain secara independen berdasarkan pertimbangan teknis keamanan",
      C: "Presiden RI menetapkan desain setelah berkonsultasi dengan DPR dan mempertimbangkan usulan BI",
      D: "Bank Indonesia menetapkan desain setelah mendapat persetujuan Presiden RI",
      E: "Komite khusus yang terdiri dari BI, Kemenkeu, dan ahli desain menetapkan melalui tender"
    },
    correct: "D",
    explanation: "Pasal 4 UU No. 7/2011 menyatakan bahwa desain Rupiah ditetapkan oleh Bank Indonesia setelah mendapat persetujuan Presiden. BI mengusulkan desain berdasarkan pertimbangan teknis, keamanan, dan nilai budaya, kemudian Presiden memberikan persetujuan final."
  },
  {
    type: "Independensi",
    question: "Independensi keuangan Bank Indonesia dijamin dalam undang-undang. Manakah pernyataan yang PALING TEPAT mengenai aspek keuangan Bank Indonesia?",
    options: {
      A: "BI tidak dapat diaudit oleh BPK karena independensinya, hanya audit internal yang diperbolehkan",
      B: "Anggaran BI harus mendapat persetujuan DPR setiap tahun seperti APBN pada umumnya",
      C: "BI menyusun dan menetapkan anggaran sendiri, namun tetap diaudit oleh BPK untuk transparansi",
      D: "Keuangan BI sepenuhnya tertutup dari publik untuk menjaga rahasia kebijakan moneter",
      E: "Surplus BI disetor penuh ke kas negara, defisit ditutup dari APBN tahun berjalan"
    },
    correct: "C",
    explanation: "BI memiliki independensi keuangan dimana anggaran disusun dan ditetapkan sendiri tanpa persetujuan pihak lain. Namun untuk akuntabilitas, laporan keuangan BI tetap diaudit oleh BPK dan dipublikasikan. Ini balance antara independensi dan transparansi."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Forum Koordinasi Jaring Pengaman Sistem Keuangan (FK-JPSK) yang melibatkan BI, OJK, LPS, dan Kemenkeu memiliki fungsi koordinasi preventif. Manakah yang BUKAN merupakan ruang lingkup koordinasi dalam FK-JPSK?",
    options: {
      A: "Pertukaran informasi terkait kondisi kesehatan lembaga keuangan individual dan sistemik",
      B: "Koordinasi kebijakan makroprudensial dan mikroprudensial untuk mencegah krisis",
      C: "Penetapan kebijakan fiskal dan alokasi APBN untuk subsidi sektor keuangan",
      D: "Penyusunan crisis management protocol dan simulasi penanganan krisis",
      E: "Evaluasi efektivitas program penjaminan simpanan dan resolusi bank"
    },
    correct: "C",
    explanation: "FK-JPSK fokus pada koordinasi aspek stabilitas sistem keuangan: information sharing, koordinasi kebijakan prudensial, protokol krisis, dan evaluasi mekanisme penjaminan/resolusi. Kebijakan fiskal dan alokasi APBN adalah domain Kemenkeu dan DPR, bukan FK-JPSK."
  },
  {
    type: "Dasar Hukum",
    question: "UU No. 21 Tahun 2008 tentang Perbankan Syariah memberikan kewenangan khusus kepada Bank Indonesia. Apa peran spesifik BI dalam pengembangan perbankan syariah?",
    options: {
      A: "BI hanya mengatur kebijakan moneter syariah, sementara pengawasan sepenuhnya oleh Dewan Syariah Nasional",
      B: "BI mengatur dan mengawasi perbankan syariah sepenuhnya termasuk aspek kepatuhan syariah",
      C: "BI mengatur kebijakan moneter dan makroprudensial syariah, OJK mengawasi mikroprudensial, DSN-MUI aspek syariah",
      D: "BI hanya memberikan lisensi bank syariah, operasional diatur oleh OJK dan MUI",
      E: "BI mengatur produk syariah, OJK mengawasi operasional, DSN menetapkan fatwa non-binding"
    },
    correct: "C",
    explanation: "Ada pembagian peran tiga lembaga: (1) BI mengatur kebijakan moneter syariah dan makroprudensial, (2) OJK mengawasi aspek mikroprudensial dan operasional bank syariah, (3) DSN-MUI menetapkan fatwa aspek kepatuhan syariah. Ini adalah model triple regulation dalam perbankan syariah Indonesia."
  },
  {
    type: "Kelembagaan",
    question: "Dalam struktur organisasi Bank Indonesia, terdapat beberapa kantor perwakilan. Apa fungsi utama Kantor Perwakilan Dalam Negeri (KPwDN) Bank Indonesia?",
    options: {
      A: "Memberikan kredit kepada UMKM di daerah dan mengawasi bank perkreditan rakyat setempat",
      B: "Melakukan kajian ekonomi regional, koordinasi kebijakan daerah, dan pengelolaan kas titipan",
      C: "Mengawasi bank umum di wilayahnya dan memberikan izin operasional cabang bank baru",
      D: "Menerima setoran pajak daerah dan mengelola dana transfer ke pemerintah daerah",
      E: "Melakukan sosialisasi produk perbankan dan memberikan layanan konsultasi keuangan kepada masyarakat"
    },
    correct: "B",
    explanation: "KPwDN memiliki fungsi: (1) Kajian ekonomi dan moneter regional untuk input kebijakan, (2) Koordinasi dengan Pemda dalam pengendalian inflasi (TPID), (3) Pengelolaan kas titipan untuk distribusi uang, (4) Sosialisasi kebijakan BI. Bukan fungsi pengawasan bank (itu OJK) atau pemberian kredit."
  },
  {
    type: "Akuntabilitas",
    question: "Laporan Tahunan Bank Indonesia yang dipublikasikan kepada masyarakat harus memuat berbagai informasi. Manakah yang WAJIB tercantum dalam Laporan Tahunan BI berdasarkan UU?",
    options: {
      A: "Hanya laporan keuangan yang telah diaudit dan realisasi anggaran tahun berjalan",
      B: "Evaluasi kebijakan tahun lalu, rencana kebijakan tahun depan, dan bonus Dewan Gubernur",
      C: "Pelaksanaan tugas dan wewenang, laporan keuangan audited, dan rencana kebijakan tahun mendatang",
      D: "Kondisi ekonomi makro, proyeksi inflasi 5 tahun, dan daftar bank bermasalah",
      E: "Ringkasan RDG, detail operasi moneter harian, dan laporan pengaduan masyarakat"
    },
    correct: "C",
    explanation: "Pasal 58 UU BI mengatur Laporan Tahunan harus memuat: (1) Pelaksanaan tugas dan wewenang BI, (2) Laporan keuangan yang telah diaudit akuntan publik, dan (3) Rencana kebijakan, sasaran, dan langkah-langkah pelaksanaan tugas untuk tahun berikutnya."
  },
  {
    type: "Dasar Hukum",
    question: "UU No. 3 Tahun 2011 tentang Transfer Dana mengatur tentang sistem transfer dana. Apa kewenangan Bank Indonesia dalam undang-undang ini?",
    options: {
      A: "BI mengatur seluruh aspek transfer dana termasuk fee yang dibebankan kepada nasabah",
      B: "BI hanya mengatur transfer dana antar bank, transfer dalam bank diatur oleh OJK",
      C: "BI mengatur penyelenggaraan transfer dana, perizinan, dan pengawasan penyelenggara sistem transfer",
      D: "BI hanya melakukan sosialisasi transfer dana, pengaturan dan pengawasan oleh OJK",
      E: "BI mengatur transfer domestik, BI bersama OJK mengatur transfer internasional"
    },
    correct: "C",
    explanation: "Pasal 6 UU No. 3/2011 memberikan kewenangan kepada BI untuk mengatur penyelenggaraan transfer dana sebagai bagian dari sistem pembayaran, termasuk perizinan penyelenggara transfer dana dan pengawasannya. Ini sejalan dengan tugas BI mengatur dan menjaga kelancaran sistem pembayaran."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Dalam UU No. 4 Tahun 2023 tentang Pengembangan dan Penguatan Sektor Keuangan (P2SK), Bank Indonesia memiliki peran strategis. Apa kontribusi utama BI dalam kerangka P2SK?",
    options: {
      A: "BI menjadi koordinator utama seluruh kebijakan pengembangan sektor keuangan menggantikan OJK",
      B: "BI berkontribusi dalam aspek stabilitas sistem keuangan, kebijakan moneter, dan sistem pembayaran",
      C: "BI hanya memberikan data dan statistik, implementasi P2SK sepenuhnya oleh Kemenkeu dan OJK",
      D: "BI fokus pada pengembangan pasar modal syariah sebagai bagian dari P2SK",
      E: "BI bertugas melakukan sosialisasi P2SK kepada perbankan dan lembaga keuangan"
    },
    correct: "B",
    explanation: "Dalam UU P2SK, BI berkontribusi sesuai tugas konstitusionalnya: (1) Kebijakan moneter untuk stabilitas makroekonomi, (2) Kebijakan makroprudensial untuk stabilitas sistem keuangan, (3) Pengaturan sistem pembayaran. Ini terintegrasi dalam roadmap pengembangan sektor keuangan yang dikoordinasikan oleh Komite P2SK."
  },
  {
    type: "Kelembagaan",
    question: "Rapat Dewan Gubernur (RDG) Bank Indonesia memiliki jadwal dan agenda yang terstruktur. Manakah pernyataan yang BENAR tentang RDG?",
    options: {
      A: "RDG bulanan fokus kebijakan moneter, RDG mingguan bahas operasional, keputusan suku bunga bisa kapan saja",
      B: "RDG bulanan membahas dan menetapkan stance kebijakan moneter termasuk BI7DRR, dilaksanakan rutin setiap bulan",
      C: "RDG hanya dilakukan saat ada isu mendesak, tidak ada jadwal tetap untuk fleksibilitas kebijakan",
      D: "RDG triwulanan untuk kebijakan moneter, RDG bulanan untuk isu operasional dan administratif",
      E: "RDG mingguan untuk monitoring pasar, RDG bulanan untuk kebijakan, RDG tahunan untuk evaluasi"
    },
    correct: "B",
    explanation: "RDG bulanan (biasanya tiap bulan) adalah forum utama untuk membahas dan menetapkan stance kebijakan moneter termasuk penetapan BI7DRR berdasarkan assessment kondisi ekonomi dan inflasi. Hasil RDG dipublikasikan untuk transparansi dan pengelolaan ekspektasi pasar."
  },
  {
    type: "Dasar Hukum",
    question: "Modal Bank Indonesia diatur dalam undang-undang dengan ketentuan khusus. Bagaimana pengaturan modal BI dan bagaimana jika BI mengalami kerugian?",
    options: {
      A: "Modal BI minimum Rp 2 triliun, kerugian ditutup dari cadangan, jika tidak cukup dari APBN tahun berikutnya",
      B: "Modal BI Rp 5 triliun tetap, kerugian otomatis ditutup oleh negara melalui APBN tahun berjalan",
      C: "Modal BI minimum Rp 2 triliun, jika ada kerugian maka APBN wajib mengalokasikan dana untuk menutup",
      D: "Modal BI disesuaikan setiap tahun, kerugian bisa ditutup dengan menerbitkan SBI khusus",
      E: "Modal BI tidak terbatas karena bisa mencetak uang, konsep kerugian tidak relevan untuk bank sentral"
    },
    correct: "A",
    explanation: "Pasal 62 UU BI: Modal minimum Rp 2 triliun. Jika ada kerugian, ditutup dari cadangan tujuan. Jika cadangan tidak cukup, APBN tahun anggaran berikutnya wajib mengalokasikan dana menutup kerugian untuk mempertahankan modal minimum. Ini untuk menjaga kredibilitas BI."
  },
  {
    type: "Independensi",
    question: "Pemberhentian Gubernur atau Deputi Gubernur Bank Indonesia di tengah masa jabatan hanya dapat dilakukan dalam kondisi tertentu. Manakah yang BUKAN merupakan alasan pemberhentian berdasarkan UU?",
    options: {
      A: "Mengundurkan diri atas permintaan sendiri secara tertulis",
      B: "Tidak dapat menjalankan tugas secara permanen karena kesehatan berdasarkan keterangan dokter",
      C: "Kebijakan moneter yang diambil tidak sejalan dengan program ekonomi pemerintah",
      D: "Terbukti melakukan tindak pidana kejahatan berdasarkan putusan pengadilan yang inkracht",
      E: "Tidak lagi memenuhi syarat sebagai Gubernur/Deputi Gubernur sesuai UU"
    },
    correct: "C",
    explanation: "UU BI mengatur alasan pemberhentian: pengunduran diri, tidak mampu jasmani/rohani permanen, tindak pidana, tidak memenuhi syarat lagi, atau meninggal dunia. PERBEDAAN KEBIJAKAN dengan pemerintah BUKAN alasan pemberhentian - ini justru esensi independensi BI dalam mengambil kebijakan teknis."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Dalam penanganan bank bermasalah sistemik, terdapat koordinasi antara BI, OJK, dan LPS. Bagaimana pembagian peran ketiga lembaga ini?",
    options: {
      A: "BI memberikan assessment, OJK memutuskan status bank, LPS melaksanakan resolusi dengan dana dari BI",
      B: "OJK melakukan pengawasan dan assessment bank, LPS memutuskan dan melakukan resolusi, BI menyediakan ELA jika perlu",
      C: "BI melakukan stress test, OJK menurunkan rating bank, LPS langsung mengambil alih bank bermasalah",
      D: "Ketiganya membentuk tim bersama untuk melakukan assessment, resolusi, dan penyediaan likuiditas secara kolektif",
      E: "LPS melakukan early detection, BI memberikan bantuan likuiditas, OJK memutuskan ditutup atau diselamatkan"
    },
    correct: "B",
    explanation: "Pembagian peran jelas: (1) OJK sebagai pengawas melakukan assessment kesehatan bank dan menentukan status, (2) LPS melakukan resolusi bank gagal (bila insolvent) sesuai kewenangannya, (3) BI dapat memberikan Emergency Liquidity Assistance (ELA) untuk bank solvent tapi illiquid jika penting secara sistemik."
  },
  {
    type: "Akuntabilitas",
    question: "Bank Indonesia wajib menyampaikan laporan kepada DPR secara berkala. Apa konsekuensi hukum jika Gubernur BI tidak menyampaikan laporan triwulanan atau tahunan kepada DPR?",
    options: {
      A: "Gubernur dapat diberhentikan sementara oleh Presiden sambil menunggu investigasi DPR",
      B: "DPR dapat memanggil Gubernur untuk memberikan keterangan dan penjelasan atas kelalaiannya",
      C: "Gubernur dikenakan sanksi administratif berupa pemotongan gaji sampai laporan disampaikan",
      D: "Laporan dianggap nihil dan BI kehilangan hak untuk menetapkan kebijakan baru",
      E: "Dewan Pengawas BI wajib memberhentikan Gubernur karena tidak menjalankan kewajiban UU"
    },
    correct: "B",
    explanation: "UU BI tidak mengatur sanksi otomatis untuk keterlambatan laporan. Namun DPR memiliki hak untuk memanggil Gubernur BI memberikan penjelasan terkait pelaksanaan tugas termasuk penyampaian laporan. Ini adalah bagian dari mekanisme checks and balances dalam sistem akuntabilitas BI."
  },
  {
    type: "Dasar Hukum",
    question: "Dalam konteks larangan pemberian kredit kepada pemerintah, bagaimana BI dapat membantu pengelolaan utang pemerintah tanpa melanggar UU?",
    options: {
      A: "BI dapat membeli SBN di pasar perdana langsung dari pemerintah dengan limit 20% dari penerbitan",
      B: "BI dapat membeli SBN di pasar sekunder untuk keperluan operasi moneter, bukan untuk membiayai defisit",
      C: "BI tidak boleh membeli SBN sama sekali baik di pasar perdana maupun sekunder",
      D: "BI hanya boleh membeli SBN syariah (sukuk) di pasar perdana untuk mendukung ekonomi syariah",
      E: "BI dapat membeli SBN jika yield-nya di atas suku bunga BI7DRR untuk menjaga keuntungan BI"
    },
    correct: "B",
    explanation: "BI dilarang membeli SBN di pasar perdana (yang berarti membiayai defisit pemerintah). NAMUN, BI dapat membeli/menjual SBN di pasar sekunder untuk keperluan operasi moneter (OMO) dalam mengelola likuiditas sistem perbankan. Ini tidak melanggar prinsip larangan pembiayaan defisit."
  },
  {
    type: "Kelembagaan",
    question: "Dalam struktur BI, terdapat Departemen, Kantor, dan Unit kerja lainnya. Manakah pernyataan yang TEPAT tentang Sekretariat Dewan Gubernur?",
    options: {
      A: "Sekretariat DG adalah unit setingkat departemen yang dipimpin seorang Direktur Eksekutif",
      B: "Sekretariat DG dipimpin oleh salah satu Deputi Gubernur secara ex-officio bergantian setiap tahun",
      C: "Sekretariat DG adalah support unit yang memberikan dukungan administratif dan teknis kepada Dewan Gubernur",
      D: "Sekretariat DG adalah lembaga independen di luar struktur BI yang mengawasi Dewan Gubernur",
      E: "Sekretariat DG dipimpin oleh Kepala Sekretaris yang diangkat langsung oleh Presiden RI"
    },
    correct: "C",
    explanation: "Sekretariat Dewan Gubernur adalah unit kerja di BI yang memberikan dukungan administratif, teknis, dan logistik kepada Dewan Gubernur dalam menjalankan fungsinya, termasuk persiapan RDG, dokumentasi keputusan, dan follow-up implementasi kebijakan. Biasanya dipimpin oleh pejabat eselon tinggi BI."
  },
  {
    type: "Dasar Hukum",
    question: "UU No. 7 Tahun 2011 tentang Mata Uang mengatur sanksi pidana terkait Rupiah. Berapa ancaman maksimal pidana penjara bagi pelaku yang dengan sengaja mengedarkan uang Rupiah palsu?",
    options: {
      A: "Pidana penjara maksimal 10 tahun dan denda maksimal Rp 10 miliar",
      B: "Pidana penjara maksimal 15 tahun dan denda maksimal Rp 50 miliar",
      C: "Pidana penjara seumur hidup atau pidana penjara paling lama 20 tahun dan denda maksimal Rp 100 miliar",
      D: "Pidana penjara maksimal 20 tahun tanpa denda karena sudah sangat berat",
      E: "Pidana penjara maksimal 25 tahun dan denda maksimal Rp 200 miliar"
    },
    correct: "C",
    explanation: "Pasal 36 UU No. 7/2011 mengatur bahwa mengedarkan uang palsu dengan sengaja diancam pidana penjara seumur hidup atau pidana penjara paling lama 20 tahun DAN denda maksimal Rp 100 miliar. Sanksi berat ini karena pemalsuan uang mengancam kedaulatan negara dan stabilitas ekonomi."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Dalam UU No. 9 Tahun 2016 tentang PPKSK, terdapat mekanisme burden sharing dalam penanganan krisis. Apa yang dimaksud dengan burden sharing ini?",
    options: {
      A: "Pembagian beban kerja penanganan krisis antara BI, OJK, LPS, dan Kemenkeu sesuai tupoksi masing-masing",
      B: "Pembagian biaya penanganan krisis antara pemerintah (fiskal) dan bank sentral (moneter) berdasarkan kriteria tertentu",
      C: "Alokasi tanggung jawab kepada bank-bank besar untuk membantu menyelamatkan bank kecil yang bermasalah",
      D: "Mekanisme haircut kepada kreditor dan deposan dalam resolusi bank gagal",
      E: "Pembagian risiko sistemik di antara seluruh lembaga keuangan secara proporsional"
    },
    correct: "B",
    explanation: "Burden sharing dalam UU PPKSK mengatur pembagian beban biaya penanganan krisis antara APBN (fiskal) dan sumber daya BI. Ada kriteria kapan menggunakan dana pemerintah (untuk solvency support) vs fasilitas BI (untuk liquidity support), dengan mekanisme yang jelas untuk menghindari moral hazard."
  },
  {
    type: "Independensi",
    question: "Dalam praktik independensi bank sentral, terdapat konsep 'instrument independence' dan 'goal independence'. Bagaimana status BI dalam dua konsep ini?",
    options: {
      A: "BI memiliki penuh instrument independence dan goal independence tanpa campur tangan pihak manapun",
      B: "BI memiliki instrument independence dalam memilih cara mencapai target, namun target inflasi ditetapkan Pemerintah",
      C: "BI hanya memiliki goal independence, instrumen kebijakan harus dikonsultasikan dengan Pemerintah",
      D: "BI tidak memiliki keduanya karena harus berkoordinasi penuh dengan kebijakan fiskal Pemerintah",
      E: "BI memiliki goal independence untuk target inflasi, tetapi instrumen harus disetujui DPR"
    },
    correct: "B",
    explanation: "BI memiliki INSTRUMENT INDEPENDENCE penuh dalam memilih dan menggunakan instrumen kebijakan moneter untuk mencapai target. NAMUN, BI TIDAK memiliki full goal independence karena target inflasi ditetapkan oleh Pemerintah berkoordinasi dengan BI. Ini model 'constrained discretion' dalam inflation targeting framework."
  },
  {
    type: "Kelembagaan",
    question: "Fit and proper test untuk calon Gubernur dan Deputi Gubernur BI dilakukan oleh DPR RI. Apa aspek utama yang dinilai dalam fit and proper test tersebut?",
    options: {
      A: "Hanya track record pendidikan formal di bidang ekonomi dan pengalaman di lembaga keuangan",
      B: "Kemampuan, integritas, kepemilikan saham di perbankan, dan tidak pernah dinyatakan pailit",
      C: "Afiliasi politik, dukungan partai, dan komitmen terhadap program ekonomi pemerintah",
      D: "Kemampuan berbahasa asing, pengalaman internasional, dan jaringan dengan bank sentral lain",
      E: "Visi-misi kandidat yang sejalan dengan platform ekonomi partai mayoritas di DPR"
    },
    correct: "B",
    explanation: "Pasal 41 & 42 UU BI mengatur kriteria yang diuji: (1) Integritas moral dan kejujuran, (2) Kemampuan dan keahlian di bidang ekonomi/perbankan, (3) Tidak pernah dinyatakan pailit, (4) Tidak memiliki kepentingan dalam lembaga keuangan yang dapat mempengaruhi independensi. Bukan soal afiliasi politik."
  },
  {
    type: "Dasar Hukum",
    question: "Dalam UU BI, diatur tentang rahasia bank bagi Bank Indonesia. Bagaimana pengaturan rahasia bank untuk BI dan apa perbedaannya dengan bank umum?",
    options: {
      A: "BI tidak mengenal konsep rahasia bank karena statusnya sebagai lembaga negara yang transparan",
      B: "BI tunduk pada ketentuan rahasia bank yang sama persis dengan bank umum dalam UU Perbankan",
      C: "BI memiliki kewajiban kerahasiaan atas informasi yang diperoleh dalam menjalankan tugas, dengan pengecualian tertentu",
      D: "Rahasia bank BI hanya berlaku untuk transaksi pemerintah, tidak untuk data perbankan umum",
      E: "BI bebas membuka informasi apapun kepada publik untuk tujuan transparansi kebijakan"
    },
    correct: "C",
    explanation: "Pasal 60 UU BI mengatur kewajiban BI dan pihak terkait untuk merahasiakan informasi yang diperoleh dalam pelaksanaan tugas. Pengecualian: untuk kepentingan peradilan pidana, pemeriksaan BPK, permintaan DPR, atau pihak lain yang diatur dalam UU. Ini untuk melindungi informasi sensitif pasar dan data institusi."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Dalam kebijakan makroprudensial, BI berkoordinasi dengan OJK. Bagaimana mekanisme koordinasi penetapan kebijakan makroprudensial seperti Countercyclical Capital Buffer (CCyB)?",
    options: {
      A: "BI menetapkan CCyB secara sepihak karena ini masuk domain kebijakan makroprudensial BI",
      B: "OJK menetapkan CCyB berdasarkan rekomendasi analisis risiko sistemik dari BI",
      C: "BI dan OJK bersama-sama menetapkan melalui forum Joint Committee yang diketuai Menkeu",
      D: "BI menganalisis dan merekomendasikan level CCyB, OJK mempertimbangkan dan menetapkan dalam regulasi",
      E: "CCyB ditetapkan oleh KSSK berdasarkan usulan dari BI dan persetujuan OJK serta LPS"
    },
    correct: "D",
    explanation: "Dalam praktik koordinasi: BI melakukan assessment risiko sistemik dan merekomendasikan level CCyB (0-2,5%) kepada OJK. OJK kemudian mempertimbangkan rekomendasi tersebut dan menetapkan dalam POJK. Ini mencerminkan pembagian peran: BI fokus analisis sistemik, OJK implementasi regulasi mikroprudensial."
  },
  {
    type: "Akuntabilitas",
    question: "Audit eksternal terhadap laporan keuangan Bank Indonesia dilakukan oleh akuntan publik. Siapa yang berwenang menunjuk akuntan publik yang akan mengaudit BI?",
    options: {
      A: "Dewan Gubernur BI menunjuk akuntan publik secara independen tanpa persetujuan pihak lain",
      B: "Presiden RI menunjuk akuntan publik atas usulan Menteri Keuangan untuk mengaudit BI",
      C: "DPR RI menunjuk akuntan publik melalui mekanisme tender terbuka untuk transparansi",
      D: "Dewan Pengawas BI menunjuk akuntan publik setelah berkonsultasi dengan BPK",
      E: "BPK menunjuk langsung karena BPK adalah auditor utama keuangan negara"
    },
    correct: "D",
    explanation: "Berdasarkan UU BI, Dewan Pengawas BI yang berwenang menunjuk akuntan publik eksternal untuk mengaudit laporan keuangan BI. Ini sejalan dengan fungsi pengawasan Dewan Pengawas. Hasil audit kemudian disampaikan dalam Laporan Tahunan BI yang dipublikasikan."
  },
  {
    type: "Dasar Hukum",
    question: "UU BI mengatur tentang penggunaan surplus Bank Indonesia. Bagaimana mekanisme penggunaan surplus BI menurut undang-undang?",
    options: {
      A: "100% surplus disetor ke APBN sebagai Penerimaan Negara Bukan Pajak (PNBP) setiap tahun",
      B: "Surplus dibagi: 30% untuk cadangan tujuan, 70% disetor ke kas negara setelah persetujuan DPR",
      C: "Surplus diprioritaskan untuk cadangan tujuan, sisanya diserahkan kepada Pemerintah sesuai ketentuan UU",
      D: "Surplus sepenuhnya menjadi hak BI untuk memperkuat modal dan tidak disetor ke negara",
      E: "Surplus dibagi sama rata antara penguatan modal BI dan setoran ke APBN"
    },
    correct: "C",
    explanation: "Pasal 62 UU BI: Surplus BI diprioritaskan untuk pembentukan cadangan tujuan hingga mencapai jumlah tertentu. Setelah cadangan tujuan terpenuhi, sisanya diserahkan kepada Pemerintah. Cadangan tujuan berfungsi untuk menutup kemungkinan kerugian operasional BI atau untuk keperluan lain yang ditetapkan."
  },
  {
    type: "Kelembagaan",
    question: "Dalam menjalankan tugasnya, BI memiliki Kantor Perwakilan di Luar Negeri (KPwLN). Apa fungsi utama KPwLN Bank Indonesia?",
    options: {
      A: "Memberikan layanan perbankan kepada WNI di luar negeri dan mengawasi bank asing",
      B: "Mempromosikan investasi asing ke Indonesia dan memfasilitasi perdagangan ekspor-impor",
      C: "Melakukan liaison dengan bank sentral negara setempat, monitoring ekonomi global, dan pengelolaan cadangan devisa",
      D: "Mengawasi TKI dan pengiriman remitansi serta memberikan edukasi keuangan di luar negeri",
      E: "Mewakili pemerintah RI dalam forum keuangan internasional dan negosiasi perjanjian bilateral"
    },
    correct: "C",
    explanation: "KPwLN memiliki fungsi strategis: (1) Liaison dengan bank sentral dan institusi keuangan internasional, (2) Monitoring dan analisis perkembangan ekonomi global yang relevan bagi Indonesia, (3) Pengelolaan sebagian cadangan devisa, (4) Representasi BI dalam forum internasional. Bukan fungsi komersial atau konsular."
  },
  {
    type: "Dasar Hukum",
    question: "Dalam UU No. 7/2011 tentang Mata Uang, diatur tentang kewajiban penggunaan Rupiah. Namun ada pengecualian dimana mata uang asing boleh digunakan. Dalam kondisi apa pengecualian ini berlaku?",
    options: {
      A: "Semua transaksi dengan nilai di atas USD 100,000 otomatis boleh menggunakan valuta asing",
      B: "Transaksi tertentu yang diatur dalam Peraturan Bank Indonesia, seperti transaksi perdagangan internasional",
      C: "Transaksi di zona ekonomi khusus dan kawasan bebas yang ditetapkan pemerintah",
      D: "Hanya transaksi antara WNA di Indonesia atau transaksi dengan pihak asing di luar Indonesia",
      E: "Transaksi yang melibatkan bank asing atau perusahaan multinasional di Indonesia"
    },
    correct: "B",
    explanation: "Pasal 21-22 UU No. 7/2011: Rupiah wajib digunakan di NKRI, kecuali untuk transaksi tertentu yang diatur dalam PBI. Pengecualian meliputi: transaksi dalam rangka pelaksanaan APBN, penerimaan/pemberian hibah dari/ke luar negeri, transaksi perdagangan internasional, simpanan di bank dalam bentuk valuta asing, dan transaksi pembiayaan internasional."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Dalam Forum Koordinasi Stabilitas Sistem Keuangan (FK-SSK), BI berkoordinasi dengan OJK dan LPS. Apa perbedaan antara FK-SSK dengan KSSK (Komite Stabilitas Sistem Keuangan)?",
    options: {
      A: "FK-SSK dan KSSK adalah nama berbeda untuk forum yang sama, keduanya dipimpin oleh Menkeu",
      B: "FK-SSK adalah forum koordinasi rutin preventif, KSSK adalah komite pengambilan keputusan saat krisis",
      C: "FK-SSK dipimpin Gubernur BI, KSSK dipimpin Menkeu dengan kewenangan lebih tinggi",
      D: "FK-SSK fokus pada stabilitas makro, KSSK fokus pada resolusi lembaga keuangan individual",
      E: "FK-SSK adalah forum teknis, KSSK adalah forum politik yang melibatkan Presiden"
    },
    correct: "B",
    explanation: "FK-SSK (diatur UU BI) adalah forum koordinasi rutin antara BI, OJK, dan LPS untuk pencegahan krisis: information sharing, early warning, dan koordinasi kebijakan. KSSK (diatur UU PPKSK) adalah komite yang berwenang menetapkan status krisis dan kebijakan penanganan krisis, dipimpin Menkeu dengan kewenangan eksekutif lebih tinggi."
  },
  {
    type: "Independensi",
    question: "Salah satu jaminan independensi BI adalah larangan pihak lain campur tangan. Namun, DPR tetap memiliki peran checks and balances. Manakah yang MERUPAKAN bentuk checks and balances DPR yang TIDAK melanggar independensi BI?",
    options: {
      A: "DPR meminta BI mengubah suku bunga acuan karena tidak sejalan dengan kebijakan fiskal pemerintah",
      B: "DPR memanggil Gubernur BI untuk memberikan penjelasan atas kebijakan yang telah diambil",
      C: "DPR menolak implementasi kebijakan makroprudensial yang dianggap menghambat pertumbuhan kredit",
      D: "DPR memerintahkan BI untuk membeli SBN di pasar perdana untuk membantu pembiayaan defisit",
      E: "DPR menetapkan target inflasi tanpa konsultasi dengan BI karena merupakan hak budget DPR"
    },
    correct: "B",
    explanation: "Checks and balances DPR yang legitimate: meminta penjelasan/klarifikasi kebijakan (hak bertanya), melakukan fit and proper test, menerima dan membahas laporan BI. Yang MELANGGAR independensi: memerintahkan kebijakan teknis tertentu, mengintervensi keputusan moneter, atau memaksa BI melakukan tindakan yang bertentangan dengan UU."
  },
  {
    type: "Akuntabilitas",
    question: "Transparansi kebijakan moneter Bank Indonesia diwujudkan melalui berbagai cara. Manakah yang BUKAN merupakan praktik transparansi kebijakan moneter BI?",
    options: {
      A: "Publikasi hasil Rapat Dewan Gubernur bulanan beserta pertimbangan kebijakan moneter",
      B: "Penerbitan Laporan Kebijakan Moneter (LKM) triwulanan dengan outlook ekonomi dan inflasi",
      C: "Press conference Gubernur BI setelah RDG untuk menjelaskan keputusan kepada publik dan pasar",
      D: "Publikasi notulen lengkap RDG termasuk voting record masing-masing anggota Dewan Gubernur",
      E: "Publikasi Inflation Report yang menjelaskan sumber inflasi dan respons kebijakan yang diambil"
    },
    correct: "D",
    explanation: "BI melakukan banyak transparansi: publikasi hasil keputusan RDG, LKM, press conference, dan berbagai laporan. NAMUN, notulen detail termasuk voting record individu anggota DG TIDAK dipublikasikan untuk menjaga prinsip kolektivitas keputusan dan menghindari external pressure pada anggota individual. Fokus pada keputusan institusi, bukan individu."
  },
  {
    type: "Dasar Hukum",
    question: "UU No. 4/2023 tentang P2SK memperkenalkan konsep 'Surat Berharga Negara untuk Pendalaman Pasar Keuangan' (SBN-PPK). Apa peran Bank Indonesia terkait SBN-PPK ini?",
    options: {
      A: "BI wajib membeli seluruh SBN-PPK yang diterbitkan pemerintah sebagai market maker",
      B: "BI dapat membeli SBN-PPK di pasar perdana dengan limit tertentu untuk pendalaman pasar",
      C: "BI dilarang terlibat dalam SBN-PPK karena melanggar larangan pembiayaan defisit",
      D: "BI hanya berperan sebagai agen penjualan SBN-PPK kepada bank dan investor",
      E: "BI dapat membeli SBN-PPK di pasar sekunder untuk tujuan operasi moneter seperti SBN biasa"
    },
    correct: "E",
    explanation: "SBN-PPK adalah instrumen untuk pendalaman pasar keuangan. Untuk BI, perlakuannya sama dengan SBN lainnya: BI TIDAK boleh beli di pasar perdana (larangan pembiayaan defisit tetap berlaku), TAPI boleh beli/jual di pasar sekunder untuk keperluan operasi moneter dalam mengelola likuiditas. UU P2SK tidak mengubah prinsip independensi BI ini."
  },
  {
    type: "Kelembagaan",
    question: "Dalam struktur tata kelola BI, terdapat Komite Audit Internal. Apa fungsi dan peran Komite Audit Internal ini?",
    options: {
      A: "Melakukan audit langsung terhadap seluruh unit kerja BI dan membuat laporan audit",
      B: "Mengawasi efektivitas audit internal, sistem pengendalian internal, dan manajemen risiko BI",
      C: "Menunjuk dan mengawasi akuntan publik eksternal yang mengaudit laporan keuangan BI",
      D: "Melakukan investigasi kasus fraud dan memberikan sanksi kepada pegawai yang bermasalah",
      E: "Mengaudit kepatuhan BI terhadap seluruh ketentuan undang-undang dan regulasi"
    },
    correct: "B",
    explanation: "Komite Audit Internal (diatur PBI) adalah komite yang membantu Dewan Gubernur dalam pengawasan: (1) Efektivitas audit internal, (2) Kecukupan sistem pengendalian internal, (3) Pelaksanaan manajemen risiko, (4) Kepatuhan terhadap ketentuan. Komite tidak melakukan audit sendiri, tapi mengawasi fungsi audit internal BI."
  },
  {
    type: "Koordinasi Kelembagaan",
    question: "Dalam penanganan bank sistemik yang bermasalah, BI dapat memberikan Emergency Liquidity Assistance (ELA). Apa syarat utama pemberian ELA oleh BI?",
    options: {
      A: "Bank harus sistemik, solvent tapi illiquid, memiliki agunan berkualitas, dan persetujuan OJK",
      B: "Bank harus memiliki modal inti minimal Rp 10 triliun dan mendapat rekomendasi LPS",
      C: "Bank harus BUKU 4, beroperasi minimal 10 tahun, dan mendapat jaminan pemerintah",
      D: "Bank harus milik negara atau joint venture dengan BUMN dan critical untuk ekonomi nasional",
      E: "Bank harus menyerahkan saham mayoritas kepada BI sebagai konversi utang ELA"
    },
    correct: "A",
    explanation: "Syarat ELA (UU No. 9/2016): (1) Bank penting secara sistemik (sistemically important), (2) Solvent menurut assessment OJK tapi mengalami kesulitan likuiditas, (3) Memiliki agunan yang cukup dan berkualitas tinggi, (4) Ada rekomendasi dari OJK. ELA adalah fasilitas likuiditas darurat, bukan resolusi untuk bank insolvent."
  },
  {
    type: "Dasar Hukum",
    question: "Dalam UU BI, diatur tentang kewajiban Bank Indonesia untuk menyampaikan informasi kepada publik. Namun ada informasi yang dikecualikan dari kewajiban transparansi. Apa contoh informasi yang dikecualikan?",
    options: {
      A: "Laporan keuangan Bank Indonesia yang telah diaudit oleh akuntan publik",
      B: "Data individual bank yang diperoleh BI dalam pengawasan makroprudensial",
      C: "Hasil keputusan Rapat Dewan Gubernur terkait penetapan suku bunga acuan",
      D: "Target inflasi yang ditetapkan pemerintah untuk tahun berjalan",
      E: "Statistik moneter dan perbankan yang telah diagregasi"
    },
    correct: "B",
    explanation: "BI transparan dalam kebijakan dan data agregat. NAMUN, informasi yang dikecualikan meliputi: (1) Data individual bank/lembaga keuangan (rahasia bank), (2) Informasi yang dapat mengganggu stabilitas pasar, (3) Data pribadi pihak tertentu, (4) Dokumen internal deliberative process. Pengecualian ini untuk melindungi sistem keuangan dan privasi."
  },
  {
    type: "Independensi",
    question: "Koordinasi antara kebijakan moneter (BI) dan kebijakan fiskal (Pemerintah) penting untuk efektivitas kebijakan makroekonomi. Bagaimana bentuk koordinasi yang TEPAT tanpa melanggar independensi BI?",
    options: {
      A: "Pemerintah memberi instruksi tertulis kepada BI tentang level suku bunga yang dikehendaki",
      B: "BI dan Pemerintah melakukan policy coordination dan information sharing tanpa subordinasi",
      C: "BI wajib menyesuaikan stance moneter dengan arah kebijakan fiskal yang ditetapkan pemerintah",
      D: "Pemerintah memiliki hak veto terhadap keputusan moneter BI yang dinilai kontradiktif dengan fiskal",
      E: "BI dan Kementerian Keuangan melakukan joint decision making untuk semua kebijakan makro"
    },
    correct: "B",
    explanation: "Koordinasi yang tepat: (1) Information sharing tentang proyeksi dan kebijakan masing-masing, (2) Konsultasi dan diskusi tentang dampak kebijakan, (3) Sinkronisasi timing kebijakan bila memungkinkan, (4) TANPA subordinasi atau instruksi. BI tetap independen dalam keputusan teknis moneter, pemerintah independen dalam fiskal, tapi keduanya berkoordinasi untuk konsistensi policy mix."
  },
]

const modul1Questions = shuffleQuestions(originalmodul1Questions);

export default modul1Questions;