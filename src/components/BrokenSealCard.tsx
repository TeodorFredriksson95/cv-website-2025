"use client";

import * as motion from "motion/react-client";
import Link from "next/link";

export default function BrokenSealCard() {
  return (
    <motion.div
      className="group relative max-w-md w-full p-6 bg-gradient-to-br from-[#1e1e2f]/60 to-[#0e0e14]/60 rounded-2xl backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all"
      whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/30 to-purple-700/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="relative aspect-[3.5/5] overflow-hidden rounded-lg border-4 border-orange-500 shadow-xl">
          <img
            src="/assets/protagonist_bs.png"
            alt="Broken Seal Main"
            className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>

        <p className="mt-4 text-sm text-orange-300 italic font-mono text-center">
          Shoutout to{" "}
          <Link
            href="https://linktr.ee/nourelagha"
            target="_blank"
            className="underline decoration-2 decoration-orange-400 hover:text-orange-200 transition-colors"
          >
            Nour
          </Link>{" "}
          for her concept art!
        </p>
      </div>

      <div className="mt-6 text-white/90 space-y-4 z-10">
        <h2 className="text-3xl font-extrabold tracking-tight font-serif text-orange-200">
          Broken Seal
        </h2>
        <p className="text-sm font-mono text-white/70 leading-relaxed">
          Broken Seal is a 2DHD RPG project built by a group of passionate
          developers, artists, and storytellers. A demo is coming to Sweden Game
          Awards 2025.
        </p>
      </div>
    </motion.div>
  );
}
