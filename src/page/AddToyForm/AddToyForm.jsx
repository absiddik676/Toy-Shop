import { useState } from 'react';

const AddToyForm = () => {
    const [toyData, setToyData] = useState({
        pictureUrl: '',
        name: '',
        sellerName: '',
        sellerEmail: '',
        subCategory: '',
        price: '',
        rating: '',
        quantity: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToyData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as saving the toy data
        console.log(toyData);
        // Reset form fields
        setToyData({
            pictureUrl: '',
            name: '',
            sellerName: '',
            sellerEmail: '',
            subCategory: '',
            price: '',
            rating: '',
            quantity: '',
            description: '',
        });
    };

    return (
        <div className='bg-no-repeat pt-6 w-full bg-cover' style={{ backgroundImage: `url(${`https://img.freepik.com/premium-vector/natural-landscape-background-video-conferencing_23-2148670211.jpg?size=626&ext=jpg&ga=GA1.1.443112825.1680188378&semt=ais`})` }}>
            <div className="w-3/5  mx-auto bg-[#1b1b1bb4] p-6 rounded-md shadow-md ">
                <h2 className="text-2xl font-bold mb-4 text-white">Add Toy</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-5 '>
                        <div className="mb-4 w-1/2">
                            <label className="block  text-white font-bold mb-2" htmlFor="name">
                                Toy Name
                            </label>
                            <input
                                className="w-full  focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="text"
                                id="name"
                                name="name"
                                value={toyData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="pictureUrl">
                                Picture URL
                            </label>
                            <input
                                className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="text"
                                id="pictureUrl"
                                name="pictureUrl"
                                value={toyData.pictureUrl}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="sellerName">
                                Seller Name
                            </label>
                            <input
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md"
                                type="text"
                                id="sellerName"
                                name="sellerName"
                                value={toyData.sellerName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="sellerEmail">
                                Seller Email
                            </label>
                            <input
                                className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="email"
                                id="sellerEmail"
                                name="sellerEmail"
                                value={toyData.sellerEmail}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="mb-5 w-1/2">
                            <label htmlFor="category" className="text-white  font-bold ">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={toyData.category}
                                onChange={handleChange}
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md mt-3"
                            >
                                <option value="">Select a category</option>
                                <option value="action-figures">Action Figures</option>
                                <option value="plush-toys">Plush Toys</option>
                                <option value="board-games">Board Games</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md"
                                type="text"
                                id="price"
                                name="price"
                                value={toyData.price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="quantity">
                                Available Quantity
                            </label>
                            <input
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md"
                                type="text"
                                id="quantity"
                                name="quantity"
                                value={toyData.quantity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="rating">
                                Rating
                            </label>
                            <input
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md"
                                type="text"
                                id="rating"
                                name="rating"
                                value={toyData.rating}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" htmlFor="description">
                            Detail Description
                        </label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            id="description"
                            name="description"
                            rows="4"
                            value={toyData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button
                        className="bg-indigo-500 w-full hover:bg-indigo-600 text-white py-2 px-4 rounded-md"
                        type="submit"
                    >
                        Add Toy
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddToyForm;
