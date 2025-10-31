export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-[#121212] text-[#C0C0C0] relative overflow-hidden"
    >
      {/* Glowing Gradient Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF]/10 via-transparent to-[#00FFB2]/10 blur-3xl opacity-50 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#00FFB2]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#00FFB2] mx-auto md:mx-0 rounded-full mb-4 animate-pulse"></div>

          <p className="text-lg text-[#C0C0C0]/90 leading-relaxed">
            I'm a data scientist passionate about turning raw data into
            meaningful insights. My expertise spans{" "}
            <span className="text-[#00FFB2] font-semibold">
              Python, Pandas, NumPy, SQL, and TensorFlow
            </span>
            . I enjoy building intelligent systems and interactive dashboards
            that help businesses make smarter, data-driven decisions.
          </p>

          <p className="text-lg text-[#C0C0C0]/80">
            With a keen eye for patterns and performance, I focus on crafting
            solutions that combine{" "}
            <span className="text-[#007BFF] font-semibold">
              analytical precision
            </span>{" "}
            and{" "}
            <span className="text-[#00FFB2] font-semibold">
              creative innovation
            </span>
            . Whether it’s predictive modeling or AI automation — I bring data
            to life.
          </p>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block bg-[#007BFF] text-white px-8 py-3 rounded-2xl font-semibold hover:opacity-90 transition shadow-[0_0_15px_#007BFF80]"
            >
              Explore My Work
            </a>
          </div>
        </div>

        {/* Illustration / Visual Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#007BFF]/30 to-[#00FFB2]/20 rounded-full blur-3xl animate-pulse"></div>

            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-56 h-56 md:w-80 md:h-80"
            >
              <circle cx="100" cy="100" r="80" fill="none" stroke="#007BFF" strokeWidth="2" opacity="0.2" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#00FFB2" strokeWidth="2" opacity="0.3" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#C0C0C0" strokeWidth="2" opacity="0.4" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="#007BFF" strokeWidth="3" opacity="0.6" />
              <circle
                cx="100"
                cy="30"
                r="6"
                fill="#00FFB2"
                className="animate-bounce"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
