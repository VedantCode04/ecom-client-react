import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  const data = [
    {
      url: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
  ];
  return (
    <div className="categories">
        
        <div className="col">
          <div className="row">
            <img src={data[0].url} alt="" />
            <button>
              <Link to="/products/1">Men</Link>
            </button>
          </div>
          <div className="row">
            <img src={data[1].url} alt="" />
            <button>
              <Link to="/products/2">Women</Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src={data[2].url} alt="" />
            <button>
              <Link to="/products/3">Business</Link>
            </button>
          </div>
        </div>
        {/* <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src={data[3].url} alt="" />
                <button>
                  <Link to="/products/4">Casual</Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img src={data[4].url} alt="" />
                <button>
                  <Link to="/products/5">Partywear</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img src={data[5].url} alt="" />
            <button>
              <Link to="/products/6">Formals</Link>
            </button>
          </div>
        </div> */}

    </div>
  );
};

export default Categories;
