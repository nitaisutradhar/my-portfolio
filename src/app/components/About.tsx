"use client";

import { motion } from "framer-motion";

export default function About() {
  // Animation variants for text
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          {/* Heading */}
          <motion.h2
            variants={textVariants}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            <span className="relative inline-block">
              About Me
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-teal-500 rounded-full"></span>
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={textVariants}
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Hello! I&apos;m{" "}
            <span className="text-teal-600 font-semibold">
              Nitai Chandra Sutradhar
            </span>
            , a passionate{" "}
            <span className="text-teal-600 font-semibold">
              MERN Stack Developer
            </span>
            . My journey into programming started with a fascination for how
            things work on the web. I love building applications that are not
            only functional but also provide a great user experience. I enjoy
            tackling challenging problems and continuously learning new
            technologies. I believe in the power of technology to create
            innovative solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
