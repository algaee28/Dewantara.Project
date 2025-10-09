// src/pages/HomePage.tsx
import { FC } from 'react';
import NavMenu from '../components/UI/NavMenu';
import { Mode } from '../App';

interface Quote {
  header: string;
  subHeader: string;
  bottomText: string;
}

interface HomePageProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
  randomQuote: Quote;
}

const HomePage: FC<HomePageProps> = ({ activeMenu, setMode, setActiveMenu, randomQuote }) => (
  <div
    className="relative min-h-screen flex flex-col items-center justify-between p-4 sm:p-10 bg-cover bg-center text-white"
    style={{ backgroundImage: "url('/assets/background1.jpeg')" }}
  >
    <div className="w-full flex justify-center pt-4">
      <NavMenu
        activeMenu={activeMenu}
        setMode={setMode}
        setActiveMenu={setActiveMenu}
      />
    </div>
    <div className="flex flex-col items-center text-center mt-auto mb-auto p-4 max-w-4xl">
      <h1
        className="text-4xl sm:text-6xl font-bold mb-4 text-white"
        style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.2" }}
      >
        {randomQuote.header}
      </h1>
      <p
        className="text-md sm:text-xl font-regular mb-8 text-white opacity-90"
        style={{ fontFamily: "'Playfair Display', serif", lineHeight: "1.5" }}
      >
        {randomQuote.subHeader}
      </p>
      <p
        className="text-lg sm:text-2xl font-semibold italic text-white opacity-80"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {randomQuote.bottomText}
      </p>
    </div>
  </div>
);

export default HomePage;