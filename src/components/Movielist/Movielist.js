import React, { useState } from 'react';
import SearchBar from '../Searchbar/Searchbar.js';
import poster_1 from './poster-1.jpg'
import poster_2 from './poster-2.jpg'
import poster_3 from './poster-3.jpg'
import poster_4 from './poster-4.jpg'
import poster_5 from './poster-5.jpg'
import poster_6 from './poster-6.jpg'
import poster_7 from './poster-7.jpg'

const MovieList = () => {
    const [movies, setMovies] = useState([
        { title: 'Movie 1', img: poster_1  },
        { title: 'ovie 1', img: poster_4  },
        { title: 'Movie 2', img: poster_2 },
        { title: 'Another Movie', img: poster_3 },
    ]);

    const handleSearch = (filteredMovies) => {
        setMovies(filteredMovies);
    };

    return (
        <div >
            <SearchBar movies={movies} onSearch={handleSearch} />
            <div className='movielist'>
                {movies.map((movie, index) => (
                    <div >
                        <div key={index}>{movie.title}</div>
                        <div> { movie.img}</div>
                    </div>
                ))}
                </div>
            
        </div>
    );
};

export default MovieList;