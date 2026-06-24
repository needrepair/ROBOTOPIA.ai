"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader, fadeUp } from "@/components/ui/Section";
import { teamMembers } from "@/lib/constants";

export function Team() {
  return (
    <Section id="team" className="border-t border-white/[0.08] bg-secondary">
      <SectionHeader title="Team" subtitle="Building the future of embodied intelligence." />

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {teamMembers.map((member, i) => (
          <motion.article
            key={member.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i * 0.1}
            variants={fadeUp}
            className="glass-card rounded-2xl p-8 transition-all duration-500 hover:border-orange/20 md:p-10"
          >
            <div className="mb-6">
              <h3 className="text-xl font-medium tracking-tight text-silver-light md:text-2xl">
                {member.name}
              </h3>
              <p className="mt-1 text-sm tracking-wide text-orange">{member.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-silver md:text-base">{member.bio}</p>
            <p className="body-text mt-4 text-sm md:text-base">{member.detail}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
