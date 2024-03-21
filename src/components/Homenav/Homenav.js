import { Link } from 'react-router-dom';
import './Homenav.css'
import { useState } from 'react';
import SearchBar from '../Searchbar/Searchbar';
import Ani_1 from '../Geners/Animation/images/ani-1.jpg'
import Ani_2 from '../Geners/Animation/images/ani-2.jpg'
import Ani_3 from '../Geners/Animation/images/ani-3.jpg'
import Ani_4 from '../Geners/Animation/images/ani-4.jpg'
import Ani_5 from '../Geners/Animation/images/ani-5.jpg'
import Ani_6 from '../Geners/Animation/images/ani-6.jpg'
import Ani_7 from '../Geners/Animation/images/ani-7.jpg'
import Ani_8 from '../Geners/Animation/images/ani-8.jpg'
import Ani_9 from '../Geners/Animation/images/ani-9.jpg'
import Ani_10 from '../Geners/Animation/images/ani-10.jpg'
import Ani_11 from '../Geners/Animation/images/ani-11.jpg'
import Ani_12 from '../Geners/Animation/images/ani-12.jpg'
import Ani_13 from '../Geners/Animation/images/ani-13.jpg'
import Ani_14 from '../Geners/Animation/images/ani-14.jpg'
import Ani_15 from '../Geners/Animation/images/ani-15.jpg'
import Ani_16 from '../Geners/Animation/images/ani-16.jpg'
import Ani_17 from '../Geners/Animation/images/ani-17.jpg'
import Ani_18 from '../Geners/Animation/images/ani-18.jpg'
import Ani_19 from '../Geners/Animation/images/ani-19.jpg'
import Ani_20 from '../Geners/Animation/images/ani20.jpg'
import Ani_21 from '../Geners/Animation/images/ani-21.jpg'
import Horor_1 from '../Geners/Horor/image/horor-1.jpg'
import Horor_2 from '../Geners/Horor/image/horor-2.jpg'
import Horor_3 from '../Geners/Horor/image/horor-3.jpg'
import Horor_4 from '../Geners/Horor/image/horor-4.jpg'
import Horor_5 from '../Geners/Horor/image/horor-5.jpg'
import Horor_6 from '../Geners/Horor/image/horor-6.jpg'
import Horor_7 from '../Geners/Horor/image/horor-7.jpg'
import Horor_8 from '../Geners/Horor/image/horor-8.jpg'
import Horor_9 from '../Geners/Horor/image/horor-9.jpg'
import Horor_10 from '../Geners/Horor/image/horor-10.jpg'
import Horor_11 from '../Geners/Horor/image/horor-11.jpg'
import Horor_12 from '../Geners/Horor/image/horor-12.jpg'
import Horor_13 from '../Geners/Horor/image/horor-13.jpg'
import Horor_14 from '../Geners/Horor/image/horor-14.jpg'
import Horor_15 from '../Geners/Horor/image/horor-15.jpg'
import Horor_16 from '../Geners/Horor/image/horor-16.jpg'
import Horor_17 from '../Geners/Horor/image/horor-17.jpg'
import Horor_18 from '../Geners/Horor/image/horor-18.jpg'
import Horor_19 from '../Geners/Horor/image/horor-19.jpg'
import Horor_20 from '../Geners/Horor/image/horor-20.jpg'
import Horor_21 from '../Geners/Horor/image/horor-21.jpg'
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
import { useNavigate } from 'react-router-dom';

