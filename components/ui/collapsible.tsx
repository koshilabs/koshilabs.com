import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  isOpen: externalIsOpen,
  onToggle: externalOnToggle,
  className,
}) => {
  // Use internal state if no external control is provided
  const [internalIsOpen, setInternalIsOpen] = React.useState(false);
  
  // Determine if using controlled or uncontrolled mode
  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;
  
  const handleToggle = () => {
    if (isControlled) {
      if (externalOnToggle) externalOnToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className={cn("border-b border-white/10", className)}>
      <button
        onClick={handleToggle}
        className="w-full text-left py-5 flex items-center justify-between focus:outline-none"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-gray-300 text-lg">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 