import { FeatureContainer, FeatureButton } from "./FeatureElements";
import { Link } from "react-router-dom";

export const FeatureCoffee = () => {
  return (
    <FeatureContainer>
      <h1>Perfect Brew for Your Day</h1>
      <p>Dreamy Cappuccino Creations</p>
      <Link to="/product-details/1">
        <FeatureButton>Order Now</FeatureButton>
      </Link>
    </FeatureContainer>
  );
};
