import React from 'react';
import { motion } from 'framer-motion';

interface FloatingSVGProps {
    children: React.ReactNode;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    delay?: number;
}

const FloatingSVG: React.FC<FloatingSVGProps> = ({ children, ...props }) => (
    <motion.div
        initial={{ opacity: 0, y: -20, x: -20 }}
        animate={{
            opacity: 0.7,
            y: [20, -20, 20],
            x: [20, -20, 20],
            rotate: [0, 10, 0, -10, 0],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: props.delay || 0,
        }}
        className="absolute"
        style={{
            top: props.top,
            left: props.left,
            right: props.right,
            bottom: props.bottom,
            zIndex: 1,
        }}
    >
        {children}
    </motion.div>
);

export default FloatingSVG; 