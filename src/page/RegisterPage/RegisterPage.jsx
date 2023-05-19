import { useState } from 'react';

import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const RegisterPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission...
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const PhotoURL = form.PhotoURL.value;
        console.log(name,email,password,PhotoURL);
       
    };


    return (
        <div style={{ backgroundImage: `url(${`https://img.freepik.com/free-vector/colorful-balloons-floating-sky_1308-30484.jpg?size=626&ext=jpg&ga=GA1.1.443112825.1680188378&semt=sph`})` }} className="min-h-screen bg-no-repeat pt-6 w-full bg-cover bg-gray-100 flex justify-center items-center">
            <div style={{ backgroundImage: `url(${`https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686892.jpg?size=626&ext=jpg&ga=GA1.1.443112825.1680188378&semt=ais`})` }} className="bg-white bg-no-repeat pt-6 w-full bg-cover shadow-md rounded-md p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="text-gray-800 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-800 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-gray-800 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="text-gray-800 font-bold mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="Photo-URL"
                            name="PhotoURL"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
                        type="submit"
                    >
                        Register
                    </button>
                    
                </form>
                <div className="divider">OR</div>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 w-full mt-4"

                    >
                        <FaGoogle className="mr-2" />
                        Sign in with Google
                    </button>
                        <p className='text-center mt-2 text-lg'>Already Have an account ? <Link className='font-semibold text-red-400' to='/login'>Login</Link></p>
            </div>


        </div>
    );
};

export default RegisterPage;
