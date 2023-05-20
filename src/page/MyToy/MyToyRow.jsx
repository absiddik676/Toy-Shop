import React from 'react';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';

const MyToyRow = ({ toys, index, handelOpenModal, handelDeleteToy }) => {
    const { _id, ToyName, price, quantity, description } = toys;
    const toyInfo = {
        ToyName, price, quantity, description, _id
    }


    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td className='shrink-1'>{ToyName}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td className='flex gap-2'>
                    <a onClick={() => handelOpenModal(toyInfo)} href="#my-modal-2" className="text-base  border-l border-r   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded-md font-bold cursor-pointer  hover:bg-teal-700 hover:text-teal-100  bg-teal-100  text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition" > <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit w-5 h-5 mr-1">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg></a>

                    <button onClick={() => handelDeleteToy(_id)} className="text-base  border-l border-r   hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded-md font-bold cursor-pointer  hover:bg-teal-700 hover:text-teal-100  bg-teal-100  text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">
                        <RiDeleteBin6Line size={20} />
                    </button>

                </td>
            </tr>

        </>
    );
};

export default MyToyRow;