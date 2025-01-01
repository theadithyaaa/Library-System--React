import React from 'react';
import StatusButton from './StatusButton';

const BookCard = ({ book, onDelete, onToggleAvailability }) => {
  return (
    <div className="book-card">
      <h3 >{book.title}</h3>
      <p>ID: {book.id}</p>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <StatusButton
        available={book.available}
        onClick={() => onToggleAvailability(book.id)}
      />
      <button 
        onClick={() => onDelete(book.id)}
        className="delete-btn"
      >
        Remove Book
      </button>
    </div>
  );
};

export default BookCard;