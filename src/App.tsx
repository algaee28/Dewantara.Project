import { useState, useEffect, FC } from "react";
import {
  Clock,
  CheckCircle,
  XCircle,
  Trophy,
  Home,
  RefreshCw,
  Info,
} from "lucide-react";
import questionBank from "./data/questionBank/index";
import quotes from "./components/pages/quoteData";

// =====================================
// DEFINISI TIPE (TYPE DEFINITIONS)
// =====================================

interface Quote {
  header: string;
  subHeader: string;
  bottomText: string;
}

interface Question {
  type: string;
  question: string;
  imageUrl?: string;
  matrixData?: (string | number)[][];
  options: Record<string, string | number>;
  correct: string;
  explanation?: string;
  explanationUrl?: string;
}

type Mode = "home" | "quiz" | "simulasi" | "tips" | "quizInProgress" | "quizResults";
type ActiveTest = "fundamental" | "ekonomi" | "english";

// =====================================
// KOMPONEN-KOMPONEN TERPISAH
// =====================================

interface NavMenuProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}

const NavMenu: FC<NavMenuProps> = ({ activeMenu, setMode, setActiveMenu }) => (
  <nav
    className="px-1 py-1 rounded-2xl border border-white border-opacity-15 shadow-lg text-white"
    style={{
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
    }}
  >
    {(["home", "quiz", "simulasi", "tips"] as const).map((item) => (
      <button
        key={item}
        onClick={() => {
          setMode(item);
          setActiveMenu(item);
        }}
        className={`px-3 py-2 text-sm sm:px-6 sm:py-2 mx-1 rounded-xl sm:text-lg transition-all duration-300 ${
          activeMenu === item
            ? "font-bold"
            : "font-normal hover:bg-white hover:bg-opacity-5"
        }`}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </button>
    ))}
  </nav>
);

interface QuizSubNavProps {
  activeTest: ActiveTest;
  setActiveTest: (test: ActiveTest) => void;
}

const QuizSubNav: FC<QuizSubNavProps> = ({ activeTest, setActiveTest }) => (
  <div
    className="px-2 py-2 rounded-2xl border border-white border-opacity-30 shadow-lg text-white mb-8 flex flex-wrap justify-center gap-2"
    style={{
      background: "rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(10px)",
    }}
  >
    {(["fundamental", "ekonomi", "english"] as const).map((test) => (
      <button
        key={test}
        onClick={() => setActiveTest(test)}
        className={`px-4 py-2 text-sm sm:px-6 sm:py-3 mx-1 rounded-xl sm:text-lg transition-all duration-300 ${
          activeTest === test
            ? "font-bold"
            : "font-normal hover:bg-white hover:bg-opacity-5"
        }`}
      >
        {test.charAt(0).toUpperCase() + test.slice(1)}
      </button>
    ))}
  </div>
);

interface QuizCardProps {
  title: string;
  gradient?: string;
  desc: string;
  onClick: () => void;
}

