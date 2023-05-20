import React from 'react';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';

const MyToyRow = ({ toys,index }) => {
    const { ToyName, price, quantity } = toys
    console.log(toys);
    return (
        <tr>
            <td>{index+1}</td>
            <td className='shrink-1'>{ToyName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td className='flex gap-2'>
                <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded">
                    <RiEdit2Line size={20} />
                </button>
                <button className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-2 rounded">
                    <RiDeleteBin6Line size={20} />
                </button>

            </td>
        </tr>
    );
};

export default MyToyRow;