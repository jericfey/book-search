import React from "react";
import "./search.css";

const Search = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} action="">
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="Topic or Book Name Here"
          style={{ width: "300px" }}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
