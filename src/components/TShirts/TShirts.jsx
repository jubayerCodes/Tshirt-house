import React from 'react';
import TShirt from '../TShirt/TShirt';

const TShirts = ({tShirts, handleAddToCart}) => {
    return (
        <div className='tShirt-container'>
            {
                tShirts.map(tShirt => <TShirt handleAddToCart={handleAddToCart} tShirt={tShirt} key={tShirt['_id']}></TShirt>)
            }
        </div>
    );
};

export default TShirts;