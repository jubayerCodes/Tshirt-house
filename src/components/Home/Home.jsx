import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <div>
            <h1>this is from home: {tShirts.length}</h1>
        </div>
    );
};

export default Home;