import React, { useState } from "react";
import { useSEO } from "../hooks/useSeo";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { StatusModal } from "../components/ui/StatusModal";

export const Contact = () => {
  // 1. State for Modal
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    message?: string;
  }>({
    isOpen: false,
    type: "success",
  });

  // 2. State for Loading (optional but professional)
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO(
    "Contact Us",
    "Get in touch with our technical team for quotes, support, or site visits.",
  );

  // 3. Handle Form Submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check for internet connection
    if (!navigator.onLine) {
      setModalState({
        isOpen: true,
        type: "error",
        message: "No internet connection detected. Please check your network.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate an API call (e.g., to a backend or Google Form endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On Success
      setModalState({
        isOpen: true,
        type: "success",
        message:
          "Your enquiry has been sent successfully. We will contact you soon!",
      });

      // Optionally reset the form here
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      // On Failure
      setModalState({
        isOpen: true,
        type: "error",
        message: "We encountered a server error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-12 min-h-screen bg-white">
      {/* 4. The Modal Component */}
      <StatusModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        message={modalState.message}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display uppercase">
            Contact <span className="text-industrial-primary">Our Team</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Have questions about our testing instruments? Our engineers are
            ready to provide technical assistance.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information & Map */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-industrial-primary">
                    <Phone size={24} />
                    <h3 className="font-bold text-slate-900">Call Us</h3>
                  </div>
                  <p className="text-slate-600">
                    +91 98765 43210
                    <br />
                    +91 22 1234 5678
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-industrial-primary">
                    <Mail size={24} />
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                  </div>
                  <p className="text-slate-600">
                    sales@acslabs.com
                    <br />
                    support@acslabs.com
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-industrial-primary">
                    <Clock size={24} />
                    <h3 className="font-bold text-slate-900">Mon to Sat</h3>
                  </div>
                  <p className="text-slate-600">9:30am to 6:00pm</p>
                </div>
              </div>

              {/* Map Integration */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-industrial-primary">
                  <MapPin size={24} />
                  <h3 className="font-bold text-slate-900">
                    Visit Our Factory
                  </h3>
                </div>
                <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.058368940082!2d72.84439167503837!3d19.06115395243884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c923364f9f3f%3A0x6734d8d9b9308c1d!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* General Enquiry Form */}
            <div className="bg-industrial-dark p-8 md:p-12 rounded-3xl text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 font-display">
                Send a Message
              </h2>
              {/* Added onSubmit handler */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-industrial-primary outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-industrial-primary outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">
                    Subject
                  </label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-industrial-primary outline-none transition">
                    <option>Product Quotation</option>
                    <option>Technical Support</option>
                    <option>Partnership Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:border-industrial-primary outline-none transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-4 text-lg font-bold flex items-center justify-center gap-3 transition ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <Send size={20} />
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
