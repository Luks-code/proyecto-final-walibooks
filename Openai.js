import { OpenAIApi, Configuration } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: "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",
  })
);

const respuesta = async () => {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "cuántos hijos tiene messi?" }],
  });
  console.log(res.data.choices[0].message.content);
};

respuesta();
