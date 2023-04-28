import React, { useEffect } from "react";
import { useState } from "react";
import { BookCard } from "./BookCard";
import { Row } from "react-bootstrap";
import { GetBooksHelper } from "../helpers/GetBooksHelper";

export const GetBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const newBooks = await GetBooksHelper("books");
    setBooks(newBooks);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Row xs={1} md={5} className="justify-content-md-center">
      {books.map((book, i) => (
        <BookCard book={book} key={i} />
      ))}
    </Row>
  );
};
