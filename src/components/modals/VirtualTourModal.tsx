import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Compass, Eye, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpot?: string;
}

const TOUR_SPOTS = [
  {
    id: 'aerial',
    title: '22-Acre Foothill Aerial Campus',
    category: 'Panoramic Overview',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop',
    description: 'Breathtaking 360-degree panorama of the Shivalik Himalayan range wrapping around the academic quadrangles and sports arenas.'
  },
  {
    id: 'stem',
    title: 'Advanced AI & Robotics Innovation Lab',
    category: 'Academics & Tech',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    description: 'Interactive STEM laboratory outfitted with 3D printers, drone test pads, IoT microcontroller benches, and VR learning units.'
  },
  {
    id: 'equestrian',
    title: 'Equestrian Arena & Horse Stables',
    category: 'Olympic Sports',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    description: 'Sand dressage arena and jumping tracks where students learn horse grooming, poise, and equestrian tournament skills.'
  },
  {
    id: 'dormitory',
    title: 'Holistic Boarding Houses',
    category: 'Residential Life',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
    description: 'Comfortable, air-conditioned dorm rooms with personal study cubicles, recreational lounges, and resident housemaster suites.'
  },
  {
    id: 'amphitheater',
    title: 'Open-Air Amphitheater & Arts Wing',
    category: 'Creative Arts',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=1200&auto=format&fit=crop',
    description: '500-seat outdoor amphitheater under Himalayan skies for theatrical plays, classical Indian sangeet, and rock band concerts.'
  }
];

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  const [activeSpot, setActiveSpot] = useState(TOUR_SPOTS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 text-white flex flex-col max-h-[90vh]"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-tis-crimson/20 text-tis-crimson border border-tis-crimson/40">
                  <Compass className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display">TIS 360° Interactive Campus Experience</h3>
                  <p className="text-xs text-stone-400">Dehradun Foothills • Live Virtual Immersion</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Interactive Screen */}
            <div className="relative flex-1 min-h-[380px] md:min-h-[460px] bg-black overflow-hidden group">
              <img
                src={activeSpot.image}
                alt={activeSpot.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

              {/* Center Play indicator / 360 viewer */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-tis-crimson/90 hover:bg-tis-crimson text-white flex items-center justify-center shadow-xl shadow-tis-crimson/40 hover:scale-110 transition-transform cursor-pointer mb-4"
                >
                  <Play className="w-7 h-7 fill-white ml-1" />
                </button>
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-tis-gold" /> Click & Drag to Explore 360° View
                </div>
              </div>

              {/* Floating controls */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white cursor-pointer transition-colors"
                  aria-label="Toggle mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white cursor-pointer transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Spot Info */}
              <div className="absolute bottom-4 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-tis-gold bg-tis-gold/10 border border-tis-gold/30 px-3 py-1 rounded-full">
                    {activeSpot.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-display mt-2 text-white">
                    {activeSpot.title}
                  </h4>
                  <p className="text-sm text-stone-300 mt-1 line-clamp-2">
                    {activeSpot.description}
                  </p>
                </div>

                <Button
                  variant="gold"
                  size="sm"
                  onClick={onClose}
                  className="shrink-0"
                >
                  Book In-Person Campus Visit
                </Button>
              </div>
            </div>

            {/* Bottom Spots Selector */}
            <div className="p-4 bg-stone-950 border-t border-stone-800 overflow-x-auto">
              <div className="flex gap-3 min-w-max">
                {TOUR_SPOTS.map((spot) => {
                  const isActive = activeSpot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveSpot(spot)}
                      className={`flex items-center gap-3 p-2 pr-4 rounded-xl border transition-all text-left cursor-pointer ${
                        isActive
                          ? 'border-tis-gold bg-stone-900 shadow-md ring-1 ring-tis-gold'
                          : 'border-stone-800 bg-stone-900/40 hover:bg-stone-900 text-stone-400'
                      }`}
                    >
                      <img
                        src={spot.image}
                        alt={spot.title}
                        className="w-12 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <p className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-stone-300'}`}>
                          {spot.title}
                        </p>
                        <p className="text-[10px] text-stone-500">{spot.category}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
