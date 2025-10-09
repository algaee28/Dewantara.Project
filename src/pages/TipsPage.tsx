import { FC, useState } from 'react'; // Import useState
import NavMenu from '../components/UI/NavMenu'; 
import { Mode } from '../App'; 
// FIX: Menggunakan Named Export { allTips, tipsData }
import { allTips, tipsData } from './tipsData'; 
// Import Modal component
import GlassmorphismModal from '../components/UI/GlassmorphismModal'; 

// Definisikan interface untuk struktur data Tips (menghindari TS7006)
interface TipCard {
  title: string;
  text: string;
  contentKey: keyof typeof tipsData;
  isExternal: boolean;
  link: string | null;
  style: any; 
}

interface ModalContent {
    title: string;
    content: string;
}

interface TipsPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}

const TipsPage: FC<TipsPageProps> = ({ activeMenu, setMode, setActiveMenu }) => {
  // State untuk mengelola index kartu yang sedang aktif
  const [currentIndex, setCurrentIndex] = useState(0);
  // State untuk mengelola Modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: '', content: '' });

  // Fungsi navigasi
  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % allTips.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + allTips.length) % allTips.length);
  };

  // Fungsi untuk menentukan style (posisi, skala, opacity) kartu
  const getCardStyle = (index: number) => {
    const totalCards = allTips.length;
    const diff = index - currentIndex;
    const absDiff = Math.abs(diff);

    // Hitung posisi horizontal untuk menciptakan efek carousel/stack
    let transformX = diff * 280; // Jarak default antar kartu

    // Logika agar kartu di ujung tetap terlihat dan berputar
    if (diff > 2) { // Kartu di jauh kanan
        transformX = (diff - totalCards) * 280;
    } else if (diff < -2) { // Kartu di jauh kiri
        transformX = (diff + totalCards) * 280;
    }
    
    // Variabel 'distanceFactor' yang menyebabkan error telah dihapus.

    return {
      transform: `translateX(${transformX}px) scale(${1 - absDiff * 0.15})`,
      zIndex: 10 - absDiff, // Kartu tengah paling depan
      opacity: 1 - absDiff * 0.2, 
      // Batasi opacity agar tidak hilang total, tetap 0.1 di kartu terjauh
      ...(absDiff > 2 && { opacity: 0.1 }), 
    };
  };

  // Fungsi saat kartu diklik
  const handleCardClick = (card: TipCard) => {
    if (card.isExternal && card.link) {
      window.open(card.link, "_blank");
    } else {
      // Tampilkan Modal
      const content = tipsData[card.contentKey];
      if(content) {
        setModalContent({
          title: card.title,
          content: content.trim(),
        });
        setShowModal(true);
      }
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
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-secondary-accent">
          Tips & Strategi
        </h1>
        <p className="text-lg sm:text-2xl font-light opacity-90 mb-16">
          Tingkatkan performa Anda dengan panduan terbaik.
        </p>

        <div className="relative w-full max-w-7xl mx-auto">
          {/* Tombol Navigasi Kiri */}
          <button
            onClick={prevCard}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
            style={{ backdropFilter: "blur(10px)" }}
            aria-label="Previous Tip"
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

          {/* Tombol Navigasi Kanan */}
          <button
            onClick={nextCard}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
            style={{ backdropFilter: "blur(10px)" }}
            aria-label="Next Tip"
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

          {/* Area Kartu Carousel */}
          <div className="flex justify-center items-center h-96 overflow-hidden relative">
            {allTips.map((card, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(card as TipCard)} // Gunakan as TipCard
                className="absolute w-56 h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-white border-opacity-30 shadow-xl"
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
                  <p className="text-xs mt-2 text-white/70 italic">
                      {card.isExternal ? "Buka Link Eksternal" : "Klik untuk Detail"}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Indikator Titik (Dots) */}
          <div className="flex justify-center mt-8 space-x-2">
            {allTips.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-primary-brand" 
                    : "bg-white bg-opacity-30 hover:bg-opacity-50"
                }`}
                aria-label={`Go to tip ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal untuk menampilkan detail tips */}
      {showModal && (
        <GlassmorphismModal
          title={modalContent.title}
          content={modalContent.content}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default TipsPage;