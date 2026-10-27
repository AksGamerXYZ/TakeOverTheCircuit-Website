// ============================================================
// 📝 EDITABLE CONFIG FILE
// ============================================================
// Change any values below to update the website content.
// This is the single source of truth for all editable content.
// ============================================================

export const SITE_CONFIG = {
  // ─── GENERAL ───────────────────────────────────────────────
  siteName: "Take Over The Circuit",
  tagline: "Elevating Debate, One Argument at a Time",
  description:
    "A debate community for novices and experienced debaters alike. We prepare, we compete, we dominate.",

  // ─── FOUNDERS / COACHES ────────────────────────────────────
  founders: [
    {
      name: "Rhys",
      role: "Co-Founder & Coach",
      bio: "Experienced debater and strategist. Rhys brings competitive insight and a passion for developing new talent on the circuit.",
      emoji: "🎯",
    },
    {
      name: "Advik",
      role: "Co-Founder & Coach",
      bio: "Dedicated to building a stronger debate community. Advik focuses on research excellence and argument construction.",
      emoji: "📚",
    },
    // Add more coaches here:
    // {
    //   name: "Name",
    //   role: "Role",
    //   bio: "Bio text here",
    //   emoji: "🏆",
    // },
  ],

  // ─── CONTACT INFO ──────────────────────────────────────────
  contact: {
    email: "takeoverthecircuit@gmail.com", // ← CHANGE THIS to your email
    instagram: "", // ← Add Instagram handle if desired
    discord: "", // ← Add Discord link if desired
    // The application form will submit to this email via FormSubmit
    // First submission will require email confirmation from FormSubmit
    formSubmitEmail: "takeoverthecircuit@gmail.com", // ← CHANGE THIS
  },

  // ─── CURRENT TOPIC INFO ────────────────────────────────────
  currentTopic: {
    title: "Current Topic",
    description:
      "Topic information will be updated here when a new topic is released. Check back for the latest debate topics and prep resources.",
    // ← Edit this whenever the topic changes
    lastUpdated: "2025",
  },

  // ─── BUY-IN / ACCOUNTABILITY INFO ──────────────────────────
  buyIn: {
    title: "The Buy-In",
    description:
      "Access to our Dropbox, superior prep materials, and community resources requires a buy-in. This isn't about money — it's about commitment.",
    requirements: [
      "Produce and submit original prep files (briefs, evidence, cases)",
      "Demonstrate consistent effort and engagement",
      "Contribute to the community's collective knowledge base",
      "Stay accountable to your debate goals",
    ],
    benefits: [
      "Full access to the community Dropbox with extensive prep archives",
      "Superior prep materials curated by experienced debaters",
      "Collaborative research and file-sharing with top debaters",
      "Priority access to coaching sessions and workshops",
    ],
  },

  // ─── NOVICE PROGRAM INFO ───────────────────────────────────
  noviceProgram: {
    title: "Novice Program",
    description:
      "New to debate? We've got you covered. Our novice program provides structured prep, coaching, and mentorship to help you hit the circuit with confidence.",
    offerings: [
      "Tailored novice prep packets and research guides",
      "One-on-one coaching sessions with founders",
      "Practice rounds with constructive feedback",
      "Step-by-step guidance on argument construction",
      "Access to a supportive community of fellow novices",
    ],
  },

  // ─── APPLICATION QUESTIONS ─────────────────────────────────
  applicationQuestions: [
    "What is your full name?",
    "What is your email address?",
    "What school/organization are you affiliated with?",
    "How many years of debate experience do you have?",
    "What debate format(s) do you compete in? (e.g., LD, PF, Policy, Congress, WSD, etc.)",
    "What is your experience level? (Novice / JV / Varsity / Open)",
    "Briefly describe your debate background and any notable achievements.",
    "What are you hoping to get out of this community?",
    "What specific areas of debate do you want to improve? (e.g., cross-x, evidence comparison, case writing, etc.)",
    "Are you willing to contribute prep files as part of the buy-in? (Yes / No)",
    "Anything else you'd like us to know?",
  ],
};
