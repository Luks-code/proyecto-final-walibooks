import React, { useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import { Form } from "react-bootstrap";

export const Wali = () => {
  const [message, setMessage] = useState("");

  const [question, setQuestion] = useState("");

  const openai = new OpenAIApi(
    new Configuration({
      apiKey: "your api key",
    })
  );

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const respuesta = async (e) => {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    setMessage(res.data.choices[0].message.content);
  };

  return (
    <div>
      <Form.Group className="mb-3 mt-3">
        <Form.Control
          type="text"
          name="name"
          placeholder="Escribir pregunta"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <button onClick={respuesta} className="btn btn-success">
        ENTER
      </button>
      <p className="respuesta">{message}</p>
    </div>
  );
};
