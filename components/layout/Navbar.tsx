import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
    label: string;
    href: string;
    children?: Array<{
        label: string;
        href: string;
    }>;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
    activeSection: string;
}

const MobileSubmenuItem: React.FC<{
    item: NavItem;
    onClose: () => void;
}> = ({ item, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-gray-200 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-all text-lg font-medium border border-transparent hover:border-white/10"
            >
                <span>{item.label}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-1 mt-1"
                    >
                        {item.children && item.children.map((child, index) => (
                            <a
                                key={index}
                                href={child.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const targetId = child.href.substring(1);
                                    const targetElement = document.getElementById(targetId);
                                    if (targetElement) {
                                        targetElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                    onClose();
                                }}
                                className="flex items-center text-gray-300 hover:text-white hover:bg-white/10 py-2 px-6 rounded-xl transition-all text-base w-full border border-transparent hover:border-white/5"
                            >
                                {child.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Mobile Menu Component
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems, activeSection }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="relative w-[90%] max-w-lg bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl overflow-y-auto max-h-[80vh]"
                    >
                        <div className="absolute right-4 top-4">
                            <Button
                                variant="ghost"
                                onClick={onClose}
                                className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0 flex items-center justify-center"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                        
                        <div className="flex justify-center mb-8 mt-2">
                            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter">
                                Koshi<span className="font-light">Labs</span>
                            </span>
                        </div>
                        
                        <nav className="space-y-2">
                            {navItems.map((item, index) =>
                                item.children ? (
                                    <MobileSubmenuItem key={index} item={item} onClose={onClose} />
                                ) : (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const targetId = item.href.substring(1);
                                            const targetElement = document.getElementById(targetId);
                                            if (targetElement) {
                                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                            }
                                            onClose();
                                        }}
                                        className={cn(
                                            "relative px-3 py-2 rounded-full transition-all duration-200 text-sm font-medium nav-item",
                                            activeSection === item.href.substring(1)
                                                ? "text-white bg-white/10"
                                                : "text-gray-200 hover:text-white"
                                        )}
                                    >
                                        {item.label}
                                        {activeSection === item.href.substring(1) && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute bottom-0 left-0 right-0 mx-auto w-1.5 h-1.5 bg-blue-400 rounded-full"
                                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </a>
                                )
                            )}
                        </nav>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const [activeSection, setActiveSection] = useState('');

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Products', href: '#products' },
        { label: 'Team', href: '#team' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            // Track active section for navbar highlighting
            const sections = ['home', 'services', 'products', 'team', 'testimonials', 'faq', 'contact']; // Add all your section ids
            let currentSection = 'home'; // Default
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = sectionId;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (href: string) => {
        const targetId = href.substring(1); // Remove the '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                ref={navRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 max-w-3xl w-full dock-blur"
            >
                <div className="flex items-center justify-between px-4 sm:px-6">
                    <a href="#home" className="flex items-center nav-item" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#home');
                    }}>
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter hidden sm:inline-block">
                                Koshi<span className="font-light">Labs</span>
                            </span>
                        </div>
                    </a>
                    
                    <div className="hidden md:flex items-center justify-center nav-menu">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    scrollToSection(item.href);
                                }}
                                className={cn(
                                    "relative px-3 py-2 rounded-full transition-all duration-200 text-sm font-medium nav-item",
                                    activeSection === item.href.substring(1)
                                        ? "text-white bg-white/10"
                                        : "text-gray-200 hover:text-white"
                                )}
                            >
                                {item.label}
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 right-0 mx-auto w-1.5 h-1.5 bg-blue-400 rounded-full"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="flex md:hidden">
                        <Button
                            variant="ghost"
                            onClick={toggleMobileMenu}
                            className="text-white hover:bg-white/10 ml-auto rounded-full w-10 h-10 p-0 flex items-center justify-center"
                            aria-label="Toggle mobile menu"
                        >
                            <Menu className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </motion.nav>
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => setMobileMenuOpen(false)} 
                navItems={navItems} 
                activeSection={activeSection}
            />
        </>
    );
};

export default Navbar; 