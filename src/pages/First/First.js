import React from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Login from "../../components/Login/Login";
import './First.css'
import next from './icons/icons8-arrow-50.png'
import facebook from './icons/facebook.png'
import twitter from './icons/twi.png'
import snapchat from './icons/snapchat.png'
import tiktok from './icons/tiktok.png'
import whatsapp from './icons/whatsapp.png'
import instagram from './icons/instagram.png'
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router";



const First = () => {
    const navigate = useNavigate()
    const full = () => {
        navigate('/home')
    }
    const hom = () => {
        navigate('/home')
    }
    return (
        <>
            <div className="xx">
                <nav>
                    <div className="logo"><h1><span3><span1>Yoni</span1><span2>Yoye</span2></span3></h1>
                    </div>
                    <div className="lists">
                        <ul>
                            <li onClick={hom}>
                                <Link to='/home'>Home</Link>
                            </li>
                            <li>
                                <Link to='/movies'>Movies</Link>
                            </li>
                            <li>
                                <Link to='/tvshows'>TV Shoes</Link>
                            </li>
                            <li>
                                <button className="btn1">
                                    <Link to='/login'>Login</Link>
                                </button>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div className="inputContainer">
                    <div className="inputs">
                        <h1><span3><span1>Yoni</span1><span2>Yoye</span2></span3></h1>
                        <h3>Yoniyoye</h3>
                        <input type="text" placeholder="Enter Keywords...." />
                        <button>Search</button>
                    </div>

                </div>
                <div className=" buttons">
                    <button style={{ background: 'blue' }}>
                        <img src={`${facebook}`} style={ {width:'20px',position:'relative',top:'5px',paddingRight:'10px'}} alt=""/> 123k</button>
                    <button style={{ background: 'black' }}>
                    <img src={`${tiktok}`} style={ {width:'20px',position:'relative',top:'5px',paddingRight:'10px'}}/>60k</button>
                    <button style={{ background: 'green' }}>
                    <img src={`${whatsapp}`} style={ {width:'20px',position:'relative',top:'5px',paddingRight:'10px'}}/>89.3k</button>
                    <button style={{ background: 'orange' }}>
                    <img src={`${instagram}`} style={ {width:'20px',position:'relative',top:'5px',paddingRight:'10px'}}/>120k</button>
                    <button style={{ background: 'black' }}>
                    <img src={`${twitter}`} style={ {width:'20px',position:'relative',top:'5px',paddingRight:'10px'}}/>45k</button>
                    <button style={{ background: 'yellow' }}>
                    <img src={`${snapchat}`} style={ {width:'20px',position:'relative',top:'5px',paddingRight:'10px'}}/>37k</button>
                </div>
                <div className="fullsite"  onClick={full}>
                    <h3>View Full Site
                    <img src={`${next}`} alt="" style={{ width: '30px', height: '30px', position: 'relative', top:'10px' }} />
                    </h3>
                </div>
                <div className="messages">
                    <p>HD Today is the best site to watch movies and TV series online for free.These are things that make HD Today the best site so far:</p>
                    <p>-No Ads</p>
                    <p>-Free and Fast streaming server</p>
                </div>
            </div>  
        </>
    );
};

export default First;