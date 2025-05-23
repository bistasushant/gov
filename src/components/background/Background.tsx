"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Background: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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

        // Store refs in variables to use in cleanup
        const currentTitleRef = titleRef.current;
        const currentContentRef = contentRef.current;

        if (currentTitleRef) observer.observe(currentTitleRef);
        if (currentContentRef) observer.observe(currentContentRef);

        return () => {
            if (currentTitleRef) observer.unobserve(currentTitleRef);
            if (currentContentRef) observer.unobserve(currentContentRef);
        };
    }, []);

    return (
        <section className="w-full">
            {/* Hero Image */}
            <div className="relative w-full h-[400px] mb-12">
                <Image
                    src="/images/client/bg.jpg"
                    alt="Nepal Engineering Council Building"
                    fill
                    className="object-cover rounded-lg w-full"
                    priority
                />
            </div>

            {/* Main Content */}
            <div ref={contentRef} className="space-y-8 opacity-0">
                {/* Detailed Paragraph */}
                <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl shadow-lg">
                    <p className="text-justify">
                        The Nepal Engineering Council (NEC) was established under the Nepal Engineering Council Act, 2055 (1998) as an autonomous body to regulate and promote the engineering profession in Nepal. The council serves as the apex body for engineering professionals and institutions in the country, ensuring the highest standards of engineering practice and education.

                        Since its inception, NEC has been instrumental in shaping the engineering landscape of Nepal. The council&apos;s primary responsibilities include registering qualified engineers, accrediting engineering programs, and maintaining professional standards. Through its rigorous evaluation processes and continuous monitoring, NEC ensures that engineering education and practice in Nepal meet international standards.

                        The council plays a crucial role in the development of Nepal&apos;s infrastructure and technological advancement. By setting and maintaining professional standards, NEC helps ensure that engineering projects across the country are executed with the highest level of expertise and safety. The council&apos;s influence extends to various sectors including construction, transportation, energy, and information technology.

                        One of the council&apos;s significant achievements has been the establishment of a comprehensive registration system for engineers. This system categorizes engineers into different levels based on their qualifications and experience, ensuring that only qualified professionals are authorized to undertake engineering projects. The council also maintains a database of registered engineers, making it easier for employers and clients to verify credentials.

                        In addition to its regulatory role, NEC actively promotes professional development among engineers. The council organizes workshops, seminars, and training programs to keep engineers updated with the latest technological advancements and best practices. These initiatives help maintain the quality of engineering services in Nepal and prepare engineers for global challenges.

                        The council also plays a vital role in international collaboration. Through partnerships with engineering organizations worldwide, NEC facilitates knowledge exchange and promotes Nepali engineers on the global stage. These collaborations have helped raise the profile of Nepali engineering professionals and institutions internationally.

                        Looking to the future, NEC continues to evolve and adapt to changing technological landscapes. The council is actively working on updating its standards and guidelines to incorporate emerging technologies and sustainable practices. This forward-thinking approach ensures that Nepal&apos;s engineering sector remains competitive and relevant in the global context.
                    </p>
                </div>

                {/* Key Points */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Key Responsibilities and Achievements</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-600 rounded-full text-white mr-3 mt-1">
                                <span>1</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Professional Regulation</h3>
                                <p className="mt-1 text-gray-600 text-justify">
                                    Maintains a comprehensive registration system for engineers, ensuring only qualified professionals practice engineering in Nepal. The council categorizes engineers based on their qualifications and experience, setting clear standards for professional practice.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-600 rounded-full text-white mr-3 mt-1">
                                <span>2</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Education Standards</h3>
                                <p className="mt-1 text-gray-600 text-justify">
                                    Accredits engineering programs and institutions, ensuring they meet international standards. The council regularly reviews and updates curriculum requirements to keep pace with technological advancements and industry needs.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-indigo-600 rounded-full text-white mr-3 mt-1">
                                <span>3</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Professional Development</h3>
                                <p className="mt-1 text-gray-600 text-justify">
                                    Organizes continuous professional development programs, workshops, and seminars. The council promotes knowledge sharing and skill enhancement among engineers, ensuring they stay current with industry best practices and emerging technologies.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Background;
