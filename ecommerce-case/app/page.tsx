import React from "react";
import { getProducts } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import NewArrivals from "@/components/home/NewArrivals";
import Features from "@/components/home/Features";
import PromoBanner from "@/components/home/PromoBanner";
import Articles from "@/components/home/Articles";
import Newsletter from "@/components/home/Newsletter";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <Categories />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Features Section */}
      <Features />

      {/* Promo Banner Section */}
      <PromoBanner />

      {/* Articles Section */}
      <Articles />  

      {/* Newsletter Section */}
      <Newsletter />

    </div>
  );
}
