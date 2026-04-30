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

      {/* 🔥 Hero */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Interactive Anatomy Demo
        </h1>
        <p className="text-gray-400">
          Explore key human organs in an immersive AR/VR experience.
        </p>
      </div>

      {/* 🔥 Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

        {organs.map((organ, index) => (
          <div
            key={index}
            className="group bg-gray-900/80 backdrop-blur-lg 
                       border border-gray-700 rounded-2xl p-6 text-center
                       hover:scale-105 hover:border-cyan-400 
                       hover:shadow-cyan-500/20
                       transition duration-300"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              {organ.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">
              {organ.name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">
              {organ.desc}
            </p>
          </div>
        ))}

      </div>

      {/* 🔥 CTA */}
      <div className="mt-20 text-center space-y-4">

        {/* Download Button */}
        <a
          href="https://github.com/Irinagarg/arvr-anatomy-app"
          target="_blank"
          className="inline-block px-8 py-3 bg-cyan-500 text-black rounded-xl 
                     font-semibold hover:bg-cyan-400 hover:scale-105 
                     transition duration-300"
        >
          📥 Download App from GitHub
        </a>

        {/* Instructions */}
        <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
          To install the app, open the GitHub repository and download the APK file. 
          Then follow the instructions in the README to install it on your device.
        </p>

      </div>

    </div>
  );
}