import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    summary: { type: String },
    template: { type: String, default: "classic" },

    education: [
      {
        school: String,
        degree: String,
        year: String,
      },
    ],
    experience: [
      {
        company: String,
        role: String,
        year: String,
      },
    ],
    skills: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Resume || mongoose.model("Resume", resumeSchema);
