import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import OrnamentDivider from './OrnamentDivider';
import { InviteConfig } from '../data/invite';

interface GaneshaHeroProps {
  config: InviteConfig;
  onScrollNext: () => void;
}

export default function GaneshaHero({ config, onScrollNext }: GaneshaHeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full h-100dvh min-h-100dvh overflow-hidden bg-temple-black flex flex-col justify-between items-center text-center select-none snap-start">
      
      {/* POOJA ROOM SANCTUM BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.images.ganeshaAlcove}
          alt="Lord Ganesha idol in sanctum"
          loading="lazy"
          className="w-full h-full object-cover object-center opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0907]/90 via-[#0B0907]/35 to-[#0B0907]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(201,162,75,0.3)_0%,transparent_70%)]" />
      </div>

      {/* FLOATING LIGHT SPARKS PARTICLES */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#FFE58F] animate-float-particle opacity-65"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${16 + (i * 5)}%`,
              left: `${10 + ((i * 19) % 80)}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4.5 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* TOP: CARVED ARCH WITH GLOWING GOLDEN "ॐ" */}
      <div className="relative z-10 w-full pt-8 md:pt-14 px-4 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/45 bg-temple-black/60 backdrop-blur-md shadow-[0_0_30px_rgba(232,200,115,0.6)]">
            <span className="font-display text-2xl md:text-3xl font-bold text-gold-bright gold-glow">
              ॐ
            </span>
          </div>

          <div className="w-56 md:w-72 h-6 flex justify-center items-center mt-3 opacity-90">
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-gold" />
            <span className="px-3 text-sm md:text-base text-gold">🌺</span>
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>
      </div>

      {/* CENTER: GANESHA IDOL HALO */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.25 }}
        className="relative z-10 flex flex-col items-center my-auto px-6 max-w-xl"
      >
        <div className="relative p-1.5 rounded-full border border-gold/35 bg-gradient-to-b from-gold/25 via-transparent to-transparent shadow-[0_0_45px_rgba(201,162,75,0.4)]">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-[#E8C873]/50 flex items-center justify-center bg-temple-black/50 backdrop-blur-sm">
            <svg 
              viewBox="0 0 100 100" 
              className="w-18 h-18 md:w-24 md:h-24 text-[#F3D78E] fill-current drop-shadow-[0_0_14px_rgba(243,215,142,0.9)]"
              aria-label="Lord Ganesha Motif"
            >
              <polygon points="50,12 40,24 60,24" />
              <circle cx="50" cy="10" r="2.5" />
              <path d="M40 28 C26 28 20 40 28 50 C36 50 38 42 40 38 Z" opacity="0.9" />
              <path d="M60 28 C74 28 80 40 72 50 C64 50 62 42 60 38 Z" opacity="0.9" />
              <ellipse cx="50" cy="35" rx="10" ry="8" />
              <line x1="45" y1="32" x2="55" y2="32" stroke="#5A1F1A" strokeWidth="2" />
              <circle cx="50" cy="35" r="1.5" fill="#5A1F1A" />
              <path d="M47 38 C47 48 45 62 55 64 C62 65 65 59 62 55 C59 52 53 54 52 58" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <circle cx="68" cy="55" r="3" fill="#FFE58F" />
            </svg>
          </div>
        </div>

        <p className="mt-4 text-xs md:text-sm font-display tracking-[0.3em] uppercase text-ivory/85">
          Vakratunda Mahakaya · Surya Koti Samaprabha
        </p>
      </motion.div>

      {/* BOTTOM AREA: FADES TO BLACK WITH STAGGERED REVEALS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full px-6 pb-6 md:pb-12 pt-6 flex flex-col items-center bg-gradient-to-t from-temple-black via-temple-black/95 to-transparent"
      >
        <motion.p variants={itemVariants} className="font-display text-xs md:text-sm tracking-[0.35em] uppercase text-gold font-semibold mb-1">
          {config.invocation.prefix}
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.2em] leading-tight text-gold-gradient drop-shadow-lg"
        >
          GRIHA<br />PRAVESHA
        </motion.h1>

        <motion.div variants={itemVariants} className="w-full">
          <OrnamentDivider variant="gold" className="my-3 max-w-[220px] md:max-w-xs mx-auto" />
        </motion.div>

        <motion.p variants={itemVariants} className="font-body italic text-base sm:text-2xl text-cream/90 leading-snug">
          &ldquo;{config.tagline}&rdquo;<br />
          <span className="text-sm sm:text-xl text-cream/75">{config.subTagline}</span>
        </motion.p>

        <motion.div variants={itemVariants} className="mt-4 py-1.5 px-6 rounded-full border border-gold/40 bg-gold/10">
          <p className="font-display text-xs sm:text-sm uppercase tracking-[0.3em] text-gold font-semibold">
            {config.event.dateShort} · {config.event.city}
          </p>
        </motion.div>

        <motion.button
          variants={itemVariants}
          onClick={onScrollNext}
          aria-label="Scroll down to invitation"
          className="mt-4 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/50 flex items-center justify-center text-gold hover:border-gold hover:bg-gold/15 transition-all shadow-md animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
