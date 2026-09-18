import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const products = await db.getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve products.' });
  }
});

// PUT /api/products/:id (Admin: Update product specs)
router.put('/:id', async (req, res) => {
  try {
    const updated = await db.updateProduct(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: 'Product formulation not found.' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ error: 'Failed to update product formulation.' });
  }
});

export default router;
