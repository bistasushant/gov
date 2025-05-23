"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { User, Briefcase, Users } from "lucide-react";

const Chart: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const titleElement = titleRef.current;
        const contentElement = contentRef.current;
        const elements = [titleElement, contentElement].filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("animate-fade-in-up");
                        }, 100);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "-50px" }
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, []); // Empty dependency array is correct since refs are stable

    return (
        <section className="w-full">
            {/* Title */}
            <h1
                ref={titleRef}
                className="text-3xl font-bold text-gray-900 text-center mb-8 opacity-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                Organizational Chart
            </h1>

            {/* Hero Section */}
            <div className="relative w-full h-[400px] mb-12">
                <Image
                    src="/images/client/bg.jpg"
                    alt="Organizational Chart Background"
                    fill
                    className="object-cover rounded-lg w-full brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
            </div>

            {/* Organizational Chart */}
            <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0">
                <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
                    <div className="relative">
                        {/* CEO Node */}
                        <div className="flex justify-center mb-8">
                            <div className="relative group">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-full shadow-lg flex items-center gap-3 w-64 justify-center hover:shadow-xl transition-all duration-300">
                                    <User className="w-6 h-6" aria-hidden="true" />
                                    <span className="text-lg font-semibold">CEO</span>
                                </div>
                                {/* Vertical Line to Level 1 */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-1 h-12 bg-blue-300"></div>
                            </div>
                        </div>

                        {/* Horizontal Line for Level 1 */}
                        <div className="flex justify-center mb-4">
                            <div className="relative w-3/4">
                                <div className="absolute top-0 left-1/6 right-1/6 h-1 bg-blue-300"></div>
                            </div>
                        </div>

                        {/* Level 1 Nodes */}
                        <div className="flex justify-between mb-8">
                            {["HR Manager", "Finance Manager", "IT Manager"].map((role, index) => (
                                <div key={index} className="relative group flex-1 flex justify-center">
                                    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-full shadow-md flex items-center gap-2 w-48 justify-center hover:shadow-lg transition-all duration-300">
                                        <Briefcase className="w-5 h-5" aria-hidden="true" />
                                        <span className="text-base font-medium">{role}</span>
                                    </div>
                                    {/* Vertical Line to Level 2 */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-1 h-12 bg-green-300"></div>
                                </div>
                            ))}
                        </div>

                        {/* Horizontal Lines for Level 2 */}
                        <div className="flex justify-between mb-4">
                            {["HR Manager", "Finance Manager", "IT Manager"].map((_, index) => (
                                <div key={index} className="relative flex-1 flex justify-center">
                                    <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-green-300"></div>
                                </div>
                            ))}
                        </div>

                        {/* Level 2 Nodes */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                ["HR Team Lead", "HR Assistant"],
                                ["Finance Analyst", "Accounts Manager"],
                                ["IT Support Lead", "Developer"],
                            ].map((roles, index) =>
                                roles.map((role, subIndex) => (
                                    <div key={`${index}-${subIndex}`} className="relative group flex justify-center">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 p-3 rounded-full shadow-md flex items-center gap-2 w-40 justify-center hover:shadow-lg transition-all duration-300">
                                            <Users className="w-4 h-4" aria-hidden="true" />
                                            <span className="text-sm font-medium">{role}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Chart;