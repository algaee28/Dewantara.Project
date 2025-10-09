// src/pages/QuizResultsPage.tsx
import { FC } from 'react';
import { Question, Mode } from '../App';
import NavMenu from '../components/UI/NavMenu'; // Asumsi jalur sudah diperbaiki

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

const QuizResultsPage: FC<QuizResultsPageProps> = ({ score, questions, totalTime, currentQuizType, setMode, setActiveMenu }) => {
    
    const formattedTotalTime = new Date(totalTime).toISOString().substr(11, 8); // Format time

    return (
        <div className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/background1.jpeg')" }}>
            <div className="w-full flex justify-center py-4 sm:py-8">
                <NavMenu activeMenu={"quizResults"} setMode={setMode} setActiveMenu={setActiveMenu} />
            </div>
            
            <div className="p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-4xl mx-auto my-10 flex flex-col items-center text-center" style={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)" }}>
                <h2 className="text-4xl font-bold mb-4 text-green-400">Hasil Kuis Selesai!</h2>
                <p className="text-xl mb-2">Tipe Kuis: {currentQuizType.toUpperCase()}</p>
                <p className="text-xl mb-6">Total Soal: {questions.length}</p>

                <div className="bg-white text-black p-6 rounded-xl w-full max-w-sm mb-6">
                    <p className="text-lg">Jawaban Benar:</p>
                    <p className="text-4xl font-extrabold text-green-600">{score}</p>
                </div>
                
                <p className="text-lg opacity-80 mb-6">Waktu yang Dihabiskan: {formattedTotalTime}</p>
                
                <button
                    onClick={() => setMode("quiz")}
                    className="bg-primary-brand text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-lg"
                >
                    Kembali ke Pilihan Kuis
                </button>
            </div>
        </div>
    );
};

export default QuizResultsPage;