import React from "react";
import { useState } from "react";
import { BookCard } from "./BookCard";
import { Form, Row } from "react-bootstrap";
import { GetBooksHelper } from "../helpers/GetBooksHelper";

export const GetBooks = () => {
  const [books, setBooks] = useState([]);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getBooks = async () => {
    const newBooks = await GetBooksHelper(search);
    console.log(newBooks);
    setBooks(newBooks);
  };

  return (
    <div>
      <div className="group groupsearch">
        <Form.Group className="mb-3 mt-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Search for books"
            onChange={handleChange}
            required
            className="input"
          />
        </Form.Group>
        <button onClick={getBooks} className="btn btn-success">
          ENTER
        </button>
      </div>
      {search && books && (
        <Row xs={1} md={5} className="justify-content-md-center">
          {books.map((book, i) => (
            <BookCard book={book} key={book.id} />
          ))}
        </Row>
      )}
      {!books && <h3 className="error">Results not found</h3>}
    </div>
  );
};
