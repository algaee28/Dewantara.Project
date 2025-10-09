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

const originalModul4Questions: Question[] = [
{
  type: "GPN",
  question: "Dalam skenario peningkatan transaksi lintas bank akibat boom e-commerce, yang berpotensi memicu fragmentasi sistem pembayaran dan mengurangi inklusi keuangan di daerah pedesaan, respons kebijakan BI melalui GPN yang paling efektif untuk menjaga stabilitas dan inklusi adalah?",
  options: {
    A: "Memperluas jaringan switch GPN untuk integrasi lebih luas antar bank domestik",
    B: "Menaikkan biaya transaksi GPN untuk mengendalikan volume dan mencegah overload",
    C: "Memperketat regulasi penggunaan kartu debit asing dalam GPN untuk lindungi kedaulatan",
    D: "Mengurangi insentif bagi bank kecil dalam GPN untuk fokus pada efisiensi besar",
    E: "Mendorong adopsi GPN hanya di kota besar untuk uji coba stabilitas awal",
  },
  correct: "A",
  explanation: "Memperluas jaringan switch GPN efektif karena memastikan interoperabilitas antar bank, mengurangi fragmentasi, dan meningkatkan inklusi di pedesaan tanpa menimbulkan biaya tambahan yang bisa menghambat akses. Opsi lain seperti menaikkan biaya bisa mengurangi inklusi, sementara memperketat regulasi asing mungkin tidak langsung menangani boom domestik.",
},
{
  type: "GPN",
  question: "Ketika terjadi krisis kepercayaan pada sistem pembayaran akibat serangan siber pada satu bank besar, yang mengancam stabilitas keseluruhan dan inklusi keuangan, kebijakan BI via GPN yang optimal adalah?",
  options: {
    A: "Menerapkan protokol keamanan terpadu di seluruh peserta GPN untuk cegah penularan",
    B: "Menghentikan sementara transaksi GPN untuk investigasi mendalam dan pemulihan",
    C: "Meningkatkan batas transaksi harian GPN untuk dorong penggunaan alternatif",
    D: "Mengalihkan semua transaksi ke jaringan internasional sementara waktu",
    E: "Mengurangi keterlibatan bank asing dalam GPN untuk kurangi eksposur risiko",
  },
  correct: "A",
  explanation: "Protokol keamanan terpadu efektif karena memperkuat ketahanan sistemik GPN, menjaga kepercayaan tanpa menghentikan layanan, sehingga stabilitas dan inklusi tetap terjaga. Opsi seperti menghentikan transaksi bisa memperburuk krisis kepercayaan, sementara mengalihkan ke internasional mengorbankan kedaulatan data.",
},
{
  type: "GPN",
  question: "Dalam kondisi volatilitas ekonomi yang menyebabkan peningkatan transaksi digital, berpotensi overload GPN dan eksklusi bagi UMKM, respons BI yang tepat melalui GPN adalah?",
  options: {
    A: "Mengintegrasikan GPN dengan platform digital UMKM untuk akses lebih inklusif",
    B: "Menaikkan persyaratan modal bagi peserta GPN untuk tingkatkan kapasitas",
    C: "Memperlonggar batas transaksi GPN untuk akomodasi volatilitas sementara",
    D: "Mendorong penggunaan tunai sebagai cadangan untuk kurangi ketergantungan GPN",
    E: "Mengurangi frekuensi settlement GPN untuk hemat sumber daya sistem",
  },
  correct: "A",
  explanation: "Integrasi dengan platform UMKM efektif karena meningkatkan inklusi tanpa overload lebih lanjut, mendukung stabilitas dengan distribusi beban. Opsi seperti menaikkan persyaratan modal bisa eksklusif bagi bank kecil, sementara memperlonggar batas mungkin meningkatkan risiko sistemik.",
},
{
  type: "GPN",
  question: "Saat integrasi GPN dengan sistem pembayaran regional memicu kekhawatiran kedaulatan data, yang berimplikasi pada stabilitas keuangan nasional, kebijakan BI yang efektif adalah?",
  options: {
    A: "Menerapkan enkripsi data end-to-end dalam GPN untuk lindungi kedaulatan",
    B: "Menghentikan integrasi regional untuk prioritaskan kontrol domestik sepenuhnya",
    C: "Meningkatkan biaya integrasi untuk batasi akses regional dan jaga stabilitas",
    D: "Mengalihkan data sensitif ke server luar negeri untuk efisiensi global",
    E: "Mengurangi transparansi data GPN untuk cegah kebocoran informasi",
  },
  correct: "A",
  explanation: "Enkripsi end-to-end efektif karena menyeimbangkan efisiensi integrasi dengan kedaulatan, mengurangi risiko sistemik tanpa menghentikan kerjasama. Opsi seperti menghentikan integrasi bisa mengisolasi ekonomi, sementara mengalihkan data luar mengorbankan kedaulatan.",
},
{
  type: "GPN",
  question: "Dalam skenario peningkatan penggunaan kartu debit via GPN akibat pandemi, yang berisiko overload dan eksklusi digital, respons BI optimal adalah?",
  options: {
    A: "Memperkuat infrastruktur GPN dengan teknologi cloud domestik untuk kapasitas",
    B: "Menaikkan limit kartu debit untuk kurangi frekuensi transaksi kecil",
    C: "Memperketat verifikasi identitas GPN untuk cegah penyalahgunaan",
    D: "Mendorong kembali ke transaksi tunai untuk bagi beban sistem",
    E: "Mengurangi jangkauan GPN ke wilayah urban saja sementara waktu",
  },
  correct: "A",
  explanation: "Memperkuat infrastruktur cloud domestik efektif karena meningkatkan stabilitas tanpa mengorbankan inklusi, mengelola overload dengan efisiensi. Opsi seperti menaikkan limit bisa tingkatkan risiko fraud, sementara mendorong tunai mengurangi kemajuan digital.",
},
{
  type: "GPN",
  question: "Ketika serangan DDoS pada GPN mengancam stabilitas pembayaran nasional dan inklusi, kebijakan BI yang paling tepat adalah?",
  options: {
    A: "Mengimplementasikan redundansi jaringan di GPN untuk ketahanan serangan",
    B: "Menghentikan operasi GPN hingga ancaman hilang sepenuhnya",
    C: "Meningkatkan premi asuransi siber bagi peserta GPN",
    D: "Mengalihkan transaksi ke jaringan swasta untuk sementara",
    E: "Mengurangi volume transaksi maksimal per hari di GPN",
  },
  correct: "A",
  explanation: "Redundansi jaringan efektif karena memastikan kontinuitas layanan, menjaga stabilitas dan inklusi tanpa penghentian total. Opsi seperti menghentikan operasi bisa menyebabkan krisis likuiditas, sementara mengalihkan ke swasta mengorbankan kedaulatan.",
},
{
  type: "GPN",
  question: "Dalam kondisi ekspansi fintech yang memfragmentasi GPN, berpotensi kurangi inklusi, respons BI melalui GPN adalah?",
  options: {
    A: "Mewajibkan integrasi fintech ke GPN untuk interoperabilitas inklusif",
    B: "Menaikkan regulasi masuk fintech untuk batasi kompetisi berlebih",
    C: "Memperlonggar standar GPN untuk akomodasi inovasi cepat",
    D: "Mendorong fintech independen untuk diversifikasi sistem pembayaran",
    E: "Mengurangi dukungan BI pada GPN untuk fokus fintech baru",
  },
  correct: "A",
  explanation: "Integrasi fintech ke GPN efektif karena mencegah fragmentasi, meningkatkan inklusi melalui akses luas, sambil jaga stabilitas. Opsi seperti menaikkan regulasi bisa hambat inovasi, sementara memperlonggar standar tingkatkan risiko sistemik.",
},
{
  type: "GPN",
  question: "Saat kenaikan transaksi GPN memicu kekhawatiran efisiensi dan kedaulatan data, kebijakan BI yang efektif adalah?",
  options: {
    A: "Mengadopsi blockchain domestik di GPN untuk efisiensi dan kontrol data",
    B: "Menghentikan ekspansi GPN untuk evaluasi ulang kedaulatan",
    C: "Meningkatkan audit eksternal pada data GPN untuk transparansi",
    D: "Mengalihkan pengelolaan GPN ke pihak swasta untuk efisiensi",
    E: "Mengurangi enkripsi data untuk percepat transaksi GPN",
  },
  correct: "A",
  explanation: "Blockchain domestik efektif karena seimbang efisiensi dengan kedaulatan, mengurangi risiko sistemik melalui desentralisasi terkendali. Opsi seperti menghentikan ekspansi bisa hambat pertumbuhan, sementara mengurangi enkripsi tingkatkan vulnerabilitas.",
},
{
  type: "GPN",
  question: "Dalam skenario integrasi GPN dengan ASEAN, yang berisiko erosi kedaulatan dan stabilitas, respons BI optimal adalah?",
  options: {
    A: "Menerapkan gateway data nasional di GPN untuk lindungi informasi sensitif",
    B: "Menolak integrasi untuk prioritaskan kontrol domestik mutlak",
    C: "Meningkatkan biaya transaksi regional untuk batasi aliran data",
    D: "Mengizinkan akses data bebas untuk tingkatkan efisiensi regional",
    E: "Mengurangi partisipasi bank domestik dalam integrasi ASEAN",
  },
  correct: "A",
  explanation: "Gateway data nasional efektif karena memungkinkan integrasi sambil jaga kedaulatan, mendukung stabilitas tanpa isolasi. Opsi seperti menolak integrasi bisa kurangi manfaat ekonomi, sementara akses bebas tingkatkan risiko data.",
},
{
  type: "GPN",
  question: "Ketika boom kripto mengancam dominasi GPN dan inklusi keuangan, kebijakan BI yang paling tepat adalah?",
  options: {
    A: "Integrasi elemen kripto terkendali ke GPN untuk inovasi inklusif",
    B: "Melarang kripto sepenuhnya untuk lindungi stabilitas GPN",
    C: "Meningkatkan promosi GPN sebagai alternatif kripto aman",
    D: "Mengalihkan regulasi kripto ke swasta untuk kurangi beban BI",
    E: "Mengurangi fitur digital GPN untuk bedakan dari kripto",
  },
  correct: "A",
  explanation: "Integrasi kripto terkendali efektif karena tingkatkan inklusi melalui inovasi, jaga stabilitas dengan pengawasan BI. Opsi seperti melarang bisa dorong pasar gelap, sementara mengurangi fitur kurangi daya saing GPN.",
},
{
  type: "RTGS",
  question: "Dalam skenario krisis likuiditas bank besar yang memerlukan transfer dana cepat, berpotensi destabilisasi sistemik, respons BI melalui RTGS yang paling efektif untuk stabilitas dan inklusi adalah?",
  options: {
    A: "Memperluas akses RTGS ke bank kecil untuk distribusi likuiditas inklusif",
    B: "Menaikkan biaya RTGS untuk batasi penggunaan selama krisis",
    C: "Memperketat verifikasi RTGS untuk cegah penyalahgunaan dana",
    D: "Mengurangi jam operasional RTGS untuk hemat sumber daya",
    E: "Mendorong penggunaan alternatif seperti transfer manual",
  },
  correct: "A",
  explanation: "Memperluas akses ke bank kecil efektif karena memastikan likuiditas merata, mengurangi risiko sistemik dan tingkatkan inklusi. Opsi seperti menaikkan biaya bisa memperburuk krisis, sementara memperketat verifikasi lambatkan respons.",
},
{
  type: "RTGS",
  question: "Ketika volatilitas pasar memicu lonjakan transaksi RTGS, yang berisiko overload dan eksklusi, kebijakan BI optimal adalah?",
  options: {
    A: "Mengupgrade teknologi RTGS dengan AI untuk prediksi dan manajemen beban",
    B: "Menghentikan sementara RTGS untuk evaluasi kapasitas",
    C: "Meningkatkan batas minimum transaksi RTGS untuk kurangi volume",
    D: "Mengalihkan transaksi kecil ke sistem lain secara paksa",
    E: "Mengurangi transparansi RTGS untuk cegah panic pasar",
  },
  correct: "A",
  explanation: "Upgrade dengan AI efektif karena tingkatkan efisiensi, jaga stabilitas tanpa eksklusi. Opsi seperti menghentikan bisa sebabkan panic, sementara meningkatkan batas eksklusif bagi transaksi kecil.",
},
{
  type: "RTGS",
  question: "Dalam kondisi integrasi RTGS dengan sistem regional, berpotensi erosi kedaulatan data, respons BI yang tepat adalah?",
  options: {
    A: "Menerapkan protokol data sovereignty di RTGS untuk kontrol nasional",
    B: "Menolak integrasi untuk lindungi data domestik sepenuhnya",
    C: "Meningkatkan enkripsi RTGS untuk semua transaksi regional",
    D: "Mengizinkan akses data bebas demi efisiensi integrasi",
    E: "Mengurangi volume transaksi RTGS regional secara bertahap",
  },
  correct: "A",
  explanation: "Protokol data sovereignty efektif karena seimbang integrasi dengan kedaulatan, kurangi risiko sistemik. Opsi seperti menolak bisa isolasi ekonomi, sementara akses bebas tingkatkan vulnerabilitas data.",
},
{
  type: "RTGS",
  question: "Saat krisis kepercayaan mempengaruhi RTGS, yang mengancam stabilitas keuangan, kebijakan BI efektif adalah?",
  options: {
    A: "Meningkatkan transparansi settlement RTGS untuk rebuild kepercayaan",
    B: "Menghentikan publikasi data RTGS untuk cegah spekulasi",
    C: "Menaikkan persyaratan collateral RTGS untuk keamanan",
    D: "Mengalihkan RTGS ke operator swasta sementara",
    E: "Mengurangi akses RTGS bagi bank non-sistemik",
  },
  correct: "A",
  explanation: "Transparansi settlement efektif karena bangun kepercayaan, jaga stabilitas tanpa eksklusi. Opsi seperti menghentikan publikasi bisa tingkatkan ketidakpastian, sementara menaikkan collateral eksklusif.",
},
{
  type: "RTGS",
  question: "Dalam skenario peningkatan transaksi RTGS akibat CBDC, berisiko overload, respons BI optimal adalah?",
  options: {
    A: "Integrasi RTGS dengan infrastruktur CBDC untuk efisiensi bersama",
    B: "Memisahkan RTGS dari CBDC untuk cegah kontaminasi risiko",
    C: "Meningkatkan biaya integrasi CBDC ke RTGS",
    D: "Mengurangi dukungan BI pada CBDC demi prioritas RTGS",
    E: "Mendorong penggunaan RTGS hanya untuk transaksi besar",
  },
  correct: "A",
  explanation: "Integrasi dengan CBDC efektif karena tingkatkan inklusi digital, kurangi overload melalui sinergi, jaga stabilitas. Opsi seperti memisahkan bisa ciptakan fragmentasi, sementara meningkatkan biaya hambat adopsi.",
},
{
  type: "SKNBI",
  question: "Ketika lonjakan kliring SKNBI memicu delay, berpotensi eksklusi UMKM, kebijakan BI yang paling tepat adalah?",
  options: {
    A: "Mengoptimasi SKNBI dengan teknologi batch processing canggih untuk kecepatan",
    B: "Menghentikan kliring harian untuk akumulasi mingguan",
    C: "Menaikkan biaya SKNBI untuk kurangi volume transaksi kecil",
    D: "Mengalihkan kliring kecil ke fintech independen",
    E: "Mengurangi partisipasi bank pedesaan di SKNBI",
  },
  correct: "A",
  explanation: "Optimasi batch processing efektif karena tingkatkan efisiensi, jaga inklusi UMKM tanpa delay sistemik. Opsi seperti menaikkan biaya eksklusif, sementara mengalihkan ke fintech bisa tingkatkan fragmentasi.",
},
{
  type: "SKNBI",
  question: "Dalam kondisi krisis ekonomi yang membutuhkan kliring cepat via SKNBI, respons BI efektif adalah?",
  options: {
    A: "Memperluas jaringan SKNBI ke lembaga keuangan non-bank untuk inklusi",
    B: "Memfokuskan SKNBI hanya pada transaksi prioritas pemerintah",
    C: "Meningkatkan verifikasi SKNBI untuk cegah fraud selama krisis",
    D: "Mengurangi frekuensi settlement SKNBI untuk hemat likuiditas",
    E: "Mendorong penggunaan tunai sebagai alternatif kliring",
  },
  correct: "A",
  explanation: "Perluasan ke non-bank efektif karena tingkatkan inklusi, dukung stabilitas dengan distribusi luas. Opsi seperti memfokuskan prioritas bisa eksklusif, sementara mengurangi frekuensi tingkatkan risiko likuiditas.",
},
{
  type: "SKNBI",
  question: "Saat integrasi SKNBI dengan digital rupiah memicu kekhawatiran data, kebijakan BI optimal adalah?",
  options: {
    A: "Menerapkan governance data terintegrasi di SKNBI untuk kedaulatan",
    B: "Menunda integrasi hingga regulasi data sempurna",
    C: "Meningkatkan enkripsi SKNBI untuk semua kliring digital",
    D: "Mengizinkan data sharing bebas demi inovasi cepat",
    E: "Mengurangi skala integrasi digital rupiah",
  },
  correct: "A",
  explanation: "Governance data terintegrasi efektif karena seimbang inovasi dengan kedaulatan, kurangi risiko sistemik. Opsi seperti menunda bisa hambat kemajuan, sementara data sharing bebas tingkatkan vulnerabilitas.",
},
{
  type: "SKNBI",
  question: "Dalam skenario volatilitas yang mempengaruhi SKNBI, berisiko stabilitas, respons BI yang tepat adalah?",
  options: {
    A: "Mengimplementasikan monitoring real-time di SKNBI untuk deteksi dini",
    B: "Menghentikan SKNBI selama volatilitas tinggi",
    C: "Menaikkan ambang batas kliring untuk kurangi beban",
    D: "Mengalihkan kliring ke sistem internasional",
    E: "Mengurangi transparansi proses SKNBI",
  },
  correct: "A",
  explanation: "Monitoring real-time efektif karena cegah eskala risiko, jaga stabilitas dan inklusi. Opsi seperti menghentikan bisa sebabkan kontraksi ekonomi, sementara mengalihkan internasional orbankan kedaulatan.",
},
{
  type: "SKNBI",
  question: "Ketika peningkatan fraud di SKNBI mengancam kepercayaan dan inklusi, kebijakan BI efektif adalah?",
  options: {
    A: "Meningkatkan edukasi pengguna SKNBI untuk pencegahan fraud inklusif",
    B: "Memfokuskan SKNBI pada transaksi verified saja",
    C: "Menaikkan penalti fraud untuk deteren",
    D: "Mengurangi akses SKNBI bagi pengguna baru",
    E: "Mendorong alternatif non-digital",
  },
  correct: "A",
  explanation: "Edukasi pengguna efektif karena bangun kepercayaan, tingkatkan inklusi tanpa restriksi berlebih. Opsi seperti memfokuskan verified bisa eksklusif, sementara mengurangi akses hambat pertumbuhan.",
},
{
  type: "QRIS",
  question: "Dalam skenario integrasi QRIS antarnegara seperti dengan Thailand, yang berpotensi meningkatkan efisiensi tapi erosi kedaulatan data, respons BI untuk stabilitas dan inklusi adalah?",
  options: {
    A: "Menerapkan standar data reciprocity di QRIS untuk seimbang manfaat dan kontrol",
    B: "Menolak integrasi untuk lindungi data nasional sepenuhnya",
    C: "Meningkatkan biaya transaksi QRIS cross-border untuk batasi penggunaan",
    D: "Mengizinkan data flow bebas demi pertumbuhan ekonomi regional",
    E: "Mengurangi promosi QRIS domestik demi fokus internasional",
  },
  correct: "A",
  explanation: "Standar reciprocity efektif karena tingkatkan inklusi melalui akses luas, jaga stabilitas dengan kontrol data, hindari risiko sistemik. Opsi seperti menolak bisa kurangi kompetitivitas, sementara data flow bebas tingkatkan kerentanan.",
},
{
  type: "QRIS",
  question: "Ketika boom penggunaan QRIS memicu overload server, berisiko eksklusi merchant kecil, kebijakan BI optimal adalah?",
  options: {
    A: "Mengupgrade infrastruktur QRIS dengan distributed ledger untuk kapasitas inklusif",
    B: "Menghentikan ekspansi QRIS hingga stabilisasi",
    C: "Menaikkan fee QRIS untuk kurangi transaksi kecil",
    D: "Mengalihkan QRIS ke provider swasta sepenuhnya",
    E: "Mengurangi integrasi QRIS dengan app fintech",
  },
  correct: "A",
  explanation: "Upgrade distributed ledger efektif karena tingkatkan efisiensi, jaga inklusi merchant tanpa overload. Opsi seperti menaikkan fee eksklusif, sementara menghentikan ekspansi hambat pertumbuhan.",
},
{
  type: "QRIS",
  question: "Dalam kondisi krisis kepercayaan akibat breach data QRIS, respons BI yang tepat adalah?",
  options: {
    A: "Meningkatkan enkripsi dan audit QRIS untuk rebuild kepercayaan stabil",
    B: "Menghentikan sementara QRIS untuk investigasi",
    C: "Memperketat regulasi pengguna QRIS baru",
    D: "Mengurangi transparansi data breach untuk cegah panic",
    E: "Mendorong kembali ke pembayaran tunai",
  },
  correct: "A",
  explanation: "Enkripsi dan audit efektif karena perkuat keamanan, jaga stabilitas dan inklusi tanpa penghentian. Opsi seperti menghentikan bisa perburuk krisis, sementara kurangi transparansi tingkatkan ketidakpercayaan jangka panjang.",
},
{
  type: "QRIS",
  question: "Saat volatilitas mata uang mempengaruhi transaksi QRIS, berpotensi destabilisasi, kebijakan BI efektif adalah?",
  options: {
    A: "Integrasi QRIS dengan mekanisme hedging domestik untuk stabilitas transaksi",
    B: "Memisahkan QRIS dari fluktuasi mata uang via fixed rate",
    C: "Meningkatkan limit transaksi QRIS untuk akomodasi volatilitas",
    D: "Mengurangi dukungan BI pada QRIS selama volatilitas",
    E: "Mendorong QRIS hanya untuk transaksi domestik kecil",
  },
  correct: "A",
  explanation: "Integrasi hedging efektif karena lindungi stabilitas, tingkatkan inklusi dengan transaksi aman. Opsi seperti memisahkan bisa tidak realistis, sementara meningkatkan limit tingkatkan risiko.",
},
{
  type: "QRIS",
  question: "Dalam skenario ekspansi QRIS ke UMKM pedesaan, berisiko gap digital, respons BI optimal adalah?",
  options: {
    A: "Program edukasi dan subsidi perangkat QRIS untuk inklusi pedesaan",
    B: "Menunda ekspansi hingga infrastruktur digital merata",
    C: "Menaikkan insentif QRIS hanya untuk UMKM urban",
    D: "Mengalihkan fokus QRIS ke sektor korporat",
    E: "Mengurangi fitur QRIS untuk simplifikasi pedesaan",
  },
  correct: "A",
  explanation: "Edukasi dan subsidi efektif karena tutup gap, tingkatkan inklusi tanpa delay stabilitas. Opsi seperti menunda bisa perpanjang eksklusi, sementara menaikkan insentif urban tingkatkan ketidaksetaraan.",
},
{
  type: "QRIS",
  question: "Ketika integrasi QRIS dengan Malaysia memicu kekhawatiran fraud cross-border, kebijakan BI yang paling tepat adalah?",
  options: {
    A: "Menerapkan AI fraud detection bersama di QRIS untuk keamanan regional",
    B: "Menolak integrasi untuk cegah fraud eksternal",
    C: "Meningkatkan biaya QRIS cross-border untuk deteren",
    D: "Mengizinkan fraud monitoring oleh pihak Malaysia",
    E: "Mengurangi volume transaksi QRIS internasional",
  },
  correct: "A",
  explanation: "AI fraud detection bersama efektif karena tingkatkan stabilitas, jaga inklusi melalui kerjasama aman. Opsi seperti menolak kurangi manfaat, sementara izinkan monitoring asing orbankan kedaulatan.",
},
{
  type: "QRIS",
  question: "Dalam kondisi peningkatan adopsi QRIS akibat CBDC, berisiko fragmentasi, respons BI efektif adalah?",
  options: {
    A: "Sinergi QRIS dengan CBDC untuk sistem pembayaran terintegrasi",
    B: "Memprioritas QRIS atas CBDC untuk konsistensi",
    C: "Meningkatkan regulasi CBDC agar sesuai QRIS",
    D: "Mengurangi promosi CBDC demi fokus QRIS",
    E: "Mendorong kompetisi antara QRIS dan CBDC",
  },
  correct: "A",
  explanation: "Sinergi efektif karena cegah fragmentasi, tingkatkan inklusi dan stabilitas melalui integrasi. Opsi seperti memprioritas bisa hambat inovasi, sementara dorong kompetisi tingkatkan risiko sistemik.",
},
{
  type: "QRIS",
  question: "Saat krisis likuiditas mempengaruhi merchant QRIS, kebijakan BI optimal adalah?",
  options: {
    A: "Fasilitas likuiditas darurat via QRIS untuk merchant inklusif",
    B: "Menghentikan transaksi QRIS kecil selama krisis",
    C: "Menaikkan fee QRIS untuk tambah pendapatan BI",
    D: "Mengalihkan merchant ke sistem tunai",
    E: "Mengurangi akses QRIS bagi merchant baru",
  },
  correct: "A",
  explanation: "Fasilitas likuiditas efektif karena dukung stabilitas merchant, tingkatkan inklusi tanpa restriksi. Opsi seperti menghentikan transaksi bisa perburuk likuiditas, sementara naikkan fee eksklusif.",
},
{
  type: "QRIS",
  question: "Dalam skenario breach keamanan QRIS, berimplikasi pada kepercayaan nasional, respons BI yang tepat adalah?",
  options: {
    A: "Upgrade keamanan QRIS dengan multi-factor authentication untuk ketahanan",
    B: "Menunda semua update QRIS hingga aman sepenuhnya",
    C: "Meningkatkan penalti breach untuk deteren internal",
    D: "Mengurangi publisitas breach untuk jaga citra",
    E: "Mendorong alternatif pembayaran non-QRIS",
  },
  correct: "A",
  explanation: "Upgrade multi-factor efektif karena perkuat keamanan, rebuild kepercayaan dan jaga inklusi. Opsi seperti menunda update bisa hambat kemajuan, sementara kurangi publisitas tingkatkan risiko jangka panjang.",
},
{
  type: "QRIS",
  question: "Ketika volatilitas global mempengaruhi QRIS cross-border, kebijakan BI efektif adalah?",
  options: {
    A: "Mekanisme stabilisasi kurs di QRIS untuk transaksi aman",
    B: "Memutus sementara QRIS cross-border",
    C: "Menaikkan limit QRIS domestik saja",
    D: "Mengalihkan fokus ke QRIS internal",
    E: "Mengurangi regulasi QRIS internasional",
  },
  correct: "A",
  explanation: "Stabilisasi kurs efektif karena lindungi stabilitas, tingkatkan inklusi melalui transaksi terpercaya. Opsi seperti memutus bisa kurangi perdagangan, sementara kurangi regulasi tingkatkan risiko.",
},
{
  type: "Blueprint SPI 2025",
  question: "Dalam skenario implementasi Blueprint SPI 2025 yang memicu ketidaksetaraan digital, berpotensi eksklusi keuangan, respons BI untuk stabilitas dan inklusi adalah?",
  options: {
    A: "Program inklusi digital terintegrasi dalam SPI 2025 untuk meratakan akses",
    B: "Menunda pelaksanaan SPI 2025 hingga kesetaraan tercapai",
    C: "Menaikkan insentif SPI hanya untuk wilayah maju",
    D: "Mengalihkan fokus SPI ke sektor tradisional",
    E: "Mengurangi target digitalisasi SPI 2025",
  },
  correct: "A",
  explanation: "Program inklusi efektif karena tutup ketidaksetaraan, tingkatkan stabilitas melalui adopsi luas. Opsi seperti menunda bisa hambat kemajuan, sementara naikkan insentif maju tingkatkan gap.",
},
{
  type: "Blueprint SPI 2025",
  question: "Ketika Blueprint SPI 2025 menghadapi resistensi dari bank tradisional, berisiko lambat inovasi, kebijakan BI optimal adalah?",
  options: {
    A: "Kolaborasi BI dengan bank untuk transisi SPI 2025 yang inklusif",
    B: "Memaksa adopsi SPI melalui regulasi ketat",
    C: "Meningkatkan subsidi SPI hanya untuk bank besar",
    D: "Mengurangi cakupan SPI 2025 untuk akomodasi resistensi",
    E: "Mendorong kompetisi swasta di luar SPI",
  },
  correct: "A",
  explanation: "Kolaborasi efektif karena kurangi resistensi, tingkatkan inklusi dan stabilitas melalui transisi mulus. Opsi seperti memaksa bisa sebabkan backlash, sementara kurangi cakupan hambat visi jangka panjang.",
},
{
  type: "Blueprint SPI 2025",
  question: "Dalam kondisi peningkatan CBDC dalam SPI 2025, berpotensi risiko privasi data, respons BI yang tepat adalah?",
  options: {
    A: "Integrasi privasi by design di SPI 2025 untuk lindungi data pengguna",
    B: "Menghentikan pengembangan CBDC dalam SPI",
    C: "Meningkatkan pengawasan data SPI oleh pihak ketiga",
    D: "Mengizinkan data anonim sepenuhnya di CBDC",
    E: "Mengurangi transparansi CBDC untuk cegah isu privasi",
  },
  correct: "A",
  explanation: "Privasi by design efektif karena seimbang inovasi dengan perlindungan, kurangi risiko sistemik. Opsi seperti menghentikan hambat kemajuan, sementara kurangi transparansi tingkatkan ketidakpercayaan.",
},
{
  type: "Blueprint SPI 2025",
  question: "Saat volatilitas ekonomi mempengaruhi target SPI 2025, kebijakan BI efektif adalah?",
  options: {
    A: "Adaptasi fleksibel target SPI 2025 dengan stress testing reguler",
    B: "Memfokuskan SPI pada stabilitas daripada inovasi",
    C: "Menaikkan anggaran SPI untuk percepat implementasi",
    D: "Mengalihkan sumber daya SPI ke kebijakan moneter",
    E: "Mengurangi kolaborasi internasional di SPI",
  },
  correct: "A",
  explanation: "Adaptasi fleksibel efektif karena jaga relevansi, tingkatkan stabilitas melalui responsif. Opsi seperti memfokuskan stabilitas bisa hambat inovasi, sementara naikkan anggaran tidak jamin efektivitas.",
},
{
  type: "Blueprint SPI 2025",
  question: "Dalam skenario integrasi digital rupiah di SPI 2025, berisiko inflasi, respons BI optimal adalah?",
  options: {
    A: "Mekanisme kontrol supply digital rupiah dalam SPI untuk stabilitas harga",
    B: "Menunda peluncuran digital rupiah hingga stabil",
    C: "Meningkatkan reservasi bank untuk CBDC",
    D: "Mengurangi target inklusi SPI demi kontrol inflasi",
    E: "Mendorong penggunaan rupiah fisik paralel",
  },
  correct: "A",
  explanation: "Kontrol supply efektif karena cegah inflasi, tingkatkan inklusi dengan CBDC aman. Opsi seperti menunda hambat kemajuan, sementara kurangi target kurangi visi inklusi.",
},
{
  type: "CBDC",
  question: "Ketika pengembangan CBDC seperti digital rupiah memicu kekhawatiran disintermediasi bank, berimplikasi stabilitas, kebijakan BI yang paling tepat adalah?",
  options: {
    A: "Desain CBDC tiered dengan batas holding untuk lindungi peran bank",
    B: "Melarang CBDC untuk cegah disintermediasi sepenuhnya",
    C: "Meningkatkan insentif bank untuk adopsi CBDC",
    D: "Mengizinkan bank mengelola CBDC secara eksklusif",
    E: "Mengurangi promosi CBDC demi bank tradisional",
  },
  correct: "A",
  explanation: "Desain tiered efektif karena seimbang inovasi dengan peran bank, kurangi risiko sistemik. Opsi seperti melarang hambat digitalisasi, sementara izinkan eksklusif bisa kurangi inklusi.",
},
{
  type: "CBDC",
  question: "Dalam kondisi krisis kepercayaan pada mata uang digital, respons BI untuk digital rupiah adalah?",
  options: {
    A: "Kampanye edukasi dan transparansi digital rupiah untuk rebuild kepercayaan",
    B: "Menghentikan uji coba digital rupiah sementara",
    C: "Menaikkan backing aset untuk digital rupiah",
    D: "Mengurangi akses digital rupiah bagi publik",
    E: "Mendorong alternatif kripto swasta",
  },
  correct: "A",
  explanation: "Edukasi dan transparansi efektif karena bangun kepercayaan, tingkatkan inklusi tanpa penghentian. Opsi seperti menghentikan bisa perburuk persepsi, sementara dorong kripto tingkatkan risiko.",
},
{
  type: "CBDC",
  question: "Saat integrasi digital rupiah dengan QRIS memicu overload, kebijakan BI efektif adalah?",
  options: {
    A: "Optimasi infrastruktur bersama untuk efisiensi CBDC dan QRIS",
    B: "Memisahkan CBDC dari QRIS untuk cegah overload",
    C: "Meningkatkan biaya penggunaan CBDC di QRIS",
    D: "Mengurangi skala integrasi secara bertahap",
    E: "Mendorong penggunaan QRIS tanpa CBDC",
  },
  correct: "A",
  explanation: "Optimasi bersama efektif karena tingkatkan stabilitas, jaga inklusi melalui sinergi. Opsi seperti memisahkan ciptakan fragmentasi, sementara naikkan biaya eksklusif.",
},
{
  type: "CBDC",
  question: "Dalam skenario volatilitas global mempengaruhi digital rupiah, respons BI optimal adalah?",
  options: {
    A: "Linkage digital rupiah dengan cadangan devisa untuk stabilitas",
    B: "Menarik digital rupiah dari sirkulasi sementara",
    C: "Menaikkan interest pada holding digital rupiah",
    D: "Mengurangi emisi digital rupiah baru",
    E: "Mendorong konversi ke rupiah fisik",
  },
  correct: "A",
  explanation: "Linkage dengan cadangan efektif karena lindungi nilai, tingkatkan stabilitas dan inklusi. Opsi seperti menarik bisa sebabkan panic, sementara kurangi emisi hambat likuiditas.",
},
{
  type: "CBDC",
  question: "Ketika digital rupiah menghadapi isu privasi, berisiko adopsi rendah, kebijakan BI yang tepat adalah?",
  options: {
    A: "Implementasi anonymous transaction limit di digital rupiah untuk seimbang privasi",
    B: "Menghilangkan fitur privasi untuk kepatuhan regulasi",
    C: "Meningkatkan pengawasan transaksi digital rupiah",
    D: "Mengurangi promosi privasi sebagai fitur utama",
    E: "Mendorong penggunaan tanpa identitas penuh",
  },
  correct: "A",
  explanation: "Anonymous limit efektif karena seimbang privasi dengan akuntabilitas, tingkatkan adopsi dan inklusi. Opsi seperti hilangkan privasi bisa kurangi kepercayaan, sementara tingkatkan pengawasan tingkatkan kekhawatiran.",
},
{
  type: "Keamanan Data",
  question: "Dalam skenario breach data di sistem pembayaran BI, yang mengancam stabilitas keuangan nasional, respons BI untuk keamanan data yang paling efektif adalah?",
  options: {
    A: "Menerapkan zero-trust architecture di seluruh sistem untuk cegah penularan",
    B: "Menghentikan semua transaksi digital hingga aman",
    C: "Menaikkan penalti breach untuk deteren internal",
    D: "Mengalihkan data ke cloud internasional untuk backup",
    E: "Mengurangi koleksi data pengguna untuk minimisasi risiko",
  },
  correct: "A",
  explanation: "Zero-trust architecture efektif karena perkuat keamanan, jaga stabilitas tanpa penghentian inklusi. Opsi seperti menghentikan transaksi bisa sebabkan krisis, sementara alihkan internasional orbankan kedaulatan.",
},
{
  type: "Keamanan Data",
  question: "Ketika inovasi digital BI memicu kekhawatiran data leakage, kebijakan optimal adalah?",
  options: {
    A: "Audit reguler dan enkripsi advanced untuk seimbang inovasi dan keamanan",
    B: "Menunda inovasi hingga standar keamanan global",
    C: "Meningkatkan kolaborasi dengan vendor asing untuk keamanan",
    D: "Mengurangi fitur inovatif demi keamanan dasar",
    E: "Mendorong penggunaan data anonim sepenuhnya",
  },
  correct: "A",
  explanation: "Audit dan enkripsi efektif karena dukung inovasi sambil kurangi risiko, tingkatkan stabilitas. Opsi seperti menunda hambat kemajuan, sementara kolaborasi asing bisa tingkatkan leakage.",
},
{
  type: "Peran BI Inovasi Digital",
  question: "Dalam kondisi lambat adopsi inovasi digital BI, berpotensi eksklusi, respons BI yang tepat adalah?",
  options: {
    A: "Program pilot inovasi dengan insentif inklusif untuk percepat adopsi",
    B: "Memaksa adopsi melalui mandat regulasi",
    C: "Menaikkan biaya non-digital untuk dorong shift",
    D: "Mengurangi investasi inovasi demi fokus tradisional",
    E: "Mendorong swasta memimpin inovasi",
  },
  correct: "A",
  explanation: "Program pilot insentif efektif karena tingkatkan inklusi, jaga stabilitas melalui adopsi bertahap. Opsi seperti memaksa bisa resistensi, sementara naikkan biaya eksklusif.",
},
{
  type: "Peran BI Inovasi Digital",
  question: "Saat inovasi BI seperti digital rupiah menghadapi resistensi, kebijakan efektif adalah?",
  options: {
    A: "Kolaborasi stakeholder untuk edukasi dan adaptasi inovasi",
    B: "Menarik inovasi dari pasar untuk evaluasi",
    C: "Meningkatkan promosi melalui media saja",
    D: "Mengurangi skala inovasi secara signifikan",
    E: "Mendorong alternatif swasta paralel",
  },
  correct: "A",
  explanation: "Kolaborasi efektif karena kurangi resistensi, tingkatkan inklusi dan stabilitas. Opsi seperti menarik hambat kemajuan, sementara dorong swasta bisa fragmentasi.",
},
{
  type: "Keseimbangan Efisiensi dan Kedaulatan",
  question: "Dalam skenario kerjasama internasional yang tingkatkan efisiensi tapi ancam kedaulatan data, respons BI optimal adalah?",
  options: {
    A: "Framework bilateral dengan klausul kedaulatan untuk seimbang manfaat",
    B: "Menolak kerjasama untuk lindungi kedaulatan mutlak",
    C: "Meningkatkan efisiensi domestik tanpa internasional",
    D: "Mengizinkan kerjasama bebas demi efisiensi maksimal",
    E: "Mengurangi data sharing dalam kerjasama",
  },
  correct: "A",
  explanation: "Framework bilateral efektif karena seimbang efisiensi dengan kedaulatan, kurangi risiko sistemik. Opsi seperti menolak kurangi manfaat, sementara izinkan bebas tingkatkan ancaman.",
},
{
  type: "Keseimbangan Efisiensi dan Kedaulatan",
  question: "Ketika cloud computing tingkatkan efisiensi sistem BI tapi risikokan kedaulatan, kebijakan yang paling tepat adalah?",
  options: {
    A: "Adopsi cloud hybrid domestik-internasional dengan kontrol BI",
    B: "Melarang cloud untuk prioritaskan server lokal",
    C: "Menaikkan investasi server lokal sepenuhnya",
    D: "Mengizinkan cloud penuh internasional demi efisiensi",
    E: "Mengurangi penggunaan cloud untuk data sensitif",
  },
  correct: "A",
  explanation: "Cloud hybrid efektif karena seimbang efisiensi dengan kedaulatan, tingkatkan stabilitas. Opsi seperti melarang hambat efisiensi, sementara izinkan penuh tingkatkan risiko.",
},
{
  type: "Keamanan Data",
  question: "Dalam kondisi peningkatan ancaman siber pada data BI, respons untuk keamanan adalah?",
  options: {
    A: "Implementasi AI cybersecurity proaktif untuk deteksi dini",
    B: "Menghentikan koleksi data baru hingga aman",
    C: "Meningkatkan asuransi siber bagi pengguna",
    D: "Mengalihkan keamanan ke vendor eksternal",
    E: "Mengurangi akses data internal BI",
  },
  correct: "A",
  explanation: "AI cybersecurity efektif karena cegah ancaman, jaga stabilitas dan inklusi. Opsi seperti menghentikan koleksi hambat operasi, sementara alihkan vendor bisa tingkatkan dependensi.",
},
{
  type: "Peran BI Inovasi Digital",
  question: "Saat inovasi BI memicu gap teknologi, kebijakan efektif adalah?",
  options: {
    A: "Inisiatif pelatihan digital nasional untuk tutup gap",
    B: "Menurunkan ambisi inovasi BI",
    C: "Menaikkan regulasi inovasi untuk kontrol",
    D: "Mengurangi dana inovasi demi redistribusi",
    E: "Mendorong inovasi swasta saja",
  },
  correct: "A",
  explanation: "Pelatihan nasional efektif karena tingkatkan inklusi, dukung stabilitas melalui adopsi luas. Opsi seperti turunkan ambisi hambat kemajuan, sementara dorong swasta bisa tidak terkendali.",
},
{
  type: "Keseimbangan Efisiensi dan Kedaulatan",
  question: "Dalam skenario data analytics tingkatkan efisiensi tapi risikokan privasi, respons BI adalah?",
  options: {
    A: "Analytics dengan data agregat untuk seimbang insight dan privasi",
    B: "Melarang analytics untuk lindungi privasi",
    C: "Meningkatkan opt-in untuk data pengguna",
    D: "Mengizinkan analytics penuh demi efisiensi",
    E: "Mengurangi jenis data yang dianalisis",
  },
  correct: "A",
  explanation: "Data agregat efektif karena dapat insight tanpa kompromi privasi, jaga kedaulatan dan stabilitas. Opsi seperti melarang kurangi efisiensi, sementara izinkan penuh tingkatkan risiko privasi.",
},
{
  type: "Keamanan Data",
  question: "Ketika breach mempengaruhi kepercayaan, kebijakan BI optimal adalah?",
  options: {
    A: "Respon cepat dengan kompensasi dan upgrade keamanan",
    B: "Menutupi breach untuk jaga citra",
    C: "Menaikkan biaya layanan untuk dana keamanan",
    D: "Mengurangi layanan digital pasca-breach",
    E: "Mendorong penggunaan non-digital",
  },
  correct: "A",
  explanation: "Respon cepat efektif karena rebuild kepercayaan, tingkatkan stabilitas tanpa kurangi inklusi. Opsi seperti menutupi bisa perburuk jangka panjang, sementara naikkan biaya eksklusif.",
},
];

const modul4Questions = shuffleQuestions(originalModul4Questions);

export default modul4Questions;