import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, ZoomIn, X, MapPin, Calendar, 
  Grid, School, Stethoscope, Award, FileText, CheckCircle2 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portalData';

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Atmospheric Anchor */}
      <section className="w-full bg-surface-container-low/60 py-10 md:py-14 border-b border-surface-container-high/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-xs sm:text-sm text-on-surface-variant font-medium">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold">Gallery</span>
          </nav>

          {/* Badge & Titles */}
          <div className="flex flex-col max-w-3xl">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-lowest text-primary shadow-xs mb-3 border border-surface-container-high">
              <Camera className="w-4 h-4" />
              <span className="text-xs tracking-wide font-semibold uppercase">
                Photo Documentation &amp; Academic Archives
              </span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
              Training, Workshops &amp; Convocation Gallery
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Visual glimpses of standardized classroom lectures, hands-on clinical demonstrations, regional workshops, and annual certificate convocation ceremonies across India.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 shadow-xs ${
                selectedFilter === 'all'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All Photos</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('classroom')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 shadow-xs ${
                selectedFilter === 'classroom'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <School className="w-3.5 h-3.5" />
              <span>Classroom Training</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('workshops')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 shadow-xs ${
                selectedFilter === 'workshops'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Workshops &amp; Camps</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('convocation')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 shadow-xs ${
                selectedFilter === 'convocation'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certificate Convocation</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('clinical')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 shadow-xs ${
                selectedFilter === 'clinical'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Clinical Demonstrations</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Catalog Section */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-surface-container-lowest rounded-2xl shadow-xs hover:shadow-md border border-surface-container-high/80 transition-all duration-300 overflow-hidden"
              >
                {/* Image Container with hover zoom */}
                <div 
                  className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container cursor-pointer"
                  onClick={() => setActiveLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <ZoomIn className="w-4 h-4" /> Click to Enlarge
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-white/90 text-primary text-[11px] font-bold">
                      View Fullscreen
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-primary/95 backdrop-blur-sm text-white text-xs font-semibold shadow-xs">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card text */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{item.location}</span>
                      <span className="text-outline">•</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-title-md text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-surface-container-high/60 text-xs">
                    <span className="text-primary font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Accredited Module
                    </span>

                    <button
                      type="button"
                      onClick={() => setActiveLightbox(item)}
                      className="text-primary hover:text-primary-container font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Zoom</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-5 sm:p-6 bg-white flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeLightbox.location}</span>
                <span className="text-outline">•</span>
                <span>{activeLightbox.date}</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface">
                {activeLightbox.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {activeLightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
