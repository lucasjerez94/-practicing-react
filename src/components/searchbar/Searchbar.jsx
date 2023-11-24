import{ useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');



  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='container-searchbar'>
      <input
        className='input-searchbar'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className='btn-searchbar' onClick={handleSearch}>Buscar</button>
    </div>
  );
};


