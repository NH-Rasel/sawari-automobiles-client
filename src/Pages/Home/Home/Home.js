import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Cars />
        </div>
    );
};

export default Home;