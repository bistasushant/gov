"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface Committee {
    id: number;
    name: string;
}

const Committees: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "20px" }
        );

        // Store refs in variables to use in cleanup
        const currentSectionRef = sectionRef.current;
        const currentTableRef = tableRef.current;

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }
        if (currentTableRef) {
            observer.observe(currentTableRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
            if (currentTableRef) {
                observer.unobserve(currentTableRef);
            }
        };
    }, []);

    const committees: Committee[] = [
        { id: 1, name: "Exam Committee" },
        { id: 2, name: "University / Institution Recognition Committee" },
        { id: 3, name: "Karya Sampadan Committee" },
    ];

    return (
        <div>
            {/* Header Section with Background Image */}
            <section
                className="relative h-64 bg-cover bg-center">
                <Image
                    src="/images/client/bg.jpg"
                    alt="Committees Header"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                    <h1
                        ref={sectionRef}
                        className="text-4xl sm:text-5xl font-bold text-white opacity-0"
                    >
                        Committees
                    </h1>
                </div>
            </section>

            {/* Committees Table Section */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        ref={tableRef}
                        className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 opacity-0"
                    >
                        Our All Committees
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse shadow-lg rounded-lg">
                            <thead>
                                <tr className="bg-blue-600 text-white">
                                    <th className="py-3 px-4 text-left text-sm font-semibold rounded-tl-lg">S.N.</th>
                                    <th className="py-3 px-4 text-left text-sm font-semibold rounded-tr-lg">Committee Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {committees.map((committee, index) => (
                                    <tr
                                        key={committee.id}
                                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                            } hover:bg-blue-50 transition-colors duration-200`}
                                    >
                                        <td className="py-3 px-4 text-gray-700">{committee.id}</td>
                                        <td className="py-3 px-4 text-gray-700">{committee.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Committees;



