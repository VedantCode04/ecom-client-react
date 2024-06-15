import React from "react";
import ProductCard from "../Card/ProductCard";
import "./featured.scss";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader";
const Featured = ({ type }) => {
  const token = import.meta.env.VITE_API_TOKEN;
  const url = import.meta.env.VITE_API_URL;
  const upload = import.meta.env.VITE_API_UPLOAD_URL;

   const { data, loading, error } = useFetch(
     `/products?populate=*&[filters][type][$eq]=${type}`
   );

  return (
    <div className="featured">
      <div className="top">
        <h1>{type}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          inventore?
        </p>
      </div>
      <div className="bottom">
        {error ? "something went wromg while fetching the products. Try again later " : (loading ? <Loader/> : data?.map((item, index) => {
          return <ProductCard item={item} key={item.id} />;
        }))}
      </div>
    </div>
  );
};

export default Featured;
