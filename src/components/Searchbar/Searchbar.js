import React, { useState } from 'react';
import './Searchbar.css'

const SearchBar = ({ movies, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
      handleSearch()
  };

  const handleSearch = () => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMovies(filteredMovies);
    onSearch(filteredMovies);
    console.log(filteredMovies);

    setFilteredMovies([])

  };

  return (
    <div className='srchcontainer'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;