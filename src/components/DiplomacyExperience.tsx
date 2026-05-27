/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DIPLOMATIC_EXPERIENCE } from "../types";
import { Award, Landmark, Eye, ChevronRight, Minimize2, MapPin, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DiplomacyExperience() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="diplomacy" className="py-24 bg-ivory-card border-b border-sand relative overflow-hidden">
      {/* Decorative premium diplomatic watermark banner background */}
      <div className="absolute left-0 bottom-0 top-0 w-2.5 bg-accent-amber" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout: Split title block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-semibold block">
              SPECIAL SERVICE & ADVOCACY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-deep leading-tight">
              {DIPLOMATIC_EXPERIENCE.title}
            </h2>
            <div className="flex items-center gap-1.5 text-xs font-mono text-charcoal-muted pt-2">
              <Landmark className="w-4 h-4 text-accent-amber" />
              <span>{DIPLOMATIC_EXPERIENCE.organizer}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-charcoal-muted">
              <MapPin className="w-4 h-4 text-accent-amber" />
              <span>Yaoundé, Cameroon • {DIPLOMATIC_EXPERIENCE.year}</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-charcoal-muted">
            <p className="font-sans text-lg leading-relaxed font-light">
              {DIPLOMATIC_EXPERIENCE.description}
            </p>
            <div className="flex items-center gap-2 p-3 bg-ivory-light border border-sand/60 rounded-xs text-xs font-mono text-charcoal-deep">
              <Sparkles className="w-4 h-4 text-accent-amber animate-pulse shrink-0" />
              <span>Advocated for tech-driven educational reforms and digital infrastructure investments for youth in rural sectors.</span>
            </div>
          </div>
        </div>

        {/* Narrative bullet detail blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-4 bg-ivory-light border border-sand p-8 rounded-xs shadow-xs space-y-6">
            <div className="w-12 h-12 rounded-full bg-accent-amber/10 flex items-center justify-center text-accent-amber">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl font-bold text-charcoal-deep">Diplomatic Initiative</h4>
            <p className="font-sans text-sm text-charcoal-muted leading-relaxed font-light">
              Selected in recognition of technological leadership, academic distinction, and vision for community digital integration in Cameroon.
            </p>
            <div className="border-t border-sand/60 pt-4 font-mono text-xs text-accent-amber">
              Presented in Yaoundé, 2025
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6" id="diplomacy-highlights">
            {DIPLOMATIC_EXPERIENCE.details.map((detail, idx) => (
              <div key={idx} className="p-6 border border-sand/40 bg-ivory-light/50 hover:bg-ivory-light rounded-xs transition-colors duration-200 flex gap-4">
                <span className="font-mono text-sm text-accent-amber font-bold pt-1">0{idx + 1}.</span>
                <p className="font-sans text-base text-charcoal-muted leading-relaxed font-light">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photostory representation layout */}
        <div className="space-y-6">
          <div className="border-b border-sand pb-4 flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-charcoal-deep">Photostory Documentation</h3>
            <span className="font-mono text-sm text-charcoal-muted">CLICK CARD TO EXAMINE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="diplomacy-gallery">
            {DIPLOMATIC_EXPERIENCE.images.map((img, idx) => (
              <div
                key={idx}
                className="group bg-ivory-light border border-sand p-4 rounded-xs cursor-pointer hover:border-accent-amber hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                onClick={() => setActivePhoto(img.src)}
                id={`photo-card-${idx}`}
              >
                {/* The actual image container */}
                <div className="aspect-4/3 overflow-hidden rounded-xs border border-sand bg-ivory-card relative select-none">
                  <img
                    src={img.src}
                    alt={img.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  {/* Transparent protective overlay */}
                  <div className="absolute inset-0 bg-transparent z-10" />
                  <div className="absolute inset-0 bg-charcoal-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="p-2.5 bg-ivory-light text-charcoal-deep rounded-full shadow-lg">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="pt-4 space-y-2">
                  <p className="font-sans text-sm text-charcoal-muted leading-relaxed font-light">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Lightbox Dialog Frame */}
        <AnimatePresence>
          {activePhoto && (
            <div
              className="fixed inset-0 bg-charcoal-deep/90 backdrop-blur-xs z-50 flex items-center justify-center p-4"
              onClick={() => setActivePhoto(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4 text-center select-none"
                onClick={(e) => e.stopPropagation()}
                id="photo-lightbox-content"
              >
                {/* Image */}
                <div className="relative border-4 border-ivory-light max-h-[75vh] overflow-hidden rounded-xs shadow-2xl bg-black select-none">
                  <img
                    src={activePhoto}
                    alt="Expanded record view"
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[70vh] object-contain pointer-events-none select-none"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                  {/* Transparent protective overlay */}
                  <div className="absolute inset-0 bg-transparent z-10" />
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="absolute top-4 right-4 p-2 bg-charcoal-deep/75 text-ivory-light hover:text-accent-amber rounded-full backdrop-blur-md transition-colors focus:outline-none z-20"
                    title="Close"
                  >
                    <Minimize2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Caption retrieval finder */}
                <div className="max-w-xl text-ivory-light space-y-1 py-1">
                  <p className="font-sans text-sm text-ivory-light/90">
                    {DIPLOMATIC_EXPERIENCE.images.find(img => img.src === activePhoto)?.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
