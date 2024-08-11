import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { signInWithPopup } from "firebase/auth";

import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  Cart,
  Products,
  Home,
  ProductQuantities,
  LogoutButton,
  LoginWithGoogle,
  GoogleLogo,
} from "./NavbarElements";
import ReactTooltip from "react-tooltip";
import banner from '../../images/banner.png'; 
import { auth, provider } from "../../firebase/utils";
import Modal from "react-modal";

const Navbar = () => {
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch({ type: "USER", payload: storedUser });
    }
  }, [dispatch]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  async function loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider); // Use the modular signInWithPopup function
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: "USER", payload: user });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    auth.signOut()
      .then(() => {
        console.log("Logout successful");
        dispatch({ type: "CLEAR" });
        localStorage.removeItem("user"); // Use removeItem instead of clear for specific item
      })
      .catch((err) => console.log(err));
  }

  const customStyles = {
    content: {
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <Nav>
      <NavLink to="/">
        <img src={banner} alt="banner" style={{ maxWidth: "300px", height: "auto" }} />
      </NavLink>

      <NavIcon>
        <Link to="/">
          {" "}
          <Home data-tip="Home" />
          <ReactTooltip place="bottom" type="dark" effect="solid" />
        </Link>

        <Link to="/products">
          {" "}
          <Products data-tip="Products" />
          <ReactTooltip place="bottom" type="dark" effect="solid" />
        </Link>
        <Link to="/cart">
          {" "}
          <Cart data-tip="Cart" />
          <ReactTooltip place="bottom" type="dark" effect="solid" />
          <ProductQuantities data-tip="Cart">
            {totalQuantities}
          </ProductQuantities>
          <ReactTooltip place="bottom" type="dark" effect="solid" />
        </Link>

        <Bars onClick={toggle} data-tip="Menu" data-for="menu" />
        <ReactTooltip place="bottom" type="dark" id="menu" effect="solid" />
        {user ? (
          <div>
            {/* <h3 >{user.displayName}</h3> */}

            <img
              data-tip="Logout"
              data-for="logout"
              onClick={openModal}
              src={user.photoURL}
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
            <ReactTooltip
              id="logout"
              place="bottom"
              type="dark"
              effect="solid"
            />
          </div>
        ) : (
          ""
        )}
        {user ? (
          <Modal
            isOpen={modalOpen}
            style={customStyles}
            shouldFocusAfterRender={false}
            onRequestClose={closeModal}
          >
            <LogoutButton
              onClick={logout}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {" "}
              <GoogleLogo /> LOGOUT
            </LogoutButton>
          </Modal>
        ) : (
          <div>
            <LoginWithGoogle
              data-tip="Sign in with Google"
              data-for="login"
              onClick={loginWithGoogle}
            />
            <ReactTooltip
              id="login"
              place="bottom"
              type="dark"
              effect="solid"
            />
          </div>
        )}
      </NavIcon>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        style={{ fontWeight: "400 !important" }}
      />
    </Nav>
  );
};

export default Navbar;