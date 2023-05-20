import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyRow from './MyToyRow';
import { useToasts } from 'react-toast-notifications';
import { FaPen } from 'react-icons/fa';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [updatedToyInfo, setUpdatedToyInfo] = useState({})
    const [control, setControl] = useState(false)
    const { addToast, toastStack } = useToasts();

    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [control])

    const handelOpenModal = (toyInfo) => {
        setUpdatedToyInfo(toyInfo);

    }

    const handelDeleteToy = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteToy/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setControl(!control)
                    if (toastStack.length === 0) {
                        addToast('Your item deleted successfully ', { appearance: 'success', autoDismiss: true, });
                    }
                }
                console.log(data);
            })
    }
    console.log(updatedToyInfo);
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
                            myToys.map((toys, index) => <MyToyRow
                                index={index}
                                key={toys._id}
                                toys={toys}
                                handelOpenModal={handelOpenModal}
                                handelDeleteToy={handelDeleteToy}
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>


            {/* toy data updated modal body */}

            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-6"> Update <span className='text-pink-500'>{updatedToyInfo?.ToyName}</span> Information </h3>
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
                                    defaultValue={updatedToyInfo?.price}
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
                                    defaultValue={updatedToyInfo?.quantity}
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
                                defaultValue={updatedToyInfo?.description}
                            ></textarea>
                        </div>
                    </form>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button><a href="#" className="btn"></a></button>
                        <button
                            className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                            <FaPen className="mr-2" />
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToy;