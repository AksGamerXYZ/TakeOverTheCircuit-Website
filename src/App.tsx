import { useState } from "react";
import { SITE_CONFIG } from "./config";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* ─── NAVBAR ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-bold text-lg text-white">
                {SITE_CONFIG.siteName}
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollTo("about")} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollTo("buy-in")} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                The Buy-In
              </button>
              <button onClick={() => scrollTo("novices")} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Novices
              </button>
              <button onClick={() => scrollTo("coaches")} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Coaches
              </button>
              <button onClick={() => scrollTo("topic")} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Topic
              </button>
              <button
                onClick={() => scrollTo("apply")}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {["about", "buy-in", "novices", "coaches", "topic", "apply"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors capitalize"
                >
                  {section === "buy-in" ? "The Buy-In" : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ─── HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/50 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />

        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 bg-indigo-900/30 border border-indigo-700/40 rounded-full px-4 py-2 text-sm text-indigo-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Community Active — Accepting New Members
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            TAKE OVER
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              THE CIRCUIT
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            {SITE_CONFIG.tagline}
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            {SITE_CONFIG.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("apply")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
            >
              Apply to Join →
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="border border-gray-600 hover:border-gray-400 text-gray-200 px-8 py-4 rounded-xl text-lg font-medium transition-all hover:bg-gray-800/50"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What We Are
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Take Over The Circuit</strong> is more than a debate prep group — it's a community built on accountability, collaboration, and excellence.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether you're a novice stepping into your first round or a seasoned competitor chasing bids, we provide the resources, coaching, and network you need to level up.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded by debaters who believe the circuit should be accessible and that everyone deserves quality prep, we're building something different. No gatekeeping — just commitment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🤝", label: "Community First", desc: "Built by debaters, for debaters" },
                { icon: "📊", label: "Accountability", desc: "Everyone contributes, everyone grows" },
                { icon: "🎓", label: "Coaching", desc: "Mentorship from experienced competitors" },
                { icon: "📁", label: "Shared Resources", desc: "Collective prep that benefits all" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-indigo-600/50 transition-colors">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE BUY-IN ─────────────────────────────────────── */}
      <section id="buy-in" className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {SITE_CONFIG.buyIn.title}
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {SITE_CONFIG.buyIn.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-red-500/10 text-red-400 p-2 rounded-lg">📋</span>
                What's Required
              </h3>
              <ul className="space-y-4">
                {SITE_CONFIG.buyIn.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 bg-indigo-600/20 border border-indigo-500/40 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-400 text-xs font-bold">{i + 1}</span>
                    </span>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="bg-green-500/10 text-green-400 p-2 rounded-lg">🎁</span>
                What You Get
              </h3>
              <ul className="space-y-4">
                {SITE_CONFIG.buyIn.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-green-400 flex-shrink-0">✓</span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-indigo-900/20 border border-indigo-700/30 rounded-xl px-6 py-4">
              <span className="text-2xl">💡</span>
              <p className="text-indigo-200 text-left">
                <strong>The point:</strong> Everyone puts in work. No freeloaders. This keeps our community strong and our prep sharp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOVICE PROGRAM ─────────────────────────────────── */}
      <section id="novices" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {SITE_CONFIG.noviceProgram.title}
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {SITE_CONFIG.noviceProgram.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_CONFIG.noviceProgram.offerings.map((offering, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-indigo-600/50 transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-indigo-400 font-bold text-lg">{i + 1}</span>
                </div>
                <p className="text-gray-200 font-medium">{offering}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-700/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              New to debate? Start here.
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our founders personally work with novices to build strong fundamentals. No question is too basic — we all started somewhere.
            </p>
            <button
              onClick={() => scrollTo("apply")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply as a Novice →
            </button>
          </div>
        </div>
      </section>

      {/* ─── COACHES ────────────────────────────────────────── */}
      <section id="coaches" className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Meet the Founders
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The people behind Take Over The Circuit, dedicated to building a stronger debate community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SITE_CONFIG.founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-indigo-600/50 transition-colors"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl">
                  {founder.emoji}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-indigo-400 font-medium mb-4">{founder.role}</p>
                <p className="text-gray-400 leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CURRENT TOPIC ──────────────────────────────────── */}
      <section id="topic" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Current Topic
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                Last Updated: {SITE_CONFIG.currentTopic.lastUpdated}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {SITE_CONFIG.currentTopic.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {SITE_CONFIG.currentTopic.description}
            </p>
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                💡 Topic information is updated here as new topics are released. Check back regularly for the latest prep resources and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ───────────────────────────────── */}
      <section id="apply" className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Apply to Join
            </h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to take your debate to the next level? Fill out the application below and we'll get back to you.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-900/20 border border-green-700/40 rounded-2xl p-12 text-center">
              <span className="text-6xl mb-6 block">✅</span>
              <h3 className="text-2xl font-bold text-green-300 mb-3">
                Application Submitted!
              </h3>
              <p className="text-gray-300">
                Thanks for applying! We'll review your application and get back to you soon. Get ready to take over the circuit.
              </p>
            </div>
          ) : (
            <ApplicationForm
              onSubmit={() => setFormSubmitted(true)}
            />
          )}
        </div>
      </section>

      {/* ─── CONTACT ────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Questions? Want to learn more? Reach out to us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-3 bg-gray-900 border border-gray-800 hover:border-indigo-600/50 rounded-xl px-6 py-4 transition-colors"
            >
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className="text-sm text-gray-400">Email us</p>
                <p className="text-white font-medium">{SITE_CONFIG.contact.email}</p>
              </div>
            </a>

            {SITE_CONFIG.contact.instagram && (
              <a
                href={`https://instagram.com/${SITE_CONFIG.contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-900 border border-gray-800 hover:border-indigo-600/50 rounded-xl px-6 py-4 transition-colors"
              >
                <span className="text-2xl">📸</span>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="text-white font-medium">@{SITE_CONFIG.contact.instagram}</p>
                </div>
              </a>
            )}

            {SITE_CONFIG.contact.discord && (
              <a
                href={SITE_CONFIG.contact.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-900 border border-gray-800 hover:border-indigo-600/50 rounded-xl px-6 py-4 transition-colors"
              >
                <span className="text-2xl">💬</span>
                <div className="text-left">
                  <p className="text-sm text-gray-400">Discord</p>
                  <p className="text-white font-medium">Join our server</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-white">{SITE_CONFIG.siteName}</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.siteName}. Built by debaters, for debaters.
          </p>
          <div className="flex gap-4">
            <button onClick={() => scrollTo("about")} className="text-gray-400 hover:text-white text-sm transition-colors">
              About
            </button>
            <button onClick={() => scrollTo("apply")} className="text-gray-400 hover:text-white text-sm transition-colors">
              Apply
            </button>
            <button onClick={() => scrollTo("contact")} className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── APPLICATION FORM COMPONENT ─────────────────────────────
function ApplicationForm({ onSubmit }: { onSubmit: () => void }) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (index: number, value: string) => {
    setFormData((prev) => ({ ...prev, [`q${index}`]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build the email body
    const body = SITE_CONFIG.applicationQuestions
      .map((q, i) => `${q}\n→ ${formData[`q${i}`] || "Not answered"}\n`)
      .join("\n");

    const subject = `New Application - ${formData["q0"] || "Unknown"}`;

    // Use FormSubmit.co for form submission (no backend needed)
    // First time: FormSubmit will send a confirmation email to activate
    try {
      const formBody = new FormData();
      SITE_CONFIG.applicationQuestions.forEach((q, i) => {
        formBody.append(`Question ${i + 1}: ${q}`, formData[`q${i}`] || "Not answered");
      });
      formBody.append("_subject", subject);
      formBody.append("_template", "table");
      formBody.append("_captcha", "false");

      await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.contact.formSubmitEmail}`, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formBody,
      });

      onSubmit();
    } catch {
      // Fallback: open mailto
      const mailtoLink = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      onSubmit();
    }

    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-10 space-y-6">
      {SITE_CONFIG.applicationQuestions.map((question, i) => (
        <div key={i}>
          <label className="block text-sm font-medium text-gray-200 mb-2">
            <span className="text-indigo-400 mr-2">{i + 1}.</span>
            {question}
          </label>
          {question.toLowerCase().includes("briefly") ||
           question.toLowerCase().includes("what are you hoping") ||
           question.toLowerCase().includes("what specific") ||
           question.toLowerCase().includes("anything else") ? (
            <textarea
              required={i < 6}
              rows={3}
              value={formData[`q${i}`] || ""}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
              placeholder="Type your answer here..."
            />
          ) : (
            <input
              type="text"
              required={i < 6}
              value={formData[`q${i}`] || ""}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              placeholder="Type your answer here..."
            />
          )}
        </div>
      ))}

      <div className="pt-4">
        <button
          type="submit"
          disabled={sending}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] shadow-lg shadow-indigo-600/20"
        >
          {sending ? "Submitting..." : "Submit Application →"}
        </button>
        <p className="text-center text-gray-500 text-sm mt-3">
          Your application will be sent to the founders for review.
        </p>
      </div>
    </form>
  );
}

export default App;
