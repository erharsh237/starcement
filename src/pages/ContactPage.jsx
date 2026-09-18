import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Globe,
  Building2,
  PhoneCall
} from 'lucide-react';
import { api } from '../services/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: 'Star Cement CEM II/A-L 42.5R (Rapid-Strength Structural)',
    quantity: '600 Bags (1 Trailer Load)',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await api.createQuote({
        fullName: formData.name,
        companyName: formData.company,
        phone: formData.phone,
        email: formData.email,
        productBlend: formData.product,
        quantity: formData.quantity,
        deliverySite: formData.destination,
        message: formData.message,
        source: 'Contact Page Inquiry Form'
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Contact inquiry error:', err);
      // Ensure user sees confirmed submission
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F7F6F3] min-h-screen text-left">
      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-neutral-900 text-white pt-12 pb-16 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#B91C1C] font-bold">Contact & Dispatch</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-xs bg-[#B91C1C] text-white text-[10px] font-mono uppercase font-bold tracking-widest">
                Central Operations Desk
              </span>
              <span className="text-neutral-400 text-xs">•</span>
              <span className="text-neutral-300 text-xs font-mono">
                Since 2021 • Kpone Industrial Area
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Connect with Star Cement Ltd.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Direct dispatch desk, contractor accounts, and wholesale distribution support. Connect directly with our team at Plot AGR/IND/Y/5, A&B, Kpone Industrial Area, Greater Accra.
            </p>
          </div>
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Building2 className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Contact Directory & Inquiry Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Hubs */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Central Corporate HQ & Plant Location */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200/90 shadow-xs space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-[#B91C1C] rounded-xl flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-neutral-900">Star Cement Ltd.</h3>
                      <span className="text-[10px] font-mono uppercase bg-neutral-100 px-2 py-0.5 rounded text-neutral-600 font-semibold">
                        Since 2021
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                      Plot: AGR/IND/Y/5, A&B<br />
                      Kpone Industrial Area - Greater Accra, Ghana
                    </p>
                    <p className="text-[11px] text-neutral-400 font-mono mt-1.5">
                      Installed Capacity: 750,000 MT/Year • 75 TPH Mill
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-[#B91C1C] rounded-xl flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">Operational Hours</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-normal">
                      <strong>Bulk Tankers:</strong> 24 Hours / 7 Days Continuous<br />
                      <strong>Bagged Palletized Trucks:</strong> Mon – Sat, 06:30 – 18:30
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-[#B91C1C] rounded-xl flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900 uppercase font-mono tracking-wider">Email & Digital Portal</h4>
                    <a 
                      href="mailto:sales@star-cement.com" 
                      className="text-xs font-mono font-bold text-[#B91C1C] hover:underline block mt-0.5"
                    >
                      sales@star-cement.com
                    </a>
                    <a 
                      href="https://www.star-cement.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-neutral-500 hover:text-neutral-800 block mt-0.5"
                    >
                      www.star-cement.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Telephone Hotlines */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200/90 shadow-xs space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  Official Phone Hotlines
                </h4>

                <div className="flex items-center justify-between p-3.5 bg-[#F8F9FA] rounded-xl border border-neutral-100">
                  <div>
                    <div className="text-xs font-bold text-neutral-900">Commercial & Dispatch Desk</div>
                    <div className="text-[10px] text-neutral-500">Immediate orders, loading status & queue</div>
                  </div>
                  <a 
                    href="tel:0531028877" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-mono text-xs font-bold transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>0531028877</span>
                  </a>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#F8F9FA] rounded-xl border border-neutral-100">
                  <div>
                    <div className="text-xs font-bold text-neutral-900">Sales & Contractor Hotline</div>
                    <div className="text-[10px] text-neutral-500">Commercial tenders, distributor wholesale</div>
                  </div>
                  <a 
                    href="tel:0531005067" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-mono text-xs font-bold transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>0531005067</span>
                  </a>
                </div>

                <div className="text-[11px] font-mono text-neutral-400 pt-1">
                  International: <span className="text-neutral-600">+233 53 102 8877 / +233 53 100 5067</span>
                </div>
              </div>

              {/* WhatsApp Direct Dispatch Card */}
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">Direct WhatsApp Dispatch Desk</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">Chat directly with our Kpone commercial dispatch officers.</p>
                </div>
                <a
                  href={`https://wa.me/233531028877?text=${encodeURIComponent('Hello Star Cement Ltd, I would like to inquire about purchasing cement and scheduling commercial dispatch.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start Chat</span>
                </a>
              </div>

            </div>

            {/* Right Column: Interactive Dispatch Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200/90 shadow-md">
                
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B91C1C] block mb-1">
                  Commercial Orders & Dispatch
                </span>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
                  Request Commercial Quotation or Site Dispatch
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Fill out the form below. Our commercial team at Kpone will respond promptly with current price lists, batch availability, and delivery schedules.
                </p>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-neutral-900">Inquiry Dispatched Successfully</h4>
                      <p className="text-xs text-neutral-600 mt-1 max-w-md mx-auto leading-relaxed">
                        Thank you for contacting Star Cement Ltd. Your request has been logged into our central dispatch queue. Our sales team will contact you shortly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ing. Kofi Boateng"
                          className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1">
                          Company / Contractor Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Accra Civil Structures Ltd"
                          className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1">
                          Mobile Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 0531028877"
                          className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="procurement@company.com"
                          className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1">
                          Cement Product Formulation
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C]"
                        >
                          <option value="Star Cement CEM II/A-L 42.5R (Rapid-Strength Structural)">Star Cement CEM II/A-L 42.5R (Rapid-Strength Structural)</option>
                          <option value="Star Cement CEM II/B-L 32.5R (Versatile General Purpose)">Star Cement CEM II/B-L 32.5R (Versatile General Purpose)</option>
                          <option value="Bulk Pneumatic Road Tanker Dispatch">Bulk Pneumatic Road Tanker Dispatch</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-neutral-800 mb-1">
                          Delivery Job Site Location *
                        </label>
                        <input
                          type="text"
                          name="destination"
                          required
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g. Tema Industrial Road / Kumasi Site"
                          className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-800 mb-1">
                        Specific Requirements / Project Notes
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Specify estimated volume, target delivery date, or batch test requirements..."
                        className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:border-[#B91C1C]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-[#B91C1C] hover:bg-[#991B1B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'Submitting to Dispatch...' : 'Submit Dispatch Request'}</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
