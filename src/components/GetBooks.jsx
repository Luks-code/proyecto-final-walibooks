import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BookCard } from "./BookCard";
import { Col, Row } from "react-bootstrap";

export const GetBooks = () => {
  const [books, setBooks] = useState([]);

  const url = "http://localhost:3000/books";

  const getBooks = async () => {
    const { data } = await axios.get(url);
    setBooks(data);
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
