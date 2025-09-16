import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Configure transporter (use Gmail or SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,     // your email
    pass: process.env.ADMIN_EMAIL_PASS // app password (not your real password)
  }
});

// Save contact form + send email
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Save in MongoDB
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();

    // Send email to admin
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // your admin email
      subject: `📩 New Contact Message: ${subject || "No Subject"}`,
      text: `
New contact message received:

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Subject: ${subject || "N/A"}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, msg: "Message saved & email sent!" });
  } catch (err) {
    console.error("Error in contact route:", err);
    res.status(500).json({ success: false, msg: "Error saving message" });
  }
});

export default router;
