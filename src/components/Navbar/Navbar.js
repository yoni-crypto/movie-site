import './Navbar.css'
import notificationIcon from '../Icons/icons8-bell-24.png'
import searchIcon from '../Icons/icons8-search-50.png'
import profileimage from '../Images/poster-1.jpg'
import Login from '../Login/Login'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Route, Routes, Link } from 'react-router-dom'
import Action from '../Geners/Action/Action'
import Horor from '../Geners/Horor/Horor'
import Animation from '../Geners/Animation/Animation'

const Navbar = () => {
    const navigate = useNavigate()
    const act = () => {
        navigate('/action')
    }
    const ani = () => {
        navigate('/animation')
    }
    const hor = () => {
        navigate('/horor')
    }
    

    return (
        <div className='mainNavbar'>

            <div className='itemContainer' >

                <div className="searchItems">
                    <input type='search' className='searchbar' placeholder='search' />
                    <img src={`${searchIcon}`} className='searchIcon' alt='' />

                </div>
                <button >Home</button>
                <select className='option' value='genere'>
                    <option onClick={act}>Action</option>
                    <option onClick={ani}>Animation</option>
                    <option onClick={hor}>Horor</option>
                </select>
                <div className='profileContainer' >
                    <img src={`${notificationIcon}`} className='notificationIcon' alt='' />
                    <img src={`${profileimage}`} className='profileimage' alt='' />
                    <p className="profilename" >Yoniman</p>
                </div>
                 
            </div>



        </div>
    );
}

export default Navbar;