import { FC, useEffect } from 'react';
import { Question, Mode } from '../App';
import NavMenu from '../components/UI/NavMenu';
import { Loader2 } from 'lucide-react'; // Import untuk spinner loading

// Props harus sesuai dengan apa yang diteruskan dari App.tsx
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
  // @ts-ignore
  elapsedTime, 
  // @ts-ignore
  currentQuizType,
  handleSubmitAnswer,
  handleNextQuestion,
  handleAnswerSelect,
  setMode,
  setActiveMenu,
}) => {
  const currentQ = questions[currentQuestion];
  if (!currentQ) return <div className="text-white text-center p-10">Soal tidak ditemukan.</div>;
  
  // Dapatkan kunci opsi yang sebenarnya (misalnya: ['a', 'b', 'c', 'd', 'e'] atau ['A', 'B', 'C', 'D', 'E'])
  const optionsKeys = Object.keys(currentQ.options);
  const isAnswerSelected = !!selectedAnswer;

  // --- LOGIKA KEYBOARD INPUT (REVISI UNTUK CASE SENSITIVITY) ---
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Abaikan jika tombol ditekan terus-menerus
      if (event.repeat) return;
      
      const key = event.key; // Key asli (misalnya 'a' atau 'A' atau 'Enter')

      // Mencari kunci opsi yang cocok (A/B/C/D/E atau a/b/c/d/e)
      // Menggunakan toUpperCase() untuk membandingkan input keyboard dengan kunci opsi secara case-insensitive
      const inputKey = optionsKeys.find(k => k.toUpperCase() === key.toUpperCase());

      // 1. Pilih Jawaban (Tombol A, B, C, D, E)
      if (inputKey && !showExplanation) {
        // Mencegah default action (misalnya scrolling)
        event.preventDefault(); 
        // Lakukan pemilihan jawaban menggunakan key yang sesuai case-nya (inputKey)
        handleAnswerSelect(inputKey); 
        return; 
      }
      
      // 2. Submit / Next (Tombol Enter)
      if (key === 'Enter') {
        event.preventDefault(); 
        
        if (showExplanation) {
          // Jika penjelasan sudah tampil, maka pindah ke soal berikutnya
          handleNextQuestion();
        } else if (isAnswerSelected) {
          // Jika jawaban sudah dipilih tapi belum disubmit, maka submit
          handleSubmitAnswer();
        }
      }
    };

    // Tambahkan event listener saat komponen mount
    window.addEventListener('keydown', handleKeyDown);

    // Hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [optionsKeys, showExplanation, isAnswerSelected, handleAnswerSelect, handleSubmitAnswer, handleNextQuestion]);
  // --- AKHIR LOGIKA KEYBOARD INPUT ---

  // Fungsi untuk merender opsi jawaban
  const renderOptions = () => {
    return optionsKeys.map((key) => {
      // Pastikan huruf opsi untuk tampilan (misalnya A. B. C.) adalah huruf besar
      const displayKey = key.toUpperCase(); 

      const isCorrect = showExplanation && key === currentQ.correct;
      const isIncorrect = showExplanation && key === selectedAnswer && key !== currentQ.correct;
      const isSelected = key === selectedAnswer;

      let className = "p-4 rounded-xl border border-white border-opacity-30 mb-3 text-left transition-all duration-300 cursor-pointer";
      
      if (showExplanation) {
        if (isCorrect) {
          className += " bg-green-700 bg-opacity-70 border-green-500 text-white font-bold";
        } else if (isIncorrect) {
          className += " bg-red-700 bg-opacity-70 border-red-500 text-white font-bold line-through";
        } else {
          className += " opacity-50";
        }
      } else {
        className += isSelected 
          ? " bg-secondary-accent border-yellow-500 text-primary-brand font-bold" 
          : " hover:bg-white hover:bg-opacity-10";
      }

      return (
        <button
          key={key}
          onClick={() => handleAnswerSelect(key)}
          className={className}
          disabled={showExplanation}
        >
          {/* Menampilkan huruf opsi (A, B, C, D, E) */}
          <span className="font-bold mr-2">{displayKey}.</span> {currentQ.options[key]}
        </button>
      );
    });
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/background1.jpeg')" }}>
        <div className="w-full flex justify-center py-4 sm:py-8">
            <NavMenu activeMenu={"quiz"} setMode={setMode} setActiveMenu={setActiveMenu} />
        </div>
        
        <div className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-4xl mx-auto my-6 flex flex-col items-center" style={{ background: "rgba(208, 6, 137, 0.53)", backdropFilter: "blur(10px)" }}>
            
            {/* Header / Progress Bar */}
            <div className="w-full mb-6">
                <div className="flex justify-between items-center text-lg font-semibold mb-2">
                    <p>Soal {currentQuestion + 1} dari {questions.length}</p>
                    {timeLimit !== null && (
                        <p className={timeRemaining !== null && timeRemaining <= 60 ? "text-red-400 animate-pulse" : ""}>
                            Waktu: {timeRemaining !== null ? formatTime(timeRemaining) : <Loader2 className="animate-spin h-5 w-5 inline" />}
                        </p>
                    )}
                </div>
                <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-secondary-accent transition-all duration-500"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Konten Soal */}
            <div className="w-full bg-black bg-opacity-20 p-5 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-4">{currentQ.type}</h3>
                <p className="text-lg mb-4 whitespace-pre-wrap">{currentQ.question}</p>
                
                {/* Assuming imageUrl is used for figural questions/images */}
                {currentQ.imageUrl && <img src={currentQ.imageUrl} alt="Soal Figural" className="mx-auto my-4 max-h-60 sm:max-h-80 object-contain" />}
                
                {/* Assuming matrixData is used for specific question types */}
                {currentQ.matrixData && (
                    <table className="w-full border-collapse border border-white my-4">
                        <tbody>
                            {currentQ.matrixData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border border-white p-2 text-center">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

            </div>

            {/* Opsi Jawaban */}
            <div className="w-full flex flex-col">
                {renderOptions()}
            </div>

            {/* Penjelasan */}
            {showExplanation && (
                <div className="w-full p-4 sm:p-5 mt-4 rounded-xl bg-gray-800 bg-opacity-70 border border-green-500">
                    <h4 className="text-lg font-bold mb-2 text-green-400">Penjelasan:</h4>
                    {currentQ.explanationUrl ? (
                         <img src={currentQ.explanationUrl} alt="Pembahasan Gambar" className="mx-auto my-4 max-h-60 sm:max-h-80 object-contain" />
                    ) : (
                         <p className="text-base whitespace-pre-wrap">{currentQ.explanation}</p>
                    )}
                </div>
            )}

            {/* Tombol Aksi */}
            <div className="w-full flex justify-center mt-6">
                {!showExplanation ? (
                    <button
                        onClick={handleSubmitAnswer}
                        disabled={!selectedAnswer}
                        className={`py-3 px-12 rounded-full font-bold transition-colors duration-300 text-lg ${
                            selectedAnswer
                                ? 'bg-primary-brand hover:bg-blue-700 text-white'
                                : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                        }`}
                    >
                        Submit Jawaban
                    </button>
                ) : (
                    <button
                        onClick={handleNextQuestion}
                        className="py-3 px-12 rounded-full font-bold bg-secondary-accent hover:bg-yellow-400 text-primary-brand transition-colors duration-300 text-lg"
                    >
                        Soal Berikutnya
                    </button>
                )}
            </div>
            
        </div>
    </div>
  );
};

export default QuizInProgressPage;