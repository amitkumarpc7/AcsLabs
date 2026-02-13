import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-industrial-dark py-4 text-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold">
          ACS<span className="text-industrial-primary">Labs</span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-500">
            About
          </Link>
          <Link to="/catalog" className="hover:text-red-500">
            Products
          </Link>
          <Link to="/contact" className="hover:text-red-500">
            Contact
          </Link>
          <Link to="/get-quote">
            <button className="bg-industrial-primary px-6 py-2 rounded flex items-center gap-2 hover:bg-red-700 transition">
              <Phone size={18} /> Get Quote
            </button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900 p-4 space-y-4 flex flex-col">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/catalog" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/get-quote" onClick={() => setOpen(false)}>
            {/* <button className="bg-industrial-primary px-6 py-2 rounded flex items-center gap-2 hover:bg-red-700 transition"> */}
               Get Quote
            {/* </button> */}
          </Link>
        </div>
      )}
    </nav>
  );
};
