interface QuizCardProps {
  activeTest: string;
  startQuiz: (count: number, type: string, time: number | null) => void;
  setShowAlert: (showAlert: boolean) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ activeTest, startQuiz }) => {
  const allCards: Record<string, { type: string; title: string; desc: string; gradient: string }[]> = {
    fundamental: [
      {
        type: "logika",
        title: "Logic",
        desc: "Analitis & Silogisme",
        gradient:
          "radial-gradient(circle at 30% 30%, rgba(255,150,100,0.7), transparent 70%), linear-gradient(135deg, #0d0d0f, #2b0a0a)",
      },
      {
        type: "verbal",
        title: "Verbal",
        desc: "Sinonim & Antonim",
        gradient:
          "radial-gradient(circle at 70% 40%, rgba(255,220,180,0.6), transparent 70%), linear-gradient(135deg, #0a0f0f, #1a1f2e)",
      },
      {
        type: "figural",
        title: "Figural",
        desc: "Pola Gambar & Rotasi",
        gradient:
          "radial-gradient(circle at 40% 60%, rgba(134,239,172,0.6), transparent 65%), linear-gradient(135deg, #0a0f0d, #1a3325)",
      },
      {
        type: "numerik",
        title: "Numeric",
        desc: "Matriks",
        gradient:
          "radial-gradient(circle at 60% 30%, rgba(248,232,166,0.6), transparent 70%), linear-gradient(135deg, #0d0a0a, #2e291a)",
      },
      {
        type: "digitsymbol",
        title: "Digit Symbol",
        desc: "Coding Cepat Simbol-Angka",
        gradient:
          "radial-gradient(circle at 40% 70%, rgba(180,240,230,0.5), transparent 70%), linear-gradient(135deg, #0f0a0a, #1a1f2e)",
      },
    ],
    ekonomi: [
      {
        type: "ekonomi",
        title: "Economy",
        desc: "Teori & Kebijakan Umum",
        gradient:
          "radial-gradient(circle at 40% 30%, rgba(196,181,253,0.6), transparent 70%), linear-gradient(135deg, #0a0a1a, #201c2e)",
      },
      {
        type: "bank",
        title: "Banking",
        desc: "Prinsip Dasar Perbankan",
        gradient:
          "radial-gradient(circle at 70% 50%, rgba(255,107,107,0.6), transparent 70%), linear-gradient(135deg, #0a0a0a, #1f1c2b)",
      },
      {
        type: "akuntansi",
        title: "Accounting",
        desc: "Basic - advance accounting",
        gradient:
          "radial-gradient(circle at 50% 60%, rgba(255,200,200,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2a1f1f)",
      },
    ],
    english: [
      {
        type: "grammar",
        title: "Grammar",
        desc: "Tenses & Struktur Kalimat",
        gradient:
          "radial-gradient(circle at 60% 30%, rgba(107,176,255,0.6), transparent 70%), linear-gradient(135deg, #0a0a1a, #1a2333)",
      },
      {
        type: "reading",
        title: "Reading",
        desc: "Pemahaman Teks & Inferensi",
        gradient:
          "radial-gradient(circle at 40% 70%, rgba(255,218,185,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2b1f1a)",
      },
      {
        type: "vocab",
        title: "Vocabulary",
        desc: "Kosakata & Idiom",
        gradient:
          "radial-gradient(circle at 70% 40%, rgba(255,107,107,0.6), transparent 65%), linear-gradient(135deg, #0a0a0f, #2a1a1a)",
      },
    ],
  };

  const cardsToRender = allCards[activeTest] || [];

  return (
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
      {cardsToRender.map((card) => (
        <QuizCard
          key={card.type}
          title={card.title}
          gradient={card.gradient}
          desc={card.desc}
          onClick={() => startQuiz(20, card.type, null)}
        />
      ))}
    </div>
  );
};

export default QuizCard;