import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Building, Users, MapPin, 
  CheckCircle, ArrowRight, HeartPulse, Scale, BookOpen 
} from 'lucide-react';
import { TRUST_INFO } from '../data/portalData';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Academic Navigation & Institutional Header Banner */}
      <section className="w-full bg-surface-container-low/70 py-10 md:py-16 px-4 sm:px-6 border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Breadcrumb & Statutory Authority Pill */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-medium">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-outline">/</span>
              <span className="text-primary font-semibold">About Us</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest shadow-xs text-xs font-semibold text-on-surface border border-surface-container-high">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Autonomous Statutory Trust Act • {TRUST_INFO.isoCertification}</span>
            </div>
          </div>

          {/* Main Editorial Header Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                Institutional Overview &amp; Heritage
              </span>
              <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
                Pracheen Aarogya Research Institute and Welfare Trust
              </h1>
              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-3xl leading-relaxed mt-2">
                Dedicated to preserving, researching, and standardizing the ancient science of Indian and oriental acupressure therapies. We bridge traditional drugless healing knowledge with modern clinical anatomy to empower certified healthcare practitioners nationwide.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-container-high flex items-center gap-3.5 w-full lg:max-w-xs">
                <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-on-surface-variant">Statutory Body</span>
                  <span className="font-title-sm text-sm sm:text-base text-on-surface font-bold truncate">
                    National Reg. #{TRUST_INFO.registrationNo}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container-high flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold text-primary font-display-lg">{TRUST_INFO.stats.affiliatedCentres}</span>
                <Building className="w-6 h-6 text-primary/30" />
              </div>
              <span className="text-sm font-bold text-on-surface">Affiliated Institutes</span>
              <span className="text-xs text-on-surface-variant">Standardized teaching centers</span>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container-high flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold text-secondary font-display-lg">{TRUST_INFO.stats.certifiedStudents}</span>
                <HeartPulse className="w-6 h-6 text-secondary/30" />
              </div>
              <span className="text-sm font-bold text-on-surface">Certified Graduates</span>
              <span className="text-xs text-on-surface-variant">Active practitioners across India</span>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container-high flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold text-primary font-display-lg">100%</span>
                <ShieldCheck className="w-6 h-6 text-primary/30" />
              </div>
              <span className="text-sm font-bold text-on-surface">QR-Verifiable IDs</span>
              <span className="text-xs text-on-surface-variant">Instant digital records</span>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container-high flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold text-teal-700 font-display-lg">{TRUST_INFO.stats.statesCovered}</span>
                <MapPin className="w-6 h-6 text-teal-700/30" />
              </div>
              <span className="text-sm font-bold text-on-surface">States Covered</span>
              <span className="text-xs text-on-surface-variant">Nationwide educational reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Split Section: Vision & Grounding */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              Rigorous Natural Healing Systems
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface tracking-tight leading-snug">
              Integrating Vedantic Marma Shastra with Evidence-Based Neuro-Reflexology
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Established under the Indian Trusts Act, Pracheen Aarogya Research Institute serves as a premier regulatory and educational beacon. Historically, acupressure and Marma therapeutic arts suffered from fragmented documentation, regional variances, and unmonitored teaching clinics.
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Our council was founded to solve this dilemma: standardizing meridian charts, establishing precise anatomical point tolerances (measured in standard cun units), codifying reflex-arc biomechanics, and introducing non-invasive protocols recognized by alternative healthcare establishments globally.
            </p>

            <div className="mt-4 flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-on-surface font-medium">Standardized Centralized Examination Boards &amp; Verified Certificates</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-on-surface font-medium">Supervised Clinical Residencies &amp; Practicum at Affiliated Branches</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-on-surface font-medium">High-Standard Tool &amp; Equipment Calibrations for Student Practice Kits</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-surface-container-high/80">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbBCB_p6pFpt1NloL_H2V8jmYrYoUBdWl7uH1txZPyJhsSPVocLl6VddQ3l7wL_tHUDJMUj7mvdBO3VRLvgoRk69NyuVUFCGldnET6KRxr2pcpPYG1ZtoadJU1d1IXUG5Eh6m23VQ5B3OnVIy9vZoTWKulaRKhqHObDLenvpooaNIx0v3ZTZmdVRYfN2HR5Z1ieSOx5X0uujy6Ra2Xxwziqj5479133z0NZfquVaU"
                alt="Ancient and modern medical charts studied in trust lecture room"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-wider font-semibold text-secondary-fixed block">
                    Heritage &amp; Rigor
                  </span>
                  <p className="text-sm font-medium mt-1">
                    Lectures conduct live meridian tracing based on Charaka Samhita and standard WHO acupuncture point coordinates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council & Academic Secretariat Strip */}
      <section className="w-full bg-surface-container-low/60 py-16 border-t border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Academic Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">Trustees &amp; Board of Studies</h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Governed by distinguished clinical practitioners, researchers, and holistic healthcare academicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-4">
                SKV
              </div>
              <h3 className="font-bold text-base text-on-surface">Dr. S. K. Verma</h3>
              <span className="text-xs font-semibold text-primary">Chief Trustee &amp; Academic Dean</span>
              <p className="text-xs text-on-surface-variant mt-2">
                DAT, MD (Alternative Medicine) with 28+ years of clinical meridian therapy and curriculum leadership.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-xl mb-4">
                AS
              </div>
              <h3 className="font-bold text-base text-on-surface">Prof. Ananya Sen</h3>
              <span className="text-xs font-semibold text-secondary">Director of Clinical Research</span>
              <p className="text-xs text-on-surface-variant mt-2">
                Pioneered Sujok and Auricular reflexology integration across Western Zone affiliated training institutions.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xl mb-4">
                RV
              </div>
              <h3 className="font-bold text-base text-on-surface">Dr. R. Venkatraman</h3>
              <span className="text-xs font-semibold text-teal-700">Dean of Examination &amp; Credentials</span>
              <p className="text-xs text-on-surface-variant mt-2">
                Oversees ISO statutory anti-counterfeit QR certification registries and pan-India evaluation norms.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-semibold text-sm hover:bg-primary-container transition-colors shadow-sm"
            >
              <span>Explore Accredited Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
