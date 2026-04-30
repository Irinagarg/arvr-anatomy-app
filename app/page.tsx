import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 FEATURES */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 hover:border-cyan-400 transition">
          <div className="text-4xl mb-4">🧠</div>
          <h2 className="text-cyan-300 text-xl font-semibold mb-2">
            3D Visualization
          </h2>
          <p className="text-gray-400">
            Explore human organs in real-time with immersive 3D interaction.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 hover:border-cyan-400 transition">
          <div className="text-4xl mb-4">🎮</div>
          <h2 className="text-cyan-300 text-xl font-semibold mb-2">
            Unity Powered
          </h2>
          <p className="text-gray-400">
            Built using Unity for smooth, high-performance AR/VR experiences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700 hover:scale-105 hover:border-cyan-400 transition">
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
      <div className="text-center py-20 px-6 relative">

        {/* Glow Background */}
        <div className="absolute w-96 h-96 bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
          Ready to Experience the Future of Learning?
        </h2>

        <p className="text-gray-400 mb-8 relative">
          Dive into immersive anatomy with AR/VR technology.
        </p>

        <Link
          href="/demo"
          className="relative inline-block px-10 py-5 bg-cyan-500 hover:bg-cyan-600 rounded-2xl text-lg font-semibold text-black shadow-xl hover:scale-110 active:scale-95 transition"
        >
          🚀 Launch Demo
        </Link>

      </div>

    </div>
  );
}