import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        success?: boolean;
        message?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({});

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (response.ok) {
                setSubmitStatus({
                    success: true,
                    message: data.message
                });
                // Reset form on success
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setSubmitStatus({
                    success: false,
                    message: data.message || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl">
            <CardHeader>
                <CardTitle className="text-white text-3xl font-semibold font-heading">Get in Touch</CardTitle>
                <CardDescription className="text-gray-400 text-lg">Send us a message and we'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <label htmlFor="name" className="block text-gray-300 text-lg font-medium">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name" 
                                className="w-full px-4 py-3 rounded-md bg-black/20 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                required
                            />
                        </div>
                        <div className="space-y-4">
                            <label htmlFor="email" className="block text-gray-300 text-lg font-medium">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email" 
                                className="w-full px-4 py-3 rounded-md bg-black/20 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                required
                            />
                        </div>
                        <div className="space-y-4">
                            <label htmlFor="message" className="block text-gray-300 text-lg font-medium">Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message" 
                                className="w-full px-4 py-3 rounded-md bg-black/20 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-y" 
                                required
                            ></textarea>
                        </div>
                        
                        {submitStatus.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}
                            >
                                {submitStatus.message}
                            </motion.div>
                        )}
                        
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600
                                      transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-3 rounded-full font-semibold"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm; 