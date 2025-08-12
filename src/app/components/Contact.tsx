"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Contact Me
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto"
        >
          <p className="text-center text-gray-600 mb-6">
            I&apos;m open to new opportunities. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-600 text-2xl" />
              <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-teal-600">
                nitaisutradhar650@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-teal-600 text-2xl" />
              <a href="tel:+1234567890" className="text-gray-700 hover:text-teal-600">
                01571018102 (Phone)
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-teal-600 text-2xl" />
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-600">
                01571018102 (WhatsApp)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}