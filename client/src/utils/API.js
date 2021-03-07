import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  saveBook: function (savedBook) {
    return axios.post("/api/books", savedBook);
  },
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};
