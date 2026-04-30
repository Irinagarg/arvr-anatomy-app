"use client";

import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 ECG LINE */}
      <div className="flex justify-center mt-10 mb-4">
        <div className="w-full max-w-3xl">

          <svg
            viewBox="0 0 500 100"
            className="w-full h-24"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
          >
            <path
              d="M0 50 
                 L40 50 
                 L60 20 
                 L80 80 
                 L100 50 
                 L140 50 
                 L160 30 
                 L180 70 
                 L200 50 
                 L500 50"
              className="ecg-line"
            />
          </svg>

          <style jsx>{`
            .ecg-line {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: ecg 2.2s linear infinite;
              filter: drop-shadow(0 0 6px #22d3ee);
            }

            @keyframes ecg {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

        </div>
      </div>

      {/* 🔥 FEATURES */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl 
                        shadow-2xl border border-gray-700 
                        hover:scale-105 hover:border-cyan-400 
                        hover:shadow-cyan-500/20 transition duration-300">
          <div className="text-4xl mb-4">🧠</div>
          <h2 className="text-cyan-300 text-xl font-semibold mb-2">
            3D Visualization
          </h2>
          <p className="text-gray-400">
            Explore human organs in real-time with immersive 3D interaction.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl 
                        shadow-2xl border border-gray-700 
                        hover:scale-105 hover:border-cyan-400 
                        hover:shadow-cyan-500/20 transition duration-300">
          <div className="text-4xl mb-4">🎮</div>
          <h2 className="text-cyan-300 text-xl font-semibold mb-2">
            Unity Powered
          </h2>
          <p className="text-gray-400">
            Built using Unity for smooth, high-performance AR/VR experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl 
                        shadow-2xl border border-gray-700 
                        hover:scale-105 hover:border-cyan-400 
                        hover:shadow-cyan-500/20 transition duration-300">
          <div className="text-4xl mb-4">🎓</div>
          <h2 className="text-cyan-300 text-xl font-semibold mb-2">
            Medical Accuracy
          </h2>
          <p className="text-gray-400">
            Designed for students and educators with precise anatomical data.
          </p>
        </div>

      </div>

      {/* 🔥 CTA SECTION */}
      <div className="text-center py-24 px-6 relative">

        {/* Glow background */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-96 h-96 bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative">
          Experience Anatomy Like Never Before
        </h2>

        <p className="text-gray-400 mb-10 relative max-w-xl mx-auto">
          Step into the future of education with immersive AR/VR learning.
        </p>

        <Link
          href="/demo"
          className="relative inline-block px-10 py-5 bg-cyan-500 hover:bg-cyan-600 
                     rounded-2xl text-lg font-semibold text-black 
                     shadow-xl hover:scale-110 active:scale-95 transition duration-300"
        >
          🚀 Explore Demo
        </Link>

      </div>

    </div>
  );
}