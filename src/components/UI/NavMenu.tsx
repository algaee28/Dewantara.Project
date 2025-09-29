import { FC } from 'react';

type Mode = "home" | "quiz" | "simulasi" | "tips" | "quizInProgress" | "quizResults";

interface NavMenuProps {
  activeMenu: Mode;
  setMode: (mode: Mode) => void;
  setActiveMenu: (menu: Mode) => void;
}

const NavMenu: FC<NavMenuProps> = ({ activeMenu, setMode, setActiveMenu }) => (
  <nav
    className="px-1 py-1 rounded-2xl border border-white border-opacity-15 shadow-lg text-white"
    style={{
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(5px)",
    }}
  >
    {(["home", "quiz", "simulasi", "tips"] as const).map((item) => (
      <button
        key={item}
        onClick={() => {
          setMode(item);
          setActiveMenu(item);
        }}
        className={`px-3 py-2 text-sm sm:px-6 sm:py-2 mx-1 rounded-xl sm:text-lg transition-all duration-300 ${
          activeMenu === item
            ? "font-bold"
            : "font-normal hover:bg-white hover:bg-opacity-5"
        }`}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </button>
    ))}
  </nav>
);

export default NavMenu;