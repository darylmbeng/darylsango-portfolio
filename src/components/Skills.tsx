/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../types";
import { Shield, Blocks, Cpu, Database, Award, Monitor, Hammer } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Map category names to aesthetic icons
  const getCategoryIcon = (name: string) => {
    switch (true) {
      case name.toLowerCase().includes("backend"):
        return <Cpu className="w-5 h-5 text-accent-amber" />;
      case name.toLowerCase().includes("frontend"):
        return <Monitor className="w-5 h-5 text-accent-amber" />;
      case name.toLowerCase().includes("database"):
        return <Database className="w-5 h-5 text-accent-amber" />;
      default:
        return <Hammer className="w-5 h-5 text-accent-amber" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-ivory-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-semibold block">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-deep">
            Engineered Core Competencies
          </h2>
          <p className="font-sans text-base text-charcoal-muted leading-relaxed max-w-xl font-light">
            An extensive backend profile combined with optimized relational schemas, secure auth frameworks, and modern static view layers.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="skills-grid">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="bg-ivory-card border border-sand p-8 rounded-xs relative overflow-hidden group hover:border-accent-amber/50 transition-colors duration-300 shadow-xs"
              id={`skill-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center gap-3 pb-6 border-b border-sand mb-6">
                <div className="p-2 border border-sand rounded-xs bg-ivory-light group-hover:bg-accent-amber/5 transition-colors">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="font-sans font-bold text-lg text-charcoal-deep">{category.name}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => {
                  const itemKey = `${category.name}-${skill.name}`;
                  return (
                    <div
                      key={sIdx}
                      className="space-y-2 relative"
                      onMouseEnter={() => setHoveredSkill(itemKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      id={`skill-item-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm font-semibold text-charcoal-deep">{skill.name}</span>
                        <span className="font-mono text-xs text-accent-amber font-semibold">{skill.level}%</span>
                      </div>

                      {/* Meter line */}
                      <div className="h-2 bg-sand/40 rounded-full overflow-hidden relative">
                        <motion.div
                          className="h-full bg-charcoal-deep group-hover:bg-accent-amber rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: sIdx * 0.1 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Core Concepts Showcase */}
        <div className="mt-16 bg-ivory-card/40 border border-sand p-6 sm:p-8 rounded-xs" id="skills-principles-dashboard">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-accent-amber font-semibold text-sm font-mono">MVC FLOW</div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Clean architectural mapping to compartmentalize databases from controllers and interface files.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-accent-amber font-semibold text-sm font-mono">SECURITY BESTS</div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Implementing rigorous validation, rate limits, salt password hashing, JWT cycles and robust MFA mechanisms.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-accent-amber font-semibold text-sm font-mono">QUERY TUNING</div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Expert schema design, table indexing, connection pools and efficient indexing parameters.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-accent-amber font-semibold text-sm font-mono">CRYPTO INTEGRITY</div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Deep interest in blockchain verifications, distributed ledger frameworks and cryptographic key management.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
