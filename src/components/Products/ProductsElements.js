import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 3rem;
  background: #150f0f;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 1rem;
  line-height: 1.5;
  width: 300px;
  background-color: #000;
`;

export const ProductImgCard = styled.div``;

export const ProductImg = styled.img`
  border-radius: 2px;
  padding: 5px;
  height: 250px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #B7A494;

  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export const ProductsHeading = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 4px solid  #705B47;
  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.7rem;
  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
export const AllProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.3rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const AllProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;
export const ProductDiscountPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const AllProductDiscountPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #705B47;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #D2C5B3;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
