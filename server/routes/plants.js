import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

// GET /api/plants
router.get('/', async (req, res) => {
  try {
    const plants = await db.getPlants();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve terminal network.' });
  }
});

// PUT /api/plants/:id (Admin: Update plant specifications)
router.put('/:id', async (req, res) => {
  try {
    const updated = await db.updatePlant(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: 'Logistics terminal not found.' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Error updating plant:', err);
    res.status(500).json({ error: 'Failed to update terminal specifications.' });
  }
});

export default router;
