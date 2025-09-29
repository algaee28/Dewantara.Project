// src/data/questionBank/Numerik.ts

interface MatrixQuestion {
    type: string;
    question: string;
    matrixData: (number | string)[][];
    options: Record<string, number>;
    correct: string | undefined;
    explanation: string;
}

const questionGenerators = {
  generateMatrixPattern: (): MatrixQuestion => {
    const baseOperations = [
      {
        op: (a: number, b: number) => a * b,
        name: "Perkalian",
        explanation: "Hasil kolom/baris ketiga adalah perkalian dari kolom/baris pertama dan kedua.",
      },
      {
        op: (a: number, b: number) => a * 2 + b,
        name: "Kombinasi (x2 +)",
        explanation: "Pola: (Kolom/Baris 1 × 2) + Kolom/Baris 2 = Kolom/Baris 3.",
      },
      {
        op: (a: number, b: number) => a * (b / 2),
        name: "Kombinasi (x * /2)",
        explanation: "Pola: Kolom/Baris 1 × (Kolom/Baris 2 / 2) = Kolom/Baris 3.",
      },
      {
        op: (a: number, b: number) => a * b + 5,
        name: "Kombinasi (x + 5)",
        explanation: "Pola: (Kolom/Baris 1 × Kolom/Baris 2) + 5 = Kolom/Baris 3.",
      },
      {
        op: (a: number, b: number) => (a + b) * 2,
        name: "Kombinasi ((+)*2)",
        explanation: "Pola: (Kolom/Baris 1 + Kolom/Baris 2) × 2 = Kolom/Baris 3.",
      },
      {
        op: (a: number, b: number) => a * a + b,
        name: "Kombinasi (A² + B)",
        explanation: "Pola: (Kolom/Baris 1)² + Kolom/Baris 2 = Kolom/Baris 3.",
      },
    ];

    const orientation = Math.random() > 0.5 ? "row" : "column";
    let matrix: (number | string)[][] = [[], [], []];
    let answer: number = 0;
    let pattern: typeof baseOperations[0];
    let validQuestion = false;

    while (!validQuestion) {
      pattern = baseOperations[Math.floor(Math.random() * baseOperations.length)];
      matrix = [[], [], []];
      validQuestion = true;

      const primary = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      
      const secondary = primary.map(() => {
        let val = Math.floor(Math.random() * 6) + 1;
        if (pattern.name === "Kombinasi (x * /2)") {
          return val % 2 === 0 ? val : val + 1;
        }
        return val;
      });

      const tertiary: number[] = [];

      for (let i = 0; i < 3; i++) {
        const result = pattern.op(primary[i], secondary[i]);
        if (result === null || result < 1 || result > 150 || result % 1 !== 0) {
          validQuestion = false;
          break;
        }
        tertiary.push(result);
      }

      if (validQuestion) {
        if (orientation === "column") {
          matrix[0] = primary;
          matrix[1] = secondary;
          matrix[2] = tertiary;
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

    const wrongAnswers = [
      answer + Math.floor(Math.random() * 7) + 3,
      answer - Math.floor(Math.random() * 7) - 3,
      answer + (answer > 10 ? 10 : 3),
      answer - (answer > 10 ? 10 : 3),
      answer * 2,
    ].filter((x) => x !== answer && x > 0 && x <= 200);

    const optionsArray = [
      answer,
      ...wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 4),
    ];

    const options: Record<string, number> = optionsArray
      .sort(() => Math.random() - 0.5)
      .reduce((acc, val, idx) => {
        acc[String.fromCharCode(65 + idx)] = val;
        return acc;
      }, {} as Record<string, number>);

    const correctLetter = Object.keys(options).find(
      (key) => options[key] === answer
    );

    const orientationText = orientation === "column" ? "kolom (vertikal)" : "baris (horizontal)";

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

const generatedNumerik: MatrixQuestion[] = [];
const NUMERIC_QUESTION_COUNT = 20;

for (let i = 0; i < NUMERIC_QUESTION_COUNT; i++) {
  const question = questionGenerators.generateMatrixPattern();
  generatedNumerik.push({
    ...question,
    id: `num-${i}`,
  } as any);
}

export default generatedNumerik;