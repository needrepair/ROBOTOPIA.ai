"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUp } from "@/components/ui/Section";
import { technologyCards } from "@/lib/constants";

const icons = [
  // Data
  <svg key="data" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  // World Model
  <svg key="world" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 3c2.5 3 2.5 15 0 18M3 12h18" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
  // Embodied Platform
  <svg key="platform" viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="14" r="1.5" fill="currentColor" />
    <circle cx="15" cy="14" r="1.5" fill="currentColor" />
    <path d="M8 8V5a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.5" />
  </svg>,
];

export function Technology() {
  return (
    <Section id="technology" className="border-t border-white/5 bg-surface">
      <SectionHeader
        title="Technology"
        subtitle="Three pillars powering embodied intelligence at scale."
      />

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {technologyCards.map((card, i) => (
          <motion.article
            key={card.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i * 0.12}
            variants={fadeUp}
            className="group relative rounded-2xl border border-white/5 bg-black p-8 transition-colors duration-500 hover:border-white/10 md:p-10"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-500 group-hover:border-white/20 group-hover:text-white">
              {icons[i]}
            </div>
            <h3 className="mb-4 text-xl font-medium tracking-tight text-white md:text-2xl">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted md:text-base">
              {card.description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
