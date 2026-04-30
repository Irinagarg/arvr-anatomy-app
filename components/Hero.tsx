import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden bg-grid">

      {/* 🫀 Pulsing Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse-glow"></div>

      {/* 🧬 Secondary Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>

      {/* 🔬 Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6 relative z-10">
        Human Anatomy in 3D
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 relative z-10">
        Explore the human body through immersive AR/VR simulations designed 
        for medical students and future healthcare professionals.
      </p>

      {/* 🚀 CTA */}
      <Link
        href="/demo"
        className="relative z-10 px-10 py-5 bg-cyan-500 hover:bg-cyan-600 rounded-2xl text-lg font-semibold text-black shadow-lg hover:scale-110 active:scale-95 transition"
      >
        🧪 Try Demo
      </Link>

    </div>
  );
}