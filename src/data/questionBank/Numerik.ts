// src/data/questionBank/Numerik.ts

// --- Kode Generator Soal Matriks yang Lebih Sulit (Fokus Perkalian & Kombinasi) ---
const questionGenerators = {
  // Hanya fokus pada Matriks
  generateMatrixPattern: () => {
    // Pola Operasi Jauh Lebih Sulit
    const baseOperations = [
      // Pola 1: Perkalian A * B = C
      {
        op: (a, b) => a * b,
        name: "Perkalian",
        explanation:
          "Hasil kolom/baris ketiga adalah perkalian dari kolom/baris pertama dan kedua.",
      },

      // Pola 2: Kombinasi A*2 + B = C
      {
        op: (a, b) => a * 2 + b,
        name: "Kombinasi (x2 +)",
        explanation:
          "Pola: (Kolom/Baris 1 × 2) + Kolom/Baris 2 = Kolom/Baris 3.",
      },

      // Pola 3: Kombinasi A * (B/Konstanta) (Membutuhkan B kelipatan)
      {
        op: (a, b) => a * (b / 2),
        name: "Kombinasi (x * /2)",
        explanation:
          "Pola: Kolom/Baris 1 × (Kolom/Baris 2 / 2) = Kolom/Baris 3.",
      },

      // Pola 4: Kombinasi (A*B) + Konstanta (Misalnya, +5)
      {
        op: (a, b) => a * b + 5,
        name: "Kombinasi (x + 5)",
        explanation:
          "Pola: (Kolom/Baris 1 × Kolom/Baris 2) + 5 = Kolom/Baris 3.",
      },

      // Pola 5: Kombinasi (A+B) * Konstanta (Misalnya, *2)
      {
        op: (a, b) => (a + b) * 2,
        name: "Kombinasi ((+)*2)",
        explanation:
          "Pola: (Kolom/Baris 1 + Kolom/Baris 2) × 2 = Kolom/Baris 3.",
      },

      // Pola 6: Pangkat dan Penambahan A^2 + B = C
      {
        op: (a, b) => a * a + b,
        name: "Kombinasi (A² + B)",
        explanation: "Pola: (Kolom/Baris 1)² + Kolom/Baris 2 = Kolom/Baris 3.",
      },
    ];

    const orientation = Math.random() > 0.5 ? "row" : "column";
    const targetIndex = 2;

    let matrix, answer, pattern;
    let validQuestion = false;

    // Ulangi sampai matriks yang valid ditemukan
    while (!validQuestion) {
      pattern =
        baseOperations[Math.floor(Math.random() * baseOperations.length)];
      matrix = [[], [], []];
      validQuestion = true;

      // Nilai awal dibuat lebih kecil agar hasil perkalian tidak terlalu besar (Max 10)
      const primary = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      // Jika pola melibatkan pembagian, pastikan nilai secondary bisa dibagi.
      const secondary = primary.map((p) => {
        let val = Math.floor(Math.random() * 6) + 1;
        // Khusus untuk pola pembagian, kita pastikan B adalah kelipatan 2 agar hasil bulat.
        if (pattern.name === "Kombinasi (x * /2)") {
          return val % 2 === 0 ? val : val + 1;
        }
        return val;
      });

      const tertiary = [];

      for (let i = 0; i < 3; i++) {
        const result = pattern.op(primary[i], secondary[i]);

        // Validasi: Pastikan hasil bulat, positif, dan wajar (max 150)
        if (result === null || result < 1 || result > 150 || result % 1 !== 0) {
          validQuestion = false;
          break;
        }
        tertiary.push(result);
      }

      if (validQuestion) {
        if (orientation === "column") {
          // Pola Vertikal (Atas-Bawah)
          matrix[0] = primary;
          matrix[1] = secondary;
          matrix[2] = tertiary;
        } else {
          // Pola Horizontal (Kiri-Kanan)
          for (let i = 0; i < 3; i++) {
            matrix[i] = [primary[i], secondary[i], tertiary[i]];
          }
        }
      }
    }

    // Acak posisi tanda tanya (?)
    const missingRow = Math.floor(Math.random() * 3);
    const missingCol = Math.floor(Math.random() * 3);

    answer = matrix[missingRow][missingCol];
    matrix[missingRow][missingCol] = "?";

    // Buat opsi jawaban yang salah (variasi lebih besar)
    const wrongAnswers = [
      answer + Math.floor(Math.random() * 7) + 3,
      answer - Math.floor(Math.random() * 7) - 3,
      answer + (answer > 10 ? 10 : 3), // Tambah 10 jika angkanya besar
      answer - (answer > 10 ? 10 : 3),
      answer * 2,
    ].filter((x) => x !== answer && x > 0 && x <= 200);

    // Pilih 4 jawaban salah acak
    const optionsArray = [
      answer,
      ...wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 4),
    ];

    // Konversi ke format Opsi { A: nilai, B: nilai, ... }
    const options = optionsArray
      .sort(() => Math.random() - 0.5)
      .reduce((acc, val, idx) => {
        acc[String.fromCharCode(65 + idx)] = val;
        return acc;
      }, {});

    const correctLetter = Object.keys(options).find(
      (key) => options[key] === answer
    );

    const orientationText =
      orientation === "column" ? "kolom (vertikal)" : "baris (horizontal)";

    return {
      type: "Numerik - Pola Matriks Sulit",
      question: "Tentukan nilai yang hilang dalam pola matriks berikut:",
      matrixData: matrix,
      options,
      correct: correctLetter,
      explanation: `Pola diterapkan secara ${orientationText}. ${pattern.explanation
        .replace("Kolom/Baris 1", `${orientationText.split(" ")[0]} 1`)
        .replace("Kolom/Baris 2", `${orientationText.split(" ")[0]} 2`)
        .replace("Kolom/Baris 3", `${orientationText.split(" ")[0]} 3`)}`,
    };
  },
};

// --- Menghasilkan 15 soal matriks yang sulit dan diacak ---
const generatedNumerik = [];
const NUMERIC_QUESTION_COUNT = 20;

for (let i = 0; i < NUMERIC_QUESTION_COUNT; i++) {
  const question = questionGenerators.generateMatrixPattern();
  generatedNumerik.push({
    ...question,
    id: `num-${i}`,
  });
}

// Mengekspor array soal numerik
export default generatedNumerik;
