"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/ui/Section";

function RobotPlaceholder() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 200 280"
          className="h-48 w-auto opacity-20 md:h-64"
          aria-hidden="true"
        >
          <ellipse cx="100" cy="50" rx="35" ry="40" fill="none" stroke="white" strokeWidth="1" />
          <rect x="70" y="85" width="60" height="80" rx="8" fill="none" stroke="white" strokeWidth="1" />
          <line x1="70" y1="100" x2="40" y2="130" stroke="white" strokeWidth="1" />
          <line x1="130" y1="100" x2="160" y2="130" stroke="white" strokeWidth="1" />
          <circle cx="40" cy="130" r="8" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="160" cy="130" r="8" fill="none" stroke="white" strokeWidth="1" />
          <line x1="85" y1="165" x2="75" y2="230" stroke="white" strokeWidth="1" />
          <line x1="115" y1="165" x2="125" y2="230" stroke="white" strokeWidth="1" />
          <rect x="60" y="230" width="30" height="12" rx="4" fill="none" stroke="white" strokeWidth="1" />
          <rect x="110" y="230" width="30" height="12" rx="4" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="88" cy="45" r="6" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="112" cy="45" r="6" fill="none" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />
      <p className="absolute bottom-6 left-0 right-0 text-center text-xs tracking-[0.2em] text-muted uppercase">
        Robot Preview
      </p>
    </div>
  );
}

export function Platform() {
  return (
    <Section id="platform" className="border-t border-white/5">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
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
            Platform
          </motion.p>
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="text-3xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Flash 1.0
          </motion.h2>
          <motion.p
            custom={0.25}
            variants={fadeUp}
            className="mt-8 text-base leading-relaxed text-muted md:text-lg"
          >
            Flash 1.0 is ROBOTOPIA&apos;s embodied intelligence platform for data
            collection, model evaluation, and real-world deployment.
          </motion.p>

          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-3"
          >
            {["Data Collection", "Model Evaluation", "Deployment"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-4 py-1.5 text-xs tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.2}
          variants={fadeUp}
        >
          <RobotPlaceholder />
        </motion.div>
      </div>
    </Section>
  );
}
