import { FC } from 'react';
import NavMenu from '../components/UI/NavMenu'; 
import ComingSoonAlert from '../components/UI/ComingSoonAlert'; // Asumsi Anda memiliki komponen ini
import { Mode } from '../App'; 

// Interface Props
interface SimulationPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  startQuiz: (questionCount: number, quizType: string, timeLimit: number | null) => void;
  showAlert: boolean;
  setShowAlert: (show: boolean) => void;
}

const SimulationPage: FC<SimulationPageProps> = ({ 
    activeMenu, 
    setMode, 
    setActiveMenu, 
    startQuiz,
    showAlert,
    setShowAlert
}) => {
    
    // Asumsi: 'ComingSoonAlert' dan 'NavMenu' sudah diimpor dan berfungsi.
    
    // Data Simulasi
    const simulations = [
        {
            title: "TPD - Fundamental",
            quizType: "tpd_simulasi",
            questionCount: 50,
            timeLimit: 30 * 60, // 30 menit
            imgSrc: "/typetest/TPD.png",
            alt: "TPD Simulasi",
        },
        {
            title: "Ekonomi",
            quizType: "ekonomi_simulasi",
            questionCount: 50,
            timeLimit: 45 * 60, // 45 menit
            imgSrc: "/typetest/Ekonomi.png",
            alt: "Ekonomi Simulasi",
        },
        {
            title: "Perbankan",
            quizType: "bank_simulasi",
            questionCount: 50,
            timeLimit: 45 * 60, // 45 menit
            imgSrc: "/typetest/Bank.png",
            alt: "Perbankan Simulasi",
        },
        {
            title: "Akuntansi",
            quizType: "akuntansi_simulasi",
            questionCount: 50,
            timeLimit: 45 * 60, // 45 menit
            imgSrc: "/typetest/Akuntansi.png",
            alt: "Akuntansi Simulasi",
        },
        {
            title: "English",
            quizType: "english_simulasi",
            questionCount: 40,
            timeLimit: 30 * 60, // 30 menit
            imgSrc: "/typetest/English.png",
            alt: "English Simulasi",
        },
    ];

    // Fungsi untuk merender kartu simulasi
    const renderCard = (sim: typeof simulations[0]) => (
        <button
            key={sim.quizType}
            onClick={() => startQuiz(sim.questionCount, sim.quizType, sim.timeLimit)}
            className="transition-transform hover:scale-105"
            aria-label={`Mulai Simulasi ${sim.title}`}
        >
            <div className="w-44 h-58 rounded-3xl overflow-hidden relative shadow-2xl border border-white border-opacity-30">
                <img
                    src={sim.imgSrc}
                    alt={sim.alt}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Opsional: Tambahkan overlay teks untuk judul di bawah gambar jika diinginkan */}
             {/* <p className="text-center mt-2 font-semibold text-lg">{sim.title}</p> */}
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
                    {/* Menggunakan gap-4 atau gap-6 untuk jarak antar kartu, dan justify-center untuk menengahkan */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center w-full">
                        {simulations.map(renderCard)}
                    </div>
                </div>
            </div>
            
            {showAlert && <ComingSoonAlert onClose={() => setShowAlert(false)} />}
        </div>
    );
};

export default SimulationPage;