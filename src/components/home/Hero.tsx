import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        className="video-background absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/modern.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-white">
            Nepal Engineering Council
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Promoting excellence in engineering profession through registration,
            regulation and development of engineering practices in Nepal.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register-online"
              className="py-3 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
            >
              Register Now
            </Link>
            <Link
              href="/about-nec"
              className="py-3 px-6 inline-block font-semibold tracking-wide border border-white align-middle duration-500 text-base text-center bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
