import React, { useState } from "react";
import './Leftbar.css'
import browse from '../Icons/Explore.png'
import Watchlist from '../Icons/heart.png'
import Commingsoon from '../Icons/calendar(1).png'
import Friend from '../Icons/friends (1).png'
import Parties from '../Icons/friends.png'
import Setting from '../Icons/Settings.png'
import Logout from '../Icons/exit.png'
import Challenges from '../Images/poster-1.jpg'
import { Link, useNavigate } from "react-router-dom";

const Leftbar = () => {
    const navigate = useNavigate();
    const [movies, sertMovies] = useState()

    const watch = () => {
        navigate('/watchlist', { state: { movies: movies } });
    }

    return (
        <div className="leftbarMainContainer">
            <h2 className="logoname">Yoniyoye<span className="dot">.</span></h2>
            <div>
                <p className="menu">Menu</p>
                <ul>
                    <li>
                        <img src={browse} className="listicons" alt="" />
                        <li className="lilistname">Browse</li>
                    </li>
                    <li style={{ marginTop: '15px' }}>

                        <img src={Watchlist} className="listicons" alt="" />
                        <Link to="/watchlist">
                            <p onClick={watch} style={{ cursor: 'pointer' }} className="lilistname">Watchlist</p>
                        </Link>
                    </li>
                    <li>
                        <img src={Commingsoon} className="listicons" alt="" />
                        <p className="lilistname">Coming soon</p>
                    </li>
                </ul>
            </div>

            <div>
                <p className="menu">Social</p>
                <ul>
                    <li>
                        <img src={Friend} className="listicons" alt="" />
                        <p className="lilistname">Friends</p>
                    </li>
                    <li>
                        <img src={Parties} className="listicons" alt="" />
                        <p className="lilistname">Parties</p>
                    </li>

                </ul>
            </div>

            <div>
                <p className="menu">General</p>
                <ul>
                    <li>
                        <img src={Setting} className="listicons" alt="" />
                        <p className="lilistname">Setting</p>
                    </li>
                    <li>
                        <img src={Logout} className="listicons" alt="" />
                        <p className="lilistname">Logout</p>
                    </li>

                </ul>
            </div>
            <div className="lastleftbardiv">
                <img src={Challenges} alt="" className="lastimage" />
                <p className="popcorn">Popcorn Addict</p>
                <p className="viewingtime"> 5/6h viewing time</p>
                <button className="btnchallenges">Challenges</button>
            </div>

        </div>
    );
}

export default Leftbar;