import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import EquipmentPage from './pages/EquipmentPage';
import WorkshopsPage from './pages/WorkshopsPage';
import BranchesPage from './pages/BranchesPage';
import GalleryPage from './pages/GalleryPage';
import AboutUsPage from './pages/AboutUsPage';
import PaymentMethodPage from './pages/PaymentMethodPage';
import RegistrationPage from './pages/RegistrationPage';

// Scroll to top component on route changes
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash or specific item scroll
    if (!window.location.hash && !search.includes('item=')) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface antialiased">
      <ScrollToTop />

      {/* Shared Navbar across all pages */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 pt-[72px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/upcoming-workshops" element={<WorkshopsPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/affiliated-institutes" element={<BranchesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/payment-method" element={<PaymentMethodPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/student-registration" element={<RegistrationPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Shared Footer across all pages */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact Us Pop-up Modal (Not a separate page) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
