import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys,setMyToys] = useState([]);
    const [updatededToyinfo,setUpdatededToyinfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handelOpenModal = (toyInfo) =>{
        setUpdatededToyinfo(toyInfo);
    }
console.log(updatededToyinfo);
    return (
        <div>
            <div className="overflow-x-auto max-w-7xl mx-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map((toys,index) =><MyToyRow
                             index={index} 
                             key={toys._id} 
                             toys={toys}
                             handelOpenModal={handelOpenModal}
                             ></MyToyRow>)
                        }
                       
                       
                    </tbody>
                </table>
            </div>

            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-6"> Update <span className='text-pink-500'>{'ToyName'}</span> Information </h3>
                    <form action="">
                    <div className='flex gap-5 '>
                        <div className="mb-4 w-1/2">
                            <label className="block  text-black font-bold mb-2" htmlFor="name">
                                Toy Price
                            </label>
                            <input
                               
                                className="w-full  focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="text"
                                id="Price"
                                name="Price"
                                defaultValue={'price'}
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-black font-bold mb-2" htmlFor="pictureUrl">
                            quantity
                            </label>
                            <input
                                
                                className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="text"
                                id="quantity"
                                name="quantity"
                                defaultValue={'quantity'}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-bold mb-2" htmlFor="description">
                            Detail Description
                        </label>
                        <textarea
                            
                            className="w-full border border-gray-300 p-2 rounded-md resize-none h-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            id="description"
                            name="description"
                            rows="4"
                            defaultValue={'description'}
                        ></textarea>
                    </div>
                    </form>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <a href="#" className="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToy;