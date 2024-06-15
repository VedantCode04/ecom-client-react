import React, { useState, useEffect } from "react";
import "./List.scss";
import ProductCard from "../Card/ProductCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../Loader/Loader.jsx";

const List = ({ query }) => {
  const { data, loading, error } = useFetch(query);

  return (
    <div className="list">
      {loading ? (
        <Loader />
      ) : data?.length > 0 ? (
        data.map((item) => <ProductCard item={item} key={item.id} />)
      ) : (
        <h2>Such item doesn't exist</h2>
      )}
    </div>
  );
};

export default List;
