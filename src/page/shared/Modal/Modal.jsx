import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Modal = ({ data }) => {
    const { singleData, user } = useContext(AuthContext)
    console.log(singleData);
    const { ToyName, description, pictureUrl, price, quantity, rating, sellerEmail, sellerName } = singleData
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
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
                                        <p className="text-md">{description}<a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-7 align-bottom  mr-5">
                                            <div>
                                                <span className="text-2xl leading-none align-baseline">$</span>
                                                <span className="font-bold text-5xl leading-none align-baseline">{price}</span>
                                            </div>
                                            <span className="font-bold text-2xl ">Available {quantity} pice</span>

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
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;