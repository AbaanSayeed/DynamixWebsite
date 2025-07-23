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
import BlenderViewer from "../../../components/blenderViever"
export default function About(){
  return(<>
   <Navbar />
   <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-8 gap-8">
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-gray-300">What is Synaptium?</h1>
        <p className="text-lg leading-relaxed text-gray-400">
          Synaptium is a cutting-edge synthetic compound discovered at the Mid-Atlantic Ridge,
          enabling ultra-efficient energy conduction and active magnetic field generation. Its unique
          structure allows submersibles to operate under extreme oceanic pressures while maintaining
          zero-emission performance. This technology powers our ASUVs, offering scalable,
          sustainable access to previously unreachable deep-sea resources.
        </p>
      </div>
      
      {/* Blender Viewer Section */}
      
    </div>
         {/* Innovation Section */}
<div className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-300">Innovation at the Core</h2>
    <p className="text-lg text-gray-400 mb-10 leading-relaxed">
      At Synaptium Labs, we engineer the future beneath the waves. From advanced AI-driven drilling systems
      to electromagnetic shielding powered by synthetic neural lattices, every part of our Extractor and Collector
      drones is built with cutting-edge science. Our innovations allow autonomous adaptation to geological structures,
      real-time AI recalibration, and sustainable underwater operations with minimal environmental impact.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-grsy-300">Adaptive AI Core</h3>
        <p className="text-sm text-gray-400">
          Real-time decision-making AI powered by Synaptium enables autonomous navigation, extraction logic, and hazard avoidance.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-300">Electromagnetic Shielding</h3>
        <p className="text-sm text-gray-400">
          Proprietary magnetic shielding tech deflects high-pressure particles, protecting inner electronics even miles underwater.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-2 text-gray-300">Modular Drill System</h3>
        <p className="text-sm text-gray-400">
          Multi-phase rotary drills with heat sensors, geological scanners, and material-specific bit configurations.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="w-full  md:w-1/2 h-[400px] md:h-[500px] md:flex-row items-center justify-center p-8 gap-8">
        <BlenderViewer url="synaptium.glb" />
      </div>
  </>
   
  )
}
