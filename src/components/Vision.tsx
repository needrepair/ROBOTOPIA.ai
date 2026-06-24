"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/ui/Section";

export function Vision() {
  return (
    <Section id="vision" className="border-t border-white/5">
      <div className="grid gap-16 md:grid-cols-2 md:gap-24 lg:gap-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="mb-4 text-xs font-medium tracking-[0.3em] text-muted uppercase"
          >
            Vision
          </motion.p>
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="text-3xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
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
          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-base leading-relaxed text-muted md:text-lg lg:text-xl"
          >
            Robots today are trained for specific tasks in controlled environments.
          </motion.p>
          <motion.p
            custom={0.35}
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-white/80 md:text-lg lg:text-xl"
          >
            We believe future robots should understand, reason about, and interact
            with the physical world.
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
