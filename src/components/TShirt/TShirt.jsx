import React from 'react';

const TShirt = ({ tShirt, handleAddToCart }) => {

    const { picture, name, price } = tShirt
    return (
        <div className="card w-full glass">
            <figure className='p-5'><img src={picture} className='w-full h-[400px] rounded-lg' alt="car!" /></figure>
            <div className="card-body">
                <div className="card-top flex justify-between mb-7">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <h2 className="card-price text-xl font-semibold">
                        Price: ${price}
                    </h2>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary cart-btn" onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default TShirt;