import { useState, useEffect, useMemo, lazy, Suspense, useCallback, Dispatch } from 'react';
import { allQuestions } from './data/questionBank'; // Asumsi: Import bank soal utama
import { quotes as allQuotes } from './pages/quoteData'; // Asumsi: Import data quotes
import { Loader2 } from 'lucide-react'; // Import ikon loading

// --- INTERFACE (TIPE DATA) ---
export type Mode = 'home' | 'quizSelect' | 'quizInProgress' | 'quizResults' | 'tips' | 'simulasi';
export type ActiveMenu = 'home' | 'quiz' | 'tips' | 'simulasi';

export interface Question {
  question: string;
  type: string;
  options: Record<string, string>;
  correct: string;
  explanation?: string;
  imageUrl?: string;
  explanationUrl?: string;
  matrixData?: (string | number)[][];
}

// --- LAZY LOADING COMPONENTS ---
// Memperbaiki impor TipsPage yang sebelumnya error karena huruf kecil/besar.
const HomePage = lazy(() => import('./pages/HomePage'));
const QuizSelectPage = lazy(() => import('./pages/QuizSelectPage'));
const QuizInProgressPage = lazy(() => import('./pages/QuizInProgressPage'));
const QuizResultsPage = lazy(() => import('./pages/QuizResultsPage'));
const TipsPage = lazy(() => import('./pages/TipsPage'));
const SimulationPage = lazy(() => import('./pages/SimulationPage'));

