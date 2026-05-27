/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { DARYL_PROFILE } from "../types";
import { Github, Linkedin, MessageSquare, ArrowDownRight, Globe, Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to GMT+1 / Yaounde time or format local hour nicely
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short"
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Diplomatic Experience", href: "#diplomacy" },
    { label: "Work History", href: "#work" },
    { label: "Get In Touch", href: "#contact", primary: true },
  ];

  return (
    <>
      {/* Floating Head Navigation */}
      <header id="header-nav" className="fixed top-0 left-0 right-0 z-50 bg-ivory-light/95 backdrop-blur-md border-b border-sand transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-widest text-charcoal-deep flex items-center gap-1.5 focus:outline-none uppercase">
            DARYL SANGO
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={
                  item.primary
                    ? "px-5 py-2.5 bg-charcoal-deep text-ivory-light rounded-sm hover:bg-accent-amber hover:text-charcoal-deep font-sans text-sm font-semibold transition-all duration-300 shadow-xs"
                    : "font-sans text-sm font-medium text-charcoal-muted hover:text-accent-amber transition-colors duration-200"
                }
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Contact Icons */}
          <div className="hidden md:flex items-center gap-4 text-charcoal-muted border-l border-sand pl-6">
            <a href={DARYL_PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-amber transition-colors" title="LinkedIn">
              <Linkedin className="w-5 h-5 pointer-events-none" />
            </a>
            <a href={DARYL_PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-accent-amber transition-colors" title="GitHub">
              <Github className="w-5 h-5 pointer-events-none" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal-deep hover:text-accent-amber transition-colors focus:outline-none"
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 bg-ivory-card border-b border-sand z-40 md:hidden shadow-lg p-6 max-h-[calc(100vh-80px)] overflow-y-auto"
            id="mobile-drawer"
          >
            <div className="flex flex-col gap-5 pt-2">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    item.primary
                      ? "w-full py-3.5 bg-charcoal-deep text-ivory-light rounded-sm text-center font-sans font-semibold hover:bg-accent-amber transition-colors duration-200 shadow-sm"
                      : "py-2.5 border-b border-sand/50 font-sans text-base font-semibold text-charcoal-deep hover:text-accent-amber transition-colors"
                  }
                  id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-6 justify-center pt-4">
                <a href={DARYL_PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-charcoal-muted hover:text-accent-amber p-2 border border-sand rounded-full">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={DARYL_PROFILE.github} target="_blank" rel="noreferrer" className="text-charcoal-muted hover:text-accent-amber p-2 border border-sand rounded-full">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Banner / Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between max-w-7xl mx-auto px-6 overflow-hidden">
        {/* Abstract design vector frame context */}
        <div className="absolute right-0 top-1/4 w-[35rem] h-[35rem] rounded-full bg-accent-amber/5 blur-[120px] pointer-events-none" />
        <div className="absolute left-10 bottom-10 w-[20rem] h-[20rem] rounded-full bg-sand/30 blur-[80px] pointer-events-none" />

        {/* Intro Meta Info Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-sand/70">
          <div className="flex items-center gap-2 font-mono text-sm text-charcoal-muted uppercase tracking-wider">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for remote & contracts</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-mono text-charcoal-muted">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-accent-amber" /> {DARYL_PROFILE.location}
            </span>
            <span className="hidden sm:inline border-r border-sand h-3" />
            <span id="live-clock" className="font-mono text-charcoal-deep">{currentTime || "GMT+1"}</span>
          </div>
        </div>

        {/* Hero Central Layout */}
        <div className="my-[auto] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8 pt-12 pb-16">
          <div className="max-w-3xl flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-amber/10 border border-sand rounded-xs mb-4">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-amber" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-semibold">
                SYSTEMS ARCHITECT & FULL-STACK ENGINEER
              </span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal-deep tracking-tight leading-[1.05] mb-8">
              Engineering high-performance backends & <br />
              <span className="text-accent-amber font-normal italic">secure transactional</span> infrastructures.
            </h1>

            <p className="font-sans text-lg sm:text-xl text-charcoal-muted leading-relaxed mb-10 max-w-2xl font-light">
              Hi, I am <span className="font-semibold text-charcoal-deep">Daryl Sango</span>. I design and build highly optimized database schemas, secure REST APIs, and blockchain verification systems. Based in Yaoundé, I specialize in engineering robust backend architectures and high-fidelity React interfaces.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-charcoal-deep text-ivory-light font-sans font-medium hover:bg-accent-amber hover:text-charcoal-deep transition-all duration-300 rounded-xs shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
                id="hero-cta-contact"
              >
                Assemble Proposal
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-charcoal-deep text-charcoal-deep font-sans font-medium hover:bg-charcoal-deep/5 transition-all duration-300 rounded-xs flex items-center gap-2"
                id="hero-cta-projects"
              >
                Verify Projects
              </a>
            </div>
          </div>

          {/* Quick Stats Column / Aesthetic card */}
          <div className="lg:w-80 w-full flex flex-col gap-6" id="hero-quick-stats">
            {/* Professional Owner Profile Card */}
            <div className="bg-ivory-card border border-sand p-4 rounded-xs shadow-xs flex flex-col">
              <div className="w-full aspect-[4/5] overflow-hidden bg-sand/30 rounded-xs border border-sand/60 relative group select-none">
                <img 
                  src="/me.jpeg" 
                  alt="Daryl Sango" 
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-102 pointer-events-none select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
                {/* Transparent protective overlay */}
                <div className="absolute inset-0 bg-transparent z-10" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-base font-bold text-charcoal-deep leading-tight">Daryl Sango</h2>
                  <p className="font-sans text-xs text-accent-amber uppercase tracking-widest font-semibold mt-0.5">IT Engineer & Dev</p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Online</span>
                </div>
              </div>
            </div>

            <div className="bg-ivory-card border border-sand p-6 rounded-xs relative">
              <span className="absolute -top-3 -right-3 text-7xl font-serif text-sand/30 font-bold select-none pointer-events-none">05</span>
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal-muted font-bold block mb-1">Total Experience</h3>
              <p className="font-serif text-3xl font-bold text-charcoal-deep mb-4">Professional Years</p>
              <p className="font-sans text-sm text-charcoal-muted leading-relaxed">
                Proven developer contributing secure codebases, database optimizations, and administrative systems since 2022.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-ivory-card/60 border border-sand/80 p-5 rounded-xs">
                <p className="font-serif text-3xl font-bold text-accent-amber">100%</p>
                <p className="font-sans text-xs uppercase tracking-wider text-charcoal-muted mt-1 font-semibold">Success Delivery</p>
              </div>
              <div className="bg-ivory-card/60 border border-sand/80 p-5 rounded-xs">
                <p className="font-serif text-3xl font-bold text-accent-amber">24hr</p>
                <p className="font-sans text-xs uppercase tracking-wider text-charcoal-muted mt-1 font-semibold">Average Response</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta Details of Hero section */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-sand/55 text-sm font-mono text-charcoal-muted uppercase tracking-widest leading-relaxed">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-accent-amber" /> {DARYL_PROFILE.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-accent-amber" /> {DARYL_PROFILE.phone}
            </span>
          </div>
          <div>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>
    </>
  );
}
