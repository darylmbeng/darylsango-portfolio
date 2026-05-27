/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { DARYL_PROFILE } from "../types";
import { Github, Linkedin, ArrowUp, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-deep text-ivory-light border-t border-sand/15 py-16" id="portfolio-footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Foot top split */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-sand/10">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
              Daryl Sango
            </h3>
            <p className="font-sans text-sm text-ivory-light/60 max-w-sm font-light leading-relaxed">
              Full Stack Developer & IT Engineer representing digital performance, schema integrity, and security from Yaoundé, Cameroon.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={DARYL_PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 hover:bg-accent-amber hover:text-charcoal-deep text-white rounded-full transition-all duration-300"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={DARYL_PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 hover:bg-accent-amber hover:text-charcoal-deep text-white rounded-full transition-all duration-300"
              title="Connect on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 bg-white/5 hover:bg-accent-amber hover:text-charcoal-deep text-white rounded-full transition-all duration-300 focus:outline-none cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Foot bottom splits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs font-mono text-ivory-light/40">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-amber" />
            <span>© {new Date().getFullYear()} Daryl Sango. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-accent-amber transition-colors">About</a>
            <a href="#projects" className="hover:text-accent-amber transition-colors">Projects</a>
            <a href="#diplomacy" className="hover:text-accent-amber transition-colors">Diplimacy</a>
            <a href="#contact" className="hover:text-accent-amber transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
