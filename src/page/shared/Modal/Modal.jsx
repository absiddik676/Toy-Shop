import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaRegStar, FaStar } from "react-icons/fa";


import Rating from 'react-rating'

const Modal = ({ data }) => {
    const { singleData, user } = useContext(AuthContext)
    console.log(singleData);
    const { ToyName, description, pictureUrl, price, quantity, rating, sellerEmail, sellerName } = singleData
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                
                <div className="modal-box w-11/12 max-w-5xl">
                <label htmlFor="my-modal-5" className="btn z-50 btn-md btn-circle absolute right-2 top-2">✕</label>
                    <div className="min-w-screen min-h-0 bg-yellow-300 flex items-center lg:p-5 overflow-hidden relative">
                        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-5 lg:p-5 mx-auto text-gray-800 relative md:text-left">
                            <div className="md:flex -mx-10">
                                <div className="w-full md:w-1/2 px-5 mb-5 md:mb-0">
                                    <div className="relative">
                                        <img src={pictureUrl} alt="" />
                                        <div className="border-4 border-yellow-200 absolute "></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 items-start px-5">
                                    <div className="mb-10">
                                        <h1 className="font-bold uppercase text-2xl mb-5">{ToyName}</h1>
                                        <p className="text-md">{description}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between gap-7 align-bottom  mr-5">
                                            <div>
                                                <span className="text-2xl leading-none align-baseline">$</span>
                                                <span className="font-bold text-5xl leading-none align-baseline">{price}</span>
                                            </div>
                                            <span className="font-bold text-2xl ">Available {quantity} pice</span>

                                        </div>
                                        <div className=' mt-4 flex '>
                                            
                                            
                                            
                                            <p className='text-lg mr-2 font-semibold'>Rating :-</p>
                                            
                                            <Rating className=' mr-3'
                                                placeholderRating={rating}
                                                emptySymbol={<FaRegStar className='text-2xl' />}
                                                readonly
                                                placeholderSymbol={<FaStar className='text-warning text-2xl' />}
                                                fullSymbol={<FaStar className='text-2xl' />}
                                            />
                                            
                                            
                                        </div>

                                        <div className='mt-5'>
                                            <h1 className='text-xl text-center font-semibold'>Seller Information</h1>
                                            <div className="divider"></div>
                                            <h2 > <span className='text-lg font-bold'>Name</span> :  {sellerName}</h2>
                                            <h2 className='mt-2'><span className='text-lg font-bold'>Email</span> : {sellerEmail}</h2>

                                        </div>




                                        {/* <div className="inline-block align-bottom">
                                            <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;