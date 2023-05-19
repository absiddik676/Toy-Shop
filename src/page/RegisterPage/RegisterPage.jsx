import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/bg-image/colorful-balloons-floating-sky_1308-30484.avif'
import bgImage2 from '../../assets/images/bg-image/fluffy-toy-texture-close-up_23-2149686892.avif'
import { AuthContext } from '../../provider/AuthProvider';

const RegisterPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const {createUser} = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission...
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const PhotoURL = form.PhotoURL.value;
        console.log(name, email, password, PhotoURL);
        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset()
        })
        .catch(error =>{{
            console.log(error);
        }})

    };


    return (
        <div style={{ backgroundImage: `url(${`${bgImage}`})` }} className="min-h-screen bg-no-repeat pt-6 w-full bg-cover bg-gray-100 flex justify-center items-center">
            <div style={{ backgroundImage: `url(${`${bgImage2}`})` }} className="bg-white pt-6 shadow-md rounded-md p-8 max-w-md  w-full">
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
                        <div className="relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                name="password"

                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="text-gray-700" />
                                ) : (
                                    <FaEye className="text-gray-700" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="text-gray-800 font-bold mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="Photo-URL"
                            name="PhotoURL"
                            className="w-full border m-0 border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            
                        />
                    </div>
                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full "
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
