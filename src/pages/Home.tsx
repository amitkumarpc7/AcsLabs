import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSeo";
import { Download, ArrowRight } from "lucide-react";

export const Home = () => {
  useSEO("Home", "Premium Material Testing Instruments manufacturer.");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalogue.pdf";
    link.download = "ACSLabs-Catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-16 min-h-screen bg-industrial-dark flex items-center relative overflow-hidden">
      {/* Subtle Background Pattern for Industrial Feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 font-display uppercase tracking-tight">
          Precision <span className="text-industrial-primary">Engineering</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Providing 200+ high-precision lab instruments engineered for global
          industrial standards and uncompromising accuracy.
        </p>

        {/* Responsive Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/catalog"
            className="w-full sm:w-auto bg-industrial-primary text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-lg shadow-red-900/20"
          >
            View Catalog <ArrowRight size={20} />
          </Link>

          <button
            onClick={handleDownload}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-lg text-lg font-bold transition flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Download size={20} /> Download Catalogue
          </button>
        </div>
      </div>
    </div>
  );
};
