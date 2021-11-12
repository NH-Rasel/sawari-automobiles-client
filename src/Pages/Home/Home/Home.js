import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Articles from '../Articles/Articles';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Cars />
            <Reviews />
            <Articles />
        </div>
    );
};

export default Home;