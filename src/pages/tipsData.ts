// src/data/tipsData.ts

// Hati-hati: Pastikan key di tipsData (object) sesuai dengan contentKey di allTips (array)

export const tipsData = {
  "Panduan & Strategi": `
    Manajemen Waktu: Selama tes, usahakan tidak terjebak pada satu soal. Alokasikan waktu per soal, dan jika terlalu sulit, lewati dulu dan kembali lagi nanti. Ini akan memaksimalkan jumlah soal yang bisa Anda jawab.

    Analisis Hasil: Setelah kuis, jangan hanya melihat skor. Periksa setiap soal yang salah. Pahami mengapa jawaban Anda salah dan apa konsep yang terlewat. Ini adalah kunci untuk perbaikan berkelanjutan.

    Latihan Konsisten: Latihan rutin lebih efektif daripada belajar maraton. Jadwalkan sesi singkat setiap hari untuk menjaga otak Anda tetap tajam dan siap.
  `,
  "Tips Verbal": `
    Analogi: Buatlah kalimat yang menghubungkan dua kata pada soal, lalu terapkan kalimat yang sama pada opsi jawaban. Misalnya, "Matahari membuat terang" -> "Api membuat panas".

    Sinonim & Antonim: Perbanyak membaca artikel, buku, atau kamus. Memahami konteks kalimat seringkali lebih membantu daripada sekadar menghafal kata.
  `,
  "Tips Numerik": `
    Pola Deret Angka: Coba identifikasi polanya. Apakah ini deret aritmetika (penjumlahan/pengurangan konstan), geometri (perkalian/pembagian), atau kombinasi (misalnya, melompat satu angka)?

    Pola Matriks: Perhatikan pola secara horizontal (baris) dan vertikal (kolom). Seringkali polanya adalah operasi matematika sederhana seperti penjumlahan, pengurangan, atau perkalian.
  `,
  "Tips Figural": `
    Rotasi & Cerminan: Latih mata Anda untuk mengenali rotasi (perputaran searah/berlawanan jarum jam) dan cerminan (pencerminan). Fokus pada satu elemen kecil saja di dalam gambar untuk mempermudah.

    Penambahan/Pengurangan Elemen: Perhatikan bagaimana elemen-elemen kecil dalam gambar berubah, bertambah, atau berkurang dari satu tahap ke tahap berikutnya.
  `,
  "Tips Logic": `
    Silogisme: Pecah pernyataan menjadi premis mayor, minor, dan kesimpulan. Periksa apakah kesimpulan logis berdasarkan premis yang diberikan.
    
    Inferensi: Latih kemampuan menarik kesimpulan yang valid dari informasi yang tersedia. Jangan menambahkan asumsi yang tidak tertulis.
  `,
  "Catatan & Panduan": `
    Notion adalah tempat terbaik untuk menyimpan catatan terstruktur dan panduan belajar yang dapat diakses kapan saja. Gunakan template yang sudah disediakan untuk efisiensi maksimal.
  `,
  "Koleksi Buku": `
    Google Drive berisi koleksi buku-buku referensi untuk persiapan tes. Unduh dan pelajari materi sesuai kebutuhan Anda.
  `,
  "AI Assistant": `
    Gemini AI dapat membantu menjelaskan konsep yang sulit dipahami. Jangan ragu untuk bertanya tentang strategi atau penjelasan soal tertentu.
  `,
};

export const allTips = [
  {
    title: "Panduan & Strategi",
    text: "Tips umum untuk mengelola waktu dan pola pikir.",
    contentKey: "Panduan & Strategi",
    isExternal: false,
    link: null, // Tambahkan link untuk konsistensi
    style: {
      background:
        "linear-gradient(135deg, rgba(255,107,107,0.8), rgba(248,232,166,0.8))",
    },
  },
  {
    title: "Tips Verbal",
    text: "Asah kemampuan analogi dan sinonim.",
    contentKey: "Tips Verbal",
    isExternal: false,
    link: null,
    style: {
      background:
        "linear-gradient(135deg, rgba(178,240,231,0.8), rgba(107,176,255,0.8))",
    },
  },
  {
    title: "Tips Numerik",
    text: "Pahami deret angka dan pola matriks.",
    contentKey: "Tips Numerik",
    isExternal: false,
    link: null,
    style: {
      background:
        "linear-gradient(135deg, rgba(255,182,193,0.8), rgba(161,161,230,0.8))",
    },
  },
  {
    title: "Tips Figural",
    text: "Latih mata untuk rotasi dan cerminan.",
    contentKey: "Tips Figural",
    isExternal: false,
    link: null,
    style: {
      background:
        "linear-gradient(135deg, rgba(255,218,185,0.8), rgba(255,176,176,0.8))",
    },
  },
  {
    title: "Tips Logic",
    text: "Asah kemampuan penalaran dan silogisme.",
    contentKey: "Tips Logic",
    isExternal: false,
    link: null,
    style: {
      background:
        "linear-gradient(135deg, rgba(186,230,253,0.8), rgba(147,197,253,0.8))",
    },
  },
  {
    title: "Catatan & Panduan",
    text: "Akses koleksi catatan di Notion.",
    contentKey: "Catatan & Panduan",
    isExternal: true,
    link: "LINK_KE_NOTION_ANDA",
    style: {
      background:
        "linear-gradient(135deg, rgba(196,181,253,0.8), rgba(167,139,250,0.8))",
    },
  },
  {
    title: "Koleksi Buku",
    text: "Download buku referensi dari Drive.",
    contentKey: "Koleksi Buku",
    isExternal: true,
    link: "LINK_KE_GOOGLE_DRIVE_ANDA",
    style: {
      background:
        "linear-gradient(135deg, rgba(134,239,172,0.8), rgba(74,222,128,0.8))",
    },
  },
  {
    title: "AI Assistant",
    text: "Tanya konsep sulit ke Gemini AI.",
    contentKey: "AI Assistant",
    isExternal: true,
    link: "https://gemini.google.com/",
    style: {
      background:
        "linear-gradient(135deg, rgba(254,215,170,0.8), rgba(251,191,36,0.8))",
    },
  },
];