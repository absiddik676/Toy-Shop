/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';
import { FiSearch } from 'react-icons/fi';


const AllToy = () => {
    const [allToys, setAllToys] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [limit,setLimit] = useState(5);


    useEffect(() => {
        fetch(`http://localhost:5000/allToy?limit=${limit}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])



    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
    };
    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <div className='flex justify-center mb-9'>
                <form onSubmit={handleSearchSubmit} className="relative flex ">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="border border-gray-300   rounded-r-none rounded-md px-10 py-2 focus:outline-none border-r-0 "
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 rounded-l-none text-white px-4 py-2 rounded-md "
                    >
                        Search
                    </button>
                    <FiSearch
                        size={20}
                        className="text-gray-500 absolute top-2 left-3 pointer-events-none"
                    />
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(toy => <AllToyRow key={toy._id} toy={toy}></AllToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;