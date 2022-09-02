import React from 'react'
import './CardPost.css'

const CardPost = (props) => {
  const { tattoo,onBgClick } = props;
  return (
    <div className="Card-Post">
        <div className="Card-Post-bg" onClick={onBgClick}></div>
        <div className="Card-Post-content">
            <img src={tattoo.CardImg} alt="" />
            <h1>{tattoo.title}</h1>
        </div>
    </div>
  )
}

export default CardPost