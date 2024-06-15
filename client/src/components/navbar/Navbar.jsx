import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";
const Navbar = () => {
  const quantities = useSelector((state) =>
    state.cart.products.map((product) => product.quantity)
  );

  const sum = quantities.reduce((a, b) => a + b, 0); //sum all elements
  const [open, setopen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" height="20px" />
            <KeyboardArrowDownIcon className="mui-icon" />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon className="mui-icon" />
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="item ">
            <Link className="link" to="/">
              <b>Lavish Layers</b>{" "}
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/allproducts">
              All Products
            </Link>
          </div>

          <div className="icon">
            <Link to="/search">
              <SearchIcon className="mui-icon" />
            </Link>
            <Link to="/cart">
              <div className="cartIcon" onClick={() => setopen(!open)}>
                <ShoppingCartIcon
                  className="mui-icon"
                  sx={{ fontSize: "30px" }}
                />
                <span
                  style={{
                    fontWeight: "900",
                    fontSize: "23px",
                    backgroundColor: "#FFFFFF",
                    textAlign: "center",
                    color: "black",
                    padding: "5px",
                    outline: "2px solid black",
                  }}
                >
                  {sum}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
