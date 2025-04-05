import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Script from "next/script";
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
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Import our new components
import Navbar from "@/components/layout/Navbar";
import FloatingSVG from "@/components/ui/FloatingSVG";
import ServiceCard from "@/components/cards/ServiceCard";
import ProductCard from "@/components/cards/ProductCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import FaqItem from "@/components/sections/FaqItem";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import FloatingSVGGroup from "@/components/ui/FloatingSVGGroup";

// Dummy data for products and services
const products = [
  {
    name: "KoshiFit",
    description: "Revolutionize fitness with AI-powered personal training.",
    category: "Mobile",
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
        KoshiFit is designed to be your complete fitness companion, adapting to your needs and helping you achieve optimal results efficiently.`,
  },
  {
    name: "Accounting Suite",
    description: "Streamline finances with our intuitive accounting solution.",
    category: "Business",
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
        Accounting Suite streamlines your financial operations, saving time and reducing errors while providing valuable insights into your business performance.`,
  },
  {
    name: "Finance API",
    description: "Integrate accounting seamlessly with our robust API.",
    category: "API",
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
        The Finance API enables seamless integration of financial services into your software ecosystem, with security and performance at its core.`,
  },
  {
    name: "LMS Platform",
    description: "Transform education with our innovative learning platform.",
    category: "Education",
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
        The LMS Platform creates engaging learning experiences, increases knowledge retention, and provides detailed insights into learner progress.`,
  },
  {
    name: "ServiceHub",
    description:
      "Enhance operations with our reliable service management solution.",
    category: "Business",
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
        ServiceHub streamlines your service operations, improving efficiency and ensuring consistent service delivery to your customers.`,
  },
  {
    name: "StaffTrack",
    description:
      "Modernize HR with our efficient attendance and workforce management system.",
    category: "HR",
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
        StaffTrack simplifies workforce management, reduces administrative burden, and provides accurate data for payroll and compliance purposes.`,
  },
];

const services = [
  {
    title: "Development",
    icon: <Code2 className="w-12 h-12 text-blue-400 mb-4" />,
    description:
      "Crafting bespoke software solutions to meet your unique business needs. From concept to deployment, we ensure excellence.",
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
      We follow industry best practices and agile methodologies to deliver high-quality software solutions that drive business growth and efficiency.`,
  },
  {
    title: "Modernization",
    icon: <Rocket className="w-12 h-12 text-indigo-400 mb-4" />,
    description:
      "Transform your legacy systems into modern, scalable solutions that future-proof your business and increase operational efficiency.",
    detailedDescription: `Our Modernization service focuses on transforming outdated systems and processes to meet modern business requirements.
      <br/><br/>
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Legacy system assessment and migration planning</li>
        <li>Monolith to microservices architecture transformation</li>
        <li>Cloud migration and infrastructure modernization</li>
        <li>Tech stack upgrades and code refactoring</li>
        <li>UI/UX redesign and modern interface implementation</li>
      </ul>
      We help businesses modernize their software systems while minimizing disruption, preserving valuable business logic, and ensuring continuity during the transition.`,
  },
  {
    title: "Performance",
    icon: <TrendingUp className="w-12 h-12 text-green-400 mb-4" />,
    description:
      "Optimize your applications for peak performance by fine-tuning frontend, backend, and database functionality with cutting-edge technologies.",
    detailedDescription: `Our Performance Optimization service ensures your software runs at maximum efficiency, providing the best possible user experience.
      <br/><br/>
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Comprehensive performance auditing and bottleneck identification</li>
        <li>Frontend optimization for faster page loads and rendering</li>
        <li>Backend code optimization and server-side performance tuning</li>
        <li>Database query optimization and indexing strategies</li>
        <li>Scalability planning and implementation for high-traffic applications</li>
      </ul>
      We employ cutting-edge technologies and best practices to dramatically improve your application's speed, responsiveness, and resource efficiency.`,
  },
  {
    title: "Security",
    icon: <Boxes className="w-12 h-12 text-red-400 mb-4" />,
    description:
      "Protect your applications and data with comprehensive security solutions that identify vulnerabilities and implement industry-leading protection measures.",
    detailedDescription: `Our Security service provides robust protection for your applications, infrastructure, and data assets through comprehensive assessment and implementation.
      <br/><br/>
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Security assessment and vulnerability scanning</li>
        <li>Secure coding practices and application hardening</li>
        <li>Authentication and authorization system implementation</li>
        <li>Data encryption and protection strategies</li>
        <li>Security monitoring and incident response planning</li>
      </ul>
      We ensure your systems are protected against evolving cyber threats through continuous security testing, remediation, and implementation of industry best practices.`,
  },
  {
    title: "Database",
    icon: <Database className="w-12 h-12 text-purple-400 mb-4" />,
    description:
      "Designing, implementing, and managing robust database systems for optimal performance and data integrity.",
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
      We work with both SQL and NoSQL technologies to create scalable, secure, and high-performance database solutions that meet your business requirements.`,
  },
  {
    title: "AI & ML",
    icon: <BrainCircuit className="w-12 h-12 text-pink-400 mb-4" />,
    description:
      "Developing cutting-edge AI-powered solutions to transform your business and gain a competitive edge.",
    detailedDescription: `Our AI & ML Solutions help businesses leverage the power of artificial intelligence and machine learning to gain insights, automate processes, and create innovative products.
      <br/><br/>
      <strong>What We Offer:</strong>
      <ul class="list-disc pl-5 space-y-2 mt-3 mb-4">
        <li>Custom AI model development and training</li>
        <li>Natural Language Processing (NLP) integration</li>
        <li>Computer Vision solutions</li>
        <li>Predictive analytics and forecasting models</li>
        <li>AI strategy consulting and implementation roadmaps</li>
      </ul>
      We turn complex data into actionable intelligence, helping you make data-driven decisions that drive growth and innovation.`,
  },
  {
    title: "Automation",
    icon: <Search className="w-12 h-12 text-yellow-400 mb-4" />,
    description:
      "Ensuring the highest standards of quality through rigorous testing and automated quality assurance processes.",
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
      We implement robust testing methodologies and automation tools to identify issues early, reduce development costs, and deliver superior software quality.`,
  },
  {
    title: "Consulting",
    icon: <Briefcase className="w-12 h-12 text-orange-400 mb-4" />,
    description:
      "Providing expert guidance and strategic advice to drive your business growth and achieve your technology goals.",
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
      Our experienced consultants work closely with your team to understand your business objectives and develop technology strategies that deliver tangible results.`,
  },
  {
    title: "DevOps & Cloud",
    icon: <Laptop2 className="w-12 h-12 text-blue-500 mb-4" />,
    description:
      "Enhancing the speed, efficiency, and scalability of your systems with modern DevOps practices and cloud solutions.",
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
      We help organizations adopt DevOps culture and cloud technologies to increase deployment frequency, reduce time to market, and improve system reliability.`,
  },
];

