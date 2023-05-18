/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import { Tabs } from 'react-tabs';
import SubTabs from '../SubTabs/SubTabs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <SubTabs/>
        </div>
    );
};

export default Home;