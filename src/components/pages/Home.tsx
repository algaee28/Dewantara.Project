// src/components/pages/Home.tsx

import React from "react";

const Home = () => {
  return (
    <div className="text-white min-h-screen p-10 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-playfair mb-4">
          Fear Comes From Inexperience, Not Incapability.
        </h1>
        <p className="text-2xl font-playfair mb-8">
          You're afraid because you haven't done it yet, not because you can't
          do it. Inexperience is the problem to be solved- and it's solved
          through having the courage to act.
        </p>
        <p className="text-3xl font-playfair font-semibold">
          Where will curiosity take you?
        </p>
      </div>
    </div>
  );
};

export default Home;
