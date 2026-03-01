
import { useSEO } from "../hooks/useSeo";
import { CheckCircle, ExternalLink } from "lucide-react";

export const Certifications = () => {
  useSEO(
    "Certifications",
    "Compliance with global standards including ISO, ASTM, and IS.",
  );

  const certs = [
    {
      title: "ISO 9001:2015",
      image: "https://via.placeholder.com/400x560?text=ISO+Certificate+Image",
      body: "Quality Management System certification for manufacturing excellence and customer satisfaction.",
    },
    {
      title: "BIS Compliance",
      image: "https://via.placeholder.com/400x560?text=BIS+Certificate+Image",
      body: "Products manufactured in strict accordance with Bureau of Indian Standards (IS) requirements.",
    },
  ];

  return (
    <div className="pt-12 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display uppercase">
            Quality <span className="text-industrial-primary">Certified</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Every instrument we produce undergoes rigorous multi-stage testing
            to meet international benchmarks.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-5xl mx-auto">
          {certs.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 flex flex-col md:flex-row"
            >
              {/* Certificate Image Preview */}
              <div className="md:w-1/3 bg-slate-200 relative group cursor-zoom-in">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>

              {/* Text Details */}
              <div className="md:w-2/3 p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <CheckCircle size={12} /> Active Certification
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">
                  {cert.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {cert.body}
                </p>
                <button className="w-fit text-industrial-primary font-bold uppercase text-xs tracking-widest border-b-2 border-industrial-primary pb-1 hover:text-industrial-dark hover:border-industrial-dark transition-colors">
                  View Full Document
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};
