// src/pages/SimulationPage.tsx
import { FC, useState } from 'react'; // Tambahkan useState
import NavMenu from '../components/UI/NavMenu'; 
import { Mode } from '../App'; 
import { Clock, BookOpen } from 'lucide-react'; 

// --- START: KOMPONEN MODAL KUSTOMISASI SIMULASI ---
interface QuizSettingsModalProps {
    quizToStart: { type: string; title: string } | null;
    onClose: () => void;
    startQuiz: (count: number, type: string, time: number | null) => void;
}

const QuizSettingsModal: FC<QuizSettingsModalProps> = ({ quizToStart, onClose, startQuiz }) => {
    // State default untuk simulasi
    const [selectedCount, setSelectedCount] = useState(40); 
    const [selectedTime, setSelectedTime] = useState(60); // Default 60 menit
    
    if (!quizToStart) return null;

    // Opsi yang lebih cocok untuk simulasi penuh
    const questionOptions = [40, 50, 60, 80, 100];
    const timeOptions = [30, 45, 60, 90, 120]; 

    const handleStart = () => {
        const timeInSeconds = selectedTime * 60; // Simulasi umumnya memiliki batas waktu
        startQuiz(selectedCount, quizToStart.type, timeInSeconds);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div 
                className="bg-white bg-opacity-10 p-6 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-lg border border-white border-opacity-30 text-white transform transition-all duration-300 scale-100" 
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold mb-4 text-center border-b border-white/20 pb-3">
                    Atur Simulasi: {quizToStart.title}
                </h3>
                
                <div className="flex flex-col gap-6 mt-4">
                    {/* Input Jumlah Soal */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-2 text-gray-300 font-semibold">Jumlah Soal</label>
                        <select 
                            value={selectedCount} 
                            onChange={(e) => setSelectedCount(Number(e.target.value))}
                            className="px-4 py-2 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 text-base appearance-none"
                        >
                            {questionOptions.map(count => (
                                <option key={count} value={count} className="bg-[#100c28] text-white">{count} Soal</option>
                            ))}
                        </select>
                    </div>

                    {/* Input Batas Waktu */}
                    <div className="flex flex-col">
                        <label className="text-sm mb-2 text-gray-300 font-semibold">Batas Waktu (Menit)</label>
                        <select 
                            value={selectedTime} 
                            onChange={(e) => setSelectedTime(Number(e.target.value))}
                            className="px-4 py-2 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 text-base appearance-none"
                        >
                            {timeOptions.map(time => (
                                <option key={time} value={time} className="bg-[#100c28] text-white">{time} Menit</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex justify-between gap-4 mt-8">
                    <button 
                        onClick={onClose} 
                        className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition duration-150 font-bold"
                    >
                        Batal
                    </button>
                    <button 
                        onClick={handleStart} 
                        className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition duration-150 font-bold"
                    >
                        Mulai Simulasi
                    </button>
                </div>
            </div>
        </div>
    );
};
// --- END: KOMPONEN MODAL KUSTOMISASI SIMULASI ---


// Interface Props yang disederhanakan
interface SimulationPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  startQuiz: (questionCount: number, quizType: string, timeLimit: number | null) => void;
}

const SimulationPage: FC<SimulationPageProps> = ({ 
    activeMenu, 
    setMode, 
    setActiveMenu, 
    startQuiz,
}) => {
    
    // STATE UNTUK MENGONTROL MODAL
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quizToStart, setQuizToStart] = useState<{ type: string; title: string } | null>(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setQuizToStart(null);
    };

    // Helper untuk memformat waktu
    const formatTimeLimit = (seconds: number) => {
        const minutes = seconds / 60;
        return `${minutes} Menit`;
    };

    // Data Simulasi
    const simulations = [
        {
            title: "TPD - Fundamental",
            quizType: "tpd_simulasi",
            questionCount: 50,
            timeLimit: 30 * 60, // 30 menit
            gradient: "linear-gradient(145deg, #4F46E5 0%, #1E3A8A 100%)", // Deep Indigo/Violet
        },
        {
            title: "Ekonomi",
            quizType: "ekonomi_simulasi",
            questionCount: 50,
            timeLimit: 45 * 60, // 45 menit
            gradient: "linear-gradient(145deg, #059669 0%, #064E3B 100%)", // Deep Emerald/Green
        },
        {
            title: "Perbankan",
            quizType: "bank_simulasi",
            questionCount: 50,
            timeLimit: 45 * 60, // 45 menit
            gradient: "linear-gradient(145deg, #1D4ED8 0%, #1E3A8A 100%)", // Royal Blue/Navy
        },
        {
            title: "Akuntansi",
            quizType: "akuntansi_simulasi",
            questionCount: 50,
            timeLimit: 45 * 60, // 45 menit
            gradient: "linear-gradient(145deg, #9D174D 0%, #4C0519 100%)", // Deep Crimson/Burgundy
        },
        {
            title: "English",
            quizType: "english_simulasi",
            questionCount: 40,
            timeLimit: 30 * 60, // 30 menit
            gradient: "linear-gradient(145deg, #F59E0B 0%, #92400E 100%)", // Warm Gold/Amber
        },
        {
            title: "Central Bank",
            quizType: "central_bank", 
            questionCount: 40,
            timeLimit: 30 * 60,
            gradient: "radial-gradient(circle at 70% 50%, rgba(50,200,150,0.6), transparent 70%), linear-gradient(135deg, #0a1a0a, #1c2e20)",
        },
    ];

    const renderCard = (sim: typeof simulations[0]) => (
        <button
            key={sim.quizType}
            // ONCLICK BARU: Membuka Modal
            onClick={() => {
                setQuizToStart({ type: sim.quizType, title: sim.title });
                setIsModalOpen(true);
            }} 
            className="transition-transform hover:scale-105"
            aria-label={`Mulai Simulasi ${sim.title}`}
        >
            <div 
                className="w-56 h-72 rounded-3xl overflow-hidden relative shadow-2xl border border-white border-opacity-30 p-6 flex flex-col justify-between"
                style={{ background: sim.gradient }}
            >
                {/* Judul dan Soal */}
                <div className='relative z-10'>
                    <h3 className="text-2xl font-bold mb-2 text-white leading-snug">
                        {sim.title}
                    </h3>
                    <div className="flex items-center text-white/90 text-base">
                         <BookOpen className='w-5 h-5 mr-1'/>
                         {sim.questionCount} Soal (Default)
                    </div>
                </div>
                
                {/* Waktu */}
                <div className='relative z-10 mt-auto pt-3 border-t border-white/30'>
                    <div className="flex items-center font-semibold text-xl text-white">
                        <Clock className='w-6 h-6 mr-2'/>
                        {formatTimeLimit(sim.timeLimit)} (Default)
                    </div>
                </div>
            </div>
        </button>
    );

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
                
                <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-primary-brand text-center">
                    Simulasi Ujian
                </h1>

                <div
                    className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-6xl mx-auto"
                    style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(5px)",
                    }}
                >
                    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
                        {simulations.map(renderCard)}
                    </div>
                </div>
            </div>

            {/* RENDER MODAL SIMULASI */}
            {isModalOpen && (
                <QuizSettingsModal 
                    quizToStart={quizToStart} 
                    onClose={closeModal} 
                    startQuiz={startQuiz}
                />
            )}
        </div>
    );
};

export default SimulationPage;