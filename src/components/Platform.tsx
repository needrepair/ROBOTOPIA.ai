"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/ui/Section";

function RobotImage() {
  return (
    <div className="glass-card group relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
      <Image
        src="/robot.png"
        alt="ROBOTOPIA embodied intelligence robot"
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
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
          <RobotImage />
        </motion.div>
      </div>
    </Section>
  );
}
