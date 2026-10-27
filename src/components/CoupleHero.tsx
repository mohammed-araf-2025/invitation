import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InviteConfig } from '../data/invite';

interface CoupleHeroProps {
  config: InviteConfig;
}

export default function CoupleHero({ config }: CoupleHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth subtle scale and parallax
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 1.04]);
  const y = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-temple-black overflow-hidden select-none flex flex-col items-center"
    >
      {/* Title above image */}
      <div className="w-full pt-8 pb-3 text-center">
        <p className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-gold/85">
          AUSPICIOUS COMMENCEMENT
        </p>
      </div>

      {/* FULL-WIDTH HERO IMAGE CONTAINER */}
      <div className="relative w-full min-h-[550px] md:min-h-[750px] lg:min-h-[850px] h-[75vh] max-h-[900px] overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ scale, y }}
          className="w-full h-full relative"
        >
          <img
            src={config.images.coupleFull}
            alt="Couple Ramya & Rishi in traditional South Indian attire with hands in namaste"
            loading="lazy"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />

          {/* Top dark blend from Ganesha alcove */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-temple-black via-temple-black/60 to-transparent pointer-events-none" />
        </motion.div>

        {/* Floating couple name pill in traditional script */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-16 inset-x-0 flex flex-col items-center pointer-events-none z-10"
        >
          <div className="py-2 px-8 rounded-full border border-gold/60 bg-[#0B0907]/90 backdrop-blur-md shadow-2xl">
            <span className="font-script text-3xl sm:text-4xl md:text-5xl text-cream drop-shadow-md">
              {config.coupleNames}
            </span>
          </div>
          <span className="mt-1.5 text-xs md:text-sm font-display uppercase tracking-[0.25em] text-gold font-semibold">
            cordially invite you
          </span>
        </motion.div>

        {/* Bottom soft gradient blend into cream invitation section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-cream via-cream/70 to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
