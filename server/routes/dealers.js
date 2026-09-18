import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

// GET /api/dealers - List all authorized dealers
router.get('/', async (req, res) => {
  try {
    const dealers = await db.getDealers();
    res.json(dealers);
  } catch (err) {
    console.error('Error fetching dealers:', err);
    res.status(500).json({ error: 'Failed to retrieve authorized dealer directory.' });
  }
});

export default router;
