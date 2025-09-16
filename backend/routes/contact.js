import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    res.status(201).json({ success: true, msg: "Message saved successfully!" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ success: false, msg: "Error saving message" });
  }
});

export default router;
