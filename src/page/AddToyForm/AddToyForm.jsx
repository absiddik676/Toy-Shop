import { useContext, } from 'react';

import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useToasts } from 'react-toast-notifications';

const AddToyForm = () => {
    const {user} = useContext(AuthContext)
    const { addToast, toastStack } = useToasts();

    
    const handleSubmit = (e) => {

        e.preventDefault()
        const from = e.target;
        const ToyName = from.ToyName.value;
        const pictureUrl = from.pictureUrl.value;
        const sellerName = from.sellerName.value;
        const sellerEmail = from.sellerEmail.value;
        const category = from.category.value;
        const price = from.price.value;
        const quantity = from.quantity.value;
        const rating = from.rating.value;
        const description = from.description.value;

        const  toyInfo = {
            ToyName,
            pictureUrl,
            sellerName,
            sellerEmail,
            category,
            price,
            quantity,
            rating,
            description
        }
       

        
        fetch('http://localhost:5000/addToy',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(toyInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (toastStack.length === 0) {
                addToast('Your Toy added successfully', { appearance: 'success',autoDismiss: true, });
              }
            from.reset()
        })
    }
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
                               required
                                className="w-full  focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="text"
                                id="name"
                                name="ToyName"
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="pictureUrl">
                                Picture URL
                            </label>
                            <input
                                required
                                className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="text"
                                id="pictureUrl"
                                name="pictureUrl"
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="sellerName">
                                Seller Name
                            </label>
                            <input
                               defaultValue={user?.displayName}
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md"
                                type="text"
                                id="sellerName"
                                name="sellerName"
                                
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="sellerEmail">
                                Seller Email
                            </label>
                            <input
                                defaultValue={user?.email}
                                className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-300 p-2 rounded-md"
                                type="email"
                                id="sellerEmail"
                                name="sellerEmail"
                                
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className="mb-5 w-1/2">
                            <label htmlFor="category" className="text-white  font-bold ">
                                Category
                            </label>
                            <select
                                required
                                id="category"
                                name="category"
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md mt-3"
                            >
                                <option value="">Select a category</option>
                                <option value="pokemon-toys">Pokemon toys </option>
                                <option value="Doraemon-toys">Doraemon toys</option>
                                <option value="Naruto-action-figures"> Naruto action figures </option>
                                <option value="Demon-slayer-toys"> Demon slayer toys</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-white font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                required
                                className="w-full border focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300 p-2 rounded-md"
                                type="text"
                                id="price"
                                name="price"
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
