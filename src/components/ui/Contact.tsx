"use client";

import { Phone } from "lucide-react";
import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            className={`fixed bottom-5 left-5 z-50 size-9 rounded-full bg-green-600 text-white flex items-center justify-center transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Back to top"
        >
            <Phone className="h-5 w-5" />
        </button>
    );
};

export default Contact;
