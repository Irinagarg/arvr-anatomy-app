export default function Demo() {
  const organs = [
    { name: "Heart", icon: "❤️", desc: "Blood circulation & pumping system" },
    { name: "Lungs", icon: "🫁", desc: "Breathing & oxygen exchange" },
    { name: "Brain", icon: "🧠", desc: "Neural control & cognition" },
    { name: "Liver", icon: "🧬", desc: "Metabolism & detoxification" },
    { name: "Kidney", icon: "💧", desc: "Filtration & waste removal" },
    { name: "Stomach", icon: "🍽️", desc: "Digestion process" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* 🔴 TEST (for debugging) */}
      <h1 className="text-red-500 text-3xl text-center mb-6">
        TEST CHANGE
      </h1>

      {/* 🔥 Hero */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Interactive Anatomy Demo
        </h1>
        <p className="text-gray-400">
          Explore key human organs in an immersive AR/VR experience.
        </p>
      </div>

      {/* 🔥 Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {organs.map((organ, index) => (
          <div
            key={index}
            className="group bg-gray-900 border border-gray-700 
                       rounded-2xl p-5 text-center
                       hover:scale-105 hover:border-cyan-400 
                       transition duration-300"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition">
              {organ.icon}
            </div>

            <h3 className="text-lg font-semibold text-cyan-300 mb-1">
              {organ.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {organ.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 CTA */}
      <div className="mt-16 text-center space-y-4">

        <button className="px-8 py-3 bg-cyan-500 text-black rounded-xl 
                           font-semibold hover:bg-cyan-400 transition">
          🚀 Launch Experience
        </button>

        {/* ✅ Download Button */}
        <a
          href="https://github.com/Irinagarg/arvr-anatomy-app"
          target="_blank"
          className="inline-block px-8 py-3 bg-cyan-500 text-black rounded-xl 
                     font-semibold hover:bg-cyan-400 transition"
        >
          📥 Download App from GitHub
        </a>

        {/* Instructions */}
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          To install the app, open the GitHub repository and download the APK file 
          from the repository. Follow the instructions in the README.
        </p>

      </div>

    </div>
  );
}