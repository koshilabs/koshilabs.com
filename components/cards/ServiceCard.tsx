import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  whileHover: {
    scale: 1.03,
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

interface ServiceProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  detailedDescription: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover="whileHover"
        className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10
                            transition-all duration-300 hover:bg-white/10
                            flex flex-col items-start h-full card-hover"
      >
        <div className="flex items-center gap-6 mb-8">
          {service.icon}
          <h3 className="text-3xl font-semibold text-white bg-clip-text">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-300 flex-grow text-lg leading-relaxed">
          {service.description}
        </p>
        <Button
          className="mt-8 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 self-start
                                 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all hover-glow"
          onClick={() => setIsModalOpen(true)}
        >
          Learn More <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={service.title}
        icon={React.cloneElement(service.icon as React.ReactElement, {
          className: "w-8 h-8",
        })}
      >
        <div
          className="text-gray-300"
          dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
        />
      </Modal>
    </>
  );
};

export default ServiceCard;
