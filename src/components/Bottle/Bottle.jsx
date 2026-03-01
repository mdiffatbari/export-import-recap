import React from 'react';
import "./Bottle.css"

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price, stock} = bottle;
    return (
        <div className='bottle-item'>
            <img src={img} alt="bottle pic" />
            <h3>{name}</h3>
            <h5>Left items: {stock}</h5>
            <h2>${price}</h2>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;