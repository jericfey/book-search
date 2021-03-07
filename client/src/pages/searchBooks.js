import React from "react";
import API from "../utils/API";
import { Container, Grid } from "semantic-ui-react";
import Search from "../components/Search/Search";

const searchBooks = () => {
  return (
    <Container>
      <div>
        <h1>Search Books page</h1>
        <Grid.Column>
          <Search />
        </Grid.Column>
      </div>
      <Container className="results">
        <h3> Cards go here</h3>
      </Container>
    </Container>
  );
};

export default searchBooks;
