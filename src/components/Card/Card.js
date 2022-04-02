import React from "react";
import picture from "../../assets/mountian.png"
import point from "../../assets/point.svg"

export default function Card() {
  return (
    <React.Fragment>
    <article className="card">
        <img className="card--img" src={picture} alt="img"/>
        <div className="card--info">
            <div className="card--info_point">
                <img src={point} alt="img"/>
                <span>JAPAN</span>
                <a href="/">View on google maps</a>
            </div>
                <h2 className="card--info_title">Mount Fuji</h2>

                <div className="card--info_text">
                  <span className="date">12 Jan, 2021 - 24 Jan, 2021</span>
                  <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                  </p>
                </div>
                
           
            
            
        </div>
    </article>
  
    </React.Fragment>
    
   
  );
}