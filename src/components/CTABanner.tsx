"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Button from "./ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function CTABanner() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-accent-dark via-accent to-accent-light">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold"
          >
            🚨 Available 24/7
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Need Emergency Pest Control?
          </h2>

          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto font-medium">
            Don&apos;t wait! We provide immediate response for urgent pest situations.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={`tel:${COMPANY_INFO.phone}`}>
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-gray-100 hover:scale-105 transition-transform shadow-2xl text-lg px-8 py-4"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span className="font-bold">{COMPANY_INFO.phone}</span>
                </span>
              </Button>
            </a>

            <a href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white text-white hover:scale-105 transition-transform"
              >
                Request Free Quote
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-white/80 text-sm"
          >
            ✓ Licensed & Insured  •  ✓ Green Shield Certified  •  ✓ Same-Day Service Available
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
