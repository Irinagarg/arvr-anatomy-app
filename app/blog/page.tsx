export default function BlogPage() {
  const authors = [
    {
      name: "Tanisha",
      handle: "@ttanisha_be23",
      link: "https://medium.com/@ttanisha_be23",
    },
    {
      name: "Vivan",
      handle: "@vivankhat20",
      link: "https://medium.com/@vivankhat20",
    },
    {
      name: "Irina",
      handle: "@igarg_be23",
      link: "https://medium.com/@igarg_be23",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* 🔥 Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Blogs & Research
        </h1>
        <p className="text-gray-400">
          Explore our latest articles on AR/VR, anatomy, and immersive learning.
        </p>
      </div>

      {/* 🔥 Authors Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {authors.map((author, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center
                       hover:scale-105 hover:border-cyan-400 transition"
          >
            <div className="text-4xl mb-3">✍️</div>

            <h3 className="text-xl font-semibold text-cyan-300">
              {author.name}
            </h3>

            <p className="text-gray-500 mb-4">
              {author.handle}
            </p>

            <a
              href={author.link}
              target="_blank"
              className="inline-block px-5 py-2 bg-cyan-500 text-black 
                         rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              View Blogs →
            </a>
          </div>
        ))}

      </div>

    </div>
  );
}