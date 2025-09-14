export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  category: string;
  isbn: string;
  description: string;
};

export const books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    year: 2008,
    category: "Programming",
    isbn: "978-0132350884",
    description: "A handbook of agile software craftsmanship."
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    publisher: "Addison-Wesley",
    year: 1999,
    category: "Software Engineering",
    isbn: "978-0201616224",
    description: "Classic book about practical approaches to programming."
  }
];