// --- KOMPONEN UTAMA APP ---
function App() {
  // --- STATE MANAGEMENT ---
  const [mode, setMode] = useState<Mode>('home');
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>('home');

  // Quiz State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({}); // {index: answer}
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentQuizType, setCurrentQuizType] = useState('verbal');
  
  // Timer State
  const [timeLimit, setTimeLimit] = useState<number | null>(null); // Limit dalam detik
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null); // Sisa waktu
  const [elapsedTime, setElapsedTime] = useState(0); // Waktu berlalu (untuk mode non-timer)
  const [startTime, setStartTime] = useState<number | null>(null); // Unix timestamp saat kuis dimulai

  // Home State
  const [quotes, setQuotes] = useState<string[]>(allQuotes);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Status Alert (Dihapus dari SimulationPage props)
  // const [showAlert, setShowAlert] = useState(false); 


  // --- HELPER FUNCTIONS ---

  // Helper untuk mendapatkan bank soal sesuai tipe
  const getQuestionsByType = useCallback((type: string, count: number): Question[] => {
    const filteredQuestions = allQuestions.filter(q => q.type.toLowerCase().startsWith(type));
    
    // Acak dan ambil sejumlah 'count' soal
    const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, []);

  // Hitung skor kuis saat ini
  const calculateScore = useCallback((): number => {
    let score = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correct) {
        score++;
      }
    });
    return score;
  }, [questions, userAnswers]);

  // Tentukan kategori skor (untuk QuizResultsPage)
  const getScoreCategory = useCallback((score: number, total: number) => {
    const percentage = (score / total) * 100;

    if (percentage >= 90) return { category: 'Cemerlang', icon: '🌟' };
    if (percentage >= 80) return { category: 'Sangat Baik', icon: '🔥' };
    if (percentage >= 65) return { category: 'Baik', icon: '👍' };
    if (percentage >= 50) return { category: 'Cukup', icon: '🧐' };
    return { category: 'Perlu Latihan', icon: '💪' };
  }, []);


  // --- LOGIKA UTAMA QUIZ ---

  // Memulai kuis
  const startQuiz = useCallback((count: number, quizType: string, time: number | null) => {
    const newQuestions = getQuestionsByType(quizType, count);
    
    // Reset semua state quiz
    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setUserAnswers({});
    setSelectedAnswer('');
    setShowExplanation(false);
    setCurrentQuizType(quizType);
    
    // Timer setup
    setTimeLimit(time);
    setTimeRemaining(time);
    setElapsedTime(0);
    setStartTime(Date.now());

    // Pindah mode
    setMode('quizInProgress');
    setActiveMenu('quiz');
  }, [getQuestionsByType]);

  // Memilih jawaban
  const handleAnswerSelect = useCallback((answer: string) => {
    if (!showExplanation) {
      setSelectedAnswer(answer);
    }
  }, [showExplanation]);

  // Mengirim jawaban (Submit)
  const handleSubmitAnswer = useCallback(() => {
    if (selectedAnswer) {
      setUserAnswers(prev => ({ ...prev, [currentQuestion]: selectedAnswer }));
      setShowExplanation(true);
    }
  }, [selectedAnswer, currentQuestion]);

  // Lanjut ke soal berikutnya atau hasil
  const handleNextQuestion = useCallback(() => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(userAnswers[nextQuestion] || ''); // Isi jawaban jika sudah pernah dijawab
      setShowExplanation(false);
    } else {
      // Selesai kuis, pindah ke halaman hasil
      setMode('quizResults');
      setTimeRemaining(null); // Stop timer display
    }
  }, [currentQuestion, questions.length, userAnswers]);

  // --- LOGIKA TIMER ---
  useEffect(() => {
    let interval: number | null = null;

    if (mode === 'quizInProgress') {
      if (timeLimit !== null) {
        // Mode Time Limit (menghitung mundur)
        if (timeRemaining !== null && timeRemaining > 0) {
          interval = setInterval(() => {
            setTimeRemaining(prev => (prev !== null ? prev - 1 : 0));
          }, 1000) as unknown as number;
        } else if (timeRemaining !== null && timeRemaining <= 0) {
          // Waktu habis, pindah ke hasil
          clearInterval(interval as number);
          setMode('quizResults');
          setTimeRemaining(0);
        }
      } else {
        // Mode Non-Time Limit (menghitung maju)
        interval = setInterval(() => {
          setElapsedTime(prev => prev + 1);
        }, 1000) as unknown as number;
      }
    }

    return () => {
      if (interval !== null) {
        clearInterval(interval);
      }
    };
  }, [mode, timeLimit, timeRemaining]);
  
  // --- LOGIKA LAIN (Quotes di Home) ---
  useEffect(() => {
    if (mode === 'home') {
      const quoteInterval = setInterval(() => {
        setQuoteIndex(prev => (prev + 1) % quotes.length);
      }, 10000) as unknown as number; // Ganti quote setiap 10 detik

      return () => clearInterval(quoteInterval);
    }
  }, [mode, quotes.length]);


  // --- RENDER UTAMA ---
  const renderContent = useMemo(() => {
    switch (mode) {
      case 'home':
        return (
          <HomePage
            setMode={setMode}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            currentQuote={quotes[quoteIndex] || "Semangat pagi!"}
            startQuiz={startQuiz}
          />
        );
      case 'quizSelect':
        return (
          <QuizSelectPage
            setMode={setMode}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            startQuiz={startQuiz}
          />
        );
      case 'tips':
        return (
          <TipsPage
            setMode={setMode}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        );
      case 'simulasi':
        return (
          <SimulationPage
            setMode={setMode}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            startQuiz={startQuiz}
            // showAlert={showAlert} // Dihapus karena komponen tidak ditemukan
            // setShowAlert={setShowAlert} // Dihapus karena komponen tidak ditemukan
          />
        );
      case 'quizInProgress':
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
      case 'quizResults':
        // FIX: Hanya mengirim props yang didefinisikan di QuizResultsPageProps
        return (
          <QuizResultsPage
            questions={questions}
            userAnswers={userAnswers}
            currentQuizType={currentQuizType}
            timeLimit={timeLimit}
            timeRemaining={timeRemaining}
            startTime={startTime}
            calculateScore={calculateScore} // Kirim fungsi helper
            getScoreCategory={getScoreCategory} // Kirim fungsi helper
            startQuiz={startQuiz}
            setMode={setMode}
            setActiveMenu={setActiveMenu}
          />
        );
      default:
        return <div>Mode tidak dikenal.</div>;
    }
  }, [
    mode, 
    activeMenu, 
    quotes, 
    quoteIndex, 
    startQuiz, 
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
    userAnswers, 
    startTime, 
    calculateScore, 
    getScoreCategory,
    // showAlert, 
    // setShowAlert 
  ]);

  return (
    <Suspense 
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/background1.jpeg')" }}>
          <Loader2 className="animate-spin w-10 h-10 text-white" />
        </div>
      }
    >
      {renderContent}
    </Suspense>
  );
}

export default App;