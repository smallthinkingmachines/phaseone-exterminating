"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";
import { COMPANY_INFO, CERTIFICATIONS } from "@/lib/constants";

export default function AboutSnippet() {
  return (
    <Section className="bg-zinc-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/about-1.jpeg"
              alt="About Phaseone Exterminating"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted Since {COMPANY_INFO.established}
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Phaseone Exterminating has been providing professional pest control
              services to the {COMPANY_INFO.serviceAreas} for over{" "}
              {new Date().getFullYear() - COMPANY_INFO.established} years. We are
              committed to delivering effective, eco-friendly solutions.
            </p>
            <div className="space-y-3 mb-8">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-primary text-2xl">✓</span>
                  <div>
                    <h3 className="text-white font-semibold">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about">
              <Button variant="primary">Learn More About Us</Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
