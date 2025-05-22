import React from "react";
import Link from "next/link";
import { DocumentItem } from "@/lib/types";

interface DocumentCategoryProps {
  icon: string;
  title: string;
  link: string;
}

const DocumentCategory: React.FC<DocumentCategoryProps> = ({
  icon,
  title,
  link,
}) => {
  return (
    <Link
      href={link}
      className="group relative p-4 sm:p-6 shadow rounded-md bg-white overflow-hidden hover:shadow-lg transition-all duration-500 max-w-sm w-full flex flex-col items-center justify-center text-center"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-indigo-600/10 group-hover:bg-indigo-600 rounded-full text-indigo-600 group-hover:text-white transition-all duration-500 mb-4">
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
      <h5 className="text-lg font-medium group-hover:text-indigo-600 transition-all duration-500">
        {title}
      </h5>
    </Link>
  );
};

const Documents: React.FC = () => {
  const documentCategories: DocumentCategoryProps[] = [
    {
      icon: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0",
      title: "Notices",
      link: "/notices",
    },
    {
      icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
      title: "Exams",
      link: "/exams",
    },
    {
      icon: "M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586 M11 11l5 5",
      title: "Publications",
      link: "/publications",
    },
    {
      icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12",
      title: "Tenders",
      link: "/tenders",
    },
    {
      icon: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z M13 2v7h7",
      title: "Official Documents",
      link: "/official-documents",
    },
    {
      icon: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
      title: "PEng Documents",
      link: "/peng-documents",
    },
    {
      icon: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
      title: "Forms",
      link: "/forms",
    },
    {
      icon: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
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
          <h3 className="mb-4 text-2xl sm:text-3xl font-semibold">
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
        <div className="mt-12">
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
          <div className="flex justify-center mt-6">
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