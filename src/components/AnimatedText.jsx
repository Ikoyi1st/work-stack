import React from 'react';
import { motion } from 'framer-motion';

// Animated Text Component
const AnimatedText = ({ text, className }) => {
  // Variants for the container (staggering effect for words)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Delay between each word's animation
      },
    },
  };

  // Variants for individual words (initial position and animation)
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring", // Spring animation for a bouncy feel
        damping: 12,    // Controls the oscillation
        stiffness: 100, // Controls the speed
      },
    },
  };

  // Split the text into words
  const words = text.split(' ');

  return (
    <motion.div
      className={`inline-block ${className}`} // Use inline-block to wrap words naturally
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2" // Add margin-right for spacing between words
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;