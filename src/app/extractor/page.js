"use client";

import BlenderViewer from "../../../components/blenderViever";
import Navbar from "../../../components/header";

export default function ExtractorPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white p-8 flex flex-col gap-12">

        {/* Description Section */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-300">The Extractor</h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            The Extractor is a high-durability deep-sea mining ASUV (Aquatic Synaptium Utility Vehicle)
            designed to drill into the ocean bed and retrieve valuable resources. Built with a titanium 
            chassis and powered by Synaptium, it generates a magnetic force field to withstand immense pressure 
            and protect its internals. It features a large-scale rotary drill capable of penetrating complex 
            geological formations, all monitored and adjusted via onboard AI for optimal efficiency.
          </p>
        </div>
        
        {/* Model Viewer Section */}
        <div className="bg-black w-full flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full justify-center items-center p-4">
            <div className="w-full md:w-1/2 h-[400px]">
              <BlenderViewer url="drone.glb" />
            </div>
            <div className="w-full md:w-1/2 h-[400px]">
              <BlenderViewer url="extractor2.glb" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
