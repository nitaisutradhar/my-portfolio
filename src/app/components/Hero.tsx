"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 pt-24 md:pt-0"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I&apos;m <span className="text-teal-600">Nitai Chandra Sutradhar</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mt-2">
            MERN Stack Developer
          </h2>
          <p className="text-gray-600 mt-4">
            I create professional and responsive websites with modern designs
            and smooth animations.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition"
          >
            Download Resume
          </a>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 text-2xl text-gray-700">
            <a href="https://github.com/nitaisutradhar" target="_blank">
              <FaGithub className="hover:text-teal-600 transition" />
            </a>
            <a href="https://www.linkedin.com/in/nitai-chandra-sutradhar/" target="_blank">
              <FaLinkedin className="hover:text-teal-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter className="hover:text-teal-600 transition" />
            </a>
            <a href="https://www.facebook.com/Nitai.Sutra.dhar25" target="_blank">
              <FaFacebook className="hover:text-teal-600 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <Image
            width={334}
            height={452}
            src="/images/profile.png"
            alt="Profile"
            className="h-auto rounded-full object-cover shadow-lg border-4 border-teal-600"
          />
        </motion.div>
      </div>
    </section>
  );
}
