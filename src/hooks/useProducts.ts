import { useState, useMemo, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import type { Product } from "../types";

export const useProductss = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Real-time listener for Firebase
  useEffect(() => {
    // This listener automatically catches Cloudinary URLs saved in Firestore
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot: any) => {
        const docs = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setProducts(docs);
        setLoading(false);
      },
      (error: any) => {
        console.error("Firebase Error:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  // --- HYBRID DATA BACKUP FEATURE ---
  const downloadBackup = () => {
    if (products.length === 0) return alert("No data to backup yet!");

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `acs_catalog_backup_${new Date().toISOString().split("T")[0]}.json`,
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchCat =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory, products]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    viewMode,
    setViewMode,
    loading,
    downloadBackup, // Now available to your Admin or Catalog pages
  };
};
