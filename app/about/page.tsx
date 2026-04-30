export default function About() {

  function ECGLine() {
  return (
    <div className="w-full flex justify-center items-center mb-12">
      <svg viewBox="0 0 500 100" className="w-full max-w-3xl">
        <path
          d="M0 50 
             L50 50 
             L70 10 
             L90 90 
             L110 50 
             L160 50 
             L180 20 
             L200 80 
             L220 50 
             L500 50"
          fill="none"
          stroke="cyan"
          strokeWidth="3"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* 🔥 ECG Animation */}
      <ECGLine />

      {/* 🔹 Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          About the Project
        </h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A next-generation learning experience powered by AR/VR technology,
          designed to make human anatomy interactive, immersive, and easy to understand.
        </p>
      </div>

      {/* 🔹 Features Section */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-semibold mb-2">3D Visualization</h3>
          <p className="text-gray-400">
            Explore detailed human anatomy models in full 3D with real-time interaction.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition">
          <div className="text-4xl mb-4">🥽</div>
          <h3 className="text-xl font-semibold mb-2">AR/VR Experience</h3>
          <p className="text-gray-400">
            Step inside the human body using immersive augmented and virtual reality.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">Educational Focus</h3>
          <p className="text-gray-400">
            Designed for students, educators, and medical learners to simplify complex topics.
          </p>
        </div>

      </div>

      {/* 🔹 Why This Project */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
          Why This Project?
        </h2>

        <p className="text-gray-300 leading-relaxed">
          Traditional learning methods often fail to provide a clear understanding of
          spatial structures in the human body. This project bridges that gap by combining
          cutting-edge AR/VR technology with interactive design, making learning more
          engaging, intuitive, and effective.
        </p>
      </div>

      {/* 🔹 CTA Section */}
      <div className="mt-20 flex justify-center">
        <a
          href="/demo"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-2xl text-lg font-semibold text-black shadow-lg hover:scale-105 transition"
        >
          🚀 Try the Demo
        </a>
      </div>

    </div>
  );
}