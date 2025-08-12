"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skills = {
  frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "MySQL", icon: <FaDatabase /> },
  ],
  tools: [
    { name: "Git & GitHub", icon: <FaTools /> },
    { name: "Docker", icon: <FaTools /> },
    { name: "Webpack", icon: <FaTools /> },
    { name: "Figma", icon: <FaTools /> },
  ],
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
    whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <motion.ul
      className="space-y-3"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {skills.map((skill) => (
        <motion.li key={skill.name} className="flex items-center gap-3" variants={itemVariants}>
          <motion.span className="text-teal-600 text-xl" whileHover={{ scale: 1.5, rotate: 15 }}>{skill.icon}</motion.span>
          <span className="text-gray-700">{skill.name}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          My Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={skills.frontend} />
          <SkillCategory title="Backend" skills={skills.backend} />
          <SkillCategory title="Tools" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
}