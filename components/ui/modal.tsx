import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  icon,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              duration: 0.25,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col md:flex-row rounded-2xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] border border-white/10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left content section */}
            <div className="flex-1 relative z-10 bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-8 md:p-10 overflow-y-auto">
              {/* Header */}
              <div className="relative mb-8 pb-6 border-b border-white/10">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {title}
                </h3>
                <div className="absolute w-20 h-1 bottom-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="prose prose-invert prose-lg prose-p:text-gray-300 max-w-none">
                {children}
              </div>
            </div>

            {/* Right illustration section */}
            {icon && (
              <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-gray-800/80 to-gray-900/90 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="absolute -left-24 top-40 w-52 h-52 bg-blue-500/10 rounded-full blur-[50px]"></div>
                <div className="absolute -right-24 bottom-40 w-60 h-60 bg-purple-500/10 rounded-full blur-[50px]"></div>

                {/* Tech connections visual effect */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-5"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="100"
                    y1="0"
                    x2="0"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="100"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <line
                    x1="0"
                    y1="50"
                    x2="100"
                    y2="50"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </svg>

                {/* Main floating icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -15, 0, 15, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 },
                    y: { repeat: Infinity, duration: 12, ease: "easeInOut" },
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 text-blue-400/30"
                >
                  {icon}
                </motion.div>

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 p-2 rounded-full bg-gray-800/70 hover:bg-gray-700 transition-colors border border-white/10 text-white/70 hover:text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
