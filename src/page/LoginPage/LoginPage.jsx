/* eslint-disable no-unused-vars */
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import bgImage from '../../assets/images/bg-image/colorful-balloons-floating-sky_1308-30484.avif'
import bgImage2 from '../../assets/images/bg-image/fluffy-toy-texture-close-up_23-2149686892.avif'
import { AuthContext } from '../../provider/AuthProvider';


const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [email,setEmail] = useState('');
  const { loginUser, forgetPassword} = useContext(AuthContext)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const handleLogin = (e) => {
    e.preventDefault();
    setError('')

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
      })
      .catch(error => {
        if (error.code === "auth/wrong-password") {
          setError("Invalid password. Please try again.");
        }
        else if (error.code === "auth/user-not-found") {
          setError('User not found. Please try again.')
        }
      })
  };

  const handelForgetPass = () =>[
    forgetPassword(email)
    .then(result =>{
        toast.success("Password reset link has been sent to your email")
    })
    .catch(error=>{
        console.log(error);
    })
  ]

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic...
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url()`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ backgroundImage: `url(${`${bgImage2}`})` }} className="container mx-auto bg-white shadow-md rounded-md p-8 max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="text-gray-800 font-semibold mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-800 font-semibold mb-2 block">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
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
          <p className='text-red-400 py-3 text-center  font-semibold'>{error}</p>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
            type="submit"
          >
            Login
          </button>
          <p className='text-center mt-2'>forgot password , <Link onClick={handelForgetPass} className='text-blue-700 font-semibold'>Reset Now</Link></p>
        </form>

        <div className="divider">OR</div>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 w-full mt-4"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button>
        <p className='text-center mt-2 text-lg'>New to toy shop ? <Link className='font-semibold text-red-400' to='/register'>Join now</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
