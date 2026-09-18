import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Dynamic document title update per route
    const routeTitles = {
      '/': 'Star Cement Ghana — Solid Setting | Certified 42.5R & 32.5R Portland Limestone Cement',
      '/about': 'About Us — Heritage, Quality & Governance | Star Cement Ghana',
      '/about/vision-mission': 'Vision, Mission & Industrial Creed | Star Cement Ghana',
      '/about/leadership': 'Executive Directorate & Board of Governance | Star Cement Ghana',
      '/about/laboratory': 'Tema Central Materials Testing Laboratory | Star Cement Ghana',
      '/about/accreditations': 'Certifications, GSA Compliance & EPA Licenses | Star Cement Ghana',
      '/products': 'Certified Products Portfolio — 42.5R & 32.5R | Star Cement Ghana',
      '/products/star-super-42-5r': 'Star Super 42.5R Rapid Hardening Structural Cement | Star Cement Ghana',
      '/products/star-solid-32-5r': 'Star Solid 32.5R General Purpose & Masonry Cement | Star Cement Ghana',
      '/products/bag-anatomy': '11-Point Bag Marking Anatomy & Anti-Counterfeit Guide | Star Cement Ghana',
      '/plants': 'Star Cement Ghana Plant (Kpone Industrial Area) | Star Cement Ghana',
      '/plants/silo-architecture': 'Vertical Slip-Form Silo Architecture | Star Cement Ghana',
      '/plants/raw-material-handling': 'Raw Material Handling & Tema Port Logistics | Star Cement Ghana',
      '/plants/logistics-corridor': 'Kpone Industrial Logistics Corridor | Star Cement Ghana',
      '/dealers': 'Authorized Star Cement Dealers Directory | Star Cement Ghana',
      '/sales-reps': 'Commercial Territory Directorate & Sales Rep Locator | Star Cement Ghana',
      '/projects': 'Landmark Infrastructure Projects — Ports, Towers & Highways | Star Cement Ghana',
      '/calculator': 'Concrete Mix Design & 50kg Bag Estimator | Star Cement Ghana',
      '/sustainability': 'Decarbonization Roadmap & Net-Zero Transition | Star Cement Ghana',
      '/contact': 'Contact Us & Central Dispatch Operations | Star Cement Ghana',
      '/admin': 'Operations Directorate Console | Star Cement Ghana',
    };
    document.title = routeTitles[pathname] || 'Star Cement Ghana — Solid Setting';

    // If navigating to an anchor hash, smooth scroll to target
    if (hash) {
      const targetId = hash.replace('#', '');
      let cancelled = false;

      const scrollToTarget = () => {
        if (cancelled) return true;
        const element = document.getElementById(targetId);
        if (element) {
          const headerEl = document.querySelector('header');
          const offset = headerEl ? headerEl.offsetHeight + 14 : 95;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        const timer1 = setTimeout(scrollToTarget, 60);
        const timer2 = setTimeout(scrollToTarget, 200);
        return () => {
          cancelled = true;
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
      return () => {
        cancelled = true;
      };
    }

    // Glide immediately to top of new page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
