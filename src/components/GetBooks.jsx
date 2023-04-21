import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

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
    <div>
      <h1>MatgonwaBooksAI</h1>
      <h3>Powered by OpenAI</h3>
      <div>{books && books.map((book) => <p>{book.title}</p>)}</div>
    </div>
  );
};
