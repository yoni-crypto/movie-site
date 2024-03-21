import './Action.css'
import action_1 from './image/action-1.jpg'
import action_2 from './image/action-2.jpg'
import action_3 from './image/action3.jpg'
import action_4 from './image/action-4.jpg'
import action_5 from './image/action-5.jpg'
import action_6 from './image/action-6.jpg'
import action_7 from './image/action-7.jpg'
import action_8 from './image/action-8.jpg'
import action_9 from './image/action-9.jpg'
import action_10 from './image/action-10.jpg'
import action_11 from './image/action-11.jpg'
import action_12 from './image/action-12.jpg'
import action_13 from './image/action-13.jpg'
import action_14 from './image/action-14.jpg'
import action_15 from './image/action-15.jpg'
import action_16 from './image/action-16.jpg'
import action_17 from './image/action-17.jpg'
import action_18 from './image/action-18.jpg'
import action_19 from './image/action-19.jpg'
import action_20 from './image/action-20.jpg'
import action_21 from './image/action-21.jpg'
import search from './image/icons8-search-50.png'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../../../pages/Home/Home.js'
import SearchBar from '../../Searchbar/Searchbar.js'
import Navbar from '../../Navbar/Navbar'
import { useState } from 'react'

const Action = () => {
    const navigate = useNavigate()
    const nav = () => {
        navigate('/home')
    }
    const [movies, setMovies] = useState([
         { id: 1, year: 2024, min: 103, img: action_1, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_2, title: 'hit' },
        { id: 1, year: 2024, min: 103, img: action_3, title: 'back' },
        { id: 1, year: 2024, min: 103, img: action_4, title: 'low' },
        { id: 1, year: 2024, min: 103, img: action_5, title: 'big' },
        { id: 1, year: 2024, min: 103, img: action_6, title: 'mama' },
        { id: 1, year: 2024, min: 103, img: action_7, title: 'iron' },
        { id: 1, year: 2024, min: 103, img: action_8, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_9, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_10, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_11, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_12, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_13, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_14, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_15, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_16, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_17, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_18, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_19, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_20, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_21, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_7, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_1, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_10, title: 'aquaman' },
        { id: 1, year: 2024, min: 103, img: action_19, title: 'aquaman' },
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
                        <img src={movies.img} style={{ width: '185px', height: '280px', marginRight: '10px' ,borderRadius:'10px'}} />
                        <p style={{ marginTop: '0px', fontWeight: '700' }}>{movies.title}</p>
                        <p style={{ marginTop: '-15px', color: 'gray', fontSize: '0.8rem' }}>{movies.year}  .  {movies.min} <span style={{ marginLeft: '70px', border: '1px solid gray', borderRadius: '5px', padding: '0px 5px 0px 5px' }}>Movie</span></p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Action;