// src/components/UI/GlassmorphismCard.tsx

import { FC, ReactNode } from "react";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphismCard: FC<GlassmorphismCardProps> = ({ children, className }) => {
  return (
    <div
      className={`p-8 rounded-xl border border-white border-opacity-30 bg-white bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;