import React from "react";
import "./Card.css"

const Card = (props) => { 
  const { DataCards } = props;

  return (
    <div className="item-img">
      <img src={DataCards.CardImg} alt="" />
      <p>{DataCards.title}</p>
    </div>
  );
};

export default Card;
