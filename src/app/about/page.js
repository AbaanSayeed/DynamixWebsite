"use client";

import dynamic from "next/dynamic";
import Navbar from "../../../components/header";
import { useEffect } from "react";
import Footer from "../../../components/footer";
// Dynamically import the animated section to ensure no hydration issues
const AboutContent = dynamic(() => import("../../../components/AboutContent"), {

  ssr: false,
  loading: () => <div className="text-gray-500 text-center">Loading content...</div>,
  
});
// In About.tsx or layout


export default function About() {
useEffect(() => {
  import("../../../components/AboutContent");
}, []);
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  );
}
