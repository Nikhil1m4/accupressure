import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, MapPin, Clock, UserCheck, ShieldCheck, 
  ArrowRight, Users, CheckCircle, Tag 
} from 'lucide-react';
import { WORKSHOPS } from '../data/portalData';
import RegistrationForm from '../components/RegistrationForm';

export default function WorkshopsPage() {
  const [searchParams] = useSearchParams();
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedForWorkshop, setSelectedForWorkshop] = useState(
    searchParams.get('item') || ''
  );

  useEffect(() => {
    const itemParam = searchParams.get('item');
    if (itemParam) {
      setSelectedForWorkshop(itemParam);
      const formEl = document.getElementById('workshop-reg-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  const handleRegister = (workshopTitle) => {
    setSelectedForWorkshop(workshopTitle);
    const formEl = document.getElementById('workshop-reg-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredWorkshops = WORKSHOPS.filter((ws) => {
    const matchesCity = selectedCity === 'all' || ws.cityKey === selectedCity;
    const matchesFormat =
      selectedFormat === 'all' || ws.formatKey === selectedFormat;
    return matchesCity && matchesFormat;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Atmospheric Gradient & Academic Header */}
      <section className="relative w-full bg-gradient-to-b from-surface-container to-surface px-4 sm:px-6 py-10 md:py-14 border-b border-surface-container-high/60 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-medium">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold">Upcoming Workshops</span>
          </nav>

          {/* Badge & Institutional Statement */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              Hands-on Practical Training • 2025 Calendar
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
              Accredited Under Trust Reg. 412/2018
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-tight mt-1">
              Upcoming Acupressure Workshops &amp; Practical Camps
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              Intensive weekend masterclasses, hands-on clinical camps, and public reflexology seminars held across affiliated regional institutes in India.
            </p>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-4xl">
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-container-high/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-primary">14+</span>
              <span className="text-xs text-on-surface-variant">Clinical Hours / Camp</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-container-high/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-primary">100%</span>
              <span className="text-xs text-on-surface-variant">Hands-on Supervised</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-container-high/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-primary">25</span>
              <span className="text-xs text-on-surface-variant">Max Seats / Cohort</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-container-high/80 flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-primary">ISO</span>
              <span className="text-xs text-on-surface-variant">Verified Certificate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="w-full bg-surface-container-lowest p-4 rounded-2xl shadow-xs border border-surface-container-high/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* City Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider shrink-0 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> City:
            </span>
            <button
              type="button"
              onClick={() => setSelectedCity('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                selectedCity === 'all'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              All Cities
            </button>
            <button
              type="button"
              onClick={() => setSelectedCity('delhi')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                selectedCity === 'delhi'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              New Delhi HQ
            </button>
            <button
              type="button"
              onClick={() => setSelectedCity('mumbai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                selectedCity === 'mumbai'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              Mumbai Central
            </button>
            <button
              type="button"
              onClick={() => setSelectedCity('kolkata')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                selectedCity === 'kolkata'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              Kolkata
            </button>
            <button
              type="button"
              onClick={() => setSelectedCity('bengaluru')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                selectedCity === 'bengaluru'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              Bengaluru
            </button>
          </div>

          {/* Format Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto shrink-0">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Format:
            </span>
            <button
              type="button"
              onClick={() => setSelectedFormat('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFormat === 'all'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              All Formats
            </button>
            <button
              type="button"
              onClick={() => setSelectedFormat('clinical')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFormat === 'clinical'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              Hands-on Clinical
            </button>
            <button
              type="button"
              onClick={() => setSelectedFormat('masterclass')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFormat === 'masterclass'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              Weekend Masterclass
            </button>
            <button
              type="button"
              onClick={() => setSelectedFormat('community')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFormat === 'community'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              Free Health Camp
            </button>
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8">
          {filteredWorkshops.map((ws) => (
            <article
              key={ws.id}
              className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-surface-container-high/80 transition-all duration-300 group"
            >
              {/* Image banner */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-surface-container-high">
                <img
                  src={ws.image}
                  alt={ws.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-xs font-bold shadow-xs">
                    {ws.city}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[11px]">
                    {ws.format}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-primary font-bold text-xs shadow-xs">
                  {ws.seatsLeft}
                </div>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-2">
                    <span className="flex items-center gap-1 font-semibold text-primary">
                      <Calendar className="w-3.5 h-3.5" />
                      {ws.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {ws.time}
                    </span>
                  </div>

                  <h3 className="font-title-md text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {ws.title}
                  </h3>

                  <div className="mt-3 flex items-start gap-2 text-xs text-on-surface-variant">
                    <MapPin className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                    <span>Venue: {ws.venue}</span>
                  </div>

                  <div className="mt-1 flex items-start gap-2 text-xs text-on-surface-variant">
                    <UserCheck className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>Lead Trainer: {ws.trainer}</span>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4 pt-3 border-t border-surface-container-high/60">
                    <span className="text-[11px] uppercase font-bold text-outline block mb-1.5">
                      Curriculum Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-on-surface-variant">
                      {ws.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Fee & Apply button */}
                <div className="pt-4 border-t border-surface-container-high/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-outline font-semibold block">Registration Fee</span>
                    <span className="font-tabular-fee text-xl font-bold text-on-surface">
                      {ws.feeFormatted}
                    </span>
                  </div>

                  {/* Rule: Clicking Apply on any item scrolls to or opens registration with that item already selected */}
                  <button
                    type="button"
                    onClick={() => handleRegister(ws.title)}
                    className="inline-flex items-center gap-1.5 px-5 py-2 bg-primary hover:bg-primary-container text-on-primary font-bold text-xs sm:text-sm rounded-full shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Apply / Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Embedded Registration Section (Scrolls directly here when clicking Apply) */}
      <section className="w-full bg-surface-container-low/60 py-16 border-t border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              Reserve Seat for Camp
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">
              Workshop Registration Portal
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Select your camp from the cards above or confirm your registration with transaction ID below.
            </p>
          </div>

          <RegistrationForm initialItem={selectedForWorkshop} formId="workshop-reg-form" />
        </div>
      </section>
    </div>
  );
}
