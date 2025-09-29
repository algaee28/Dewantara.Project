// src/components/UI/GlassmorphismCard.tsx

import React from "react";

const GlassmorphismCard = ({ children, className }) => {
  return (
    <div
      className={`p-8 rounded-xl border border-white border-opacity-30 bg-white bg-opacity-20 shadow-lg backdrop-filter backdrop-blur-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;
