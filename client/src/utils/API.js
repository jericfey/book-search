import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes";

export default {
  //search for books from Google Book API using query string
  googleSearch: function (query) {
    return axios.get(BASEURL + query);
  },
  //Get all books from DB
  getBooks: function () {
    return axios.get("/api/books");
  },
  //Get a book with specific ID from DB
  getBook: function () {
    return axios.get(`/api/books/${id}`);
  },
  //Save book to DB
  saveBook: function (savedBook) {
    return axios.post("/api/books", savedBook);
  },
  //Delete book from DB based on ID
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};
