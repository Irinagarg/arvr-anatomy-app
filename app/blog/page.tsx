 "use client";

import { useEffect, useState } from "react";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-cyan-400">
          My Blogs ✍️
        </h1>
        <p className="text-gray-400 mt-4">
          Articles from all my Medium profiles
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:scale-105 hover:border-cyan-400 transition shadow-lg"
          >
            <h2 className="text-lg font-semibold text-cyan-300 mb-3">
              {blog.title}
            </h2>

            <p className="text-gray-500 text-sm">
              {new Date(blog.pubDate).toDateString()}
            </p>

            <span className="text-cyan-400 mt-3 inline-block">
              Read More →
            </span>
          </a>
        ))}

      </div>
    </div>
  );
}