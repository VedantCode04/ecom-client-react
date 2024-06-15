import React, { useState, useEffect } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Loader from "../../components/Loader/Loader";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";


const Product = () => {
  const upload = import.meta.env.VITE_API_UPLOAD_URL;
  const id = useParams().id;

  const [image, setImage] = useState(0);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const Images = [
    { img: `${upload}${data?.attributes?.img?.data?.attributes?.url}` },
    { img: `${upload}${data?.attributes?.img2?.data?.attributes?.url}` },
  ];

  const [quantity, setquantity] = useState(1);
  const increase = (e) => {
    setquantity(quantity + 1);
  };

  const decrease = (e) => {
    if (quantity != 1) setquantity(quantity - 1);
  };

  const dispatch = useDispatch()
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="product">
          <div className="left">
            <div className="images">
              <img
                src={upload + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setImage(0)}
              />
              <img
                src={upload + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setImage(1)}
              />
            </div>
            <div className="mainImage">
              <img src={Images[image]?.img} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="main">
              <h1> {data?.attributes?.title} </h1>
              <span>&#8377;{data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
            </div>
            <div className="quantity">
              <button onClick={decrease}>-</button>
              <span>{quantity}</span>
              <button onClick={increase}>+</button>
            </div>
            <div className="add">
              <button onClick={()=>dispatch(addToCart({
                id: data.id,
                title: data?.attributes?.title,
                desc: data?.attributes?.desc,
                price: data?.attributes?.price,
                img: Images[0].img,
                quantity
              }))}>
                <AddShoppingCartIcon fontSize="large" />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
