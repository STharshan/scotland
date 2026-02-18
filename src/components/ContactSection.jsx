import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const InputField = ({ label, id, type = 'text', placeholder, value, onChange, required }) => (
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
      className="w-full px-4 py-3 rounded-lg border border-[#d9e2ec] dark:border-neutral-600 bg-white dark:bg-neutral-800 text-[#2B2B2B] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#004B93] focus:border-transparent transition-all duration-300 text-sm shadow-sm group-hover:border-[#004B93]/50"
    />
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = [
    'DPF System Support',
    'EGR System Solutions',
    'AdBlue / SCR Assistance',
    'ECU & Sensor Diagnostics',
    'Diagnostic',
    'Servicing & Repairs',
    'Key Cutting',
  ];

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const message =
      `Hello Tune-it Scotland! \n\n` +
      `*New Enquiry from Website*\n` +
      `─────────────────────\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.service}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:*${formData.message}` +
      `─────────────────────`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/447909445101?text=${encoded}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', service: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative scroll-m-10 bg-gray-50 dark:bg-neutral-900 py-20 overflow-hidden transition-colors duration-500"
    >
      {/* ── Decorative Glows ── */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#004B93]/10 dark:bg-[#005BBB]/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-[#004B93] font-semibold tracking-widest text-sm uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white">
            Contact Us
          </h2>
          <div className="mt-4 w-24 h-[3px] bg-[#004B93] dark:bg-[#005BBB] mx-auto rounded-full" />
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ────── LEFT: Info + Map ────── */}
          <div data-aos="fade-right" className="flex flex-col gap-8">

            {/* Info Card */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md border border-[#d9e2ec] dark:border-neutral-700 p-8">
              <div className="flex items-center gap-3 mb-2">
                <FaMapMarkerAlt className="text-[#004B93] text-2xl flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#2B2B2B] dark:text-white">Find Us</h3>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.app.goo.gl/bLrYgG5rVCLcNCe46"
                className="text-[#555] dark:text-gray-400 text-sm leading-relaxed hover:text-[#004B93] hover:underline underline-offset-2 transition block mb-6"
              >
                Tune-it Scotland, Unit B8, 15 Carmyle Ave, Glasgow G32 8HL, United Kingdom
              </a>

              <div className="space-y-4 text-sm">
                <a
                  href="tel:+447909445101"
                  className="flex items-center gap-4 text-[#2B2B2B] dark:text-gray-300 hover:text-[#004B93] transition group"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#004B93]/10 group-hover:bg-[#004B93]/20 transition flex-shrink-0">
                    <FaPhoneAlt className="text-[#004B93] text-base" />
                  </span>
                  <span className="font-medium">+44 7909 445101</span>
                </a>

                <a
                  href="mailto:Tune-itscotland@hotmail.com"
                  className="flex items-center gap-4 text-[#2B2B2B] dark:text-gray-300 hover:text-[#004B93] transition group"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#004B93]/10 group-hover:bg-[#004B93]/20 transition flex-shrink-0">
                    <FaEnvelope className="text-[#004B93] text-base" />
                  </span>
                  <span className="font-medium">Tune-itscotland@hotmail.com</span>
                </a>
              </div>

              {/* WhatsApp */}
              <div className="mt-8">
                <a
                  href="https://wa.me/447909445101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 text-sm"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#d9e2ec] dark:border-neutral-700">
              <iframe
                title="Tune-it Scotland Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89412.54126573337!2d-4.2427321!3d55.8405334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48886bebbb590ac5%3A0x3e1fefe261cd55b0!2sUnit%20B8%2C%2015%20Carmyle%20Ave%2C%20Glasgow%20G32%208HL%2C%20United%20Kingdom!5e0!3m2!1sen!2slk!4v1696867764563!5m2!1sen!2slk"
                width="100%"
                height="320"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[390px] dark:invert-[90%] dark:brightness-90"
              />
            </div>
          </div>

          {/* ────── RIGHT: Contact Form ────── */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md border border-[#d9e2ec] dark:border-neutral-700 p-8 md:p-10"
          >
            {submitted ? (
              /* ── Success State ── */
              <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                  <FaWhatsapp className="text-[#25D366] text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#2B2B2B] dark:text-white">
                  Opening WhatsApp…
                </h3>
                <p className="text-[#555] dark:text-gray-400 text-sm max-w-xs leading-relaxed">
                  Your message has been prepared and WhatsApp should have opened in a new tab. If it didn't,{' '}
                  <a
                    href="https://wa.me/447909445101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-semibold hover:underline underline-offset-2"
                  >
                    click here
                  </a>{' '}
                  to open it manually.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-2 text-sm text-[#004B93] font-semibold hover:underline underline-offset-2 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                {/* Form header with WhatsApp badge */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-2xl font-bold text-[#2B2B2B] dark:text-white">
                    Send a Message
                  </h3>
                  <span className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#25D366]/10 text-[#1aab52] dark:text-[#25D366] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#25D366]/20">
                    <FaWhatsapp className="text-sm" />
                    via WhatsApp
                  </span>
                </div>
                <p className="text-[#555] dark:text-gray-400 text-sm mb-8">
                  Fill out the form — we'll open WhatsApp with your details ready to send.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Phone row */}
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
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <InputField
                    label="Email Address"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  {/* Service Dropdown */}
                  <div className="relative group">
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-[#2B2B2B] dark:text-gray-300 mb-1.5 tracking-wide"
                    >
                      Service Required <span className="text-[#004B93]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none px-4 py-3 pr-10 rounded-lg border border-[#d9e2ec] dark:border-neutral-600 bg-white dark:bg-neutral-800 text-[#2B2B2B] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#004B93] focus:border-transparent transition-all duration-300 text-sm shadow-sm group-hover:border-[#004B93]/50 cursor-pointer"
                        style={{ colorScheme: 'light dark' }}
                      >
                        <option value="" disabled>Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <svg className="w-4 h-4 text-[#004B93]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#2B2B2B] dark:text-gray-300 mb-1.5 tracking-wide"
                    >
                      Message <span className="text-[#004B93]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your vehicle, the service you need, or any questions you have..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#d9e2ec] dark:border-neutral-600 bg-white dark:bg-neutral-800 text-[#2B2B2B] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#004B93] focus:border-transparent transition-all duration-300 text-sm shadow-sm resize-none group-hover:border-[#004B93]/50"
                    />
                  </div>

                  {/* Submit — WhatsApp green */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Opening WhatsApp…
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="text-lg" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-1">
                    By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;