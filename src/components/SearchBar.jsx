import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value); 
  };

  return (
    
      <input
        type="text"
        placeholder="Search by title, author, genre, or ID..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-bar"
      />
    
  );
};

export default SearchBar;