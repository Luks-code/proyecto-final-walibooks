import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { GetBooksHelper } from "../helpers/GetBooksHelper";

export const FreeBooks = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const newBooks = await GetBooksHelper("freeBooks");
    setBooks(newBooks);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleClick = (e) => {
    window.location.href = `${e.target.name}`;
  };

  return (
    <Row xs={1} md={5} className="justify-content-md-center ">
      {books.map((book, i) => (
        <div className="freebooks">
          <Card className="card mb-3 border-0" key={i}>
            <img
              src={book.thumbnailUrl}
              alt="403 FORBIDDEN"
              className="image-card"
            />
            <Card.Body className="card-body">
              <Card.Title className="text-center titulo">
                {book.title}
              </Card.Title>
              {/* <Card.Text
        style={{ fontSize: "14px" }}
        alt="404 NOT FOUND"
      >
        {book.shortDescription}
      </Card.Text> */}
              <Card.Text style={{ fontSize: "11px" }} alt="404 NOT FOUND">
                Published Date: {book.publishedDate}
              </Card.Text>
            </Card.Body>
            <Button
              className="button-center d-flex justify-content-center button-style"
              style={{
                width: "8rem",
                fontSize: "14px",
                margin: "auto",
                marginBottom: "12px",
              }}
              name={book.url}
              onClick={handleClick}
            >
              READ
            </Button>
          </Card>
        </div>
      ))}
    </Row>
  );
};
