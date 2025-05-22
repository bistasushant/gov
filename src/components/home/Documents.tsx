"use client"
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { DocumentItem } from "@/lib/types";
import { Bell, Bookmark, File, FileText, Folder, Package, PenTool, SquarePen } from "lucide-react";

interface DocumentCategoryProps {
  icon: string | React.ReactElement;
  title: string;
  link: string;
}

const DocumentCategory: React.FC<DocumentCategoryProps> = ({
  icon,
  title,
  link,
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

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
    <Link
      ref={cardRef}
      href={link}
      className="group relative p-4 sm:p-6 shadow rounded-md bg-white overflow-hidden hover:shadow-lg transition-all duration-500 max-w-sm w-full flex flex-col items-center justify-center text-center opacity-0"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-indigo-600/10 group-hover:bg-indigo-600 rounded-full text-indigo-600 group-hover:text-white transition-all duration-500 mb-4">
        {typeof icon === 'string' ? (
          <span className="h-6 w-6">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <h5 className="text-lg font-medium group-hover:text-indigo-600 transition-all duration-500">
        {title}
      </h5>
    </Link>
  );
};

const Documents: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
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
    const currentTableRef = tableRef.current;
    const currentButtonRef = buttonRef.current;

    if (currentTitleRef) observer.observe(currentTitleRef);
    if (currentTableRef) observer.observe(currentTableRef);
    if (currentButtonRef) observer.observe(currentButtonRef);

    return () => {
      if (currentTitleRef) observer.unobserve(currentTitleRef);
      if (currentTableRef) observer.unobserve(currentTableRef);
      if (currentButtonRef) observer.unobserve(currentButtonRef);
    };
  }, []); // Empty dependency array since we're using refs

  const documentCategories: DocumentCategoryProps[] = [
    {
      icon: <Bell />,
      title: "Notices",
      link: "/notices",
    },
    {
      icon: <FileText />,
      title: "Exams",
      link: "/exams",
    },
    {
      icon: <PenTool />,
      title: "Publications",
      link: "/publications",
    },
    {
      icon: <Package />,
      title: "Tenders",
      link: "/tenders",
    },
    {
      icon: <File />,
      title: "Official Documents",
      link: "/official-documents",
    },
    {
      icon: <Bookmark />,
      title: "Peng Documents",
      link: "/peng-documents",
    },
    {
      icon: <SquarePen />,
      title: "Forms",
      link: "/forms",
    },
    {
      icon: <Folder />,
      title: "Other Documents",
      link: "/other-documents",
    },
  ];

  const recentDocuments: DocumentItem[] = [
    {
      id: 1,
      title:
        "व्यावसायिक इन्जिनियर (Professional Engineer, PE) को Registered Route नाम दर्ताको लागि दरखास्त आह्वान गरिएको सूचना ।",
      date: "2025-04-29",
      link: "/documents/1",
    },
    {
      id: 2,
      title:
        "व्यावसायिक इन्जिनियर (Professional Engineer) नाम दर्ताको लागि दरखास्त आह्वान गरिएको सूचना ।",
      date: "2025-04-17",
      link: "/documents/2",
    },
    {
      id: 3,
      title: "नेपाल इन्जिनियरिङ्ग परिषद्को सूचना ।",
      date: "2025-04-02",
      link: "/documents/3",
    },
  ];

  return (
    <section className="relative py-8 sm:py-16 bg-stone-100/90 flex items-center justify-center min-h-[calc(65vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center pb-8 text-center">
          <h3
            ref={titleRef}
            className="mb-4 text-2xl sm:text-3xl font-semibold opacity-0"
          >
            Important Documents
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 justify-items-center">
          {documentCategories.map((category, index) => (
            <DocumentCategory
              key={index}
              icon={category.icon}
              title={category.title}
              link={category.link}
            />
          ))}
        </div>
        <div ref={tableRef} className="mt-12 opacity-0">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-white uppercase bg-indigo-600">
                <tr>
                  <th scope="col" className="px-4 sm:px-6 py-3">
                    SN.
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-3 text-center">
                    Title
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-3">
                    Created Date
                  </th>
                  <th scope="col" className="px-4 sm:px-6 py-3">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentDocuments.map((doc) => (
                  <tr
                    key={doc.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-4 sm:px-6 py-4">{doc.id}</td>
                    <td className="px-4 sm:px-6 py-4">{doc.title}</td>
                    <td className="px-4 sm:px-6 py-4">{doc.date}</td>
                    <td className="px-4 sm:px-6 py-4">
                      <a
                        href={doc.link}
                        className="font-medium text-indigo-600 hover:underline"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div ref={buttonRef} className="flex justify-center mt-6 opacity-0">
            <Link
              href="/documents"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
            >
              View More Documents
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;