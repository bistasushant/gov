import React from "react";

const Ribbon: React.FC = () => {
  return (
    <div className="ribbon-container relative h-10 overflow-hidden">
      <div className="ribbon absolute top-0 left-0 w-full h-full bg-red-600 text-white shadow-md z-10">
        <div className="ribbon-content max-w-7xl mx-auto px-5 h-10 flex items-center justify-between">
          <ul className="contact-info list-none p-0 m-0 flex items-center mx-8">
            <li className="mr-5">
              <a
                href="tel:01-4520655"
                className="text-white no-underline inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                01-4520655, 01-4520656
              </a>
            </li>
            <li>
              <a
                href="mailto:info@nec.gov.np"
                className="text-white no-underline inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@nec.gov.np
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ribbon-edge-left absolute top-0 left-0 border-t-[40px] border-t-[#991f2b] border-r-[20px] border-r-transparent w-0 h-0 z-20"></div>
      <div className="ribbon-edge-right absolute top-0 right-0 border-t-[40px] border-t-[#991f2b] border-l-[20px] border-l-transparent w-0 h-0 z-20"></div>
    </div>
  );
};

export default Ribbon;
