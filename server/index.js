import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();
import express from 'express';
import cors from 'cors';
import { db } from './db.js';
import authRoutes from './routes/auth.js';
import salesRepsRoutes from './routes/salesReps.js';
import productsRoutes from './routes/products.js';
import plantsRoutes from './routes/plants.js';
import quotesRoutes from './routes/quotes.js';
import dealersRoutes from './routes/dealers.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Request logging in dev
app.use((req, res, next) => {
  console.log(`[API] ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Star Cement Ghana Operations Directorate API',
    database: db.getEngineInfo(),
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/sales-reps', salesRepsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/plants', plantsRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/dealers', dealersRoutes);

// Error handling fallback
app.use((err, req, res, next) => {
  console.error('[API Error]', err);
  res.status(500).json({ error: 'Internal server error occurred.' });
});

// Initialize database and start listening
async function startServer() {
  try {
    await db.init();
    app.listen(PORT, () => {
      console.log(`🚀 [Star Cement Backend] Running at http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (err) {
    console.error('Failed to start Star Cement server:', err);
    process.exit(1);
  }
}

startServer();
