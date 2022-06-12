import { v4 as uuidv4 } from "uuid";

const book = () => {
  return {
    id: uuidv4(),
    title: "Książka Nr 1",
    author: "Joe Doe",
    isbn: "1234-5678-234-67",
  };
};

export default book;
