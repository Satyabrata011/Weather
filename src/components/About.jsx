import React from 'react';

import division2Image from '../assets/Source/1632493008193.jpg';


function About(){

    const containerStyle = {
        backgroundColor: '#F7E6C4', // Replace with your desired color
    }

    return(
        <>
    <div className="background" style={containerStyle}>
    
            <div className="container4">  
                <h1>
                Weather Today </h1>
                <p>
                Here is the team , representing you the weather forcast "Weather Today".
                </p>
            </div>
          
        <div className="image">
            <img src={division2Image}
             alt="Division 2 Image"/>

            <h2>Founder</h2>
             <p>SATYABRATA PRADHAN</p>
    
        </div>
        
    </div>
        </>
    )
}
 export default About;