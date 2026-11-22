import React, { useState, useEffect, useRef } from 'react';
import { 
  User, Phone, Mail, Package, CreditCard, UploadCloud, 
  CheckCircle2, AlertCircle, X, Image as ImageIcon, 
  QrCode, Copy, Check, ArrowRight, ShieldCheck, FileCheck
} from 'lucide-react';
import { COURSES, EQUIPMENT, WORKSHOPS, BANK_DETAILS } from '../data/portalData';

export default function RegistrationForm({ initialItem = '', formId = 'registration-form' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    itemName: initialItem || '',
    transactionId: '',
    studyCentre: 'DEL-HQ-01 (New Delhi Central HQ)',
    notes: ''
  });

  const [screenshotFile, setScreenshotFile] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const fileInputRef = useRef(null);

  // Update selected item if prop changes
  useEffect(() => {
    if (initialItem) {
      setFormData((prev) => ({ ...prev, itemName: initialItem }));
    }
  }, [initialItem]);

  // Handle image upload with preview
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrors((prev) => ({ ...prev, screenshot: 'Please upload an image file (PNG, JPG, or WEBP).' }));
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({ ...prev, screenshot: 'File size exceeds 5MB limit.' }));
      return;
    }

    setScreenshotFile(file);
    setErrors((prev) => ({ ...prev, screenshot: null }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setScreenshotPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeScreenshot = () => {
    setScreenshotFile(null);
    setScreenshotPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.itemName) newErrors.itemName = 'Please select a course, equipment, or workshop item';
    if (!formData.transactionId.trim()) newErrors.transactionId = 'Payment Transaction ID / UTR is required';
    if (!screenshotFile) newErrors.screenshot = 'Please upload your payment transfer screenshot';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const refNumber = 'ACT-' + Math.floor(100000 + Math.random() * 900000);
    const data = {
      ...formData,
      refNumber,
      timestamp: new Date().toLocaleString(),
      screenshotName: screenshotFile?.name,
      screenshotPreview
    };

    setSubmissionData(data);
    setSubmitted(true);
  };

  const copyUpi = () => {
    navigator.clipboard.writeText(BANK_DETAILS.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  // Find fee of selected item
  const getSelectedItemFee = () => {
    const c = COURSES.find((x) => x.title === formData.itemName);
    if (c) return c.feeFormatted;
    const eq = EQUIPMENT.find((x) => x.name === formData.itemName);
    if (eq) return eq.priceFormatted;
    const ws = WORKSHOPS.find((x) => x.title === formData.itemName);
    if (ws) return ws.feeFormatted;
    return null;
  };

  const selectedFee = getSelectedItemFee();

  return (
    <div id={formId} className="w-full max-w-[720px] mx-auto bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-container-high/80 p-5 sm:p-8 relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center pb-6 border-b border-surface-container-high/60">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs font-semibold shadow-sm mb-3">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Official Trust Enrollment &amp; Order Gateway • ISO 9001:2015</span>
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
          Student Registration &amp; Order Form
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 max-w-lg">
          Complete the form below with your details and transaction reference. Submissions are verified by the Central Secretariat within 24–48 hours.
        </p>
      </div>

      {submitted ? (
        /* Submission Success Confirmation */
        <div className="py-8 flex flex-col items-center text-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="font-label-sm uppercase tracking-wider text-emerald-700 font-bold text-xs">
            Application Received Successfully
          </span>
          <h3 className="font-headline-md text-2xl font-bold text-on-surface mt-1">
            Verification Pending (24–48 Hours)
          </h3>
          <p className="text-sm text-on-surface-variant mt-2 max-w-md">
            Thank you, <strong className="text-on-surface">{submissionData?.name}</strong>. Your application has been logged under reference number:
          </p>

          <div className="my-5 p-4 bg-surface-container-low rounded-xl border border-surface-container-high w-full max-w-md text-left space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant font-medium">Application Ref ID:</span>
              <span className="font-mono font-bold text-primary text-base">{submissionData?.refNumber}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant font-medium">Selected Item:</span>
              <span className="font-semibold text-on-surface text-right truncate max-w-[240px]">{submissionData?.itemName}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant font-medium">Mobile (WhatsApp):</span>
              <span className="font-semibold text-on-surface">+91 {submissionData?.phone}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant font-medium">Email Address:</span>
              <span className="font-semibold text-on-surface truncate max-w-[200px]">{submissionData?.email}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-on-surface-variant font-medium">Txn / UTR ID:</span>
              <span className="font-mono font-bold text-slate-800">{submissionData?.transactionId}</span>
            </div>
            {submissionData?.screenshotPreview && (
              <div className="pt-2 border-t border-slate-200">
                <span className="text-xs text-on-surface-variant block mb-1">Attached Payment Proof:</span>
                <img
                  src={submissionData.screenshotPreview}
                  alt="Proof Preview"
                  className="w-24 h-24 object-cover rounded-lg border border-slate-300"
                />
              </div>
            )}
          </div>

          <p className="text-xs text-on-surface-variant max-w-sm mb-6">
            A confirmation receipt and batch orientation guidelines have been queued for SMS &amp; WhatsApp dispatch.
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                itemName: '',
                transactionId: '',
                studyCentre: 'DEL-HQ-01 (New Delhi Central HQ)',
                notes: ''
              });
              setScreenshotFile(null);
              setScreenshotPreview(null);
            }}
            className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-semibold text-sm hover:bg-primary-container transition-colors shadow-sm"
          >
            Submit Another Registration
          </button>
        </div>
      ) : (
        /* Form Inputs */
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          {/* Section: Applicant Information */}
          <div className="space-y-4">
            <h3 className="font-title-sm text-base font-bold text-on-surface flex items-center gap-2 pb-1 border-b border-surface-container-high/60">
              <User className="w-4 h-4 text-primary" />
              1. Applicant Information
            </h3>

            {/* Field: Name */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="name">
                Full Name (as to appear on Certificate / Invoice) <span className="text-error">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-outline absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Kumar Sharma"
                  className={`w-full bg-surface-container-low pl-10 pr-4 py-2.5 rounded-lg text-sm text-on-surface placeholder:text-outline border transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary ${
                    errors.name ? 'border-error' : 'border-transparent'
                  }`}
                />
              </div>
              {errors.name && <p className="text-xs text-error mt-1">{errors.name}</p>}
            </div>

            {/* Row: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Field: Phone */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="phone">
                  Phone (WhatsApp Enabled) <span className="text-error">*</span>
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-0 pl-3 flex items-center pointer-events-none text-xs font-semibold text-on-surface-variant">
                    +91
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full bg-surface-container-low pl-12 pr-4 py-2.5 rounded-lg text-sm text-on-surface placeholder:text-outline border transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary ${
                      errors.phone ? 'border-error' : 'border-transparent'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-error mt-1">{errors.phone}</p>}
              </div>

              {/* Field: Email */}
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="email">
                  Email Address <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-outline absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@example.com"
                    className={`w-full bg-surface-container-low pl-10 pr-4 py-2.5 rounded-lg text-sm text-on-surface placeholder:text-outline border transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary ${
                      errors.email ? 'border-error' : 'border-transparent'
                    }`}
                  />
                </div>
                {errors.email && <p className="text-xs text-error mt-1">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Section: Item Selection */}
          <div className="space-y-4 pt-2">
            <h3 className="font-title-sm text-base font-bold text-on-surface flex items-center gap-2 pb-1 border-b border-surface-container-high/60">
              <Package className="w-4 h-4 text-primary" />
              2. Selected Course, Equipment, or Workshop
            </h3>

            {/* Field: Item Name Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="itemName">
                Item Name (Course / Equipment / Workshop) <span className="text-error">*</span>
              </label>
              <div className="relative">
                <select
                  id="itemName"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                  className={`w-full bg-surface-container-low px-4 py-2.5 rounded-lg text-sm text-on-surface border transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary appearance-none cursor-pointer ${
                    errors.itemName ? 'border-error' : 'border-transparent'
                  }`}
                >
                  <option value="">-- Choose Course, Equipment, or Workshop --</option>

                  <optgroup label="🎓 Certified Acupressure Courses">
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title} ({course.feeFormatted})
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="🩺 Clinical Equipment &amp; Kits">
                    {EQUIPMENT.map((eq) => (
                      <option key={eq.id} value={eq.name}>
                        {eq.name} ({eq.priceFormatted})
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="🗓️ Upcoming Practical Workshops">
                    {WORKSHOPS.map((ws) => (
                      <option key={ws.id} value={ws.title}>
                        {ws.title} - {ws.city} ({ws.feeFormatted})
                      </option>
                    ))}
                  </optgroup>
                </select>
                <div className="absolute right-3.5 top-3.5 pointer-events-none text-outline text-xs">▼</div>
              </div>
              {errors.itemName && <p className="text-xs text-error mt-1">{errors.itemName}</p>}

              {/* Selected Item Fee Callout */}
              {selectedFee && (
                <div className="mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-emerald-800 font-medium">Standard Official Fee:</span>
                  <span className="text-emerald-950 font-bold text-base">{selectedFee}</span>
                </div>
              )}
            </div>

            {/* Optional Study Centre */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="studyCentre">
                Preferred Study Centre / Delivery Region
              </label>
              <select
                id="studyCentre"
                name="studyCentre"
                value={formData.studyCentre}
                onChange={handleChange}
                className="w-full bg-surface-container-low px-4 py-2.5 rounded-lg text-sm text-on-surface border border-transparent focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary cursor-pointer"
              >
                <option value="DEL-HQ-01 (New Delhi Central HQ)">DEL-HQ-01 (New Delhi Central HQ)</option>
                <option value="MAH-MUM-02 (Maharashtra Holistic Academy, Mumbai)">MAH-MUM-02 (Maharashtra Holistic Academy, Mumbai)</option>
                <option value="BEN-KOL-03 (Bengal Sujok &amp; Acu-Science, Kolkata)">BEN-KOL-03 (Bengal Sujok &amp; Acu-Science, Kolkata)</option>
                <option value="KAR-BLR-04 (Karnataka Natural Health, Bengaluru)">KAR-BLR-04 (Karnataka Natural Health, Bengaluru)</option>
                <option value="GUJ-AHM-05 (Gujarat Acupressure Sansthan, Ahmedabad)">GUJ-AHM-05 (Gujarat Acupressure Sansthan, Ahmedabad)</option>
                <option value="UP-LKO-06 (Uttar Pradesh Regional Centre, Lucknow)">UP-LKO-06 (Uttar Pradesh Regional Centre, Lucknow)</option>
                <option value="Postal Courier / Online Dispatch (Pan-India)">Postal Courier / Online Dispatch (Pan-India)</option>
              </select>
            </div>
          </div>

          {/* Section: Payment Verification Details */}
          <div className="space-y-4 pt-2">
            <h3 className="font-title-sm text-base font-bold text-on-surface flex items-center gap-2 pb-1 border-b border-surface-container-high/60">
              <CreditCard className="w-4 h-4 text-primary" />
              3. Payment Transfer &amp; Proof Verification
            </h3>

            {/* Quick UPI Helper Callout */}
            <div className="p-3 bg-surface-container-low rounded-xl border border-surface-container-high/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-semibold text-on-surface block">Trust Verified UPI ID:</span>
                <span className="font-mono text-primary font-bold text-sm">{BANK_DETAILS.upiId}</span>
                <span className="block text-slate-500">SBI Current A/c: {BANK_DETAILS.accountNumber} (IFSC: {BANK_DETAILS.ifscCode})</span>
              </div>
              <button
                type="button"
                onClick={copyUpi}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:text-primary hover:border-primary transition-colors font-medium shrink-0"
              >
                {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedUpi ? 'Copied UPI' : 'Copy UPI ID'}</span>
              </button>
            </div>

            {/* Field: Payment Transaction ID */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="transactionId">
                Payment Transaction ID / UTR / Reference No. <span className="text-error">*</span>
              </label>
              <div className="relative">
                <CreditCard className="w-4 h-4 text-outline absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  id="transactionId"
                  name="transactionId"
                  type="text"
                  value={formData.transactionId}
                  onChange={handleChange}
                  placeholder="e.g. 439201928475 or UPI Ref ID"
                  className={`w-full bg-surface-container-low pl-10 pr-4 py-2.5 rounded-lg text-sm text-on-surface font-mono placeholder:font-sans placeholder:text-outline border transition-all focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary ${
                    errors.transactionId ? 'border-error' : 'border-transparent'
                  }`}
                />
              </div>
              {errors.transactionId && <p className="text-xs text-error mt-1">{errors.transactionId}</p>}
            </div>

            {/* Field: Payment Screenshot Image Upload with Preview */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1">
                Payment Screenshot / Receipt Image <span className="text-error">*</span>
              </label>

              {screenshotPreview ? (
                /* Image Preview Container */
                <div className="relative p-3 bg-surface-container-low rounded-xl border border-surface-container-high flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={screenshotPreview}
                      alt="Payment Preview"
                      className="w-16 h-16 object-cover rounded-lg border border-slate-300 shrink-0"
                    />
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold text-on-surface truncate">
                        {screenshotFile?.name}
                      </span>
                      <span className="block text-xs text-on-surface-variant">
                        {(screenshotFile?.size / 1024).toFixed(1)} KB • Image Loaded Ready for Verification
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={removeScreenshot}
                    className="p-2 text-slate-400 hover:text-error hover:bg-slate-200/50 rounded-lg transition-colors shrink-0"
                    title="Remove Image"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                /* Upload Drop Area */
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container-low/60 transition-colors ${
                    errors.screenshot ? 'border-error bg-error/5' : 'border-surface-container-high'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-on-surface">
                    Click to browse and upload payment screenshot
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1">
                    PNG, JPG, or WEBP (Max 5MB)
                  </span>
                </div>
              )}

              {errors.screenshot && <p className="text-xs text-error mt-1">{errors.screenshot}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-primary text-on-primary font-bold text-sm sm:text-base hover:bg-primary-container active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Submit Registration &amp; Verify Payment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-on-surface-variant mt-3 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Encrypted SSL 256-Bit Official Trust Data Safeguard</span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
