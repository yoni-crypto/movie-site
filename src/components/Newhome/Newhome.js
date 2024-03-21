import Homenav from '../Homenav/Homenav';
import './Newhome.css'
import facebook from '../../pages/First/icons/facebook.png'
import twitter from '../../pages/First/icons/twi.png'
import snapchat from '../../pages/First/icons/snapchat.png'
import tiktok from '../../pages/First/icons/tiktok.png'
import whatsapp from '../../pages/First/icons/whatsapp.png'
import instagram from '../../pages/First/icons/instagram.png'
// import Homenav from '../Homenav/Homenav';
import action_1 from '../Geners/Action/image/action-1.jpg'
import action_2 from '../Geners/Action/image/action-2.jpg'
import action_3 from '../Geners/Action/image/action3.jpg'
import action_4 from '../Geners/Action/image/action-4.jpg'
import action_5 from '../Geners/Action/image/action-5.jpg'
import action_6 from '../Geners/Action/image/action-6.jpg'
import action_7 from '../Geners/Action/image/action-7.jpg'
import action_8 from '../Geners/Action/image/action-8.jpg'
import action_9 from '../Geners/Action/image/action-9.jpg'
import action_10 from '../Geners/Action/image/action-10.jpg'
import action_11 from '../Geners/Action/image/action-11.jpg'
import action_12 from '../Geners/Action/image/action-12.jpg'
import action_13 from '../Geners/Action/image/action-13.jpg'
import action_14 from '../Geners/Action/image/action-14.jpg'
import action_15 from '../Geners/Action/image/action-15.jpg'
import action_16 from '../Geners/Action/image/action-16.jpg'
import action_17 from '../Geners/Action/image/action-17.jpg'
import action_18 from '../Geners/Action/image/action-18.jpg'
import action_19 from '../Geners/Action/image/action-19.jpg'
import action_20 from '../Geners/Action/image/action-20.jpg'
import action_21 from '../Geners/Action/image/action-21.jpg'

import { useState } from 'react';

const Newhome = () => {
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
    return (<>
        <Homenav />
        <div className="newcontainer">
            <p style={{ position: 'relative', paddingTop: '60px', marginLeft: '350px' }}>78.7k <br />shares</p>
            <div className=" buttons" style={{ position: 'relative', top: '-70px', marginLeft: '390px', marginRight: '300px' }}>

                <button style={{ background: 'blue' }}>
                    <img src={`${facebook}`} style={{ width: '20px', position: 'relative', top: '5px', paddingRight: '10px' }} alt="" /> 123k</button>
                <button style={{ background: 'black' }}>
                    <img src={`${tiktok}`} style={{ width: '20px', position: 'relative', top: '5px', paddingRight: '10px' }} />60k</button>
                <button style={{ background: 'green' }}>
                    <img src={`${whatsapp}`} style={{ width: '20px', position: 'relative', top: '5px', paddingRight: '10px' }} />89.3k</button>
                <button style={{ background: 'orange' }}>
                    <img src={`${instagram}`} style={{ width: '20px', position: 'relative', top: '5px', paddingRight: '10px' }} />120k</button>
                <button style={{ background: 'black' }}>
                    <img src={`${twitter}`} style={{ width: '20px', position: 'relative', top: '5px', paddingRight: '10px' }} />45k</button>
                <button style={{ background: 'yellow' }}>
                    <img src={`${snapchat}`} style={{ width: '20px', position: 'relative', top: '5px', paddingRight: '10px' }} />37k</button>
            </div>
            <div className="newlinks">
                <h1 style={{ fontWeight: '300', fontSize: '35px' }}>Trending</h1>
                <button>Movies</button>
                <button>TV Shows</button>
            </div>
            <div className='movieContainer'>
                {movies.map((movies) => (
                    <div className='y'>
                        <img src={movies.img} style={{ width: '185px', height: '280px', marginRight: '10px',borderRadius:'10px' }} />
                        <p style={{ marginTop: '0px', fontWeight: '700' }}>{movies.title}</p>
                        <p style={{ marginTop: '-15px', color: 'gray', fontSize: '0.8rem' }}>{movies.year}  .  {movies.min} <span style={{ marginLeft: '70px', border: '1px solid gray', borderRadius: '5px', padding: '0px 5px 0px 5px' }}>Movie</span></p>
                    </div>
                ))}
            </div>
        </div>
    </>
    );
}

export default Newhome;