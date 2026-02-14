import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { useProductss } from "../hooks/useProducts";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import {
  Trash2,
  Send,
  UploadCloud,
  Loader2,
  Lock,
  LogOut,
  ChevronDown,
  Download,
} from "lucide-react";

export const DevAdmin = () => {
  // --- AUTHENTICATION STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passInput, setPassInput] = useState("");
  const ADMIN_PASSWORD = "ACS_Admin_2026!";

  // --- PRODUCT FORM STATE ---
  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "Cement & Concrete",
    shortDescription: "",
    fullDescription: "",
    featured: false,
    isNew: true,
  });

  // --- IMAGE & UPLOAD STATE ---
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // --- SPECS & LIST STATE ---
  const [specs, setSpecs] = useState([{ key: "", value: "" }]);
  const [allProducts, setAllProducts] = useState<any[]>([]);

  // --- DATA BACKUP FROM HOOK ---
  const { downloadBackup } = useProductss();

  // --- CLOUDINARY CONFIG FROM ENV ---
  const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
  const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") setIsAuthenticated(true);

    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      alert("Incorrect Key!");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    setIsAuthenticated(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image first!");

    setIsUploading(true);

    try {
      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData },
      );

      const data = await response.json();
      const imageUrl = data.secure_url;

      if (!imageUrl)
        throw new Error("Cloudinary upload failed. Check your preset.");

      // 2. Map specs to object
      const specsObject = specs.reduce(
        (acc, curr) => {
          if (curr.key.trim()) acc[curr.key] = curr.value;
          return acc;
        },
        {} as Record<string, string>,
      );

      // 3. Save to Firestore
      await addDoc(collection(db, "products"), {
        ...form,
        image: imageUrl,
        specifications: specsObject,
        createdAt: new Date(),
      });

      alert("Success! Product deployed.");

      // Reset everything
      setPreviewUrl(null);
      setImageFile(null);
      setForm({
        name: "",
        slug: "",
        category: "Cement & Concrete",
        shortDescription: "",
        fullDescription: "",
        featured: false,
        isNew: true,
      });
      setSpecs([{ key: "", value: "" }]);
    } catch (err) {
      alert("Upload failed: " + err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Delete this product permanently?")) {
      try {
        await deleteDoc(doc(db, "products", id));
      } catch (err) {
        alert("Delete failed: " + err);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm text-center"
        >
          <Lock className="mx-auto mb-4 text-blue-600" size={40} />
          <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
          <input
            type="password"
            className="w-full p-4 border rounded-xl mb-4 text-center tracking-widest outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            onChange={(e) => setPassInput(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen text-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 uppercase tracking-tighter">
            Internal <span className="text-blue-600">Dashboard</span>
          </h1>
          <div className="flex gap-4">
            <button
              onClick={downloadBackup}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition text-sm"
            >
              <Download size={18} /> Backup
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-slate-500 hover:text-red-600 font-bold transition text-sm"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 mb-12">
          <form onSubmit={handleUpload} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Product Name"
                className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                placeholder="Slug (e.g. compression-tester)"
                className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <select
                className="p-3 border rounded-lg bg-white"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option>Cement & Concrete</option>
                <option>Soil Testing</option>
                <option>Bitumen</option>
                <option>Rock Testing</option>
                <option>Fluid Mechanics</option>
                <option>Metal Testing</option>
              </select>
              <div className="relative">
                <input
                  type="file"
                  id="img"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <label
                  htmlFor="img"
                  className="flex items-center justify-center p-3 border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-50 gap-2 text-slate-500 font-semibold"
                >
                  <UploadCloud size={20} />{" "}
                  {imageFile ? "Image Ready" : "Upload Image"}
                </label>
              </div>
            </div>

            {previewUrl && (
              <div className="relative rounded-xl overflow-hidden h-48 border bg-slate-100 flex items-center justify-center">
                <img
                  src={previewUrl}
                  className="max-h-full object-contain"
                  alt="Preview"
                />
              </div>
            )}

            <textarea
              placeholder="Short Summary"
              className="w-full p-3 border rounded-lg outline-none"
              rows={2}
              value={form.shortDescription}
              onChange={(e) =>
                setForm({ ...form, shortDescription: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Full Technical Description"
              className="w-full p-3 border rounded-lg outline-none"
              rows={4}
              value={form.fullDescription}
              onChange={(e) =>
                setForm({ ...form, fullDescription: e.target.value })
              }
              required
            />

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-sm font-bold text-slate-500 uppercase">
                  Specifications
                </span>
                <button
                  type="button"
                  onClick={() => setSpecs([...specs, { key: "", value: "" }])}
                  className="text-blue-600 font-bold text-sm"
                >
                  + Add
                </button>
              </div>
              {specs.map((spec, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    placeholder="Property"
                    className="flex-1 p-2 border rounded text-sm"
                    value={spec.key}
                    onChange={(e) => {
                      const n = [...specs];
                      n[i].key = e.target.value;
                      setSpecs(n);
                    }}
                  />
                  <input
                    placeholder="Value"
                    className="flex-1 p-2 border rounded text-sm"
                    value={spec.value}
                    onChange={(e) => {
                      const n = [...specs];
                      n[i].value = e.target.value;
                      setSpecs(n);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setSpecs(specs.filter((_, idx) => idx !== i))
                    }
                    className="text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <button
              disabled={isUploading}
              className="w-full bg-slate-800 hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              {isUploading ? (
                <>
                  <Loader2 className="animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Send size={20} /> Deploy Product
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
          <h2 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
            <ChevronDown /> Inventory ({allProducts.length})
          </h2>
          <div className="grid gap-4">
            {allProducts.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={p.image}
                    className="w-12 h-12 rounded-lg object-cover shadow-sm bg-white"
                    alt=""
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 leading-none">
                      {p.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">
                      {p.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
