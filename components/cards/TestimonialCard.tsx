import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialProps {
  name: string;
  company: string;
  quote: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialProps;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{
      y: -8,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    }}
  >
    <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl overflow-hidden h-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="absolute top-6 right-6 text-purple-400/20">
        <QuoteIcon size={42} />
      </div>

      <CardHeader className="pt-8 pb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-70"></div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              className="relative w-16 h-16 rounded-full border-2 border-white/20 object-cover"
            />
          </div>
          <div>
            <CardTitle className="text-white text-xl font-semibold">
              {testimonial.name}
            </CardTitle>
            <CardDescription className="text-blue-300 text-sm">
              {testimonial.company}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-8">
        <p className="text-gray-300 leading-relaxed relative z-10">
          "{testimonial.quote}"
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

export default TestimonialCard;
