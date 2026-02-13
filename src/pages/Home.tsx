import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSeo";

export const Home = () => {
  useSEO("Home", "Premium Material Testing Instruments manufacturer.");
  return (
    <div className="pt-16 min-h-screen bg-industrial-dark flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl text-white font-bold mb-6 font-display uppercase">
          Precision <span className="text-industrial-primary">Engineering</span>
        </h1>
        <p className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">
          Providing 200+ high-precision lab instruments for global industrial
          standards.
        </p>
        <Link
          to="/catalog"
          className="bg-industrial-primary text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition"
        >
          View Catalog
        </Link>
      </div>
    </div>
  );
};
