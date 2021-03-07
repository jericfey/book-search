import React, { useState } from "react";
import Search from "../Search/Search";

const Books = () => {
  const [books, setBooks] = useState({ searchField: "" });

  function searchBook(e) {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: searchField })
      .then((data) => {
        console.log(data);
      });
  }

  function handleSearch(e) {
    // console.log(e.target.value);
    setBooks({ searchField: e.target.value });
  }

  return (
    <div>
      <Search  />
    </div>
  );
};

export default Books;
