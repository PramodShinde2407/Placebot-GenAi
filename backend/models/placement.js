import mongoose from "mongoose";

const interviewRoundSchema = new mongoose.Schema({
  round: String,
  result: {
    type: String,
    enum: ["Cleared", "Rejected", "Pending"],
  },
});

const placementSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    role: String,
    package: Number,

    status: {
      type: String,
      enum: ["Selected", "Rejected", "Interviewed"],
      default: "Interviewed",
    },

    interviewRounds: [interviewRoundSchema],

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Placement", placementSchema);