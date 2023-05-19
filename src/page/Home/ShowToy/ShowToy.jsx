/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const ShowToy = ({toy}) => {
    const {ToyName,pictureUrl,price,rating} = toy
    return (
        <motion.div
      className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={picture} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
        <p className="text-gray-700 text-base mb-2">Rating: {rating}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </motion.div>
    );
};

export default ShowToy;