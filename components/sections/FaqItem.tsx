import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <motion.button
        className="flex justify-between items-center w-full py-6 cursor-pointer"
        onClick={onClick}
        whileTap={{ scale: 0.995 }}
      >
        <h3 className={`text-lg font-medium pr-4 ${isOpen ? 'text-blue-400' : 'text-white'}`}>
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? "rgba(96, 165, 250, 0.2)" : "rgba(255, 255, 255, 0.1)",
          }}
          transition={{ duration: 0.3 }}
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
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
