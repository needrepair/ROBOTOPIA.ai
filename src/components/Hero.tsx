"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      <div className="container-max relative z-10 px-6 pt-32 pb-24 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-muted uppercase"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-balance text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Bring Intelligence into the Physical World
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-muted md:text-base"
          >
            {siteConfig.heroDescription}
          </motion.p>

          <motion.div
            custom={0.45}
            variants={fadeUp}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href={`mailto:${siteConfig.email}`} variant="primary">
              Contact Us
            </Button>
            <Button href="#careers" variant="secondary">
              Join Us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-muted uppercase">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
