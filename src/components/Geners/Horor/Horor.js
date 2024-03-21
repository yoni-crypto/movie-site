import React, { useState } from "react";

import './Horor.css'
import Horor_1 from './image/horor-1.jpg'
import Horor_2 from './image/horor-2.jpg'
import Horor_3 from './image/horor-3.jpg'
import Horor_4 from './image/horor-4.jpg'
import Horor_5 from './image/horor-5.jpg'
import Horor_6 from './image/horor-6.jpg'
import Horor_7 from './image/horor-7.jpg'
import Horor_8 from './image/horor-8.jpg'
import Horor_9 from './image/horor-9.jpg'
import Horor_10 from './image/horor-10.jpg'
import Horor_11 from './image/horor-11.jpg'
import Horor_12 from './image/horor-12.jpg'
import Horor_13 from './image/horor-13.jpg'
import Horor_14 from './image/horor-14.jpg'
import Horor_15 from './image/horor-15.jpg'
import Horor_16 from './image/horor-16.jpg'
import Horor_17 from './image/horor-17.jpg'
import Horor_18 from './image/horor-18.jpg'
import Horor_19 from './image/horor-19.jpg'
import Horor_20 from './image/horor-20.jpg'
import Horor_21 from './image/horor-21.jpg'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from "../../../pages/Home/Home.js";
import SearchBar from "../../Searchbar/Searchbar.js";
// import Leftbar from "../../Leftbar/Leftbar";
// import Navbar from "../../Navbar/Navbar";
// import Rightbar from "../../Rightbar/Rightbar";

const Horor = () => {
    const navigate = useNavigate()
    const nav = () => {
        navigate('/home')
    }
    const [movies,setMovies] = useState([
        { id:1,year: 2024, min: 103, img: Horor_1, title: 'mama' },
        { id:1,year: 2024, min: 103, img: Horor_2, title: 'mama' },
        { id:1,year: 2024, min: 103, img: Horor_3, title: 'low' },
        { id:1,year: 2024, min: 103, img: Horor_4, title: 'low' },
        { id:1,year: 2024, min: 103, img: Horor_5, title: 'high' },
        { id:1,year: 2024, min: 103, img: Horor_6, title: 'high' },
        { id:1,year: 2024, min: 103, img: Horor_7, title: 'high' },
        { id:1,year: 2024, min: 103, img: Horor_8, title: 'high' },
        { id:1,year: 2024, min: 103, img: Horor_9, title: 'back' },
        { id:1,year: 2024, min: 103, img: Horor_10, title: 'back' },
        { id:1,year: 2024, min: 103, img: Horor_11, title: 'back' },
        { id:1,year: 2024, min: 103, img: Horor_12, title: 'back' },
        { id:1,year: 2024, min: 103, img: Horor_13, title: 'veronica' },
        { id:1,year: 2024, min: 103, img: Horor_14, title: 'veronica' },
        { id:1,year: 2024, min: 103, img: Horor_15, title: 'veronica' },
        { id:1,year: 2024, min: 103, img: Horor_16, title: 'veronica' },
        { id:1,year: 2024, min: 103, img: Horor_17, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_18, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_19, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_20, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_21, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_7, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_1, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_10, title: 'aquaman' },
        { id:1,year: 2024, min: 103, img: Horor_19, title: 'aquaman' },
    ])
    const handleSearch = (filteredMovies) => {
        setMovies(filteredMovies);
    };

    return (
        <div className='action'>
            <button onClick={nav}>
                Home
            </button>
          <SearchBar  movies={movies} onSearch={handleSearch} />
          <div className='actionContainer'>
                {movies.map((movies) => (
                    <div className='y'>
                        <img src={movies.img} style={{ width: '185px', height: '280px', marginRight: '10px',borderRadius:'10px' }} />
                        <p style={{ marginTop: '0px', fontWeight: '700' }}>{movies.title}</p>
                        <p style={{ marginTop: '-15px', color: 'gray', fontSize: '0.8rem' }}>{movies.year}  .  {movies.min} <span style={{ marginLeft: '70px', border: '1px solid gray', borderRadius: '5px', padding: '0px 5px 0px 5px' }}>Movie</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Horor;