/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DARYL_PROFILE } from "../types";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  // Form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  // WhatsApp template selector state
  const [waTemplate, setWaTemplate] = useState("hire");
  const [waCustomText, setWaCustomText] = useState("Hi Daryl, I reviewed your professional portfolio and would like to discuss a remote/contract opportunity with you!");

  const templates = {
    hire: "Hi Daryl, I reviewed your professional portfolio and would like to discuss a remote/contract opportunity with you!",
    briefing: "Hello Daryl, we'd love to invite you for a technical technical briefing regarding an upcoming software system backend design.",
    question: "Greetings Daryl! Just reached out from your portfolio site to ask a quick technical question."
  };

  const handleTemplateChange = (type: keyof typeof templates) => {
    setWaTemplate(type);
    setWaCustomText(templates[type]);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      setFormStatus('error');
      setErrorMessage("Validation Fault: Please fill all required fields: Name, Email and Message.");
      return;
    }

    setFormStatus('sending');
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          subject: formSubject,
          message: formMessage
        })
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setFormStatus('error');
        setErrorMessage(errorData.error || "The email endpoint failed to process delivery. Please try again later.");
      }
    } catch (err: any) {
      console.error("Failed to connect to backend send api:", err);
      setFormStatus('error');
      setErrorMessage("Network connection exception. Please try again later.");
    }
  };

  const getWhatsAppEncodedUrl = () => {
    // Daryl's WhatsApp is +237682335275 -> wa.me format requires country code without + or 00
    const rawNum = "237682335275";
    return `https://wa.me/${rawNum}?text=${encodeURIComponent(waCustomText)}`;
  };

  return (
    <section id="contact" className="py-24 bg-ivory-card scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout split title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-amber font-semibold block">
            CALL TO ACTION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-deep">
            Initiate Contact
          </h2>
          <p className="font-sans text-base text-charcoal-muted leading-relaxed max-w-xl font-light">
            Have an open engineering opportunity, contract requirements, or technical inquiry? Connect instantly via secure form or WhatsApp direct drafting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-hub-grid">
          
          {/* Column 1: Channels & WhatsApp Builder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-ivory-light border border-sand p-8 rounded-xs shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-bold text-charcoal-deep border-b border-sand pb-3">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${DARYL_PROFILE.email}`}
                  className="flex items-center gap-4 p-4 border border-sand/40 hover:border-accent-amber rounded-xs bg-ivory-card/40 hover:bg-ivory-card transition-all duration-200"
                >
                  <div className="p-2.5 bg-accent-amber/10 text-accent-amber rounded-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted tracking-wider block">Official Email</span>
                    <span className="font-sans text-sm font-semibold text-charcoal-deep select-all">{DARYL_PROFILE.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${DARYL_PROFILE.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 border border-sand/40 hover:border-accent-amber rounded-xs bg-ivory-card/40 hover:bg-ivory-card transition-all duration-200"
                >
                  <div className="p-2.5 bg-accent-amber/10 text-accent-amber rounded-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted tracking-wider block">Direct Phone</span>
                    <span className="font-sans text-sm font-semibold text-charcoal-deep">{DARYL_PROFILE.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 border border-sand/40 rounded-xs bg-ivory-card/40">
                  <div className="p-2.5 bg-accent-amber/10 text-accent-amber rounded-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-charcoal-muted tracking-wider block">Office Hub Location</span>
                    <span className="font-sans text-sm font-semibold text-charcoal-deep">{DARYL_PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical WhatsApp Live Composer Card */}
            <div className="bg-emerald-50/40 border border-emerald-500/10 p-8 rounded-xs space-y-6" id="whatsapp-drafting-station">
              <div className="flex items-center gap-2 pb-3 border-b border-emerald-500/10">
                <svg className="w-5 h-5 text-emerald-600 shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h3 className="font-serif text-xl font-bold text-emerald-900">WhatsApp Dispatcher</h3>
              </div>

              <p className="font-sans text-xs text-emerald-800 leading-relaxed font-light">
                Generate an custom instant link to map and launch a WhatsApp conversation directly onto Daryl's mobile device with custom pre-edited templates.
              </p>

              {/* Template Selectors */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 font-bold block">
                  Select Presets:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleTemplateChange("hire")}
                    className={`px-3 py-2 text-[10px] uppercase font-bold tracking-wider rounded-xs border transition-all cursor-pointer ${
                      waTemplate === "hire"
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white text-emerald-800 border-emerald-300 hover:border-emerald-500"
                    }`}
                  >
                    Contract Call
                  </button>
                  <button
                    onClick={() => handleTemplateChange("briefing")}
                    className={`px-3 py-2 text-[10px] uppercase font-bold tracking-wider rounded-xs border transition-all cursor-pointer ${
                      waTemplate === "briefing"
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white text-emerald-800 border-emerald-300 hover:border-emerald-500"
                    }`}
                  >
                    Tech Brief
                  </button>
                  <button
                    onClick={() => handleTemplateChange("question")}
                    className={`px-3 py-2 text-[10px] uppercase font-bold tracking-wider rounded-xs border transition-all cursor-pointer ${
                      waTemplate === "question"
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-white text-emerald-800 border-emerald-300 hover:border-emerald-500"
                    }`}
                  >
                    Query
                  </button>
                </div>
              </div>

              {/* Editable Text Area to encode */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 font-bold block">
                  Customize Message Content:
                </span>
                <textarea
                  value={waCustomText}
                  onChange={(e) => setWaCustomText(e.target.value)}
                  className="w-full h-24 p-3 font-sans text-xs rounded-xs border border-emerald-200 focus:border-emerald-500 font-light bg-white text-emerald-950 resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  placeholder="Draft your instant chat content here..."
                />
              </div>

              {/* Dispatch Action */}
              <a
                href={getWhatsAppEncodedUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs uppercase tracking-widest text-center block rounded-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
                id="whatsapp-dispatch-btn"
              >
                Launch Live WhatsApp Chat <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-ivory-light border border-sand p-8 rounded-xs shadow-xs">
            <h3 className="font-serif text-xl font-bold text-charcoal-deep border-b border-sand pb-4 mb-6">
              Secure Message Terminal
            </h3>

            <AnimatePresence mode="wait">
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-4 text-center space-y-6"
                  id="form-success-state"
                >
                  <div className="w-16 h-16 bg-accent-amber/10 text-accent-amber rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="font-serif text-2xl font-bold text-charcoal-deep">Message Sent Successfully!</h4>
                    <p className="font-sans text-sm text-charcoal-muted leading-relaxed font-light">
                      Your inquiry has been successfully transmitted to Daryl's email address via Resend. He will review your communication and get back to you shortly!
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                      onClick={() => {
                        setFormStatus('idle');
                        setFormSubject("");
                        setFormMessage("");
                      }}
                      className="px-6 py-3 border border-sand text-charcoal-muted font-sans font-semibold text-xs uppercase tracking-wider rounded-xs hover:bg-sand/30 transition-all duration-200 cursor-pointer"
                    >
                      Compose Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={submitForm}
                  className="space-y-6"
                  id="contact-portfolio-form"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="form-input-name" className="font-mono text-[10px] uppercase font-bold tracking-wider text-charcoal-muted block">
                        Your Full Name *
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full p-3.5 bg-ivory-card/40 border border-sand focus:border-accent-amber focus:bg-white text-sm text-charcoal-deep rounded-xs transition-colors focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="form-input-email" className="font-mono text-[10px] uppercase font-bold tracking-wider text-charcoal-muted block">
                        Contact Email Address *
                      </label>
                      <input
                        id="form-input-email"
                        type="email"
                        required
                        placeholder="contact@company.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full p-3.5 bg-ivory-card/40 border border-sand focus:border-accent-amber focus:bg-white text-sm text-charcoal-deep rounded-xs transition-colors focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-input-subject" className="font-mono text-[10px] uppercase font-bold tracking-wider text-charcoal-muted block">
                      Inquiry Subject
                    </label>
                    <input
                      id="form-input-subject"
                      type="text"
                      placeholder="Contract Proposal / Project Consultation"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full p-3.5 bg-ivory-card/40 border border-sand focus:border-accent-amber focus:bg-white text-sm text-charcoal-deep rounded-xs transition-colors focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-input-message" className="font-mono text-[10px] uppercase font-bold tracking-wider text-charcoal-muted block">
                      Extended Message Statement *
                    </label>
                    <textarea
                      id="form-input-message"
                      required
                      placeholder="Detail your requirements, project schedules, or timeline limits..."
                      rows={6}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full p-3.5 bg-ivory-card/40 border border-sand focus:border-accent-amber focus:bg-white text-sm text-charcoal-deep rounded-xs transition-colors focus:outline-none resize-none"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xs flex gap-3 text-red-900 text-sm align-start" id="form-error-state">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        {errorMessage || "Validation Fault: Please supply your name, email-address, and a message statement to prepare the dispatch!"}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-4 bg-charcoal-deep hover:bg-accent-amber disabled:bg-sand disabled:text-charcoal-muted text-ivory-light hover:text-charcoal-deep font-sans font-bold text-xs uppercase tracking-widest rounded-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id="submit-contact-form"
                  >
                    {formStatus === 'sending' ? (
                      <>Processing Dispatch draft...</>
                    ) : (
                      <>
                        Verify and Dispatch Proposal <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
