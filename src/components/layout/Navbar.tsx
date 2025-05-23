"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/utils/NavbarHeader";
import { Mail, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showRibbon, setShowRibbon] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      // Smooth transition for scroll states
      if (direction === 'down') {
        setIsScrolled(currentScrollY > 20);
        setShowRibbon(currentScrollY <= 20);
      } else {
        setIsScrolled(currentScrollY > 20);
        setShowRibbon(currentScrollY <= 20);
      }

      setLastScrollY(currentScrollY);
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

  // Function to determine submenu positioning
  const getSubmenuClasses = (index: number) => {
    const totalItems = navItems.filter(item => item.submenu).length;
    const isLastItem = index >= Math.floor(totalItems / 2);

    return `absolute mt-2 z-[9999] ${isLastItem
      ? "right-0 sm:right-0 md:left-0 md:right-auto"
      : "left-0 sm:left-0"
      }`;
  };

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-40 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white/40 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <AnimatePresence mode="wait">
        {showRibbon && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "2.5rem" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative bg-blue-600 text-white shadow-md"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
              <ul className="flex items-center gap-4 m-0 p-0 list-none">
                <li>
                  <a href="tel:01-4520655" className="text-white hover:text-gray-200 flex items-center">
                    <Phone className="text-white w-4 h-4 mr-1.5 hover:text-gray-200 flex items-center" />
                    <span className="hidden sm:inline">01-4520655, 01-4520656</span>
                    <span className="sm:hidden">Call Us</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nec.gov.np" className="text-white hover:text-gray-200 flex items-center">
                    <Mail className="h-4 w-4 mr-1.5" />
                    <span className="hidden sm:inline">info@nec.gov.np</span>
                    <span className="sm:hidden">Email</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute top-0 left-0 border-t-[40px] border-t-[#351f99] border-r-[20px] border-r-transparent w-0 h-0"></div>
            <div className="absolute top-0 right-0 border-t-[40px] border-t-[#351f99] border-l-[20px] border-l-transparent w-0 h-0"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          top: showRibbon ? "2.5rem" : 0,
          transition: { type: "spring", stiffness: 200, damping: 25 }
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3"
      >
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo-dark.png"
            alt="NEC Logo"
            width={300}
            height={120}
            className="object-contain max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
          />
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-2">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger
                      className={`px-4 py-2 font-bold transition-colors duration-200 ${isScrolled
                        ? "text-black hover:text-indigo-500"
                        : "text-white hover:text-indigo-200"
                        }`}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <div className="relative">
                      <NavigationMenuContent className={getSubmenuClasses(index)}>
                        <div className="w-[280px] sm:w-[320px] max-h-[70vh] overflow-auto bg-white shadow-xl border border-gray-200 rounded-lg">
                          <ul className="p-2 space-y-1">
                            {item.submenu.map((subitem, subindex) => (
                              <li key={subindex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subitem.href}
                                    className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-indigo-600 rounded-md transition-colors duration-150"
                                  >
                                    {subitem.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </div>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 font-bold transition-colors duration-200 ${isScrolled
                        ? "text-black hover:text-indigo-500"
                        : "text-white hover:text-indigo-200"
                        }`}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button - You can add this if needed */}
        <div className="md:hidden">
          <button
            className={`p-2 rounded-md transition-colors duration-200 ${isScrolled
              ? "text-black hover:bg-gray-100"
              : "text-white hover:bg-white/10"
              }`}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;