import React from "react";
import "./Card.css"

const Card = (props) => { 
  const { tattoo, onCardClick } = props;

  return (
    <div className="item-img">
      <img src={tattoo.CardImg} alt="" onClick={() =>{onCardClick(tattoo)}}/>
      <p>{tattoo.title}</p>
    </div>
  );
};

export default Card;
