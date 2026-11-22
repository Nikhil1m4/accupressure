import React, { useEffect, useState } from 'react';
import { X, MessageCircle, Mail, MapPin, ArrowUpRight, Copy, Check, Phone } from 'lucide-react';
import { TRUST_INFO } from '../data/portalData';

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-on-surface/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-surface-container-high/80 p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-[12px] font-semibold tracking-wide uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Secretariat Desk
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-on-surface tracking-tight font-headline-md">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Reach out to the Trust office for admissions, treatment equipment, branch queries, or general assistance.
          </p>
        </div>

        {/* Contact Rows */}
        <div className="space-y-3.5 w-full">
          {/* Row 1: WhatsApp */}
          <div className="flex items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-emerald-300 hover:bg-emerald-50/20 transition-all duration-200">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                  WhatsApp Hotline
                </span>
                <span className="block text-base font-bold text-slate-900 truncate tracking-tight">
                  {TRUST_INFO.whatsapp}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => copyToClipboard(TRUST_INFO.whatsapp, 'phone')}
                title="Copy phone"
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
              >
                {copied === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-[#0F766E] hover:bg-[#0d655e] text-white text-[13px] font-semibold rounded-full shadow-sm transition-colors"
              >
                <span>Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="flex items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/20 transition-all duration-200">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                  Email Address
                </span>
                <a
                  href={`mailto:${TRUST_INFO.email}`}
                  className="block text-base font-bold text-slate-900 hover:text-primary transition-colors truncate tracking-tight"
                >
                  {TRUST_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => copyToClipboard(TRUST_INFO.email, 'email')}
                title="Copy email"
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
              >
                {copied === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`mailto:${TRUST_INFO.email}`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-slate-500 hover:text-primary hover:bg-teal-50 transition-colors"
                title="Send email"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Row 3: Toll Free */}
          <div className="flex items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-300 transition-all duration-200">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-11 h-11 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                  National Toll-Free Helpline
                </span>
                <span className="block text-base font-bold text-slate-900 truncate tracking-tight">
                  {TRUST_INFO.tollFree}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard(TRUST_INFO.tollFree, 'toll')}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors shrink-0"
            >
              {copied === 'toll' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Row 4: Address */}
          <div className="flex items-start gap-3.5 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="w-11 h-11 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                Physical Secretariat
              </span>
              <p className="text-sm font-semibold text-slate-900 leading-snug">
                2nd Floor, Holistic Wellness Bhawan,
                <br />
                <span className="text-slate-600 font-normal">Sector 17, Chandigarh – 160017, India</span>
              </p>
              <span className="inline-block mt-1 text-[12px] text-slate-500">
                Visiting Hours: {TRUST_INFO.hours}
              </span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <span>Trust Reg. No: {TRUST_INFO.registrationNo}</span>
          <span>•</span>
          <span>{TRUST_INFO.isoCertification}</span>
        </div>
      </div>
    </div>
  );
}
