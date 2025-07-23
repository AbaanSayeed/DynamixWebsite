"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";


import Navbar from "../../../components/header";
import BlenderViewer from "../../../components/blenderViever";
import Footer from "../../../components/footer";



const MotionDiv = motion.div;

export default function ExtractorPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col gap-12">
        {/* Animated Text Section */}
        <MotionDiv
          ref={ref}
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-300">The Extractor</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            The Extractor is a high-durability deep-sea mining ASUV (Aquatic Synaptium Utility Vehicle)
            designed to drill into the ocean bed and retrieve valuable resources. Built with a titanium 
            chassis and powered by Synaptium, it generates a magnetic force field to withstand immense pressure 
            and protect its internals. It features a large-scale rotary drill capable of penetrating complex 
            geological formations, all monitored and adjusted via onboard AI for optimal efficiency.
          </p>
        </MotionDiv>

        {/* Miner Descriptions */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/*  Extractor-Lite   */}
          <div className="bg-[#111] rounded-xl border border-gray-700 p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-200"> Extractor-Lite  </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
               Extractor-Lite   is a cost-effective, rugged crawler built for small-scale seabed mining. Its tread-based 
              chassis provides excellent stability across uneven terrain, while the integrated mining arm and suction 
              tank system allow it to extract loose deposits efficiently. Equipped with a basic AI module, it can 
              perform semi-autonomous operations in shallow to mid-depth zones. Its affordability makes it ideal for 
              early-stage deployments and testing missions, generating steady profits per unit sold.
            </p>
          </div>

          {/* Deepreach  */}
          <div className="bg-[#111] rounded-xl border border-gray-700 p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Deepreach </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Deepreach  is a high-performance, six-legged mech built for deep-sea industrial mining. Featuring an 
              advanced rotary drill and scoop system, it can handle dense geological formations. Its edge AI module 
              ensures real-time adaptive decision-making and terrain mapping, while the built-in analyzer and sorter 
              streamline resource processing. With stronger materials and an uplink-enabled comms suite, Deepreach  is 
              engineered for long missions and high-value operations — and offers a significantly higher profit margin.
            </p>
          </div>
        </div>

        {/* Model Viewer Section */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center items-center p-4">
            <div className="w-full md:w-1/2 h-[400px] bg-black rounded-xl">
              <BlenderViewer url="drone.glb" />
            </div>
            <div className="w-full md:w-1/2 h-[400px] bg-black rounded-xl">
              <BlenderViewer url="extractor2.glb" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
