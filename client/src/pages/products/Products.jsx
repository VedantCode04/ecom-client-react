import React, { useState, useEffect } from "react";
import "./products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const upload = import.meta.env.VITE_API_UPLOAD_URL;
  const param = useParams();
  const categoryId = parseInt(param.id);
  const [maxprice, setmaxprice] = useState(1000);
  const [sort, setSort] = useState("asc");

  const [selectedSub, setSelectedSub] = useState([]);

  const category = useFetch(
    `/categories?populate=*&[filters][id][$eq]=${categoryId}`
  );

  console.log("first");
  console.log(category);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );

  function handlechange(e) {
    const value = parseInt(e.target.value);
    const checked = e.target.checked;

    setSelectedSub(
      checked
        ? [...selectedSub, value]
        : selectedSub.filter((item) => item !== value)
    );
  }

  const query = `/products?populate=*&[filters][categories][id]=${categoryId}${selectedSub.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxprice}&sort=price:${sort}`;

  const url = category?.data?.[0]?.attributes?.img?.data?.attributes?.url;
  const imgurl = url ? `${upload}${url}` : "";

  console.log("img url = " + imgurl);
  return (
    <div className="products">
      <div className="left">
        {category?.data?.map((item) => (
          <>
            <h1
              style={{ textTransform: "capitalize", fontSize: "50px" }}
              key={item.id}
            >
              {item?.attributes?.title}
            </h1>
          </>
        ))}
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item, index) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onClick={handlechange}
              />
              <label htmlFor="1">{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="price">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              id="price"
              step={100}
              onChange={(e) => setmaxprice(e.target.value)}
            />
            <span>{maxprice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="sort">
            <div className="inputItem">
              <label htmlFor="asc">Price: Low to High</label>
              <input
                type="radio"
                name="sort"
                id="asc"
                onChange={(e) => setSort("asc")}
              />
              <br />
            </div>
            <div className="inputItem">
              <label htmlFor="desc">Price: High to Low</label>
              <input
                type="radio"
                name="sort"
                id="desc"
                onChange={(e) => setSort("desc")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        {category && <img className="catImg" src={imgurl} />}
        <List
          categoryId={categoryId}
          maxprice={maxprice}
          sort={sort}
          selectedSub={selectedSub}
          query={query}
        />
      </div>
    </div>
  );
};

export default Products;
