"use client";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl font-bold mb-4">Email Assistant App</h1>
        <p className="text-lg text-gray-600 mb-6">
          A Python-powered tool that automates inbox management, classifies
          emails, and generates smart replies — saving you time and effort.
        </p>
        <a
          href="https://github.com/yourusername/email-assistant"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
        >
          View on GitHub
        </a>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
        {[
          {
            title: "Smart Sorting",
            desc: "Automatically organizes emails by priority and category.",
          },
          {
            title: "Auto Replies",
            desc: "Suggests context-aware responses using NLP.",
          },
          {
            title: "Clean Inbox",
            desc: "Keeps spam and clutter out of your way.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-md bg-white p-6 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        Built with Python · Deployed with ❤️
      </footer>
    </div>
  );
}
