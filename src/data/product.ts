import type { Product } from "../types";

export const categories: string[] = [
  "All",
  "Cement & Concrete",
  "Soil Testing",
  "Bitumen",
  "Rock Testing",
  "Fluid Mechanics",
  "Metal Testing",
];

export const products: Product[] = [
  {
    id: "1",
    slug: "digital-compression-machine",
    name: "Digital Compression Testing Machine",
    category: "Cement & Concrete",
    shortDescription: "Precision 2000kN capacity for cube testing.",
    fullDescription:
      "Professional grade compression machine with digital load indicators and rugged construction for heavy lab use.",
    specifications: {
      Capacity: "2000 kN",
      Accuracy: "Class 1",
      Standard: "IS:516",
    },
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    featured: true,
    isNew: true,
  },
  {
    id: "2",
    slug: "bitumen-penetrometer",
    name: "Standard Bitumen Penetrometer",
    category: "Bitumen",
    shortDescription: "Measures consistency of bituminous materials.",
    fullDescription:
      "Digital penetrometer with automatic timer for high-accuracy bitumen testing.",
    specifications: {
      Resolution: "0.01mm",
      Timer: "5 seconds",
      Standard: "ASTM D5",
    },
    image:
      "https://images.unsplash.com/photo-1532187875605-1ef147c6d14b?q=80&w=800",
    featured: true,
  },
];
