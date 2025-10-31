"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Linkedin,
  Github,
  BarChart3,
  Brain,
  Database,
  Twitter,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-[#C0C0C0] flex flex-col font-sans relative overflow-hidden">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#1C1C1C] shadow-md">
        <div className="text-2xl font-bold text-[#00FFB2]">Fahad Oketch</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="#about" className="hover:text-[#00FFB2] transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-[#00FFB2] transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-[#00FFB2] transition">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-[#00FFB2] transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#C0C0C0]"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="flex flex-col items-center bg-[#1C1C1C] shadow-md md:hidden py-4 space-y-3">
          <Link href="#about" className="hover:text-[#00FFB2] transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-[#00FFB2] transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-[#00FFB2] transition">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-[#00FFB2] transition">
            Contact
          </Link>
        </nav>
      )}

      {/* Hero Section */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-8 md:px-20 gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-[#007BFF] drop-shadow-[0_0_5px_#007BFF]">
              Fahad Oketch
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#00FFB2]">
            Data Scientist & AI Enthusiast
          </h2>
          <p className="text-lg text-[#C0C0C0]/90 mb-6">
            I turn complex data into clear insights using Python, AI, and
            Machine Learning. Passionate about building intelligent systems that
            power innovation.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="#projects"
              className="bg-[#007BFF] text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition shadow-[0_0_15px_#007BFF80]"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-[#00FFB2] text-[#00FFB2] px-6 py-3 rounded-2xl font-semibold hover:bg-[#00FFB2] hover:text-[#121212] transition shadow-[0_0_15px_#00FFB280]"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Data Science Illustration */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center animate-fadeIn">
          <div className="absolute w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-[#007BFF]/20 to-[#00FFB2]/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative flex flex-col items-center gap-6 text-[#00FFB2]">
            <BarChart3 className="w-16 h-16 md:w-20 md:h-20 animate-bounce text-[#007BFF]" />
            <Brain className="w-14 h-14 md:w-16 md:h-16 animate-spin-slow text-[#00FFB2]" />
            <Database className="w-12 h-12 md:w-14 md:h-14 animate-pulse text-[#C0C0C0]" />
          </div>
        </div>
      </main>

      {/* ✅ Skills Section */}
      <section id="skills" className="bg-[#1C1C1C] py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00FFB2] mb-8">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {[
            "Python",
            "Machine Learning",
            "Data Visualization",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Matplotlib",
            "Plotly",
            "SQL",
            "Flask",
            "React",
            "AWS",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-[#007BFF]/10 text-[#C0C0C0] border border-[#007BFF]/40 rounded-full text-sm md:text-base font-medium hover:bg-[#007BFF]/20 hover:scale-105 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Floating Social Icons */}
      <div className="fixed right-6 bottom-8 flex flex-col gap-4 z-50">
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="bg-[#1C1C1C] p-3 rounded-full shadow-lg hover:bg-[#007BFF] transition-all duration-300 group"
        >
          <Linkedin className="w-5 h-5 text-[#C0C0C0] group-hover:text-white" />
        </Link>

        <Link
          href="https://github.com"
          target="_blank"
          className="bg-[#1C1C1C] p-3 rounded-full shadow-lg hover:bg-[#00FFB2] transition-all duration-300 group"
        >
          <Github className="w-5 h-5 text-[#C0C0C0] group-hover:text-[#121212]" />
        </Link>

        <Link
          href="https://wa.me/254700000000"
          target="_blank"
          className="bg-[#1C1C1C] p-3 rounded-full shadow-lg hover:bg-[#25D366] transition-all duration-300 group"
        >
          <MessageCircle className="w-5 h-5 text-[#C0C0C0] group-hover:text-white" />
        </Link>

        <Link
          href="https://twitter.com"
          target="_blank"
          className="bg-[#1C1C1C] p-3 rounded-full shadow-lg hover:bg-[#007BFF] transition-all duration-300 group"
        >
          <Twitter className="w-5 h-5 text-[#C0C0C0] group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
}
