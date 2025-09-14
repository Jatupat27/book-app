import Link from "next/link";
import { books } from "./books";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Book List</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">by {book.author}</p>
            <Link
              href={`/book/${book.id}`}
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
