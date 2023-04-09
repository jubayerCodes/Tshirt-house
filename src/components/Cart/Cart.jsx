import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className='cart-container'>
            <h1>Order Summery</h1>
            <h2>Total Added: {cart.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)}</h2>
            <h2>Total Price: {cart.reduce((previousValue, currentValue) => previousValue + currentValue.price * currentValue.quantity, 0)}</h2>
            {
                cart.map(product => {
                    const {_id} = product
                    return (
                        <p key={product['_id']}>
                            {
                                (product.name) + (product.quantity !== 1 ? (' -> ' + product.quantity) : '')
                            }
                            <button className='btn py-1 px-2 ml-5' onClick={()=> handleRemoveFromCart(_id)}>Remove</button>
                        </p>
                    )
                })
            }
        </div>
    );
};

export default Cart;