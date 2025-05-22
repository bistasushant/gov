import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Messages from "@/components/home/Messages";
import Notices from "@/components/home/Notices";
import Documents from "@/components/home/Documents";
import ContactOfficers from "@/components/home/ContactOfficers";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Messages />
      <Notices />
      <Documents />
      <ContactOfficers />
      <CTA />
    </>
  );
}
