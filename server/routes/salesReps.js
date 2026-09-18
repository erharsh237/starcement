import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

// GET /api/sales-reps
router.get('/', async (req, res) => {
  try {
    const reps = await db.getSalesReps();
    res.json(reps);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve sales representatives.' });
  }
});

// POST /api/sales-reps (Admin: Create new sales rep)
router.post('/', async (req, res) => {
  try {
    const newRep = {
      id: req.body.id || `rep-${Date.now()}`,
      name: req.body.name || 'New Territory Officer',
      title: req.body.title || 'Regional Commercial Representative',
      corridor: req.body.corridor || 'Greater Accra Corridor',
      region: req.body.region || 'Greater Accra',
      hub: req.body.hub || 'Tema Grinding Terminal',
      address: req.body.address || 'Heavy Industrial Area, Tema',
      phone: req.body.phone || '+233 30 320 4401',
      directMobile: req.body.directMobile || '+233 24 000 0000',
      email: req.body.email || 'rep@starcement.com.gh',
      whatsappNumber: req.body.whatsappNumber ? req.body.whatsappNumber.replace(/[^0-9]/g, '') : '233240000000',
      coordinates: req.body.coordinates || { lat: 5.6698, lng: -0.0166 },
      coverageCities: Array.isArray(req.body.coverageCities)
        ? req.body.coverageCities
        : (req.body.coverageCities || 'Accra, Tema').split(',').map(s => s.trim()),
      specialization: req.body.specialization || '42.5R Bulk Tankers & 32.5R Commercial Blocks',
      bio: req.body.bio || 'Star Cement regional logistics and commercial procurement officer.'
    };

    const created = await db.createSalesRep(newRep);
    res.status(201).json(created);
  } catch (err) {
    console.error('Error creating sales rep:', err);
    res.status(500).json({ error: 'Failed to create sales representative.' });
  }
});

// PUT /api/sales-reps/:id (Admin: Update sales rep)
router.put('/:id', async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      coverageCities: Array.isArray(req.body.coverageCities)
        ? req.body.coverageCities
        : typeof req.body.coverageCities === 'string'
        ? req.body.coverageCities.split(',').map(s => s.trim())
        : undefined,
      whatsappNumber: req.body.whatsappNumber
        ? req.body.whatsappNumber.replace(/[^0-9]/g, '')
        : undefined
    };

    const updated = await db.updateSalesRep(req.params.id, updateData);
    if (!updated) {
      return res.status(404).json({ error: 'Sales representative not found.' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Error updating sales rep:', err);
    res.status(500).json({ error: 'Failed to update sales representative.' });
  }
});

// DELETE /api/sales-reps/:id (Admin: Delete sales rep)
router.delete('/:id', async (req, res) => {
  try {
    const success = await db.deleteSalesRep(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Sales representative not found.' });
    }
    res.json({ success: true, message: 'Sales representative removed.' });
  } catch (err) {
    console.error('Error deleting sales rep:', err);
    res.status(500).json({ error: 'Failed to delete sales representative.' });
  }
});

export default router;
