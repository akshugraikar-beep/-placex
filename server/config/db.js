import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";
import logger from '../utils/logger.js';

if (!MONGO_URI) {
  logger.error("❌ MONGO_URI is not defined. Check environment variables.");
  // Don't exit — let server still serve health checks
}

const connectToDatabase = async (retries = process.env.VERCEL ? 1 : 5) => {
  if (!MONGO_URI) return;
  
  if (process.env.VERCEL) {
    mongoose.set('bufferTimeoutMS', 3000);
  }

  for (let i = 1; i <= retries; i++) {
    try {
      await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: process.env.VERCEL ? 4000 : 10000,
        bufferCommands: !process.env.VERCEL, // Important for Vercel! Don't buffer commands if connection fails
        // In serverless, we fail fast to prevent Vercel 10s window from timing out before Express can send an error
      });
      logger.debug("💽 Connected to Database");
      return;
    } catch (error) {
      logger.error(`❌ DB connection attempt ${i}/${retries} failed: ${error.message}`);
      if (i < retries) {
        await new Promise(r => setTimeout(r, 3000 * i)); // exponential backoff
      }
    }
  }
  logger.error("❌ All DB connection attempts failed. Server running without DB.");
  // Don't call process.exit(1) — keep server alive for health checks
};

export default connectToDatabase;
