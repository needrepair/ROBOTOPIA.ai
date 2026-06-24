"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container-max">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  delay?: number;
}

export function SectionHeader({ title, subtitle, delay = 0 }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-16 md:mb-24"
    >
      <motion.h2
        custom={delay}
        variants={fadeUp}
        className="text-3xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          custom={delay + 0.1}
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

export { fadeUp };
