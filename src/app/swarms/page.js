"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

import Navbar from "../../../components/header";
import BlenderViewer from "../../../components/blenderViever";
import Footer from "../../../components/footer";

export default function Swarms() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();
  const MotionDiv = motion.div;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col gap-12">
        {/* Animated Intro Section */}
        <MotionDiv
          ref={ref}
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-300">Meet The Swarm</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            The Swarm program consists of compact, highly maneuverable ASUVs built to scout, map, and relay information
            from the depths. These units coordinate via mesh networking and AI-based pathfinding, executing precision
            tasks that support larger mining vessels. Swarm drones are optimized for coverage, communication, and
            rapid deployment in volatile oceanic environments — revolutionizing scalable subaqueous logistics.
          </p>
        </MotionDiv>

        {/* Drone Descriptions */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Stratoscout */}
          <div className="bg-[#111] rounded-xl border border-gray-700 p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Stratoscout</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Stratoscout is a lightweight reconnaissance drone designed for agile deep-sea traversal. Outfitted with a
              titanium structural meshwork, adaptive wings, LIDAR + sonar guidance, and a high-resolution camera suite,
              it excels in mapping unknown underwater terrain. With its integrated AI chip and relay system, it can
              coordinate movements within the swarm while maintaining low power usage. Built for scale, it enables fast
              coverage and persistent intelligence gathering, at an efficient cost.
            </p>
          </div>

          {/* Abyssnet V2 */}
          <div className="bg-[#111] rounded-xl border border-gray-700 p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-200">Abyssnet V2</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Abyssnet V2 is the heavy-duty command unit of the swarm. Armed with a high-efficiency propulsion system,
              titanium exo-frame, and a multi-beam sensor array, it’s built for long-range operation and dense data
              collection. Its upgraded AI module with extended memory enables autonomous mission planning, while its
              robust communication system maintains uplink to surface or satellite relays. Abyssnet ensures strategic
              control in swarm behavior — at a premium performance and profit.
            </p>
          </div>
        </div>

        {/* Model Viewer Section */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center items-center p-4">
            <div className="w-full md:w-1/2 h-[400px] bg-black rounded-xl">
              <BlenderViewer url="swarm1.glb" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
