"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccess("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT SIDE (INFO) */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Get in Touch 📩
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Have questions about our AR/VR Anatomy platform? 
            Want to collaborate or give feedback?  
            We’d love to hear from you.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-400">
            <p>📧 Email: support@arvranatomy.com</p>
            <p>📍 Location: India</p>
            <p>⏱ Response Time: 24-48 hours</p>
          </div>
        </div>

        {/* 🔹 RIGHT SIDE (FORM) */}
        <div className="bg-gray-900/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-700">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-black font-semibold text-lg shadow-lg hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {/* Status */}
          {success && (
            <p className="text-center mt-6 text-gray-300">
              {success}
            </p>
          )}
        </div>

      </div>

    </div>
  );
}