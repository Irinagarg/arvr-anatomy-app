"use client";

export default function Hero() {
  return (
    <div className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden bg-black">

      {/* 🔥 BIG GLOW BACKGROUND */}
      <div className="absolute  w-96 h-96 bg-cyan-500 opacity-10 blur-3xl rounded-full"></div>

      {/* 🔥 ECG LINE */}
      <div className="w-full max-w-5xl mb-10">

        <svg
          viewBox="0 0 800 200"
          className="w-full h-40"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="3"
        >
          <path
            d="M0 100 
               L80 100 
               L120 40 
               L160 160 
               L200 100 
               L260 100 
               L300 60 
               L340 140 
               L380 100 
               L800 100"
            className="ecg-line"
          />
        </svg>

        <style jsx>{`
          .ecg-line {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: ecg 2.5s linear infinite;
            filter: drop-shadow(0 0 12px #22d3ee)
                    drop-shadow(0 0 25px #22d3ee)
                    drop-shadow(0 0 40px #22d3ee);
          }

          @keyframes ecg {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>

      </div>

      {/* 🔥 TEXT CONTENT */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Human Anatomy in 3D
      </h1>

      <p className="text-gray-400 max-w-xl mb-8">
        Experience immersive learning with AR/VR technology and explore
        the human body like never before.
      </p>

    </div>
  );
}