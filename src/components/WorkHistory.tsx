/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { WORK_EXPERIENCES } from "../types";
import { Briefcase, Calendar, Building, ChevronRight, Check } from "lucide-react";

export default function WorkHistory() {
  return (
    <section id="work" className="py-24 bg-ivory-light border-b border-sand">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Section */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-semibold block">
            PROFESSIONAL TIMELINE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-deep">
            Industrial History
          </h2>
          <p className="font-sans text-base text-charcoal-muted leading-relaxed max-w-xl font-light">
            Hands-on technical roles delivering scalable web APIs, structural databases, and security updates for Cameroon business clients.
          </p>
        </div>

        {/* Timeline column */}
        <div className="relative border-l border-sand pl-8 md:pl-12 ml-4 space-y-16 py-4" id="work-history-timeline">
          {WORK_EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group" id={`work-timeline-item-${idx}`}>
              
              {/* Golden chronological circle node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full border-4 border-ivory-light bg-accent-amber shadow-xs group-hover:bg-charcoal-deep transition-colors duration-300 flex items-center justify-center">
                <Briefcase className="w-2.5 h-2.5 text-ivory-light pointer-events-none" />
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Meta details column */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-accent-amber font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-charcoal-deep group-hover:text-accent-amber transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-1.5 text-sm text-charcoal-muted font-medium">
                    <Building className="w-4 h-4 text-sand" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Highlights listing columns */}
                <div className="lg:col-span-8 bg-ivory-card border border-sand p-6 sm:p-8 rounded-xs shadow-xs">
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 items-start" id={`work-${idx}-highlight-${hIdx}`}>
                        <div className="p-0.5 rounded-full bg-accent-amber/15 text-accent-amber mt-1 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <p className="font-sans text-sm text-charcoal-muted leading-relaxed font-light">
                          {highlight}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
