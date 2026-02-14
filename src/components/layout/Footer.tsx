import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { categories } from "../../data/product";

export const Footer = () => {
  return (
    <footer className="bg-industrial-dark text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-display font-bold">
              ACS<span className="text-industrial-primary">Labs</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Global leaders in manufacturing high-precision material testing
              instruments. Dedicated to accuracy, durability, and industrial
              excellence since 2001.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-industrial-primary transition-colors rounded-full"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-industrial-primary transition-colors rounded-full"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-industrial-primary transition-colors rounded-full"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-display uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-industrial-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={14} /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-industrial-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={14} /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-industrial-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={14} /> Product Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-industrial-primary transition-colors flex items-center gap-2"
                >
                  <ArrowRight size={14} /> Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Snippet */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-display uppercase tracking-wider">
              Major Categories
            </h4>
            <ul className="space-y-4 text-slate-400">
              {categories.slice(1, 5).map((cat) => (
                <li key={cat}>
                  <Link
                    to="/catalog"
                    className="hover:text-industrial-primary transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={14} /> {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-display uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin
                  className="text-industrial-primary shrink-0"
                  size={24}
                />
                <span>
                  123 Industrial Estate, Phase II, <br />
                  Rabale, Navi Mumbai, Maharashtra 400701
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-industrial-primary shrink-0" size={24} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-industrial-primary shrink-0" size={24} />
                <span>info@acslabs.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 AcsLabs Instruments Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-8 items-center leading-none">
            <p className="flex items-center transition-colors">
              Designed and Developed by
              <a
                href="mailto:amitkpc11@gmail.com"
                className="ml-2 flex items-center gap-2 hover:text-red-600 transition-colors"
              >
                <b>Amit Chaurasia</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
