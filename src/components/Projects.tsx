/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PROJECTS, Project } from "../types";
import { ExternalLink, Github, Code, Layout, ShieldAlert, Cpu, Database, ChevronRight, X, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import immochainImg from "../assets/images/immochain_preview_1779897536170.png";
import rollclallImg from "../assets/images/rollclall_preview_1779897553385.png";
import agriscanImg from "../assets/images/agriscan_preview_1779897570932.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Blockchain", "Full-Stack", "Backend", "Web App"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  // Map project ID to its generated elegant preview mockup image
  const getProjectImage = (id: string) => {
    switch (id) {
      case "immochain":
        return immochainImg;
      case "rollclall":
        return rollclallImg;
      case "agriscan":
        return agriscanImg;
      default:
        return "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800";
    }
  };

  return (
    <section id="projects" className="py-24 bg-ivory-light border-b border-sand">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section with categories */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-semibold block">
              REAL PROJECTS DELIVERED
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-deep">
              Engineering Work Showcase
            </h2>
            <p className="font-sans text-base text-charcoal-muted leading-relaxed font-light">
              Explore custom systems engineered with Node, Express, MySQL, and secure layers. Tap any project to verify internal architecture.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b md:border-b-0 pb-4 md:pb-0" id="project-filters">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 font-sans text-sm uppercase tracking-wider font-semibold border rounded-xs transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-charcoal-deep text-ivory-light border-charcoal-deep shadow-xs"
                    : "border-sand/70 text-charcoal-muted hover:border-accent-amber hover:text-accent-amber"
                }`}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-ivory-card border border-sand hover:border-accent-amber/50 rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xs"
              id={`project-card-${project.id}`}
            >
              {/* Visual Demo Card Preview Box */}
              <div className="h-48 border-b border-sand bg-ivory-light overflow-hidden relative select-none">
                <img
                  src={getProjectImage(project.id)}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
                
                {/* Transparent protective overlay */}
                <div className="absolute inset-0 bg-transparent z-10" />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-charcoal-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-3 bg-ivory-light text-charcoal-deep hover:bg-accent-amber hover:text-charcoal-deep transition-colors rounded-full focus:outline-none"
                    title="Examine Schema and Details"
                    id={`project-explore-btn-${project.id}`}
                  >
                    <Info className="w-5 h-5 pointer-events-none" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-ivory-light text-charcoal-deep hover:bg-accent-amber hover:text-charcoal-deep transition-colors rounded-full"
                    title="Access GitHub Link"
                    id={`project-github-btn-${project.id}`}
                  >
                    <Github className="w-5 h-5 pointer-events-none" />
                  </a>
                </div>
              </div>

              {/* Text metadata details */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm uppercase tracking-wider text-accent-amber font-semibold">
                      {project.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-charcoal-deep group-hover:text-accent-amber transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-base text-charcoal-muted leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 pt-4 border-t border-sand/40">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="font-sans text-sm font-bold text-charcoal-deep hover:text-accent-amber flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Examine Schema & Flow <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-sans text-sm font-semibold text-charcoal-muted hover:text-accent-amber flex items-center gap-1"
                    >
                      Repository <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Inspection Drawer Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 bg-charcoal-deep/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-ivory-light border border-sand max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                id="project-inspection-modal"
              >
                {/* Header */}
                <div className="bg-ivory-card border-b border-sand px-6 py-5 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-accent-amber">
                      Architecture Examination
                    </span>
                    <h3 className="font-serif text-xl font-bold text-charcoal-deep">{selectedProject.title} Details</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-sand/30 text-charcoal-deep hover:text-accent-amber rounded-full transition-colors focus:outline-none"
                    id="close-inspection-modal"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5 pointer-events-none" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto space-y-6 font-sans text-sm text-charcoal-muted leading-relaxed">
                  
                  {/* Summary */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-charcoal-deep text-xs font-mono uppercase tracking-wider text-accent-amber">
                      Core Scope Description
                    </h4>
                    <p className="font-light">{selectedProject.description}</p>
                  </div>

                  {/* Schema breakdown spec according to database standard */}
                  <div className="space-y-3 bg-ivory-card border border-sand p-4 rounded-xs">
                    <h4 className="font-bold text-charcoal-deep text-xs font-mono uppercase tracking-wider flex items-center gap-1">
                      <Database className="w-4 h-4 text-accent-amber" /> Real-World Relational Database Schema
                    </h4>
                    
                    {selectedProject.id === "immochain" ? (
                      <div className="font-mono text-xs text-charcoal-deep space-y-2">
                        <p className="text-accent-amber">// Tables Schema Model (MySQL)</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><strong>Users:</strong> user_id (PK), email, password_hash, mfa_secret, status, blockchain_wallet_addr</li>
                          <li><strong>Properties:</strong> prop_id (PK), title, location_sector, price, owner_id (FK), status_flag</li>
                          <li><strong>Transactions:</strong> tx_id (PK), prop_id (FK), tenant_id (FK), blockchain_hash, created_at</li>
                        </ul>
                        <p className="text-emerald-600 bg-emerald-500/10 p-2 rounded-xs border border-emerald-500/10 text-[11px]">
                          ✔ Optimal Composite Index applied on: (location_sector, price) to support fast multi-variable query execution times.
                        </p>
                      </div>
                    ) : selectedProject.id === "rollclall" ? (
                      <div className="font-mono text-xs text-charcoal-deep space-y-2">
                        <p className="text-accent-amber">// Attendance Logging Schema Model (MySQL)</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li><strong>Users / Students:</strong> uid (PK), name, rfid_code, college_mail, registration_hash</li>
                          <li><strong>Sessions:</strong> session_id (PK), class_code, lat_coord, lon_coord, expiration_stamp</li>
                          <li><strong>Signins:</strong> log_id (PK), session_id (FK), uid (FK), time_checked, device_fingerprint</li>
                        </ul>
                        <p className="text-[#60D394] bg-emerald-500/5 p-2 rounded-xs border border-[#60D394]/10 text-[11px]">
                          ✔ Enforces unique multi-column constraint on (session_id, uid) to secure anti-fraud roll call logging in real-time.
                        </p>
                      </div>
                    ) : (
                      <div className="font-mono text-xs text-charcoal-deep space-y-1.5">
                        <p className="text-accent-amber">// Modular MVC Data Architecture (MySQL / Express)</p>
                        <p>Fully normalized tables with strict foreign key constraints. Incorporates query pagination buffers and automatic indexing rules to handle concurrent API read requests from clients.</p>
                      </div>
                    )}
                  </div>

                  {/* API Endpoints specifications */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-charcoal-deep text-xs font-mono uppercase tracking-wider text-accent-amber">
                      Core REST API endpoints
                    </h4>
                    
                    <div className="border border-sand rounded-xs overflow-hidden text-xs font-mono">
                      <div className="grid grid-cols-12 bg-ivory-card border-b border-sand px-4 py-2 font-bold text-charcoal-deep">
                        <div className="col-span-3">METHOD</div>
                        <div className="col-span-5">ROUTE</div>
                        <div className="col-span-4 text-right">SECURITY</div>
                      </div>

                      {selectedProject.id === "immochain" ? (
                        <div className="divide-y divide-sand/50">
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-emerald-600 font-bold">POST</div>
                            <div className="col-span-5 text-charcoal-deep">/api/v1/auth/mfa</div>
                            <div className="col-span-4 text-right text-accent-amber">2FA Validation</div>
                          </div>
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-blue-600 font-bold">GET</div>
                            <div className="col-span-5 text-charcoal-deep">/api/v1/properties</div>
                            <div className="col-span-4 text-right text-charcoal-muted">Public Search</div>
                          </div>
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-emerald-600 font-bold">POST</div>
                            <div className="col-span-5 text-charcoal-deep">/api/v1/properties/buy</div>
                            <div className="col-span-4 text-right text-accent-amber">JWT / Wallet Proof</div>
                          </div>
                        </div>
                      ) : selectedProject.id === "rollclall" ? (
                        <div className="divide-y divide-sand/50">
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-emerald-600 font-bold">POST</div>
                            <div className="col-span-5 text-charcoal-deep">/api/sessions/create</div>
                            <div className="col-span-4 text-right text-accent-amber">Instructor JWT</div>
                          </div>
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-emerald-600 font-bold">POST</div>
                            <div className="col-span-5 text-charcoal-deep">/api/logins/register</div>
                            <div className="col-span-4 text-right text-charcoal-muted">Device / GPS Auth</div>
                          </div>
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-blue-600 font-bold">GET</div>
                            <div className="col-span-5 text-charcoal-deep">/api/sessions/:id/stats</div>
                            <div className="col-span-4 text-right text-accent-amber">Instructor Check</div>
                          </div>
                        </div>
                      ) : (
                        <div className="divide-y divide-sand/50">
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-blue-600 font-bold">GET</div>
                            <div className="col-span-5 text-charcoal-deep">/api/v1/data</div>
                            <div className="col-span-4 text-right text-charcoal-muted">Public</div>
                          </div>
                          <div className="grid grid-cols-12 px-4 py-2">
                            <div className="col-span-3 text-emerald-600 font-bold">POST</div>
                            <div className="col-span-5 text-charcoal-deep">/api/v1/data/admin</div>
                            <div className="col-span-4 text-right text-accent-amber">Bearer JWT Token</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-3 pt-4 border-t border-sand">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-charcoal-deep hover:bg-accent-amber text-ivory-light hover:text-charcoal-deep font-sans text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-4 h-4" /> Open Github Repository
                    </a>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
