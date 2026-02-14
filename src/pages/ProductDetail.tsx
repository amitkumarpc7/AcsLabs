import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/product";
import { useSEO } from "../hooks/useSeo";
import { ChevronLeft } from "lucide-react";

export const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);
  useSEO(product?.name || "Details", product?.shortDescription || "");

  if (!product)
    return <div className="pt-40 text-center">Product Not Found</div>;

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
        <img
          src={product.image}
          className="rounded-2xl w-full"
          alt={product.name}
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-slate-600">{product.fullDescription}</p>
          <div className="bg-slate-50 p-6 rounded-xl border">
            <h3 className="font-bold mb-4 uppercase text-sm tracking-wider">
              Specifications
            </h3>
            {Object.entries(product.specifications).map(([k, v]) => (
              <div key={k} className="flex justify-between border-b py-2">
                <span className="text-slate-500">{k}</span>
                <span className="font-bold">{v}</span>
              </div>
            ))}
          </div>
          <div className="bg-industrial-dark p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Request Quote</h3>
            <iframe
              src="YOUR_GOOGLE_FORM_URL"
              className="w-full h-80 bg-white rounded"
              title="form"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
