import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Copy, Check, QrCode, Building, 
  ArrowRight, Info, CheckCircle2, Lock 
} from 'lucide-react';
import { BANK_DETAILS, TRUST_INFO } from '../data/portalData';

export default function PaymentMethodPage() {
  const [copiedField, setCopiedField] = useState('');

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Background & Header */}
      <section className="relative w-full py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden bg-surface">
        {/* Header Section */}
        <div className="w-full max-w-[620px] mb-8 text-center flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 mb-3 text-xs text-on-surface-variant font-medium">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold">Payment Method</span>
          </nav>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-semibold mb-3 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Official Statutory Deposit Gateway • Zero Surcharge</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight mb-2">
            Official Fee &amp; Equipment Payment Details
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-[520px] leading-relaxed">
            Use the authorized Trust QR code or direct bank transfer details below to submit course tuition fees, workshop registrations, or equipment orders.
          </p>
        </div>

        {/* Centered Master Card (Max 580px) */}
        <div className="w-full max-w-[580px] bg-surface-container-lowest rounded-2xl shadow-lg border border-surface-container-high/80 p-5 sm:p-8 flex flex-col gap-6 relative">
          {/* Trust Ribbon Header */}
          <div className="flex items-center justify-between bg-surface-container-low px-4 py-3 rounded-xl border border-surface-container-high/60">
            <div className="flex items-center gap-2.5 min-w-0">
              <Building className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface font-bold truncate">
                Bharatiya Acupressure Trust Reserve
              </span>
            </div>
            <span className="shrink-0 px-2 py-0.5 rounded text-[11px] font-bold bg-primary text-on-primary">
              VERIFIED
            </span>
          </div>

          {/* 1. DEMO QR CODE BOX */}
          <div className="flex flex-col items-center justify-center p-6 bg-surface-container-low/70 rounded-2xl border border-surface-container-high/80">
            <div className="relative p-4 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center">
              {/* Scalable Trust QR Code SVG */}
              <svg className="w-48 h-48 sm:w-52 sm:h-52 text-slate-900" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect fill="currentColor" height="50" rx="8" width="50" x="10" y="10" />
                <rect fill="#FFFFFF" height="34" rx="4" width="34" x="18" y="18" />
                <rect fill="currentColor" height="22" rx="3" width="22" x="24" y="24" />

                <rect fill="currentColor" height="50" rx="8" width="50" x="140" y="10" />
                <rect fill="#FFFFFF" height="34" rx="4" width="34" x="148" y="18" />
                <rect fill="currentColor" height="22" rx="3" width="22" x="154" y="24" />

                <rect fill="currentColor" height="50" rx="8" width="50" x="10" y="140" />
                <rect fill="#FFFFFF" height="34" rx="4" width="34" x="18" y="148" />
                <rect fill="currentColor" height="22" rx="3" width="22" x="24" y="154" />

                <rect fill="currentColor" height="8" rx="2" width="8" x="70" y="15" />
                <rect fill="currentColor" height="8" rx="2" width="16" x="85" y="15" />
                <rect fill="currentColor" height="18" rx="2" width="8" x="110" y="15" />
                <rect fill="currentColor" height="8" rx="2" width="8" x="125" y="20" />
                <rect fill="currentColor" height="8" rx="2" width="18" x="70" y="32" />
                <rect fill="currentColor" height="15" rx="2" width="8" x="95" y="30" />
                <rect fill="currentColor" height="8" rx="2" width="12" x="120" y="38" />
                <rect fill="currentColor" height="16" rx="2" width="8" x="15" y="70" />
                <rect fill="currentColor" height="8" rx="2" width="18" x="30" y="75" />
                <rect fill="currentColor" height="8" rx="2" width="22" x="15" y="95" />
                <rect fill="currentColor" height="12" rx="2" width="15" x="45" y="90" />
                <rect fill="currentColor" height="15" rx="2" width="10" x="25" y="115" />
                <rect fill="currentColor" height="8" rx="2" width="15" x="45" y="115" />
                <rect fill="currentColor" height="10" rx="2" width="10" x="70" y="65" />
                <rect fill="currentColor" height="10" rx="2" width="10" x="120" y="65" />
                <rect fill="currentColor" height="8" rx="2" width="20" x="140" y="70" />
                <rect fill="currentColor" height="8" rx="2" width="15" x="170" y="75" />
                <rect fill="currentColor" height="18" rx="2" width="10" x="145" y="88" />
                <rect fill="currentColor" height="8" rx="2" width="20" x="165" y="95" />
                <rect fill="currentColor" height="8" rx="2" width="18" x="140" y="115" />
                <rect fill="currentColor" height="15" rx="2" width="12" x="168" y="112" />
                <rect fill="currentColor" height="8" rx="2" width="15" x="70" y="125" />
                <rect fill="currentColor" height="15" rx="2" width="12" x="95" y="125" />
                <rect fill="currentColor" height="8" rx="2" width="15" x="115" y="125" />
                <rect fill="currentColor" height="18" rx="2" width="8" x="70" y="145" />
                <rect fill="currentColor" height="8" rx="2" width="18" x="85" y="150" />
                <rect fill="currentColor" height="12" rx="2" width="8" x="110" y="145" />
                <rect fill="currentColor" height="8" rx="2" width="20" x="125" y="150" />
                <rect fill="currentColor" height="15" rx="2" width="15" x="155" y="145" />
                <rect fill="currentColor" height="20" rx="2" width="10" x="178" y="145" />
                <rect fill="currentColor" height="8" rx="2" width="25" x="70" y="172" />
                <rect fill="currentColor" height="18" rx="2" width="12" x="105" y="170" />
                <rect fill="currentColor" height="12" rx="2" width="18" x="125" y="168" />
                <rect fill="currentColor" height="8" rx="2" width="30" x="150" y="172" />

                {/* Center Shield Emblem */}
                <rect fill="#FFFFFF" height="48" rx="10" width="48" x="76" y="76" />
                <rect fill="#0F766E" height="38" rx="8" width="38" x="81" y="81" />
                <path d="M100 89 L109 93 L109 101 C109 107 100 112 100 112 C100 112 91 107 91 101 L91 93 Z" fill="#FFFFFF" />
              </svg>
            </div>

            <div className="mt-4 flex flex-col items-center text-center">
              <span className="text-xs text-on-surface-variant font-medium">
                Scan with any UPI App: Google Pay, PhonePe, Paytm, BHIM, or SBI YONO
              </span>

              {/* UPI ID Copy Pill */}
              <div className="mt-3 flex items-center gap-2 p-1.5 pl-3 bg-white rounded-full border border-slate-200 shadow-xs">
                <span className="font-mono text-xs font-bold text-primary">{BANK_DETAILS.upiId}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.upiId, 'upi')}
                  className="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-semibold flex items-center gap-1 hover:bg-primary-container transition-colors"
                >
                  {copiedField === 'upi' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedField === 'upi' ? 'Copied' : 'Copy UPI'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* 2. BANK NEFT / RTGS / IMPS DETAILS */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase font-bold text-outline tracking-wider block">
              Direct Bank Account Transfer (NEFT / RTGS / IMPS)
            </span>

            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Account Name */}
              <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container-high/60">
                <div>
                  <span className="text-[11px] text-on-surface-variant block">Beneficiary Account Name</span>
                  <strong className="text-on-surface font-semibold">{BANK_DETAILS.accountName}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.accountName, 'accName')}
                  className="p-1.5 text-outline hover:text-primary rounded"
                  title="Copy Name"
                >
                  {copiedField === 'accName' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Account Number */}
              <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container-high/60">
                <div>
                  <span className="text-[11px] text-on-surface-variant block">Current Account Number</span>
                  <strong className="text-on-surface font-mono font-bold text-base">{BANK_DETAILS.accountNumber}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, 'accNum')}
                  className="p-1.5 text-outline hover:text-primary rounded"
                  title="Copy Account Number"
                >
                  {copiedField === 'accNum' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Bank & IFSC */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container-high/60">
                  <div>
                    <span className="text-[11px] text-on-surface-variant block">Bank &amp; Branch</span>
                    <strong className="text-on-surface text-xs">{BANK_DETAILS.bankName}</strong>
                    <span className="block text-[11px] text-slate-500">{BANK_DETAILS.branch}</span>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-between border border-surface-container-high/60">
                  <div>
                    <span className="text-[11px] text-on-surface-variant block">IFSC Code</span>
                    <strong className="text-on-surface font-mono font-bold">{BANK_DETAILS.ifscCode}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(BANK_DETAILS.ifscCode, 'ifsc')}
                    className="p-1.5 text-outline hover:text-primary rounded"
                    title="Copy IFSC"
                  >
                    {copiedField === 'ifsc' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Steps Checklist */}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
            <span className="font-bold block text-sm text-emerald-900">After Completing Transfer:</span>
            <div className="flex items-start gap-2">
              <span className="font-bold text-emerald-700">1.</span>
              <span>Take a screenshot of the payment receipt showing the 12-digit UTR or Transaction ID.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-emerald-700">2.</span>
              <span>Click the button below to open the online registration form and upload your screenshot.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold text-emerald-700">3.</span>
              <span>The Trust Secretariat will confirm your enrollment and dispatch orientation materials.</span>
            </div>
          </div>

          {/* Proceed to Registration CTA */}
          <Link
            to="/register"
            className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-bold text-center text-sm sm:text-base hover:bg-primary-container transition-all shadow-md flex items-center justify-center gap-2 group"
          >
            <span>Proceed to Registration Form &amp; Upload Proof</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
