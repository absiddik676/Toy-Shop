import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyRow from './MyToyRow';
import { useToasts } from 'react-toast-notifications';
import { FaPen } from 'react-icons/fa';
import Swal from 'sweetalert2';
import titleName from '../../Hooks/Hooks';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const [updatedToyInfo, setUpdatedToyInfo] = useState({})
    const [control, setControl] = useState(false)
    const { addToast, toastStack } = useToasts();

    const formRef = useRef(null);
    titleName('My Toy')
    // updated data get state
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        fetch(`https://assignment-11-server-puce-alpha.vercel.app/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [control])

    const handelOpenModal = (toyInfo) => {
        setUpdatedToyInfo(toyInfo);

    }

    const handelUpdateData = (id) => {
        const updatedInfo = {
            price,
            quantity,
            description
        }
        console.log(updatedInfo);
        if (price.length === 0) {
            updatedInfo.price = updatedToyInfo.price
        }
        if (quantity.length === 0) {
            updatedInfo.quantity = updatedToyInfo.quantity
        }
        if (description.length === 0) {
            updatedInfo.description = updatedToyInfo.quantity
        }
        fetch(`https://assignment-11-server-puce-alpha.vercel.app/updateToy/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setControl(!control)
                    addToast('Your data updated successfully', { appearance: 'success', autoDismiss: true, });
                    formRef.current.reset();
                    setPrice('')
                    setQuantity('')
                    setDescription('')
                }
                else if (data.modifiedCount < 1) {
                    addToast('Your cant add any data', { appearance: 'error', autoDismiss: true, })
                }
            })
        console.log(id);
    }

      

    const handelDeleteToy = (id) =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            console.log('sidd');
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-puce-alpha.vercel.app/deleteToy/${id}`,{
                    method:'DELETE'
                })
        .then(res=>res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
            setControl(!control)
            
        })
              
            }
          })

        
    }
    return (
        <div>
            
            <div className="overflow-x-auto max-w-7xl mx-auto">
            <select
                id="filter"
                onClick={(e)=>handelFilterData(e.target.value)}
                className="block my-10 mx-auto py-2 px-4 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Filter By Price</option>
                <option value="-1">Highest Price</option>
                <option  value="1">Lowest Price</option>
            </select>
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
            <a href="#my-modal-2" className="btn modal-toggle"></a>
            <div className="modal" id="my-modal-2">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-6"> Update <span className='text-pink-500'>{updatedToyInfo?.ToyName}</span> Information </h3>
                    <form ref={formRef} action="">
                        <div className='flex gap-5 '>
                            <div className="mb-4 w-1/2">
                                <label className="block  text-black font-bold mb-2" htmlFor="name">
                                    Toy Price
                                </label>
                                <input
                                    onChange={(e) => setPrice(e.target.value)}
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
                                    onChange={(e) => setQuantity(e.target.value)}
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
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md resize-none h-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                id="description"
                                name="description"
                                rows="4"
                                defaultValue={updatedToyInfo?.description}
                            ></textarea>
                        </div>

                        <a href="#" className="btn btn-sm btn-circle absolute right-2 top-2">X</a>
                        <div className="modal-action">
                            <a href="#" type='submit' onClick={() => handelUpdateData(updatedToyInfo?._id)} className="text-md border-l border-r hover:scale-110 focus:outline-none flex justify-center px-4 py-3 rounded-md font-bold cursor-pointer  hover:bg-teal-700 hover:text-white  bg-teal-100  text-teal-700 
                        border duration-200 ease-in-out 
                        border-teal-600 transition items-center"><FaPen className="mr-2" /></a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyToy;