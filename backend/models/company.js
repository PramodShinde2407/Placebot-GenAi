import mongoose from "mongoose";

const jobRoleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  ctc: {
    type: Number,
    required: true,
  },
  eligibility: {
    minCGPA: {
      type: Number,
      default: 0,
    },
    branches: [String],
  },
});

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: String,
    industry: String,

    visitDate: Date,

    package: {
      avg: Number,
      highest: Number,
      lowest: Number,
    },

    hiringStats: {
      totalHired: {
        type: Number,
        default: 0,
      },
      year: Number,
    },

    requiredSkills: [
      {
        type: String, // or ObjectId if using Skill model strictly
      },
    ],

    jobRoles: [jobRoleSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);