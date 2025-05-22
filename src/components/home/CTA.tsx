"use client"
import React, { useEffect, useRef } from "react";
import Link from "next/link";

const CTA: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
    const currentDescriptionRef = descriptionRef.current;
    const currentButtonRef = buttonRef.current;

    if (currentTitleRef) observer.observe(currentTitleRef);
    if (currentDescriptionRef) observer.observe(currentDescriptionRef);
    if (currentButtonRef) observer.observe(currentButtonRef);

    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      if (currentDescriptionRef) observer.unobserve(currentDescriptionRef);
      if (currentButtonRef) observer.unobserve(currentButtonRef);
    };
  }, []); // Empty dependency array since we're using refs

  return (
    <section className="relative py-8 sm:py-16 bg-indigo-600 flex items-center justify-center min-h-[calc(35vh-64px)]">
      <div className="absolute inset-0 bg-[url('/assets/images/cta-bg.jpg')] bg-no-repeat bg-center bg-cover opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center">
          <h3
            ref={titleRef}
            className="mb-6 text-2xl sm:text-3xl text-white font-semibold opacity-0"
          >
            Ready to Register as a Professional Engineer?
          </h3>
          <p
            ref={descriptionRef}
            className="text-white/80 max-w-xl mx-auto opacity-0"
          >
            Join the community of professional engineers in Nepal and enhance
            your career prospects.
          </p>
          <div ref={buttonRef} className="mt-8 opacity-0">
            <Link
              href="/register-online"
              className="py-3 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-white hover:bg-gray-100 border-white hover:border-gray-100 text-indigo-600 rounded-md"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;