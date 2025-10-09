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

const originalmodul3Questions: Question[] = [
{
  type: "Risiko Sistemik",
  question: "Dalam skenario di mana bank-bank besar di Indonesia mengalami peningkatan signifikan dalam pinjaman bermasalah akibat gejolak ekonomi global, yang menyebabkan risiko penularan ke seluruh sistem keuangan, respons kebijakan makroprudensial BI yang paling efektif adalah?",
  options: {
    A: "Menaikkan suku bunga acuan untuk mengendalikan inflasi",
    B: "Memperketat persyaratan modal minimum untuk bank-bank sistemik",
    C: "Memperlonggar regulasi LTV untuk mendorong kredit properti",
    D: "Meningkatkan cadangan devisa untuk stabilisasi mata uang",
    E: "Mengurangi pajak transaksi keuangan untuk meningkatkan likuiditas pasar",
  },
  correct: "B",
  explanation: "Memperketat persyaratan modal minimum untuk bank-bank sistemik efektif karena langsung menangani risiko sistemik dengan memastikan bank besar memiliki bantalan yang cukup untuk menyerap kerugian, mencegah penularan. Opsi lain seperti menaikkan suku bunga bisa memperburuk pinjaman bermasalah, sementara memperlonggar LTV justru meningkatkan risiko gelembung aset.",
},
{
  type: "Risiko Sistemik",
  question: "Ketika terjadi krisis kepercayaan di pasar keuangan domestik akibat skandal korporasi besar, yang berpotensi memicu penarikan dana massal dari bank, kebijakan BI yang optimal dalam kerangka makroprudensial adalah?",
  options: {
    A: "Menurunkan rasio giro wajib minimum untuk bank kecil",
    B: "Menerapkan batasan sementara pada pinjaman antar bank",
    C: "Meningkatkan pengawasan mikroprudensial pada aset toksik",
    D: "Mengaktifkan fasilitas pinjaman darurat untuk lembaga keuangan",
    E: "Memperketat regulasi derivatif untuk mengurangi spekulasi",
  },
  correct: "D",
  explanation: "Mengaktifkan fasilitas pinjaman darurat efektif karena memberikan likuiditas sementara untuk mencegah runtuhnya kepercayaan sistemik tanpa mendorong perilaku berisiko jangka panjang. Opsi seperti menurunkan giro wajib bisa meningkatkan eksposur risiko, sementara batasan pinjaman antar bank mungkin membatasi aliran dana normal.",
},
{
  type: "Risiko Sistemik",
  question: "Dalam kondisi volatilitas pasar saham yang tinggi akibat ketidakpastian geopolitik, yang mengancam stabilitas lembaga keuangan non-bank, respons makroprudensial BI yang paling tepat adalah?",
  options: {
    A: "Menaikkan batas investasi asing di pasar obligasi",
    B: "Memperkuat stress testing untuk seluruh sistem keuangan",
    C: "Menurunkan suku bunga deposito untuk mendorong konsumsi",
    D: "Meningkatkan subsidi kredit untuk sektor UMKM",
    E: "Mengurangi persyaratan pelaporan keuangan bulanan",
  },
  correct: "B",
  explanation: "Memperkuat stress testing efektif karena membantu mengidentifikasi kerentanan sistemik dini dan memastikan ketahanan keseluruhan, tanpa menimbulkan distorsi pasar. Opsi seperti menaikkan batas investasi asing bisa menambah volatilitas, sementara menurunkan suku bunga deposito mungkin memperburuk ketidakseimbangan likuiditas.",
},
{
  type: "Risiko Sistemik",
  question: "Saat terjadi pengetatan likuiditas global yang menyebabkan outflow modal besar dari Indonesia, berpotensi memicu kegagalan bank domestik, kebijakan BI yang efektif adalah?",
  options: {
    A: "Memperlonggar DTI untuk pinjaman konsumen",
    B: "Menerapkan macroprudential liquidity buffer tambahan",
    C: "Menaikkan pajak dividen untuk investor asing",
    D: "Mengurangi intervensi di pasar valuta asing",
    E: "Meningkatkan promosi ekspor melalui insentif fiskal",
  },
  correct: "B",
  explanation: "Menerapkan liquidity buffer tambahan efektif karena memastikan bank memiliki cadangan likuiditas untuk menahan outflow tanpa mengganggu kredit produktif. Opsi seperti memperlonggar DTI bisa meningkatkan risiko hutang rumah tangga, sementara menaikkan pajak dividen mungkin mempercepat outflow.",
},
{
  type: "Risiko Sistemik",
  question: "Dalam skenario krisis kepercayaan antar lembaga keuangan akibat default obligasi korporasi, yang mengancam stabilitas sistem, respons BI yang optimal adalah?",
  options: {
    A: "Menurunkan rasio LTV untuk kredit properti komersial",
    B: "Memperketat regulasi interconnectedness antar lembaga",
    C: "Meningkatkan batas pinjaman dari bank sentral",
    D: "Mengurangi persyaratan audit independen",
    E: "Mendorong merger bank kecil untuk konsolidasi",
  },
  correct: "B",
  explanation: "Memperketat regulasi interconnectedness efektif karena mengurangi risiko penularan melalui hubungan antar lembaga, menjaga stabilitas tanpa membatasi pertumbuhan. Opsi seperti menurunkan LTV bisa menekan sektor properti, sementara meningkatkan batas pinjaman mungkin mendorong ketergantungan berlebih.",
},
{
  type: "Risiko Sistemik",
  question: "Ketika volatilitas pasar valuta asing tinggi akibat spekulasi, yang berisiko sistemik bagi bank dengan eksposur mata uang asing, kebijakan makroprudensial BI yang paling efektif adalah?",
  options: {
    A: "Menaikkan countercyclical capital buffer secara bertahap",
    B: "Memperlonggar batas kepemilikan aset asing",
    C: "Menurunkan suku bunga repo untuk likuiditas",
    D: "Meningkatkan transparansi pelaporan eksposur valuta",
    E: "Mengurangi pajak transaksi valuta asing",
  },
  correct: "A",
  explanation: "Menaikkan countercyclical buffer efektif karena membangun cadangan modal saat risiko meningkat, melindungi dari kerugian valuta tanpa menghambat perdagangan. Opsi seperti memperlonggar batas aset asing bisa menambah eksposur, sementara menurunkan suku bunga repo mungkin memicu inflasi.",
},
{
  type: "Risiko Sistemik",
  question: "Dalam kondisi pengetatan likuiditas global yang memicu kenaikan suku bunga internasional, berpotensi sistemik bagi sektor keuangan Indonesia, respons BI yang tepat adalah?",
  options: {
    A: "Menerapkan batas maksimum pada leverage bank",
    B: "Meningkatkan subsidi untuk pinjaman infrastruktur",
    C: "Menurunkan persyaratan cadangan statutory",
    D: "Memperkuat koordinasi dengan regulator regional",
    E: "Mengurangi intervensi moneter di pasar obligasi",
  },
  correct: "A",
  explanation: "Menerapkan batas leverage efektif karena mencegah pembengkakan neraca bank di tengah likuiditas ketat, mengurangi risiko sistemik. Opsi seperti meningkatkan subsidi bisa distorsi alokasi kredit, sementara menurunkan cadangan statutory mungkin memperburuk likuiditas jangka pendek.",
},
{
  type: "Risiko Sistemik",
  question: "Saat terjadi krisis kepercayaan di sektor asuransi akibat bencana alam besar, yang mengancam bank mitra, kebijakan BI yang optimal adalah?",
  options: {
    A: "Menaikkan premi asuransi wajib untuk risiko sistemik",
    B: "Memperketat regulasi cross-ownership antar sektor",
    C: "Menurunkan batas investasi asuransi di saham",
    D: "Meningkatkan fasilitas repo untuk aset likuid",
    E: "Mengurangi pajak penghasilan dari premi asuransi",
  },
  correct: "B",
  explanation: "Memperketat cross-ownership efektif karena mengurangi penularan risiko dari asuransi ke perbankan, menjaga stabilitas sistem. Opsi seperti menaikkan premi bisa membebani konsumen, sementara menurunkan batas investasi mungkin membatasi diversifikasi.",
},
{
  type: "Risiko Sistemik",
  question: "Dalam skenario volatilitas pasar komoditas global yang mempengaruhi ekspor Indonesia, berpotensi sistemik bagi bank pembiayaan ekspor, respons makroprudensial BI yang efektif adalah?",
  options: {
    A: "Menerapkan hedging wajib untuk eksposur komoditas",
    B: "Meningkatkan batas kredit ekspor berbasis komoditas",
    C: "Menurunkan suku bunga ekspor khusus",
    D: "Memperkuat pengawasan pada pinjaman berbasis komoditas",
    E: "Mengurangi persyaratan dokumen ekspor",
  },
  correct: "D",
  explanation: "Memperkuat pengawasan pinjaman komoditas efektif karena mendeteksi risiko dini tanpa membatasi perdagangan, mencegah penumpukan kerugian sistemik. Opsi seperti menerapkan hedging wajib bisa mahal bagi eksportir kecil, sementara meningkatkan batas kredit mungkin menambah eksposur.",
},
{
  type: "Risiko Sistemik",
  question: "Ketika pengetatan likuiditas global menyebabkan kenaikan biaya pendanaan bank Indonesia, yang berisiko sistemik, kebijakan BI yang paling tepat adalah?",
  options: {
    A: "Menaikkan capital conservation buffer untuk bank besar",
    B: "Memperlonggar regulasi pinjaman sindikasi",
    C: "Menurunkan pajak bunga obligasi domestik",
    D: "Meningkatkan promosi obligasi pemerintah",
    E: "Mengurangi batas pinjaman dari luar negeri",
  },
  correct: "A",
  explanation: "Menaikkan conservation buffer efektif karena memastikan bank mempertahankan modal ekstra untuk menyerap biaya pendanaan tinggi, mengurangi risiko sistemik. Opsi seperti memperlonggar pinjaman sindikasi bisa meningkatkan ketergantungan eksternal, sementara menurunkan pajak mungkin tidak langsung menangani likuiditas.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Dalam skenario gelembung properti akibat kredit murah, yang menyebabkan risiko sistemik melalui pinjaman rumah tangga berlebih, respons BI menggunakan LTV/DTI yang paling efektif adalah?",
  options: {
    A: "Menurunkan LTV maksimum untuk properti residensial",
    B: "Meningkatkan DTI minimum untuk pinjaman baru",
    C: "Memperlonggar LTV untuk properti komersial saja",
    D: "Menghapus batas DTI bagi peminjam berpenghasilan tinggi",
    E: "Menaikkan suku bunga khusus untuk kredit properti",
  },
  correct: "A",
  explanation: "Menurunkan LTV maksimum efektif karena membatasi jumlah pinjaman relatif terhadap nilai aset, mencegah gelembung tanpa menghambat akses kredit sepenuhnya. Opsi seperti meningkatkan DTI minimum bisa salah sasaran karena DTI fokus pada pendapatan, sementara memperlonggar LTV komersial mungkin memindahkan risiko.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Ketika volatilitas pasar properti tinggi akibat spekulasi, berpotensi memicu default massal, kebijakan LTV/DTI BI yang optimal adalah?",
  options: {
    A: "Memperketat DTI untuk semua jenis pinjaman konsumen",
    B: "Menaikkan LTV minimum untuk pinjaman refinancing",
    C: "Menurunkan DTI maksimum bagi rumah tangga muda",
    D: "Memperlonggar LTV untuk properti di daerah pedesaan",
    E: "Meningkatkan persyaratan verifikasi pendapatan untuk DTI",
  },
  correct: "A",
  explanation: "Memperketat DTI efektif karena memastikan pinjaman sesuai kemampuan bayar, mengurangi risiko default di tengah volatilitas tanpa membatasi sektor properti secara keseluruhan. Opsi seperti menaikkan LTV minimum bisa mendorong pinjaman lebih besar, sementara memperlonggar LTV pedesaan mungkin tidak menangani spekulasi urban.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Dalam kondisi pengetatan likuiditas global yang menekan sektor properti Indonesia, respons LTV/DTI makroprudensial BI yang paling tepat adalah?",
  options: {
    A: "Memperlonggar LTV sementara untuk properti primer",
    B: "Menaikkan DTI maksimum untuk pinjaman jangka panjang",
    C: "Menurunkan LTV untuk properti sekunder saja",
    D: "Memperketat DTI bagi investor asing",
    E: "Meningkatkan batas LTV berdasarkan rating kredit",
  },
  correct: "A",
  explanation: "Memperlonggar LTV sementara efektif karena mendorong kredit properti tanpa meningkatkan risiko berlebih, menjaga likuiditas sektor di tengah pengetatan global. Opsi seperti menaikkan DTI maksimum bisa menyebabkan over-leveraging, sementara menurunkan LTV sekunder mungkin memperlambat pemulihan pasar.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Saat krisis kepercayaan di sektor perumahan akibat penurunan harga aset, yang mengancam bank hipotek, kebijakan LTV/DTI BI yang efektif adalah?",
  options: {
    A: "Menurunkan DTI maksimum untuk pinjaman baru",
    B: "Menaikkan LTV minimum untuk refinancing lama",
    C: "Memperlonggar DTI bagi peminjam dengan aset likuid",
    D: "Memperketat LTV untuk properti di zona berisiko",
    E: "Meningkatkan verifikasi aset untuk perhitungan LTV",
  },
  correct: "D",
  explanation: "Memperketat LTV di zona berisiko efektif karena melindungi dari penurunan harga lebih lanjut, mengurangi kerugian bank tanpa menghentikan kredit sepenuhnya. Opsi seperti menurunkan DTI maksimum bisa terlalu luas, sementara memperlonggar DTI mungkin meningkatkan eksposur default.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Dalam skenario volatilitas pasar kredit konsumen tinggi, berpotensi sistemik melalui hutang rumah tangga, respons LTV/DTI BI yang optimal adalah?",
  options: {
    A: "Menaikkan DTI maksimum secara bertahap",
    B: "Menurunkan LTV untuk kredit kendaraan",
    C: "Memperketat DTI untuk pinjaman tanpa jaminan",
    D: "Memperlonggar LTV bagi kredit pendidikan",
    E: "Meningkatkan batas DTI berdasarkan inflasi",
  },
  correct: "C",
  explanation: "Memperketat DTI untuk pinjaman tanpa jaminan efektif karena membatasi hutang berisiko tinggi, mencegah penumpukan sistemik tanpa mempengaruhi kredit produktif. Opsi seperti menaikkan DTI maksimum bisa memperburuk volatilitas, sementara menurunkan LTV kendaraan mungkin tidak langsung menangani hutang konsumen.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Ketika pengetatan likuiditas global memicu kenaikan suku bunga hipotek, yang berisiko bagi rumah tangga, kebijakan LTV/DTI BI yang paling efektif adalah?",
  options: {
    A: "Memperlonggar DTI sementara untuk refinancing",
    B: "Menaikkan LTV maksimum untuk properti murah",
    C: "Menurunkan DTI minimum bagi peminjam baru",
    D: "Memperketat LTV untuk properti mewah",
    E: "Meningkatkan persyaratan pendapatan untuk DTI",
  },
  correct: "D",
  explanation: "Memperketat LTV properti mewah efektif karena mengurangi eksposur segmen berisiko tanpa menghambat akses perumahan dasar, menjaga stabilitas di tengah likuiditas ketat. Opsi seperti memperlonggar DTI bisa meningkatkan beban hutang, sementara menaikkan LTV maksimum mungkin mendorong gelembung.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Dalam kondisi krisis kepercayaan pasar properti akibat over-supply, respons makroprudensial LTV/DTI BI yang tepat adalah?",
  options: {
    A: "Menurunkan LTV maksimum secara nasional",
    B: "Menaikkan DTI minimum untuk investor",
    C: "Memperlonggar LTV untuk properti hijau",
    D: "Memperketat DTI bagi rumah tangga multi-pinjaman",
    E: "Meningkatkan batas LTV berdasarkan lokasi",
  },
  correct: "A",
  explanation: "Menurunkan LTV maksimum efektif karena membatasi kredit baru di tengah over-supply, mencegah penurunan harga lebih dalam. Opsi seperti menaikkan DTI minimum bisa mempengaruhi akses, sementara memperlonggar LTV properti hijau mungkin tidak cukup luas untuk menangani krisis.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Saat volatilitas pasar keuangan mempengaruhi pendapatan rumah tangga, berpotensi meningkatkan default hipotek, kebijakan LTV/DTI BI yang optimal adalah?",
  options: {
    A: "Memperketat DTI untuk pinjaman variabel rate",
    B: "Menurunkan LTV minimum untuk fixed rate",
    C: "Menaikkan DTI maksimum sementara",
    D: "Memperlonggar LTV bagi peminjam berpenghasilan stabil",
    E: "Meningkatkan verifikasi pendapatan bulanan",
  },
  correct: "A",
  explanation: "Memperketat DTI pinjaman variabel efektif karena melindungi dari fluktuasi suku bunga, mengurangi risiko default tanpa membatasi semua kredit. Opsi seperti menurunkan LTV minimum bisa membingungkan, sementara menaikkan DTI maksimum mungkin memperburuk volatilitas.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Dalam skenario pengetatan likuiditas yang menekan kredit properti, respons LTV/DTI BI yang efektif adalah?",
  options: {
    A: "Menaikkan LTV maksimum untuk properti primer",
    B: "Menurunkan DTI maksimum secara bertahap",
    C: "Memperketat LTV untuk refinancing",
    D: "Memperlonggar DTI bagi sektor prioritas",
    E: "Meningkatkan batas DTI berdasarkan GDP",
  },
  correct: "D",
  explanation: "Memperlonggar DTI sektor prioritas efektif karena mendukung kredit produktif tanpa meningkatkan risiko keseluruhan, menjaga likuiditas. Opsi seperti menaikkan LTV maksimum bisa mendorong spekulasi, sementara menurunkan DTI maksimum mungkin terlalu restriktif.",
},
{
  type: "Kebijakan LTV/DTI",
  question: "Ketika krisis kepercayaan memicu penurunan aplikasi hipotek, kebijakan LTV/DTI makroprudensial BI yang paling tepat adalah?",
  options: {
    A: "Menurunkan DTI maksimum untuk stabilitas jangka panjang",
    B: "Menaikkan LTV sementara untuk mendorong permintaan",
    C: "Memperketat DTI bagi investor spekulatif",
    D: "Memperlonggar LTV untuk properti berkelanjutan",
    E: "Meningkatkan persyaratan aset untuk LTV",
  },
  correct: "C",
  explanation: "Memperketat DTI investor spekulatif efektif karena mengurangi risiko gelembung sambil mempertahankan akses bagi pengguna akhir, memulihkan kepercayaan. Opsi seperti menurunkan DTI maksimum bisa memperburuk penurunan, sementara menaikkan LTV sementara mungkin menambah ketidakstabilan.",
},
{
  type: "Countercyclical Buffer",
  question: "Dalam skenario ekspansi ekonomi cepat yang berpotensi memicu gelembung aset, respons BI menggunakan countercyclical buffer yang paling efektif adalah?",
  options: {
    A: "Menaikkan buffer modal secara bertahap",
    B: "Menurunkan buffer untuk mendorong kredit",
    C: "Mempertahankan buffer pada level netral",
    D: "Meningkatkan buffer hanya untuk bank besar",
    E: "Mengurangi buffer bagi sektor inklusif",
  },
  correct: "A",
  explanation: "Menaikkan buffer modal bertahap efektif karena membangun cadangan selama boom untuk menyerap kerugian saat bust, mencegah risiko sistemik. Opsi seperti menurunkan buffer bisa mempercepat gelembung, sementara mempertahankan level netral tidak cukup proaktif.",
},
{
  type: "Countercyclical Buffer",
  question: "Ketika volatilitas pasar tinggi akibat ketidakpastian eksternal, kebijakan countercyclical buffer BI yang optimal adalah?",
  options: {
    A: "Menurunkan buffer untuk meningkatkan likuiditas",
    B: "Menaikkan buffer untuk persiapan resesi",
    C: "Mempertahankan buffer sambil memantau indikator",
    D: "Meningkatkan buffer berdasarkan GDP growth",
    E: "Mengurangi buffer bagi bank domestik saja",
  },
  correct: "C",
  explanation: "Mempertahankan buffer sambil memantau efektif karena menghindari reaksi berlebih di volatilitas sementara, menjaga stabilitas. Opsi seperti menurunkan buffer bisa melemahkan ketahanan, sementara menaikkan buffer mungkin membatasi kredit di saat dibutuhkan.",
},
{
  type: "Countercyclical Buffer",
  question: "Dalam kondisi pengetatan likuiditas global yang memperlambat pertumbuhan, respons countercyclical buffer makroprudensial BI yang tepat adalah?",
  options: {
    A: "Menaikkan buffer untuk bank dengan eksposur tinggi",
    B: "Menurunkan buffer secara bertahap",
    C: "Mempertahankan buffer pada level tinggi",
    D: "Meningkatkan buffer untuk sektor ekspor",
    E: "Mengurangi buffer hanya untuk bank kecil",
  },
  correct: "B",
  explanation: "Menurunkan buffer bertahap efektif karena melepaskan modal untuk mendukung kredit selama slowdown, tanpa menghilangkan perlindungan sepenuhnya. Opsi seperti menaikkan buffer bisa memperburuk likuiditas, sementara mempertahankan level tinggi mungkin menghambat pemulihan.",
},
{
  type: "Countercyclical Buffer",
  question: "Saat krisis kepercayaan memicu kontraksi kredit, kebijakan countercyclical buffer BI yang efektif adalah?",
  options: {
    A: "Menaikkan buffer untuk mencegah risiko lebih lanjut",
    B: "Menurunkan buffer untuk mendorong pinjaman",
    C: "Mempertahankan buffer sambil injeksi likuiditas",
    D: "Meningkatkan buffer berdasarkan stress test",
    E: "Mengurangi buffer bagi lembaga non-bank",
  },
  correct: "B",
  explanation: "Menurunkan buffer efektif karena membebaskan modal bank untuk memperluas kredit, memulihkan kepercayaan. Opsi seperti menaikkan buffer bisa memperdalam kontraksi, sementara mempertahankan buffer mungkin tidak cukup agresif untuk krisis.",
},
{
  type: "Countercyclical Buffer",
  question: "Dalam skenario volatilitas pasar yang berkepanjangan, berpotensi memicu resesi, respons countercyclical buffer BI yang optimal adalah?",
  options: {
    A: "Menaikkan buffer secara preventif",
    B: "Menurunkan buffer untuk stabilisasi",
    C: "Mempertahankan buffer pada level pra-volatilitas",
    D: "Meningkatkan buffer untuk bank sistemik saja",
    E: "Mengurangi buffer berdasarkan inflasi",
  },
  correct: "B",
  explanation: "Menurunkan buffer efektif karena mendukung likuiditas dan kredit di tengah volatilitas, mencegah resesi lebih dalam. Opsi seperti menaikkan buffer bisa menambah tekanan, sementara mempertahankan level mungkin tidak adaptif.",
},
{
  type: "Countercyclical Buffer",
  question: "Ketika pengetatan likuiditas global menyebabkan slowdown ekonomi, kebijakan countercyclical buffer BI yang paling efektif adalah?",
  options: {
    A: "Menaikkan buffer untuk persiapan jangka panjang",
    B: "Menurunkan buffer sementara",
    C: "Mempertahankan buffer sambil koordinasi fiskal",
    D: "Meningkatkan buffer bagi sektor rentan",
    E: "Mengurangi buffer hanya untuk bank asing",
  },
  correct: "B",
  explanation: "Menurunkan buffer sementara efektif karena melepaskan modal untuk mendukung pertumbuhan, menangani likuiditas ketat. Opsi seperti menaikkan buffer bisa memperburuk slowdown, sementara mempertahankan buffer mungkin kurang responsif.",
},
{
  type: "Countercyclical Buffer",
  question: "Dalam kondisi krisis kepercayaan yang mempengaruhi modal bank, respons makroprudensial countercyclical buffer BI yang tepat adalah?",
  options: {
    A: "Menaikkan buffer untuk rebuild kepercayaan",
    B: "Menurunkan buffer untuk injeksi modal",
    C: "Mempertahankan buffer pada level minimum",
    D: "Meningkatkan buffer berdasarkan aset",
    E: "Mengurangi buffer bagi bank sehat",
  },
  correct: "B",
  explanation: "Menurunkan buffer efektif karena memungkinkan bank menggunakan modal ekstra untuk stabilisasi, memulihkan kepercayaan. Opsi seperti menaikkan buffer bisa melemahkan posisi, sementara mempertahankan level minimum mungkin tidak cukup fleksibel.",
},
{
  type: "Countercyclical Buffer",
  question: "Saat volatilitas pasar memicu peningkatan NPL, kebijakan countercyclical buffer BI yang optimal adalah?",
  options: {
    A: "Menaikkan buffer untuk menyerap kerugian",
    B: "Menurunkan buffer untuk dukung restrukturisasi",
    C: "Mempertahankan buffer sambil monitor NPL",
    D: "Meningkatkan buffer untuk bank dengan NPL tinggi",
    E: "Mengurangi buffer secara sektoral",
  },
  correct: "A",
  explanation: "Menaikkan buffer efektif karena mempersiapkan bank untuk kerugian lebih lanjut dari NPL, menjaga stabilitas. Opsi seperti menurunkan buffer bisa meningkatkan kerentanan, sementara mempertahankan buffer mungkin tidak proaktif.",
},
{
  type: "Countercyclical Buffer",
  question: "Dalam skenario pengetatan likuiditas yang berkepanjangan, respons countercyclical buffer BI yang efektif adalah?",
  options: {
    A: "Menaikkan buffer untuk ketahanan",
    B: "Menurunkan buffer untuk likuiditas",
    C: "Mempertahankan buffer pada level stabil",
    D: "Meningkatkan buffer berdasarkan likuiditas",
    E: "Mengurangi buffer bagi sektor prioritas",
  },
  correct: "B",
  explanation: "Menurunkan buffer efektif karena melepaskan modal untuk menjaga aliran kredit, menangani likuiditas ketat. Opsi seperti menaikkan buffer bisa memperburuk kondisi, sementara mempertahankan level mungkin tidak cukup.",
},
{
  type: "Countercyclical Buffer",
  question: "Ketika krisis kepercayaan global mempengaruhi Indonesia, kebijakan countercyclical buffer makroprudensial BI yang paling tepat adalah?",
  options: {
    A: "Menaikkan buffer untuk proteksi",
    B: "Menurunkan buffer untuk respons cepat",
    C: "Mempertahankan buffer sambil koordinasi",
    D: "Meningkatkan buffer untuk bank internasional",
    E: "Mengurangi buffer secara temporer",
  },
  correct: "E",
  explanation: "Mengurangi buffer temporer efektif karena memberikan fleksibilitas modal untuk menangani krisis, tanpa komitmen jangka panjang. Opsi seperti menaikkan buffer bisa membatasi respons, sementara mempertahankan buffer mungkin kurang adaptif.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Dalam skenario pengetatan likuiditas global yang membatasi akses keuangan bagi UMKM, respons BI untuk sistem keuangan inklusif yang paling efektif adalah?",
  options: {
    A: "Meningkatkan subsidi kredit untuk UMKM",
    B: "Memperlonggar regulasi fintech untuk inklusi",
    C: "Menaikkan batas pinjaman mikro tanpa jaminan",
    D: "Memperketat pengawasan pada lembaga inklusif",
    E: "Mengurangi pajak transaksi digital untuk UMKM",
  },
  correct: "B",
  explanation: "Memperlonggar regulasi fintech efektif karena mendorong inovasi akses keuangan bagi yang terpinggirkan, menjaga inklusi tanpa meningkatkan risiko sistemik berlebih. Opsi seperti meningkatkan subsidi bisa distorsi pasar, sementara memperketat pengawasan mungkin menghambat pertumbuhan.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Ketika krisis kepercayaan mempengaruhi keuangan pedesaan, kebijakan inklusif makroprudensial BI yang optimal adalah?",
  options: {
    A: "Menaikkan insentif untuk bank pedesaan",
    B: "Memperketat DTI untuk pinjaman mikro",
    C: "Menurunkan persyaratan modal untuk koperasi",
    D: "Meningkatkan edukasi keuangan digital",
    E: "Mengurangi batas transfer untuk akun dasar",
  },
  correct: "D",
  explanation: "Meningkatkan edukasi keuangan digital efektif karena membangun kepercayaan dan akses jangka panjang, tanpa menambah risiko kredit. Opsi seperti menaikkan insentif bisa mahal, sementara memperketat DTI mungkin membatasi inklusi.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Dalam kondisi volatilitas pasar yang menekan akses keuangan perempuan, respons inklusif BI yang tepat adalah?",
  options: {
    A: "Memperlonggar LTV untuk usaha perempuan",
    B: "Menaikkan kuota kredit inklusif gender",
    C: "Menurunkan suku bunga khusus perempuan",
    D: "Memperketat verifikasi untuk pinjaman inklusif",
    E: "Meningkatkan partnership dengan NGO gender",
  },
  correct: "A",
  explanation: "Memperlonggar LTV usaha perempuan efektif karena mendorong akses tanpa jaminan besar, meningkatkan inklusi. Opsi seperti menaikkan kuota bisa terlalu kaku, sementara menurunkan suku bunga mungkin distorsi.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Saat pengetatan likuiditas global membatasi fintech inklusif, kebijakan BI yang efektif adalah?",
  options: {
    A: "Menaikkan batas pinjaman P2P lending",
    B: "Memperketat regulasi sandbox fintech",
    C: "Menurunkan persyaratan lisensi fintech",
    D: "Meningkatkan subsidi untuk platform digital",
    E: "Mengurangi pajak penghasilan fintech",
  },
  correct: "C",
  explanation: "Menurunkan persyaratan lisensi efektif karena mempercepat masuknya penyedia inklusif, menjaga akses di likuiditas ketat. Opsi seperti menaikkan batas P2P bisa meningkatkan risiko, sementara memperketat sandbox mungkin menghambat inovasi.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Dalam skenario krisis kepercayaan di keuangan mikro, respons inklusif BI yang optimal adalah?",
  options: {
    A: "Memperlonggar DTI untuk pinjaman mikro",
    B: "Menaikkan jaminan deposito untuk akun kecil",
    C: "Menurunkan batas transaksi harian mikro",
    D: "Memperketat audit pada lembaga mikro",
    E: "Meningkatkan kampanye literasi keuangan",
  },
  correct: "E",
  explanation: "Meningkatkan kampanye literasi efektif karena membangun kepercayaan dasar, mendorong partisipasi inklusif. Opsi seperti memperlonggar DTI bisa menambah default, sementara memperketat audit mungkin membebani lembaga kecil.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Ketika volatilitas pasar mempengaruhi akses daerah terpencil, kebijakan inklusif BI yang paling efektif adalah?",
  options: {
    A: "Menaikkan insentif agen banking pedesaan",
    B: "Memperketat LTV untuk aset pedesaan",
    C: "Menurunkan persyaratan KYC digital",
    D: "Meningkatkan pajak transaksi non-cash",
    E: "Mengurangi kuota kredit inklusif regional",
  },
  correct: "C",
  explanation: "Menurunkan persyaratan KYC digital efektif karena memudahkan akses tanpa dokumen lengkap, meningkatkan inklusi daerah. Opsi seperti menaikkan insentif bisa mahal, sementara memperketat LTV mungkin membatasi kredit.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Dalam kondisi pengetatan likuiditas yang menekan UMKM digital, respons makroprudensial inklusif BI yang tepat adalah?",
  options: {
    A: "Memperlonggar regulasi e-wallet untuk UMKM",
    B: "Menaikkan batas kredit supply chain finance",
    C: "Menurunkan suku bunga fintech lending",
    D: "Memperketat verifikasi identitas online",
    E: "Meningkatkan partnership dengan e-commerce",
  },
  correct: "A",
  explanation: "Memperlonggar regulasi e-wallet efektif karena mendorong transaksi digital murah, mendukung UMKM di likuiditas ketat. Opsi seperti menaikkan batas kredit bisa risiko tinggi, sementara memperketat verifikasi mungkin menghambat akses.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Saat krisis kepercayaan memicu penurunan tabungan inklusif, kebijakan BI yang optimal adalah?",
  options: {
    A: "Menaikkan hadiah undian untuk tabungan kecil",
    B: "Memperketat DTI untuk saver berpenghasilan rendah",
    C: "Menurunkan biaya akun dasar",
    D: "Meningkatkan pajak bunga tabungan",
    E: "Mengurangi program edukasi keuangan",
  },
  correct: "C",
  explanation: "Menurunkan biaya akun dasar efektif karena membuat tabungan lebih terjangkau, memulihkan kepercayaan inklusif. Opsi seperti menaikkan hadiah bisa sementara, sementara memperketat DTI mungkin tidak relevan.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Dalam skenario volatilitas yang membatasi asuransi inklusif, respons BI yang efektif adalah?",
  options: {
    A: "Memperlonggar regulasi microinsurance",
    B: "Menaikkan premi minimum asuransi",
    C: "Menurunkan batas klaim mikro",
    D: "Memperketat lisensi penyedia asuransi",
    E: "Meningkatkan subsidi asuransi dasar",
  },
  correct: "A",
  explanation: "Memperlonggar regulasi microinsurance efektif karena memperluas cakupan proteksi bagi yang rentan, tanpa biaya tinggi. Opsi seperti menaikkan premi bisa membatasi akses, sementara memperketat lisensi mungkin mengurangi penyedia.",
},
{
  type: "Sistem Keuangan Inklusif",
  question: "Ketika pengetatan likuiditas mempengaruhi kredit inklusif, kebijakan makroprudensial BI yang paling tepat adalah?",
  options: {
    A: "Menaikkan kuota kredit wajib untuk inklusi",
    B: "Memperketat LTV untuk aset inklusif",
    C: "Menurunkan persyaratan collateral mikro",
    D: "Meningkatkan pajak pinjaman inklusif",
    E: "Mengurangi dukungan untuk fintech inklusif",
  },
  correct: "C",
  explanation: "Menurunkan persyaratan collateral mikro efektif karena memudahkan akses kredit bagi yang tidak punya aset, menjaga inklusi. Opsi seperti menaikkan kuota bisa memaksa bank, sementara memperketat LTV mungkin kontraproduktif.",
},
{
  type: "Koordinasi KSSK",
  question: "Dalam skenario pengetatan likuiditas global yang memerlukan respons bersama, koordinasi KSSK yang paling efektif melibatkan BI dalam?",
  options: {
    A: "Meningkatkan sharing data risiko dengan OJK",
    B: "Menaikkan suku bunga secara unilateral",
    C: "Menurunkan pajak keuangan tanpa konsultasi",
    D: "Memperketat regulasi fiskal independen",
    E: "Mengurangi pertemuan KSSK rutin",
  },
  correct: "A",
  explanation: "Meningkatkan sharing data risiko efektif karena memastikan respons terkoordinasi antar lembaga, mencegah duplikasi atau celah. Opsi seperti menaikkan suku bunga unilateral bisa kurang sinergis, sementara menurunkan pajak tanpa konsultasi mungkin tidak selaras.",
},
{
  type: "Koordinasi KSSK",
  question: "Ketika krisis kepercayaan memerlukan aksi bersama, peran BI dalam KSSK yang optimal adalah?",
  options: {
    A: "Memimpin injeksi likuiditas terkoordinasi",
    B: "Menaikkan buffer modal tanpa diskusi",
    C: "Menurunkan regulasi mikroprudensial saja",
    D: "Memperketat pengawasan fiskal independen",
    E: "Mengurangi kolaborasi dengan Kemenkeu",
  },
  correct: "A",
  explanation: "Memimpin injeksi likuiditas terkoordinasi efektif karena memanfaatkan keahlian BI sambil selaras dengan anggota KSSK lain, memulihkan kepercayaan. Opsi seperti menaikkan buffer tanpa diskusi bisa tidak koheren, sementara menurunkan regulasi saja mungkin tidak cukup.",
},
{
  type: "Koordinasi KSSK",
  question: "Dalam kondisi volatilitas pasar yang tinggi, koordinasi KSSK melibatkan BI dalam?",
  options: {
    A: "Membangun protokol respons bersama",
    B: "Menaikkan pajak transaksi unilateral",
    C: "Menurunkan intervensi moneter independen",
    D: "Memperketat lisensi lembaga tanpa koordinasi",
    E: "Mengurangi frekuensi rapat KSSK",
  },
  correct: "A",
  explanation: "Membangun protokol respons bersama efektif karena memastikan aksi selaras antar regulator, mengurangi volatilitas. Opsi seperti menaikkan pajak unilateral bisa kontradiktif, sementara menurunkan intervensi independen mungkin melemahkan respons.",
},
{
  type: "Koordinasi KSSK",
  question: "Saat pengetatan likuiditas memerlukan dukungan fiskal, peran BI dalam KSSK yang efektif adalah?",
  options: {
    A: "Koordinasi pembelian obligasi pemerintah",
    B: "Menaikkan suku bunga tanpa persetujuan",
    C: "Menurunkan subsidi kredit independen",
    D: "Memperketat anggaran negara unilateral",
    E: "Mengurangi diskusi dengan LPS",
  },
  correct: "A",
  explanation: "Koordinasi pembelian obligasi efektif karena mendukung likuiditas fiskal sambil menjaga independensi moneter. Opsi seperti menaikkan suku bunga tanpa persetujuan bisa mengganggu kebijakan fiskal, sementara menurunkan subsidi independen mungkin tidak terkoordinasi.",
},
{
  type: "Koordinasi KSSK",
  question: "Dalam skenario krisis kepercayaan sistemik, koordinasi KSSK yang optimal melibatkan BI dalam?",
  options: {
    A: "Pengembangan rencana kontingensi bersama",
    B: "Menaikkan premi asuransi deposito saja",
    C: "Menurunkan regulasi bank independen",
    D: "Memperketat pengeluaran pemerintah unilateral",
    E: "Mengurangi sharing informasi risiko",
  },
  correct: "A",
  explanation: "Pengembangan rencana kontingensi bersama efektif karena memastikan respons cepat dan selaras, mencegah eskalasi krisis. Opsi seperti menaikkan premi saja bisa tidak cukup, sementara menurunkan regulasi independen mungkin meningkatkan risiko.",
},
{
  type: "Koordinasi KSSK",
  question: "Ketika volatilitas pasar memerlukan stabilitas bersama, peran BI dalam KSSK yang paling efektif adalah?",
  options: {
    A: "Memfasilitasi simulasi stress test bersama",
    B: "Menaikkan batas pinjaman tanpa koordinasi",
    C: "Menurunkan suku bunga unilateral",
    D: "Memperketat lisensi fintech independen",
    E: "Mengurangi kolaborasi dengan OJK",
  },
  correct: "A",
  explanation: "Memfasilitasi stress test bersama efektif karena mengidentifikasi kerentanan sistemik secara kolektif, menjaga stabilitas. Opsi seperti menaikkan batas pinjaman tanpa koordinasi bisa menambah risiko, sementara menurunkan suku bunga unilateral mungkin tidak selaras.",
},
{
  type: "Koordinasi KSSK",
  question: "Dalam kondisi pengetatan likuiditas global, koordinasi KSSK melibatkan BI dalam?",
  options: {
    A: "Penguatan mekanisme early warning bersama",
    B: "Menaikkan pajak impor independen",
    C: "Menurunkan cadangan devisa unilateral",
    D: "Memperketat regulasi valuta asing saja",
    E: "Mengurangi pertemuan darurat KSSK",
  },
  correct: "A",
  explanation: "Penguatan early warning bersama efektif karena mendeteksi risiko dini melalui kolaborasi, menangani likuiditas ketat. Opsi seperti menaikkan pajak impor independen bisa tidak koheren, sementara menurunkan cadangan unilateral mungkin melemahkan posisi.",
},
{
  type: "Koordinasi KSSK",
  question: "Saat krisis kepercayaan memerlukan jaminan bersama, respons KSSK dengan BI yang optimal adalah?",
  options: {
    A: "Koordinasi program jaminan kredit bersama",
    B: "Menaikkan suku bunga deposito independen",
    C: "Menurunkan subsidi energi unilateral",
    D: "Memperketat anggaran belanja saja",
    E: "Mengurangi diskusi dengan Kemenkeu",
  },
  correct: "A",
  explanation: "Koordinasi jaminan kredit efektif karena membagi beban dan memulihkan kepercayaan secara kolektif. Opsi seperti menaikkan suku bunga independen bisa kontradiktif, sementara menurunkan subsidi unilateral mungkin tidak terkait.",
},
{
  type: "Koordinasi KSSK",
  question: "Dalam skenario volatilitas tinggi, peran BI dalam KSSK yang efektif adalah?",
  options: {
    A: "Memimpin analisis risiko makro bersama",
    B: "Menaikkan buffer likuiditas unilateral",
    C: "Menurunkan regulasi asuransi independen",
    D: "Memperketat pengawasan pasar saja",
    E: "Mengurangi frekuensi laporan KSSK",
  },
  correct: "A",
  explanation: "Memimpin analisis risiko makro efektif karena menyediakan wawasan moneter untuk keputusan bersama, mengurangi volatilitas. Opsi seperti menaikkan buffer unilateral bisa tidak selaras, sementara menurunkan regulasi independen mungkin meningkatkan risiko.",
},
{
  type: "Koordinasi KSSK",
  question: "Ketika pengetatan likuiditas memerlukan dukungan bersama, koordinasi KSSK dengan BI yang paling tepat adalah?",
  options: {
    A: "Pengembangan fasilitas likuiditas terintegrasi",
    B: "Menaikkan pajak properti independen",
    C: "Menurunkan intervensi valuta unilateral",
    D: "Memperketat kredit konsumen saja",
    E: "Mengurangi kolaborasi dengan LPS",
  },
  correct: "A",
  explanation: "Pengembangan fasilitas likuiditas terintegrasi efektif karena memastikan dukungan selaras antar lembaga, menangani pengetatan. Opsi seperti menaikkan pajak independen bisa memperlambat pemulihan, sementara menurunkan intervensi unilateral mungkin tidak cukup.",
},
];

const modul3Questions = shuffleQuestions(originalmodul3Questions);

export default modul3Questions;