import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys,setMyToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])


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
                            myToys.map((toys,index) =><MyToyRow index={index} key={toys._id} toys={toys}></MyToyRow>)
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;