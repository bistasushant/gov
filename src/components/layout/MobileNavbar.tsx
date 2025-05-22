// components/layout/MobileNavbar.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

const navItems: NavItem[] = [
    { title: "Home", href: "/" },
    {
        title: "About NEC",
        href: "#",
        submenu: [
            { title: "Background", href: "/background" },
            { title: "Objective And Vision", href: "/objective-vision" },
            { title: "Governing Board", href: "/governing-board" },
            { title: "Committees", href: "/committees" },
            { title: "Organizational Chart", href: "/organizational-chart" },
            { title: "Message From Chairman", href: "/message-chairman" },
            { title: "Message From Registrar", href: "/message-registrar" },
        ],
    },
    {
        title: "Registration",
        href: "#",
        submenu: [{ title: "Register Online", href: "/register-online" }],
    },
    {
        title: "General Engineers",
        href: "#",
        submenu: [
            { title: "Hardcopy Registered (Before 2020)", href: "/hardcopy-registered" },
            { title: "Online Registered (After 2020)", href: "/online-registered" },
        ],
    },
    {
        title: "More",
        href: "#",
        submenu: [
            { title: "Recognized Institutions", href: "/recognized-institutions" },
            { title: "Professional ENG", href: "/professional-eng" },
            { title: "Downloads", href: "/downloads" },
            { title: "Contact Us", href: "/contact" },
        ],
    },
];

const MobileNavbar: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    // Calculate derived states
    const showRibbon = scrollY <= 50;
    const ribbonHeight = 40; // Fixed height for the ribbon

    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = useCallback(() => {
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
            setScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 10);
        }, 16); // ~60fps
    }, []);

    useEffect(() => {
        // Set initial scroll position
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        setScrollY(currentScrollY);
        setIsScrolled(currentScrollY > 10);

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [handleScroll]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const toggleSubmenu = (title: string) => {
        setActiveSubmenu(activeSubmenu === title ? null : title);
    };

    return (
        <div className="fixed w-full z-40 top-0">
            {/* Ribbon Section - Always in DOM but animated */}
            <motion.div
                initial={false}
                animate={{
                    height: showRibbon ? ribbonHeight : 0,
                    opacity: showRibbon ? 1 : 0,
                    y: showRibbon ? 0 : -ribbonHeight,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
                className="relative bg-red-600 text-white shadow-md overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    <ul className="flex items-center gap-4 m-0 p-0 list-none">
                        <li>
                            <a href="tel:01-4520655" className="text-white hover:text-gray-200 flex items-center text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-1.5 flex-shrink-0"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <span className="hidden sm:inline">01-4520655, 01-4520656</span>
                                <span className="sm:hidden">01-4520655</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@nec.gov.np" className="text-white hover:text-gray-200 flex items-center text-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-1.5 flex-shrink-0"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span className="hidden sm:inline">info@nec.gov.np</span>
                                <span className="sm:hidden">info@nec.gov.np</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 border-t-[40px] border-t-[#991f2b] border-r-[20px] border-r-transparent w-0 h-0"></div>
                <div className="absolute top-0 right-0 border-t-[40px] border-t-[#991f2b] border-l-[20px] border-l-transparent w-0 h-0"></div>
            </motion.div>

            {/* Main Navbar Section */}
            <motion.div
                initial={false}
                animate={{
                    y: showRibbon ? 0 : -ribbonHeight,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
            >
                <motion.nav
                    animate={{
                        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0)",
                        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
                        boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="w-full"
                >
                    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
                        <Link href="/" className="flex items-center z-50">
                            <Image
                                src="/images/logo-dark.png"
                                alt="NEC Logo"
                                width={180}
                                height={72}
                                className="object-contain"
                                priority
                            />
                        </Link>

                        <button
                            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-50 relative"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation menu"
                        >
                            <motion.span
                                animate={{
                                    backgroundColor: isScrolled || isMenuOpen ? "#000000" : "#ffffff",
                                    rotate: isMenuOpen ? 45 : 0,
                                    y: isMenuOpen ? 8 : 0,
                                }}
                                className="w-full h-0.5 block origin-center"
                            />
                            <motion.span
                                animate={{
                                    backgroundColor: isScrolled || isMenuOpen ? "#000000" : "#ffffff",
                                    opacity: isMenuOpen ? 0 : 1,
                                    scaleX: isMenuOpen ? 0 : 1,
                                }}
                                className="w-full h-0.5 block origin-center"
                            />
                            <motion.span
                                animate={{
                                    backgroundColor: isScrolled || isMenuOpen ? "#000000" : "#ffffff",
                                    rotate: isMenuOpen ? -45 : 0,
                                    y: isMenuOpen ? -8 : 0,
                                }}
                                className="w-full h-0.5 block origin-center"
                            />
                        </button>
                    </div>
                </motion.nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                type: "tween",
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100"
                        >
                            <div className="max-w-7xl mx-auto px-4 py-2 max-h-[calc(100vh-120px)] overflow-y-auto">
                                {navItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border-b border-gray-100 last:border-b-0"
                                    >
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleSubmenu(item.title)}
                                                    className="w-full text-left px-4 py-3 font-medium text-gray-900 hover:text-indigo-600 flex justify-between items-center transition-colors duration-200"
                                                >
                                                    {item.title}
                                                    <motion.svg
                                                        animate={{ rotate: activeSubmenu === item.title ? 180 : 0 }}
                                                        transition={{
                                                            type: "tween",
                                                            duration: 0.2,
                                                            ease: [0.4, 0, 0.2, 1]
                                                        }}
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                    </motion.svg>
                                                </button>
                                                <AnimatePresence>
                                                    {activeSubmenu === item.title && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{
                                                                type: "tween",
                                                                duration: 0.25,
                                                                ease: [0.4, 0, 0.2, 1]
                                                            }}
                                                            className="pl-4 pb-2 bg-gray-50/50 overflow-hidden"
                                                        >
                                                            {item.submenu.map((subitem, subindex) => (
                                                                <li key={subindex}>
                                                                    <Link
                                                                        href={subitem.href}
                                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-md transition-colors duration-200"
                                                                        onClick={() => {
                                                                            setIsMenuOpen(false);
                                                                            setActiveSubmenu(null);
                                                                        }}
                                                                    >
                                                                        {subitem.title}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="block px-4 py-3 font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-200"
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setActiveSubmenu(null);
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default MobileNavbar;