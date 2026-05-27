/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DiplomacyExperience from "./components/DiplomacyExperience";
import WorkHistory from "./components/WorkHistory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent-amber selection:text-charcoal-deep antialiased">
      {/* Editorial Navigation Headers & Hero Intro */}
      <Header />

      {/* Main Structural Elements */}
      <main className="flex-grow">
        {/* Core Credentials Academic & Language details */}
        <About />

        {/* Technical Competency Slider Grid */}
        <Skills />

        {/* Enterprise Projects (ImmoChain, Rollclall + Schema Breakdown Drawer Modal) */}
        <Projects />

        {/* High Commissioner for a Day Diplomatic Spotlight */}
        <DiplomacyExperience />

        {/* Timeline chronological work profiles */}
        <WorkHistory />

        {/* Lead Generation, Email generator form and WhatsApp interactive Composer */}
        <Contact />
      </main>

      {/* Footer copyright, brand markers and back-to-top buttons */}
      <Footer />
    </div>
  );
}
