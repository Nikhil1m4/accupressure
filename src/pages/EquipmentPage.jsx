import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, Truck, Sparkles, Check, ShoppingCart, 
  ArrowRight, Box, CheckCircle2 
} from 'lucide-react';
import { EQUIPMENT } from '../data/portalData';
import RegistrationForm from '../components/RegistrationForm';

export default function EquipmentPage() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedForOrder, setSelectedForOrder] = useState(
    searchParams.get('item') || ''
  );

  useEffect(() => {
    const itemParam = searchParams.get('item');
    if (itemParam) {
      setSelectedForOrder(itemParam);
      const formEl = document.getElementById('equipment-order-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  const handleOrder = (equipmentName) => {
    setSelectedForOrder(equipmentName);
    const formEl = document.getElementById('equipment-order-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredEquipment = EQUIPMENT.filter((eq) => {
    if (selectedCategory === 'all') return true;
    return eq.categoryKey === selectedCategory;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Top Ambient Banner & Breadcrumbs */}
      <section className="w-full bg-surface-container-low/70 py-10 md:py-14 border-b border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant font-medium">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-outline">/</span>
            <span className="text-primary font-semibold">Equipment &amp; Clinical Tools</span>
          </nav>

          {/* Header Typography Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-semibold mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Bharatiya Acupressure Trust • Standardized Therapy Instrumentation</span>
              </div>
              <h1 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mt-1">
                Acupressure Equipment &amp; Clinical Tools
              </h1>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                Standardized holistic therapy instruments, diagnostic charts, and clinical point locators for practitioners, affiliated training centers, and home care.
              </p>
            </div>

            {/* Central Dispensary Note */}
            <div className="shrink-0 flex items-center gap-3 p-3.5 rounded-xl bg-surface-container-lowest shadow-xs border border-surface-container-high">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <Box className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-on-surface">Central Dispensary</span>
                <span className="text-xs text-on-surface-variant">Batch Inspected &amp; Sanitized</span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
                }`}
              >
                All Equipment ({EQUIPMENT.length})
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('reflexology')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                  selectedCategory === 'reflexology'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
                }`}
              >
                Reflexology Tools
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('diagnostic')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                  selectedCategory === 'diagnostic'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
                }`}
              >
                Diagnostic &amp; Charts
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory('magnetic')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs ${
                  selectedCategory === 'magnetic'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
                }`}
              >
                Magnetic &amp; Sujok Kits
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <Truck className="w-4 h-4 text-secondary shrink-0" />
              <span>All India Delivery via IndiaPost Speed &amp; Delhivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid Section */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">Standard Catalog</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-0.5">Clinical Grade Therapy Modules</h2>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant text-xs">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Showing {filteredEquipment.length} Prescribed Items</span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEquipment.map((item) => (
              <article
                key={item.id}
                className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-surface-container-high/80 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-high">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {item.material}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm text-on-surface text-[11px] font-medium">
                      {item.certification}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-primary-container text-on-primary text-[11px] font-semibold">
                    {item.stock}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-semibold text-primary">{item.category}</span>
                    <h3 className="font-title-md text-base sm:text-lg font-bold text-on-surface mt-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features bullet list */}
                    <ul className="mt-3.5 space-y-1.5 text-xs text-on-surface-variant">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer: Price & Order Now Button */}
                  <div className="pt-4 border-t border-surface-container-high/80 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-tabular-fee text-xl font-bold text-on-surface">
                          {item.priceFormatted}
                        </span>
                        <span className="text-xs text-outline line-through">{item.mrp}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block">Incl. of GST &amp; Dispatch Kit</span>
                    </div>

                    {/* Rule: Clicking Order Now on any item scrolls to or opens registration with that item already selected */}
                    <button
                      type="button"
                      onClick={() => handleOrder(item.name)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-container text-on-primary font-bold text-xs sm:text-sm rounded-full shadow-xs transition-colors cursor-pointer"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Order Section (Scrolls directly here when clicking Order Now) */}
      <section className="w-full bg-surface-container-low/60 py-16 border-t border-surface-container-high/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              Dispatch &amp; Order Gateway
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">
              Order Equipment &amp; Submit Payment
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Select your equipment module from the cards above or fill the form below to initiate shipment.
            </p>
          </div>

          <RegistrationForm initialItem={selectedForOrder} formId="equipment-order-form" />
        </div>
      </section>
    </div>
  );
}
