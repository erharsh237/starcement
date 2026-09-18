import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { 
  Users, Package, Building2, ClipboardList, LogOut, ArrowLeft, 
  Plus, Edit2, Trash2, Check, RefreshCw, AlertCircle, Phone, 
  MapPin, MessageCircle, Clock, ShieldCheck, X, Database
} from 'lucide-react';

export default function AdminPortal({ onExitAdmin, onDataUpdated }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState('admin@starcement.com.gh');
  const [loginPassword, setLoginPassword] = useState('starcement2026');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  // Active navigation tab
  const [activeTab, setActiveTab] = useState('quotes'); // 'quotes' | 'reps' | 'products' | 'plants'

  // Data states
  const [quotes, setQuotes] = useState([]);
  const [salesReps, setSalesReps] = useState([]);
  const [products, setProducts] = useState([]);
  const [plants, setPlants] = useState([]);
  const [systemStatus, setSystemStatus] = useState(null);

  // Toast / feedback message
  const [toastMessage, setToastMessage] = useState('');

  // Modal states for editing
  const [editingRep, setEditingRep] = useState(null);
  const [isCreatingRep, setIsCreatingRep] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingPlant, setEditingPlant] = useState(null);

  // Form states
  const [repForm, setRepForm] = useState({
    name: '',
    title: '',
    corridor: '',
    region: 'Greater Accra',
    hub: '',
    address: '',
    phone: '',
    directMobile: '',
    email: '',
    whatsappNumber: '',
    coverageCities: '',
    specialization: '',
    bio: ''
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Check existing session
  useEffect(() => {
    const checkAuth = async () => {
      const valid = await api.verifySession();
      if (valid) {
        setIsAuthenticated(true);
        loadAllData();
      }
    };
    checkAuth();
  }, []);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [repsData, prodsData, plantsData, quotesData, statusData] = await Promise.all([
        api.getSalesReps(),
        api.getProducts(),
        api.getPlants(),
        api.getQuotes().catch(() => []),
        api.getSystemStatus().catch(() => null)
      ]);
      setSalesReps(repsData);
      setProducts(prodsData);
      setPlants(plantsData);
      setQuotes(quotesData);
      if (statusData) setSystemStatus(statusData);
    } catch (err) {
      console.error('Error loading admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);
    try {
      await api.login(loginEmail, loginPassword);
      setIsAuthenticated(true);
      await loadAllData();
      showToast('Welcome to Star Cement Operations Directorate');
    } catch (err) {
      setLoginError(err.message || 'Invalid administrative credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    api.logout();
    setIsAuthenticated(false);
    showToast('Signed out successfully');
  };

  // Quotes handlers
  const handleUpdateQuoteStatus = async (id, status) => {
    try {
      await api.updateQuoteStatus(id, status);
      setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
      showToast(`Inquiry marked as ${status}`);
    } catch (err) {
      alert('Failed to update inquiry status');
    }
  };

  const handleDeleteQuote = async (id) => {
    if (!confirm('Are you sure you want to remove this dispatch inquiry?')) return;
    try {
      await api.deleteQuote(id);
      setQuotes(prev => prev.filter(q => q.id !== id));
      showToast('Dispatch inquiry removed');
    } catch (err) {
      alert('Failed to remove inquiry');
    }
  };

  // Sales Rep handlers
  const openCreateRepModal = () => {
    setRepForm({
      name: '',
      title: 'Commercial Infrastructure Lead',
      corridor: 'Greater Accra & Eastern Corridor',
      region: 'Greater Accra',
      hub: 'Tema Finish Grinding Terminal',
      address: 'Heavy Industrial Area, Plot 14/B, Meridian Road, Tema',
      phone: '+233 30 320 4401',
      directMobile: '+233 24 000 0000',
      email: 'lead@starcement.com.gh',
      whatsappNumber: '233240000000',
      coverageCities: 'Accra, Tema, Kasoa',
      specialization: '42.5R Bulk Tanker Deliveries, Structural Pours',
      bio: 'Commercial procurement lead coordinating regional contractors and batching dispatch.'
    });
    setIsCreatingRep(true);
  };

  const openEditRepModal = (rep) => {
    setEditingRep(rep);
    setRepForm({
      name: rep.name,
      title: rep.title,
      corridor: rep.corridor,
      region: rep.region,
      hub: rep.hub,
      address: rep.address,
      phone: rep.phone,
      directMobile: rep.directMobile,
      email: rep.email,
      whatsappNumber: rep.whatsappNumber,
      coverageCities: Array.isArray(rep.coverageCities) ? rep.coverageCities.join(', ') : rep.coverageCities,
      specialization: rep.specialization,
      bio: rep.bio
    });
  };

  const handleSaveRep = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...repForm,
        coverageCities: repForm.coverageCities.split(',').map(s => s.trim())
      };

      if (isCreatingRep) {
        const created = await api.createSalesRep(payload);
        setSalesReps(prev => [...prev, created]);
        showToast('New sales representative registered');
        setIsCreatingRep(false);
      } else if (editingRep) {
        const updated = await api.updateSalesRep(editingRep.id, payload);
        setSalesReps(prev => prev.map(r => r.id === editingRep.id ? updated : r));
        showToast('Sales representative updated');
        setEditingRep(null);
      }

      if (onDataUpdated) onDataUpdated();
    } catch (err) {
      alert(err.message || 'Failed to save sales representative');
    }
  };

  const handleDeleteRep = async (id) => {
    if (!confirm('Are you sure you want to remove this commercial representative?')) return;
    try {
      await api.deleteSalesRep(id);
      setSalesReps(prev => prev.filter(r => r.id !== id));
      showToast('Sales representative removed');
      if (onDataUpdated) onDataUpdated();
    } catch (err) {
      alert('Failed to delete sales representative');
    }
  };

  // Product edit handler
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    if (!editingProduct) return;
    try {
      const updated = await api.updateProduct(editingProduct.id, editingProduct);
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? updated : p));
      showToast(`${editingProduct.name} specifications updated`);
      setEditingProduct(null);
      if (onDataUpdated) onDataUpdated();
    } catch (err) {
      alert('Failed to update product specifications');
    }
  };

  // Plant edit handler
  const handleSavePlant = async (e) => {
    e.preventDefault();
    if (!editingPlant) return;
    try {
      const updated = await api.updatePlant(editingPlant.id, editingPlant);
      setPlants(prev => prev.map(p => p.id === editingPlant.id ? updated : p));
      showToast(`${editingPlant.name} updated`);
      setEditingPlant(null);
      if (onDataUpdated) onDataUpdated();
    } catch (err) {
      alert('Failed to update plant details');
    }
  };

  // ----------------------------------------------------
  // Unauthenticated Login Screen
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F7F6F3] flex items-center justify-center p-4 sm:p-6 text-neutral-900 text-left">
        <div className="bg-white border border-neutral-200/90 rounded-2xl p-8 sm:p-12 max-w-md w-full shadow-xl">
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-100">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/star-cement-logo.png"
                alt="Star Cement Logo"
                className="w-12 h-12 object-contain rounded-xl shadow-md"
              />
              <div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#B91C1C]">
                  Internal Management Console
                </div>
                <h1 className="font-serif text-2xl font-bold text-neutral-950 leading-tight">
                  Staff Directorate
                </h1>
              </div>
            </div>
            <button
              onClick={onExitAdmin}
              className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 cursor-pointer"
              title="Return to Website"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

          {loginError && (
            <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-[#B91C1C] text-xs font-mono rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-2">
                Executive Email
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-mono text-neutral-900 focus:outline-none focus:border-[#B91C1C] focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase font-bold text-neutral-700 mb-2">
                Access Password
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl px-4 py-3 text-xs sm:text-sm font-mono text-neutral-900 focus:outline-none focus:border-[#B91C1C] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              <span>{loading ? 'Authenticating...' : 'Sign In to Directorate'}</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>Star Cement Ghana Ltd</span>
            <button
              type="button"
              onClick={onExitAdmin}
              className="text-[#B91C1C] hover:underline"
            >
              ← Back to Main Site
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // Authenticated Admin Dashboard
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F7F6F3] text-neutral-900 text-left font-sans flex flex-col">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-neutral-950 text-white px-5 py-3 rounded-xl shadow-2xl font-mono text-xs flex items-center gap-2.5 border border-neutral-800">
          <Check className="w-4 h-4 text-[#B91C1C]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Directorate Navigation Bar */}
      <header className="bg-[#11161B] text-white border-b border-neutral-800 px-4 sm:px-8 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3.5">
            <img
              src="/images/star-cement-logo.png"
              alt="Star Cement Logo"
              className="w-8 h-8 object-contain rounded-md shadow-sm"
            />
            <div className="font-serif font-black tracking-wider text-xl">
              STAR CEMENT
            </div>
            <span className="text-neutral-500">|</span>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-300">
              Commercial Directorate Operations
            </div>
          </div>

          <div className="flex items-center gap-3">
            {systemStatus?.database && (
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-[11px] font-mono text-neutral-300">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>{systemStatus.database.isPostgres ? 'PostgreSQL Cluster' : 'PostgreSQL Engine (Dual-Mode)'}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
            )}

            <button
              onClick={onExitAdmin}
              className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono font-bold rounded-lg transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>View Customer Site</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/60 hover:bg-red-900/80 text-red-200 border border-red-800/60 text-xs font-mono font-bold rounded-lg transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>
      </header>

      {/* Navigation Tabs Bar */}
      <div className="bg-white border-b border-neutral-200 shadow-sm px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-2 sm:gap-6 py-3 scrollbar-none">
          
          <button
            onClick={() => setActiveTab('quotes')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'quotes'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            <ClipboardList className="w-4 h-4 text-[#B91C1C]" />
            <span>Dispatch Inquiries</span>
            <span className={`px-2 py-0.5 text-[10px] rounded-full ${
              activeTab === 'quotes' ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'
            }`}>
              {quotes.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('reps')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'reps'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            <Users className="w-4 h-4 text-[#B91C1C]" />
            <span>Sales Representatives</span>
            <span className={`px-2 py-0.5 text-[10px] rounded-full ${
              activeTab === 'reps' ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'
            }`}>
              {salesReps.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'products'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            <Package className="w-4 h-4 text-[#B91C1C]" />
            <span>Products & Formulations</span>
            <span className={`px-2 py-0.5 text-[10px] rounded-full ${
              activeTab === 'products' ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'
            }`}>
              {products.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('plants')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'plants'
                ? 'bg-neutral-950 text-white shadow-sm'
                : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#B91C1C]" />
            <span>Terminals & Hubs</span>
            <span className={`px-2 py-0.5 text-[10px] rounded-full ${
              activeTab === 'plants' ? 'bg-neutral-800 text-white' : 'bg-neutral-200 text-neutral-800'
            }`}>
              {plants.length}
            </span>
          </button>

        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12 flex-1">
        
        {/* ======================================================== */}
        {/* TAB 1: DISPATCH INQUIRIES / RFQS */}
        {/* ======================================================== */}
        {activeTab === 'quotes' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#B91C1C] mb-1">
                  Customer RFQ Dispatch Stream
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
                  Commercial Orders & Haulage Requests
                </h2>
              </div>
              <button
                onClick={loadAllData}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold rounded-xl shadow-sm self-start sm:self-auto"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh Live Inquiries</span>
              </button>
            </div>

            <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm font-sans">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-600 font-mono text-xs uppercase tracking-wider border-b border-neutral-200">
                      <th className="py-4 px-6 font-bold">Ref & Date</th>
                      <th className="py-4 px-6 font-bold">Contractor & Entity</th>
                      <th className="py-4 px-6 font-bold">Product & Volume</th>
                      <th className="py-4 px-6 font-bold">Destination Corridor</th>
                      <th className="py-4 px-6 font-bold">Dispatch Status</th>
                      <th className="py-4 px-6 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {quotes.map((q) => (
                      <tr key={q.id} className="hover:bg-neutral-50/70 transition-colors">
                        <td className="py-4 px-6 font-mono">
                          <strong className="text-[#B91C1C] block">{q.ref}</strong>
                          <span className="text-[11px] text-neutral-500">
                            {new Date(q.createdAt).toLocaleDateString()}
                          </span>
                        </td>

                        <td className="py-4 px-6">
                          <div className="font-bold text-neutral-950">{q.clientName}</div>
                          <div className="text-xs text-neutral-500">{q.companyName}</div>
                          <div className="text-xs font-mono text-neutral-700 mt-0.5">{q.phone}</div>
                        </td>

                        <td className="py-4 px-6">
                          <span className="font-bold text-neutral-900 block">{q.productName}</span>
                          <span className="font-mono text-xs text-neutral-600">
                            {q.quantity} {q.quantityUnit} ({q.orderFormat.replace('_', ' ')})
                          </span>
                        </td>

                        <td className="py-4 px-6 text-xs text-neutral-700">
                          <strong className="block text-neutral-900">{q.region}</strong>
                          <span className="text-neutral-500">{q.deliverySite}</span>
                        </td>

                        <td className="py-4 px-6">
                          <select
                            value={q.status}
                            onChange={(e) => handleUpdateQuoteStatus(q.id, e.target.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border focus:outline-none ${
                              q.status === 'New' ? 'bg-amber-50 text-amber-900 border-amber-300' :
                              q.status === 'Quoted' ? 'bg-blue-50 text-blue-900 border-blue-300' :
                              q.status === 'Dispatched' ? 'bg-emerald-50 text-emerald-900 border-emerald-300' :
                              'bg-neutral-100 text-neutral-700 border-neutral-300'
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Quoted">Quoted</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Completed">Completed</option>
                            <option value="Archived">Archived</option>
                          </select>
                        </td>

                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => handleDeleteQuote(q.id)}
                            className="p-2 text-neutral-400 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                            title="Delete Inquiry"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {quotes.length === 0 && (
                <div className="text-center py-16 font-mono text-xs text-neutral-500">
                  No dispatch inquiries currently registered. Customer orders submitted through the website modal appear here in real time.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: SALES REPRESENTATIVES */}
        {/* ======================================================== */}
        {activeTab === 'reps' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#B91C1C] mb-1">
                  Territory Directorate
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
                  Commercial Territory Officers
                </h2>
              </div>
              <button
                onClick={openCreateRepModal}
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-md self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Add Regional Officer</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {salesReps.map((rep) => (
                <div
                  key={rep.id}
                  className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 pb-3 border-b border-neutral-100">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
                        {rep.corridor}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        {rep.region}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-neutral-950 mb-0.5">
                      {rep.name}
                    </h3>
                    <div className="text-xs font-sans text-neutral-600 mb-4">
                      {rep.title}
                    </div>

                    <div className="text-xs font-mono text-neutral-600 mb-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#B91C1C]" />
                        <span className="font-semibold text-neutral-900">{rep.hub}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Direct: {rep.directMobile}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp: +{rep.whatsappNumber}</span>
                      </div>
                    </div>

                    <div className="bg-[#F7F6F3] rounded-xl p-3.5 text-xs font-sans text-neutral-700 space-y-1.5 mb-6">
                      <div>
                        <strong className="text-neutral-900 font-medium">Coverage: </strong>
                        <span>{Array.isArray(rep.coverageCities) ? rep.coverageCities.join(', ') : rep.coverageCities}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900 font-medium">Focus: </strong>
                        <span>{rep.specialization}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-4 border-t border-neutral-100">
                    <button
                      onClick={() => openEditRepModal(rep)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-bold text-neutral-900 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit Officer</span>
                    </button>

                    <button
                      onClick={() => handleDeleteRep(rep.id)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-red-50 hover:bg-red-100 text-xs font-mono font-bold text-[#B91C1C] rounded-lg transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: PRODUCTS & FORMULATIONS */}
        {/* ======================================================== */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#B91C1C] mb-1">
                Technical Specifications & Standards
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
                Certified Cement Formulations (GS 1118-1:2024)
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((p) => {
                const isRed = p.theme === 'red';
                return (
                  <div
                    key={p.id}
                    className={`bg-white border rounded-2xl p-8 shadow-sm flex flex-col justify-between ${
                      isRed ? 'border-t-4 border-t-[#B91C1C]' : 'border-t-4 border-t-[#1E3A8A]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
                        <span className={`font-mono text-xs font-bold uppercase ${isRed ? 'text-[#B91C1C]' : 'text-[#1E3A8A]'}`}>
                          {p.grade} • {p.classType}
                        </span>
                        <span className="font-mono text-xs text-neutral-400">
                          {p.standard}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl font-bold text-neutral-950 mb-2">
                        {p.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                        {p.summary}
                      </p>

                      <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-neutral-100 font-mono text-xs">
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase">28-Day Strength</span>
                          <strong className="text-xl font-bold text-neutral-950 mt-1 block">
                            {p.compressiveStrength.twentyEightDay}
                          </strong>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase">2-Day Strength</span>
                          <strong className="text-xl font-bold text-neutral-950 mt-1 block">
                            {p.compressiveStrength.twoDay}
                          </strong>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase">Initial Setting Time</span>
                          <strong className="text-sm font-bold text-neutral-800 mt-1 block">
                            {p.physicalProperties.initialSettingTime}
                          </strong>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[10px] uppercase">Blaine Fineness</span>
                          <strong className="text-sm font-bold text-neutral-800 mt-1 block">
                            {p.physicalProperties.finenessBlaine}
                          </strong>
                        </div>
                      </div>

                      <div className="mb-6">
                        <span className="font-mono text-xs uppercase font-bold text-neutral-400 block mb-2">
                          Approved Structural Applications:
                        </span>
                        <ul className="space-y-1.5 text-xs text-neutral-700">
                          {p.applications.map((app, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B91C1C] mt-1.5 flex-shrink-0"></span>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex justify-end">
                      <button
                        onClick={() => setEditingProduct({ ...p })}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-mono font-bold uppercase rounded-xl transition-colors shadow-sm"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit Formulation Parameters</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: MANUFACTURING & DEPOTS */}
        {/* ======================================================== */}
        {activeTab === 'plants' && (
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#B91C1C] mb-1">
                Logistics & Weighbridge Infrastructure
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
                Manufacturing Terminals & Strategic Depots
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plants.map((plant) => (
                <div
                  key={plant.id}
                  className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 pb-3 border-b border-neutral-100">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#B91C1C]">
                        {plant.region} {plant.isFlagship && '• Flagship'}
                      </span>
                      <span className="font-mono text-xs font-bold text-neutral-900 bg-neutral-100 px-2.5 py-1 rounded-md">
                        {plant.status}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-neutral-950 mb-1">
                      {plant.name}
                    </h3>
                    <div className="text-xs font-sans text-neutral-600 mb-5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B91C1C] flex-shrink-0" />
                      <span>{plant.address}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 mb-5 border-y border-neutral-100 font-mono text-xs">
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">Annual Capacity</span>
                        <strong className="text-base font-bold text-neutral-950 mt-0.5 block">
                          {plant.annualCapacity}
                        </strong>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">Silo Storage</span>
                        <strong className="text-base font-bold text-neutral-950 mt-0.5 block">
                          {plant.silos}
                        </strong>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">Packing Output</span>
                        <strong className="text-xs font-bold text-neutral-800 mt-0.5 block">
                          {plant.packingCapacity}
                        </strong>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase">Bulk Dispatch</span>
                        <strong className="text-xs font-bold text-neutral-800 mt-0.5 block">
                          {plant.bulkDispatch}
                        </strong>
                      </div>
                    </div>

                    <div className="text-xs text-neutral-600 mb-6 space-y-1">
                      <div>
                        <strong className="text-neutral-900 font-medium">Service Radius: </strong>
                        <span>{plant.serviceRadius}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-900 font-medium">Dispatch Phone: </strong>
                        <span className="font-mono">{plant.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex justify-end">
                    <button
                      onClick={() => setEditingPlant({ ...plant })}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-mono font-bold uppercase rounded-xl transition-colors shadow-sm"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit Terminal Data</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ======================================================== */}
      {/* MODAL: EDIT / CREATE SALES REP */}
      {/* ======================================================== */}
      {(isCreatingRep || editingRep) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-neutral-200 w-full max-w-2xl my-auto max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-2xl shadow-2xl relative text-neutral-900 text-left">
            
            <button
              onClick={() => {
                setIsCreatingRep(false);
                setEditingRep(null);
              }}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pb-4 border-b border-neutral-100">
              <span className="font-mono text-xs uppercase font-bold text-[#B91C1C]">
                {isCreatingRep ? 'New Appointment' : 'Officer Dossier Update'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-950 mt-1">
                {isCreatingRep ? 'Register Commercial Territory Officer' : `Edit ${editingRep.name}`}
              </h3>
            </div>

            <form onSubmit={handleSaveRep} className="space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={repForm.name}
                    onChange={(e) => setRepForm({ ...repForm, name: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Title / Designation</label>
                  <input
                    type="text"
                    required
                    value={repForm.title}
                    onChange={(e) => setRepForm({ ...repForm, title: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Corridor Description</label>
                  <input
                    type="text"
                    required
                    value={repForm.corridor}
                    onChange={(e) => setRepForm({ ...repForm, corridor: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Primary Region</label>
                  <select
                    value={repForm.region}
                    onChange={(e) => setRepForm({ ...repForm, region: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  >
                    <option value="Greater Accra">Greater Accra</option>
                    <option value="Ashanti">Ashanti</option>
                    <option value="Western">Western</option>
                    <option value="Northern">Northern</option>
                    <option value="Eastern">Eastern</option>
                    <option value="Central">Central</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Operational Dispatch Hub</label>
                  <input
                    type="text"
                    required
                    value={repForm.hub}
                    onChange={(e) => setRepForm({ ...repForm, hub: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Physical Address</label>
                  <input
                    type="text"
                    required
                    value={repForm.address}
                    onChange={(e) => setRepForm({ ...repForm, address: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Direct Mobile</label>
                  <input
                    type="text"
                    required
                    value={repForm.directMobile}
                    onChange={(e) => setRepForm({ ...repForm, directMobile: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">WhatsApp Number (e.g. 233244119021)</label>
                  <input
                    type="text"
                    required
                    value={repForm.whatsappNumber}
                    onChange={(e) => setRepForm({ ...repForm, whatsappNumber: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Coverage Cities (comma-separated)</label>
                <input
                  type="text"
                  required
                  value={repForm.coverageCities}
                  onChange={(e) => setRepForm({ ...repForm, coverageCities: e.target.value })}
                  className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Technical Specialization</label>
                <input
                  type="text"
                  required
                  value={repForm.specialization}
                  onChange={(e) => setRepForm({ ...repForm, specialization: e.target.value })}
                  className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Officer Bio / Scope</label>
                <textarea
                  rows="3"
                  value={repForm.bio}
                  onChange={(e) => setRepForm({ ...repForm, bio: e.target.value })}
                  className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-sans text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsCreatingRep(false);
                    setEditingRep(null);
                  }}
                  className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-bold rounded-xl text-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-mono font-bold uppercase rounded-xl transition-colors shadow-sm"
                >
                  Save Officer Dossier
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: EDIT PRODUCT */}
      {/* ======================================================== */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-neutral-200 w-full max-w-xl my-auto max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-2xl shadow-2xl relative text-neutral-900 text-left">
            
            <button
              onClick={() => setEditingProduct(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pb-4 border-b border-neutral-100">
              <span className="font-mono text-xs uppercase font-bold text-[#B91C1C]">
                Laboratory Formulation Specs
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-950 mt-1">
                Edit {editingProduct.name} ({editingProduct.grade})
              </h3>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 font-sans text-xs">
              <div>
                <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Product Description</label>
                <textarea
                  rows="3"
                  value={editingProduct.summary}
                  onChange={(e) => setEditingProduct({ ...editingProduct, summary: e.target.value })}
                  className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">28-Day Strength Target</label>
                  <input
                    type="text"
                    value={editingProduct.compressiveStrength.twentyEightDay}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      compressiveStrength: {
                        ...editingProduct.compressiveStrength,
                        twentyEightDay: e.target.value
                      }
                    })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">2-Day Early Strength</label>
                  <input
                    type="text"
                    value={editingProduct.compressiveStrength.twoDay}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      compressiveStrength: {
                        ...editingProduct.compressiveStrength,
                        twoDay: e.target.value
                      }
                    })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Initial Setting Time</label>
                  <input
                    type="text"
                    value={editingProduct.physicalProperties.initialSettingTime}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      physicalProperties: {
                        ...editingProduct.physicalProperties,
                        initialSettingTime: e.target.value
                      }
                    })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Fineness Blaine</label>
                  <input
                    type="text"
                    value={editingProduct.physicalProperties.finenessBlaine}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      physicalProperties: {
                        ...editingProduct.physicalProperties,
                        finenessBlaine: e.target.value
                      }
                    })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-bold rounded-xl text-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-mono font-bold uppercase rounded-xl transition-colors shadow-sm"
                >
                  Save Formulation Specs
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: EDIT PLANT / TERMINAL */}
      {/* ======================================================== */}
      {editingPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border border-neutral-200 w-full max-w-xl my-auto max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-2xl shadow-2xl relative text-neutral-900 text-left">
            
            <button
              onClick={() => setEditingPlant(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pb-4 border-b border-neutral-100">
              <span className="font-mono text-xs uppercase font-bold text-[#B91C1C]">
                Terminal Logistics Configuration
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-950 mt-1">
                Edit {editingPlant.name}
              </h3>
            </div>

            <form onSubmit={handleSavePlant} className="space-y-4 font-sans text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Operational Status</label>
                  <input
                    type="text"
                    value={editingPlant.status}
                    onChange={(e) => setEditingPlant({ ...editingPlant, status: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Dispatch Phone</label>
                  <input
                    type="text"
                    value={editingPlant.phone}
                    onChange={(e) => setEditingPlant({ ...editingPlant, phone: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Annual Throughput / Capacity</label>
                  <input
                    type="text"
                    value={editingPlant.annualCapacity}
                    onChange={(e) => setEditingPlant({ ...editingPlant, annualCapacity: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Silo Storage</label>
                  <input
                    type="text"
                    value={editingPlant.silos}
                    onChange={(e) => setEditingPlant({ ...editingPlant, silos: e.target.value })}
                    className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs font-mono text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono uppercase text-neutral-700 font-bold mb-1">Service Radius Corridors</label>
                <input
                  type="text"
                  value={editingPlant.serviceRadius}
                  onChange={(e) => setEditingPlant({ ...editingPlant, serviceRadius: e.target.value })}
                  className="w-full bg-[#F7F6F3] border border-neutral-300 rounded-xl p-2.5 text-xs text-neutral-900 focus:bg-white focus:border-[#B91C1C] focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingPlant(null)}
                  className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-xs font-mono font-bold rounded-xl text-neutral-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-neutral-950 hover:bg-[#B91C1C] text-white text-xs font-mono font-bold uppercase rounded-xl transition-colors shadow-sm"
                >
                  Save Terminal Data
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
