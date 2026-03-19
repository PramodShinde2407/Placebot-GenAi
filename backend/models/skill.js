import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: String, // e.g., Programming, Backend, Frontend
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);