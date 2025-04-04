import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo: React.FC = () => (
  <div className="space-y-8">
    <h3 className="text-4xl font-semibold text-white">Contact Us</h3>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <MapPin className="w-7 h-7 text-gray-400" />
        <p className="text-gray-300 text-xl">Birtamod, Koshi Province, Nepal</p>
      </div>
      <div className="flex items-center gap-4">
        <Phone className="w-7 h-7 text-gray-400" />
        <a href="tel:+977-9817996672" className="text-gray-300 text-xl">
          +977 9817996672
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Mail className="w-7 h-7 text-gray-400" />
        <a
          href="mailto:admin@koshilabs.com"
          className="text-gray-300 hover:text-blue-400 text-xl transition-colors"
        >
          admin@koshilabs.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Mail className="w-7 h-7 text-gray-400" />
        <a
          href="mailto:koshilabs@gmail.com"
          className="text-gray-300 hover:text-blue-400 text-xl transition-colors"
        >
          koshilabs@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default ContactInfo;
