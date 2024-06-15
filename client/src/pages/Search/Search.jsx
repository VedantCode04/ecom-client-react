import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Search.scss";
import List from "../../components/List/List";
const Search = () => {
  const [searchTerm, setsearchTerm] = useState("");
  function handleSearch(e) {
      setsearchTerm(e.target.value);
      console.log(e.target.value);
    }
    const query = `/products?populate=*&filters[title][$contains]=${searchTerm}`;
  return (
    <div className="search">
      <div id="search">
        <span>Search for an Item: </span>
        <input type="text" onChange={handleSearch} className="searchinput"/>
      </div>
      <div>
        <List query={searchTerm ? query : "/products?populate=*"} />
      </div>
    </div>
  );
}

export default Search;
