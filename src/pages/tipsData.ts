// src/data/tipsData.ts

export const tipsData = {
  "Panduan Umum": `
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
};

export const allTips = [
  {
    title: "Panduan Umum",
    text: "Manajemen waktu & strategi belajar.",
    contentKey: "Panduan Umum",
    isLink: false,
    style: {
      background:
        "linear-gradient(135deg, rgba(255,107,107,0.7), rgba(248,232,166,0.7))",
    },
  },
  {
    title: "Tips Verbal",
    text: "Asah kemampuan analogi dan sinonim.",
    contentKey: "Tips Verbal",
    isLink: false,
    style: {
      background:
        "linear-gradient(135deg, rgba(178,240,231,0.7), rgba(107,176,255,0.7))",
    },
  },
  {
    title: "Tips Numerik",
    text: "Pahami deret angka dan pola matriks.",
    contentKey: "Tips Numerik",
    isLink: false,
    style: {
      background:
        "linear-gradient(135deg, rgba(255,182,193,0.7), rgba(161,161,230,0.7))",
    },
  },
  {
    title: "Tips Figural",
    text: "Latih mata untuk rotasi dan cerminan.",
    contentKey: "Tips Figural",
    isLink: false,
    style: {
      background:
        "linear-gradient(135deg, rgba(178,240,231,0.7), rgba(107,176,255,0.7))",
    },
  },
  {
    title: "Ekonomi & Akuntansi",
    text: "Memahami konsep dasar perbankan.",
    contentKey: "Ekonomi & Akuntansi",
    isLink: false,
    style: {
      background:
        "linear-gradient(135deg, rgba(255,231,178,0.7), rgba(255,176,107,0.7))",
    },
  },
  {
    title: "Catatan di Notion",
    text: "Panduan terperinci di Notion.",
    link: "LINK_KE_NOTION_ANDA",
    isLink: true,
    style: {
      background:
        "linear-gradient(135deg, rgba(107,255,107,0.7), rgba(166,248,166,0.7))",
    },
  },
  {
    title: "Koleksi Buku",
    text: "Buku latihan di Google Drive.",
    link: "LINK_KE_GOOGLE_DRIVE_ANDA",
    isLink: true,
    style: {
      background:
        "linear-gradient(135deg, rgba(255,231,178,0.7), rgba(255,176,107,0.7))",
    },
  },
  {
    title: "Tanya Gemini AI",
    text: "Eksplorasi dengan AI.",
    link: "https://gemini.google.com/",
    isLink: true,
    style: {
      background:
        "linear-gradient(135deg, rgba(193,182,255,0.7), rgba(178,231,255,0.7))",
    },
  },
];
