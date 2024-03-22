import React from "react";
import "../styles/premiumlist.css";

export function Premium(props) {
  return (
    <div className="benefit">
      <div className="benefit-img">
        <img src={props.src} alt="Ad " />
      </div>
      <div className="benefit-info">
        <h5>{props.name}</h5>
        <p>{props.desc}</p>
      </div>
    </div>

  );
}
