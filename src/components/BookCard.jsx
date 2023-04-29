import React from "react";
import { Button, Card } from "react-bootstrap";

export const BookCard = ({ book }) => {
  const handleClick = (e) => {
    window.open(book.volumeInfo.previewLink);
  };

  return (
    <div className="divcard">
      <Card className="card mb-3 border-0">
        <img
          alt="403 FORBIDDEN"
          src={
            book.volumeInfo.imageLinks === undefined
              ? ""
              : `${book.volumeInfo.imageLinks.thumbnail}`
          }
          className="image-card"
        />
        <Card.Header>
          <Card.Title className="text-center titulo">
            {book.volumeInfo.title}
          </Card.Title>
        </Card.Header>
        <Card.Body className="card-body overflow-scroll">
          <Card.Text style={{ fontSize: "14px" }} alt="404 NOT FOUND">
            {book.volumeInfo.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="card-footer">
          <Card.Text style={{ fontSize: "14px" }} alt="404 NOT FOUND">
            Published date: {book.volumeInfo.publishedDate}
          </Card.Text>
          <Card.Text style={{ fontSize: "14px" }} alt="404 NOT FOUND">
            Authors:{" "}
            {book.volumeInfo.authors === undefined
              ? "Not Found"
              : book.volumeInfo.authors.map((author, i) => {
                  if (i === book.volumeInfo.authors.length - 1) {
                    return `${author}.`;
                  } else {
                    return `${author}, `;
                  }
                })}
          </Card.Text>
          <Card.Text style={{ fontSize: "14px" }}>
            {book.volumeInfo.categories === undefined
              ? "Categories: Not Found"
              : `Categories: ${book.volumeInfo.categories}`}
          </Card.Text>
          {book.saleInfo.saleability === "NOT_FOR_SALE" ? (
            <Card.Text style={{ fontSize: "20px" }} className="freetext">
              FREE
            </Card.Text>
          ) : (
            <Card.Text style={{ fontSize: "20px" }} className="saletext">
              FOR SALE
            </Card.Text>
          )}
          <Button
            className="button-center d-flex justify-content-center button-style"
            style={{
              width: "8rem",
              fontSize: "14px",
              margin: "auto",
              marginBottom: "12px",
            }}
            name={book.title}
            onClick={handleClick}
          >
            PREVIEW
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};
