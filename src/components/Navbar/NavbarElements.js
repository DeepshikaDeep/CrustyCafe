import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillShopping, AiFillHome, AiFillGoogleSquare } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiStore } from "react-icons/bi";

export const Nav = styled.nav`
  background: #F5F5F5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 100px;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 10000;

  @media screen and (max-width: 1200px) {
    padding: 10px 50px;
  }

  @media screen and (max-width: 900px) {
    padding: 10px 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 5px 10px;
  }
`;

export const NavLink = styled(Link)`
  color: #705B47;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export const LogoutButton = styled.button`
  width: 250px;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border: none;
  background: #000;
  color: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: #D2C5B3;
    transition: 0.2s ease-out;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    font-size: 1rem;
  }

  @media screen and (max-width: 400px) {
    width: 150px;
    font-size: 0.9rem;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  color: #000;
  padding-top: 5px;

  @media screen and (max-width: 600px) {
    gap: 5px;
  }

  @media screen and (max-width: 400px) {
    gap: 2px;
  }
`;

export const Bars = styled(MdRestaurantMenu)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #705B47 !important;
  }

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const Cart = styled(AiFillShopping)`
  font-size: 2rem;
  color: #000;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Products = styled(BiStore)`
  font-size: 2rem;
  color: #000;
  position: relative;

  &:hover {
    color: #705B47 !important;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProductQuantities = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  right: 150px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 17px;
  color: #fff;

  &:hover {
    color: #705B47 !important;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
  right:70px;
}

`;

export const Home = styled(AiFillHome)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #705B47 !important;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LoginWithGoogle = styled(AiFillGoogleSquare)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #705B47 !important;
  }

  @media screen and (max-width: 768px) {
   // display: none;
  }
`;

export const GoogleLogo = styled(FcGoogle)`
  font-size: 2rem;
  color: #000;

  &:hover {
    color: #705B47 !important;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
