import React from 'react';
import { motion } from 'framer-motion';

interface FloatingSVGProps {
    children: React.ReactNode;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    delay?: number;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    opacity?: number;
    className?: string;
}

const FloatingSVG: React.FC<FloatingSVGProps> = ({ 
    children, 
    size = 'md', 
    opacity = 0.7,
    className = '',
    ...props 
}) => {
    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-24 h-24',
        lg: 'w-32 h-32',
        xl: 'w-40 h-40'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, x: -20 }}
            animate={{
                opacity,
                y: [20, -20, 20],
                x: [20, -20, 20],
                rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: props.delay || 0,
            }}
            className={`absolute ${className}`}
            style={{
                top: props.top,
                left: props.left,
                right: props.right,
                bottom: props.bottom,
                zIndex: 1,
            }}
        >
            <div className={sizeClasses[size]}>
                {children}
            </div>
        </motion.div>
    );
};

export default FloatingSVG; 