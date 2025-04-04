import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Script from 'next/script';
import {
    Code2,
    Laptop2,
    Database,
    Search,
    BrainCircuit,
    Briefcase,
    Users,
    Rocket,
    Zap,
    Wand2,
    TrendingUp,
    Cpu,
    Gem,
    Layers3,
    Boxes,
    UserCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Import our new components
import Navbar from '@/components/layout/Navbar';
import FloatingSVG from '@/components/ui/FloatingSVG';
import ServiceCard from '@/components/cards/ServiceCard';
import ProductCard from '@/components/cards/ProductCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import TeamMemberCard from '@/components/cards/TeamMemberCard';
import FaqItem from '@/components/sections/FaqItem';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactForm from '@/components/sections/ContactForm';

// Dummy data for products and services
const products = [
    { 
        name: 'KoshiFit', 
        description: 'Revolutionize fitness with AI-powered personal training.', 
        category: 'Mobile', 
        icon: <TrendingUp className="w-6 h-6 text-red-400 mb-4" />,
        detailedDescription: `KoshiFit is a cutting-edge fitness application that leverages artificial intelligence to provide personalized workout plans and nutrition advice. 
        
        <br/><br/>
        
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>AI-powered workout recommendations based on your goals and progress</li>
          <li>Real-time form correction and feedback</li>
          <li>Personalized nutrition plans integrated with fitness routines</li>
          <li>Community features to connect with fitness enthusiasts</li>
          <li>Sync with wearable devices for comprehensive health tracking</li>
        </ul>
        
        KoshiFit is designed to be your complete fitness companion, adapting to your needs and helping you achieve optimal results efficiently.`
    },
    { 
        name: 'Accounting Suite', 
        description: 'Streamline finances with our intuitive accounting solution.', 
        category: 'Business', 
        icon: <Briefcase className="w-6 h-6 text-green-400 mb-4" />,
        detailedDescription: `Our Accounting Suite is designed to simplify financial management for businesses of all sizes, from startups to enterprises.
        
        <br/><br/>
        
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Automated bookkeeping and transaction categorization</li>
          <li>Real-time financial reporting and analytics</li>
          <li>Tax preparation and compliance tools</li>
          <li>Multi-currency support for global businesses</li>
          <li>Role-based access control for team collaboration</li>
        </ul>
        
        Accounting Suite streamlines your financial operations, saving time and reducing errors while providing valuable insights into your business performance.`
    },
    { 
        name: 'Finance API', 
        description: 'Integrate accounting seamlessly with our robust API.', 
        category: 'API', 
        icon: <Cpu className="w-6 h-6 text-blue-400 mb-4" />,
        detailedDescription: `Our Finance API provides developers with a powerful way to integrate financial capabilities into their applications.
        
        <br/><br/>
        
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Comprehensive RESTful API with extensive documentation</li>
          <li>Secure transaction processing and data handling</li>
          <li>Webhooks for real-time event notifications</li>
          <li>SDK support for major programming languages</li>
          <li>Sandbox environment for development and testing</li>
        </ul>
        
        The Finance API enables seamless integration of financial services into your software ecosystem, with security and performance at its core.`
    },
    { 
        name: 'LMS Platform', 
        description: 'Transform education with our innovative learning platform.', 
        category: 'Education', 
        icon: <BrainCircuit className="w-6 h-6 text-yellow-400 mb-4" />,
        detailedDescription: `Our Learning Management System (LMS) Platform is built to enhance educational experiences in schools, universities, and corporate training environments.
        
        <br/><br/>
        
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Interactive course creation with multimedia support</li>
          <li>Progress tracking and adaptive learning paths</li>
          <li>Assessment tools with automatic grading</li>
          <li>Discussion forums and collaborative learning spaces</li>
          <li>Analytics dashboard for instructors and administrators</li>
        </ul>
        
        The LMS Platform creates engaging learning experiences, increases knowledge retention, and provides detailed insights into learner progress.`
    },
    { 
        name: 'ServiceHub', 
        description: 'Enhance operations with our reliable service management solution.', 
        category: 'Business', 
        icon: <Gem className="w-6 h-6 text-pink-400 mb-4" />,
        detailedDescription: `ServiceHub is our comprehensive service management platform designed to optimize operations and enhance customer satisfaction.
        
        <br/><br/>
        
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Service catalog management and request tracking</li>
          <li>Automated workflow management</li>
          <li>SLA monitoring and performance analytics</li>
          <li>Knowledge base for service delivery teams</li>
          <li>Client portal for service requests and status tracking</li>
        </ul>
        
        ServiceHub streamlines your service operations, improving efficiency and ensuring consistent service delivery to your customers.`
    },
    { 
        name: 'StaffTrack', 
        description: 'Modernize HR with our efficient attendance and workforce management system.',
        category: 'HR', 
        icon: <Users className="w-6 h-6 text-purple-400 mb-4" />,
        detailedDescription: `StaffTrack is a modern solution for tracking employee attendance, time-off, and work hours with precision and ease.
        
        <br/><br/>
        
        <strong>Key Features:</strong>
        <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
          <li>Biometric and mobile check-in capabilities</li>
          <li>Leave management with approval workflows</li>
          <li>Scheduling tools and shift management</li>
          <li>Payroll integration and reporting</li>
          <li>Compliance tracking for labor regulations</li>
        </ul>
        
        StaffTrack simplifies workforce management, reduces administrative burden, and provides accurate data for payroll and compliance purposes.`
    },
];

const services = [
    { 
      title: 'Development', 
      icon: <Code2 className="w-12 h-12 text-blue-400 mb-4" />, 
      description: "Crafting bespoke software solutions to meet your unique business needs. From concept to deployment, we ensure excellence.",
      detailedDescription: `Our software development service covers the entire development lifecycle, from ideation to deployment and maintenance.
      
      <br/><br/>
      
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Custom software development tailored to your specific requirements</li>
        <li>Web application development using modern frameworks and technologies</li>
        <li>Mobile app development for iOS and Android platforms</li>
        <li>Legacy system modernization and API integration</li>
        <li>DevOps implementation and CI/CD pipeline setup</li>
      </ul>
      
      We follow industry best practices and agile methodologies to deliver high-quality software solutions that drive business growth and efficiency.`
    },
    { 
      title: 'Consulting', 
      icon: <Briefcase className="w-12 h-12 text-green-400 mb-4" />, 
      description: "Providing expert guidance and strategic advice to drive your business growth and achieve your technology goals.",
      detailedDescription: `Our IT consulting services provide expert guidance to help you navigate complex technological and business challenges.
      
      <br/><br/>
      
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Technology strategy and roadmap development</li>
        <li>Digital transformation planning and implementation</li>
        <li>IT infrastructure assessment and optimization</li>
        <li>Vendor selection and management</li>
        <li>Technology risk assessment and security planning</li>
      </ul>
      
      Our experienced consultants work closely with your team to understand your business objectives and develop technology strategies that deliver tangible results.`
    },
    { 
      title: 'Automation', 
      icon: <Search className="w-12 h-12 text-yellow-400 mb-4" />, 
      description: "Ensuring the highest standards of quality through rigorous testing and automated quality assurance processes.",
      detailedDescription: `Our QA & Automation service ensures your software meets the highest standards of reliability, performance, and user experience.
      
      <br/><br/>
      
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Comprehensive test strategy and planning</li>
        <li>Manual and automated testing implementation</li>
        <li>Performance, security, and usability testing</li>
        <li>Continuous integration testing</li>
        <li>Test automation framework development</li>
      </ul>
      
      We implement robust testing methodologies and automation tools to identify issues early, reduce development costs, and deliver superior software quality.`
    },
    { 
      title: 'Database', 
      icon: <Database className="w-12 h-12 text-purple-400 mb-4" />, 
      description: "Designing, implementing, and managing robust database systems for optimal performance and data integrity.",
      detailedDescription: `Our Database Solutions cover everything from database design to optimization and ongoing administration.
      
      <br/><br/>
      
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Database architecture and design</li>
        <li>Data migration and integration services</li>
        <li>Performance tuning and optimization</li>
        <li>High availability and disaster recovery setup</li>
        <li>Database security and compliance implementation</li>
      </ul>
      
      We work with both SQL and NoSQL technologies to create scalable, secure, and high-performance database solutions that meet your business requirements.`
    },
    { 
      title: 'DevOps & Cloud', 
      icon: <Laptop2 className="w-12 h-12 text-orange-400 mb-4" />, 
      description: "Enhancing the speed, efficiency, and scalability of your systems with modern DevOps practices and cloud solutions.",
      detailedDescription: `Our DevOps & Cloud service helps identify and implement best practices for continuous integration, delivery, and cloud infrastructure.
      
      <br/><br/>
      
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Cloud migration strategy and implementation</li>
        <li>CI/CD pipeline development and optimization</li>
        <li>Infrastructure as Code (IaC) implementation</li>
        <li>Container orchestration with Kubernetes</li>
        <li>Cloud cost optimization and management</li>
      </ul>
      
      We help organizations adopt DevOps culture and cloud technologies to increase deployment frequency, reduce time to market, and improve system reliability.`
    },
    { 
      title: 'AI & ML', 
      icon: <BrainCircuit className="w-12 h-12 text-pink-400 mb-4" />, 
      description: "Developing cutting-edge AI-powered solutions to transform your business and gain a competitive edge.",
      detailedDescription: `Our AI & Machine Learning service helps businesses leverage artificial intelligence to solve complex problems and create new opportunities.
      
      <br/><br/>
      
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>AI strategy and implementation planning</li>
        <li>Machine learning model development and training</li>
        <li>Natural language processing solutions</li>
        <li>Computer vision and image recognition systems</li>
        <li>Predictive analytics and forecasting</li>
      </ul>
      
      We combine domain expertise with advanced AI technologies to create intelligent solutions that automate processes, uncover insights, and enhance decision-making.`
    },
];

const testimonials = [
    {
        name: "John Smith",
        company: "Acme Corp",
        quote: "Their team delivered our project on time and within budget.  Highly recommended!  Their communication was excellent.",
        image: "https://placehold.co/100x100/EEE/31343C?text=JS&font=Montserrat" // Placeholder
    },
    {
        name: "Jane Doe",
        company: "Beta Inc",
        quote: "We've been working with them for years and they consistently exceed our expectations.  A true partner in our success.",
        image: "https://placehold.co/100x100/EEE/31343C?text=JD&font=Montserrat"  // Placeholder
    },
    {
        name: "David Lee",
        company: "Gamma Co",
        quote: "Their expertise in AI helped us transform our business.  A game-changer for our operations.  We're seeing significant ROI.",
        image: "https://placehold.co/100x100/EEE/31343C?text=DL&font=Montserrat" // Placeholder
    }
];

const teamMembers = [
    {
        name: "Alice Johnson",
        title: "CEO & Co-Founder",
        image: `https://api.dicebear.com/7.x/micah/svg?seed=Alice&backgroundColor=b6e3f4`,
        social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "Bob Williams",
        title: "CTO & Co-Founder",
        image: `https://api.dicebear.com/7.x/micah/svg?seed=Bob&backgroundColor=d1d4f9`,
        social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "Zone Lax",
        title: "Project Manager",
        image: `https://api.dicebear.com/7.x/micah/svg?seed=Zone&backgroundColor=d1d4f9`,
        social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
        name: "Charlie Brown",
        title: "Software Engineer",
        image: `https://api.dicebear.com/7.x/micah/svg?seed=Charlie&backgroundColor=c0aede`,
        social: { linkedin: "#", github: "#", twitter: "#" }
    }
];

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of services including software development, consulting, quality assurance, database management, performance optimization, and AI solutions.  We tailor our expertise to your specific needs."
    },
    {
        question: "What technologies do you work with?",
        answer: "We work with modern technologies including .NET, React, React Native, and others.  We choose the best stack for your project needs, ensuring scalability and performance."
    },
    {
        question: "Do you offer support after project completion?",
        answer: "Yes, we offer ongoing support and maintenance to ensure your software continues to run smoothly.  We're committed to your long-term success."
    },
    {
        question: "How do you ensure project quality?",
        answer: "We follow industry best practices for development and quality assurance, including rigorous testing and code reviews.  Quality is built into every stage."
    },
    {
        question: "How do you handle project management?",
        answer: "We use agile methodologies to manage projects, ensuring transparency and collaboration throughout the development process.  You'll be involved every step of the way."
    }
];

