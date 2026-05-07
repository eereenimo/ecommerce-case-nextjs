import { apiClient } from '@/lib/api-client';
import { Product } from '@/types/product';

const furnitureMapping: Record<string, { category: string; images: string[]; titles: string[] }> = {
  "electronics": {
    category: "Lamps & Lighting",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542728928-1413d1894ed1?q=80&w=800&auto=format&fit=crop"
    ],
    titles: ["Minimalist Desk Lamp", "Architectural Floor Lamp", "Orbital Pendant Light", "Linear LED Sconce"]
  },
  "jewelery": {
    category: "Home Accessories",
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=800&auto=format&fit=crop"
    ],
    titles: ["Ceramic Sculpture Vase", "Marble Decorative Tray", "Woven Storage Basket", "Abstract Wall Art"]
  },
  "men's clothing": {
    category: "Living Room",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550226844-27451998401c?q=80&w=800&auto=format&fit=crop"
    ],
    titles: ["Scandinavian Velvet Sofa", "Ergonomic Armchair", "Solid Oak Coffee Table", "Modular Sectional"]
  },
  "women's clothing": {
    category: "Bedroom & Textiles",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693413171-293669746aae?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop"
    ],
    titles: ["Linen Bedding Set", "Wool Throw Pillow", "Textured Handwoven Rug", "Cotton Duvet Cover"]
  }
};

const mapToFurniture = (product: Product): Product => {
  const map = furnitureMapping[product.category] || furnitureMapping["men's clothing"];
  const imageIndex = product.id % map.images.length;
  const titleIndex = product.id % map.titles.length;

  return {
    ...product,
    title: map.titles[titleIndex],
    image: map.images[imageIndex],
    category: map.category,
    oldPrice: product.price * 1.5,
    description: `A premium ${map.titles[titleIndex].toLowerCase()} designed for modern Scandinavian interiors. Crafted with high-quality materials to ensure both durability and elegance in your home workspace or living area.`
  };
};

export const productService = {
  getAllProducts: async () => {
    const products = await apiClient<Product[]>('/products');
    return products.map(mapToFurniture);
  },
  
  getProductById: async (id: number) => {
    const product = await apiClient<Product>(`/products/${id}`);
    return mapToFurniture(product);
  },
  
  getCategories: () => Promise.resolve(["Living Room", "Bedroom & Textiles", "Lamps & Lighting", "Home Accessories"]),
  
  getProductsByCategory: async (category: string) => {
    // We map internal category back to API category for the fetch
    const apiCatMap: Record<string, string> = {
      "Lamps & Lighting": "electronics",
      "Home Accessories": "jewelery",
      "Living Room": "men's clothing",
      "Bedroom & Textiles": "women's clothing"
    };
    const apiCategory = apiCatMap[category] || "men's clothing";
    const products = await apiClient<Product[]>(`/products/category/${apiCategory}`);
    return products.map(mapToFurniture);
  },
  
  getLimitedProducts: async (limit: number) => {
    const products = await apiClient<Product[]>(`/products?limit=${limit}`);
    return products.map(mapToFurniture);
  },
};
