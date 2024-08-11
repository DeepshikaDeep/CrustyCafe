import React from "react";
import { Hero } from "../Hero";
import { Products } from "../Products";
import { FeaturePizza } from "../FeautrePizza";
import { FeatureCoffee } from "../FeatureCoffee";
import { useSelector } from "react-redux";
import { FeatureSweet } from "../FeatureSweet";

const HomePage = () => {
  const { products } = useSelector((state) => state.ProductsReducer);

  return (
    <div>
      <Hero />
      <Products heading="Choose Your Favourite" data={products.slice(0, 6)} />
      <FeatureCoffee />
      <Products heading="Perfect Brew for Your Day" data={products.slice(6, 12)} />
      <FeaturePizza />
      <Products heading="Perfect Pizzas Every Time" data={products.slice(12, 18)} />
      <FeatureSweet />
      <Products heading="Delightful Desserts Await" data={products.slice(18, 24)} />
    </div>
  );
};

export default HomePage;
