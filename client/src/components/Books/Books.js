import React, { Component } from "react";
import Search from "../Search/Search";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    return (
      <div className="books">
        <Search handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Books;
