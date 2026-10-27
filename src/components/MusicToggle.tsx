import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicToggleProps {
  isPlaying: boolean;
  isMuted: boolean;
  togglePlay: () => void;
  toggleMute?: () => void;
  mode?: 'header' | 'button' | 'splash';
}

export default function MusicToggle({
  isPlaying,
  isMuted,
  togglePlay,
  toggleMute,
  mode = 'button'
}: MusicToggleProps) {
  if (mode === 'header') {
    return (
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute auspicious music" : "Mute auspicious music"}
        className="w-9 h-9 rounded-full border border-gold/60 bg-cream/90 backdrop-blur-sm flex items-center justify-center text-maroon hover:border-gold hover:bg-gold/15 transition-all duration-300 shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-maroon/70" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-4 h-4 text-maroon" />
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-kumkum-red rounded-full animate-ping" />
            )}
          </div>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/50 bg-temple-black/60 backdrop-blur-md text-gold hover:border-gold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(201,162,75,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div className={`absolute inset-0 rounded-full border border-gold/40 ${isPlaying ? 'animate-ping opacity-30' : 'opacity-0'}`} />
      <Music className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${isPlaying ? 'scale-110 text-[#F5E296]' : 'text-gold'}`} />
    </button>
  );
}