const Homenav = () => {
    const navigate = useNavigate()
    const ho = () => {
        navigate('/')
    }
    const act = () => {
        navigate('/action')
    }
    const ani = () => {
        navigate('/animation')
    }
    const hor = () => {
        navigate('/horor')
    }


    const [movies, setMovies] = useState([
        { id: 1, img: Ani_1, title: 'mama' },
        { id: 1, img: Ani_2, title: 'mama' },
        { id: 1, img: Ani_3, title: 'mama' },
        { id: 1, img: Ani_4, title: 'mama' },
        { id: 1, img: Ani_5, title: 'low' },
        { id: 1, img: Ani_6, title: 'low' },
        { id: 1, img: Ani_7, title: 'low' },
        { id: 1, img: Ani_8, title: 'low' },
        { id: 1, img: Ani_9, title: 'high' },
        { id: 1, img: Ani_10, title: 'high' },
        { id: 1, img: Ani_11, title: 'high' },
        { id: 1, img: Ani_12, title: 'high' },
        { id: 1, img: Ani_13, title: 'back' },
        { id: 1, img: Ani_14, title: 'back' },
        { id: 1, img: Ani_15, title: 'back' },
        { id: 1, img: Ani_16, title: 'back' },
        { id: 1, img: Ani_17, title: 'from' },
        { id: 1, img: Ani_18, title: 'from' },
        { id: 1, img: Ani_19, title: 'from' },
        { id: 1, img: Ani_20, title: 'from' },
        { id: 1, img: Ani_21, title: 'aquaman' },
        { id: 1, img: Ani_7, title: 'aquaman' },
        { id: 1, img: Ani_1, title: 'aquaman' },
        { id: 1, img: Ani_10, title: 'aquaman' },
        { id: 1, img: Ani_19, title: 'aquaman' },
        { id: 1, img: action_1, title: 'aquaman' },
        { id: 1, img: action_2, title: 'hit' },
        { id: 1, img: action_3, title: 'back' },
        { id: 1, img: action_4, title: 'low' },
        { id: 1, img: action_5, title: 'big' },
        { id: 1, img: action_6, title: 'mama' },
        { id: 1, img: action_7, title: 'iron' },
        { id: 1, img: action_8, title: 'aquaman' },
        { id: 1, img: action_9, title: 'aquaman' },
        { id: 1, img: action_10, title: 'aquaman' },
        { id: 1, img: action_11, title: 'aquaman' },
        { id: 1, img: action_12, title: 'aquaman' },
        { id: 1, img: action_13, title: 'aquaman' },
        { id: 1, img: action_14, title: 'aquaman' },
        { id: 1, img: action_15, title: 'aquaman' },
        { id: 1, img: action_16, title: 'aquaman' },
        { id: 1, img: action_17, title: 'aquaman' },
        { id: 1, img: action_18, title: 'aquaman' },
        { id: 1, img: action_19, title: 'aquaman' },
        { id: 1, img: action_20, title: 'aquaman' },
        { id: 1, img: action_21, title: 'aquaman' },
        { id: 1, img: action_7, title: 'aquaman' },
        { id: 1, img: action_1, title: 'aquaman' },
        { id: 1, img: action_10, title: 'aquaman' },
        { id: 1, img: action_19, title: 'aquaman' },
        { id: 1, img: Horor_1, title: 'mama' },
        { id: 1, img: Horor_2, title: 'mama' },
        { id: 1, img: Horor_3, title: 'low' },
        { id: 1, img: Horor_4, title: 'low' },
        { id: 1, img: Horor_5, title: 'high' },
        { id: 1, img: Horor_6, title: 'high' },
        { id: 1, img: Horor_7, title: 'high' },
        { id: 1, img: Horor_8, title: 'high' },
        { id: 1, img: Horor_9, title: 'back' },
        { id: 1, img: Horor_10, title: 'back' },
        { id: 1, img: Horor_11, title: 'back' },
        { id: 1, img: Horor_12, title: 'back' },
        { id: 1, img: Horor_13, title: 'veronica' },
        { id: 1, img: Horor_14, title: 'veronica' },
        { id: 1, img: Horor_15, title: 'veronica' },
        { id: 1, img: Horor_16, title: 'veronica' },
        { id: 1, img: Horor_17, title: 'aquaman' },
        { id: 1, img: Horor_18, title: 'aquaman' },
        { id: 1, img: Horor_19, title: 'aquaman' },
        { id: 1, img: Horor_20, title: 'aquaman' },
        { id: 1, img: Horor_21, title: 'aquaman' },
        { id: 1, img: Horor_7, title: 'aquaman' },
        { id: 1, img: Horor_1, title: 'aquaman' },
        { id: 1, img: Horor_10, title: 'aquaman' },
        { id: 1, img: Horor_19, title: 'aquaman' },
    ])
    const handleSearch = (filteredMovies) => {
        setMovies(filteredMovies);
    };
    return (
        <div className='nav'>

            <div className="homenavcontainer">
                <div className="logo" ><h1 style={{ scale: '0.5rem' }}><span4><span5>Yoni</span5><span6>Yoye</span6></span4></h1></div>
                <div className='homelist'>
                    <ul>
                        <li onClick={ho}>
                            <Link to=''>Home</Link>
                        </li>
                        <li>
                            <Link to='/Genre'>Genre</Link>
                            <ul className='sub-menu'>
                                <li><Link style={{ paddingBottom: '10px', color: '#000' }} to='/genre/action'>Action</Link></li>
                                <li><Link style={{ paddingBottom: '10px', color: '#000' }} to='/genre/animation'>Animation</Link></li>
                                <li><Link style={{ paddingBottom: '10px', color: '#000' }} to='/genre/horor'>Horor</Link></li>
                            </ul>

                        </li>
                        <li>
                            <Link to='/'>Country</Link>
                        </li>
                        <li>
                            <Link to='/'>Movies</Link>
                        </li>
                        <li>
                            <Link to='/'>Tv shows</Link>
                        </li>
                        <li>
                            <Link to='/'>Top IMDB</Link>
                        </li>
                        <li>
                            <Link to='/'>Android App</Link>
                        </li>
                    </ul>
                </div>
                <button >
                    <Link to='/Login'>Login</Link>
                </button>

            </div>
            <div className='paragraph'>
                <p className='find'>Find Movies,Tv shows and more</p>
            </div>
            <SearchBar movies={movies} onSearch={handleSearch} />
        </div>
    );
}

export default Homenav;