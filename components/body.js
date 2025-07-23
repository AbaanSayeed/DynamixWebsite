'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
    const [overlayOpacity, setOverlayOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust fade speed by tweaking denominator
      const opacity = Math.min(scrollY / 300, 0.85); 
      setOverlayOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden fade-bg">
        {/* Scroll-based Overlay */}
        <div
          className="absolute inset-0 bg-black z-10 transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content */}
        <div className="z-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            The Future of Deep Sea Mining
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-8">
            Powered by Synaptium. Sustainable. Scalable. Revolutionary.
          </p>
          <Link
            href="#learn-more"
            className="bg-indigo-700 text-gray-200 px-6 py-3 rounded-xl hover:bg-indigo-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* FEATURE: ASUVs */}
<section className="py-20 px-6 md:px-20 bg-black">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
   
    <div>
      <h2 className="text-4xl font-bold mb-4 justify-center text-center">What Are ASUVs?</h2>
      <p className="text-gray-300 mb-4">
        Aquatic Synaptium Utility Vehicles (ASUVs) are advanced deep-sea robotic systems powered by Synaptium.
        Engineered to operate under extreme oceanic pressure, ASUVs combine autonomous navigation, adaptive shielding,
        and smart AI cores to conduct sustainable mining, terrain mapping, and exploration at previously unreachable depths.
      </p>
      
    </div>
  </div>
</section>

<section className="py-20 px-6 md:px-20 bg-gray-900" > 
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <Image
            src="/synaptium.png"
            alt="synaptium"
            width={500}
            height={500}
            className="rounded-xl shadow-lg "
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">Synaptium</h2>
            <p className="text-gray-300 mb-4 mr-5" >
              Synaptium is a revolutionary energy compound powering next-gen underwater vehicles.
Harnessing extreme efficiency and adaptive magnetic shielding, Synaptium makes deep-sea exploration safer, cleaner, and limitless.
            </p>
            <Link href="/about" className="text-indigo-400 hover:underline">
              Learn about it →
            </Link>
          </div>
        </div>
      </section>
      {/* FEATURE: Extractor */}
      <section id="learn-more" className="py-20 px-6 md:px-20 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <Image
            src="/extractorV2.png" // Placeholder — you can update with your render
            alt="Extractor"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">Extractor AUV</h2>
            <p className="text-gray-300 mb-4">
              Built with titanium and powered by Synaptium, the Extractor pierces deep-sea bedrock with precision drilling and magnetic pressure shielding.
            </p>
            <Link href="/extractor" className="text-indigo-400 hover:underline">
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE: Collector */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <Image
            src="/swarm.png"
            alt="Swarm Drones"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">Swarm Mapping Drones</h2>
            <p className="text-gray-300 mb-4">
              Our titanium-built mini drones use Synaptium shielding and GPS mapping to create real-time ocean floor maps before deployment.
            </p>
            <Link href="/swarms" className="text-indigo-400 hover:underline">
              Meet the Swarm →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE: Swarm Drones */}
     
      {/* CTA */}
      <section className="py-20 text-center bg-black">
        <h2 className="text-3xl md:text-4xl  font-bold mb-6">
          Ready to Dive into the Future?
        </h2>
        <Link
          href="/contact"
          className="bg-indigo-700 text-gray-200 px-6 py-3 rounded-xl hover:bg-indigo-600 transition"
        >
          Join the Mission
        </Link>
      </section>
    </main>
  );
}
