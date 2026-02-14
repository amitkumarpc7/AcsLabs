import { useParams } from "react-router-dom";
import { useSEO } from "../hooks/useSeo";
import { useProductss } from "../hooks/useProducts"; // Ensure path is correct

export const ProductDetail = () => {
  const { slug } = useParams();

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
            <span className="text-red-600 font-bold uppercase text-xs tracking-widest">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold mt-2 text-slate-900 leading-tight">
              {product.name}
            </h1>
          </div>

          <p className="text-slate-600 leading-relaxed text-lg">
            {product.fullDescription}
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold mb-4 uppercase text-sm tracking-wider text-slate-700">
              Technical Specifications
            </h3>
            {product.specifications &&
              Object.entries(product.specifications).map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between border-b border-slate-200 py-3 last:border-0"
                >
                  <span className="text-slate-500 font-medium">{k}</span>
                  <span className="font-bold text-slate-900">
                    {v as string}
                  </span>
                </div>
              ))}
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-2">
              Request an Official Quote
            </h3>
            <p className="text-slate-400 text-sm mb-6 uppercase tracking-tight font-semibold">
              ACSLabs Industrial Equipment Services
            </p>
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
