import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

// Simplified interface
interface ProductProps {
  name: string;
  description: string;
  category: string;
  icon: React.ReactElement;
  detailedDescription: string;
}

interface ProductCardProps {
  product: ProductProps;
}

// Enhanced product card with hover effects and improved modal
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{
          y: -8,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
        className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl"
      >
        <div className="flex items-start gap-3 mb-3">
          <motion.div
            className="bg-gray-800/80 p-2 rounded-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {React.cloneElement(product.icon, { className: "w-5 h-5" })}
          </motion.div>
          <div className="flex-1">
            <div className="text-sm text-blue-400 font-medium">
              {product.category}
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              {product.name}
            </h3>
          </div>
        </div>

        <motion.div
          className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
          whileHover={{ width: "40%", transition: { duration: 0.3 } }}
        />

        <p className="text-gray-300 mb-4">{product.description}</p>

        <Button
          className="mt-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          onClick={() => setIsModalOpen(true)}
        >
          View Details <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={product.name}
        icon={React.cloneElement(product.icon, { className: "w-8 h-8" })}
      >
        <div className="mb-3 px-2 py-1 inline-block bg-blue-500/20 text-blue-400 rounded-full text-sm">
          {product.category}
        </div>
        <div
          className="text-gray-300 space-y-4"
          dangerouslySetInnerHTML={{ __html: product.detailedDescription }}
        />
      </Modal>
    </>
  );
};

export default ProductCard;
