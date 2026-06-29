const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const db = admin.firestore();

function clean(value, max = 1200) {
  return String(value || "").trim().slice(0, max);
}

function allowCors(req, res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
  res.set("Access-Control-Allow-Origin", allowedOrigin);
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return true;
  }
  return false;
}

function mailTransport() {
  if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || 587),
    secure: Number(process.env.MAIL_PORT || 587) === 465,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });
}

exports.submitLead = onRequest({ region: "europe-west1" }, async (req, res) => {
  if (allowCors(req, res)) return;

  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const lead = {
    name: clean(req.body.name, 160),
    company: clean(req.body.company, 160),
    contact: clean(req.body.contact, 200),
    type: clean(req.body.type, 120),
    message: clean(req.body.message, 2000),
    source: clean(req.body.source || "arakera_demo", 120),
    status: "new",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    userAgent: clean(req.get("user-agent"), 400)
  };

  if (!lead.name || !lead.contact || !lead.message) {
    res.status(400).json({ ok: false, error: "missing_required_fields" });
    return;
  }

  const ref = await db.collection("leads").add(lead);

  const transport = mailTransport();
  if (transport && process.env.LEADS_TO_EMAIL) {
    try {
      await transport.sendMail({
        from: process.env.MAIL_USER,
        to: process.env.LEADS_TO_EMAIL,
        subject: `New ARAKERA lead: ${lead.type || "website request"}`,
        text: [
          `Lead ID: ${ref.id}`,
          `Name: ${lead.name}`,
          `Company: ${lead.company}`,
          `Contact: ${lead.contact}`,
          `Type: ${lead.type}`,
          "",
          lead.message
        ].join("\n")
      });
    } catch (error) {
      logger.error("Email notification failed", error);
    }
  }

  res.status(200).json({ ok: true, leadId: ref.id });
});

