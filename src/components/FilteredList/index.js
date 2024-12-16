import React from 'react';

function FilteredList({ items, searchText }) 
{
  // Filtramos la lista basándonos en el texto de búsqueda
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No se encontraron elementos</li>
        )}
      </ul>
    </div>
  );
}

export default FilteredList;