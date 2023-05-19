import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Handle login logic...
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic...
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/colorful-balloons-floating-sky_1308-30484.jpg?size=626&ext=jpg&ga=GA1.1.443112825.1680188378&semt=sph')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto bg-white shadow-md rounded-md p-8 max-w-md">
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
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-800 font-semibold mb-2 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 w-full mb-4"
            type="submit"
          >
            Login
          </button>
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
