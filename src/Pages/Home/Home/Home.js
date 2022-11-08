import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LimitServices></LimitServices>
        </div>
    );
};

export default Home;