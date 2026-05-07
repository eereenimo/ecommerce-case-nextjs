export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  oldPrice?: number;
}

export interface Category {
  id: string;
  name: string;
}
