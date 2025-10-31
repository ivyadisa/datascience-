"use client";

import { motion } from "framer-motion";
import { Code, BarChart3, Cpu } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Projects() {
  // 🧮 Sample Data for Charts
  const salesData = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 700 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 900 },
    { month: "May", sales: 650 },
  ];

  const clusterData = [
    { group: "A", customers: 400 },
    { group: "B", customers: 300 },
    { group: "C", customers: 200 },
    { group: "D", customers: 100 },
  ];

  const priceData = [
    { feature: "Size", importance: 40 },
    { feature: "Location", importance: 35 },
    { feature: "Condition", importance: 25 },
  ];

  const COLORS = ["#007BFF", "#00FFB2", "#C0C0C0", "#1C1C1C"];

  const projects = [
    {
      title: "🏡 Predicting House Prices",
      tech: "Python, Scikit-learn, Linear Regression",
      icon: <BarChart3 className="w-10 h-10 text-[#00FFB2]" />,
      desc: "A predictive model analyzing housing data to estimate property values using regression analysis.",
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
            <XAxis dataKey="feature" stroke="#C0C0C0" />
            <YAxis stroke="#C0C0C0" />
            <Tooltip />
            <Bar dataKey="importance" fill="#00FFB2" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "👥 Customer Segmentation",
      tech: "K-Means, Pandas, Matplotlib",
      icon: <Cpu className="w-10 h-10 text-[#007BFF]" />,
      desc: "Clustered customer data to identify purchasing patterns and tailor marketing campaigns effectively.",
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={clusterData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#00FFB2"
              dataKey="customers"
              label
            >
              {clusterData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: "📊 Sales Dashboard",
      tech: "Plotly, Flask, SQL",
      icon: <Code className="w-10 h-10 text-[#00FFB2]" />,
      desc: "An interactive analytics dashboard visualizing real-time sales performance and business trends.",
      chart: (
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
            <XAxis dataKey="month" stroke="#C0C0C0" />
            <YAxis stroke="#C0C0C0" />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#007BFF" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-8 md:px-20 bg-[#121212] text-[#C0C0C0] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 via-transparent to-[#00FFB2]/10 blur-3xl opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="relative text-center mb-12 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#00FFB2] mb-3">
          Featured Projects
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#007BFF] to-[#00FFB2] rounded-full animate-pulse"></div>
        <p className="mt-4 text-[#C0C0C0]/80 text-lg max-w-2xl mx-auto">
          A showcase of interactive, data-driven projects that bring analytics to life with AI and machine learning.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative grid md:grid-cols-3 gap-8 z-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="group bg-[#1C1C1C] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#007BFF40] border border-[#2A2A2A] hover:border-[#007BFF]/50 transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-500">
              {p.icon}
            </div>

            <h3 className="text-2xl font-bold mb-2 text-[#00FFB2] group-hover:text-[#007BFF] transition">
              {p.title}
            </h3>
            <p className="text-[#C0C0C0]/80 text-sm mb-3">{p.tech}</p>
            <p className="text-[#C0C0C0]/70 text-base mb-6">{p.desc}</p>

            {/* Chart Section */}
            <motion.div
              className="bg-[#0D0D0D] p-3 rounded-xl w-full shadow-inner hover:scale-[1.02] transition-transform duration-500"
            >
              {p.chart}
            </motion.div>

            <motion.div
              className="mt-6 w-full h-[2px] bg-gradient-to-r from-transparent via-[#007BFF] to-transparent opacity-0 group-hover:opacity-100 transition duration-700"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
