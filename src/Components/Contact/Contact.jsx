// src/components/Contact.jsx
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

const profile = {
  name: "Tanay Shah",
  location: "Pune, India",
  email: "tanay.shah2558@gmail.com",
  phone: "+91 83570 70065",
  github: "https://github.com/Tanay-Shah",
  linkedin: "https://www.linkedin.com/in/tanay001",
  resume: "/Tanay_Resume.pdf", // update to your deployed resume path
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple client-side feedback (replace with your API endpoint if needed)
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      // reset form
      setForm({ name: "", email: "", phone: "", message: "" });
      // keep feedback short
      setTimeout(() => setStatus(null), 3000);
    }, 800);
  }

  return (
    <section className="w-full min-h-screen bg-slate-950 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-5xl bg-slate-900/40 border border-white/5 backdrop-blur rounded-xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left card: contact details */}
          <div className="p-6 rounded-lg bg-slate-900/60 border border-white/3">
            <h2 className="text-3xl font-extrabold text-slate-100">Get in touch</h2>
            <p className="text-slate-300 mt-3">
              I'm open to opportunities and interviews. Fill in the form or use the contact details below — I typically reply within 24–48 hours.
            </p>

            <div className="mt-6 space-y-4 text-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-blue-400 text-xl mt-1"><FaMapMarkerAlt /></span>
                <div>
                  <div className="text-sm font-semibold">Location</div>
                  <div className="text-slate-300 text-sm">{profile.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-green-300 text-xl mt-1"><FaPhone /></span>
                <div>
                  <div className="text-sm font-semibold">Phone</div>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="text-slate-300 text-sm hover:text-green-300"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-orange-300 text-xl mt-1"><FaEnvelope /></span>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-slate-300 text-sm hover:text-orange-300"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-white text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-blue-400 text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={profile.resume}
                  download
                  className="ml-auto inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-green-300 text-black px-4 py-2 rounded-lg font-semibold shadow-lg hover:opacity-95"
                >
                  <FaDownload /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right card: contact form */}
          <div className="p-6 rounded-lg bg-slate-900/60 border border-white/3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="text-slate-300 text-sm font-medium">Full name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-blue-400 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-slate-300 text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-orange-300 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-slate-300 text-sm font-medium">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-green-300 outline-none"
                  placeholder="+91 8XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-slate-300 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-indigo-300 outline-none"
                  placeholder="Tell me about your project / role / opportunity..."
                />
              </div>

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-400 to-green-300 text-black font-semibold rounded-lg shadow hover:brightness-95 transition"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {status === "sent" && (
                  <span className="text-sm text-green-300">Thanks — I’ll get back to you soon.</span>
                )}
              </div>

              <p className="text-xs text-slate-500 mt-4">
                By contacting me you agree to be replied for professional opportunities. I typically respond within 24–48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}