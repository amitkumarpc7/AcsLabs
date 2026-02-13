import { categories } from "../../data/product";
import { LayoutGrid, List } from "lucide-react";

export const FilterSidebar = ({ selected, onSelect, view, setView }: any) => (
  <div className="space-y-8">
    <div>
      <h3 className="font-bold mb-4">View Mode</h3>
      <div className="flex bg-slate-100 p-1 rounded">
        <button
          onClick={() => setView("grid")}
          className={`flex-1 py-2 flex justify-center rounded ${view === "grid" ? "bg-white shadow" : ""}`}
        >
          <LayoutGrid size={20} />
        </button>
        <button
          onClick={() => setView("list")}
          className={`flex-1 py-2 flex justify-center rounded ${view === "list" ? "bg-white shadow" : ""}`}
        >
          <List size={20} />
        </button>
      </div>
    </div>
    <div>
      <h3 className="font-bold mb-4">Categories</h3>
      <div className="flex flex-col gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className={`text-left px-4 py-2 rounded ${selected === c ? "bg-industrial-dark text-white" : "bg-white border"}`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  </div>
);
