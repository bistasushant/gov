"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ContactOfficerItem } from "@/lib/types";

const ContactOfficer: React.FC<ContactOfficerItem> = ({
  image,
  title,
  name,
  regNo,
  phone,
  officePhone,
  email,
  position,
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
      className="group relative p-4 sm:p-6 shadow rounded-md bg-white overflow-hidden hover:shadow-lg transition-all duration-500 max-w-lg w-full opacity-0 hover:-translate-y-2 hover:scale-[1.02]"
    >
      <div className="flex flex-col items-center">
        <div className="mb-4 overflow-hidden rounded-full transform group-hover:rotate-3 transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            width={128}
            height={128}
            className="h-32 w-32 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-2 transform group-hover:scale-105 transition-transform duration-300">{title}</h4>
          <div className="mb-4 transform group-hover:translate-y-1 transition-transform duration-300">
            <h6 className="font-medium group-hover:text-indigo-600 transition-colors duration-300">{name}</h6>
            <p className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors duration-300">{regNo}</p>
            <p className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors duration-300">{phone}</p>
            <p className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors duration-300">{officePhone}</p>
            <p className="text-sm text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">{email}</p>
            <p className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors duration-300">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactOfficers: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

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
    const currentTitleRef = titleRef.current;

    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []); // Empty dependency array since we're using refs

  const officers: ContactOfficerItem[] = [
    {
      image: "/images/client/03.jpg",
      title: "Information Officer",
      name: "Er. Deependra Kumar Bariyait",
      regNo: "NEC Reg. No. 386 Mechanical",
      phone: "9763690647",
      officePhone: "01-4520655/01-4520655 Ext. 146",
      email: "information@nec.gov.np",
      position: "(Engineer)",
    },
    {
      image: "/images/client/04.jpg",
      title: "Grievance Hearing Officer",
      name: "Er. Kabita Gautam",
      regNo: "NEC Reg. No. 81883 Information Technology",
      phone: "9767472423",
      officePhone: "01-4520655/01-4520655 Ext. 103",
      email: "grievance@nec.gov.np",
      position: "(IT Engineer)",
    },
  ];

  return (
    <section className="relative py-8 sm:py-16 bg-gray-50 flex items-center justify-center min-h-[calc(65vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pb-8 text-center">
          <h3
            ref={titleRef}
            className="mb-4 text-2xl sm:text-3xl font-semibold opacity-0"
          >
            Contact Officers
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 justify-items-center">
          {officers.map((officer, index) => (
            <ContactOfficer
              key={index}
              image={officer.image}
              title={officer.title}
              name={officer.name}
              regNo={officer.regNo}
              phone={officer.phone}
              officePhone={officer.officePhone}
              email={officer.email}
              position={officer.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOfficers;