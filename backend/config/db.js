import mongoose from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing in environment variables");
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ DB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;