"use client";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-[#C0C0C0] py-8 text-center border-t border-[#1C1C1C]">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} <span className="text-[#00FFB2] font-semibold">Fahad Oketch</span>. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4 text-[#C0C0C0]/80">
        <a href="#about" className="hover:text-[#00FFB2] transition">About</a>
        <a href="#projects" className="hover:text-[#00FFB2] transition">Projects</a>
        <a href="#contact" className="hover:text-[#00FFB2] transition">Contact</a>
      </div>
    </footer>
  );
}
