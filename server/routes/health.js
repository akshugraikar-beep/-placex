import { Router } from 'express';
import mongoose from 'mongoose';

const router = Router();

router.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ message: 'Server is healthy 🚀', db: dbStatus, readyState: mongoose.connection.readyState });
});

export default router;