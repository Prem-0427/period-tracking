import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Middleware
function auth(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

// Save period data
router.post("/save-period", auth, async (req, res) => {
  try {
    const { lastPeriod, cycleLength, food } = req.body;
    const predictedDate = new Date(lastPeriod);
    predictedDate.setDate(predictedDate.getDate() + parseInt(cycleLength));

    const user = await User.findById(req.userId);
    user.periods.push({ lastPeriod, cycleLength, food, predictedDate });
    await user.save();

    res.json({ message: "Period saved", predictedDate });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





export default router;