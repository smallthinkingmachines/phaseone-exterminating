"use client";

import { motion } from "framer-motion";
import Card from "./ui/Card";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href = "/services",
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href}>
        <Card hover className="p-6 h-full">
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </Card>
      </Link>
    </motion.div>
  );
}
