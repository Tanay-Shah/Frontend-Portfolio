// About.jsx (Tailwind Version)
// Fully Tailwind-based About Page — no CSS file needed.
// Drop directly into your React project after installing Tailwind.

import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const profile = {
  name: "Tanay Shah",
  title: "Software Engineer Analyst @ Accenture",
  location: "Pune, India",
  email: "tanay.shah2558@gmail.com",
  github: "https://github.com/Tanay-Shah",
  linkedin: "https://www.linkedin.com/in/tanay001",
  resume: "/Tanay_Resume.pdf", // Update your resume path
  summary: `Results-oriented Software Engineer with experience in full-stack development using React, Next.js, and MERN stack. Passionate about building scalable UIs, reusable components, and integrating AI workflows to deliver production-ready features.`,
  skills: [
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Next.js",
    "HTML/CSS",
    "Redux",
    "Express.js",
    "REST APIs",
    "Unit Testing",
    "Tailwind",
    "Supabase",
    "Agentic AI",
  ],
  experience: [
    {
      company: "Accenture",
      role: "Software Engineer Analyst",
      range: "Apr 2024 – Present",
      bullets: [
        "Built data-driven dashboards using ReactJS to enhance client decision-making.",
        "Integrated AI agents using MCP servers to enable real-time data access and tools.",
        "Created an AI-driven Figma-to-code workflow allowing agents to generate UI code automatically.",
        "Optimized performance using Redux and Context API for complex state management.",
        "Engineered a job search engine aggregating 20,000+ live job listings from multiple APIs.",
        "Created a reusable React component library reducing development time by ~20%.",
        "Integrated and consumed RESTful APIs for building scalable, data-rich applications.",
        "Developed UI applications used by over 90,000 Bank of America employees.",
        "Improved stability with robust error handling, reducing production bugs by 30%.",
        "Collaborated with client and dev teams to deliver seamless features in an Agile workflow.",
      ],
    },
  ],
  certifications:['Oracle Cloud Infrastructure 2024 Generative Al Certified Professional',
      'Microsoft Azure Fundamentals',
      'Problem Solving certificate: Hacker Rank'
  ],
  projects: [
    {
      name: "Full Stack Blog Post Application",
      tech: "React | Express | MongoDB | Tailwind",
      link: "https://github.com/Tanay-Shah/FullStack-BlogPost-Application",
    },
    {
      name: "AI Finance Platform (welth.ai)",
      tech: "Next.js | Supabase | React | Express | Gemini Api | Tailwind | Clerk",
      link: "https://github.com/Tanay-Shah/welth.ai",
    },
  ],
};

export default function About() {
  return (
    <section className="w-full min-h-screen bg-slate-950 flex justify-center px-4 py-12">
      <div className="w-full max-w-7xl bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-xl p-6 shadow-2xl">
        {/* HEADER */}
        <header className="flex gap-6 items-center mb-6">
          <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-blue-400/20 to-green-300/20 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 to-green-300" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-100">
              {profile.name}
            </h1>
            <p className="text-slate-400 flex gap-2 mt-1">
              {profile.title} —{" "}
              <span className="text-green-300">{profile.location}</span>
            </p>
            <p className="text-slate-300 max-w-1xl mt-3 leading-relaxed">
              {profile.summary}
            </p>

            <div className="flex gap-4 mt-4 items-center">
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-400 hover:text-blue-400 text-xl"
              >
                <FaEnvelope />
              </a>

              <a
                href={profile.github}
                target="_blank"
                className="text-slate-400 hover:text-white text-xl"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                className="text-slate-400 hover:text-blue-500 text-xl"
              >
                <FaLinkedin />
              </a>

              <a
                href={profile.resume}
                download
                className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-green-300 text-black font-semibold px-4 py-2 rounded-lg shadow-lg hover:opacity-90"
              >
                <FaDownload /> Resume
              </a>
            </div>
          </div>
        </header>

        {/* GRID */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* SKILLS */}
          <section className="bg-white/5 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-100">Key Skills</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {profile.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 border border-white/10 text-slate-200 animate-pulse"
                >
                  {s}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mt-5">Certifications</h3>

  <ul className="flex flex-col gap-2 mt-2">
    {profile.certifications.map((c, idx) => (
      <li
        key={idx}
        className="flex items-center gap-2 text-slate-300 text-sm bg-white/5 border border-white/10 px-3 py-2 rounded-lg"
      >
        {/* small glowing bullet dot */}
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-green-300 shadow"></span>
        {c}
      </li>
    ))}
  </ul>
          </section>

          {/* EXPERIENCE */}
          <section className="bg-white/5 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-100">Experience</h3>
            <ul className="mt-3 space-y-4">
              {profile.experience.map((exp, i) => (
                <li key={i}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-slate-200">{exp.role}</p>
                      <p className="text-slate-400 text-sm">@ {exp.company}</p>
                    </div>
                    <span className="text-slate-500 text-xs">{exp.range}</span>
                  </div>
                  <ul className="list-disc ml-5 mt-2 text-slate-400 text-sm space-y-1">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          {/* PROJECTS */}
          <section className="bg-white/5 p-4 rounded-lg md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-100">
              Selected Projects
            </h3>
            <div className="mt-3 space-y-3">
              {profile.projects.map((p) => (
                <a
                  key={p.name}
                  href={p.link}
                  target="_blank"
                  className="flex justify-between items-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                >
                  <div>
                    <strong className="text-slate-100">{p.name}</strong>
                    <p className="text-slate-400 text-sm mt-1">{p.tech}</p>
                  </div>
                  <span className="text-blue-400 text-xl">→</span>
                </a>
              ))}
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="text-center mt-6 text-slate-500 text-sm pt-4 border-t border-white/5">
          Open to opportunities • Available for interviews • Fluent in Hindi &
          English
        </footer>
      </div>
    </section>
  );
}
