"use client"
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { NoticeItem } from "@/lib/types";

const NoticeCard: React.FC<Omit<NoticeItem, "id">> = ({
  type,
  date,
  title,
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
      className="group relative p-4 sm:p-6 shadow rounded-md bg-white overflow-hidden hover:shadow-lg transition-all duration-500 max-w-sm w-full opacity-0"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-indigo-600/10 text-indigo-600 text-sm font-medium px-2.5 py-0.5 rounded">
          {type}
        </div>
        <p className="text-sm text-slate-400">{date}</p>
      </div>
      <h5 className="text-lg font-medium group-hover:text-indigo-600 transition-all duration-500 mb-3">
        {title}
      </h5>
      <div className="mt-4 flex justify-center">
        <Link
          href={link}
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          View Details <i className="uil uil-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

const Notices: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
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
    const currentButtonRef = buttonRef.current;

    if (currentTitleRef) observer.observe(currentTitleRef);
    if (currentButtonRef) observer.observe(currentButtonRef);

    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      if (currentButtonRef) observer.unobserve(currentButtonRef);
    };
  }, []); // Empty dependency array since we're using refs

  const notices: NoticeItem[] = [
    {
      id: 1,
      type: "Notice",
      date: "2025-05-19",
      title:
        "व्यावसायिक इन्जिनियर (Professional Engineer) नाम दर्ताको लागि दरखास्त दिने म्याद थप गरिएको सूचना ।",
      link: "/notices/1",
    },
    {
      id: 2,
      type: "Exam",
      date: "2025-05-09",
      title:
        "नवौं साधारण दर्तावाला इन्जिनियरको दर्ता परीक्षाको लागि आवेदन फाराम आह्वान गरिएको सूचना !",
      link: "/notices/2",
    },
    {
      id: 3,
      type: "Registration",
      date: "2025-04-29",
      title:
        "व्यावसायिक इन्जिनियर (Professional Engineer, PE) को Registered Route नाम दर्ताको लागि दरखास्त आह्वान गरिएको सूचना ।",
      link: "/notices/3",
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
            Latest Notices
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {notices.map((notice) => (
            <NoticeCard
              key={notice.id}
              type={notice.type}
              date={notice.date}
              title={notice.title}
              link={notice.link}
            />
          ))}
        </div>
        <div ref={buttonRef} className="flex justify-center mt-8 opacity-0">
          <Link
            href="/notices"
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
          >
            View All Notices
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Notices;