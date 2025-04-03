import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/modal';

// Animation Variants
const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    whileHover: { 
        scale: 1.03, 
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)", 
        transition: { duration: 0.2, ease: "easeOut" } 
    },
};

interface ProductProps {
    name: string;
    icon: React.ReactNode;
    description: string;
    category: string;
    detailedDescription: string;
}

interface ProductCardProps {
    product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="whileHover"
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/10
                            transition-all duration-300 hover:bg-white/10
                            flex flex-col items-start h-full card-hover"
            >
                <div className="mb-4">
                    {product.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">{product.description}</p>
                <span className="text-gray-300 text-sm mb-6">Category: <span className="font-medium text-white">{product.category}</span></span>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-blue-400 hover:text-blue-300 transition-colors mt-auto self-start
                                 text-lg font-semibold hover:underline flex items-center"
                >
                    View Details <ChevronRight className="inline-block w-5 h-5 ml-1" />
                </button>
            </motion.div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={product.name}
                icon={React.cloneElement(product.icon as React.ReactElement, { className: "w-8 h-8" })}
            >
                <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
            </Modal>
        </>
    );
};

export default ProductCard; 