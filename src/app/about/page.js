"use client";

import dynamic from "next/dynamic";
import Navbar from "../../../components/header";
import BlenderViewer from "../../../components/blenderViever";

// Dynamically import motion to avoid SSR issues
const MotionDiv = dynamic(() =>
  import("framer-motion").then(mod => mod.motion.div),
  { ssr: false }
);

export default function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Section */}
        <MotionDiv
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-400 drop-shadow-md">
            What is Synaptium?
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
            Synaptium is a breakthrough synthetic compound discovered in the Mid-Atlantic Ridge.
            It enables ultra-efficient energy conduction and dynamic magnetic field generation.
            This technology allows our ASUVs to perform zero-emission operations even under
            crushing oceanic pressure, revolutionizing deep-sea exploration and extraction.
          </p>
        </MotionDiv>

        {/* 3D Model Viewer Section */}
        <MotionDiv
          className="w-full md:w-1/2 h-[400px] md:h-[500px] border border-gray-700 rounded-2xl shadow-xl hover:shadow-sky-500/40 transition-shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BlenderViewer url="synaptium.glb" />
        </MotionDiv>
      </div>
    </>
  );
}
