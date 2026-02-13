import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { ProductDetail } from "./pages/ProductDetail";
import { About } from "./pages/About";
import { Footer } from "./components/layout/Footer";
import { Contact } from "./pages/Contact";
import { GetQuote } from "./pages/GetQuote";
import ScrollToTop from "./components/utils/ScrollToTop";
import { BackToTop } from "./components/utils/BackToTop";
import { DevAdmin } from "./pages/DevAdmin";

export default function App() {
  return (
    <div className="font-body flex flex-col min-h-screen">
      <ScrollToTop />
      <BackToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/dev-admin-portal" element={<DevAdmin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
