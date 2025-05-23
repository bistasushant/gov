"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { User, FileText } from "lucide-react";

interface NoticeItem {
    id: number;
    title: string;
    description: string;
    date: string;
    pdfUrl: string;
}

const NoticeCard: React.FC<NoticeItem> = ({ title, date, }) => {
    return (
        <div className="flex items-start gap-4 py-3 border-b border-gray-200 last:border-b-0">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-red-600">
                <FileText className="w-8 h-8" />
            </div>
            <div className="flex-1">
                <h3 className="text-base font-normal text-gray-700 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">Published Date: {date}</p>
            </div>
        </div>
    );
};

const Notice: React.FC = () => {
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

        if (currentTitleRef) observer.observe(currentTitleRef);

        return () => {
            if (currentTitleRef) observer.unobserve(currentTitleRef);
        };
    }, []);

    const notices: NoticeItem[] = [
        {
            id: 1,
            title: "व्यावसायिक इन्जिनियर (Professional Engineer, PE) को Registered Route नाम दर्ताको लागि दरखास्त आह्वान गरिएको सूचना ।",
            description: "",
            date: "2025-04-29",
            pdfUrl: "/documents/notice-1.pdf",
        },
        {
            id: 2,
            title: "व्यावसायिक इन्जिनियर (Professional Engineer) नाम दर्ताको लागि दरखास्त आह्वान गरिएको सूचना ।",
            description: "",
            date: "2025-04-17",
            pdfUrl: "/documents/notice-2.pdf",
        },
        {
            id: 3,
            title: "नेपाल इन्जिनियरिङ्ग परिषद्को सूचना ।",
            description: "",
            date: "2025-04-02",
            pdfUrl: "/documents/notice-3.pdf",
        },
    ];

    return (
        <section className="relative bg-white shadow rounded-md overflow-hidden">
            <div className="flex items-center bg-blue-700 text-white">
                <div className="w-16 h-16 flex items-center justify-center bg-red-600">
                    <User className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Notice</h3>
            </div>
            <div className="p-4">
                <div className="flex flex-col">
                    {notices.map((notice) => (
                        <NoticeCard
                            key={notice.id}
                            id={notice.id}
                            title={notice.title}
                            description={notice.description}
                            date={notice.date}
                            pdfUrl={notice.pdfUrl}
                        />
                    ))}
                </div>
                <div className="flex justify-start mt-4 pl-14">
                    <Link
                        href="/notices"
                        className="text-indigo-600 hover:underline font-medium"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Notice;
