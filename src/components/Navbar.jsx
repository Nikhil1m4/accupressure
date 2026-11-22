import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, GraduationCap, Stethoscope, Menu, X, PhoneCall } from 'lucide-react';
import { TRUST_INFO } from '../data/portalData';

export default function Navbar({ onOpenContact }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `py-2 transition-colors duration-200 text-[14px] font-medium ${
      isActive
        ? 'text-primary font-semibold border-b-2 border-primary'
        : 'text-on-surface-variant hover:text-primary'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary/10 text-primary font-semibold'
        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
    }`;

  const isServicesActive = location.pathname === '/courses' || location.pathname === '/equipment';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-surface-container-high/80 shadow-sm h-[72px]">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src={TRUST_INFO.logo}
            alt={TRUST_INFO.name}
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-full shadow-sm ring-1 ring-primary/20 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-title-sm text-title-sm text-on-surface leading-tight font-bold group-hover:text-primary transition-colors">
              Pracheen Aarogya
            </span>
            <span className="font-label-sm text-[11px] sm:text-label-sm text-on-surface-variant leading-none">
              Research Institute &amp; Welfare Trust
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-[14px] font-medium text-on-surface-variant">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`inline-flex items-center gap-1 text-[14px] font-medium py-2 outline-none transition-colors ${
                isServicesActive || servicesOpen
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? 'rotate-180 text-primary' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 min-w-[260px] bg-white rounded-xl shadow-xl border border-surface-container-high/80 p-2 z-50 flex flex-col gap-1 animate-fadeIn">
                <Link
                  to="/courses"
                  onClick={() => setServicesOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[14px] text-on-surface group-hover/item:text-primary">
                      Courses
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      Certified Acupressure Programs
                    </span>
                  </div>
                </Link>

                <Link
                  to="/equipment"
                  onClick={() => setServicesOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[14px] text-on-surface group-hover/item:text-primary">
                      Equipment
                    </span>
                    <span className="text-[12px] text-on-surface-variant">
                      Acupressure Tools &amp; Kits
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>

          <NavLink to="/equipment" className={navLinkClass}>
            Equipment
          </NavLink>

          <NavLink to="/workshops" className={navLinkClass}>
            Workshops
          </NavLink>

          <NavLink to="/branches" className={navLinkClass}>
            Branches
          </NavLink>

          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>

          <NavLink to="/about-us" className={navLinkClass}>
            About Us
          </NavLink>

          <NavLink to="/payment-method" className={navLinkClass}>
            Payment Method
          </NavLink>
        </nav>

        {/* Action Button: Contact Us Modal Trigger & Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 font-label-md text-label-md px-5 py-2.5 rounded-full bg-primary text-on-primary hover:bg-[#115e59] active:bg-[#134e4a] transition-all shadow-sm font-semibold group cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Contact Us</span>
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-surface-container-high/80 px-4 pt-2 pb-6 shadow-xl flex flex-col gap-1 max-h-[calc(100vh-72px)] overflow-y-auto">
          <NavLink to="/" className={mobileNavLinkClass}>
            Home
          </NavLink>

          {/* Services submenu */}
          <div className="py-1">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container-low"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 pr-2 py-1 flex flex-col gap-1 bg-surface-container-low/50 rounded-lg mt-1">
                <Link
                  to="/courses"
                  className="px-3 py-2 text-sm text-on-surface-variant hover:text-primary rounded flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Courses
                </Link>
                <Link
                  to="/equipment"
                  className="px-3 py-2 text-sm text-on-surface-variant hover:text-primary rounded flex items-center gap-2"
                >
                  <Stethoscope className="w-4 h-4 text-primary" />
                  Equipment
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/courses" className={mobileNavLinkClass}>
            Courses
          </NavLink>

          <NavLink to="/equipment" className={mobileNavLinkClass}>
            Equipment
          </NavLink>

          <NavLink to="/workshops" className={mobileNavLinkClass}>
            Upcoming Workshops
          </NavLink>

          <NavLink to="/branches" className={mobileNavLinkClass}>
            Branches &amp; Training Centres
          </NavLink>

          <NavLink to="/gallery" className={mobileNavLinkClass}>
            Convocation Gallery
          </NavLink>

          <NavLink to="/about-us" className={mobileNavLinkClass}>
            About Us
          </NavLink>

          <NavLink to="/payment-method" className={mobileNavLinkClass}>
            Payment Method
          </NavLink>

          <NavLink to="/register" className={mobileNavLinkClass}>
            Online Registration
          </NavLink>
        </div>
      )}
    </header>
  );
}
