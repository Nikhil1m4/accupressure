import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, MapPin, Phone, Mail, Search, CheckCircle2, 
  ShieldCheck, Clock, Users, ArrowRight, X 
} from 'lucide-react';
import { BRANCHES } from '../data/portalData';

export default function BranchesPage() {
  const [selectedZone, setSelectedZone] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBranches = BRANCHES.filter((branch) => {
    const matchesZone = selectedZone === 'all' || branch.zone === selectedZone;
    const matchesSearch =
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.coordinator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Utility & Institutional Credentials Bar */}
      <section className="w-full bg-surface-container-low py-3 px-4 sm:px-6 border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 text-xs text-on-surface-variant font-medium">
          <nav className="flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold">Affiliated Branches</span>
          </nav>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Statutory Accredited Network • 25+ Verified Institutes
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-on-surface-variant">
              <Clock className="w-3.5 h-3.5 text-outline" />
              Central Desk: 09:30 AM – 06:00 PM IST
            </span>
          </div>
        </div>
      </section>

      {/* Header & Directory Search Module */}
      <section className="w-full bg-surface py-10 md:py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                National Council of Training Centers
              </div>
              <h1 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface">
                Our Affiliated Branches &amp; Training Centres
              </h1>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Locate authorized regional learning centers across India for hands-on clinical training, offline exam coordination, supervised meridian internships, and physical equipment distribution.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-primary font-headline-sm">6 States</span>
                <span className="text-xs text-on-surface-variant">Regional Academic Hubs</span>
              </div>
              <div className="h-10 w-[1px] bg-outline-variant/60 hidden sm:block"></div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-secondary font-headline-sm">100%</span>
                <span className="text-xs text-on-surface-variant">Standardized Protocols</span>
              </div>
            </div>
          </div>

          {/* Search & Zone Filters Controls */}
          <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-2xl shadow-xs border border-surface-container-high/80 flex flex-col gap-4">
            <div className="relative w-full">
              <Search className="w-5 h-5 text-outline absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, branch name, state, or branch code (e.g. DEL-HQ-01, Dadar)..."
                className="w-full pl-12 pr-10 py-3 bg-surface-container-low rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/40"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-outline hover:text-on-surface"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedZone('all')}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    selectedZone === 'all'
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  All Regions ({BRANCHES.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedZone('north')}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    selectedZone === 'north'
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Northern Zone <span className="opacity-70 text-xs">(Delhi / UP)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedZone('west')}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    selectedZone === 'west'
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Western Zone <span className="opacity-70 text-xs">(Maharashtra / Gujarat)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedZone('south')}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    selectedZone === 'south'
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Southern Zone <span className="opacity-70 text-xs">(Karnataka)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedZone('east')}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    selectedZone === 'east'
                      ? 'bg-primary text-on-primary shadow-xs'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  Eastern Zone <span className="opacity-70 text-xs">(Bengal)</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Real-time Clinical Verification Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="w-full bg-surface pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBranches.map((branch) => (
              <article
                key={branch.id}
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-xs hover:shadow-md border border-surface-container-high/80 transition-all flex flex-col justify-between group"
              >
                <div className="flex flex-col gap-3">
                  {/* Top badges */}
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-container text-primary font-bold tracking-wide">
                      {branch.code}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-semibold">
                      <MapPin className="w-3 h-3" />
                      {branch.zoneLabel}
                    </span>
                  </div>

                  {/* Branch Title & City */}
                  <div>
                    <h3 className="font-title-md text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {branch.name}
                    </h3>
                    <span className="text-xs font-semibold text-secondary block mt-0.5">
                      {branch.city}, {branch.state}
                    </span>
                  </div>

                  {/* Address */}
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {branch.address}
                  </p>

                  {/* Coordinator & Contact */}
                  <div className="pt-3 border-t border-surface-container-high/60 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2 text-on-surface font-medium">
                      <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{branch.coordinator}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <Phone className="w-3.5 h-3.5 text-outline shrink-0" />
                      <a href={`tel:${branch.phone}`} className="hover:text-primary font-mono">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <Mail className="w-3.5 h-3.5 text-outline shrink-0" />
                      <a href={`mailto:${branch.email}`} className="hover:text-primary truncate">
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-bold text-outline block mb-1">
                      Campus Facilities
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {branch.facilities.map((f, i) => (
                        <span key={i} className="text-[11px] bg-surface-container-low px-2 py-0.5 rounded text-on-surface-variant">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="mt-5 pt-3 border-t border-surface-container-high/60 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    {branch.activeBatches}
                  </span>
                  <Link
                    to={`/register?item=${encodeURIComponent('DAT (Diploma at ' + branch.city + ')')}`}
                    className="text-primary hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Register Here</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
