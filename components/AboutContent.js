"use client";

import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Lazy load BlenderViewer
const BlenderViewer = dynamic(() => import("./blenderViever"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-gray-500">
      Loading...
    </div>
  ),
});

export default function AboutContent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [inView, controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* Text Section */}
      <div ref={ref} className="w-full md:w-1/2 space-y-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="will-change-opacity text-4xl md:text-5xl font-extrabold text-gray-300 drop-shadow-md"
        >
          What is Synaptium?
        </motion.h1>

       
        <motion.p
  initial={{ opacity: 0 }}
  animate={controls}
  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
  className="will-change-opacity text-lg md:text-xl text-gray-400 leading-relaxed tracking-wide"
>
  Synaptium is a revolutionary synthetic compound extracted from rare crystalline deposits near the Mid-Atlantic Ridge. Engineered at the molecular level, it exhibits superconductive properties even at extreme pressures and low temperatures. Synaptium not only enables ultra-efficient energy transmission, but also generates dynamic magnetic fields that can be tuned in real time — a breakthrough that powers our ASUVs (Autonomous Subaquatic Utility Vehicles) without emissions. With unparalleled durability and responsiveness, it forms the core of deep-sea operations, reshaping underwater engineering, mineral extraction, and clean marine technology.
</motion.p>

      </div>

      {/* 3D Model Viewer */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[500px] bg-black/80 border border-gray-700 rounded-2xl shadow-xl transition-shadow flex items-center justify-center">
        <BlenderViewer url="synaptium.glb" />
      </div>
    </div>
  );
}
