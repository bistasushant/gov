import React from "react";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-16 bg-indigo-600 flex items-center justify-center min-h-[calc(35vh-64px)]">
      <div className="absolute inset-0 bg-[url('/assets/images/cta-bg.jpg')] bg-no-repeat bg-center bg-cover opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center">
          <h3 className="mb-6 text-2xl sm:text-3xl text-white font-semibold">
            Ready to Register as a Professional Engineer?
          </h3>
          <p className="text-white/80 max-w-xl mx-auto">
            Join the community of professional engineers in Nepal and enhance
            your career prospects.
          </p>
          <div className="mt-8">
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