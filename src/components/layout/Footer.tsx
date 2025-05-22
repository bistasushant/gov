// components/layout/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-4 md:col-span-2 text-center lg:text-left">
            <Link href="/" className="focus:outline-none inline-block">
              <Image
                src="/images/logo-light.png"
                alt="NEC Logo"
                width={120}
                height={40}
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              Nepal Engineering Council is a statutory body established to regulate and promote the engineering profession in Nepal.
            </p>
            <ul className="list-none mt-4 flex gap-2 sm:gap-3 justify-center lg:justify-start">
              {[
                { href: "https://facebook.com/", icon: <Facebook className="w-4 h-4" /> },
                { href: "https://twitter.com/", icon: <Twitter className="w-4 h-4" /> },
                { href: "https://instagram.com/", icon: <Instagram className="w-4 h-4" /> },
                { href: "https://linkedin.com/", icon: <Linkedin className="w-4 h-4" /> },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 sm:size-9 inline-flex items-center justify-center border border-gray-700 rounded-md hover:border-indigo-600 hover:bg-indigo-600 text-white transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 md:col-span-1 text-center lg:text-left">
            <h5 className="text-lg font-semibold text-gray-100 tracking-wide">Quick Links</h5>
            <ul className="list-none mt-4 space-y-2">
              {[
                { href: "/", title: "Home" },
                { href: "/about-nec", title: "About NEC" },
                { href: "/register-online", title: "Registration" },
                { href: "/professional-eng", title: "Professional ENG" },
                { href: "/downloads", title: "Downloads" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-gray-100 flex items-center justify-center lg:justify-start transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" /> {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="lg:col-span-3 md:col-span-1 text-center lg:text-left">
            <h5 className="text-lg font-semibold text-gray-100 tracking-wide">Important Links</h5>
            <ul className="list-none mt-4 space-y-2">
              {[
                { href: "/objective-vision", title: "Objective And Vision" },
                { href: "/official-documents", title: "Official Documents" },
                { href: "/organizational-chart", title: "Organizational Chart" },
                { href: "/notices", title: "Notices" },
                { href: "/contact", title: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-300 hover:text-gray-100 flex items-center justify-center lg:justify-start transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 mr-1" /> {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3 md:col-span-2 text-center lg:text-left">
            <h5 className="text-lg font-semibold text-gray-100 tracking-wide">Contact Us</h5>
            <div className="mt-4 space-y-3">
              <div className="flex items-start justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-white mr-2 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h6 className="text-sm sm:text-base text-gray-300 font-medium">Nepal Engineering Council</h6>
                  <p className="text-sm sm:text-base text-gray-300">Minbhawan Marg, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-300">01-4520655, 01-4520656</p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Mail className="w-5 h-5 text-white mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@nec.gov.np"
                  className="text-sm sm:text-base text-gray-300 hover:text-gray-100 transition-colors duration-300"
                >
                  info@nec.gov.np
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm sm:text-base text-gray-300">
            © {new Date().getFullYear()} NEC | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;