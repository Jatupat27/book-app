import Link from "next/link";
import { books } from "../../books";

type Props = {
  params: { id: string };
};

export default function BookDetailPage({ params }: Props) {
  const book = books.find((b) => b.id === parseInt(params.id));

  if (!book) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Book not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <p className="text-lg text-gray-700">👤 Author: {book.author}</p>
        <p className="text-gray-700">🏢 Publisher: {book.publisher}</p>
        <p className="text-gray-700">📅 Year: {book.year}</p>
        <p className="text-gray-700">📂 Category: {book.category}</p>
        <p className="text-gray-700">🔖 ISBN: {book.isbn}</p>
        <p className="mt-4 text-gray-600">{book.description}</p>
        <Link
          href="/"
          className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to list
        </Link>
      </div>
    </main>
  );
}
