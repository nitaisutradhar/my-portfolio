"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    title: "MERN Stack Developer Intern",
    company: "SoftBeez",
    duration: "July 2025 - Sep 2025",
    description:
      "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with a team to build new features and improve existing ones.",
  },
//   {
//     title: "Frontend Developer Intern",
//     company: "Web Innovators",
//     duration: "Jun 2022 - Dec 2022",
//     description:
//       "Assisted in building responsive user interfaces with React and Tailwind CSS. Gained experience in version control with Git and agile development methodologies.",
//   },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-teal-600">{exp.title}</h3>
              <p className="text-gray-700 font-semibold">{exp.company} | {exp.duration}</p>
              <p className="text-gray-600 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}