const testimonials = [
  {
    name: "John Smith",
    company: "Acme Corp",
    quote:
      "Their team delivered our project on time and within budget.  Highly recommended!  Their communication was excellent.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JohnSmith&style=circle&backgroundColor=ffaabb",
  },
  {
    name: "Jane Doe",
    company: "Beta Inc",
    quote:
      "We've been working with them for years and they consistently exceed our expectations.  A true partner in our success.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JaneDoe&style=circle&backgroundColor=aabbff",
  },
  {
    name: "David Lee",
    company: "Gamma Co",
    quote:
      "Their expertise in AI helped us transform our business.  A game-changer for our operations.  We're seeing significant ROI.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidLee&style=circle&backgroundColor=bbffaa",
  },
];

const teamMembers = [
  {
    name: "Raju",
    title: "CEO",
    image: "/teams/raju.webp",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Sanam",
    title: "CTO",
    image: "/teams/sanam.webp",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Gopal",
    title: "Software Architect",
    image: "/teams/gopal.webp",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Loop",
    title: "Software Engineer",
    image: "/teams/loop.webp",
    social: { linkedin: "#", github: "#", twitter: "#" },
  },
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including software development, consulting, quality assurance, database management, performance optimization, and AI solutions. We specialize in product development, website development, system modernization, performance optimization, and strategic consulting. Our teams are skilled in providing both outsourcing services and complete project delivery.",
  },
  {
    question: "What makes Koshi Labs different from other software companies?",
    answer:
      "Koshi Labs was founded on the principles of trust, quality, and affordability. With over 9 years of experience, our small team of experts delivers high-quality solutions at competitive prices. We're transparent in every step, from client communication to our technical approach. We utilize AI tools where appropriate to enhance efficiency, and we're deeply committed to understanding your unique business needs before proposing solutions.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including .NET, React, React Native, and various other frameworks and platforms. We choose the best technology stack for each project's specific needs, ensuring scalability, performance, and long-term maintainability. Our expertise spans both front-end and back-end development, cloud infrastructure, and AI/ML implementation.",
  },
  {
    question: "How do you approach new projects?",
    answer:
      "We begin by thoroughly understanding your business needs and objectives. Our approach is collaborative and transparent from the start. We develop a comprehensive project plan, establish clear milestones, and maintain regular communication throughout the development process. We believe in agile methodologies that allow for flexibility and iterative improvements based on feedback.",
  },
  {
    question: "Do you offer support after project completion?",
    answer:
      "Yes, we offer ongoing support and maintenance to ensure your software continues to operate smoothly. We're committed to your long-term success and provide various support options to meet your needs, including regular updates, performance monitoring, and technical assistance. Our goal is to build lasting partnerships with our clients.",
  },
  {
    question: "Why should I choose Koshi Labs for my software needs?",
    answer:
      "We offer an unwavering commitment to quality, delivering software that exceeds expectations. Our services are affordable without compromising on excellence. We combine local expertise with global standards, understanding the unique challenges of various markets. Most importantly, we view ourselves as partners, not just service providers, dedicated to your success through every stage of development and beyond.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow industry best practices for development and quality assurance, including rigorous testing and code reviews. Quality is built into every stage of our development process. We implement continuous integration/continuous deployment pipelines, automated testing, and regular security audits. Our team adheres to established coding standards and documentation practices to ensure maintainable, high-quality code.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models tailored to project needs, including fixed-price projects, time and materials, and retainer-based engagements. We believe in transparent pricing with no hidden costs. During our initial consultation, we'll discuss your requirements in detail and recommend the most appropriate pricing structure for your specific project.",
  },
];

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

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

