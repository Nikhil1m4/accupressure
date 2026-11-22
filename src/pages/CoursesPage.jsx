import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, Search, Filter, Clock, Award, BookOpen, 
  ChevronDown, ChevronUp, Check, ArrowRight, UserCheck, Layers 
} from 'lucide-react';
import { COURSES } from '../data/portalData';
import RegistrationForm from '../components/RegistrationForm';

export default function CoursesPage() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState('all');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [selectedForRegistration, setSelectedForRegistration] = useState(
    searchParams.get('item') || ''
  );

  useEffect(() => {
    const itemParam = searchParams.get('item');
    if (itemParam) {
      setSelectedForRegistration(itemParam);
      const formEl = document.getElementById('course-reg-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  const handleApply = (courseTitle) => {
    setSelectedForRegistration(courseTitle);
    const formEl = document.getElementById('course-reg-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleExpand = (courseId) => {
    setExpandedCourse((prev) => (prev === courseId ? null : courseId));
  };

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === 'all' || course.category === selectedCategory;
    const matchesMode =
      selectedMode === 'all' || course.modeType === selectedMode;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMode && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Academic Context Header & Filters */}
      <section className="w-full bg-surface-container-low/70 py-10 md:py-14 border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-medium">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold">Courses &amp; Training Programs</span>
          </nav>

          {/* Badge & Titles */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed w-fit text-xs font-semibold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Accredited Academic Curriculum • Standardized Across India</span>
              </div>
              <h1 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                Acupressure Courses &amp; Training Programs
              </h1>
              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Standardized practical hands-on training and clinical meridian theory offered nationwide across accredited affiliated branches, backed by verifiable trust certification.
              </p>
            </div>

            {/* Academic Authority Metric Card */}
            <div className="shrink-0 p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-container-high flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-title-sm text-sm sm:text-base text-on-surface font-bold">ISO 9001:2015</span>
                <span className="font-body-sm text-xs text-on-surface-variant">Central Trust Syllabus No. 4128/ND</span>
              </div>
            </div>
          </div>

          {/* Quick Category Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors shadow-xs ${
                selectedCategory === 'all'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              All Programs
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('certificate')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors shadow-xs ${
                selectedCategory === 'certificate'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              Certificate Courses (3–4 Months)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('diploma')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors shadow-xs ${
                selectedCategory === 'diploma'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              Diploma Programs (6 Months – 1 Year)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('clinical')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors shadow-xs ${
                selectedCategory === 'clinical'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              Clinical Workshops
            </button>
          </div>

          {/* Search and Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 p-2 bg-surface-container-lowest rounded-xl shadow-xs border border-surface-container-high/80">
            <div className="md:col-span-8 relative flex items-center">
              <Search className="w-4 h-4 text-outline absolute left-3.5 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by course title, meridian system, or code..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface font-body-md text-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest border border-transparent focus:border-primary/40 transition-all"
              />
            </div>
            <div className="md:col-span-4 flex items-center gap-2">
              <div className="relative w-full">
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="w-full pl-3 pr-8 py-2.5 rounded-lg bg-surface text-xs sm:text-sm text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest cursor-pointer border border-transparent focus:border-primary/40"
                >
                  <option value="all">All Modes (Classroom / Hybrid / Practical)</option>
                  <option value="classroom">Classroom + Clinical Rotations</option>
                  <option value="practical">Hands-on Practical Intensive</option>
                  <option value="hybrid">Theory + Practical Hybrid</option>
                </select>
                <ChevronDown className="w-4 h-4 text-outline absolute right-3 top-3 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Catalog */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between pb-6">
            <div className="flex items-center gap-2 text-sm text-on-surface font-semibold">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>
                Showing <strong>{filteredCourses.length} Curricula</strong> Available for Active Enrollment
              </span>
            </div>
            <span className="text-xs text-on-surface-variant hidden sm:inline-block">
              Nationwide Authorized Syllabus: IN-AYUSH-PACT
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {filteredCourses.map((course) => {
              const isExpanded = expandedCourse === course.id;
              return (
                <article
                  key={course.id}
                  className="flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md border border-surface-container-high/80 transition-all duration-300 overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container-low">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary text-on-primary text-xs font-semibold shadow-xs">
                        {course.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-medium">
                      Code: {course.code}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-1">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{course.accreditation}</span>
                      </div>

                      <h3 className="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>

                      <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                        {course.shortDescription}
                      </p>

                      {/* Course Metadata Pills */}
                      <div className="mt-4 flex flex-wrap gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant flex items-center gap-1">
                          <Clock className="w-3 h-3 text-primary" />
                          {course.duration}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                          {course.mode}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant">
                          {course.language}
                        </span>
                      </div>

                      {/* Collapsible Curriculum Module */}
                      <div className="mt-4 pt-3 border-t border-surface-container-high/60">
                        <button
                          type="button"
                          onClick={() => toggleExpand(course.id)}
                          className="w-full flex items-center justify-between text-xs font-semibold text-primary hover:text-primary-container py-1"
                        >
                          <span>{isExpanded ? 'Hide Syllabus Modules' : 'View Syllabus Modules (5 Units)'}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        {isExpanded && (
                          <ul className="mt-2.5 space-y-2 text-xs text-on-surface-variant bg-surface-container-low/60 p-3 rounded-xl border border-surface-container-high/60 animate-fadeIn">
                            {course.curriculum.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Card Footer: Fee & Apply button */}
                    <div className="pt-4 border-t border-surface-container-high/80 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-outline font-semibold">Total Fee</span>
                        <span className="font-tabular-fee text-lg font-bold text-on-surface">
                          {course.feeFormatted}
                        </span>
                      </div>

                      {/* Rule: Clicking Apply on any item scrolls to or opens registration with that item already selected */}
                      <button
                        type="button"
                        onClick={() => handleApply(course.title)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-container text-on-primary font-bold text-xs sm:text-sm rounded-full shadow-xs transition-colors cursor-pointer"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Registration Section (Scrolls directly here when clicking Apply) */}
      <section className="w-full bg-surface-container-low/60 py-16 border-t border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              Instant Application Gateway
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">
              Apply For Selected Course
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Select your course from the cards above or use the form below with your payment verification.
            </p>
          </div>

          <RegistrationForm initialItem={selectedForRegistration} formId="course-reg-form" />
        </div>
      </section>
    </div>
  );
}
