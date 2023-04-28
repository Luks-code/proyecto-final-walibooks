import React, { useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";

export const Wali = () => {
  const element = <FontAwesomeIcon icon={faVolumeHigh} />;

  const [message, setMessage] = useState("");

  const [question, setQuestion] = useState("");

  const [loading, setLoading] = useState(false);

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: "your api key",
    })
  );

  const textToSpeech = (e) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(message));
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const respuesta = async (e) => {
    setLoading(true);
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    setMessage(res.data.choices[0].message.content);
    setLoading(false);
  };

  return (
    <div>
      <div className="group" onSubmit={respuesta}>
        <Form.Group className="mb-3 mt-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your question"
            onChange={handleChange}
            required
            className="input"
          />
        </Form.Group>
        <button onClick={respuesta} className="btn btn-success">
          ENTER
        </button>
        {message && (
          <button onClick={textToSpeech} className="btn btn-success">
            {element}
          </button>
        )}
      </div>
      {loading && (
        <Spinner animation="border" role="status" variant="light"></Spinner>
      )}
      {message && (
        <div className="square">
          <p className="respuesta">{message}</p>
        </div>
      )}
    </div>
  );
};
