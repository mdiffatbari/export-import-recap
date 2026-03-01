import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (bottle) => {
        console.log("cart Added", bottle)
    }

    return (
        <div>

            <h2>Total Bottles: {bottles.length}</h2>
            <h3>Total Item Added: </h3>

            <div className='bottle-card'>
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddToCart={handleAddToCart}>
                        </Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;