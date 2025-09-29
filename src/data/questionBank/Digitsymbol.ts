// src/data/questionBank/DigitSymbol.ts

// --- Kode Generator Soal Digit Symbol untuk TPD PCPM BI 40 (Versi Lebih Sempurna) ---

// Tipe data untuk soal
interface DigitSymbolQuestion {
  id: string;
  type: string;
  question: string;
  keyMap: Record<string, string>;
  symbolSequence: string[];
  options: Record<string, string>;
  correct: string;
  explanation: string;
  patternType: string;
}

// Daftar simbol dan kunci yang mungkin
const SYMBOLS = ["★", "●", "▲", "■", "◆", "◇", "▼", "◉", "✚", "✦", "⚡", "☀"];
const KEY_VALUES = {
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
};

// Pola urutan simbol
const patternGenerators = [
  {
    name: "Random",
    description: "Urutan simbol acak.",
    generate: (symbols: string[], length: number) =>
      Array.from(
        { length },
        () => symbols[Math.floor(Math.random() * symbols.length)]
      ),
  },
  {
    name: "Repeating",
    description: "Urutan simbol berulang berdasarkan pola awal.",
    generate: (symbols: string[], length: number) => {
      const base = symbols.slice(0, Math.min(3, symbols.length));
      return Array.from({ length }, (_, i) => base[i % base.length]);
    },
  },
  {
    name: "Shifting",
    description: "Urutan simbol bergeser berdasarkan indeks kunci.",
    generate: (symbols: string[], length: number) => {
      const result = [];
      for (let i = 0; i < length; i++) {
        result.push(
          symbols[
            ((i % symbols.length) + Math.floor(i / symbols.length)) %
              symbols.length
          ]
        );
      }
      return result;
    },
  },
];

const questionGenerators = {
  generateDigitSymbol: (): DigitSymbolQuestion => {
    // Pilih tipe kunci (huruf atau angka)
    const keyType = Math.random() > 0.5 ? "letters" : "numbers";
    const availableKeys = KEY_VALUES[keyType];

    // Pilih jumlah simbol (5-8) dan panjang urutan (3-6)
    const numSymbols = Math.floor(Math.random() * 4) + 5; // 5-8 simbol
    const sequenceLength = Math.floor(Math.random() * 4) + 3; // 3-6 simbol

    // Ambil simbol dan kunci secara acak
    const selectedSymbols = SYMBOLS.sort(() => Math.random() - 0.5).slice(
      0,
      numSymbols
    );
    const selectedKeys = availableKeys
      .sort(() => Math.random() - 0.5)
      .slice(0, numSymbols);

    // Buat kunci (contoh: ★ = A, ● = 1)
    const keyMap = selectedSymbols.reduce((acc, symbol, idx) => {
      acc[symbol] = selectedKeys[idx];
      return acc;
    }, {} as Record<string, string>);

    // Pilih pola urutan
    const pattern =
      patternGenerators[Math.floor(Math.random() * patternGenerators.length)];
    const symbolSequence = pattern.generate(selectedSymbols, sequenceLength);

    // Terjemahkan urutan ke jawaban benar
    const correctAnswer = symbolSequence
      .map((symbol) => keyMap[symbol])
      .join("");

    // Tentukan posisi tanda tanya
    const missingIndex = Math.floor(Math.random() * sequenceLength);
    const displayedSequence = [...symbolSequence];
    displayedSequence[missingIndex] = "?";

    // Buat opsi jawaban salah yang realistis
    const wrongAnswers: string[] = [];
    const maxAttempts = 10;
    let attempts = 0;

    while (wrongAnswers.length < 4 && attempts < maxAttempts) {
      const wrongSeq = [...symbolSequence];
      const changeIndex = Math.floor(Math.random() * sequenceLength);
      const newSymbol = selectedSymbols[Math.floor(Math.random() * numSymbols)];
      if (newSymbol !== wrongSeq[changeIndex]) {
        wrongSeq[changeIndex] = newSymbol;
        const wrongKey = wrongSeq.map((symbol) => keyMap[symbol]).join("");
        if (wrongKey !== correctAnswer && !wrongAnswers.includes(wrongKey)) {
          wrongAnswers.push(wrongKey);
        }
      }
      attempts++;
    }

    // Jika opsi salah kurang dari 4, tambahkan variasi logis
    while (wrongAnswers.length < 4) {
      const randomSeq = pattern.generate(selectedSymbols, sequenceLength);
      const randomKey = randomSeq.map((symbol) => keyMap[symbol]).join("");
      if (randomKey !== correctAnswer && !wrongAnswers.includes(randomKey)) {
        wrongAnswers.push(randomKey);
      }
    }

    // Gabungkan jawaban benar dan salah, lalu acak
    const optionsArray = [correctAnswer, ...wrongAnswers].sort(
      () => Math.random() - 0.5
    );
    const options = optionsArray.reduce((acc, val, idx) => {
      acc[String.fromCharCode(65 + idx)] = val;
      return acc;
    }, {} as Record<string, string>);

    const correctLetter = Object.keys(options).find(
      (key) => options[key] === correctAnswer
    )!;

    // Format kunci untuk ditampilkan dengan spasi baris
    const keyDisplay = Object.entries(keyMap)
      .map(([symbol, key]) => `${symbol} = ${key}`)
      .join("\n"); // <-- GANTI DENGAN \n UNTUK SATU BARIS

    // Format pertanyaan MENGGUNAKAN \n dan \n\n untuk pemisah paragraf
    const questionText = `Terjemahkan urutan simbol berikut berdasarkan kunci:\n${keyDisplay}\n\nUrutan: ${displayedSequence.join(
      " "
    )}\nSimbol yang hilang adalah '?'.`;
    // Perhatikan penggunaan \n\n untuk jarak ganda

    return {
      id: "",
      type: "Digit Symbol",
      question: questionText,
      keyMap,
      symbolSequence: displayedSequence,
      options,
      correct: correctLetter,
      explanation: `Urutan simbol ${displayedSequence.join(
        " "
      )} diterjemahkan menggunakan kunci:\n${keyDisplay}[Pola]: ${
        pattern.description
      }Simbol '?' pada posisi ke-${missingIndex + 1} adalah **${
        symbolSequence[missingIndex]
      }**, yang sesuai dengan kunci **${
        correctAnswer[missingIndex]
      }**. Jawaban lengkap: ${correctAnswer}.`,
      patternType: pattern.name,
    };
  },
};

// --- Menghasilkan 35 soal Digit Symbol (sesuai TPD BI) ---
const generatedDigitSymbol: DigitSymbolQuestion[] = [];
const DIGIT_SYMBOL_QUESTION_COUNT = 35; // Sesuai jumlah soal TPD asli

for (let i = 0; i < DIGIT_SYMBOL_QUESTION_COUNT; i++) {
  const question = questionGenerators.generateDigitSymbol();
  generatedDigitSymbol.push({
    ...question,
    id: `digsym-${i}`,
  });
}

// Mengekspor array soal Digit Symbol
export default generatedDigitSymbol;
