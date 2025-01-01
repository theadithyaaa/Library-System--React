import React, { useState } from 'react';
import BookCard from './BookCard';
import SearchBar from './SearchBar'; 

const BookList = ({ books, onDelete, onToggleAvailability }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      <h1 className="title">Library Books</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onDelete={onDelete}
            onToggleAvailability={onToggleAvailability}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
