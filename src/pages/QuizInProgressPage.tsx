import { FC, useEffect } from 'react';
import { Question, Mode } from '../App';
import { Loader2, Home, Clock } from 'lucide-react'; 

// Props interface harus sesuai dengan yang dilewatkan dari App.tsx
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
  
  if (!currentQ) return <div className="text-white text-center p-10">Soal tidak ditemukan.</div>;
  
  // Dapatkan kunci opsi untuk logika keyboard
  const optionsKeys = Object.keys(currentQ.options);
  const isAnswerSelected = !!selectedAnswer;

  // --- LOGIKA KEYBOARD INPUT (PRESERVED) ---
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Abaikan jika tombol ditekan terus-menerus
      if (event.repeat) return;
      
      const key = event.key; // Key asli (misalnya 'a' atau 'A' atau 'Enter')

      // Mencari kunci opsi yang cocok (A/B/C/D/E atau a/b/c/d/e)
      const inputKey = optionsKeys.find(k => k.toUpperCase() === key.toUpperCase());

      // 1. Pilih Jawaban (Tombol A, B, C, D, E)
      if (inputKey && !showExplanation) {
        event.preventDefault(); 
        handleAnswerSelect(inputKey); 
        return; 
      }
      
      // 2. Submit / Next (Tombol Enter)
      if (key === 'Enter') {
        event.preventDefault(); 
        
        if (showExplanation) {
          handleNextQuestion();
        } else if (isAnswerSelected) {
          handleSubmitAnswer();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [optionsKeys, showExplanation, isAnswerSelected, handleAnswerSelect, handleSubmitAnswer, handleNextQuestion]);
  // --- AKHIR LOGIKA KEYBOARD INPUT ---

  // Helper untuk memformat waktu
  const formatTime = (seconds: number | null) => {
    if (seconds === null) return <Loader2 className="animate-spin w-4 h-4 inline" />;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Helper untuk menampilkan tipe kuis
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
      expression: "English - Expression",
      structure: "English - Structure",
      ekonomi: "Ekonomi - General",
      bank: "Perbankan",
      akuntansi: "Akuntansi",
      campuran: "TPD - Latihan Campuran",
      tpd_simulasi: "TPD - Simulasi",
      english_simulasi: "English - Simulasi",
      ekonomi_simulasi: "Ekonomi - Simulasi",
      akuntansi_simulasi: "Akuntansi - Simulasi",
      bank_simulasi: "Bank - Simulasi",
      central_bank: "Central Bank",
    };
    return typeMap[currentQuizType] || "Quiz";
  };
  
  // Helper untuk merender visual (Image/Matrix)
  const renderVisuals = (q: typeof currentQ) => {
    if (q.imageUrl) {
        return <img src={q.imageUrl} alt="Soal Visual" className="mx-auto my-4 max-h-60 sm:max-h-80 object-contain rounded-lg border border-white/10 p-2 bg-white/5" />;
    }
    
    if (q.matrixData) {
        return (
            <table className="w-full border-collapse border border-white my-4 text-center">
                <tbody>
                    {q.matrixData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border border-white p-2 text-sm sm:text-base">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return null;
  };
  
  // Helper untuk merender opsi jawaban
  const renderOptions = (q: typeof currentQ) => {
      const optionsKeys = Object.keys(q.options);
      
      return optionsKeys.map((key) => {
          const displayKey = key.toUpperCase(); 

          const isCorrect = showExplanation && key === q.correct;
          const isIncorrect = showExplanation && key === selectedAnswer && key !== q.correct;
          const isSelected = key === selectedAnswer;

          // Base classes for the button
          let className = "w-full p-3 mb-3 rounded-xl text-left transition-all duration-300 border font-regular text-sm sm:text-base cursor-pointer";
          let style: React.CSSProperties = {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
          };
          
          if (showExplanation) {
              if (isCorrect) {
                  // Style untuk Jawaban Benar
                  className += " bg-green-700 border-green-500 font-semibold";
                  style = { backgroundColor: '#38A169', borderColor: '#38A169', color: 'white' }; 
              } else if (isIncorrect) {
                  // Style untuk Jawaban Salah Pilihan User
                  className += " bg-red-700 border-red-500 font-semibold line-through opacity-70";
                  style = { backgroundColor: '#E53E3E', borderColor: '#E53E3E', color: 'white' };
              } else {
                  // Style untuk Opsi Lain saat Penjelasan muncul
                  className += " opacity-50";
                  style = { backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)', color: 'white' };
              }
          } else {
              // Style saat Quiz masih berjalan
              className += isSelected 
                ? " bg-white bg-opacity-20 border-white font-semibold" 
                : " hover:bg-white hover:bg-opacity-10";
              style = { 
                  backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)', 
                  borderColor: isSelected ? 'white' : 'rgba(255, 255, 255, 0.3)', 
                  color: 'white' 
              };
          }
          
          return (
              <button
                key={key}
                onClick={() => handleAnswerSelect(key)}
                className={className}
                disabled={showExplanation}
                style={style}
              >
                <span className="font-bold mr-2">{displayKey}.</span> {q.options[key]}
              </button>
          );
      });
  };

  // JSX structure as provided by the user
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
    >
      {/* Header Baru */}
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
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-white font-regular transition-all duration-200 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base hover:bg-white/10"
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
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                timeLimit !== null && timeRemaining !== null && timeRemaining <= 60 ? "text-red-400 animate-pulse" : ""
            }`}
            style={{
              background: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Clock className="w-4 h-4" />
            {/* Display time remaining if timed, otherwise elapsed time */}
            {timeLimit ? formatTime(timeRemaining) : formatTime(elapsedTime)}
          </div>
        </div>
      </div>

      {/* Konten Utama Quiz */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full flex-grow pb-8">
        <div
          className="p-4 sm:p-8 rounded-2xl border border-white border-opacity-30 shadow-lg min-h-full"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4 text-white">
              <span className="text-sm sm:text-lg font-regular text-center sm:text-left">
                Soal {currentQuestion + 1} dari {questions.length}
              </span>
              {/* Menampilkan sub-tipe pertanyaan (misal: Silogisme, Persamaan Akuntansi) */}
              <span className="text-sm sm:text-lg font-regular text-center sm:text-right">
                {currentQ.type.includes(" - ") 
                    ? currentQ.type.split(" - ").slice(1).join(" - ")
                    : currentQ.type}
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-10 rounded-full h-2 sm:h-3">
              <div
                className="bg-[#be5369] h-2 sm:h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    ((currentQuestion + 1) / questions.length) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          {/* Kotak Soal dan Opsi */}
          <div
            className="p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 border border-white border-opacity-5"
            style={{
              background: "#903749",
              backdropFilter: "blur(15px)",
            }}
          >
            <h2 className="font-regular mb-4 text-white text-md sm:text-lg whitespace-pre-wrap">
              {currentQ.question}
            </h2>
            {renderVisuals(currentQ)}
            <div className="mb-4 sm:mb-6 flex flex-col">{renderOptions(currentQ)}</div>
          </div>

          {/* Tombol Aksi */}
          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-regular text-md sm:text-lg transition-all duration-200 text-white ${
                selectedAnswer
                  ? "bg-[#6f826a] hover:scale-[1.02]"
                  : "bg-gray-700 cursor-not-allowed"
              }`}
              style={{
                background: selectedAnswer
                  ? "#903749"
                  : "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              Submit Jawaban
            </button>
          ) : (
            <div>
              {/* Pembahasan */}
              <div
                className="p-4 sm:p-6 mb-4 sm:mb-6 rounded-xl text-white"
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3 className="font-semibold text-white mb-2 sm:mb-3 text-md sm:text-lg">
                  💡 Pembahasan:
                </h3>
                {currentQ.explanationUrl ? (
                  <img
                    src={currentQ.explanationUrl}
                    alt="Pembahasan soal"
                    className="max-w-full h-auto rounded-lg shadow-md mx-auto"
                  />
                ) : (
                  <p className="font-regular italic text-white opacity-90 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                    {currentQ.explanation}
                  </p>
                )}
              </div>
              {/* Tombol Next */}
              <button
                onClick={handleNextQuestion}
                className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-regular text-md sm:text-lg transition-all duration-200 text-white hover:scale-[1.02]"
                style={{
                  background: "#903749",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                {currentQuestion < questions.length - 1
                  ? "Soal Berikutnya (ENTER)"
                  : "Lihat Hasil Akhir (ENTER)"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizInProgressPage;