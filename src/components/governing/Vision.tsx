"use client";
import React, { useEffect, useRef } from "react";
import { User } from "lucide-react";
import Image from "next/image";

interface BoardMember {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
}

const GoverningBoard: React.FC = () => {
    const sectionRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const sectionElement = sectionRef.current; // Store ref value in a variable
        if (!sectionElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slide-up");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "20px" }
        );

        observer.observe(sectionElement);

        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    }, []); // Empty dependency array is correct since sectionRef is stable

    const boardMembers: BoardMember[] = [
        {
            id: 1,
            name: "Er. Dr. Padma Bahadur Shahi",
            role: "Chairman",
            imageUrl: "/images/client/01.jpg",
        },
        {
            id: 2,
            name: "Er. Dr. Bikash Adhikari",
            role: "Vice-Chairman",
            imageUrl: "/images/client/02.jpg",
        },
        {
            id: 3,
            name: "Er. Binod Bahadur Pal",
            role: "Member",
            imageUrl: "/images/client/03.jpg",
        },
        {
            id: 4,
            name: "Er. Ambika Mahat",
            role: "Member",
            imageUrl: "/images/client/04.jpg",
        },
        {
            id: 5,
            name: "Er. Lekha Nath Pandey",
            role: "Member",
            imageUrl: "/images/client/01.jpg",
        },
        {
            id: 6,
            name: "Er. Dr. Rammani Adhikari",
            role: "Member",
            imageUrl: "/images/client/02.jpg",
        },
    ];

    return (
        <section className="py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-full text-white mb-4 mx-auto">
                        <User className="w-6 h-6" />
                    </div>
                    <h3
                        ref={sectionRef}
                        className="text-xl sm:text-2xl font-bold text-gray-900 opacity-0"
                    >
                        Governing Board
                    </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {boardMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center">
                            <div className="w-full h-48 overflow-hidden">
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full bg-blue-800 text-white text-center py-2">
                                <h4 className="text-sm font-semibold">{member.name}</h4>
                                <p className="text-xs">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoverningBoard;