import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 10000;
  width: 90px;
  height: 34%;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  // gap: 30px;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (!isOpen ? "-3500px" : "0px")};

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  &:hover {
    color: #705B47 !important;
  }
`;

export const Icon = styled.div`
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const Cart = styled(AiFillShopping)`
  font-size: 2rem;
  color: #000;
  cursor: pointer;
`;

export const ProductQuantities = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 220x;
  right: 38px;
  width: 15px;
  height: 15px;

  border-radius: 50%;

  font-size: 17px;
  color:white;

  &:hover {
    color: #705B47 !important;
  }
`;

export const Products = styled(BiStore)`
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  &:hover {
    color:#705B47 !important;
  }
`;
export const Home = styled(AiFillHome)`
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  &:hover {
    color:#705B47 !important;
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transtion: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;

  &:hover {
    color:#705B47;
    transition: 0.2s ease-in-out;
  }
`;
