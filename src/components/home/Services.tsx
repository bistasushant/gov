import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/lib/types";

const ServiceCard: React.FC<ServiceItem> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="group relative p-4 sm:p-6 shadow rounded-md bg-white overflow-hidden hover:shadow-lg transition-all duration-500 max-w-sm w-full">
      <div className="w-14 h-14 flex items-center justify-center bg-indigo-600 group-hover:bg-indigo-700 rounded-md text-white transition-all duration-500 mb-6 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d={icon}></path>
        </svg>
      </div>
      <h4 className="text-lg font-medium group-hover:text-indigo-600 transition-all duration-500 text-center">
        {title}
      </h4>
      <p className="text-slate-400 mt-3 text-center">{description}</p>
      <div className="mt-4 flex justify-center">
        <Link
          href={link}
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Learn More <i className="uil uil-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
      title: "Engineer Registration",
      description:
        "Register as a professional engineer and get recognized for your qualifications and expertise.",
      link: "/register-online",
    },
    {
      icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
      title: "Professional Development",
      description:
        "Access resources and opportunities for continuous professional development and growth.",
      link: "/professional-eng",
    },
    {
      icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
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
          <h3 className="mb-4 text-2xl sm:text-3xl font-medium">
            Our Services
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
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