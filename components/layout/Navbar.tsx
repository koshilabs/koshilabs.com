import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-1 mt-1"
          >
            {item.children &&
              item.children.map((child, index) => (
                <a
                  key={index}
                  href={child.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = child.href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      const yOffset = -80;
                      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({top: y, behavior: 'auto'});
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
const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-[95%] max-w-lg bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 my-4 shadow-2xl overflow-y-auto max-h-[90vh]"
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

            <nav className="space-y-3">
              {navItems.map((item, index) =>
                item.children ? (
                  <MobileSubmenuItem
                    key={index}
                    item={item}
                    onClose={onClose}
                  />
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.substring(1);
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        const yOffset = -80;
                        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'auto'});
                      }
                      onClose();
                    }}
                    className={cn(
                      "flex items-center w-full justify-center text-gray-200 hover:text-white hover:bg-white/10 py-4 px-4 rounded-xl transition-all text-lg font-medium border border-transparent hover:border-white/10",
                      activeSection === item.href.substring(1)
                        ? "bg-white/10 text-white border-white/20"
                        : ""
                    )}
                  >
                    {item.label}
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
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      // Track active section for navbar highlighting
      const sections = [
        "home",
        "about",
        "services",
        "products",
        "team",
        "testimonials",
        "faq",
        "contact",
      ]; // Add all your section ids
      let currentSection = "home"; // Default
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = sectionId;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Use instant scrolling instead of smooth
      const yOffset = -80; // Offset for fixed header
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'auto'});
    }
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Enhance scroll behavior
  useEffect(() => {
    // Add event listeners to all anchor links - use instant scrolling
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
    <>
      {isMobile ? (
        // Mobile Navbar
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-md shadow-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#home"
              className="flex items-center nav-item"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              <div className="flex items-center">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter">
                  Koshi<span className="font-light">Labs</span>
                </span>
              </div>
            </a>

            <Button
              variant="ghost"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-white/10 rounded-full w-10 h-10 p-0 flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </motion.nav>
      ) : (
        // Desktop Navbar
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-0 right-0 mx-auto z-40 transition-all duration-300 w-fit max-w-[95%]"
        >
          <div className="flex items-center bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-full py-2 px-4">
            <a
              href="#home"
              className="flex items-center mr-3"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
            >
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full blur-md"></div>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-heading tracking-tighter hidden sm:inline-block relative z-10">
                    Koshi<span className="font-light">Labs</span>
                  </span>
                </div>
              </div>
            </a>

            <div className="flex items-center">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    scrollToSection(item.href);
                  }}
                  className={cn(
                    "relative px-3 py-1.5 transition-all duration-200 text-sm md:text-base font-medium rounded-full",
                    activeSection === item.href.substring(1)
                      ? "text-white bg-white/10"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 mx-auto w-1 h-1 bg-blue-400 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
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
