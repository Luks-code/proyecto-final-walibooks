import React, { useEffect } from "react";
import { useState } from "react";
import { BookCard } from "./BookCard";
import { Form, Row } from "react-bootstrap";
import { GetBooksHelper } from "../helpers/GetBooksHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const GetBooks = () => {
  const micOn = <FontAwesomeIcon icon={faMicrophone} />;
  const micOff = <FontAwesomeIcon icon={faMicrophoneSlash} />;

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  const [books, setBooks] = useState([]);

  const [search, setSearch] = useState("");

  const speechToText = async () => {
    if (!browserSupportsSpeechRecognition) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Browser does not support speech recognition",
      });
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  useEffect(() => {
    setSearch(transcript);
  }, [transcript]);

  const speechStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getBooks = async () => {
    SpeechRecognition.stopListening();
    const newBooks = await GetBooksHelper(search);
    setBooks(newBooks);
    resetTranscript();
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
            value={search}
            required
            className="input"
          />
        </Form.Group>
        {!listening && (
          <button onClick={speechToText} className="btn btn-success">
            {micOn}
          </button>
        )}
        {listening && (
          <button onClick={speechStop} className="btn btn-danger">
            {micOff}
          </button>
        )}
        <button onClick={getBooks} className="btn btn-success">
          ENTER
        </button>
      </div>
      {books && (
        <Row xs={1} md={4} className="justify-content-md-center">
          {books.map((book, i) => (
            <BookCard book={book} key={book.id} />
          ))}
        </Row>
      )}
      {!books && <h3 className="error">Results not found</h3>}
    </div>
  );
};
