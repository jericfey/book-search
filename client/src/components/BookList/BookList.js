import React from "react";
import BookCard from "../BookCard/BookCard";
import "./booklist.css";

//contains a prop called books that contains state of books that we will map over book data and create bookcard component
const BookList = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            title={book.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
          />
        );
      })}
    </div>
  );
};

export default BookList;
