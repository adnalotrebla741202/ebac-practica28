import React, { useState } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import SearchBox from './SearchBox';

function App() 
{
  // Estado para la lista de elementos
  const [items, setItems] = useState([
    'Manzana',
    'Banana',
    'Cereza',
    'Durazno',
    'Fresa',
    'Kiwi',
    'Limón',
  ]);

  // Estado para el texto de búsqueda
  const [searchText, setSearchText] = useState('');

  // Función que actualiza el texto de búsqueda
  const handleSearchChange = (e) => 
  {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Filtro de Elementos</h1>
      <SearchBox searchText={searchText} onSearchChange={handleSearchChange} />
      <FilteredList items={items} searchText={searchText} />
    </div>
  );
}

export default App;