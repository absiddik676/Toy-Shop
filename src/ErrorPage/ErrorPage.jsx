import React from 'react';
import  img from '../assets/images/logo/design-404-error-page-is-lost-found-message-template-web-page-with-404-error-modern-line-design_6280-165.avif'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <>
        <div className='flex h-5/6  justify-center items-center'>
            <img className='w-80 mt-20' src={img} alt="" />
            
        </div>
        <div className='flex justify-center mt-5'>
        <Link to='/'><button className='btn btn-primary'>Go to Home</button></Link>
        </div>
        </>
    );
};

export default ErrorPage;