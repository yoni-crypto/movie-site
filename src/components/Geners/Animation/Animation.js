import React, { useState } from "react";

import './Animation.css'
import Ani_1 from './images/ani-1.jpg'
import Ani_2 from './images/ani-2.jpg'
import Ani_3 from './images/ani-3.jpg'
import Ani_4 from './images/ani-4.jpg'
import Ani_5 from './images/ani-5.jpg'
import Ani_6 from './images/ani-6.jpg'
import Ani_7 from './images/ani-7.jpg'
import Ani_8 from './images/ani-8.jpg'
import Ani_9 from './images/ani-9.jpg'
import Ani_10 from './images/ani-10.jpg'
import Ani_11 from './images/ani-11.jpg'
import Ani_12 from './images/ani-12.jpg'
import Ani_13 from './images/ani-13.jpg'
import Ani_14 from './images/ani-14.jpg'
import Ani_15 from './images/ani-15.jpg'
import Ani_16 from './images/ani-16.jpg'
import Ani_17 from './images/ani-17.jpg'
import Ani_18 from './images/ani-18.jpg'
import Ani_19 from './images/ani-19.jpg'
import Ani_20 from './images/ani20.jpg'
import Ani_21 from './images/ani-21.jpg'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from "../../../pages/Home/Home.js";
import SearchBar from "../../Searchbar/Searchbar.js";
const Animation = () => {
    const navigate = useNavigate()
    const nav = () => {
        navigate('/home')
    }
    const [movies,setMovies] = useState([
        { id:1, year: 2024, min: 103, img: Ani_1, title: 'mama' },
        { id:1, year: 2024, min: 103, img: Ani_2, title: 'mama' },
        { id:1, year: 2024, min: 103, img: Ani_3, title: 'mama' },
        { id:1, year: 2024, min: 103, img: Ani_4, title: 'mama' },
        { id:1, year: 2024, min: 103, img: Ani_5, title: 'low' },
        { id:1, year: 2024, min: 103, img: Ani_6, title: 'low' },
        { id:1, year: 2024, min: 103, img: Ani_7, title: 'low' },
        { id:1, year: 2024, min: 103, img: Ani_8, title: 'low' },
        { id:1, year: 2024, min: 103, img: Ani_9, title: 'high' },
        { id:1, year: 2024, min: 103, img: Ani_10, title: 'high' },
        { id:1, year: 2024, min: 103, img: Ani_11, title: 'high' },
        { id:1, year: 2024, min: 103, img: Ani_12, title: 'high' },
        { id:1, year: 2024, min: 103, img: Ani_13, title: 'back' },
        { id:1, year: 2024, min: 103, img: Ani_14, title: 'back' },
        { id:1, year: 2024, min: 103, img: Ani_15, title: 'back' },
        { id:1, year: 2024, min: 103, img: Ani_16, title: 'back' },
        { id:1, year: 2024, min: 103, img: Ani_17, title: 'from' },
        { id:1, year: 2024, min: 103, img: Ani_18, title: 'from' },
        { id:1, year: 2024, min: 103, img: Ani_19, title: 'from' },
        { id:1, year: 2024, min: 103, img: Ani_20, title: 'from' },
        { id:1, year: 2024, min: 103, img: Ani_21, title: 'aquaman' },
        { id:1, year: 2024, min: 103, img: Ani_7, title: 'aquaman' },
        { id:1, year: 2024, min: 103, img: Ani_1, title: 'aquaman' },
        { id:1, year: 2024, min: 103, img: Ani_10, title: 'aquaman' },
        { id:1, year: 2024, min: 103, img: Ani_19, title: 'aquaman' },
    ])
    const handleSearch = (filteredMovies) => {
        setMovies(filteredMovies);
    };
    return (
        <div className='action'>
            <button onClick={nav}>
                Home
            </button>
            <SearchBar movies={movies} onSearch={handleSearch} />

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

export default Animation;