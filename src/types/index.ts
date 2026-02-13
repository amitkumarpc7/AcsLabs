export type CategoryType =
  | "Cement & Concrete"
  | "Soil Testing"
  | "Bitumen"
  | "Rock Testing"
  | "Fluid Mechanics"
  | "Metal Testing";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryType;
  shortDescription: string;
  fullDescription: string;
  specifications: Record<string, string>;
  image: string;
  featured: boolean;
  isNew?: boolean;
}
