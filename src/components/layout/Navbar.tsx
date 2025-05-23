"use client";
import React, { useState, useEffect } from "react";
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

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ease-in-out ${isScrolled ? "bg-white/80 shadow-md" : "bg-transparent"
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
                    01-4520655, 01-4520656
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nec.gov.np" className="text-white hover:text-gray-200 flex items-center">
                    <Mail className="h-4 w-4 mr-1.5" />
                    info@nec.gov.np
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
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-dark.png"
            alt="NEC Logo"
            width={300}
            height={120}
            className="object-contain"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger
                      className={`px-4 py-2 font-bold ${isScrolled ? "text-black hover:text-indigo-500" : "text-white hover:text-indigo-200"
                        }`}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <div className="relative">

                      <NavigationMenuContent className="absolute right-0 sm:left-0 sm:right-auto mt-2 z-[9999]">
                        <ul className="grid w-[300px] max-h-[80vh] overflow-auto bg-white shadow-lg border border-gray-200 rounded-md p-2">
                          {item.submenu.map((subitem, subindex) => (
                            <li key={subindex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subitem.href}
                                  className="block px-4 py-2 text-sm font-bold text-gray-800 hover:bg-gray-100 hover:text-indigo-600"
                                >
                                  {subitem.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </div>

                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 font-bold ${isScrolled ? "text-black hover:text-indigo-500" : "text-white hover:text-indigo-200"
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
      </motion.div>
    </nav>
  );
};

export default Navbar;