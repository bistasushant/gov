"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const MessageRegistrar: React.FC = () => {
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
                    Message from the Registrar
                </h2>
                <div ref={messageRef} className="bg-white p-8 rounded-xl shadow-lg opacity-0">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                        {/* Registrar's Image */}
                        <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-md">
                            <Image
                                src="/images/client/02.jpg"
                                alt="Registrar of Nepal Engineering Council"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Registrar's Message */}
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">Er. [Registrar Name]</h3>
                            <p className="text-indigo-600 font-medium mb-4">Registrar, Nepal Engineering Council</p>
                            <p className="text-gray-600 text-justify leading-relaxed">
                                Dear Engineers and Stakeholders,
                                <br />
                                <br />
                                As the Registrar of the Nepal Engineering Council (NEC), it is my privilege to serve and support the engineering community in Nepal. Established under the Nepal Engineering Council Act, 1999, NEC has been instrumental in regulating the profession and ensuring the highest standards of practice since its inception.
                                <br />
                                <br />
                                My role is to oversee the registration process, ensuring that all engineers meet the necessary qualifications and adhere to ethical guidelines. We have registered over 70,000 engineers and accredited numerous educational institutions, a testament to our commitment to excellence. Additionally, we are focused on enhancing professional development through training and certification programs.
                                <br />
                                <br />
                                I invite you to engage with NEC as we work together to uphold the integrity of the engineering profession and contribute to Nepal’s development. Thank you for your continued support.
                                <br />
                                <br />
                                Sincerely,
                                <br />
                                Er. [Registrar Name]
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageRegistrar;