import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShieldCheck, HelpCircle, Phone, ArrowLeft } from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';
import { TRUST_INFO } from '../data/portalData';

export default function RegistrationPage() {
  const [searchParams] = useSearchParams();
  const initialItem = searchParams.get('item') || '';

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-72px)] bg-surface py-10 md:py-14 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-medium mb-6">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span className="text-outline">/</span>
          <Link to="/courses" className="hover:text-primary transition-colors">
            Courses
          </Link>
          <span className="text-outline">/</span>
          <span className="text-primary font-semibold">Online Registration</span>
        </nav>

        {/* Form Container */}
        <RegistrationForm initialItem={initialItem} formId="main-registration-portal" />

        {/* Assistance Help Box */}
        <div className="max-w-[720px] mx-auto mt-8 p-5 bg-surface-container-low rounded-2xl border border-surface-container-high/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-on-surface block">Need Help with Registration or Payment?</span>
              <span className="text-on-surface-variant">Our Central Academic Helpdesk is available Mon–Sat.</span>
            </div>
          </div>

          <a
            href={`tel:${TRUST_INFO.tollFree}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 rounded-full text-slate-800 font-semibold hover:border-primary hover:text-primary transition-colors shrink-0 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>{TRUST_INFO.tollFree}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
