"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 px-6 py-16 md:px-12 md:py-24 lg:px-24">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 md:grid-cols-3"
        >
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-white">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="text-sm">
            <p className="mb-2 text-muted">Address</p>
            <p className="text-white">{siteConfig.address.line1}</p>
            <p className="text-white">{siteConfig.address.line2}</p>
          </div>

          <div className="text-sm">
            <p className="mb-2 text-muted">Email</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white transition-opacity hover:opacity-70"
            >
              {siteConfig.email}
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="tracking-wide">Physical AI Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
