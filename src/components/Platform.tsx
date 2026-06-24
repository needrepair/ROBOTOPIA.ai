"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/ui/Section";

function RobotPlaceholder() {
  return (
    <div className="glass-card relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 200 280"
          className="h-48 w-auto opacity-25 md:h-64"
          aria-hidden="true"
        >
          <ellipse cx="100" cy="50" rx="35" ry="40" fill="none" stroke="#F8B233" strokeWidth="1" />
          <rect x="70" y="85" width="60" height="80" rx="8" fill="none" stroke="#C8C8C8" strokeWidth="1" />
          <line x1="70" y1="100" x2="40" y2="130" stroke="#C8C8C8" strokeWidth="1" />
          <line x1="130" y1="100" x2="160" y2="130" stroke="#C8C8C8" strokeWidth="1" />
          <circle cx="40" cy="130" r="8" fill="none" stroke="#C8C8C8" strokeWidth="1" />
          <circle cx="160" cy="130" r="8" fill="none" stroke="#C8C8C8" strokeWidth="1" />
          <line x1="85" y1="165" x2="75" y2="230" stroke="#C8C8C8" strokeWidth="1" />
          <line x1="115" y1="165" x2="125" y2="230" stroke="#C8C8C8" strokeWidth="1" />
          <rect x="60" y="230" width="30" height="12" rx="4" fill="none" stroke="#C8C8C8" strokeWidth="1" />
          <rect x="110" y="230" width="30" height="12" rx="4" fill="none" stroke="#C8C8C8" strokeWidth="1" />
          <circle cx="88" cy="45" r="6" fill="none" stroke="#F8B233" strokeWidth="1" />
          <circle cx="112" cy="45" r="6" fill="none" stroke="#F8B233" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(248,178,51,0.06)_0%,transparent_70%)]" />
      <p className="absolute bottom-6 left-0 right-0 text-center text-xs tracking-[0.2em] text-silver-dark uppercase">
        Robot Preview
      </p>
    </div>
  );
}

export function Platform() {
  return (
    <Section id="platform" className="border-t border-white/[0.08]">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p custom={0} variants={fadeUp} className="section-label mb-4">
            Platform
          </motion.p>
          <motion.h2
            custom={0.1}
            variants={fadeUp}
            className="heading-display text-3xl md:text-5xl lg:text-6xl"
          >
            Flash 1.0
          </motion.h2>
          <motion.p custom={0.25} variants={fadeUp} className="body-text mt-8 text-base md:text-lg">
            Flash 1.0 is ROBOTOPIA&apos;s embodied intelligence platform for data
            collection, model evaluation, and real-world deployment.
          </motion.p>
          <motion.p
            custom={0.35}
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-silver md:text-lg"
          >
            Designed for rapid iteration across perception, planning, control, and
            learning, Flash serves as the foundation for developing and validating
            next-generation Physical AI systems.
          </motion.p>

          <motion.div custom={0.45} variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {["Perception", "Planning", "Control", "Learning"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs tracking-wide text-silver-dark"
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