const QuizCard: FC<QuizCardProps> = ({ title, gradient, desc, onClick }) => (
  <button
    onClick={onClick}
    className="transition-transform hover:scale-105 w-36 sm:w-46 xl:w-56 flex-shrink-0"
  >
    <div
      className="w-full h-auto aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl flex flex-col justify-end p-3 sm:p-5"
      style={{
        background: gradient || "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-10"
        style={{ backdropFilter: "blur(5px)" }}
      ></div>
      <div className="relative z-8 text-left">
        <h3 className="text-base sm:text-xl font-semibold mb-0.5 leading-tight">
          {title}
        </h3>
        <p className="text-xs sm:text-sm font-light opacity-90 leading-tight">
          {desc}
        </p>
      </div>
    </div>
  </button>
);

interface ComingSoonAlertProps {
  onClose: () => void;
}

const ComingSoonAlert: FC<ComingSoonAlertProps> = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <div
      className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-2xl border border-white border-opacity-20 shadow-lg text-white max-w-sm text-center"
      style={{ backdropFilter: "blur(10px)" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-center mb-4">
        <Info className="w-12 h-12 text-yellow-400" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-2">Segera Hadir!</h3>
      <p className="text-sm sm:text-md opacity-80 mb-4">
        Fitur ini sedang dalam pengembangan. Mohon bersabar ya!
      </p>
      <button
        onClick={onClose}
        className="bg-gray-700 bg-opacity-50 hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded-full transition-all"
      >
        Tutup
      </button>
    </div>
  </div>
);

interface GlassmorphismModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const GlassmorphismModal: FC<GlassmorphismModalProps> = ({ title, content, onClose }) => (
    <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
        <div
            className="p-6 sm:p-8 rounded-2xl border border-white border-opacity-30 shadow-lg w-full max-w-2xl mx-auto text-white"
            style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">
                {title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed opacity-90 whitespace-pre-wrap">
                {content}
            </p>
            <div className="flex justify-center mt-6">
                <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-full font-semibold bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200"
                >
                    Tutup
                </button>
            </div>
        </div>
    </div>
);

// =====================================
// HALAMAN-HALAMAN APLIKASI
// =====================================

interface HomePageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  randomQuote: Quote;
}

const HomePage: FC<HomePageProps> = ({ activeMenu, setMode, setActiveMenu, randomQuote }) => (
  <div
    className="relative min-h-screen flex flex-col items-center justify-between p-4 sm:p-10 bg-cover bg-center text-white"
    style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
  >
    <div className="w-full flex justify-center pt-4">
      <NavMenu
        activeMenu={activeMenu}
        setMode={setMode}
        setActiveMenu={setActiveMenu}
      />
    </div>
    <div className="flex flex-col items-center text-center mt-auto mb-auto p-4 max-w-4xl">
      <h1
        className="text-4xl sm:text-6xl font-bold mb-4 text-white"
        style={{
          fontFamily: "'Playfair Display', serif",
          lineHeight: "1.2",
        }}
      >
        {randomQuote.header}
      </h1>
      <p
        className="text-md sm:text-xl font-regular mb-8 text-white opacity-90"
        style={{
          fontFamily: "'Playfair Display', serif",
          lineHeight: "1.5",
        }}
      >
        {randomQuote.subHeader}
      </p>
      <p
        className="text-lg sm:text-2xl font-semibold italic text-white opacity-80"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {randomQuote.bottomText}
      </p>
    </div>
  </div>
);

interface QuizSelectPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  activeSubMenu: ActiveTest;
  setActiveSubMenu: (submenu: ActiveTest) => void;
  startQuiz: (count: number, type: string, time: number | null) => void;
  showAlert: boolean;
  setShowAlert: (show: boolean) => void;
}

const QuizSelectPage: FC<QuizSelectPageProps> = ({
  activeMenu,
  setMode,
  setActiveMenu,
  activeSubMenu,
  setActiveSubMenu,
  startQuiz,
  showAlert,
  setShowAlert,
}) => {
  const allCards: Record<ActiveTest, { type: string; title: string; desc: string; gradient: string }[]> = {
    fundamental: [
      {
        type: "logika",
        title: "Logic",
        desc: "Analitis & Silogisme",
        gradient: "radial-gradient(circle at 30% 30%, rgba(255,150,100,0.7), transparent 70%), linear-gradient(135deg, #0d0d0f, #2b0a0a)",
      },
      {
        type: "verbal",
        title: "Verbal",
        desc: "Sinonim & Antonim",
        gradient: "radial-gradient(circle at 70% 40%, rgba(255,220,180,0.6), transparent 70%), linear-gradient(135deg, #0a0f0f, #1a1f2e)",
      },
      {
        type: "figural",
        title: "Figural",
        desc: "Pola Gambar & Rotasi",
        gradient: "radial-gradient(circle at 40% 60%, rgba(134,239,172,0.6), transparent 65%), linear-gradient(135deg, #0a0f0d, #1a3325)",
      },
      {
        type: "numerik",
        title: "Numeric",
        desc: "Matriks",
        gradient: "radial-gradient(circle at 60% 30%, rgba(248,232,166,0.6), transparent 70%), linear-gradient(135deg, #0d0a0a, #2e291a)",
      },
      {
        type: "digitsymbol",
        title: "Digit Symbol",
        desc: "Coding Cepat Simbol-Angka",
        gradient: "radial-gradient(circle at 40% 70%, rgba(180,240,230,0.5), transparent 70%), linear-gradient(135deg, #0f0a0a, #1a1f2e)",
      },
    ],
    ekonomi: [
      {
        type: "ekonomi",
        title: "Economy",
        desc: "Teori & Kebijakan Umum",
        gradient: "radial-gradient(circle at 40% 30%, rgba(196,181,253,0.6), transparent 70%), linear-gradient(135deg, #0a0a1a, #201c2e)",
      },
      {
        type: "bank",
        title: "Banking",
        desc: "Prinsip Dasar Perbankan",
        gradient: "radial-gradient(circle at 70% 50%, rgba(255,107,107,0.6), transparent 70%), linear-gradient(135deg, #0a0a0a, #1f1c2b)",
      },
      {
        type: "akuntansi",
        title: "Accounting",
        desc: "Basic - advance accounting",
        gradient: "radial-gradient(circle at 50% 60%, rgba(255,200,200,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2a1f1f)",
      },
    ],
    english: [
      {
        type: "grammar",
        title: "Grammar",
        desc: "Tenses & Struktur Kalimat",
        gradient: "radial-gradient(circle at 60% 30%, rgba(107,176,255,0.6), transparent 70%), linear-gradient(135deg, #0a0a1a, #1a2333)",
      },
      {
        type: "reading",
        title: "Reading",
        desc: "Pemahaman Teks & Inferensi",
        gradient: "radial-gradient(circle at 40% 70%, rgba(255,218,185,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2b1f1a)",
      },
      {
        type: "vocab",
        title: "Vocabulary",
        desc: "Kosakata & Idiom",
        gradient: "radial-gradient(circle at 70% 40%, rgba(255,107,107,0.6), transparent 65%), linear-gradient(135deg, #0a0a0f, #2a1a1a)",
      },
    ],
  };

  const cardsToRender = allCards[activeSubMenu] || [];

  return (
    <div
      className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
    >
      <div className="w-full flex justify-center py-4 sm:py-8">
        <NavMenu
          activeMenu={activeMenu}
          setMode={setMode}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div
        className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-6xl mx-auto my-6 flex flex-col items-center"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
        }}
      >
        <QuizSubNav
          activeTest={activeSubMenu}
          setActiveTest={setActiveSubMenu}
        />
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
      </div>
      {showAlert && <ComingSoonAlert onClose={() => setShowAlert(false)} />}
    </div>
  );
};

