import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [bookData, setBookData] = useState({
    id: '',
    title: '',
    author: '',
    genre: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({
      ...bookData,
      id: bookData.id.trim(), 
      available: true,
    });
    setBookData({ id: '', title: '', author: '', genre: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="addbook-form">
      <h2 style={{color: 'black', fontWeight: 'bold'}}>Add New Book</h2>
      <input
        type="text"
        name="id"
        className='input-bar'
        value={bookData.id}
        onChange={handleChange}
        placeholder="Book ID"
        required
      />
      <input
        type="text"
        name="title"
        className='input-bar'
        value={bookData.title}
        onChange={handleChange}
        placeholder="Book Title"
        required
      />
      <input
        type="text"
        name="author"
        className='input-bar'
        value={bookData.author}
        onChange={handleChange}
        placeholder="Author Name"
        required
      />
      <input
        type="text"
        name="genre"
        className='input-bar'
        value={bookData.genre}
        onChange={handleChange}
        placeholder="Genre"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;