import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl p-6 card-hover">
        <CardHeader>
            <div className="flex items-center gap-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full border-4 border-purple-500/50 shadow-md" />
                <div>
                    <CardTitle className="text-white text-2xl font-semibold">{testimonial.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-lg">{testimonial.company}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <p className="text-gray-300 italic text-xl leading-relaxed">"{testimonial.quote}"</p>
        </CardContent>
    </Card>
);

export default TestimonialCard; 