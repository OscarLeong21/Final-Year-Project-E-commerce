import React, { useState, Fragment } from "react";
import "../styles/Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/SearchproductScreeen/${keyword}`);
    } else {
      navigate("/SearchproductScreeen");
    }
  };

  return (
    <Fragment>
      <form className="searchBar" onSubmit={searchHandler}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
