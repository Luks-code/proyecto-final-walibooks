import axios from "axios";

export const GetBooksHelper = async (dif) => {
  const url = `http://localhost:3000/${dif}`;

  const { data } = await axios.get(url);

  return data;
};
