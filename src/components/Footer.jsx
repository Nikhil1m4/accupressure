import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Award, ShieldCheck, Phone, Mail, Building, Clock } from 'lucide-react';
import { TRUST_INFO } from '../data/portalData';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="w-full bg-surface-container-low mt-16 pt-16 pb-8 border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-surface-container-high/80">
          {/* Column 1: Trust Profile */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={TRUST_INFO.logo}
                alt={TRUST_INFO.name}
                className="h-12 w-12 object-contain rounded-full shadow-sm ring-1 ring-primary/20 shrink-0"
              />
              <span className="font-title-sm text-sm sm:text-title-sm text-on-surface font-bold leading-tight">
                Pracheen Aarogya Research Institute &amp; Welfare Trust
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Autonomous statutory national accreditation council dedicated to traditional Indian therapeutics, clinical meridian sciences, and standardized holistic certifications.
            </p>
            <div className="flex flex-col gap-1.5 font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
              <span className="font-semibold text-on-surface flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                Reg. No: {TRUST_INFO.registrationNo}
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                {TRUST_INFO.isoCertification}
              </span>
              <span className="inline-block px-2.5 py-1 bg-surface-container rounded-md font-label-sm text-[11px] text-tertiary w-fit font-semibold mt-1">
                Non-Profit Academic Council
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-title-sm text-title-sm text-on-surface font-bold pb-1 border-b border-surface-container-high/60">
              Quick Academic Links
            </h4>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              <li>
                <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  Home Portal
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  Accredited Courses (DAT &amp; CAT)
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  Clinical Equipment &amp; Kits
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  Upcoming Workshops &amp; Camps
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  Affiliated Training Centres
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  Convocation &amp; Clinical Gallery
                </Link>
              </li>
              <li>
                <Link to="/payment-method" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  Official Bank &amp; QR Payment Details
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Student Support */}
          <div className="flex flex-col gap-3">
            <h4 className="font-title-sm text-title-sm text-on-surface font-bold pb-1 border-b border-surface-container-high/60">
              Student Support &amp; Help
            </h4>
            <ul className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-on-surface">National Toll-Free Helpline:</span>
                  <a href={`tel:${TRUST_INFO.tollFree}`} className="hover:text-primary font-medium">
                    {TRUST_INFO.tollFree}
                  </a>
                  <span className="block text-xs text-slate-500">({TRUST_INFO.hours})</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <span className="block font-semibold text-on-surface">Academic Secretariat Email:</span>
                  <a href={`mailto:${TRUST_INFO.supportEmail}`} className="hover:text-primary font-medium">
                    {TRUST_INFO.supportEmail}
                  </a>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-left text-primary hover:underline font-semibold flex items-center gap-1"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                  Direct Secretariat Contact Desk
                </button>
              </li>
              <li>
                <Link to="/about-us" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-primary" />
                  About Trust Council &amp; Faculty
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Portals & Trust Badges */}
          <div className="flex flex-col gap-3">
            <h4 className="font-title-sm text-title-sm text-on-surface font-bold pb-1 border-b border-surface-container-high/60">
              Direct Portal Access
            </h4>
            <div className="flex flex-col gap-2 font-label-md text-sm">
              <div className="p-3 bg-surface-container rounded-lg text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-medium">Central Trust Admin</span>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-outline" />
              </div>

              <div className="p-3 bg-surface-container rounded-lg text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="font-medium">Affiliated Centre Sub-Admin</span>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-outline" />
              </div>

              <Link
                to="/register"
                className="p-3 bg-primary text-on-primary rounded-lg hover:bg-primary-container transition-colors flex items-center justify-between shadow-sm group"
              >
                <span className="font-semibold">Online Registration Form</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 text-center font-body-sm text-xs sm:text-body-sm text-on-surface-variant flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2025 Pracheen Aarogya Research Institute and Welfare Trust. All rights reserved.</p>
          <p className="text-outline">Autonomous Statutory Trust • ISO 9001:2015 Accredited</p>
        </div>
      </div>
    </footer>
  );
}
