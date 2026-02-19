import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div className="relative group">
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-[#2B2B2B] dark:text-gray-300 mb-1.5 tracking-wide"
    >
      {label} {required && <span className="text-[#004B93]">*</span>}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 rounded-lg border border-[#d9e2ec] dark:border-neutral-600 bg-white dark:bg-neutral-800 text-[#2B2B2B] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#004B93] transition-all duration-300 text-sm shadow-sm"
    />
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "DPF System Support",
    "EGR System Solutions",
    "AdBlue / SCR Assistance",
    "ECU & Sensor Diagnostics",
    "Diagnostic",
    "Servicing & Repairs",
    "Key Cutting",
  ];

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });

          // Remove success message after 4 seconds
          setTimeout(() => setSuccessMessage(""), 4000);

          // Scroll to contact section smoothly
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-neutral-900 py-20 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <p className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt /> Glasgow, United Kingdom
            </p>
            <p className="flex items-center gap-3 mb-4">
              <FaPhoneAlt /> +44 7909 445101
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope /> Tune-itscotland@hotmail.com
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-8">

            {/* Success message */}
            {successMessage && (
              <div className="bg-green-100 text-green-700 text-sm p-3 rounded-lg mb-4 text-center">
                {successMessage}
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <InputField
                  label="Full Name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <InputField
                label="Email Address"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#d9e2ec] dark:border-neutral-600 bg-white dark:bg-neutral-800 text-sm"
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#d9e2ec] dark:border-neutral-600 bg-white dark:bg-neutral-800 text-sm resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#004B93] hover:bg-[#003a73] text-white font-semibold py-3 rounded-lg transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
