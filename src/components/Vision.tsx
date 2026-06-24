"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/ui/Section";

export function Vision() {
  return (
    <Section id="vision" className="border-t border-white/[0.08]">
      <div className="grid gap-16 md:grid-cols-2 md:gap-24 lg:gap-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p custom={0} variants={fadeUp} className="section-label mb-4">
            Vision
          </motion.p>
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="heading-display text-3xl md:text-5xl lg:text-6xl"
          >
            From Automation to Intelligence
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col justify-center"
        >
          <motion.p custom={0.2} variants={fadeUp} className="body-text text-base md:text-lg lg:text-xl">
            Today&apos;s robots are designed for specific tasks in highly structured
            environments.
          </motion.p>
          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-silver md:text-lg lg:text-xl"
          >
            We believe future intelligent systems will understand objects, adapt to
            changing environments, learn from interaction, and continuously improve
            through real-world experience.
          </motion.p>
          <motion.p
            custom={0.4}
            variants={fadeUp}
            className="mt-6 text-base font-light text-silver-light md:text-lg"
          >
            ROBOTOPIA is building toward this future.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
