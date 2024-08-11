import { FeatureContainer, FeatureButton } from "./FeatureElements";
import { Link } from "react-router-dom";

export const FeatureSweet = () => {
  return (
    <FeatureContainer>
      <h1>Delightful Desserts Await</h1>
      <p>Chocolate Cream Cheese Cupcakes</p>
      <Link to="/product-details/61">
        <FeatureButton>Order Now</FeatureButton>
      </Link>
    </FeatureContainer>
  );
};
