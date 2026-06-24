"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUp } from "@/components/ui/Section";
import { openRoles, siteConfig } from "@/lib/constants";

export function Careers() {
  return (
    <Section id="careers" className="border-t border-white/[0.08] bg-secondary">
      <SectionHeader
        title="Build the Future of Physical AI"
        subtitle="We are looking for exceptional researchers, engineers, and builders who are passionate about robotics and artificial intelligence."
      />

      <div className="mb-12">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} className="section-label">
          Open Positions
        </motion.p>
      </div>

      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {openRoles.map((role, i) => (
          <motion.a
            key={role}
            href={`mailto:${siteConfig.email}?subject=Application: ${encodeURIComponent(role)}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            custom={i * 0.06}
            variants={fadeUp}
            className="group flex items-center justify-between py-6 transition-colors duration-300 hover:bg-white/[0.02] md:py-8"
          >
            <span className="text-base font-light text-silver-light transition-colors group-hover:text-orange md:text-xl">
              {role}
            </span>
            <span className="flex items-center gap-2 text-sm text-silver-dark transition-colors group-hover:text-orange">
              Apply
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
