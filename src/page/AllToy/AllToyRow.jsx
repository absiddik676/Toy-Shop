import React, { useContext, useEffect, useState } from 'react';
import Modal from '../shared/Modal/Modal';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const AllToyRow = ({ toy, }) => {
    const { _id, ToyName, category, price, quantity, sellerName } = toy;
    const { user, setSingleData } = useContext(AuthContext)
    const handelSingData = (id) => {
        console.log(id);
        fetch(`https://assignment-11-server-puce-alpha.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }
    return (

        <tr>
            <td>{sellerName}</td>
            <td>{ToyName}</td>
            <td>{category}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
                {
                    user ? <label onClick={() => handelSingData(_id)} htmlFor={user?.email ? 'my-modal-5' : ''} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">Details</label> : <Link className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" to={'/login'} >Details</Link>
                }
            </td>
        </tr>

    );
};

export default AllToyRow;