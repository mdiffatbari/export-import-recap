import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import "./Bottles.css"
import { addCartToLocalStorage, getCArtFromLocalStorage } from '../../utils/localStorage';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);

    const [cart, setCart] = useState([]);

    const storedCart = [];

    useEffect(() => {
        const bottlesIds = getCArtFromLocalStorage();
        for (const id of bottlesIds) {
            console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        console.log(storedCart);
        setCart(storedCart);

    }, [bottles]);

    

    const handleAddToCart = (bottle) => {
        console.log("cart Added", bottle)
        const newCart = [...cart, setCart];
        setCart(newCart);
        addCartToLocalStorage(bottle.id)
    }

    return (
        <div>

            <h2>Total Bottles: {bottles.length}</h2>
            <h3>Total Item Added: {cart.length}</h3>

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