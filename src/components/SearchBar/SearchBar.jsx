import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar habilidade..."
        value={searchTerm}
        onChange={handleSearch}
        aria-label="Buscar habilidades"
      />
      <div className="search-icon">🔍</div>
    </div>
  );
};

export default SearchBar;
