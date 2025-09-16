import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import periodRoutes from "./routes/period.js";
import contactRoutes from "./routes/contact.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api", authRoutes);
app.use("/api", periodRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Backend running at http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.log("DB error:", err));