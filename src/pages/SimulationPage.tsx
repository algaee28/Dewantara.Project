import { FC } from 'react';
import NavMenu from '../components/UI/NavMenu'; 
import { Mode } from '../App'; 
import { Clock, BookOpen } from 'lucide-react'; 

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
    
    // Helper untuk memformat waktu
    const formatTimeLimit = (seconds: number) => {
        const minutes = seconds / 60;
        return `${minutes} Menit`;
    };

    // Data Simulasi dengan properti gradient
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
    ];

    const renderCard = (sim: typeof simulations[0]) => (
        <button
            key={sim.quizType}
            onClick={() => startQuiz(sim.questionCount, sim.quizType, sim.timeLimit)}
            className="transition-transform hover:scale-105"
            aria-label={`Mulai Simulasi ${sim.title}`}
        >
            <div 
                // PERUBAHAN UTAMA: w-44 h-58 menjadi w-56 h-72
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
                         {sim.questionCount} Soal
                    </div>
                </div>
                
                {/* Waktu */}
                <div className='relative z-10 mt-auto pt-3 border-t border-white/30'>
                    <div className="flex items-center font-semibold text-xl text-white">
                        <Clock className='w-6 h-6 mr-2'/>
                        {formatTimeLimit(sim.timeLimit)}
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
        </div>
    );
};

export default SimulationPage;