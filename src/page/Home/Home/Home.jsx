/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import { Tabs } from 'react-tabs';
import SubTabs from '../SubTabs/SubTabs';
import BestSellingToy from '../../BestSellingToy]/BestSellingToy';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <SubTabs/>
            <BestSellingToy/>
        </div>
    );
};

export default Home;