import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";
import logger from '../utils/logger.js';

if (!MONGO_URI) {
  logger.error("❌ MONGO_URI is not defined. Check environment variables.");
  // Don't exit — let server still serve health checks
}

const connectToDatabase = async (retries = 5) => {
  if (!MONGO_URI) return;
  for (let i = 1; i <= retries; i++) {
    try {
      await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 10000,
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
