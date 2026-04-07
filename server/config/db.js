import mongoose from "mongoose";
import { MONGO_URI } from "./env.js";
import logger from '../utils/logger.js';

if (!MONGO_URI) {
  logger.error("❌ MONGO_URI is not defined. Check environment variables.");
  // Don't exit — let server still serve health checks
}

// Global cache for Serverless environments like Vercel
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectToDatabase = async () => {
  if (!MONGO_URI) return;

  if (cached.conn) {
    logger.debug("⚡ Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const isVercel = !!process.env.VERCEL;
    
    // Serverless optimized options
    const options = {
      serverSelectionTimeoutMS: isVercel ? 4000 : 10000,
      bufferCommands: !isVercel, // Disable buffering in serverless to fail fast
    };

    if (isVercel) {
      mongoose.set('bufferTimeoutMS', 3000);
    }

    cached.promise = mongoose.connect(MONGO_URI, options).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
    logger.info("✅ MongoDB Connected successfully");
    return cached.conn;
  } catch (error) {
    cached.promise = null; // Reset promise on failure
    logger.error("❌ MongoDB connection error:", error.message);
    throw error;
  }
};

export default connectToDatabase;
