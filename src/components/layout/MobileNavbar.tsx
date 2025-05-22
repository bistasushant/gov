// components/layout/MobileNavbar.tsx
"use client";

import React, { useState, useEffect } from "react";
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
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showRibbon, setShowRibbon] = useState<boolean>(true);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Update scroll states with a small threshold to prevent jitter
            if (Math.abs(currentScrollY - lastScrollY) > 5) {
                setIsScrolled(currentScrollY > 50);
                setShowRibbon(currentScrollY <= 50);
                setLastScrollY(currentScrollY);
            }
        };

        // Use requestAnimationFrame for smoother scroll handling
        let ticking = false;
        const scrollListener = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", scrollListener, { passive: true });
        return () => window.removeEventListener("scroll", scrollListener);
    }, [lastScrollY]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const toggleSubmenu = (title: string) => {
        setActiveSubmenu(activeSubmenu === title ? null : title);
    };

    return (
        <nav className={`fixed w-full z-40 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <AnimatePresence mode="wait">
                {showRibbon && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "2.5rem" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="relative bg-red-600 text-white shadow-md"
                    >
                        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
                            <ul className="flex items-center gap-4 m-0 p-0 list-none">
                                <li>
                                    <a href="tel:01-4520655" className="text-white hover:text-gray-200 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-1.5"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        01-4520655, 01-4520656
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@nec.gov.np" className="text-white hover:text-gray-200 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="mr-1.5"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                        info@nec.gov.np
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="absolute top-0 left-0 border-t-[40px] border-t-[#991f2b] border-r-[20px] border-r-transparent w-0 h-0"></div>
                        <div className="absolute top-0 right-0 border-t-[40px] border-t-[#991f2b] border-l-[20px] border-l-transparent w-0 h-0"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                animate={{ top: showRibbon ? "2.5rem" : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3"
            >
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo-dark.png"
                        alt="NEC Logo"
                        width={200}
                        height={80}
                        className="object-contain"
                    />
                </Link>

                <button
                    className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span
                        className={`w-full h-0.5 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-black" : "bg-white"} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                    ></span>
                    <span
                        className={`w-full h-0.5 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-black" : "bg-white"} ${isMenuOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                        className={`w-full h-0.5 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-black" : "bg-white"} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    ></span>
                </button>
            </motion.div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className="bg-white shadow-md"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-2">
                            {navItems.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 last:border-b-0">
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleSubmenu(item.title)}
                                                className="w-full text-left px-4 py-3 font-medium text-black hover:text-indigo-500 flex justify-between items-center"
                                            >
                                                {item.title}
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-300 ${activeSubmenu === item.title ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {activeSubmenu === item.title && (
                                                    <motion.ul
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                                        className="pl-4 pb-2"
                                                    >
                                                        {item.submenu.map((subitem, subindex) => (
                                                            <li key={subindex}>
                                                                <Link
                                                                    href={subitem.href}
                                                                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-indigo-600"
                                                                    onClick={() => setIsMenuOpen(false)}
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
                                            className="block px-4 py-3 font-medium text-black hover:text-indigo-500"
                                            onClick={() => setIsMenuOpen(false)}
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
        </nav>
    );
};

export default MobileNavbar;