import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { InviteConfig } from '../data/invite';

interface FootprintsSequenceProps {
  config: InviteConfig;
  onComplete: () => void;
}

function KumkumFootprint({ isRight = false }: { isRight?: boolean }) {
  return (
    <svg 
      viewBox="0 0 50 90" 
      className={`w-10 h-18 md:w-13 md:h-22 drop-shadow-[0_0_14px_rgba(179,18,27,0.9)] ${isRight ? 'scale-x-100' : '-scale-x-100'}`}
      aria-hidden="true"
    >
      <path
        d="M25 22 C34 22 39 30 38 48 C37 64 35 84 25 84 C15 84 13 64 12 48 C11 30 16 22 25 22 Z"
        fill="#B3121B"
        opacity="0.95"
      />
      <path
        d="M25 26 C31 26 34 32 33 46 C32 60 30 76 25 76 C20 76 18 60 17 46 C16 32 19 26 25 26 Z"
        fill="#E8C873"
        opacity="0.3"
      />
      <circle cx="33" cy="11" r="5.5" fill="#B3121B" />
      <circle cx="33" cy="11" r="2.5" fill="#E8C873" opacity="0.4" />
      <circle cx="23" cy="9" r="4.2" fill="#B3121B" />
      <circle cx="15" cy="11" r="3.6" fill="#B3121B" />
      <circle cx="9" cy="15" r="3" fill="#B3121B" />
      <circle cx="5" cy="21" r="2.4" fill="#B3121B" />
      <circle cx="25" cy="46" r="3" fill="#FFF2B2" opacity="0.9" />
    </svg>
  );
}

