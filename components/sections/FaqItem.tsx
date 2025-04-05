import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// Enhanced FAQ item with smoother animations
const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  // Animation variants for smoother transitions
  const itemVariants = {
    closed: {
      opacity: 0.9,
      borderColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      borderColor: "rgba(255, 255, 255, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.2 },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
        opacity: { duration: 0.25, delay: 0.15 },
      },
    },
  };

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl mb-5 overflow-hidden"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={itemVariants}
      whileHover={{
        scale: 1.005,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={onClick}
        whileTap={{ scale: 0.995 }}
      >
        <motion.h3
          className="text-lg font-medium pr-4"
          animate={{
            color: isOpen ? "rgb(96, 165, 250)" : "rgb(255, 255, 255)",
            fontWeight: isOpen ? 600 : 500,
          }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.h3>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen
              ? "rgba(96, 165, 250, 0.2)"
              : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="p-1.5 rounded-full flex items-center justify-center"
          style={{ width: 30, height: 30 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke={isOpen ? "rgb(96, 165, 250)" : "rgb(156, 163, 175)"}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={contentVariants}
            className="overflow-hidden"
          >
            <motion.div
              className="p-5 pt-0 text-gray-300 border-t border-white/10"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gradient line animation when open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-full"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
