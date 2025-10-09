// src/pages/SimulationPage.tsx
import { FC } from 'react';
import NavMenu from '../components/UI/NavMenu';
import { Mode } from '../App';

interface SimulationPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  startQuiz: (count: number, type: string, time: number | null) => void;
  showAlert: boolean;
  setShowAlert: (show: boolean) => void;
}

const SimulationPage: FC<SimulationPageProps> = ({ activeMenu, setMode, setActiveMenu, startQuiz, showAlert, setShowAlert }) => {
    // Placeholder untuk UI Simulasi
    const handleStartSimulasi = () => {
        // Karena kita belum membahas logika simulasi (waktu 60 menit, 100 soal campuran), kita pakai placeholder dulu.
        // Simulasi TPD - 100 soal - 60 menit (3600 detik)
        if (showAlert) {
            setShowAlert(false); // Tutup alert jika ada
        }
        
        // Kita akan menggunakan tipe 'tpd_simulasi'
        startQuiz(100, 'tpd_simulasi', 3600); 
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/background1.jpeg')" }}>
            <div className="w-full flex justify-center py-4 sm:py-8">
                <NavMenu activeMenu={activeMenu} setMode={setMode} setActiveMenu={setActiveMenu} />
            </div>
            
            <div className="text-center mt-20">
                <h2 className="text-4xl font-bold mb-4">Simulasi Ujian</h2>
                <p className="text-xl opacity-80 mb-8">Fitur simulasi ujian profesional (TPD, CPNS, BUMN) akan segera kami siapkan!</p>
                <button
                    onClick={handleStartSimulasi}
                    className="bg-secondary-accent text-primary-brand font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300 text-lg"
                >
                    Mulai Simulasi TPD (Demo)
                </button>
            </div>
            {/* Kita tidak perlu menampilkan alert di sini karena fitur Simulasi akan menjadi fitur premium/siap */}
        </div>
    );
};

export default SimulationPage;