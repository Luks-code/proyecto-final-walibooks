import React, { useEffect, useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";

export const Wali = () => {
  const element = <FontAwesomeIcon icon={faVolumeHigh} />;
  const micOn = <FontAwesomeIcon icon={faMicrophone} />;
  const micOff = <FontAwesomeIcon icon={faMicrophoneSlash} />;

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

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
    setQuestion(transcript);
  }, [transcript]);

  const speechStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const respuesta = async () => {
    SpeechRecognition.stopListening();
    setLoading(true);
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });
    setMessage(res.data.choices[0].message.content);
    setLoading(false);
    resetTranscript();
  };

  return (
    <div>
      <div className="group groupsearch" onSubmit={respuesta}>
        <Form.Group className="mb-3 mt-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your question"
            onChange={handleChange}
            value={question}
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
          <button onClick={speechStop} className="btn btn-success">
            {micOff}
          </button>
        )}
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
