"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-1.jpeg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-zinc-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          Expert Pest Control Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Professional, reliable, and eco-friendly pest management for NYC Metro
          & Tri-State Area
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button size="lg" variant="primary">
              Get Free Consultation
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="secondary">
              View Our Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
