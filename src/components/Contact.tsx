import { useState } from "react";
import { motion } from "framer-motion";
import girlphone from "../assets/girlphone.png"
// import contactimg from "../assets/contactimg.png"
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://bostontechindia.in/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
        ...formData,
        
        datafrom: "Boston Main Website",   // ✅ added here
      }),
      });

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20 relative"
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#0B3C8A]/10 to-[#14A7B8]/10 border border-[#1E5DB3]/20 rounded-full mb-8 backdrop-blur-sm">
          <div className="relative">
            <div className="w-3 h-3 bg-[#14A7B8] rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-[#2EC4C7] rounded-full blur-md opacity-60"></div>
          </div>
          <span className="text-sm font-semibold tracking-wide text-[#0B3C8A] uppercase">
            Get In Touch
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0B3C8A]">
          Contact {" "}
          <span className="bg-gradient-to-r from-[#0B3C8A] via-[#1E5DB3] to-[#14A7B8] bg-clip-text text-transparent">
            Our Experts
          </span>
        </h2>

        {/* Accent Line */}
        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#1E5DB3] to-[#2EC4C7]"></div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Tell us about your automation goals and infrastructure challenges. Our team is ready to help you build something extraordinary.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        

        {/* LEFT SIDE - IMAGE */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#1AA0C8] opacity-10 blur-3xl rounded-full"></div>
          
          <img
            // src={"https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg"}  
            // src={contactimg}  
            src={girlphone}  
            // src={"https://images.pexels.com/photos/7709301/pexels-photo-7709301.jpeg"}
            alt="Contact Boston Tech India"
            className="relative z-10 rounded-3xl shadow-2xl"
          />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            {success ? (
              <div className="text-center py-6">
                <h3 className="text-2xl font-semibold text-[#0E4FA3]">
                  ✅ Message Sent!
                </h3>
                <p className="mt-2 text-gray-600">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                />
<input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  required
  onChange={(e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // remove non-numbers
    setFormData({ ...formData, phone: value });
  }}
  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
/>

                <textarea
                  name="message"
                //   rows="4"
                  placeholder="Tell us about your requirements..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E73BE]"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0E4FA3] via-[#1E73BE] to-[#17B6A6] hover:opacity-90 transition"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
