/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { DARYL_PROFILE } from "../types";
import { BookOpen, Languages, Award, Binary, Mail, Phone, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-ivory-card border-y border-sand">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Title & Summary Section */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-semibold block">
                PROFESSIONAL SUMMARY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-deep">
                High-Reliability Backend Systems & Relational Databases
              </h2>
            </div>

            <p className="font-sans text-lg text-charcoal-muted leading-relaxed font-light">
              {DARYL_PROFILE.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="credentials-highlights">
              <div className="p-5 bg-ivory-light border border-sand/60 rounded-xs space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-accent-amber/10 flex items-center justify-center text-accent-amber">
                  <Binary className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-semibold text-charcoal-deep">Technical Integrity</h4>
                <p className="font-sans text-base text-charcoal-muted leading-relaxed font-light">
                  Rigorous focus on REST API security, SQL query optimizations, and token transactions.
                </p>
              </div>

              <div className="p-5 bg-ivory-light border border-sand/60 rounded-xs space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-accent-amber/10 flex items-center justify-center text-accent-amber">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-semibold text-charcoal-deep">Proven Leadership</h4>
                <p className="font-sans text-base text-charcoal-muted leading-relaxed font-light">
                  Selected as youth diplomat under the British High Commission, integrating technical ideas with executive affairs.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Education, Languages & Details Card */}
          <div className="lg:col-span-5 space-y-8">
            {/* Academic Profile */}
            <div className="bg-ivory-light border border-sand p-8 rounded-xs shadow-xs space-y-8" id="profile-academic-card">
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-sand">
                  <BookOpen className="w-5 h-5 text-accent-amber" />
                  <h3 className="font-serif text-xl font-bold text-charcoal-deep">Academic Qualifications</h3>
                </div>
                
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-1 bg-accent-amber/10 text-accent-amber font-mono text-sm font-semibold rounded-xs">
                    Degree Obtained
                  </span>
                  <h4 className="font-sans font-bold text-base text-charcoal-deep leading-tight">
                    {DARYL_PROFILE.education.degree}
                  </h4>
                  <p className="font-sans text-base text-charcoal-muted font-medium">
                    {DARYL_PROFILE.education.school}
                  </p>
                  <p className="font-mono text-sm text-charcoal-muted flex items-center gap-1.5 mt-2">
                    <Calendar className="w-3.5 h-3.5" />
                    Years: {DARYL_PROFILE.education.duration}
                  </p>
                </div>
              </div>

              {/* Language Proficiency */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-sand">
                  <Languages className="w-5 h-5 text-accent-amber" />
                  <h3 className="font-serif text-xl font-bold text-charcoal-deep">Language Fluencies</h3>
                </div>

                <div className="space-y-4">
                  {DARYL_PROFILE.languages.map((lang, idx) => (
                    <div key={idx} className="space-y-1.5" id={`lang-${lang.name.toLowerCase()}`}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-sans font-semibold text-charcoal-deep">{lang.name}</span>
                        <span className="font-mono text-sm text-accent-amber font-semibold">{lang.level}</span>
                      </div>
                      <div className="h-1.5 bg-sand/50 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-amber rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact metadata grid */}
              <div className="pt-4 border-t border-sand space-y-3">
                <div className="flex items-center gap-2.5 text-sm text-charcoal-muted">
                  <Mail className="w-4 h-4 text-accent-amber shrink-0" />
                  <span className="font-mono text-sm select-all">{DARYL_PROFILE.email}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-charcoal-muted">
                  <Phone className="w-4 h-4 text-accent-amber shrink-0" />
                  <span className="font-mono text-sm">{DARYL_PROFILE.phone}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
