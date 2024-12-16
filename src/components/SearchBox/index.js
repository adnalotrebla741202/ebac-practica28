import React from 'react';

function SearchBox({ searchText, onSearchChange }) 
{
  return (
    <div>
      <label htmlFor="search">Buscar: </label>
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={onSearchChange}
        placeholder="Escribe para filtrar..."
      />
    </div>
  );
}

export default SearchBox;