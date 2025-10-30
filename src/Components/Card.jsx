import React from 'react';
import './Card.css';
import img from '../assets/img.png';
function Card (){
    return (

        <div className="card">
            <img className="card-image" src={img} alt="Card Image" />
            <div className="card-content">
                <h3 className="card-title">HELLO</h3>
                <p className="card-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus adipisci praesentium ipsa, voluptate ipsam esse ut sint accusantium, aliquid vel officia modi ad totam ex dolores enim alias provident placeat?</p>
            </div>
        </div>
    );
}

export default Card;