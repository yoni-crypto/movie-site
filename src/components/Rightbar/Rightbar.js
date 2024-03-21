import React from "react";
import './Rightbar.css'
import image1 from '../Images/image-1.jpg'
import image2 from '../Images/image-2.jpg'
import image3 from '../Images/image-3.jpg'
import image4 from '../Images/image-4.jpg'
import image5 from '../Images/image-5.jpg'
import image6 from '../Images/image-6.jpg'
import image7 from '../Images/image-7.jpg'

const Rightbar = () => {
    return (  
        <div className="rightbarMainContainer">
            <div style={{marginTop:'100px',}}>
                <div style={{marginLeft:'4px',paddingTop:'30px'}}>
                    <img src={`${image1}`} className="profileimage" alt="" />
                    <div className="dott"></div>
                </div>
                <div style={{marginLeft:'4px',paddingTop:'30px'}}>
                    <img src={`${image2}`} className="profileimage" alt="" />
                    <div className="dott"></div>
                </div>
                <div style={{marginLeft:'4px',paddingTop:'30px'}}>
                    <img src={`${image3}`} className="profileimage" alt="" />
                    <div className="dott"></div>
                </div>
                <div style={{marginLeft:'4px',paddingTop:'30px'}}>
                    <img src={`${image4}`} className="profileimage" alt="" />
                    <div className="dott"></div>
                </div>
                <div style={{marginLeft:'4px',paddingTop:'30px'}}>
                    <img src={`${image5}`} className="profileimage" alt="" />
                    <div className="dott"></div>
                </div>
                <div style={{marginLeft:'4px',paddingTop:'30px'}}>
                    <img src={`${image6}`} className="profileimage" alt="" />
                    <div className="dott"></div>
                </div>
                <div style={{marginLeft:'4px',paddingTop:'30px'}}>
                    <img src={`${image7}`} className="profileimage" alt="" />
                    <div className="dott"></div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Rightbar;