interface SimulationPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  startQuiz: (count: number, type: string, time: number | null) => void;
  showAlert: boolean;
  setShowAlert: (show: boolean) => void;
}

const SimulationPage: FC<SimulationPageProps> = ({
  activeMenu,
  setMode,
  setActiveMenu,
  startQuiz,
  showAlert,
  setShowAlert,
}) => {
  const simulationCards = [
    {
      type: "tpd_simulasi",
      title: "Fundament",
      desc: "50 Soal / 30 Menit",
      gradient: "radial-gradient(circle at 40% 70%, rgba(255,120,120,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2b1f1a)",
      time: 30 * 60,
      count: 50,
    },
    {
        type: "ekonomi_simulasi",
        title: "Economy",
        desc: "50 Soal / 45 Menit",
        gradient: "radial-gradient(circle at 40% 70%, rgba(180,240,230,0.5), transparent 70%), linear-gradient(135deg, #0f0a0a, #1a1f2e)",
        time: 45 * 60,
        count: 50,
    },
    {
        type: "bank_simulasi",
        title: "Banking",
        desc: "50 Soal / 45 Menit",
        gradient: "radial-gradient(circle at 40% 70%, rgba(255,210,180,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #1e293b)",
        time: 45 * 60,
        count: 50,
    },
    {
        type: "akuntansi_simulasi",
        title: "Accounting",
        desc: "50 Soal / 45 Menit",
        gradient: "radial-gradient(circle at 40% 70%, rgba(196,181,253,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #2a1f3d)",
        time: 45 * 60,
        count: 50,
    },
    {
        type: "english_simulasi",
        title: "English",
        desc: "40 Soal / 30 Menit",
        gradient: "radial-gradient(circle at 40% 70%, rgba(147,197,253,0.6), transparent 70%), linear-gradient(135deg, #0f0a0a, #1f2937)",
        time: 30 * 60,
        count: 40,
    },
  ];

  return (
    <div
      className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
    >
      <div className="w-full flex justify-center py-4 sm:py-8">
        <NavMenu
          activeMenu={activeMenu}
          setMode={setMode}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div className="flex flex-col items-center mt-4 w-full px-2 sm:px-8">
        <div
          className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-6xl mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
            {simulationCards.map((card) => (
              <QuizCard
                key={card.type}
                title={card.title}
                gradient={card.gradient}
                desc={card.desc}
                onClick={() => startQuiz(card.count, card.type, card.time)}
              />
            ))}
          </div>
        </div>
      </div>
      {showAlert && <ComingSoonAlert onClose={() => setShowAlert(false)} />}
    </div>
  );
};


interface QuizInProgressPageProps {
  questions: Question[];
  currentQuestion: number;
  selectedAnswer: string;
  showExplanation: boolean;
  timeLimit: number | null;
  timeRemaining: number | null;
  elapsedTime: number;
  currentQuizType: string;
  handleSubmitAnswer: () => void;
  handleNextQuestion: () => void;
  handleAnswerSelect: (answer: string) => void;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}

