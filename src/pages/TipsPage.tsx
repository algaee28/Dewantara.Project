import { FC } from 'react';
import NavMenu from '../components/UI/NavMenu'; 
import { Mode } from '../App'; 
// FIX: Menggunakan Named Export { allTips, tipsData }
import { allTips, tipsData } from './tipsData'; 

// FIX: Definisikan interface untuk memperbaiki error implicit 'any' (TS7006)
interface TipSection {
  title: string;
  text: string;
  contentKey: keyof typeof tipsData; // Mengacu pada kunci object tipsData
  isLink: boolean;
  style: any; 
}

interface TipDetail {
  point: string;
  description: string;
}

interface TipsPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}

// Helper function untuk memproses raw string tips menjadi array terstruktur
const parseTips = (contentKey: keyof typeof tipsData): TipDetail[] => {
  const rawText = tipsData[contentKey] as string;
  
  if (!rawText) return [];

  return rawText.split('\n')
    .filter(line => line.trim() && line.trim() !== '`')
    .map(line => {
      // Logic untuk memproses baris "Point: Description"
      const match = line.match(/^(.*?):(.+)/);
      if (match) {
          const [, point, description] = match;
          return {
              point: point.trim(),
              description: description.trim(),
          } as TipDetail;
      }
      // Untuk baris umum yang tidak berformat "Point: Description"
      const cleanLine = line.replace(/`/g, '').trim();
      return {
          point: '•', 
          description: cleanLine, 
      } as TipDetail;
    })
    .filter(tip => tip.description.length > 0 && tip.description !== '`');
};


const TipsPage: FC<TipsPageProps> = ({ activeMenu, setMode, setActiveMenu }) => {
  // Hanya render tips yang bukan link
  const sectionsToRender = allTips.filter(section => !section.isLink) as TipSection[];

  return (
    <div className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/background1.jpeg')" }}>
      <div className="w-full flex justify-center py-4 sm:py-8">
        <NavMenu activeMenu={activeMenu} setMode={setMode} setActiveMenu={setActiveMenu} />
      </div>
      
      <div className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-4xl mx-auto my-6 flex flex-col items-center" style={{ background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(10px)" }}>
        
        <h1 className="text-3xl font-bold mb-6 text-primary-brand">Tips & Strategi Pengerjaan Soal</h1>
        
        <div className="w-full space-y-6">
          {/* FIX: Iterasi menggunakan array allTips dan ambil kontennya dari tipsData */}
          {sectionsToRender.map((section, index) => {
            const tips = parseTips(section.contentKey); // Gunakan helper untuk parsing
            
            return (
              <div key={index} className="bg-black bg-opacity-30 p-5 rounded-xl border border-white border-opacity-20">
                <h2 className="text-xl font-semibold mb-3 text-primary-brand">{section.title}</h2>
                <ul className="list-disc list-inside space-y-2 text-base">
                  {tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className={tip.point === '•' ? 'list-none ml-[-20px]' : ''}>
                      {tip.point !== '•' ? (
                          <>
                              <span className="font-medium text-white">{tip.point}:</span> {tip.description}
                          </>
                      ) : (
                          <span className="text-white">{tip.description}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TipsPage;