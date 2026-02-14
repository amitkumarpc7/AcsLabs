import { Link } from "react-router-dom";
import type { Product } from "../../types";

export const ProductCard = ({
  product,
  viewMode,
}: {
  product: Product;
  viewMode: "grid" | "list";
}) => {
  const isGrid = viewMode === "grid";
  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden transition-all hover:shadow-xl ${isGrid ? "" : "flex gap-6 p-4"}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className={`${isGrid ? "w-full aspect-square" : "w-48 h-48"} object-contain`}
      />
      <div className="p-5 flex flex-col justify-between">
        <div>
          <span className="text-xs text-slate-400 font-bold uppercase">
            {product.category}
          </span>
          <h3 className="text-lg font-bold mt-1">{product.name}</h3>
          {!isGrid && (
            <p className="text-slate-600 mt-2">{product.shortDescription}</p>
          )}
        </div>
        <Link
          to={`/product/${product.slug}`}
          className={`mt-4 bg-industrial-primary text-white text-center py-2 px-6 rounded hover:bg-red-700 transition font-bold uppercase text-xs tracking-wider ${
            isGrid ? "w-full" : "w-fit"
          }`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};
