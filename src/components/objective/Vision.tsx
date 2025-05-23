"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Target, CheckCircle, Globe } from "lucide-react";

const ObjectVisionPage: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const titleElement = titleRef.current;
        const contentElement = contentRef.current;
        const ctaElement = ctaRef.current;
        const elements = [titleElement, contentElement, ctaElement].filter(Boolean) as HTMLElement[];

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
            {/* Hero Section */}
            <div className="relative w-full h-[400px] mb-12">
                <Image
                    src="/images/client/bg.jpg"
                    alt="Nepal Engineering Council Objectives"
                    fill
                    className="object-cover rounded-lg w-full brightness-75"
                    priority
                />
            </div>

            {/* Main Content */}
            <div ref={contentRef} className="space-y-8 opacity-0">
                {/* Detailed Description */}
                <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg">
                    <p className="text-justify">
                        The Nepal Engineering Council (NEC) is dedicated to advancing the engineering profession in Nepal through a set of well-defined objectives that align with national development goals and global standards. Established under the Nepal Engineering Council Act, 2055 (1998), NEC&apos;s objectives focus on fostering professionalism, innovation, and excellence in engineering practices.
                        <br />
                        <br />
                        Our primary objective is to regulate and standardize the engineering profession, ensuring that all practicing engineers meet rigorous qualifications and ethical standards. This includes maintaining a robust registration system that categorizes engineers based on expertise and experience, promoting accountability and trust in the profession.
                        <br />
                        <br />
                        NEC is committed to enhancing the quality of engineering education in Nepal by accrediting programs and institutions that meet international benchmarks. By collaborating with academic institutions, we ensure that engineering curricula are up-to-date, relevant, and aligned with the needs of the industry.
                        <br />
                        <br />
                        Another key objective is to promote sustainable and innovative engineering solutions that contribute to Nepal&apos;s infrastructure development, environmental conservation, and technological advancement. NEC encourages the adoption of cutting-edge technologies and best practices to address challenges in construction, energy, transportation, and more.
                        <br />
                        <br />
                        Through continuous professional development, NEC aims to empower engineers with the skills and knowledge needed to excel in a rapidly evolving global landscape. Our workshops, seminars, and training programs foster lifelong learning and skill enhancement.
                        <br />
                        <br />
                        Finally, NEC seeks to strengthen international collaboration, positioning Nepali engineers on the global stage. By forging partnerships with international engineering bodies, we facilitate knowledge exchange and promote the contributions of Nepali engineers worldwide.
                    </p>
                </div>

                {/* Key Objectives */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Key Objectives of NEC</h2>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full text-white mr-4">
                                <Target className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Professional Regulation</h3>
                                <p className="mt-1 text-gray-600 text-justify">
                                    Ensure that all engineers in Nepal adhere to high ethical and professional standards through a robust registration and licensing system.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full text-white mr-4">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Quality Education</h3>
                                <p className="mt-1 text-gray-600 text-justify">
                                    Accredit engineering programs to maintain high educational standards, preparing engineers for global competitiveness and industry demands.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full text-white mr-4">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Global Collaboration</h3>
                                <p className="mt-1 text-gray-600 text-justify">
                                    Foster international partnerships to promote knowledge exchange and elevate the global presence of Nepali engineers.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div ref={ctaRef} className="bg-indigo-600 text-white p-8 rounded-xl shadow-lg text-center opacity-0">
                    <h2 className="text-2xl font-semibold mb-4">Join Our Mission</h2>
                    <p className="mb-6">
                        Support NEC&apos;s objectives to advance engineering excellence in Nepal. Connect with us to learn how you can contribute to our vision.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        Get Involved
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ObjectVisionPage;