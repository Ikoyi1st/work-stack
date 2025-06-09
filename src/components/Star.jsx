import React from 'react';
// Remove: import { motion } from 'framer-motion'; // This line is not needed here

// Star component for the galaxy effect
const Star = ({ theme }) => {
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = 2 + Math.random() * 4;
  const delay = Math.random() * 3;

  const starColorClass = 'bg-white';

  return (
    <div
      className={`absolute rounded-full opacity-0 animate-shooting-star ${starColorClass}`}
      style={{
        left: `${left}vw`,
        top: `${top}vh`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    ></div>
  );
};

export default Star;