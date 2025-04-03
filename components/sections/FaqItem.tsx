import React from 'react';
import { Collapsible } from '@/components/ui/collapsible';

interface FaqProps {
    question: string;
    answer: string;
}

interface FaqItemProps {
    faq: FaqProps;
    isOpen?: boolean;
    onToggle?: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle }) => (
    <Collapsible 
        title={faq.question} 
        isOpen={isOpen}
        onToggle={onToggle}
        className="mb-4 last:mb-0 last:border-0"
    >
        {faq.answer}
    </Collapsible>
);

export default FaqItem; 