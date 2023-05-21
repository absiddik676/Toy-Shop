/* eslint-disable no-unused-vars */
import React from 'react';
import galleryImg1 from '../../../assets/images/Gallery/1.webp'
import galleryImg2 from '../../../assets/images/Gallery/2 (1).webp'
import galleryImg3 from '../../../assets/images/Gallery/3.webp'
import galleryImg4 from '../../../assets/images/Gallery/4.webp'
import galleryImg5 from '../../../assets/images/Gallery/5.webp'

const Gallery = () => {


    return (
        <div className='max-w-7xl mx-auto'>
            <section className="py-8">
                <div className='grid grid-cols-3 gap-2 px-8 mb-4'>
                <div className=" mx-auto overflow-hidden">
                        <div className="relative">
                            <div className="h-full w-full transform transition-transform duration-300 hover:scale-110">
                                <img
                                    src={galleryImg1}// Replace with your image source
                                    alt="Image"
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto overflow-hidden">
                        <div className="relative">
                            <div className="h-full w-full transform transition-transform duration-300 hover:scale-110">
                                <img
                                    src={galleryImg2}// Replace with your image source
                                    alt="Image"
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto overflow-hidden">
                        <div className="relative">
                            <div className="h-full w-full transform transition-transform duration-300 hover:scale-110">
                                <img
                                    src={galleryImg5}// Replace with your image source
                                    alt="Image"
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex px-8 gap-2 '>

                    <div className="w-1/2 mx-auto overflow-hidden">
                        <div className="relative">
                            <div className="h-full w-full transform transition-transform duration-300 hover:scale-110">
                                <img
                                    src={galleryImg3}// Replace with your image source
                                    alt="Image"
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 mx-auto overflow-hidden">
                        <div className="relative">
                            <div className="h-full w-full transform transition-transform duration-300 hover:scale-110">
                                <img
                                    src={galleryImg4}// Replace with your image source
                                    alt="Image"
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </section>
           
        </div>
    );
};

export default Gallery;