const QuizInProgressPage: FC<QuizInProgressPageProps> = ({
  questions,
  currentQuestion,
  selectedAnswer,
  showExplanation,
  timeLimit,
  timeRemaining,
  elapsedTime,
  currentQuizType,
  handleSubmitAnswer,
  handleNextQuestion,
  handleAnswerSelect,
  setMode,
  setActiveMenu,
}) => {
  const currentQ = questions[currentQuestion];
  if (!currentQ) return <div>Loading...</div>;

  const getQuizTypeDisplay = () => {
    const typeMap: Record<string, string> = {
      logika: "Fundamental - Logic",
      verbal: "Fundamental - Verbal",
      figural: "Fundamental - Figural",
      numerik: "Fundamental - Numeric",
      digitsymbol: "Fundamental - Digit Symbol",
      grammar: "English - Grammar",
      reading: "English - Reading",
      vocab: "English - Vocabulary",
      ekonomi: "Ekonomi - General",
      bank: "Perbankan",
      akuntansi: "Akuntansi",
      campuran: "TPD - Latihan Campuran",
      tpd_simulasi: "TPD - Simulasi",
      english_simulasi: "English - Simulasi",
      ekonomi_simulasi: "Ekonomi - Simulasi",
      akuntansi_simulasi: "Akuntansi - Simulasi",
      bank_simulasi: "Bank - Simulasi",
    };
    return typeMap[currentQuizType] || "Quiz";
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const renderVisuals = (question: Question) => {
    if (question.matrixData) {
      return (
        <div className="my-6 flex justify-center">
          <div className="grid grid-cols-3 gap-3 bg-white bg-opacity-10 p-4 sm:p-6 rounded-xl border border-white border-opacity-30">
            {question.matrixData.flat().map((value, index) => (
              <div
                key={index}
                className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-md sm:text-lg font-bold rounded-lg ${
                  value === "?"
                    ? "bg-[#013F23] bg-opacity-35 border border-[#013F23] text-white"
                    : "border-white border-opacity-30 bg-white bg-opacity-10 text-white"
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (question.imageUrl) {
      return (
        <div className="my-6 flex justify-center">
          <img
            src={question.imageUrl}
            alt="Visual soal"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      );
    }
    return null;
  };

  const renderOptions = (currentQ: Question) => {
    return (
      <div className="space-y-3">
        {Object.entries(currentQ.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleAnswerSelect(key)}
            disabled={showExplanation}
            className={`w-full p-3 sm:p-4 text-left rounded-xl transition-all duration-200 text-sm sm:text-base
              ${
                showExplanation && key === currentQ.correct
                  ? "bg-[#006d50] bg-opacity-80 text-white"
                  : selectedAnswer === key
                  ? "bg-black bg-opacity-50"
                  : "bg-white bg-opacity-10 border border-white border-opacity-15 hover:bg-black hover:bg-opacity-20"
              }
              ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}
            `}
            style={{
              backdropFilter: "blur(5px)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className={`font-regular text-white w-4 ${
                  selectedAnswer === key && showExplanation
                    ? key === currentQ.correct
                      ? "text-white-400"
                      : "text-white-400"
                    : "text-white"
                }`}
              >
                {key}.
              </span>
              <span className="text-white font-medium">{value}</span>
              {showExplanation &&
                (key === currentQ.correct ? (
                  <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                ) : (
                  selectedAnswer === key && (
                    <XCircle className="w-5 h-5 text-red-400 ml-auto" />
                  )
                ))}
            </div>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:py-6 sm:px-8 gap-2">
        <div
          className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-white font-regular text-sm sm:text-base w-full sm:w-auto text-center"
          style={{
            background: "rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {getQuizTypeDisplay()}
        </div>

        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-end">
          <button
            onClick={() => {
              setMode("home");
              setActiveMenu("home");
            }}
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-white font-regular transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
            style={{
              background: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Home className="w-4 h-4" />
            Home
          </button>

          <div
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
            style={{
              background: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Clock className="w-4 h-4" />
            {timeLimit ? formatTime(timeRemaining || 0) : formatTime(elapsedTime)}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div
          className="p-4 sm:p-8 rounded-2xl border border-white border-opacity-30 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4 text-white">
              <span className="text-sm sm:text-lg font-regular text-center sm:text-left">
                Soal {currentQuestion + 1} dari {questions.length}
              </span>
              <span className="text-sm sm:text-lg font-regular text-center sm:text-right">
                {currentQ.type}
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-10 rounded-full h-2 sm:h-3">
              <div
                className="bg-[#be5369] h-2 sm:h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div
            className="p-4 sm:p-8 rounded-2xl mb-6 sm:mb-8 border border-white border-opacity-5"
            style={{
              background: "#903749",
              backdropFilter: "blur(15px)",
            }}
          >
            <h2
              className="font-regular mb-4 text-white text-md sm:text-lg whitespace-pre-wrap"
            >
              {currentQ.question}
            </h2>
            {renderVisuals(currentQ)}
            <div className="mb-4 sm:mb-6">{renderOptions(currentQ)}</div>
          </div>

          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-regular text-md sm:text-lg transition-all duration-200 text-white ${
                selectedAnswer
                  ? "bg-[#6f826a] hover:scale-105"
                  : "bg-gray-700 cursor-not-allowed"
              }`}
              style={{
                background: selectedAnswer
                  ? "#903749"
                  : "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              Submit Jawaban
            </button>
          ) : (
            <div>
              <div
                className="p-4 sm:p-6 mb-4 sm:mb-6 rounded-xl text-white"
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="font-semibold text-white mb-2 sm:mb-3 text-md sm:text-lg">
                  Pembahasan:
                </h3>
                {currentQ.explanationUrl ? (
                  <img
                    src={currentQ.explanationUrl}
                    alt="Pembahasan soal"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                ) : (
                  <p className="font-regular italic text-white opacity-90 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                    {currentQ.explanation}
                  </p>
                )}
              </div>
              <button
                onClick={handleNextQuestion}
                className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-regular text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 bg-[#903749]"
                style={{
                  background: "#903749",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                {currentQuestion < questions.length - 1
                  ? "Soal Berikutnya"
                  : "Lihat Hasil Akhir"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


interface QuizResultsPageProps {
  score: number;
  questions: Question[];
  totalTime: number;
  timeLimit: number | null;
  timeRemaining: number | null;
  currentQuizType: string;
  userAnswers: Record<number, string>;
  startQuiz: (count: number, type: string, time: number | null) => void;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}


const QuizResultsPage: FC<QuizResultsPageProps> = ({
  score,
  questions,
  totalTime,
  timeLimit,
  timeRemaining,
  currentQuizType,
  userAnswers,
  startQuiz,
  setMode,
  setActiveMenu,
}) => {
  const getScoreCategory = (s: number, total: number) => {
    const percentage = total > 0 ? (s / total) * 100 : 0;
    if (percentage >= 80)
      return { category: "Sangat Baik", color: "text-green-600", icon: "🏆" };
    if (percentage >= 65)
      return { category: "Baik", color: "text-blue-600", icon: "👍" };
    if (percentage >= 50)
      return { category: "Cukup", color: "text-yellow-600", icon: "😐" };
    return { category: "Perlu Latihan", color: "text-red-600", icon: "📚" };
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const calculateTypeScore = (typeFilter: (type: string) => boolean) => {
    let correct = 0;
    let total = 0;
    questions.forEach((q, questionIndex) => {
      if (typeFilter(q.type.toLowerCase())) {
        total++;
        if (userAnswers[questionIndex] === q.correct) {
          correct++;
        }
      }
    });
    return { correct, total };
  };

  const getQuizTypeDisplay = () => {
    const typeMap: Record<string, string> = {
        logika: "Fundamental - Logic",
        verbal: "Fundamental - Verbal",
        figural: "Fundamental - Figural",
        numerik: "Fundamental - Numeric",
        digitsymbol: "Fundamental - Digit Symbol",
        grammar: "English - Grammar",
        reading: "English - Reading",
        vocab: "English - Vocabulary",
        ekonomi: "Ekonomi - General",
        bank: "Perbankan",
        akuntansi: "Akuntansi",
        campuran: "TPD - Latihan Campuran",
        tpd_simulasi: "TPD - Simulasi",
        english_simulasi: "English - Simulasi",
        ekonomi_simulasi: "Ekonomi - Simulasi",
        akuntansi_simulasi: "Akuntansi - Simulasi",
        bank_simulasi: "Bank - Simulasi",
      };
      return typeMap[currentQuizType] || "Quiz";
  };

  const { category, icon } = getScoreCategory(score, questions.length);

  let summaryData: { type: string; correct: number; total: number }[] = [];
  const typeMap: Record<string, string[]> = {
    tpd_simulasi: ["verbal", "numerik", "logika", "figural", "digitsymbol"],
    campuran: ["verbal", "numerik", "logika", "figural", "digitsymbol"],
    english_simulasi: ["grammar", "reading", "vocab"],
    ekonomi_simulasi: ["ekonomi"],
    akuntansi_simulasi: ["akuntansi"],
    bank_simulasi: ["bank"],
  };

  if (typeMap[currentQuizType]) {
    summaryData = typeMap[currentQuizType]
      .map((type) => {
        const { correct, total } = calculateTypeScore((qType) =>
          qType.toLowerCase().includes(type)
        );
        return {
          type: type.charAt(0).toUpperCase() + type.slice(1),
          correct,
          total,
        };
      })
      .filter((item) => item.total > 0);
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
    >
      <div className="w-full flex justify-center py-4 sm:py-8">
        <NavMenu
          activeMenu="quiz"
          setMode={setMode}
          setActiveMenu={setActiveMenu}
        />
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 w-full">
        <div
          className="p-4 sm:p-8 rounded-2xl border border-white border-opacity-30 shadow-lg"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-4xl sm:text-6xl mb-4">🏆</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
              Quiz Selesai!
            </h2>
            <p className="text-md sm:text-lg text-white opacity-80 mb-4 sm:mb-6">
              {getQuizTypeDisplay()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div
              className="p-4 sm:p-6 rounded-xl border border-white border-opacity-30 text-center"
              style={{
                background: "#903749",
                backdropFilter: "blur(15px)",
              }}
            >
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-yellow-400" />
              <p className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                Skor Akhir
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {score}/{questions.length}
              </p>
              <p className="text-xs sm:text-sm text-white opacity-80">
                {questions.length > 0 ? Math.round((score / questions.length) * 100) : 0}% benar
              </p>
            </div>

            <div
              className="p-4 sm:p-6 rounded-xl border border-white border-opacity-30 text-center"
              style={{
                background: "#903749",
                backdropFilter: "blur(15px)",
              }}
            >
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-blue-400" />
              <p className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                Total Waktu
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">
                {timeLimit
                  ? formatTime(timeLimit - (timeRemaining || 0))
                  : formatTime(Math.floor(totalTime / 1000))}
              </p>
              <p className="text-xs sm:text-sm text-white opacity-80">
                {timeLimit
                  ? "Waktu tersisa: " + formatTime(timeRemaining || 0)
                  : "Waktu bebas"}
              </p>
            </div>

            <div
              className="p-4 sm:p-6 rounded-xl border border-white border-opacity-30 text-center"
              style={{
                background: "#903749",
                backdropFilter: "blur(15px)",
              }}
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
              <p className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                Kategori
              </p>
              <p className="text-lg sm:text-xl font-bold text-white mb-1">
                {category}
              </p>
              <p className="text-xs sm:text-sm text-white opacity-80">
                Tingkat pencapaian
              </p>
            </div>
          </div>

          {summaryData.length > 1 && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white text-center">
                Hasil per Kategori Soal
              </h3>
              <div
                className={`grid gap-4 ${
                  summaryData.length === 3
                    ? "grid-cols-3"
                    : summaryData.length === 5
                    ? "grid-cols-2 md:grid-cols-5"
                    : summaryData.length === 4
                    ? "grid-cols-2 md:grid-cols-4"
                    : "grid-cols-2"
                }`}
              >
                {summaryData.map(({ type, total, correct }) => {
                  const percentage =
                    total > 0 ? Math.round((correct / total) * 100) : 0;
                  return (
                    <div
                      key={type}
                      className="p-3 sm:p-4 rounded-xl border border-white border-opacity-20 text-center"
                      style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <p className="font-semibold text-white text-xs sm:text-sm mb-1 sm:mb-2">
                        {type}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {correct}/{total}
                      </p>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-1.5 sm:h-2 mb-1.5 sm:mb-2">
                        <div
                          className="bg-green-400 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-white opacity-80">
                        {percentage}% benar
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setMode("home");
                setActiveMenu("home");
              }}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <Home className="w-5 h-5" />
              Kembali ke Menu
            </button>
            <button
              onClick={() => {
                const quizTypes = ["verbal", "logika", "figural", "numerik"];
                const randomType =
                  quizTypes[Math.floor(Math.random() * quizTypes.length)];
                startQuiz(15, randomType, null);
              }}
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-md sm:text-lg transition-all duration-200 text-white hover:scale-105 flex items-center justify-center gap-2"
              style={{
                background: "#903749",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <RefreshCw className="w-5 h-5" />
              Soal Baru
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


interface TipsPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}

const TipsPage: FC<TipsPageProps> = ({ activeMenu, setMode, setActiveMenu }) => {
  const tipsData: Record<string, string> = {
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

  const [modalContent, setModalContent] = useState<{title: string, content: string} | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allCards = [
    {
      title: "Panduan & Strategi",
      text: "Tips umum untuk mengelola waktu dan pola pikir.",
      contentKey: "Panduan & Strategi",
      style: {
        background: "linear-gradient(135deg, rgba(255,107,107,0.8), rgba(248,232,166,0.8))",
      },
      isExternal: false,
    },
    {
      title: "Tips Verbal",
      text: "Asah kemampuan analogi dan sinonim.",
      contentKey: "Tips Verbal",
      style: {
        background: "linear-gradient(135deg, rgba(178,240,231,0.8), rgba(107,176,255,0.8))",
      },
      isExternal: false,
    },
    {
      title: "Tips Numerik",
      text: "Pahami deret angka dan pola matriks.",
      contentKey: "Tips Numerik",
      style: {
        background: "linear-gradient(135deg, rgba(255,182,193,0.8), rgba(161,161,230,0.8))",
      },
      isExternal: false,
    },
    {
      title: "Tips Figural",
      text: "Latih mata untuk rotasi dan cerminan.",
      contentKey: "Tips Figural",
      style: {
        background: "linear-gradient(135deg, rgba(255,218,185,0.8), rgba(255,176,176,0.8))",
      },
      isExternal: false,
    },
    {
      title: "Tips Logic",
      text: "Asah kemampuan penalaran dan silogisme.",
      contentKey: "Tips Logic",
      style: {
        background: "linear-gradient(135deg, rgba(186,230,253,0.8), rgba(147,197,253,0.8))",
      },
      isExternal: false,
    },
    {
      title: "Manifesto",
      text: "Archetype in notion.",
      contentKey: "Catatan & Panduan",
      style: {
        background: "linear-gradient(135deg, rgba(196,181,253,0.8), rgba(167,139,250,0.8))",
      },
      isExternal: true,
      link: "https://www.notion.so/Manifesto-24d039cd78ea80ab9417ceb7ee4d5bfe",
    },
    {
      title: "Koleksi Buku",
      text: "Download buku referensi dari Drive.",
      contentKey: "Koleksi Buku",
      style: {
        background: "linear-gradient(135deg, rgba(134,239,172,0.8), rgba(74,222,128,0.8))",
      },
      isExternal: true,
      link: "LINK_KE_GOOGLE_DRIVE_ANDA",
    },
    {
      title: "AI Assistant",
      text: "Tanya konsep sulit ke Gemini AI.",
      contentKey: "AI Assistant",
      style: {
        background: "linear-gradient(135deg, rgba(254,215,170,0.8), rgba(251,191,36,0.8))",
      },
      isExternal: true,
      link: "https://gemini.google.com/",
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % allCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + allCards.length) % allCards.length);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalCards = allCards.length;
    const maxDiff = Math.floor(totalCards / 2);

    let adjustedDiff = diff;
    if (diff > maxDiff) {
      adjustedDiff -= totalCards;
    } else if (diff < -maxDiff) {
      adjustedDiff += totalCards;
    }
    const absAdjustedDiff = Math.abs(adjustedDiff);

    const baseStyle = {
      transition: "all 0.5s ease-in-out",
      transform: `translateX(${adjustedDiff * 280}px) scale(${
        1 - absAdjustedDiff * 0.2
      })`,
      zIndex: 10 - absAdjustedDiff,
      opacity: 1 - absAdjustedDiff * 0.3,
    };

    if (absAdjustedDiff > 2) {
      return {
        ...baseStyle,
        transform: `translateX(${adjustedDiff * 350}px) scale(0.5)`,
        opacity: 0,
      };
    }
    return baseStyle;
  };

  const handleCardClick = (card: typeof allCards[0]) => {
    if (card.isExternal && card.link) {
      window.open(card.link, "_blank");
    } else {
        setModalContent({title: card.title, content: tipsData[card.contentKey]});
        setShowModal(true);
    }
  };

  return (
    <div
      className="relative min-h-screen p-4 sm:p-10 bg-cover bg-center text-white flex flex-col items-center"
      style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
    >
      <div className="w-full flex justify-center py-4 sm:py-8">
        <NavMenu
          activeMenu={activeMenu}
          setMode={setMode}
          setActiveMenu={setActiveMenu}
        />
      </div>

      <div className="flex flex-col items-center text-center mt-10 w-full px-2 sm:px-8">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">Tips & Strategi</h1>
        <p className="text-lg sm:text-2xl font-light opacity-90 mb-16">
          Tingkatkan performa Anda dengan panduan terbaik.
        </p>

        <div className="relative w-full max-w-7xl mx-auto">
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center items-center h-96 overflow-hidden relative">
            {allCards.map((card, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(card)}
                className="absolute w-56 h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
                style={{
                  ...card.style,
                  ...getCardStyle(index),
                }}
              >
                <div
                  className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6"
                  style={{ backdropFilter: "blur(5px)" }}
                >
                  <h2 className="text-xl font-semibold mb-3 leading-tight text-white">
                    {card.title}
                  </h2>
                  <p className="text-sm opacity-90 text-white">{card.text}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {allCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white bg-opacity-30 hover:bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && modalContent && (
        <GlassmorphismModal
          title={modalContent.title}
          content={modalContent.content}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

// =====================================
// KOMPONEN UTAMA APP.tsx
// =====================================

const App = () => {
    const [mode, setMode] = useState<Mode>("home");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [showExplanation, setShowExplanation] = useState(false);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [timeLimit, setTimeLimit] = useState<number | null>(null);
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [randomQuote, setRandomQuote] = useState<Quote>({ header: '', subHeader: '', bottomText: '' });
    const [activeMenu, setActiveMenu] = useState<Mode>("home");
    const [activeSubMenu, setActiveSubMenu] = useState<ActiveTest>("fundamental");
    const [currentQuizType, setCurrentQuizType] = useState("");
    const [showAlert, setShowAlert] = useState(false);
  
    useEffect(() => {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      setRandomQuote(quote);
  
      let timer: NodeJS.Timeout;
      if (mode === "quizInProgress" && !quizCompleted) {
        timer = setInterval(() => {
          setElapsedTime((prev) => prev + 1);
          if (timeLimit && timeRemaining !== null && timeRemaining > 0) {
            setTimeRemaining((prev) => {
              if (prev !== null && prev <= 1) {
                setMode("quizResults");
                setQuizCompleted(true);
                return 0;
              }
              return prev !== null ? prev - 1 : 0;
            });
          }
        }, 1000);
      }
  
      return () => clearInterval(timer);
    }, [mode, quizCompleted, timeLimit, timeRemaining]);
  
    const generateQuestions = (count: number, quizType: string): Question[] => {
      let sourceQuestions: Question[] = [];
      const questionBankMapping: Record<string, Question[]> = {
        verbal: questionBank.verbal || [],
        logika: questionBank.logical || [],
        figural: questionBank.figural || [],
        numerik: questionBank.numerik || [],
        digitsymbol: questionBank.digitsymbol || [],
        grammar: questionBank.grammar || [],
        reading: questionBank.reading || [],
        vocab: questionBank.vocab || [],
        ekonomi: questionBank.ekonomi || [],
        bank: questionBank.bank || [],
        akuntansi: questionBank.akuntansi || [],
        campuran: [
          ...(questionBank.verbal || []),
          ...(questionBank.logical || []),
          ...(questionBank.figural || []),
          ...(questionBank.numerik || []),
          ...(questionBank.digitsymbol || []),
        ],
        tpd_simulasi: [
          ...(questionBank.verbal || []),
          ...(questionBank.logical || []),
          ...(questionBank.figural || []),
          ...(questionBank.numerik || []),
          ...(questionBank.digitsymbol || []),
        ],
        english_simulasi: [
          ...(questionBank.grammar || []),
          ...(questionBank.reading || []),
          ...(questionBank.vocab || []),
        ],
        ekonomi_simulasi: questionBank.ekonomi || [],
        akuntansi_simulasi: questionBank.akuntansi || [],
        bank_simulasi: questionBank.bank || [],
      };
  
      sourceQuestions = questionBankMapping[quizType] || [];
  
      if (sourceQuestions.length === 0) {
        console.error("Tipe kuis tidak dikenal atau bank soal kosong:", quizType);
        return [];
      }
  
      const shuffledQuestions = [...sourceQuestions].sort(
        () => Math.random() - 0.5
      );
  
      const selectedQuestions = [];
      for (let i = 0; i < count; i++) {
        selectedQuestions.push(shuffledQuestions[i % shuffledQuestions.length]);
      }
  
      return selectedQuestions;
    };
  
    const startQuiz = (count: number, quizType: string, time: number | null) => {
      const newQuestions = generateQuestions(count, quizType);
      setQuestions(newQuestions);
      setMode("quizInProgress");
      setStartTime(Date.now());
      setTimeLimit(time);
      setTimeRemaining(time);
      setElapsedTime(0);
      setCurrentQuizType(quizType);
      resetQuizState();
    };
  
    const resetQuizState = () => {
      setCurrentQuestion(0);
      setSelectedAnswer("");
      setShowExplanation(false);
      setUserAnswers({});
      setQuizCompleted(false);
    };
  
    const handleAnswerSelect = (answer: string) => {
      setSelectedAnswer(answer);
    };
  
    const handleSubmitAnswer = () => {
      if (!selectedAnswer) return;
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion]: selectedAnswer,
      }));
      setShowExplanation(true);
    };
  
    const handleNextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer("");
        setShowExplanation(false);
      } else {
        setQuizCompleted(true);
        setMode("quizResults");
      }
    };
  
    const calculateScore = () => {
      let correct = 0;
      questions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
          correct++;
        }
      });
      return correct;
    };
  
    const totalScore = calculateScore();
    const totalTime = startTime ? Date.now() - startTime : 0;
  
    switch (mode) {
      case "home":
        return (
          <HomePage
            activeMenu={activeMenu}
            setMode={setMode}
            setActiveMenu={setActiveMenu}
            randomQuote={randomQuote}
          />
        );
      case "quiz":
        return (
          <QuizSelectPage
            activeMenu={activeMenu}
            setMode={setMode}
            setActiveMenu={setActiveMenu}
            activeSubMenu={activeSubMenu}
            setActiveSubMenu={setActiveSubMenu}
            startQuiz={startQuiz}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
        );
      case "simulasi":
        return (
          <SimulationPage
            activeMenu={activeMenu}
            setMode={setMode}
            setActiveMenu={setActiveMenu}
            startQuiz={startQuiz}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
        );
      case "quizInProgress":
        return (
          <QuizInProgressPage
            questions={questions}
            currentQuestion={currentQuestion}
            selectedAnswer={selectedAnswer}
            showExplanation={showExplanation}
            timeLimit={timeLimit}
            timeRemaining={timeRemaining}
            elapsedTime={elapsedTime}
            currentQuizType={currentQuizType}
            handleSubmitAnswer={handleSubmitAnswer}
            handleNextQuestion={handleNextQuestion}
            handleAnswerSelect={handleAnswerSelect}
            setMode={setMode}
            setActiveMenu={setActiveMenu}
          />
        );
      case "quizResults":
        return (
          <QuizResultsPage
            score={totalScore}
            questions={questions}
            totalTime={totalTime}
            timeLimit={timeLimit}
            timeRemaining={timeRemaining}
            currentQuizType={currentQuizType}
            userAnswers={userAnswers}
            startQuiz={startQuiz}
            setMode={setMode}
            setActiveMenu={setActiveMenu}
          />
        );
      case "tips":
        return (
          <TipsPage
            activeMenu={activeMenu}
            setMode={setMode}
            setActiveMenu={setActiveMenu}
          />
        );
      default:
        return <div>Mode tidak dikenal.</div>;
    }
  };
  
  export default App;