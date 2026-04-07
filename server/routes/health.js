import { Router } from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';

const router = Router();

router.get('/', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ message: 'Server is healthy 🚀', db: dbStatus, readyState: mongoose.connection.readyState });
});

router.get('/check/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    const user2 = await mongoose.model("Student").findOne({ email });
    res.json({ email, userExists: !!user, studentExists: !!user2, rawUser: user, rawStudent: user2 });
  } catch(e) {
    res.json({ error: e.message });
  }
});

export default router;