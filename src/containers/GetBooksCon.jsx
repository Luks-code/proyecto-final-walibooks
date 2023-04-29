import React from "react";
import { GetBooks } from "../components/getBooks";
import { Container } from "react-bootstrap";

export const GetBooksCon = () => {
  return (
    <Container fluid>
      <div className="logo">
        <img src="https://i.ibb.co/tCTCWwF/Biblio-AI-logos-transparent.png" />
      </div>
      <GetBooks />
    </Container>
  );
};
