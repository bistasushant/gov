"use client"
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      type: "video",
      src: "/images/modern.mp4",
    },
    {
      type: "image",
      src: "/images/client/bg.jpg",
    },
    {
      type: "image",
      src: "/images/client/bg-hero.jpg",
    },
    {
      type: "image",
      src: "/images/client/cta.jpg",
    },
    {
      type: "image",
      src: "/images/client/team.jpg",
    },
  ];

  const handleSlideChange = useCallback((index: number) => {
    if (isTransitioning || currentSlide === index) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, handleSlideChange, slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Content */}
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
          >
            {slide.type === "video" ? (
              <video
                className="w-full h-full object-cover opacity-50"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 1} // Prioritize loading the first image after video
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-stone-900/60"></div>
          </div>
        ))}
      </div>

      {/* Content - Only show for first slide */}
      {currentSlide === 0 && (
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <div className="text-center animate-from-bottom">
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
      )}

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${currentSlide === index
              ? "bg-red-600 scale-110"
              : "bg-white/20 hover:bg-white/30"
              }`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;