import { useState, useEffect, FC, lazy, Suspense } from "react";
import questionBank from "./data/questionBank/index";
import quotes from "./pages/quoteData";

// Tipe Global
export interface Question {
  type: string;
  question: string;
  imageUrl?: string;
  matrixData?: (string | number)[][];
  options: Record<string, any>;
  correct: string;
  explanation?: string;
  explanationUrl?: string;
}

export type Mode = "home" | "quiz" | "simulasi" | "tips" | "quizInProgress" | "quizResults";
export type ActiveTest = "fundamental" | "ekonomi" | "english" | "perbankan";

// Dynamic Imports untuk Code-Splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const QuizSelectPage = lazy(() => import('./pages/QuizSelectPage'));
const SimulationPage = lazy(() => import('./pages/SimulationPage'));
const TipsPage = lazy(() => import('./pages/TipsPage'));
const QuizInProgressPage = lazy(() => import('./pages/QuizInProgressPage'));
const QuizResultsPage = lazy(() => import('./pages/QuizResultsPage'));

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen w-screen bg-transparent">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
    </div>
);

const App: FC = () => {
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
    const [randomQuote, setRandomQuote] = useState(quotes[0]);
    const [activeMenu, setActiveMenu] = useState<Mode>("home");
    const [activeSubMenu, setActiveSubMenu] = useState<ActiveTest>("fundamental");
    const [currentQuizType, setCurrentQuizType] = useState("");
    const [showAlert, setShowAlert] = useState(false);
  
    useEffect(() => {
      setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
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
      const questionMap: Record<string, any[]> = {
        ...questionBank,
        campuran: [
            ...(questionBank.verbal || []), ...questionBank.logical, ...questionBank.figural, 
            ...questionBank.numerik, ...questionBank.digitsymbol
        ],
        tpd_simulasi: [
            ...(questionBank.verbal || []), ...questionBank.logical, ...questionBank.figural, 
            ...questionBank.numerik, ...questionBank.digitsymbol
        ],
        english_simulasi: [
            ...(questionBank.grammar || []), ...questionBank.reading, ...questionBank.vocab
        ],
        central_bank: [
            ...(questionBank.Modul1 || []), ...(questionBank.Modul2 || []), ...(questionBank.Modul3 || []),
            ...(questionBank.Modul4 || []), ...(questionBank.Modul5 || []), ...(questionBank.Modul6 || []), ...(questionBank.Modul7 || []), 
        ],
        ekonomi_simulasi: questionBank.ekonomi,
        akuntansi_simulasi: questionBank.akuntansi,
        bank_simulasi: questionBank.bank,
      };
      const source = questionMap[quizType] || [];
      const shuffled = [...source].sort(() => 0.5 - Math.random());
      return Array.from({ length: count }, (_, i) => shuffled[i % shuffled.length]);
    };
  
    const startQuiz = (count: number, quizType: string, time: number | null) => {
      setQuestions(generateQuestions(count, quizType));
      setMode("quizInProgress");
      setStartTime(Date.now());
      setTimeLimit(time);
      setTimeRemaining(time);
      setElapsedTime(0);
      setCurrentQuizType(quizType);
      setCurrentQuestion(0);
      setSelectedAnswer("");
      setShowExplanation(false);
      setUserAnswers({});
      setQuizCompleted(false);
    };
  
    const handleAnswerSelect = (answer: string) => setSelectedAnswer(answer);
  
    const handleSubmitAnswer = () => {
      if (!selectedAnswer) return;
      setUserAnswers((prev) => ({ ...prev, [currentQuestion]: selectedAnswer }));
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
        return questions.reduce((acc, q, index) => 
            userAnswers[index] === q.correct ? acc + 1 : acc, 0);
    };
    
    // FIX: Tambahkan fungsi ini untuk memenuhi QuizResultsPageProps
    const getScoreCategory = (score: number, total: number) => {
      const percentage = total > 0 ? (score / total) : 0;
      if (percentage >= 0.85) {
          return { category: "Excellent", icon: "🚀" };
      } else if (percentage >= 0.65) {
          return { category: "Good", icon: "⭐" };
      } else if (percentage >= 0.5) {
          return { category: "Fair", icon: "✅" };
      } else {
          return { category: "Needs Practice", icon: "⚠️" };
      }
    };

    const pageProps = {
        activeMenu, setMode, setActiveMenu,
    };

    const renderPage = () => {
      switch (mode) {
        case "home":
          return <HomePage {...pageProps} randomQuote={randomQuote} />;
        case "quiz":
          return <QuizSelectPage {...pageProps} activeSubMenu={activeSubMenu} setActiveSubMenu={setActiveSubMenu} startQuiz={startQuiz} showAlert={showAlert} setShowAlert={setShowAlert} />;
        case "simulasi":
          // FIX: Hapus props showAlert dan setShowAlert yang tidak didefinisikan di SimulationPage
          return <SimulationPage {...pageProps} startQuiz={startQuiz} />;
        case "tips":
          return <TipsPage {...pageProps} />;
        case "quizInProgress":
          return <QuizInProgressPage questions={questions} currentQuestion={currentQuestion} selectedAnswer={selectedAnswer} showExplanation={showExplanation} timeLimit={timeLimit} timeRemaining={timeRemaining} elapsedTime={elapsedTime} currentQuizType={currentQuizType} handleSubmitAnswer={handleSubmitAnswer} handleNextQuestion={handleNextQuestion} handleAnswerSelect={handleAnswerSelect} setMode={setMode} setActiveMenu={setActiveMenu} />;
        case "quizResults":
          // FIX: Kirim fungsi getScoreCategory
          return <QuizResultsPage 
              questions={questions} 
              timeLimit={timeLimit} 
              timeRemaining={timeRemaining} 
              currentQuizType={currentQuizType} 
              userAnswers={userAnswers} 
              startQuiz={startQuiz} 
              setMode={setMode} 
              setActiveMenu={setActiveMenu} 
              // Kirim fungsi dan state mentah
              calculateScore={calculateScore} 
              startTime={startTime}
              getScoreCategory={getScoreCategory} // <-- ADDED
          />;
        default:
          return <HomePage {...pageProps} randomQuote={randomQuote} />;
      }
    }

    return (
        <Suspense fallback={<LoadingSpinner />}>
            {renderPage()}
        </Suspense>
    );
};

export default App;