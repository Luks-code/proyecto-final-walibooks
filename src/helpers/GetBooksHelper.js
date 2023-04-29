import axios from "axios";

export const GetBooksHelper = async (search) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20&key=`;

  const { data } = await axios.get(url);

  return data.items;
};
