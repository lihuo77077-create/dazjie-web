import React from 'react';
import { motion } from 'motion/react';

interface HandDrawnUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export const HandDrawnUnderline = ({ children, className = "" }: HandDrawnUnderlineProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.svg
        className="absolute -bottom-1 left-0 w-full"
        height="8"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <path
          d="M0 5.5 C 20 4.5, 40 7.5, 60 5.5 C 80 3.5, 100 6.5, 100 5.5"
          fill="transparent"
          stroke="#FFB6C1"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.svg>
    </span>
  );
};