const HomePage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Add instant scrolling
  useEffect(() => {
    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const yOffset = -80; // Offset for fixed header
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'auto'});
          }
        }
      });
    });

    // Clean up
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
      <Head>
        <title>KoshiLabs - Crafting Digital Excellence</title>
        <meta
          name="description"
          content="Your trusted partner for innovative software solutions. We specialize in development, consulting, and AI-powered services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="software development, consulting, AI solutions, KoshiLabs, Nepal"
        />
        <meta
          property="og:title"
          content="KoshiLabs - Crafting Digital Excellence"
        />
        <meta
          property="og:description"
          content="Your trusted partner for innovative software solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://koshilabs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <header
        id="home"
        className="container mx-auto px-6 lg:px-8 pt-32 pb-32 flex items-center justify-between relative overflow-hidden min-h-[90vh]"
      >
        <FloatingSVGGroup 
          elements={[
            {
              icon: <Rocket className="text-blue-400/90" />,
              position: { top: "5%", left: "20%" },
              size: "lg",
              opacity: 0.8,
              delay: 0
            },
            {
              icon: <Zap className="text-yellow-400/90" />,
              position: { top: "30%", right: "15%" },
              size: "md",
              opacity: 0.7,
              delay: 2
            },
            {
              icon: <Wand2 className="text-purple-400/90" />,
              position: { bottom: "15%", left: "40%" },
              size: "lg",
              opacity: 0.8,
              delay: 1
            }
          ]}
        />

        <div className="max-w-xl relative z-10 text-left mx-4 md:mx-8 mt-8">
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
            Your trusted partner for innovative software solutions. We
            specialize in development, consulting, and AI-powered services.
          </motion.p>
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a href="#about">
              <Button
                size="lg"
                className="bg-white/10 border-2 border-blue-500/50 text-white
                           hover:bg-white/20 transition-all duration-300
                           shadow-lg hover:shadow-xl text-xl px-8 py-6 rounded-full font-semibold hover-glow"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById("about");
                  if (targetElement) {
                    const yOffset = -80;
                    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({top: y, behavior: 'auto'});
                  }
                }}
              >
                About Us
              </Button>
            </a>
          </motion.div>
        </div>

        <div className="hidden md:block w-1/2 relative mx-4">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative w-[450px] h-[450px]"
              animate={{
                y: [0, -15, 0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>

              {/* Simplified globe with fewer elements */}
              <div className="absolute inset-0 border-2 border-blue-400/40 rounded-full" />
              <div className="absolute inset-[20%] border border-blue-400/20 rounded-full" />

              {/* Reduced number of tech points */}
              <motion.div
                className="absolute top-[10%] left-[20%] w-4 h-4 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-[15%] right-[30%] w-5 h-5 bg-purple-400 rounded-full"
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />

              {/* Reduced number of connection lines */}
              <motion.div
                className="absolute top-[45%] left-[45%] w-[100%] h-[1.5px] bg-blue-400/40 origin-left"
                style={{ rotate: -30 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-[45%] left-[45%] w-[90%] h-[1.5px] bg-purple-400/40 origin-left"
                style={{ rotate: 45 }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />

              {/* Reduced number of tech icons */}
              <motion.div
                className="absolute top-0 left-[45%] p-3 bg-gray-900/80 rounded-full border border-blue-400/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code2 className="w-8 h-8 text-blue-400" />
              </motion.div>
              <motion.div
                className="absolute bottom-5 right-[25%] p-3 bg-gray-900/80 rounded-full border border-purple-400/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Cpu className="w-8 h-8 text-purple-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* About Us Section */}
      <section
        id="about"
        className="container mx-auto px-6 lg:px-8 py-36 relative overflow-hidden"
      >
        <FloatingSVGGroup 
          elements={[
            {
              icon: <Gem className="text-purple-400/90" />,
              position: { top: "20%", right: "15%" },
              size: "xl",
              opacity: 0.8,
              delay: 0.3
            },
            {
              icon: <Rocket className="text-blue-400/90" />,
              position: { bottom: "15%", left: "15%" },
              size: "lg",
              opacity: 0.8,
              delay: 0.7
            },
            {
              icon: <BrainCircuit className="text-pink-400/90" />,
              position: { top: "40%", left: "25%" },
              size: "md",
              opacity: 0.7,
              delay: 0.5
            }
          ]}
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                About Us
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>

            <div className="space-y-6 text-lg text-gray-300">
              <p>
                Koshi Labs was born from the shared vision of three friends,
                each with over 9+ years of hands-on experience in software
                development. We witnessed firsthand the need for reliable,
                affordable, and high-quality software solutions, particularly in
                Nepal.
              </p>
              <p>
                Frustrated by the disconnect between client needs and the
                solutions offered, we founded Koshi Labs to bridge that gap. Our
                mission is simple: to build trust with our clients and deliver
                software that not only meets their requirements but also exceeds
                their expectations.
              </p>
              <p>
                We are committed to providing exceptional support and fostering
                long-term partnerships. We are passionate about leveraging
                technology to drive positive change, both within Nepal and
                beyond.
              </p>
              <p className="text-xl font-semibold text-white">
                Our Philosophy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Founded on the principles of trust, quality, and affordability
                </li>
                <li>Transparency in every step of the development process</li>
                <li>Small team of experts delivering big results</li>
                <li>
                  Leveraging AI tools where possible for enhanced efficiency
                </li>
                <li>Deep commitment to understanding client needs</li>
              </ul>
            </div>

            <div className="mt-10">
              <a href="#services">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white
                                        hover:from-blue-600 hover:to-purple-600 transition-all duration-300
                                        shadow-lg hover:shadow-xl px-8 py-4 rounded-full font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById("services");
                    if (targetElement) {
                      const yOffset = -80;
                      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({top: y, behavior: 'auto'});
                    }
                  }}
                >
                  Explore Our Services
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Us?
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Unwavering Commitment to Quality
                      </h4>
                      <p className="text-gray-300 mt-2">
                        We go above and beyond to deliver software that exceeds
                        your expectations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <BrainCircuit className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Affordable Excellence
                      </h4>
                      <p className="text-gray-300 mt-2">
                        High-quality software doesn't have to break the bank. We
                        offer competitive pricing without compromising quality.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Gem className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Local Expertise, Global Standards
                      </h4>
                      <p className="text-gray-300 mt-2">
                        We understand unique market challenges and apply global
                        best practices to deliver impactful solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        Dedicated Support
                      </h4>
                      <p className="text-gray-300 mt-2">
                        We're more than just developers; we're your partners. We
                        provide ongoing support to ensure your software meets
                        evolving needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="container mx-auto px-6 lg:px-8 py-24 relative overflow-hidden"
      >
        <FloatingSVGGroup 
          elements={[
            {
              icon: <Cpu className="text-blue-400/80" />,
              position: { top: "10%", left: "5%" },
              size: "xl",
              opacity: 0.7,
              delay: 0.5
            },
            {
              icon: <Code2 className="text-purple-400/80" />,
              position: { bottom: "20%", right: "5%" },
              size: "lg",
              opacity: 0.7,
              delay: 0.9
            },
            {
              icon: <Layers3 className="text-green-400/80" />,
              position: { bottom: "40%", left: "30%" },
              size: "md",
              opacity: 0.6,
              delay: 1.3
            }
          ]}
        />
        
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
      <section
        id="products"
        className="container mx-auto px-6 lg:px-8 py-24 relative overflow-hidden bg-gray-950/50 backdrop-blur-md rounded-t-[4rem] border-t border-white/10"
      >
        <FloatingSVGGroup 
          elements={[
            {
              icon: <Boxes className="text-orange-400/80" />,
              position: { top: "15%", left: "5%" },
              size: "lg",
              opacity: 0.7,
              delay: 0.8
            },
            {
              icon: <Database className="text-purple-400/80" />,
              position: { bottom: "25%", right: "8%" },
              size: "lg",
              opacity: 0.7,
              delay: 1.2
            },
            {
              icon: <Wand2 className="text-pink-400/80" />,
              position: { top: "40%", right: "20%" },
              size: "md",
              opacity: 0.7,
              delay: 0.6
            }
          ]}
        />
        
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
                  <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    More projects over the horizon
                  </h3>
                  <p className="mt-2 text-lg text-gray-300">
                    Have an idea? Let's collaborate to bring your vision to
                    life!
                  </p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} className="shrink-0">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl font-medium w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetElement = document.getElementById("contact");
                    if (targetElement) {
                      const yOffset = -80;
                      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({top: y, behavior: 'auto'});
                    }
                  }}
                >
                  <span className="pointer-events-none">Get in Touch</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="container mx-auto px-6 lg:px-8 py-36 relative overflow-hidden"
      >
        <FloatingSVGGroup 
          elements={[
            {
              icon: <UserCircle2 className="text-pink-400/90" />,
              position: { bottom: "10%", right: "5%" },
              size: "xl",
              opacity: 0.8,
              delay: 0.3
            },
            {
              icon: <Users className="text-blue-400/90" />,
              position: { top: "15%", left: "8%" },
              size: "xl",
              opacity: 0.8,
              delay: 0.6
            }
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10 font-heading inline-block">
            Our Team
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experts behind Koshi Labs. With over 9+ years of
            experience, our team is passionate about creating software solutions
            that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <FloatingSVGGroup 
            elements={[
              {
                icon: <Users className="text-purple-400/80" />,
                position: { top: "10%", right: "5%" },
                size: "lg",
                opacity: 0.7,
                delay: 0.3
              },
              {
                icon: <Gem className="text-blue-400/80" />,
                position: { bottom: "15%", left: "8%" },
                size: "md",
                opacity: 0.7,
                delay: 0.5
              }
            ]}
          />

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-blue-400">Clients Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Hear from businesses that have trusted us with their projects.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-gray-950/50 backdrop-blur-md py-24 rounded-b-[4rem] border-b border-white/10 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <FloatingSVGGroup 
            elements={[
              {
                icon: <Boxes className="text-blue-400/90" />,
                position: { top: "20%", right: "10%" },
                size: "xl",
                opacity: 0.8,
                delay: 0.7
              },
              {
                icon: <Search className="text-purple-400/90" />,
                position: { bottom: "25%", left: "10%" },
                size: "lg",
                opacity: 0.7,
                delay: 0.4
              }
            ]}
          />

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently <span className="text-blue-400">Asked Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our services and process.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <FloatingSVGGroup 
            elements={[
              {
                icon: <Briefcase className="text-blue-400/80" />,
                position: { top: "15%", right: "10%" },
                size: "lg",
                opacity: 0.7,
                delay: 0.5
              },
              {
                icon: <Laptop2 className="text-purple-500/80" />,
                position: { bottom: "10%", left: "5%" },
                size: "md",
                opacity: 0.7,
                delay: 0.7
              }
            ]}
          />

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
              Let's<span className="text-blue-400"> Work Together</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
              Ready to start your next project? Reach out to us to discuss your
              needs and how we can help bring your vision to life.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <ContactInfo />
            </div>
            <div className="w-full max-w-md mx-auto md:mx-0">
              <ContactForm />
            </div>
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
              ease: "linear",
            }}
            className="whitespace-nowrap"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-[20vw] font-black text-white/[0.02] tracking-tight select-none"
              >
                KOSHILABS&nbsp;
              </span>
            ))}
          </motion.div>
        </div>
        
        <FloatingSVGGroup 
          elements={[
            {
              icon: <Rocket className="text-blue-400/60" />,
              position: { bottom: "60%", left: "5%" },
              size: "md",
              opacity: 0.3,
              delay: 0.3
            }
          ]}
          maxElements={1}
        />
        
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
                Delivering innovative software solutions and services to
                businesses worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-white mb-6">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:koshilabs@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>

            {/* Social & Copyright */}
            <div className="text-center md:text-right">
              <h4 className="text-xl font-semibold text-white mb-6">
                Connect With Us
              </h4>
              <div className="flex justify-center md:justify-end space-x-6 mb-8">
                <a
                  href="https://www.facebook.com/koshilabs"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/koshilabs"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/koshilabs"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/koshilabs"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/koshilabs"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
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
