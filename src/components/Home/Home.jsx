import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirts/TShirts';
import Cart from '../Cart/Cart';

const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = (tShirt) => {
        let newCart = []
        const isExist = cart.find(product => product['_id'] === tShirt['_id'])

        if(isExist){
            const remaining = cart.filter(product => product['_id'] !== isExist['_id'])
            isExist.quantity = isExist.quantity + 1
            newCart = [...remaining, isExist]
        } else{
            tShirt.quantity = 1
            newCart = [...cart, tShirt]
        }
        setCart(newCart)
        console.log(isExist);
        console.log(cart);
    }

    const handleRemoveFromCart = (id) => {
        let newCart = []
        const remaining = cart.filter(product => product['_id'] !== id)
        newCart = [...remaining]
        setCart(newCart)
    }

    return (
        <section className='home'>
            <div className="home-container">
                <TShirts handleAddToCart={handleAddToCart} tShirts={tShirts}></TShirts>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </section>
    );
};

export default Home;