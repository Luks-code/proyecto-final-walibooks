import React from "react";
import { Button, Card } from "react-bootstrap";

export const BookCard = ({ book }) => {
  const handleClick = (e) => {
    window.location.href = `https://www.amazon.com/s?k=${e.target.name} book`;
  };

  return (
    <div>
      <Card className="card mb-3 border-0">
        <img
          src={book.thumbnailUrl}
          alt="403 FORBIDDEN"
          className="image-card"
        />
        <Card.Body className="card-body">
          <Card.Title className="text-center titulo">{book.title}</Card.Title>
          {/* <Card.Text
            style={{ fontSize: "14px" }}
            alt="No se ha proporcionado una descripción para este libro."
          >
            {book.shortDescription}
          </Card.Text> */}
          <Card.Text
            style={{ fontSize: "11px" }}
            alt="No se ha especificado la fecha de publicación."
          >
            Fecha de publicación: Matkovich
          </Card.Text>
          <Card.Text style={{ fontSize: "11px" }}>
            Categorias:{" "}
            {book.categories.map((categorie, i) => {
              if (i === book.categories.length - 1) {
                return `${categorie}.`;
              } else {
                return `${categorie}, `;
              }
            })}
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
          name={book.title}
          onClick={handleClick}
        >
          COMPRAR
        </Button>
      </Card>
    </div>
  );
};