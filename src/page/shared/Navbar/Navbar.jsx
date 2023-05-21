/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine, RiLoginBoxLine } from 'react-icons/ri';
import ActiveRoute from '../../../Routes/AcriveRoute/AcriveRoute';
import { FiLogIn } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip'
import logo from '../../../assets/images/logo/connexe_toys_logot5_1562832972__41152.webp'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  console.log(user);

  const handelLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => {
        console.log(error);
      })
  }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
            <img className='md:w-36 w-20' src={logo} alt="" />
            </div>
            <div className="block md:hidden">
              <button
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMenu}
              >
                Menu
              </button>
            </div>
            <div className={`hidden md:block ${isOpen ? 'block' : 'hidden'}`}>
              <div className="ml-4 text-white font-semibold gap-5 flex items-center md:ml-6">
                <ActiveRoute to='/'>Home</ActiveRoute>
                <ActiveRoute to='/allToy'>All Toys</ActiveRoute>
                {
                  user?.email ? <><ActiveRoute to='/myToy'>My Toys</ActiveRoute>
                    <ActiveRoute to='/add-toy'>Add A Toy</ActiveRoute></> : ''
                }
                <ActiveRoute to='/blog'>Blog</ActiveRoute>

              </div>
            </div>

            <div className='flex gap-5'>
              <div className='md:block hidden'>
              {
                user?.email ? <button onClick={handelLogOut} className="flex  items-center bg-transparent text-red-500 hover:bg-red-500   hover:text-white  font-semibold py-1 px-2 rounded-full border border-red-500 hover:border-red-700 transition duration-300">
                  <RiLogoutCircleRLine className="mr-1" size={16} />
                  Logout
                </button> : <Link to='/login'><button className="flex items-center justify-center border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-semibold py-2 px-4 rounded-full">
                  <FiLogIn className="mr-2" size={20} />
                  Login
                </button></Link>
              }
              </div>
              {
                user?.email ? <div className="avatar flex items-center">
                  <div className="w-12  rounded-full">
                    <img className='cursor-pointer' data-tooltip-content={user?.displayName} data-tooltip-id="my-tooltip" src={user?.photoURL} />
                  </div> 
                </div> : ''
              }
            </div>
          </div>
        </div>
        {/* Responsive mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 text-white pt-2 pb-3 space-y-1 sm:px-3">
          <ActiveRoute to='/'>Home</ActiveRoute> <br />
                <ActiveRoute to='/allToy'>All Toys</ActiveRoute> <br />
                {
                  user?.email ? <><ActiveRoute to='/myToy'>My Toys</ActiveRoute><br />
                    <ActiveRoute to='/add-toy'>Add A Toy</ActiveRoute><br /> </> : ''
                }
                <ActiveRoute to='/blog'>Blog</ActiveRoute><br />
            {
                user?.email ? <button onClick={handelLogOut} className="flex items-center bg-transparent text-red-500 hover:bg-red-500   hover:text-white  font-semibold py-1 px-2 rounded-full border border-red-500 hover:border-red-700 transition duration-300">
                  <RiLogoutCircleRLine className="mr-1" size={16} />
                  Logout
                </button> : <Link to='/login'><button className="flex items-center justify-center border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-semibold py-2 px-4 rounded-full">
                  <FiLogIn className="mr-2" size={20} />
                  Login
                </button></Link>
              }
          </div>
        </div>
      </nav>
        <Tooltip id="my-tooltip" className='text-red-900'/>  
    </div>
  );
};

export default Navbar;