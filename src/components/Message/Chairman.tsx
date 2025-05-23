"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const MessageChairman: React.FC = () => {
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const messageElement = messageRef.current; // Store ref value in a variable
        if (!messageElement) return;

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

        observer.observe(messageElement);

        return () => {
            if (messageElement) {
                observer.unobserve(messageElement);
            }
        };
    }, []); // Empty dependency array is correct since messageRef is stable

    return (
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-12 text-center">
                    Message from the Chairman
                </h2>
                <div ref={messageRef} className="bg-white p-8 rounded-xl shadow-lg opacity-0">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                        {/* Chairman's Image */}
                        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-md">
                            <Image
                                src="/images/client/01.jpg"
                                alt="Er. Dr. Padma Bahadur Shahi, Chairman"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Chairman's Message */}
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">Er. Dr. Padma Bahadur Shahi</h3>
                            <p className="text-indigo-600 font-medium mb-4">Chairman, Nepal Engineering Council</p>
                            <p className="text-gray-600 text-justify leading-relaxed">
                                Dear Colleagues and Stakeholders,
                                <br />
                                <br />
                                It is with great pride and honor that I address you as the Chairman of the Nepal Engineering Council (NEC). Our mission at NEC is to foster excellence, innovation, and professionalism in the engineering field, ensuring that our engineers contribute meaningfully to the sustainable development of Nepal.
                                <br />
                                <br />
                                Under my leadership, we aim to strengthen the regulatory framework, enhance the quality of engineering education, and promote international collaboration to elevate the global standing of Nepali engineers. I am committed to creating an environment where engineers can thrive, innovate, and address the unique challenges of our nation through cutting-edge solutions.
                                <br />
                                <br />
                                Together, let us build a future where engineering in Nepal sets a benchmark for excellence, sustainability, and progress. I look forward to your support and collaboration in this transformative journey.
                                <br />
                                <br />
                                Sincerely,
                                <br />
                                Er. Dr. Padma Bahadur Shahi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageChairman;