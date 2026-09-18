import { salesReps as fallbackReps } from '../data/salesReps';
import { products as fallbackProducts } from '../data/products';
import { plants as fallbackPlants } from '../data/plants';
import { dealers as fallbackDealers } from '../data/dealers';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

// Helper for authorized headers
function getAuthHeaders() {
  const token = localStorage.getItem('star_admin_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

export const api = {
  // Auth
  async login(email, password) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Authentication failed');
    if (data.token) {
      localStorage.setItem('star_admin_token', data.token);
      localStorage.setItem('star_admin_user', JSON.stringify(data.user));
    }
    return data;
  },

  async verifySession() {
    const token = localStorage.getItem('star_admin_token');
    if (!token) return false;
    try {
      const res = await fetch(`${API_BASE}/auth/verify`, {
        headers: getAuthHeaders()
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  logout() {
    localStorage.removeItem('star_admin_token');
    localStorage.removeItem('star_admin_user');
  },

  getCurrentUser() {
    try {
      const u = localStorage.getItem('star_admin_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  },

  async getSystemStatus() {
    try {
      const res = await fetch(`${API_BASE}/health`);
      if (!res.ok) throw new Error('Health check failed');
      return await res.json();
    } catch {
      return { status: 'offline', database: { engine: 'Offline / Client Fallback' } };
    }
  },

  // Sales Representatives
  async getSalesReps() {
    try {
      const res = await fetch(`${API_BASE}/sales-reps`);
      if (!res.ok) throw new Error('API request failed');
      return await res.json();
    } catch (err) {
      console.warn('Backend unavailable, using fallback sales reps data:', err);
      return fallbackReps;
    }
  },

  async createSalesRep(repData) {
    const res = await fetch(`${API_BASE}/sales-reps`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(repData)
    });
    if (!res.ok) throw new Error('Failed to create sales representative');
    return await res.json();
  },

  async updateSalesRep(id, repData) {
    const res = await fetch(`${API_BASE}/sales-reps/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(repData)
    });
    if (!res.ok) throw new Error('Failed to update sales representative');
    return await res.json();
  },

  async deleteSalesRep(id) {
    const res = await fetch(`${API_BASE}/sales-reps/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete sales representative');
    return await res.json();
  },

  // Products
  async getProducts() {
    try {
      const res = await fetch(`${API_BASE}/products`);
      if (!res.ok) throw new Error('API request failed');
      return await res.json();
    } catch (err) {
      console.warn('Backend unavailable, using fallback products data:', err);
      return fallbackProducts;
    }
  },

  async updateProduct(id, productData) {
    const res = await fetch(`${API_BASE}/products/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(productData)
    });
    if (!res.ok) throw new Error('Failed to update product specifications');
    return await res.json();
  },

  // Plants & Terminals
  async getPlants() {
    try {
      const res = await fetch(`${API_BASE}/plants`);
      if (!res.ok) throw new Error('API request failed');
      return await res.json();
    } catch (err) {
      console.warn('Backend unavailable, using fallback plants data:', err);
      return fallbackPlants;
    }
  },

  async updatePlant(id, plantData) {
    const res = await fetch(`${API_BASE}/plants/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(plantData)
    });
    if (!res.ok) throw new Error('Failed to update terminal specifications');
    return await res.json();
  },

  // Authorized Dealers Directory
  async getDealers() {
    try {
      const res = await fetch(`${API_BASE}/dealers`);
      if (!res.ok) throw new Error('API request failed');
      const data = await res.json();
      return Array.isArray(data) && data.length > 0 ? data : fallbackDealers;
    } catch {
      return fallbackDealers;
    }
  },

  // Customer Dispatch Quotes / Inquiries
  async submitQuote(quoteData) {
    try {
      const res = await fetch(`${API_BASE}/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteData)
      });
      if (!res.ok) throw new Error('Failed to submit quote to backend');
      return await res.json();
    } catch (err) {
      console.warn('Failed to post quote to backend API, generated fallback ref:', err);
      return {
        ref: quoteData.ref || `STAR-GH-${Math.floor(100000 + Math.random() * 900000)}`,
        ...quoteData
      };
    }
  },

  async getQuotes() {
    const res = await fetch(`${API_BASE}/quotes`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to fetch dispatch inquiries');
    return await res.json();
  },

  async updateQuoteStatus(id, status) {
    const res = await fetch(`${API_BASE}/quotes/${id}`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error('Failed to update inquiry status');
    return await res.json();
  },

  async deleteQuote(id) {
    const res = await fetch(`${API_BASE}/quotes/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Failed to delete inquiry');
    return await res.json();
  }
};
