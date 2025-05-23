"use client"
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/types";
import { BookOpen, Shield, User } from "lucide-react";

const ServiceCard: React.FC<ServiceItem> = ({
  icon,
  title,
  description,
  link,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    // Store ref in variable to use in cleanup
    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []); // Empty dependency array since we're using refs

  return (
    <div
      ref={cardRef}
      className="group relative p-4 sm:p-6 shadow rounded-md bg-white overflow-hidden hover:shadow-lg transition-all duration-500 max-w-sm w-full opacity-0 hover:-translate-y-2 hover:scale-[1.02]"
    >
      <div className="w-14 h-14 flex items-center justify-center bg-indigo-600 group-hover:bg-indigo-700 rounded-md text-white transition-all duration-500 mb-6 mx-auto transform group-hover:rotate-6">
        {typeof icon === 'string' ? (
          <span className="h-6 w-6">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <h4 className="text-lg font-medium group-hover:text-indigo-600 transition-all duration-500 text-center transform group-hover:scale-105">
        {title}
      </h4>
      <p className="text-slate-400 mt-3 text-center">{description}</p>
      <div className="mt-4 flex justify-center">
        <Link
          href={link}
          className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
        >
          Learn More <i className="uil uil-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

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
    const currentDescRef = descRef.current;

    if (currentTitleRef) observer.observe(currentTitleRef);
    if (currentDescRef) observer.observe(currentDescRef);

    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      if (currentDescRef) observer.unobserve(currentDescRef);
    };
  }, []); // Empty dependency array since we're using refs

  const services: ServiceItem[] = [
    {
      icon: <User />,
      title: "Engineer Registration",
      description:
        "Register as a professional engineer and get recognized for your qualifications and expertise.",
      link: "/register-online",
    },
    {
      icon: <BookOpen />,
      title: "Professional Development",
      description:
        "Access resources and opportunities for continuous professional development and growth.",
      link: "/professional-eng",
    },
    {
      icon: <Shield />,
      title: "Quality Assurance",
      description:
        "Ensuring high standards of engineering practice through regulation and oversight.",
      link: "/about-nec",
    },
  ];

  return (
    <section className="relative py-8 sm:py-16 bg-stone-100/90 flex items-center justify-center min-h-[calc(65vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pb-8 text-center">
          <h3
            ref={titleRef}
            className="mb-4 text-2xl sm:text-3xl font-medium opacity-0"
          >
            Our Services
          </h3>
          <p
            ref={descRef}
            className="text-slate-400 max-w-xl mx-auto mb-8 opacity-0"
          >
            Providing professional engineering services and regulatory oversight
            for the engineering profession in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;