import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LimitServices from '../LimitServices/LimitServices';
import Overview from '../Overview/Overview';
import { Helmet } from 'react-helmet';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Viva-visa - home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <LimitServices></LimitServices>
            <Overview></Overview>
        </div>
    );
};

export default Home;