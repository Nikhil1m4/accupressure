import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, Star, ArrowRight, ChevronRight, School, Building, 
  Search, CheckCircle2, QrCode, Lock, Check, Award, MapPin 
} from 'lucide-react';
import { TRUST_INFO, COURSES } from '../data/portalData';

export default function HomePage({ onOpenRegistration }) {
  const navigate = useNavigate();
  const [courseFilter, setCourseFilter] = useState('all');
  const [certInput, setCertInput] = useState('');
  const [certResult, setCertResult] = useState(null);

  const filteredCourses = COURSES.filter((c) => {
    if (courseFilter === 'all') return true;
    return c.category === courseFilter;
  });

  const handleVerify = (e) => {
    e.preventDefault();
    const id = certInput.trim() ? certInput.trim().toUpperCase() : 'ACT-2026-0841';
    setCertResult({
      name: id === 'ACT-2026-0841' ? 'Jessica Lynne Thompson' : 'Verified Trust Practitioner',
      course: 'Diploma in Acupressure Therapy (DAT)',
      certId: id,
      issueDate: '15 August 2024',
      status: 'Active Practitioner • Central Register #4128'
    });
  };

  const handleApplyCourse = (courseTitle) => {
    navigate(`/register?item=${encodeURIComponent(courseTitle)}`);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Coursera Split-Layout Style) */}
      <section className="w-full bg-surface-container-lowest py-12 md:py-20 border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (60%) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Accreditation Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold shadow-xs mb-4">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>ISO 9001:2015 Certified Trust • 25+ Affiliated Institutes Nationwide</span>
              </div>

              {/* Bold Headline */}
              <h1 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
                Master Certified Acupressure &amp; Holistic Healing Across India
              </h1>

              {/* Subheadline */}
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl mt-4 leading-relaxed">
                Enroll in standardized diploma and certificate programs offered through our accredited partner institutes, backed by QR-verified credentials.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 font-label-md text-sm sm:text-base px-6 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all shadow-md group font-semibold"
                >
                  <span>Explore Courses &amp; Enroll</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#verify"
                  className="inline-flex items-center justify-center gap-1 font-label-md text-sm sm:text-base px-5 py-3 text-primary hover:text-primary-container font-semibold transition-colors group"
                >
                  <span>Verify a Certificate</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Proof Snippet */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8 pt-3 bg-surface-container-low px-4 py-2.5 rounded-xl border border-surface-container-high/80">
                <div className="flex items-center text-amber-600">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <div className="flex items-center gap-2 font-label-md text-xs sm:text-sm text-on-surface">
                  <span className="font-bold">4.9/5 Student Rating</span>
                  <span className="text-outline">•</span>
                  <span className="text-on-surface-variant">12,000+ Alumni Practicing Across 18 States</span>
                </div>
              </div>
            </div>

            {/* Right Column (40%) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none rounded-2xl shadow-xl overflow-hidden bg-surface-container border border-surface-container-high/80">
                <img
                  alt="Clinical acupressure practical training in session"
                  className="w-full h-[380px] sm:h-[420px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkoftlHVaFqxW7yspeKpmSMtcosx6ELK1QviMbeqJugkE6PTJSv2ohKIJV1hWNraRLr8PiRFqJmbu6xt_vXOIbROsXLMdaEVqo2s72mE8VxjK6kvEU_lZ2jFZIKcEU-NLZAGTeZwg8iZNV17W4BZBqH8wZ7Q2skIVLbTJgDbf3k3f-FZXedr268BbCzgGIFFE6Klo3rOYjVSVxcH6n4-zSCtW35HBD349RQVb4ZOI"
                />

                {/* Top Right Floating Pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-primary font-semibold text-xs border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>ISO Accredited Curriculum</span>
                </div>

                {/* Bottom Left Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-on-surface">12,000+ Certified Practitioners</span>
                    <div className="flex items-center text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    Empowering holistic healthcare clinics nationwide with evidence-backed meridian sciences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AFFILIATED INSTITUTES & TRUST CREDIBILITY STRIP */}
      <section className="w-full bg-surface-container-low py-8 px-4 border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-xs uppercase tracking-wider text-outline text-center mb-4 font-semibold">
            Standardized curriculum recognized across 25+ affiliated training centres
          </p>
          <div className="w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 px-3.5 py-2 bg-surface-container-lowest rounded-lg shadow-xs border border-surface-container-high/60">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-on-surface font-medium">Delhi Institute of Acupressure</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-surface-container-lowest rounded-lg shadow-xs border border-surface-container-high/60">
              <School className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-on-surface font-medium">Maharashtra Holistic Academy</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-surface-container-lowest rounded-lg shadow-xs border border-surface-container-high/60">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-on-surface font-medium">Bengal Sujok &amp; Acu-Science</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-surface-container-lowest rounded-lg shadow-xs border border-surface-container-high/60">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-on-surface font-medium">Karnataka Natural Health Wing</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-surface-container-lowest rounded-lg shadow-xs border border-surface-container-high/60">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-on-surface font-medium">Gujarat Acupressure Sansthan</span>
            </div>
            <Link
              to="/branches"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary hover:text-primary-container px-2 py-1 transition-colors"
            >
              <span>View All 25+ Institutes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. POPULAR ACUPRESSURE COURSES GRID */}
      <section className="w-full py-16" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
                Academic Registry
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface mt-1">
                Explore Certified Programs
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-1">
                Standardized syllabi, hands-on clinical practicals, and government-recognized trust certificates.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-surface-container-low p-1.5 rounded-full border border-surface-container-high">
              <button
                type="button"
                onClick={() => setCourseFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  courseFilter === 'all'
                    ? 'bg-primary text-on-primary shadow-xs font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                All Courses
              </button>
              <button
                type="button"
                onClick={() => setCourseFilter('diploma')}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  courseFilter === 'diploma'
                    ? 'bg-primary text-on-primary shadow-xs font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Diploma Programs
              </button>
              <button
                type="button"
                onClick={() => setCourseFilter('certificate')}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  courseFilter === 'certificate'
                    ? 'bg-primary text-on-primary shadow-xs font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Certificate Courses
              </button>
              <button
                type="button"
                onClick={() => setCourseFilter('clinical')}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  courseFilter === 'clinical'
                    ? 'bg-primary text-on-primary shadow-xs font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Clinical Workshops
              </button>
            </div>
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md border border-surface-container-high/80 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Thumbnail */}
                <div className="relative h-48 sm:h-52 bg-surface-container-high overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-secondary-fixed text-on-secondary-fixed font-semibold text-xs px-2.5 py-1 rounded-md shadow-xs">
                    {course.categoryLabel}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white font-medium text-[11px] px-2 py-0.5 rounded">
                    {course.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-primary text-xs font-semibold mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{course.accreditation}</span>
                    </div>

                    <h3 className="font-headline-sm text-lg sm:text-xl text-on-surface font-bold leading-snug group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>

                    <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                      {course.shortDescription}
                    </p>

                    <div className="mt-4 pt-3 border-t border-surface-container-high/60 flex items-center justify-between text-xs text-on-surface-variant">
                      <span>Mode: {course.mode}</span>
                      <span>Lang: {course.language}</span>
                    </div>
                  </div>

                  {/* Card Footer: Fee & Apply button */}
                  <div className="mt-5 pt-4 border-t border-surface-container-high/80 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-outline uppercase font-semibold">Tuition Fee</span>
                      <span className="font-tabular-fee text-lg font-bold text-on-surface">
                        {course.feeFormatted}
                      </span>
                    </div>

                    {/* Rule: Clicking Apply on any item scrolls to or opens registration with that item already selected */}
                    <button
                      type="button"
                      onClick={() => handleApplyCourse(course.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-container text-on-primary font-semibold text-xs sm:text-sm rounded-full shadow-xs transition-all cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/5 font-semibold text-sm transition-colors"
            >
              <span>View Full Course Syllabus &amp; Curricula</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US / TRUST HIGHLIGHTS */}
      <section className="w-full bg-surface-container-low/60 py-16 border-y border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">Rigorous Methodology</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">Why Study Under The Central Trust?</h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-2">
              Combining ancient Indian Marma Vidya and Oriental Acupressure with anatomical clinical tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high/80 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="font-title-sm text-lg font-bold text-on-surface">QR-Verifiable Credentials</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Every certificate and diploma is issued with an individual encrypted anti-counterfeit QR code, verifiable by clinics and hospitals nationwide.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high/80 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                <School className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-title-sm text-lg font-bold text-on-surface">Hands-on Clinical Hours</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Mandatory supervised practicals at affiliated regional centres ensure graduates can palpate pressure points within standard millimeter tolerances.
              </p>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-xs border border-surface-container-high/80 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Building className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="font-title-sm text-lg font-bold text-on-surface">25+ Affiliated Centres</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Regional academic wings in Delhi, Maharashtra, Bengal, Karnataka, Gujarat, and Uttar Pradesh provide seamless offline support and examination centres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSTANT CERTIFICATE VERIFICATION BANNER */}
      <section className="w-full py-16" id="verify">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-primary/5 rounded-3xl p-6 sm:p-10 border border-primary/20 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Interactive Verification */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Official Trust Registry</span>
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface">
                Verify Student Credentials Instantly
              </h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 max-w-xl">
                Employers, hospitals, and clinics can authenticate any graduate diploma or certificate in real-time using our central registry.
              </p>

              {/* Search Assembly Form */}
              <form onSubmit={handleVerify} className="w-full max-w-lg mt-6 flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-outline absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={certInput}
                    onChange={(e) => setCertInput(e.target.value)}
                    placeholder="Enter Certificate ID (e.g. ACT-2026-0841)"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-mono text-sm placeholder:font-sans placeholder:text-outline-variant outline-none shadow-sm border border-slate-200 focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-semibold text-sm hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>Verify Now</span>
                </button>
              </form>

              {/* Dynamic Verification Result */}
              {certResult && (
                <div className="mt-4 p-4 bg-surface-container-lowest rounded-xl shadow-md border border-emerald-200 w-full max-w-lg animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>CERTIFICATE AUTHENTICATED</span>
                    </div>
                    <span className="text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded">
                      Active Practitioner
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-2.5 text-xs text-on-surface-variant">
                    <div>
                      <span className="block text-[10px] uppercase text-outline">Candidate Name:</span>
                      <strong className="text-on-surface">{certResult.name}</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-outline">Credential:</span>
                      <strong className="text-on-surface">{certResult.course}</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-outline">Roll / Cert ID:</span>
                      <span className="font-mono font-bold text-on-surface">{certResult.certId}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-outline">Issuing Council:</span>
                      <span className="text-on-surface">Trust Central Board</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mt-4 text-xs font-medium text-primary">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Tamper-proof QR &amp; Central Registry Verification</span>
              </div>
            </div>

            {/* Right Side: Official Certificate High-Fidelity Preview Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-surface-container-lowest p-2 rounded-2xl shadow-xl overflow-hidden group border border-slate-200">
                <img
                  alt="Sample Bharatiya Acupressure accredited completion diploma certificate"
                  className="w-full h-auto rounded-xl object-contain shadow-sm group-hover:scale-[1.01] transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk2byf5mr2aN7B33PFzQllFeN31llVTHbaqt_NI9ahgzsbNYOfJYG1bQemxpxq9CcFlN6mAaXO_XgpGzFWzP9B5JlART3Wl8tICAy9SJ9bQ5F16fZl3nUeh3ohqg_k8G5dfXiJa1PkopMjUXldBBad5GtgLzqC9nGlLm7HkML0lteOV--3ER1oNzKQU2SFgkZYmn5JtzQZTGyc_K-N9KedN3thtTiySN2E_usgbk4"
                />
                <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-md flex items-center gap-1.5 text-primary text-xs font-semibold">
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Encrypted QR Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
