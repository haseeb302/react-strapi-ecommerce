import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="categories">
          <div className="item">
            <KeyboardArrowDownIcon />
            <img src="/images/en.png" />
          </div>
          <div className="item">
            <KeyboardArrowDownIcon />
            <span>USD</span>
          </div>
          <div className="item">
            <Link className="link" to={"/product/1"}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/product/2"}>
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/product/3"}>
              Children
            </Link>
          </div>
        </div>
        <div className="logo">
          <div className="item">
            <Link className="link" to={"/"}>
              CLOTHING STORE
            </Link>
          </div>
        </div>
        <div className="navigations">
          <div className="item">
            <Link className="link" to={"/"}>
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/"}>
              About
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
