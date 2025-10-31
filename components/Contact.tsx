"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for reaching out! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-[#121212] text-[#C0C0C0] py-16 px-6 md:px-20 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-[#00FFB2]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Connect
      </motion.h1>
      <p className="text-center mb-10 max-w-2xl text-lg text-[#C0C0C0]">
        Have a project in mind or want to collaborate? I’d love to hear from you. Fill out the form below
        or reach out directly — let’s build something amazing together.
      </p>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Info */}
        <motion.div
          className="flex flex-col justify-center space-y-6 bg-[#1C1C1C] p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4">
            <Mail className="text-[#00FFB2]" />
            <p className="text-lg text-[#C0C0C0]">fahadoketch@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-[#00FFB2]" />
            <p className="text-lg text-[#C0C0C0]">+254 712 345 678</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-[#00FFB2]" />
            <p className="text-lg text-[#C0C0C0]">Nairobi, Kenya</p>
          </div>

          <motion.div
            className="mt-10 border-t border-gray-700 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-[#00FFB2] mb-3">Working Hours</h3>
            <p className="text-[#C0C0C0]">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-[#C0C0C0]">Saturday: 10:00 AM - 3:00 PM</p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#1C1C1C] shadow-lg rounded-2xl p-8 flex flex-col space-y-4 border border-[#1f1f1f]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-transparent border border-[#007BFF] text-[#C0C0C0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FFB2] transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-transparent border border-[#007BFF] text-[#C0C0C0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FFB2] transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-transparent border border-[#007BFF] text-[#C0C0C0] rounded-xl px-4 py-3 min-h-[130px] focus:outline-none focus:ring-2 focus:ring-[#00FFB2] transition"
          />
          <button
            type="submit"
            className="bg-[#007BFF] hover:bg-[#00FFB2] text-[#121212] font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  )
}
