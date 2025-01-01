import { useState } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const toggleAvailability = (bookId) => {
    setBooks(books.map(book => 
      book.id === bookId 
        ? { ...book, available: !book.available }
        : book
    ));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.id.toString().includes(searchTerm)
  );

  return (
    <div className="app">
      <h1 className='title'>Library Management System</h1>
      <div className="container">
        <AddBookForm onAddBook={addBook} />
        {/* <SearchBar onSearch={setSearchTerm} /> */}
        <BookList 
          books={filteredBooks} 
          onDelete={deleteBook}
          onToggleAvailability={toggleAvailability}
        />
      </div>
    </div>
  );
}

export default App;