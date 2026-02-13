import React, { useState } from "react";
import { useSEO } from "../hooks/useSeo";
import { StatusModal } from "../components/ui/StatusModal";
import { FileText, Send, ClipboardList } from "lucide-react";

export const GetQuote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
  });

  useSEO(
    "Request Quote",
    "Request a formal quotation for our material testing instruments.",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/YOUR_UNIQUE_ID", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setModalState({ isOpen: true, type: "success" });
        (e.target as HTMLFormElement).reset();
      } else {
        setModalState({ isOpen: true, type: "error" });
      }
    } catch {
      setModalState({ isOpen: true, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <StatusModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-industrial-dark p-8 md:p-12 text-white text-center">
            <ClipboardList
              className="mx-auto mb-4 text-industrial-primary"
              size={48}
            />
            <h1 className="text-4xl font-bold font-display uppercase tracking-tight">
              Request a <span className="text-industrial-primary">Quote</span>
            </h1>
            <p className="text-slate-400 mt-2">
              Provide your details and requirements for a formal commercial
              proposal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">
                  Contact Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-industrial-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">
                  Organization / Company
                </label>
                <input
                  name="company"
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-industrial-primary outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">
                  Email Address
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-industrial-primary outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase">
                  Phone Number
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-industrial-primary outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase">
                Instrument(s) Required
              </label>
              <textarea
                name="requirements"
                required
                rows={4}
                placeholder="List the machines and quantities you are interested in..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-industrial-primary outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg font-bold flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                "Processing..."
              ) : (
                <>
                  <Send size={20} /> Submit Quotation Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
