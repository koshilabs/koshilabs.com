import React, { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMemberProps;
}

// Enhanced team member card with hover effects
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
        transition: { type: "spring", stiffness: 400, damping: 17 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl overflow-hidden relative group"
    >
      {/* Enhanced profile section with hover effects */}
      <div className="relative pt-[80%] overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            transition: { duration: 0.4 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-all"
          />
        </motion.div>

        {/* Overlay gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <motion.div
        className="p-5 text-center relative z-10"
        animate={{
          y: isHovered ? -5 : 0,
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
      >
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-blue-400 font-medium mt-1">{member.title}</p>

        {/* Enhanced social links with animations */}
        <motion.div
          className="flex justify-center gap-4 mt-4"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {member.social.linkedin && (
            <motion.a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <Linkedin size={18} />
            </motion.a>
          )}
          {member.social.github && (
            <motion.a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={`${member.name}'s GitHub profile`}
            >
              <Github size={18} />
            </motion.a>
          )}
          {member.social.twitter && (
            <motion.a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400"
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              aria-label={`${member.name}'s Twitter profile`}
            >
              <Twitter size={18} />
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Animated border bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default TeamMemberCard;
