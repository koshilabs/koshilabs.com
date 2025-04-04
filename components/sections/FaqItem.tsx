import React from "react";
import { Collapsible } from "@/components/ui/collapsible";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onClick?: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => (
  <Collapsible
    title={question}
    isOpen={isOpen}
    onToggle={onClick}
    className="mb-4 last:mb-0 last:border-0"
  >
    {answer}
  </Collapsible>
);

export default FaqItem;
