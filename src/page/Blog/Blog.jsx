import React from 'react';



const Blog = () => {
    

    return (
        <div className='my-16'>

            <div className='lg:px-20 px-6 mt-11'>
                <div >
                    <div className='flex items-center'>
                        <h1 className='lg:text-xl text-lg font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Differences between uncontrolled and controlled components? </h1>
                        
                    </div>
                    <div >
                        <p className='text-xl mb-4'> <span className='font-bold'>Uncontrolled component: </span> In an uncontrolled component, the value of the input element is handled by the DOM itself.
                            Input elements inside uncontrolled components work just like normal HTML input form elements</p>
                        <p className='text-xl mb-4'> <span className='font-bold'>Controlled component:</span> In a controlled component, the value of the input
                            element is controlled by React.
                            Using event-based callbacks, any changes made to the input element will be reflected in the code as well.</p>
                    </div>

                </div>
                <div className='flex items-center'>
                    <h1 className='lg:text-xl text-lg font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>How to validate React props using PropTypes?</h1>
                    
                </div>
                <div >
                    <p className='text-xl '><span className='text-xl font-bold'>PropTypes:</span> Props are a very important mechanism for passing read-only attributes to React components. PropTypes is React’s internal mechanism for adding type checking to component props. When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the console.</p>
                </div>


                <div className='flex items-center'>
                    <h1 className='lg:text-xl text-lg  font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'> Difference between nodejs and express js.?</h1>
                    
                </div>
                <div >
                    <p className='text-xl mb-4'><span className='text-lg font-bold'> Node.js: </span> Node.js, an open-source, cross-platform JavaScript runtime environment that leverages the V8 engine and executes JavaScript code outside of a web browser.</p>
                    <p className='text-xl mb-4'><span className='text-lg font-bold'> Express.js: </span> Express.js is a framework for Node.js, so in order to use it, we will use Node.js anyway. Express.js will help us organize our application better.</p>
                </div>


                <div className='flex items-center'>
                    <h1 className='lg:text-2xl text-xl  font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>What is a custom hook, and why will you create a custom hook?</h1>

                </div>
                <div>
                    <p className='text-xl mb-4'><span className='text-lg font-bold'>Custom hooks:</span> Custom Hooks are a feature in React that allow use to create reusable logic that can be shared across multiple components. Custom hooks allow to us create our own reusable logic, and let us share logic between components, making ours components cleaner and more maintainable.</p>
                </div>



            </div>
        </div>
    );
};

export default Blog;