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
            
                <p>Aqui va la fecha</p>
                <p>Esta es una breve descripción de el lugar del viaje a Japón en ql cual visite la montaña Fuji, para mas detalles por favor accede a mi blog
                Esta es una breve descripción de el lugar del viaje a Japón en ql cual visite la montaña Fuji, para mas detalles por favor accede a mi blog
                
                </p>
            
            
        </div>
    </article>
  
    </React.Fragment>
    
   
  );
}