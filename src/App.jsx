import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import PlantsPage from './pages/PlantsPage';
import SalesRepsPage from './pages/SalesRepsPage';
import ProjectsPage from './pages/ProjectsPage';
import CalculatorPage from './pages/CalculatorPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

// Dedicated Sub-Pages: About Us
import VisionMissionPage from './pages/about/VisionMissionPage';
import LeadershipPage from './pages/about/LeadershipPage';
import LaboratoryPage from './pages/about/LaboratoryPage';
import AccreditationsPage from './pages/about/AccreditationsPage';

// Dedicated Sub-Pages: Certified Products
import Product42Page from './pages/products/Product42Page';
import Product32Page from './pages/products/Product32Page';
import BagAnatomyPage from './pages/products/BagAnatomyPage';

// Dedicated Sub-Pages: Manufacturing Plant Infrastructure
import SiloArchitecturePage from './pages/plants/SiloArchitecturePage';
import RawMaterialHandlingPage from './pages/plants/RawMaterialHandlingPage';
import LogisticsCorridorPage from './pages/plants/LogisticsCorridorPage';

import CommandPalette from './components/CommandPalette';
import DealerModal from './components/DealerModal';
import DealersPage from './pages/DealersPage';
import { api } from './services/api';
import { initScrollReveal, getLenis } from './utils/scrollReveal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false);

  // Dynamic live dataset state
  const [salesReps, setSalesReps] = useState([]);
  const [products, setProducts] = useState([]);
  const [plants, setPlants] = useState([]);
  const [dealers, setDealers] = useState([]);

  // Fetch live data from backend with fallback
  const refreshData = useCallback(async () => {
    try {
      const [repsData, prodsData, plantsData, dealersData] = await Promise.all([
        api.getSalesReps(),
        api.getProducts(),
        api.getPlants(),
        api.getDealers()
      ]);
      setSalesReps(repsData);
      setProducts(prodsData);
      setPlants(plantsData);
      setDealers(dealersData);
    } catch (err) {
      console.warn('Could not sync live API data:', err);
    }
  }, []);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // Universal Smooth Scroll Engine & Viewport Observer Initialization
  useEffect(() => {
    const cleanupScrollReveal = initScrollReveal();
    return () => {
      cleanupScrollReveal();
    };
  }, []);

  // Global Command Palette Shortcut Listener (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Backwards compatibility for #admin hash
  useEffect(() => {
    if (location.hash === '#admin') {
      navigate('/admin', { replace: true });
    }
  }, [location.hash, navigate]);

  const handleOpenQuote = (initialPayload = null) => {
    setQuoteInitialData(initialPayload);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialData(null);
  };

  const handleOpenCalculator = () => {
    navigate('/calculator');
  };

  const handleOpenDealers = () => {
    setIsDealerModalOpen(true);
  };

  const handleCloseDealers = () => {
    setIsDealerModalOpen(false);
  };

  const handleTransferToQuote = (calcData) => {
    handleOpenQuote({
      selectedBlend: calcData.selectedBlend,
      bags50kg: calcData.bags50kg,
    });
  };

  const handleSelectProductForQuote = (productId) => {
    handleOpenQuote({
      productId: productId,
    });
  };

  const handleSelectPlantForQuote = (plantName) => {
    handleOpenQuote({
      deliverySite: `Preferred Terminal: ${plantName}`,
    });
  };

  const handleContactRep = (rep) => {
    handleOpenQuote({
      region: rep.region,
      deliverySite: `Territory Hub: ${rep.hub}`,
    });
  };

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.3, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Dedicated Admin Directorate Layout (supports /admin, /admin/login, etc.)
  if (location.pathname.startsWith('/admin')) {
    return (
      <AdminPage onDataUpdated={refreshData} />
    );
  }

  // Public Corporate Website Layout
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F3] text-[#1A1A1A] selection:bg-[#B91C1C] selection:text-white font-sans relative">
      {/* Route-driven smooth scroll reset */}
      <ScrollToTop />

      {/* Top Scroll Reading Progress Indicator - GPU Accelerated */}
      <div 
        className="scroll-progress-line" 
        aria-hidden="true"
      />

      {/* Persistent Sticky Two-Tier Navigation Header */}
      <Navbar 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenCalculator={handleOpenCalculator} 
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenDealers={handleOpenDealers}
      />

      {/* Main Multi-Page Route Content */}
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenQuote={() => handleOpenQuote()} 
                onOpenCalculator={handleOpenCalculator}
                products={products}
                salesReps={salesReps}
                plants={plants}
                onSelectProductForQuote={handleSelectProductForQuote}
                onTransferToQuote={handleTransferToQuote}
                onSelectPlantForQuote={handleSelectPlantForQuote}
                onContactRep={handleContactRep}
              />
            } 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenQuote={() => handleOpenQuote()} />} 
          />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                products={products} 
                onSelectProductForQuote={handleSelectProductForQuote} 
                onOpenCalculator={handleOpenCalculator} 
              />
            } 
          />
          <Route 
            path="/plants" 
            element={
              <PlantsPage 
                plants={plants} 
                onSelectPlantForQuote={handleSelectPlantForQuote} 
              />
            } 
          />
          <Route 
            path="/sales-reps" 
            element={
              <SalesRepsPage 
                salesReps={salesReps} 
                onContactRep={handleContactRep} 
              />
            } 
          />
          <Route 
            path="/projects" 
            element={<ProjectsPage onOpenQuote={() => handleOpenQuote()} />} 
          />
          <Route 
            path="/calculator" 
            element={<CalculatorPage onTransferToQuote={handleTransferToQuote} />} 
          />
          <Route 
            path="/sustainability" 
            element={<SustainabilityPage />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route 
            path="/dealers" 
            element={<DealersPage dealers={dealers} />} 
          />

          {/* Dedicated Sub-Pages: About Us */}
          <Route 
            path="/about/vision-mission" 
            element={<VisionMissionPage onOpenQuote={() => handleOpenQuote()} />} 
          />
          <Route 
            path="/about/leadership" 
            element={<LeadershipPage onOpenQuote={() => handleOpenQuote()} />} 
          />
          <Route 
            path="/about/laboratory" 
            element={<LaboratoryPage onOpenQuote={() => handleOpenQuote()} />} 
          />
          <Route 
            path="/about/accreditations" 
            element={<AccreditationsPage onOpenQuote={() => handleOpenQuote()} />} 
          />

          {/* Dedicated Sub-Pages: Certified Products */}
          <Route 
            path="/products/star-super-42-5r" 
            element={
              <Product42Page 
                onSelectProductForQuote={handleSelectProductForQuote} 
                onOpenCalculator={handleOpenCalculator} 
              />
            } 
          />
          <Route 
            path="/products/star-solid-32-5r" 
            element={
              <Product32Page 
                onSelectProductForQuote={handleSelectProductForQuote} 
                onOpenCalculator={handleOpenCalculator} 
              />
            } 
          />
          <Route 
            path="/products/bag-anatomy" 
            element={<BagAnatomyPage onOpenQuote={() => handleOpenQuote()} />} 
          />

          {/* Dedicated Sub-Pages: Manufacturing Plant Infrastructure */}
          <Route 
            path="/plants/silo-architecture" 
            element={<SiloArchitecturePage onOpenQuote={() => handleOpenQuote()} />} 
          />
          <Route 
            path="/plants/raw-material-handling" 
            element={<RawMaterialHandlingPage onOpenQuote={() => handleOpenQuote()} />} 
          />
          <Route 
            path="/plants/logistics-corridor" 
            element={<LogisticsCorridorPage onOpenQuote={() => handleOpenQuote()} />} 
          />

          {/* Legacy Plant & Depot Route Redirects to Flagship Plant Showcase */}
          <Route path="/plants/tema-terminal" element={<Navigate to="/plants" replace />} />
          <Route path="/plants/kumasi-depot" element={<Navigate to="/plants" replace />} />
          <Route path="/plants/takoradi-depot" element={<Navigate to="/plants" replace />} />
          <Route path="/plants/tamale-depot" element={<Navigate to="/plants" replace />} />

          <Route 
            path="*" 
            element={
              <HomePage 
                onOpenQuote={() => handleOpenQuote()} 
                onOpenCalculator={handleOpenCalculator}
                products={products}
                salesReps={salesReps}
                plants={plants}
                onSelectProductForQuote={handleSelectProductForQuote}
                onTransferToQuote={handleTransferToQuote}
                onSelectPlantForQuote={handleSelectPlantForQuote}
                onContactRep={handleContactRep}
              />
            } 
          />
        </Routes>
      </main>

      {/* Persistent Corporate Footer */}
      <Footer 
        onOpenQuote={() => handleOpenQuote()} 
        onOpenCalculator={handleOpenCalculator} 
      />

      {/* Commercial Procurement & Dispatch Order Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialData={quoteInitialData}
      />

      {/* Authorized Star Cement Dealers Directory Modal */}
      <DealerModal
        isOpen={isDealerModalOpen}
        onClose={handleCloseDealers}
        dealers={dealers}
      />

      {/* Global Industrial Command Palette */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Action Controls with Smooth Scroll Trigger */}
      <div 
        id="back-to-top-btn"
        className="fixed bottom-6 right-6 z-40 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none"
      >
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="p-3.5 bg-white hover:bg-neutral-50 text-neutral-900 rounded-full border border-neutral-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}
