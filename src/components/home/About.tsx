import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-16 bg-gray-50 flex items-center justify-center min-h-[calc(65vh-64px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 sm:gap-8 justify-items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <Image
                src="/images/about/ab01.jpg"
                alt="NEC Office"
                width={500}
                height={375}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute bottom-4 left-4">
                <Image
                  src="/images/logo-icon-64.png"
                  alt="NEC Logo"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="lg:ms-6 text-center md:text-left">
              <h3 className="mb-6 text-2xl sm:text-3xl font-semibold">
                Welcome to Nepal Engineering Council
              </h3>

              <p className="text-slate-400 mb-6 max-w-xl mx-auto md:mx-0">
                The objective of Nepal Engineering Council is to make the
                engineering profession effective by mobilizing it in a more
                systematic and scientific manner and also to register the
                engineers as per their qualifications.
              </p>

              <p className="text-slate-400 mb-6 max-w-xl mx-auto md:mx-0">
                It can be said that Nepal entered into a modern phase of
                development process after the political change in the sixties.
                Engineering activities began to contribute to the development of
                the country and the engineering profession started to gain
                importance in the society. The engineering manpower began to
                grow in number and was involved in all spheres of national
                development.
              </p>

              <div className="mt-6 flex justify-center md:justify-start">
                <Link
                  href="/about-nec"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;