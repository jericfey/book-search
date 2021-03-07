import React, { useState } from "react";
import API from "../utils/API";
import { Container, Grid } from "semantic-ui-react";
import Search from "../components/Search/Search";


function SearchBooks() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  //function collecting input values
  function handleInputChange(e) {
    setBooks({ search: e.target.value });
  }

  //On submit function
  function handleFormSubmit(e) {
    e.preventDefault();
    API.googleSearch()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container className="search-books">
      <div>
        <h1>Search Books page</h1>
        <Grid.Column>
          <Search handleInputChange={handleInputChange} />
        </Grid.Column>
      </div>
      <Container className="results">
        <h3> Cards go here</h3>
        {books.map((books) => (
          <div>{books}</div>
        ))}
      </Container>
    </Container>
  );
}

export default SearchBooks;
