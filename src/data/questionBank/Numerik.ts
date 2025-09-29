// src/data/questionBank/Numerik.ts

interface MatrixQuestion {
    id?: string;
    type: string;
    question: string;
    matrixData: (number | string)[][];
    options: Record<string, number>;
    correct: string;
    explanation: string;
}

const questionGenerators = {
  generateMatrixPattern: (): MatrixQuestion => {
    const baseOperations = [
      { op: (a: number, b: number) => a * b, name: "Perkalian", explanation: "Hasil adalah perkalian dua elemen sebelumnya." },
      { op: (a: number, b: number) => a * 2 + b, name: "Kombinasi", explanation: "Pola: (Elemen 1 × 2) + Elemen 2." },
      { op: (a: number, b: number) => (a + b) * 2, name: "Kombinasi", explanation: "Pola: (Elemen 1 + Elemen 2) × 2." },
    ];

    let pattern = baseOperations[0]; // Inisialisasi
    const orientation = Math.random() > 0.5 ? "row" : "column";
    let matrix: (number | string)[][] = [];
    let answer = 0;
    let validQuestion = false;

    while (!validQuestion) {
      pattern = baseOperations[Math.floor(Math.random() * baseOperations.length)];
      matrix = [[], [], []];
      validQuestion = true;

      const primary = Array.from({ length: 3 }, () => Math.floor(Math.random() * 8) + 1);
      const secondary = Array.from({ length: 3 }, () => Math.floor(Math.random() * 8) + 1);
      const tertiary: number[] = [];

      for (let i = 0; i < 3; i++) {
        const result = pattern.op(primary[i], secondary[i]);
        if (result < 1 || result > 150 || !Number.isInteger(result)) {
          validQuestion = false;
          break;
        }
        tertiary.push(result);
      }

      if (validQuestion) {
        if (orientation === "column") {
          matrix = [primary, secondary, tertiary];
        } else {
          for (let i = 0; i < 3; i++) {
            matrix[i] = [primary[i], secondary[i], tertiary[i]];
          }
        }
      }
    }

    const missingRow = Math.floor(Math.random() * 3);
    const missingCol = Math.floor(Math.random() * 3);
    answer = matrix[missingRow][missingCol] as number;
    matrix[missingRow][missingCol] = "?";

    const optionsArray = new Set<number>([answer]);
    while (optionsArray.size < 5) {
      const wrongAnswer = Math.max(1, answer + (Math.floor(Math.random() * 20) - 10));
      if(wrongAnswer !== answer) optionsArray.add(wrongAnswer);
    }

    const shuffledOptions = Array.from(optionsArray).sort(() => Math.random() - 0.5);
    const options: Record<string, number> = {};
    let correctLetter = "";
    shuffledOptions.forEach((opt, idx) => {
        const letter = String.fromCharCode(65 + idx);
        options[letter] = opt;
        if (opt === answer) {
            correctLetter = letter;
        }
    });

    return {
      type: "Numerik - Pola Matriks",
      question: "Tentukan nilai yang hilang dalam pola matriks berikut:",
      matrixData: matrix,
      options,
      correct: correctLetter,
      explanation: `Pola diterapkan secara ${orientation}. ${pattern.explanation}`,
    };
  },
};

const generatedNumerik: MatrixQuestion[] = [];
const NUMERIC_QUESTION_COUNT = 20;

for (let i = 0; i < NUMERIC_QUESTION_COUNT; i++) {
  const question = questionGenerators.generateMatrixPattern();
  generatedNumerik.push({
    ...question,
    id: `num-${i}`,
  });
}

export default generatedNumerik;