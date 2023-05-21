/* eslint-disable no-unused-vars */
import React from 'react';
import bannerImg1 from '../../../assets/images/banner/NEWARRIVALWbR.png'
import bannerImg2 from '../../../assets/images/banner/Pre-OrderwbR.webp'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannerImg1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn bg-transparent border border-pink-200 btn-circle">❮</a>
                        <a href="#slide2" className="btn bg-transparent border  border-purple-400 btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerImg2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn bg-transparent border border-purple-400 btn-circle">❮</a>
                        <a href="#slide1" className="btn bg-transparent border border-purple-400 btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;