function JasminePetals() {
  const petals = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: `${(i * 11) % 94 + 3}%`,
    drift: (i % 2 === 0 ? 1 : -1) * (20 + (i * 9) % 45),
    rotation: (i * 45) % 360,
    delay: (i * 0.1),
    duration: 2.2 + (i % 3) * 0.4,
    size: 9 + (i % 4) * 3,
    landsOnFloor: i % 3 === 0,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            y: -30, 
            x: 0, 
            rotate: petal.rotation, 
            opacity: 0 
          }}
          animate={{
            y: petal.landsOnFloor ? '84vh' : '105vh',
            x: petal.drift,
            rotate: petal.rotation + 360,
            opacity: [0, 0.95, 0.95, petal.landsOnFloor ? 0.85 : 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "easeOut",
          }}
          className="absolute flex items-center justify-center select-none"
          style={{ left: petal.left }}
        >
          <div 
            className="rounded-full bg-gradient-to-tr from-[#FFFDF9] via-ivory to-white shadow-[0_0_8px_rgba(255,255,255,0.85)] border border-amber-100/40"
            style={{ width: `${petal.size}px`, height: `${petal.size * 1.3}px` }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function FootprintsSequence({ config, onComplete }: FootprintsSequenceProps) {
  const footprintSteps = [
    { id: 1, bottom: '6%', left: '47%', rotate: -6, isRight: false },
    { id: 2, bottom: '16%', left: '54%', rotate: 8, isRight: true },
    { id: 3, bottom: '27%', left: '48%', rotate: -8, isRight: false },
    { id: 4, bottom: '38%', left: '44%', rotate: -4, isRight: true },
    { id: 5, bottom: '49%', left: '49%', rotate: 6, isRight: false },
    { id: 6, bottom: '60%', left: '53%', rotate: 8, isRight: true },
    { id: 7, bottom: '71%', left: '50%', rotate: 0, isRight: false },
  ];

  const [activePrints, setActivePrints] = useState<number>(0);
  const [doorsOpening, setDoorsOpening] = useState<boolean>(false);
  const [lightSpill, setLightSpill] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrints((prev) => {
        if (prev < footprintSteps.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 350);

    const doorTimer = setTimeout(() => {
      setDoorsOpening(true);
      setLightSpill(true);
    }, 2800);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4800);

    return () => {
      clearInterval(interval);
      clearTimeout(doorTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div 
      className="relative w-full h-100dvh min-h-100dvh overflow-hidden bg-[#0A0705] select-none flex flex-col justify-end"
      style={{ perspective: '1400px' }}
    >
      {/* GLOSSY DARK THRESHOLD FLOOR */}
      <motion.div 
        initial={{ y: 80, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${config.images.floor})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-[#0B0907]/65 to-transparent" />
      </motion.div>

      {/* JASMINE PETALS */}
      <JasminePetals />

      {/* S-CURVED PATH OF KUMKUM FOOTPRINTS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {footprintSteps.map((step, idx) => {
          const isVisible = activePrints >= idx + 1;

          return (
            <AnimatePresence key={step.id}>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.4, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.275] }}
                  className="absolute flex items-center justify-center -translate-x-1/2"
                  style={{
                    bottom: step.bottom,
                    left: step.left,
                    transform: `rotate(${step.rotate}deg)`,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0.9 }}
                    animate={{ scale: [0.8, 1.6, 1.2], opacity: [0.9, 0.4, 0] }}
                    transition={{ duration: 0.8 }}
                    className="absolute w-20 h-24 rounded-full border border-kumkum-red/80 bg-kumkum-red/20 blur-xs"
                  />

                  <motion.div
                    initial={{ opacity: 1, scale: 0.5 }}
                    animate={{ opacity: 0, scale: 1.4 }}
                    transition={{ duration: 0.7 }}
                    className="absolute -top-2 text-gold"
                  >
                    <Sparkles className="w-6 h-6 text-[#FFE58F]" />
                  </motion.div>

                  <KumkumFootprint isRight={step.isRight} />
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      {/* 3D CARVED TEAK DOUBLE DOOR PANELS AT THRESHOLD (Swing open in 3D from outer hinges) */}
      <div className="absolute inset-x-0 top-0 h-[72%] z-30 flex pointer-events-none" style={{ perspective: '1400px' }}>
        
        {/* Left Door Panel - Shows left half of the door image */}
        <motion.div
          className="relative w-1/2 h-full origin-left bg-[#25150C] border-r-2 border-[#C9A24B]/70 shadow-2xl overflow-hidden"
          animate={{
            rotateY: doorsOpening ? -115 : 0,
            opacity: doorsOpening ? 0.2 : 1,
          }}
          transition={{
            duration: 1.8,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Container sized to 200% width so left half shows exactly left door leaf */}
          <div className="absolute top-0 left-0 w-[200%] h-full">
            <img
              src={config.images.door}
              alt="Left carved teak door panel"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
          </div>
          {/* Subtle inner panel shadow and brass edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
        </motion.div>

        {/* Right Door Panel - Shows right half of the door image */}
        <motion.div
          className="relative w-1/2 h-full origin-right bg-[#25150C] border-l-2 border-[#C9A24B]/70 shadow-2xl overflow-hidden"
          animate={{
            rotateY: doorsOpening ? 115 : 0,
            opacity: doorsOpening ? 0.2 : 1,
          }}
          transition={{
            duration: 1.8,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Container offset by -100% so right half shows exactly right door leaf */}
          <div className="absolute top-0 right-0 w-[200%] h-full">
            <img
              src={config.images.door}
              alt="Right carved teak door panel"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
          </div>
          {/* Subtle inner panel shadow and brass edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20" />
        </motion.div>
      </div>

      {/* WARM GOLDEN LIGHT SPILLING THROUGH OPENED DOORWAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: lightSpill ? 1 : 0 }}
        transition={{ duration: 1.4 }}
        className="absolute inset-0 z-35 pointer-events-none bg-gradient-to-b from-[#FFF2B2]/95 via-[#C9A24B]/65 to-[#0B0907]"
      />

      <div className="relative z-40 w-full pb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-semibold drop-shadow-md"
        >
          Om Gam Ganapataye Namaha
        </motion.p>
      </div>
    </div>
  );
}
