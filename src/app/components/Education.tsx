"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering (BSc in CSE)",
    institution: "Mymensingh Engineering College",
    year: "2019 - 2024",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sristy College of Tangail",
    year: "2017 - 2019",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-gray-500">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}