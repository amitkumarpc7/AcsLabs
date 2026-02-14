// import { useProducts } from "../hooks/useProduct";
import { useSEO } from "../hooks/useSeo";
import { ProductCard } from "../components/features/ProductCard";
import { FilterSidebar } from "../components/features/FilterSidebar";
import { Search } from "lucide-react";
import { useProductss } from "../hooks/useProducts";

export const Catalog = () => {
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    viewMode,
    setViewMode,
  } = useProductss();
  useSEO("Catalog", "Browse our complete range of testing equipment.");

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64">
          <FilterSidebar
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            view={viewMode}
            setView={setViewMode}
          />
        </aside>
        <main className="flex-1">
          <div className="relative mb-8">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border outline-none"
              placeholder="Search instruments..."
            />
          </div>
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} viewMode={viewMode} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
