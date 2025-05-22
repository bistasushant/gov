// components/layout/Header.tsx
"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import MobileNavbar from "@/components/layout/MobileNavbar";

const Header: React.FC = () => {
  return (
    <header>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;