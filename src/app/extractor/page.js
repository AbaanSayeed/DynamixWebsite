"use client";

import { motion } from "framer-motion";
import BlenderViewer from "../../../components/blenderViever";
import Navbar from "../../../components/header";

export default function ExtractorPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12 flex flex-col gap-20">

        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-sky-400 drop-shadow-lg">
            The Extractor
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
            A next-gen deep-sea mining ASUV (Aquatic Synaptium Utility Vehicle) engineered with a titanium alloy chassis and powered by Synaptium. Its AI-monitored rotary drill can break through even the harshest terrains, protected by a magnetic force field for ultra-deep exploration.
          </p>
        </motion.div>

        <div className="w-full flex justify-center items-center">
          <motion.div
            className="flex flex-col md:flex-row gap-10 max-w-6xl w-full justify-center items-center p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.div
              className="w-full md:w-1/2 h-[400px] border border-gray-700 rounded-2xl shadow-xl hover:shadow-sky-500/40 transition-shadow duration-300"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BlenderViewer url="drone.glb" />
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 h-[400px] border border-gray-700 rounded-2xl shadow-xl hover:shadow-sky-500/40 transition-shadow duration-300"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BlenderViewer url="extractor2.glb" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </>
  );
}
