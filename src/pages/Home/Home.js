import React from "react";
import './Home.css'
import Leftbar from "../../components/Leftbar/Leftbar";
import Maincontainer from "../../components/Maincontainer/Maincontainer";
import Rightbar from "../../components/Rightbar/Rightbar";
import { Route, Routes } from "react-router";

const Home = () => {
    return ( 
        <div className="mainContainerForHome">
            <Leftbar/>
            <Maincontainer />
            <Rightbar />
            
            
        </div>

     );
}
 
export default Home;