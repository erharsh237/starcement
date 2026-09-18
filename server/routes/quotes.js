import { Router } from 'express';
import { db } from '../db.js';

const router = Router();

// GET /api/quotes (Admin: List all inquiries)
router.get('/', async (req, res) => {
  try {
    const quotes = await db.getQuotes();
    // Return sorted newest first
    quotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve dispatch inquiries.' });
  }
});

// POST /api/quotes (Public: Submit new quote request)
router.post('/', async (req, res) => {
  try {
    const generatedRef = req.body.ref || `STAR-GH-${Math.floor(100000 + Math.random() * 900000)}`;

    const newQuote = {
      id: `quote-${Date.now()}`,
      ref: generatedRef,
      clientName: req.body.clientName || 'Anonymous Contractor',
      companyName: req.body.companyName || 'Not specified',
      phone: req.body.phone || 'Not specified',
      email: req.body.email || '',
      productGrade: req.body.productGrade || 'star-42-5r',
      productName: req.body.productName || (req.body.productGrade === 'star-32-5r' ? 'Star Cement 32.5R' : 'Star Cement 42.5R'),
      orderFormat: req.body.orderFormat || '50kg_bags',
      quantity: req.body.quantity || '200',
      quantityUnit: req.body.orderFormat === 'bulk_tanker' ? 'Metric Tons' : '50kg Bags',
      region: req.body.region || 'Greater Accra',
      deliverySite: req.body.deliverySite || 'Not specified',
      targetDate: req.body.targetDate || '',
      notes: req.body.notes || '',
      status: 'New',
      createdAt: new Date().toISOString()
    };

    const created = await db.addQuote(newQuote);
    res.status(201).json(created);
  } catch (err) {
    console.error('Quote submission error:', err);
    res.status(500).json({ error: 'Failed to register dispatch order.' });
  }
});

// PATCH /api/quotes/:id (Admin: Update status or notes)
router.patch('/:id', async (req, res) => {
  try {
    const updated = await db.updateQuoteStatus(req.params.id, req.body.status, req.body.notes);
    if (!updated) {
      return res.status(404).json({ error: 'Dispatch inquiry not found.' });
    }
    res.json(updated);
  } catch (err) {
    console.error('Error updating quote:', err);
    res.status(500).json({ error: 'Failed to update dispatch inquiry.' });
  }
});

// DELETE /api/quotes/:id (Admin: Delete inquiry)
router.delete('/:id', async (req, res) => {
  try {
    const success = await db.deleteQuote(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Dispatch inquiry not found.' });
    }
    res.json({ success: true, message: 'Inquiry removed.' });
  } catch (err) {
    console.error('Error deleting quote:', err);
    res.status(500).json({ error: 'Failed to delete dispatch inquiry.' });
  }
});

export default router;