// Animation Variants
const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const slideInVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    whileHover: { 
        scale: 1.03, 
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)", 
        transition: { duration: 0.2, ease: "easeOut" } 
    },
};

const HomePage: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
            <Head>
                <title>KoshiLabs - Crafting Digital Excellence</title>
                <meta name="description" content="Your trusted partner for innovative software solutions. We specialize in development, consulting, and AI-powered services." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="software development, consulting, AI solutions, KoshiLabs, Nepal" />
                <meta property="og:title" content="KoshiLabs - Crafting Digital Excellence" />
                <meta property="og:description" content="Your trusted partner for innovative software solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://koshilabs.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/your-kit-id.js" strategy="afterInteractive" />

            <Navbar />
            
            {/* Hero Section */}
            <header id="home" className="container mx-auto px-4 pt-32 pb-20 flex items-center justify-between relative overflow-hidden min-h-[90vh]">
                <FloatingSVG top="10%" left="10%" delay={0} size="md">
                    <Rocket className="text-blue-400/80" />
                </FloatingSVG>
                <FloatingSVG top="30%" right="30%" delay={2} size="sm">
                    <Zap className="text-yellow-400/80" />
                </FloatingSVG>
                <FloatingSVG bottom="20%" left="30%" delay={1} size="md">
                    <Wand2 className="text-purple-400/80" />
                </FloatingSVG>
                
                <div className="max-w-xl relative z-10 text-left">
                    <motion.h1
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8
                                   drop-shadow-lg font-heading"
                    >
                        Crafting Digital Excellence
                    </motion.h1>
                    <motion.p
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-xl text-gray-300 mb-12 leading-relaxed"
                    >
                        Your trusted partner for innovative software solutions. We specialize in development, consulting, and AI-powered services.
                    </motion.p>
                    <motion.div
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <a href="#contact">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white
                                        hover:from-blue-600 hover:to-purple-600 transition-all duration-300
                                        shadow-lg hover:shadow-xl text-xl px-8 py-6 rounded-full font-semibold hover-glow"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                                }}
                            >
                                Get Started
                            </Button>
                        </a>
                    </motion.div>
                </div>
                
                <div className="hidden md:block w-1/2 relative">
                    <motion.div 
                        className="absolute top-1/2 right-[10%] transform -translate-y-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div 
                            className="relative w-80 h-80"
                            animate={{ 
                                y: [0, -15, 0, 15, 0],
                            }}
                            transition={{ 
                                duration: 8, 
                                repeat: Infinity,
                                ease: "easeInOut" 
                            }}
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>
                            
                            {/* Globe/World */}
                            <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full" />
                            <div className="absolute inset-[10%] border border-blue-400/20 rounded-full" />
                            <div className="absolute inset-[20%] border border-blue-400/10 rounded-full" />
                            
                            {/* Tech connection points */}
                            <motion.div 
                                className="absolute top-[10%] left-[20%] w-3 h-3 bg-blue-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div 
                                className="absolute bottom-[15%] right-[30%] w-4 h-4 bg-purple-400 rounded-full"
                                animate={{ scale: [1, 1.8, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            />
                            <motion.div 
                                className="absolute top-[30%] right-[15%] w-3 h-3 bg-green-400 rounded-full"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            />
                            
                            {/* Connection lines */}
                            <motion.div className="absolute top-[45%] left-[45%] w-[100%] h-[1px] bg-blue-400/40 origin-left"
                                style={{ rotate: -30 }}
                                animate={{ opacity: [0.2, 0.6, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div className="absolute top-[45%] left-[45%] w-[90%] h-[1px] bg-purple-400/40 origin-left"
                                style={{ rotate: 45 }}
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            />
                            <motion.div className="absolute top-[45%] left-[45%] w-[80%] h-[1px] bg-green-400/40 origin-left"
                                style={{ rotate: 160 }}
                                animate={{ opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
                            />
                            
                            {/* Tech icons */}
                            <motion.div 
                                className="absolute top-0 left-[45%] p-2 bg-gray-900/80 rounded-full border border-blue-400/30"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Code2 className="w-5 h-5 text-blue-400" />
                            </motion.div>
                            <motion.div 
                                className="absolute bottom-5 right-[25%] p-2 bg-gray-900/80 rounded-full border border-purple-400/30"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            >
                                <Cpu className="w-5 h-5 text-purple-400" />
                            </motion.div>
                            <motion.div 
                                className="absolute right-0 top-[40%] p-2 bg-gray-900/80 rounded-full border border-green-400/30"
                                animate={{ x: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                            >
                                <BrainCircuit className="w-5 h-5 text-green-400" />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Services Section */}
            <section id="services" className="container mx-auto px-4 py-24 relative overflow-hidden">
                <FloatingSVG top="20%" right="10%" delay={0.5} size="lg">
                    <Layers3 className="text-green-400/80" />
                </FloatingSVG>
                <FloatingSVG bottom="10%" left="5%" delay={1.5} size="lg">
                    <Code2 className="text-blue-400/80" />
                </FloatingSVG>
                <h2 className="text-4xl font-bold text-center text-white mb-16 relative z-10 font-heading">
                    Our Services
                    <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="container mx-auto px-4 py-24 relative overflow-hidden bg-gray-950/50 backdrop-blur-md rounded-t-[4rem] border-t border-white/10">
                <FloatingSVG top="15%" left="5%" delay={0.8} size="lg">
                    <Boxes className="text-orange-400/80" />
                </FloatingSVG>
                <FloatingSVG bottom="25%" right="8%" delay={1.2} size="lg">
                    <Database className="text-purple-400/80" />
                </FloatingSVG>
                <h2 className="text-4xl font-bold text-center text-white mb-16 relative z-10 font-heading">
                    Our Products
                    <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h2>
                <div className="products-card-container">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <div className="mt-16 relative z-10 px-4">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="relative overflow-hidden bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                        
                        <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-md"></div>
                                    <div className="relative p-4 bg-gray-900/80 rounded-full border border-white/10">
                                        <Rocket className="w-14 h-14 text-purple-400" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">More projects over the horizon</h3>
                                    <p className="mt-2 text-lg text-gray-300">Have an idea? Let's collaborate to bring your vision to life!</p>
                                </div>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="shrink-0"
                            >
                                <Button 
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl font-medium"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                                    }}
                                >
                                    Get in Touch
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="container mx-auto px-4 py-24 relative overflow-hidden">
                <FloatingSVG bottom="10%" right="5%" delay={0.3} size="lg">
                    <UserCircle2 className="text-pink-400/80" />
                </FloatingSVG>
                <FloatingSVG top="15%" left="8%" delay={0.6} size="lg">
                    <Users className="text-blue-400/80" />
                </FloatingSVG>
                <h2 className="text-4xl font-bold text-center text-white mb-16 relative z-10 font-heading">
                    Our Team
                    <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="bg-gray-900/90 backdrop-blur-md py-24 relative overflow-hidden">
                <FloatingSVG top="10%" right="8%" delay={0.4} size="lg">
                    <Gem className="text-purple-400/80" />
                </FloatingSVG>
                <FloatingSVG bottom="15%" left="10%" delay={0.9} size="lg">
                    <Cpu className="text-green-400/80" />
                </FloatingSVG>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16 font-heading">
                        What Our Clients Say
                        <div className="mt-4 mx-auto w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="bg-gray-950/50 backdrop-blur-md py-24 rounded-b-[4rem] border-b border-white/10 relative overflow-hidden">
                <FloatingSVG top="20%" right="10%" delay={0.7} size="lg">
                    <BrainCircuit className="text-yellow-400/80" />
                </FloatingSVG>
                <FloatingSVG bottom="15%" left="8%" delay={1.1} size="lg">
                    <Search className="text-blue-400/80" />
                </FloatingSVG>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-16 font-heading">
                        Frequently Asked Questions
                        <div className="mt-4 mx-auto w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <FaqItem 
                                key={index} 
                                faq={faq} 
                                isOpen={openFaqIndex === index}
                                onToggle={() => toggleFaq(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="container mx-auto px-4 py-24 relative overflow-hidden">
                <FloatingSVG top="15%" right="10%" delay={0.5} size="lg">
                    <Briefcase className="text-blue-400/80" />
                </FloatingSVG>
                <FloatingSVG bottom="20%" left="5%" delay={1.3} size="lg">
                    <Zap className="text-purple-400/80" />
                </FloatingSVG>
                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    <ContactInfo />
                    <div className="w-full max-w-md">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900/80 backdrop-blur-md py-16 mt-20 rounded-t-[3rem] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                    <motion.div 
                        animate={{ 
                            x: ["0%", "-50%"],
                        }}
                        transition={{ 
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear"
                        }}
                        className="whitespace-nowrap"
                    >
                        {Array.from({ length: 10 }).map((_, i) => (
                            <span key={i} className="text-[20vw] font-black text-white/[0.02] tracking-tight select-none">
                                KOSHILABS&nbsp;
                            </span>
                        ))}
                    </motion.div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                        {/* KoshiLabs Text */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter inline-block">
                                    Koshi<span className="font-light">Labs</span>
                                </span>
                            </div>
                            <p className="mt-4 text-gray-400 max-w-xs">
                                Delivering innovative software solutions and services to businesses worldwide.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a>
                                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a>
                                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
                                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                                <a href="mailto:koshilabs@gmail.com" className="text-gray-400 hover:text-white transition-colors">Email Us</a>
                            </div>
                        </div>

                        {/* Social & Copyright */}
                        <div className="text-center md:text-right">
                            <h4 className="text-xl font-semibold text-white mb-6">Connect With Us</h4>
                            <div className="flex justify-center md:justify-end space-x-6 mb-8">
                                <a href="https://www.facebook.com/koshilabs" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i className="fab fa-facebook-f text-2xl"></i>
                                </a>
                                <a href="https://x.com/koshilabs" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i className="fab fa-twitter text-2xl"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/koshilabs" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <i className="fab fa-linkedin-in text-2xl"></i>
                                </a>
                                <a href="https://github.com/koshilabs" className="text-gray-400 hover:text-purple-400 transition-colors">
                                    <i className="fab fa-github text-2xl"></i>
                                </a>
                                <a href="https://www.instagram.com/koshilabs" className="text-gray-400 hover:text-pink-400 transition-colors">
                                    <i className="fab fa-instagram text-2xl"></i>
                                </a>
                            </div>
                            <div className="text-gray-400 text-lg">
                                © {new Date().getFullYear()} KoshiLabs. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
