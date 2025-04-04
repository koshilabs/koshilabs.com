import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

interface TeamMemberProps {
  member: {
    name: string;
    title: string;
    image: string;
    social: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
  };
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-lg border border-white/5 shadow-xl relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>

        {/* Avatar Container with Gradient Border */}
        <div className="relative pt-6 pb-5 px-6">
          <div className="w-28 h-28 mx-auto mb-4 rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain rounded-full bg-gray-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
              }}
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-gray-400 mb-3">{member.title}</p>
          </div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-3 pt-3 border-t border-white/10"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: isHovered ? 1 : 0.4 }}
            transition={{ duration: 0.3 }}
          >
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Animated Gradient Effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
