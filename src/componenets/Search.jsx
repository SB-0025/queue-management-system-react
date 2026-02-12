import React from 'react'
import './Search.css'
const Search = ({ name, setName }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="search-input"
      />
    </div>
  );
};


export default Search