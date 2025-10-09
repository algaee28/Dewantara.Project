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

const originalmodul5Questions: Question[] = [
{
  type: "Blueprint SPI 2025",
  question: "Blueprint Sistem Pembayaran Indonesia (SPI) 2025 berupaya menciptakan ekosistem pembayaran yang digital, inklusif, dan terintegrasi. Dalam konteks ini, tantangan utama BI adalah...",
  options: {
    A: "Mendorong inovasi fintech tanpa memperkuat pengawasan makroprudensial",
    B: "Menyeimbangkan inovasi digital dengan stabilitas sistem keuangan dan perlindungan konsumen",
    C: "Membatasi keterlibatan big tech agar tidak mengganggu sistem pembayaran nasional",
    D: "Meningkatkan efisiensi sistem pembayaran lintas negara tanpa memperhatikan risiko keamanan data",
    E: "Meningkatkan volume transaksi digital tanpa memperhatikan tata kelola risiko",
  },
  correct: "B",
  explanation: "Blueprint SPI 2025 berfokus pada inovasi sistem pembayaran digital yang tetap menjaga stabilitas, integritas, dan perlindungan konsumen — keseimbangan antara efisiensi dan risiko sistemik."
},

{
  type: "MEKSI",
  question: "Salah satu pilar utama Masterplan Ekonomi dan Keuangan Syariah Indonesia (MEKSI) adalah penguatan sektor riil berbasis halal value chain. Kontribusi BI terhadap pilar ini dilakukan melalui...",
  options: {
    A: "Pemberian subsidi langsung kepada pelaku usaha halal",
    B: "Optimalisasi kebijakan makroprudensial syariah untuk memperluas akses pembiayaan UMKM halal",
    C: "Peningkatan tarif margin pembiayaan syariah agar menarik investor luar negeri",
    D: "Penetapan kurs khusus bagi transaksi syariah internasional",
    E: "Penerapan kebijakan moneter konvensional pada lembaga keuangan syariah",
  },
  correct: "B",
  explanation: "BI memperkuat sektor riil halal melalui instrumen makroprudensial syariah dan inklusi pembiayaan, bukan subsidi atau intervensi harga."
},

{
  type: "Blueprint SPI 2025",
  question: "Integrasi QRIS dalam sistem pembayaran nasional mencerminkan arah kebijakan BI untuk...",
  options: {
    A: "Mengurangi dominasi lembaga keuangan non-bank dalam sistem pembayaran",
    B: "Meningkatkan efisiensi transaksi dan memperluas inklusi keuangan digital",
    C: "Membatasi penggunaan uang elektronik lintas platform",
    D: "Mengalihkan fungsi perbankan ke platform big tech",
    E: "Menekan konsumsi masyarakat agar stabilitas harga terjaga",
  },
  correct: "B",
  explanation: "QRIS menjadi simbol interoperabilitas dan inklusi digital, meningkatkan efisiensi tanpa mengorbankan stabilitas sistem pembayaran."
},

{
  type: "MEKSI",
  question: "Salah satu tujuan strategis MEKSI adalah membangun kemandirian ekonomi nasional berbasis prinsip syariah. Dalam konteks kebijakan BI, hal ini diwujudkan melalui...",
  options: {
    A: "Penguatan instrumen pasar uang syariah untuk mendukung transmisi kebijakan moneter syariah",
    B: "Penetapan kurs tetap untuk seluruh transaksi berbasis syariah",
    C: "Pelonggaran aturan GWM bagi bank konvensional agar bersaing dengan bank syariah",
    D: "Peningkatan subsidi ekspor produk syariah",
    E: "Penetapan BI Rate khusus untuk industri halal",
  },
  correct: "A",
  explanation: "Instrumen pasar uang syariah memperkuat transmisi kebijakan moneter syariah, mendukung stabilitas dan pengembangan ekosistem halal."
},

{
  type: "Blueprint SPI 2025",
  question: "Implementasi open API dalam Blueprint SPI 2025 dimaksudkan untuk...",
  options: {
    A: "Memperluas integrasi antar penyedia jasa keuangan guna mendorong inovasi yang aman dan inklusif",
    B: "Meningkatkan margin keuntungan lembaga keuangan digital",
    C: "Menciptakan monopoli teknologi pembayaran nasional",
    D: "Menggantikan fungsi pengawasan BI terhadap sistem pembayaran",
    E: "Membatasi akses data pengguna untuk meningkatkan keamanan sistem",
  },
  correct: "A",
  explanation: "Open API membuka kolaborasi antara lembaga keuangan dan fintech, mendorong inovasi terukur dengan tetap dalam kerangka pengawasan BI."
},

{
  type: "MEKSI",
  question: "Dalam kerangka MEKSI, salah satu tantangan BI adalah memastikan inklusi keuangan syariah dapat berjalan paralel dengan efisiensi sistem keuangan nasional. Artinya, BI harus...",
  options: {
    A: "Membedakan kebijakan moneter syariah secara total dari konvensional",
    B: "Menjaga integrasi antara kebijakan moneter syariah dan sistem keuangan umum",
    C: "Menetapkan dua standar likuiditas nasional yang berbeda",
    D: "Menghapus peran bank konvensional dalam sistem pembayaran syariah",
    E: "Menurunkan standar prudensial pada bank syariah",
  },
  correct: "B",
  explanation: "Integrasi sistem syariah dan konvensional menjaga efisiensi dan inklusivitas, selaras dengan mandat stabilitas keuangan BI."
},

{
  type: "Blueprint SPI 2025",
  question: "Salah satu implikasi kebijakan digitalisasi pembayaran terhadap transmisi kebijakan moneter adalah...",
  options: {
    A: "Meningkatkan kecepatan transmisi kebijakan suku bunga ke sektor riil",
    B: "Menurunkan efektivitas kebijakan suku bunga karena dominasi transaksi tunai",
    C: "Meningkatkan risiko shadow banking akibat disintermediasi sistemik",
    D: "Menurunkan kecepatan peredaran uang dalam perekonomian",
    E: "Menurunkan transparansi aliran dana antar sektor",
  },
  correct: "A",
  explanation: "Digitalisasi mempercepat transmisi moneter karena transaksi lebih cepat, transparan, dan terukur melalui data real time."
},

{
  type: "MEKSI",
  question: "Transformasi ekonomi syariah dalam MEKSI diarahkan untuk mendukung pembangunan berkelanjutan. Hal ini tercermin dari...",
  options: {
    A: "Integrasi pembiayaan syariah dengan proyek hijau dan UMKM berorientasi keberlanjutan",
    B: "Konsentrasi pembiayaan hanya pada sektor non-produktif",
    C: "Penekanan profitabilitas lembaga keuangan syariah di atas prinsip sosial",
    D: "Fokus pada pasar uang jangka pendek semata",
    E: "Isolasi sistem keuangan syariah dari ekonomi nasional",
  },
  correct: "A",
  explanation: "Ekonomi syariah diarahkan untuk keberlanjutan melalui pembiayaan hijau dan dukungan terhadap sektor produktif halal."
},

{
  type: "Blueprint SPI 2025",
  question: "Dalam konteks Blueprint SPI 2025, integrasi data dan keamanan siber menjadi isu strategis karena...",
  options: {
    A: "Digitalisasi meningkatkan risiko kebocoran data dan ancaman stabilitas sistem keuangan",
    B: "Semakin banyak transaksi tunai yang tidak tercatat",
    C: "BI kehilangan kendali atas peredaran uang digital",
    D: "Fintech tidak lagi tunduk pada regulasi BI",
    E: "Perbankan konvensional kehilangan daya saing terhadap UMKM",
  },
  correct: "A",
  explanation: "Digitalisasi menuntut tata kelola data dan keamanan siber yang kuat agar stabilitas keuangan tetap terjaga."
},

{
  type: "MEKSI",
  question: "Sinergi antara MEKSI dan Blueprint SPI 2025 dapat menghasilkan dampak optimal bila...",
  options: {
    A: "Infrastruktur digital pembayaran syariah terhubung dengan ekosistem halal nasional",
    B: "Kebijakan digitalisasi diarahkan hanya pada lembaga keuangan konvensional",
    C: "Instrumen moneter syariah dilepaskan dari pengawasan BI",
    D: "Sistem pembayaran digital dipisahkan total dari prinsip syariah",
    E: "Inklusi keuangan syariah difokuskan hanya pada pasar ekspor",
  },
  correct: "A",
  explanation: "Integrasi digitalisasi dan ekonomi syariah memperluas inklusi dan efisiensi ekonomi nasional secara berkelanjutan."
},
{
  type: "GBBI",
  question: "Gerakan Bangga Buatan Indonesia (GBBI) yang diinisiasi bersama Bank Indonesia memiliki tujuan strategis untuk...",
  options: {
    A: "Menurunkan impor barang konsumsi dengan cara pembatasan perdagangan",
    B: "Meningkatkan permintaan domestik terhadap produk lokal melalui dukungan ekosistem digital dan pembiayaan",
    C: "Menghapus ketergantungan sektor manufaktur terhadap ekspor",
    D: "Menetapkan tarif preferensial bagi pelaku usaha besar nasional",
    E: "Mengganti seluruh produk impor dengan substitusi dalam negeri secara wajib",
  },
  correct: "B",
  explanation: "GBBI memperkuat konsumsi domestik dan pemberdayaan UMKM melalui digitalisasi, promosi, dan pembiayaan inklusif, bukan proteksionisme ekstrem."
},

{
  type: "Green Finance",
  question: "Kebijakan BI dalam mendukung green finance terutama difokuskan pada...",
  options: {
    A: "Subsidi langsung terhadap proyek energi fosil",
    B: "Insentif makroprudensial bagi pembiayaan proyek ramah lingkungan",
    C: "Penurunan standar pelaporan keuangan hijau agar menarik investor",
    D: "Pembatasan ekspansi kredit ke sektor industri berat",
    E: "Penetapan bunga tinggi untuk proyek berisiko tinggi",
  },
  correct: "B",
  explanation: "BI memberi insentif makroprudensial untuk mendorong pembiayaan hijau tanpa mengorbankan stabilitas sistem keuangan."
},

{
  type: "Ekonomi Hijau",
  question: "Dalam konteks ekonomi hijau, peran strategis BI bukan hanya pada kebijakan moneter, melainkan juga pada...",
  options: {
    A: "Penetapan kuota karbon nasional",
    B: "Integrasi kebijakan keuangan hijau ke dalam sistem perbankan dan pasar uang",
    C: "Peningkatan tarif pajak terhadap industri energi terbarukan",
    D: "Penetapan harga energi nasional",
    E: "Regulasi langsung terhadap industri manufaktur berat",
  },
  correct: "B",
  explanation: "BI berperan dalam mengintegrasikan kebijakan keuangan hijau dalam sistem keuangan agar mendukung transisi menuju ekonomi rendah karbon."
},

{
  type: "GBBI",
  question: "GBBI menjadi bagian dari strategi pemulihan ekonomi pasca-pandemi karena...",
  options: {
    A: "Mendorong substitusi impor jangka pendek tanpa memperhatikan daya saing",
    B: "Menguatkan permintaan domestik dan digitalisasi UMKM untuk memperluas basis produksi nasional",
    C: "Meningkatkan ketergantungan konsumsi terhadap produk premium ekspor",
    D: "Mengurangi peran UMKM dalam rantai pasok domestik",
    E: "Menyederhanakan sistem ekspor dengan menekan konsumsi lokal",
  },
  correct: "B",
  explanation: "GBBI menggerakkan konsumsi domestik, mendukung digitalisasi UMKM, dan memperluas basis pertumbuhan ekonomi lokal."
},

{
  type: "Green Finance",
  question: "Salah satu tantangan utama penerapan green finance di Indonesia yang diantisipasi BI adalah...",
  options: {
    A: "Kurangnya standar pelaporan dan data risiko lingkungan yang kredibel",
    B: "Terlalu banyak insentif fiskal bagi proyek hijau",
    C: "Kelebihan likuiditas di sektor perbankan hijau",
    D: "Dominasi investor asing pada proyek hijau domestik",
    E: "Kelebihan pembiayaan dari dana pensiun untuk proyek hijau",
  },
  correct: "A",
  explanation: "Data dan standar pelaporan ESG yang belum seragam membuat BI perlu memperkuat infrastruktur informasi risiko lingkungan dalam sistem keuangan."
},

{
  type: "Ekonomi Hijau",
  question: "Transisi menuju ekonomi hijau memerlukan peran aktif BI dalam...",
  options: {
    A: "Mengembangkan taksonomi hijau dan memperkuat insentif likuiditas hijau",
    B: "Menetapkan tarif karbon di tingkat industri",
    C: "Meningkatkan subsidi energi fosil agar sektor lain tetap stabil",
    D: "Mengurangi penyaluran kredit ke UMKM non-hijau secara total",
    E: "Menurunkan suku bunga secara seragam untuk semua sektor",
  },
  correct: "A",
  explanation: "Taksonomi hijau dan insentif likuiditas hijau merupakan instrumen BI untuk mendorong pembiayaan berkelanjutan secara sistemik."
},

{
  type: "GBBI",
  question: "GBBI juga menjadi sarana untuk memperkuat kedaulatan ekonomi nasional. Dalam konteks kebijakan moneter, hal ini tercermin dari...",
  options: {
    A: "Penurunan ketergantungan terhadap impor dengan memperkuat basis produksi lokal yang berdaya saing",
    B: "Penetapan tarif bunga khusus bagi UMKM sektor manufaktur",
    C: "Kewajiban bank sentral membeli produk lokal untuk cadangan devisa",
    D: "Pembatasan jumlah transaksi lintas negara",
    E: "Penerapan kurs tetap untuk menjaga daya beli konsumen",
  },
  correct: "A",
  explanation: "Kemandirian ekonomi dibangun melalui penguatan industri lokal dan konsumsi domestik yang produktif, sejalan dengan arah GBBI."
},

{
  type: "Green Finance",
  question: "Dalam menjaga keseimbangan antara inovasi dan stabilitas, BI menghadapi dilema green finance berupa...",
  options: {
    A: "Risiko moral hazard akibat insentif likuiditas hijau yang tidak selektif",
    B: "Keterbatasan sumber daya manusia di sektor perbankan konvensional",
    C: "Tingginya permintaan kredit konsumtif dibanding investasi hijau",
    D: "Dominasi lembaga keuangan internasional dalam pasar domestik",
    E: "Keterlambatan reformasi fiskal di tingkat daerah",
  },
  correct: "A",
  explanation: "Insentif hijau yang terlalu longgar dapat menimbulkan moral hazard; BI harus memastikan penerapannya tetap prudent dan terukur."
},

{
  type: "Ekonomi Hijau",
  question: "Kontribusi BI terhadap pembangunan ekonomi hijau juga tampak dari penguatan sistem pembayaran untuk...",
  options: {
    A: "Transaksi karbon dan sertifikat emisi secara digital",
    B: "Subsidi pembelian kendaraan konvensional",
    C: "Penurunan biaya transfer internasional tanpa regulasi tambahan",
    D: "Pengurangan transaksi digital di sektor energi terbarukan",
    E: "Penghapusan insentif bagi transaksi keuangan syariah",
  },
  correct: "A",
  explanation: "BI mengembangkan infrastruktur pembayaran untuk transaksi karbon digital, memperkuat transparansi dan efisiensi pasar hijau."
},

{
  type: "GBBI",
  question: "Dampak jangka panjang GBBI terhadap stabilitas ekonomi nasional diharapkan berupa...",
  options: {
    A: "Diversifikasi sumber pertumbuhan ekonomi melalui penguatan UMKM dan inovasi produk lokal",
    B: "Kenaikan inflasi akibat substitusi impor yang tidak efisien",
    C: "Keterbatasan ekspor karena penurunan produktivitas sektor lokal",
    D: "Konsentrasi industri di sektor besar dan berorientasi ekspor",
    E: "Penurunan partisipasi masyarakat dalam ekonomi digital",
  },
  correct: "A",
  explanation: "GBBI memperkuat struktur ekonomi nasional melalui diversifikasi produksi, peningkatan produktivitas, dan kemandirian pasar domestik."
},

{
  type: "Digital Rupiah",
  question: "Salah satu motivasi utama penerbitan Digital Rupiah oleh BI adalah...",
  options: {
    A: "Menggantikan uang tunai sepenuhnya dalam jangka pendek",
    B: "Menjaga kedaulatan moneter di tengah munculnya aset digital dan stablecoin global",
    C: "Menarik investor asing melalui pasar aset kripto domestik",
    D: "Menghapus fungsi lembaga perbankan dalam sistem keuangan nasional",
    E: "Meningkatkan volatilitas pasar uang untuk mendorong likuiditas",
  },
  correct: "B",
  explanation: "Digital Rupiah dirancang untuk mempertahankan kedaulatan moneter dan memperkuat efektivitas kebijakan di tengah inovasi aset digital global."
},

{
  type: "Moneter Digital",
  question: "Perbedaan utama antara Digital Rupiah dan uang elektronik terletak pada...",
  options: {
    A: "Digital Rupiah merupakan kewajiban bank sentral, sedangkan uang elektronik adalah kewajiban penerbit swasta",
    B: "Digital Rupiah tidak dapat digunakan untuk transaksi ritel",
    C: "Uang elektronik memiliki nilai tetap terhadap mata uang asing",
    D: "Digital Rupiah diterbitkan tanpa dukungan aset riil",
    E: "Uang elektronik dikontrol langsung oleh kebijakan fiskal pemerintah",
  },
  correct: "A",
  explanation: "Digital Rupiah adalah kewajiban bank sentral, berbeda dari uang elektronik yang diterbitkan oleh lembaga non-bank dan bersifat klaim privat."
},

{
  type: "Digital Rupiah",
  question: "Salah satu risiko yang diantisipasi BI dari implementasi Digital Rupiah adalah...",
  options: {
    A: "Potensi disintermediasi perbankan yang dapat memengaruhi transmisi kebijakan moneter",
    B: "Penurunan efisiensi transaksi lintas batas",
    C: "Kelebihan likuiditas di sektor swasta akibat pencetakan digital tanpa batas",
    D: "Kenaikan inflasi akibat penurunan kecepatan peredaran uang",
    E: "Meningkatnya ketergantungan terhadap aset kripto asing",
  },
  correct: "A",
  explanation: "Jika tidak diatur dengan hati-hati, Digital Rupiah dapat mengurangi peran bank komersial dalam intermediasi dana — BI menyeimbangkannya melalui desain dua lapis (two-tier system)."
},

{
  type: "Kedaulatan Moneter",
  question: "Penerbitan Digital Rupiah mendukung kedaulatan moneter nasional karena...",
  options: {
    A: "Memungkinkan BI mengawasi seluruh transaksi internasional secara langsung",
    B: "Menjadi instrumen resmi transaksi digital yang mengurangi ketergantungan pada stablecoin global",
    C: "Meningkatkan spekulasi di pasar aset digital lokal",
    D: "Menggantikan peran devisa asing dalam perdagangan lintas batas",
    E: "Menurunkan efisiensi sistem pembayaran domestik",
  },
  correct: "B",
  explanation: "Digital Rupiah memperkuat kedaulatan moneter dengan menjadi alat pembayaran resmi yang mengimbangi dominasi aset digital swasta global."
},

{
  type: "Moneter Digital",
  question: "Dalam konteks kebijakan makro, Digital Rupiah dapat memperkuat transmisi moneter melalui...",
  options: {
    A: "Ketersediaan data transaksi real-time yang meningkatkan akurasi kebijakan likuiditas",
    B: "Penghapusan seluruh peran suku bunga dalam pengendalian inflasi",
    C: "Kewajiban BI membeli aset digital privat",
    D: "Kenaikan spread suku bunga antarbank",
    E: "Pemisahan total antara sektor riil dan keuangan",
  },
  correct: "A",
  explanation: "Data digital real-time memungkinkan BI menilai kondisi likuiditas dan transmisi moneter secara presisi, meningkatkan efektivitas kebijakan."
},

{
  type: "Stabilitas Keuangan",
  question: "Dalam menjaga stabilitas sistem keuangan, BI perlu memastikan desain Digital Rupiah...",
  options: {
    A: "Mendorong inovasi tanpa menimbulkan risiko pelarian dana dari perbankan",
    B: "Memberikan akses bebas kepada seluruh warga tanpa verifikasi",
    C: "Mengizinkan penggunaan lintas batas tanpa koordinasi internasional",
    D: "Menghilangkan peran lembaga pengawas keuangan lainnya",
    E: "Meningkatkan leverage perbankan untuk menjaga likuiditas",
  },
  correct: "A",
  explanation: "Desain Digital Rupiah harus menyeimbangkan inklusi digital dengan perlindungan sistem keuangan agar stabilitas tetap terjaga."
},

{
  type: "Digital Transformation",
  question: "BI menggunakan pendekatan ‘two-tier model’ untuk penerbitan Digital Rupiah agar...",
  options: {
    A: "Distribusi uang digital tetap melalui lembaga keuangan yang diawasi BI",
    B: "BI langsung berinteraksi dengan seluruh masyarakat tanpa perantara",
    C: "Membatasi penggunaan Digital Rupiah hanya untuk korporasi besar",
    D: "Menurunkan likuiditas antarbank demi mengendalikan inflasi",
    E: "Menghapus peran bank komersial dalam penyaluran kredit",
  },
  correct: "A",
  explanation: "Model dua lapis menjaga peran bank komersial dan menekan risiko disintermediasi, sambil memastikan kontrol moneter oleh BI tetap efektif."
},

{
  type: "Kebijakan Digital BI",
  question: "Dalam arsitektur kebijakan digital BI, interoperabilitas antar-sistem pembayaran domestik penting karena...",
  options: {
    A: "Menjamin efisiensi dan inklusi tanpa menciptakan fragmentasi sistem keuangan",
    B: "Memungkinkan monopoli teknologi oleh satu lembaga keuangan nasional",
    C: "Meningkatkan biaya transaksi untuk menjaga keamanan data",
    D: "Mencegah penggunaan uang elektronik di daerah terpencil",
    E: "Menghapus peran fintech dalam sistem keuangan",
  },
  correct: "A",
  explanation: "Interoperabilitas menghindari fragmentasi sistem keuangan dan memperkuat inklusi, selaras dengan arah Blueprint SPI 2025."
},

{
  type: "Digital Currency Governance",
  question: "Salah satu kunci tata kelola Digital Rupiah yang baik adalah...",
  options: {
    A: "Penerapan prinsip risk-based approach dan pengawasan siber berlapis",
    B: "Penyerahan seluruh kontrol transaksi kepada pihak swasta",
    C: "Penetapan kurs tetap Digital Rupiah terhadap USD",
    D: "Penciptaan algoritma terbuka tanpa regulasi keamanan",
    E: "Pelepasan otorisasi BI terhadap infrastruktur pembayaran",
  },
  correct: "A",
  explanation: "Pendekatan berbasis risiko dengan keamanan siber berlapis menjaga keseimbangan antara inovasi, privasi, dan stabilitas moneter."
},

{
  type: "Global Coordination",
  question: "Dalam konteks internasional, BI bekerja sama dengan bank sentral lain untuk pengembangan CBDC lintas negara agar...",
  options: {
    A: "Meningkatkan efisiensi transaksi lintas batas dengan tetap menjaga integritas sistem keuangan global",
    B: "Menghapus penggunaan mata uang asing di perdagangan internasional",
    C: "Menyamakan semua nilai tukar antar negara pengguna CBDC",
    D: "Menurunkan transparansi transaksi lintas batas demi privasi",
    E: "Menonaktifkan sistem pembayaran konvensional",
  },
  correct: "A",
  explanation: "Kerja sama lintas bank sentral mendorong interoperabilitas CBDC lintas batas yang aman, efisien, dan sesuai prinsip stabilitas global."
},


{
  type: "Ekonomi Syariah",
  question: "Transformasi ekonomi syariah nasional diarahkan bukan hanya untuk memperkuat sektor keuangan, tetapi juga...",
  options: {
    A: "Mendorong ekonomi berbasis nilai dengan keberlanjutan sosial dan lingkungan",
    B: "Mengganti sistem ekonomi konvensional sepenuhnya dengan sistem syariah",
    C: "Meningkatkan konsumsi masyarakat tanpa memperhatikan produktivitas",
    D: "Menghapus peran UMKM dari ekosistem halal nasional",
    E: "Menjadikan sektor syariah eksklusif bagi pelaku usaha besar",
  },
  correct: "A",
  explanation: "Transformasi ekonomi syariah berorientasi pada keseimbangan antara nilai moral, sosial, dan ekonomi yang mendukung pembangunan berkelanjutan."
},

{
  type: "Keuangan Inklusif",
  question: "Salah satu mandat strategis BI dalam mendorong keuangan inklusif adalah...",
  options: {
    A: "Menurunkan hambatan akses layanan keuangan bagi kelompok rentan dan UMKM",
    B: "Membatasi jumlah lembaga keuangan mikro untuk menjaga stabilitas",
    C: "Menetapkan bunga tinggi agar lembaga keuangan lebih selektif",
    D: "Menunda digitalisasi sektor keuangan daerah",
    E: "Menarik dana masyarakat ke lembaga internasional",
  },
  correct: "A",
  explanation: "Keuangan inklusif menekankan perluasan akses layanan keuangan formal, terutama bagi UMKM dan masyarakat berpenghasilan rendah."
},

{
  type: "Ekonomi Syariah",
  question: "Pilar penguatan riset, edukasi, dan literasi dalam MEKSI bertujuan untuk...",
  options: {
    A: "Meningkatkan pemahaman masyarakat terhadap prinsip syariah dan pengelolaan keuangan beretika",
    B: "Menekan penetrasi lembaga keuangan konvensional",
    C: "Meningkatkan konsumsi jangka pendek berbasis utang syariah",
    D: "Menghapus sistem pembiayaan mikro syariah",
    E: "Mengganti peran pemerintah dalam pembiayaan sosial",
  },
  correct: "A",
  explanation: "Pendidikan dan literasi syariah memperluas pemahaman masyarakat terhadap etika keuangan dan keberlanjutan ekonomi."
},

{
  type: "Makroprudensial Syariah",
  question: "Kebijakan makroprudensial syariah BI dirancang untuk...",
  options: {
    A: "Menjaga stabilitas keuangan syariah dengan tetap mendukung ekspansi pembiayaan produktif",
    B: "Meningkatkan leverage lembaga keuangan syariah untuk ekspansi cepat",
    C: "Menurunkan rasio kecukupan modal bank syariah agar kompetitif",
    D: "Memisahkan total likuiditas syariah dari sistem nasional",
    E: "Menghilangkan fungsi pengawasan risiko di lembaga syariah",
  },
  correct: "A",
  explanation: "BI mengatur kebijakan prudensial syariah yang menjaga keseimbangan antara pertumbuhan pembiayaan dan stabilitas sistemik."
},

{
  type: "Keuangan Inklusif Digital",
  question: "Integrasi Blueprint SPI 2025 dengan program keuangan inklusif dilakukan untuk...",
  options: {
    A: "Memperluas akses masyarakat terhadap layanan pembayaran digital yang aman dan efisien",
    B: "Meningkatkan biaya transaksi agar pendapatan bank bertambah",
    C: "Membatasi partisipasi fintech dalam sistem keuangan formal",
    D: "Mengurangi transparansi transaksi digital di wilayah terpencil",
    E: "Menutup akses keuangan digital bagi masyarakat tanpa rekening bank",
  },
  correct: "A",
  explanation: "Digitalisasi sistem pembayaran membuka akses keuangan yang lebih luas, memperkuat inklusi dan efisiensi ekonomi."
},

{
  type: "Sinergi Ekonomi Syariah",
  question: "Sinergi antara MEKSI dan kebijakan green finance diperlukan karena...",
  options: {
    A: "Keduanya menekankan nilai keberlanjutan dan tanggung jawab sosial dalam pembangunan ekonomi",
    B: "Green finance berfokus pada konsumsi energi fosil sedangkan MEKSI pada industri halal",
    C: "Green finance bersifat fiskal sementara MEKSI bersifat moneter",
    D: "MEKSI tidak berhubungan dengan lingkungan sama sekali",
    E: "Keduanya ditujukan hanya untuk sektor ekspor berorientasi premium",
  },
  correct: "A",
  explanation: "MEKSI dan green finance memiliki basis nilai yang sama: keberlanjutan, etika, dan keadilan ekonomi."
},

{
  type: "UMKM Syariah",
  question: "BI mendukung pengembangan UMKM syariah melalui kebijakan...",
  options: {
    A: "Peningkatan akses pembiayaan berbasis bagi hasil dan integrasi dalam rantai pasok halal",
    B: "Penetapan bunga tinggi agar UMKM berorientasi ekspor",
    C: "Pemisahan total antara UMKM dan sektor perbankan syariah",
    D: "Pengurangan jumlah lembaga keuangan mikro syariah",
    E: "Pemberian pinjaman tunai tanpa pengawasan risiko",
  },
  correct: "A",
  explanation: "Pendekatan bagi hasil dan integrasi UMKM halal memperkuat sektor riil dan menjaga prinsip keuangan syariah yang adil."
},

{
  type: "Keuangan Sosial Syariah",
  question: "Integrasi zakat, infak, dan wakaf dalam sistem keuangan nasional bertujuan untuk...",
  options: {
    A: "Memperluas sumber pembiayaan sosial produktif dalam perekonomian nasional",
    B: "Menurunkan beban fiskal pemerintah pusat",
    C: "Menggantikan sistem perbankan konvensional",
    D: "Meningkatkan konsumsi barang impor berlabel halal",
    E: "Menghapuskan mekanisme audit dana sosial syariah",
  },
  correct: "A",
  explanation: "Integrasi dana sosial produktif memperkuat redistribusi ekonomi dan pemberdayaan kelompok rentan secara berkelanjutan."
},

{
  type: "Ekonomi Syariah Global",
  question: "Transformasi ekonomi syariah Indonesia juga berorientasi global. Dalam hal ini, BI berperan melalui...",
  options: {
    A: "Kerja sama internasional untuk memperkuat posisi Indonesia sebagai pusat keuangan syariah dunia",
    B: "Pembatasan ekspor produk halal untuk menjaga pasar domestik",
    C: "Penetapan kurs tetap untuk transaksi syariah global",
    D: "Penurunan standar prudensial bagi bank syariah luar negeri",
    E: "Kewajiban penggunaan satu lembaga pembayaran untuk semua transaksi syariah",
  },
  correct: "A",
  explanation: "BI berkolaborasi dengan otoritas global untuk memperkuat ekosistem keuangan syariah internasional dan daya saing Indonesia."
},

{
  type: "Inklusi Ekonomi Daerah",
  question: "Dalam memperkuat inklusi ekonomi daerah, BI menekankan...",
  options: {
    A: "Peningkatan kapasitas digital, literasi keuangan, dan akses pembiayaan produktif daerah",
    B: "Sentralisasi kegiatan ekonomi di Jakarta untuk efisiensi nasional",
    C: "Pembatasan lembaga keuangan daerah dalam penyaluran kredit",
    D: "Penurunan dukungan terhadap sektor pertanian lokal",
    E: "Penghapusan infrastruktur digital di luar Jawa",
  },
  correct: "A",
  explanation: "Pendekatan desentralisasi ekonomi berbasis inklusi dan digitalisasi memperkuat pertumbuhan daerah yang berkelanjutan."
},
{
  type: "Blueprint SPI 2025",
  question: "Dalam konteks Blueprint SPI 2025, penerapan data terintegrasi antar-lembaga keuangan terutama dimaksudkan untuk:",
  options: {
    A: "Meningkatkan efisiensi transaksi dan mendorong inovasi sistem pembayaran nasional",
    B: "Mengurangi ketergantungan pada sektor perbankan tradisional",
    C: "Meningkatkan peluang arbitrase lintas sektor keuangan",
    D: "Memperluas kompetisi antar penyedia fintech lintas negara",
    E: "Meningkatkan pendapatan fiskal melalui sistem monitoring digital",
  },
  correct: "A",
  explanation: "Integrasi data antar-lembaga dalam Blueprint SPI 2025 bertujuan memperkuat efisiensi, keamanan, dan inovasi ekosistem pembayaran nasional agar mendukung ekonomi digital yang inklusif.",
},

{
  type: "Digital Rupiah",
  question: "Salah satu tantangan utama dalam penerbitan Digital Rupiah adalah menjaga:",
  options: {
    A: "Likuiditas global dan stabilitas harga internasional",
    B: "Keseimbangan antara inovasi digital dengan stabilitas moneter domestik",
    C: "Dominasi sistem pembayaran berbasis tunai",
    D: "Monopoli data oleh lembaga non-pemerintah",
    E: "Penyaluran dana sektor informal",
  },
  correct: "B",
  explanation: "Digital Rupiah memperluas inovasi moneter, namun BI harus menjaga agar kebijakan tersebut tidak mengganggu transmisi kebijakan moneter dan stabilitas keuangan nasional.",
},

{
  type: "Ekonomi Hijau",
  question: "Pendekatan Bank Indonesia terhadap ekonomi hijau menekankan pada:",
  options: {
    A: "Substitusi langsung pembiayaan konvensional dengan proyek hijau",
    B: "Integrasi prinsip keberlanjutan dalam kebijakan makroprudensial dan sistem pembayaran",
    C: "Pemotongan suku bunga khusus untuk sektor energi terbarukan",
    D: "Konsolidasi lembaga hijau di bawah sistem fiskal nasional",
    E: "Penerapan pajak karbon oleh bank sentral",
  },
  correct: "B",
  explanation: "BI tidak secara langsung membiayai proyek hijau, tetapi menginternalisasi prinsip keberlanjutan dalam kebijakan moneter, makroprudensial, dan sistem pembayaran untuk mendukung ekonomi hijau.",
},

{
  type: "MEKSI",
  question: "MEKSI berfungsi sebagai kerangka strategis untuk:",
  options: {
    A: "Memperkuat daya saing lembaga keuangan syariah di pasar global",
    B: "Mendorong ekonomi syariah sebagai sumber pertumbuhan baru yang inklusif dan berkelanjutan",
    C: "Merevisi sistem bagi hasil agar lebih kompetitif terhadap bunga konvensional",
    D: "Menetapkan BI sebagai regulator tunggal ekonomi syariah nasional",
    E: "Menekan ekspansi lembaga non-syariah di sektor riil",
  },
  correct: "B",
  explanation: "MEKSI adalah blueprint untuk memperkuat ekosistem ekonomi syariah Indonesia melalui sektor keuangan, bisnis halal, dan literasi ekonomi syariah.",
},

{
  type: "Green Finance",
  question: "Green Finance oleh BI tidak hanya menargetkan pembiayaan hijau, tetapi juga:",
  options: {
    A: "Reformasi kebijakan fiskal nasional",
    B: "Integrasi risiko lingkungan dalam analisis stabilitas sistem keuangan",
    C: "Meningkatkan defisit anggaran melalui proyek energi terbarukan",
    D: "Menghapus pembiayaan sektor karbon tinggi secara langsung",
    E: "Mengalihkan kebijakan moneter ke arah insentif fiskal hijau",
  },
  correct: "B",
  explanation: "Green Finance menekankan internalisasi risiko lingkungan dan sosial ke dalam kebijakan makroprudensial agar stabilitas sistem keuangan tetap terjaga.",
},

{
  type: "GBBI",
  question: "Gerakan Bangga Buatan Indonesia (GBBI) mendukung transformasi ekonomi melalui:",
  options: {
    A: "Perlindungan produk impor dari kompetisi lokal",
    B: "Digitalisasi UMKM dan penguatan permintaan domestik",
    C: "Penetapan tarif ekspor baru bagi industri kreatif",
    D: "Subsidi penuh bagi pelaku usaha mikro berbasis digital",
    E: "Reformasi pajak untuk e-commerce lintas negara",
  },
  correct: "B",
  explanation: "GBBI mendorong UMKM naik kelas melalui digitalisasi, memperluas akses pasar, dan memperkuat permintaan domestik sehingga memperkokoh kemandirian ekonomi nasional.",
},

{
  type: "Transformasi Ekonomi Syariah",
  question: "Transformasi ekonomi syariah di bawah koordinasi BI menekankan prinsip:",
  options: {
    A: "Profit maximization dan efisiensi pasar",
    B: "Keadilan distributif dan stabilitas sosial-ekonomi",
    C: "Liberalisasi sektor keuangan berbasis syariah",
    D: "Penyatuan fiskal dan moneter syariah",
    E: "Eliminasi sektor informal dalam perekonomian",
  },
  correct: "B",
  explanation: "Ekonomi syariah tidak hanya berorientasi pada efisiensi ekonomi, tetapi juga keadilan, keseimbangan, dan stabilitas sosial, yang mendukung pertumbuhan inklusif.",
},

{
  type: "Inovasi vs Stabilitas",
  question: "Mengapa inovasi kebijakan digital BI harus disertai prinsip kehati-hatian (prudential)?",
  options: {
    A: "Agar mendukung liberalisasi finansial regional",
    B: "Untuk menghindari inflasi teknologi dan risiko stabilitas keuangan",
    C: "Supaya sektor swasta dapat mendominasi sistem pembayaran",
    D: "Agar suku bunga dapat menyesuaikan lebih cepat terhadap pasar digital",
    E: "Untuk meningkatkan kecepatan inovasi tanpa batas regulasi",
  },
  correct: "B",
  explanation: "Inovasi digital yang cepat dapat menimbulkan risiko stabilitas jika tidak disertai kerangka prudensial, karena potensi disintermediasi dan risiko siber meningkat.",
},

{
  type: "Blueprint SPI 2025",
  question: "Fungsi utama ‘open banking’ dalam kerangka SPI 2025 adalah:",
  options: {
    A: "Mendorong kolaborasi antar lembaga keuangan melalui pertukaran data aman",
    B: "Menghapuskan peran bank dalam sistem pembayaran",
    C: "Mengalihkan pengawasan sistem pembayaran kepada sektor swasta",
    D: "Menetapkan BI sebagai penyedia utama layanan finansial digital",
    E: "Mengizinkan bank asing mengakses langsung data nasabah domestik",
  },
  correct: "A",
  explanation: "Open banking memperluas kolaborasi dan interoperabilitas, namun tetap di bawah prinsip keamanan dan perlindungan data untuk menjaga stabilitas sistem pembayaran.",
},

{
  type: "Keseimbangan Kebijakan BI",
  question: "Kebijakan strategis BI dalam mendukung transformasi ekonomi nasional didesain untuk:",
  options: {
    A: "Menekan inovasi agar risiko sistemik rendah",
    B: "Menyeimbangkan inovasi digital dengan stabilitas makroekonomi",
    C: "Memprioritaskan ekspor digital dibanding permintaan domestik",
    D: "Menghapus ketergantungan pada sektor keuangan konvensional",
    E: "Menurunkan suku bunga agar daya beli meningkat tanpa batas",
  },
  correct: "B",
  explanation: "Setiap strategi BI — dari digitalisasi pembayaran hingga green finance — diarahkan untuk memperkuat transformasi ekonomi nasional dengan tetap menjaga stabilitas makro dan sistem keuangan.",
},
];

const modul5Questions = shuffleQuestions(originalmodul5Questions);

export default modul5Questions;