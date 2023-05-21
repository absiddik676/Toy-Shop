import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();


const BestSellingToy = () => {
    return (

        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=' max-w-7xl  mx-auto '>
            <h1 className="font-extrabold text-transparent text-4xl text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our best selling toy </h1>
            <div className='md:grid  grid-cols-3  '>
                <div className='flex mb-6 items-center justify-center'>
                    <img  className='w-28' src="https://m.media-amazon.com/images/I/51S7Q9coayL._AC_SX569_.jpg" alt="" />
                </div>
                <div className='flex  mb-6 items-center justify-center'>
                    <img src="https://m.media-amazon.com/images/I/71SFkA8c9gL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                </div>
                <div className='flex mb-6 items-center justify-center'>
                    <img src="https://m.media-amazon.com/images/I/61OsLitNqUL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                </div>
                <div className='flex mb-6 items-center justify-center'>
                    <img src="https://m.media-amazon.com/images/I/51mDG4R3HrL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                </div>
                <div className='flex mb-6 items-center justify-center'>
                    <img className='w-36' src="https://m.media-amazon.com/images/I/51uOpvrnO3L._AC_SX569_.jpg" alt="" />
                </div>
                <div className='flex mb-6 items-center justify-center'>
                    <img src="https://m.media-amazon.com/images/I/51OFm3YDtBL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default BestSellingToy;