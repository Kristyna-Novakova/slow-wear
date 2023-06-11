import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

export const Button = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="button"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};
