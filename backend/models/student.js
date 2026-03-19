import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    linkedin: {
      type: String,
    },

    branch: String,
    cgpa: Number,

    skills: [
      {
        type: String, // or ObjectId (Skill)
      },
    ],

    resumeLink: String,

    placementStatus: {
      type: String,
      enum: ["Placed", "Unplaced"],
      default: "Unplaced",
    },

    placedCompany: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);