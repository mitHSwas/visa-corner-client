import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';
import Overview from '../Overview/Overview';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <LimitServices></LimitServices>
            <Overview></Overview>
        </div>
    );
};

export default Home;