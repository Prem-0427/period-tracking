import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiry: Date,
  periods: [
    {
      lastPeriod: Date,
      cycleLength: Number,
      food: String,
      predictedDate: Date
    }
  ]
});

export default mongoose.model("User", userSchema);