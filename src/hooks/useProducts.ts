import { useState, useMemo, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { products as staticProducts } from "../data/product"; // Import your old static file
import type { Product } from "../types";

export const useProductss = () => {
  const [firebaseProducts, setFirebaseProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Real-time listener for Firebase
  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot: any) => {
        const docs = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];

        setFirebaseProducts(docs);
        setLoading(false);
      },
      (error: any) => {
        console.error("Firebase Error:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  // --- MERGE LOGIC ---
  // Combine Firebase products with static products into one master list
  const combinedProducts = useMemo(() => {
    return [...firebaseProducts, ...staticProducts];
  }, [firebaseProducts]);

  // Download Backup feature for your neighbor's data safety
  const downloadBackup = () => {
    if (combinedProducts.length === 0) return alert("No data to backup yet!");

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(combinedProducts, null, 2));
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
    return combinedProducts.filter((p) => {
      const matchSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchCat =
        selectedCategory === "All" || p.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory, combinedProducts]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    allProducts: combinedProducts, // CRITICAL: Use this in ProductDetail
    viewMode,
    setViewMode,
    loading,
    downloadBackup,
  };
};
