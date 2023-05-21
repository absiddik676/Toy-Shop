/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
const ShowToy = ({ toy }) => {
  const { _id,ToyName, pictureUrl, price, rating } = toy
  const { user, setSingleData } = useContext(AuthContext)
  const handelSingData = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/toy/${id}`)
        .then(res => res.json())
        .then(data => setSingleData(data))
}
  return (
    <div className="max-w-2xl mb-11 mx-auto">
       <motion.div
       data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".example-selector"
      className="max-w-xs h-[420px] relative mb-5 w-[800px] rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.05 }}
      
    >
     
      <img
        src={pictureUrl}
        alt={name}
        className="w-full h-56 "
      />
      <div className="px-4 py-2">
        <h3 className="text-gray-900 font-semibold text-lg">{ToyName}</h3>
        <div className="flex justify-between mt-2">
          <span className="text-gray-700">${price}</span>
          <div className="flex items-center">
            <Rating className=' mr-3'
              placeholderRating={rating}
              emptySymbol={<FaRegStar className='text-2xl' />}
              readonly
              placeholderSymbol={<FaStar className='text-warning text-2xl' />}
              fullSymbol={<FaStar className='text-2xl' />}
            />
          </div>
        </div>
        
        {
                user ? <label onClick={() => handelSingData(_id)} htmlFor={user?.email ? 'my-modal-5' : ''}  className="flex mb-2 absolute cursor-pointer bottom-0 items-center bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">Details</label> : <Link  className="flex mb-2 absolute bottom-0 items-center bg-transparent hover:bg-blue-500 text-blue-500 cursor-pointer hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded" to={'/login'} >Details</Link>
              }
      </div>
    </motion.div> 
    </div>
  );
};

export default ShowToy;