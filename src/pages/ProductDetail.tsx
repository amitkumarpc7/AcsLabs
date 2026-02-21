import { useNavigate, useParams } from "react-router-dom";
import { useSEO } from "../hooks/useSeo";
import { ChevronLeft } from "lucide-react";
import { useProductss } from "../hooks/useProducts"; // Ensure path is correct

export const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Use the combined list from the hook
  const { allProducts, loading } = useProductss();

  // Find the product in the combined array
  const product = allProducts.find((p) => p.slug === slug);

  useSEO(product?.name || "Details", product?.shortDescription || "");

  // Only show loading if we have no products at all yet
  if (loading && allProducts.length === 0) {
    return (
      <div className="pt-40 text-center flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-red-600"></div>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
          Syncing Catalog...
        </p>
      </div>
    );
  }

  if (!product)
    return (
      <div className="pt-40 text-center font-bold text-slate-400 uppercase tracking-tighter">
        Product Not Found
      </div>
    );

  return (
    <div className="pt-32 container mx-auto px-4 pb-20">
      <div className="mb-8">
        <button
          onClick={() => navigate("/catalog")}
          className="flex items-center gap-2 text-slate-500 hover:text-industrial-primary transition-colors font-bold uppercase text-xs tracking-widest group"
        >
          <div className="p-2 rounded-full bg-slate-100 group-hover:bg-industrial-primary group-hover:text-white transition-all">
            <ChevronLeft size={18} />
          </div>
          Back to Catalog
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative group">
          <img
            src={product.image}
            className="rounded-2xl w-full shadow-2xl border border-slate-100 object-contain aspect-square"
            alt={product.name}
          />
          {/* Subtle badge if it's a new cloud-based product */}
          {/* {!product.id?.includes("static") && (
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">
              Cloud Sync
            </span>
          )} */}
        </div>

        <div className="space-y-6">
          <div>
            <span className="bg-red-600 text-slate-900 text-sm px-3.5 py-1.5 rounded-full font-semibold uppercase tracking-wide">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold mt-2 text-slate-900 leading-tight">
              {product.name}
            </h1>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <p className="text-slate-600 leading-relaxed text-lg">
              {product.fullDescription}
            </p>
          </div>
          <div className="bg-industrial-dark p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Request Quote</h3>
            <iframe
              src="YOUR_GOOGLE_FORM_URL"
              className="w-full h-96 bg-white rounded-xl shadow-inner border-0"
              title="quote-form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
