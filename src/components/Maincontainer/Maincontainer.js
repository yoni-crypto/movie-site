import React from "react";
import './Maincontainer.css'
import Navbar from "../Navbar/Navbar";
import poster from '../Images/cc.avif'
import poster_2 from '../Images/poster-7.jpg'
import poster_3 from '../Images/poster-3.jpg'
import poster_4 from '../Images/poster-4.jpg'
import poster_5 from '../Images/poster-5.jpg'
import poster_6 from '../Images/poster-6.jpg'
import poster_7 from '../Images/poster-7.jpg'
import poster_8 from '../Images/poster-8.jpg'
import poster_9 from '../Images/poster-9.jpg'
import poster_10 from '../Images/poster-10.jpg'
import poster_11 from '../Images/poster-11.jpg'
import poster_12 from '../Images/poster-12.jpg'
import poster_13 from '../Images/poster-13.jpg'
import poster_14 from '../Images/poster-14.jpg'
import poster_15 from '../Images/poster-15.jpg'
import poster_16 from '../Images/poster-16.jpg'
import poster_17 from '../Images/poster-17.jpg'
import poster_18 from '../Images/poster-18.jpg'
import poster_19 from '../Images/poster-19.jpg'
import poster_20 from '../Images/poster-20.jpg'
import poster_21 from '../Images/poster-21.jpg'
import poster_22 from '../Images/poster-22.jpg'
import poster_23 from '../Images/poster-23.jpg'
import Login from "../Login/Login";

const Maincontainer = () => {
    return (
        <div className="mainContainer">
            <Navbar />
            <div>
                <img style={{backgroundPosition:' 70px'}} src={`${poster}`} className="coverimage" alt="" />
                <div className="ItemsContainer">
                    <p className="title">The Conjuring Movie</p>
                    <p className="subtitle">98% Match</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '-27px' }}>
                        <button className="btnwatch">Watch Now</button>
                        <div className="watchlater">
                            <p className="plus">+</p>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <h4 className="submaintitle">Continue watching</h4>
                <div style={{ display: 'flex',marginLeft:'60px',flexWrap:'wrap' }}>
                    <div className="itemcontainer">
                        <img src={`${poster_2}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_3}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_4}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_5}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_6}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>
                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_20}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                </div>
                
                <div style={{ display: 'flex',marginLeft:'60px',flexWrap:'wrap' }}>
                    <div className="itemcontainer">
                        <img src={`${poster_8}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_9}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_10}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_11}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_12}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>
                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_13}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">watch now</button>

                    </div>
                </div>
                
            </div>
            <div>
                <h4 className="submaintitle">Recommended Movies</h4>
                <div style={{ display: 'flex',marginLeft:'60px',flexWrap:'wrap' }}>
                    <div className="itemcontainer">
                        <img src={`${poster_14}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">Buy Now...</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_15}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">Buy Now...</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_16}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">Buy Now...</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_17}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">Buy Now...</button>

                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_18}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">Buy Now...</button>
                    </div>
                    <div className="itemcontainer">
                        <img src={`${poster_19}`} className="itemimage" alt="" />
                        <button className="btnitemcontainer">Buy Now...</button>

                    </div>
                </div>
                </div>


        </div>
    );
}

export default Maincontainer;