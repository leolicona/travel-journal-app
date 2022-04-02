import React from "react";
import point from "../../assets/point.svg"

export default function Card(props) {
  return (
    <React.Fragment>
    <article className="card">
        <img className="card--img" src={props.imageUrl} alt="img"/>
        <div className="card--info">
            <div className="card--info_point">
                <img src={point} alt="img"/>
                <span>{props.location}</span>
                <a href={props.googleMapsUrl}>View on google maps</a>
            </div>
                <h2 className="card--info_title">{props.title}</h2>

                <div className="card--info_text">
                  <span className="date">{props.startDate} - {props.endDate}</span>
                  <p>
                    {props.description}
                  </p>
                </div>
        </div>
    </article>
  
    </React.Fragment>
    
   
  );
}