/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoHeart } from 'react-icons/io5';
import { toast } from 'react-hot-toast';
import { AiOutlineEye } from 'react-icons/ai';

const ShowToy = ({ toy }) => {
  const { ToyName, pictureUrl, price, rating } = toy
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handelAddWishList = (name) => {
    toast.success(`${name} add wish list`)
  }

  return (
    <motion.div
      className="max-w-xs mb-5 rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div onClick={() => handelAddWishList(ToyName)} className="absolute top-0 right-0 mt-2 mr-2">
          <IoHeart className="text-red-500 text-2xl" />
        </div>
      )}
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
            <span className="text-gray-700">{rating}</span>
            <svg
              className="w-4 h-4 fill-current text-yellow-500 ml-1"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 16.666l4.472 2.792-1.41-4.908L18.82 7.74l-4.94-.338L10 2 7.12 7.403l-4.94.338L6.938 14.55 5.528 19.46 10 16.667z"
              />
            </svg>
          </div>
        </div>
        <button className="flex items-center bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <AiOutlineEye className="mr-2" size={20} />
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default ShowToy;