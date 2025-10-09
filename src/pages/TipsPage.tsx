import { FC } from 'react';
import NavMenu from '../components/UI/NavMenu'; 
import { Mode } from '../App'; 
import tipsData from './tipsData'; 

interface TipsPageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}

const TipsPage: FC<TipsPageProps> = ({ activeMenu, setMode, setActiveMenu }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center p-4 sm:p-10 bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/background1.jpeg')" }}>
      <div className="w-full flex justify-center py-4 sm:py-8">
        <NavMenu activeMenu={activeMenu} setMode={setMode} setActiveMenu={setActiveMenu} />
      </div>
      
      <div className="p-4 sm:p-8 rounded-3xl border border-white border-opacity-30 shadow-lg w-full max-w-4xl mx-auto my-6 flex flex-col items-center" style={{ background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(10px)" }}>
        
        <h1 className="text-3xl font-bold mb-6 text-secondary-accent">Tips & Strategi Pengerjaan Soal</h1>
        
        <div className="w-full space-y-6">
          {tipsData.map((section, index) => (
            <div key={index} className="bg-black bg-opacity-30 p-5 rounded-xl border border-white border-opacity-20">
              <h2 className="text-xl font-semibold mb-3 text-primary-brand">{section.title}</h2>
              <ul className="list-disc list-inside space-y-2 text-base">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>
                    <span className="font-medium text-white">{tip.point}:</span> {tip.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsPage;