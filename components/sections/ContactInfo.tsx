import React from "react";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

// Simplified contact info component with fewer DOM elements
const ContactInfo = () => {
  return (
    <div className="space-y-8 text-gray-300">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Contact Information
      </h3>
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-blue-400 mt-1" />
        <div>
          <p className="font-medium text-white">Address</p>
          <p>Birtamod, Koshi Province, Nepal</p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Phone className="w-5 h-5 text-purple-400 mt-1" />
        <div>
          <p className="font-medium text-white">Phone</p>
          <a href="tel:+977 9817996672" aria-label="Call +977 9817996672">
            +977 9817996672
          </a>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Mail className="w-5 h-5 text-green-400 mt-1" />
        <div>
          <p className="font-medium text-white">Email</p>
          <a
            href="mailto:admin@koshilabs.com"
            aria-label="Email admin@koshilabs.com"
          >
            admin@koshilabs.com
          </a>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Globe className="w-5 h-5 text-yellow-400 mt-1" />
        <div>
          <p className="font-medium text-white">Website</p>
          <p>www.koshilabs.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
