import React from "react";
import { GetBooks } from "../components/getBooks";
import { Container } from "react-bootstrap";

export const GetBooksCon = () => {
  return (
    <Container fluid>
      <h1 className="text-center">BOOK LIST</h1>
      <GetBooks />
    </Container>
  );
};
