import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

// Define the service interface
interface ServiceProps {
  title: string;
  icon: React.ReactElement;
  description: string;
  detailedDescription: string;
}

interface ServiceCardProps {
  service: ServiceProps;
}

// Enhanced service card with hover effects and improved modal
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
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
        className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl relative group"
      >
        {/* Enhanced header with hover effect */}
        <div className="mb-4 relative">
          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 0.1 }}
            whileHover={{ opacity: 0.2, rotate: 5 }}
            className="absolute right-0 top-0"
          >
            {React.cloneElement(service.icon, {
              className: "w-20 h-20 text-current",
            })}
          </motion.div>

          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1, x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block mb-3"
            >
              {React.cloneElement(service.icon, { className: "w-12 h-12" })}
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-1">
              {service.title}
            </h3>
            <motion.div
              className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3"
              whileHover={{ width: "40%", transition: { duration: 0.3 } }}
            />
          </div>
        </div>

        <p className="text-gray-300 mb-5">{service.description}</p>

        <Button
          className="mt-3 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
          onClick={() => setIsModalOpen(true)}
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={service.title}
        icon={React.cloneElement(service.icon, { className: "w-8 h-8" })}
      >
        <div
          className="text-gray-300 space-y-4"
          dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
        />
      </Modal>
    </>
  );
};

export default ServiceCard;
