import React from 'react';
import titleName from '../../Hooks/Hooks';



const Blog = () => {
    titleName('Blog')

    return (
        <div className='my-16'>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl mb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ef629f] to-[#eecda3]">Frequently Asked Questions</h1>
                <div className="space-y-6">
                    <div className="border border-gray-300 p-4">
                        <h2 className="text-xl font-semibold mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p className="text-gray-700">Access tokens are credentials used to access protected resources.Refresh token is a long-lived token compared to the access token and is used to request a new access token in cases where it is expired.The access token is used to authenticate and authorize requests to protected resources, while the refresh token is used to obtain a new access token when the current one expires. We  store them HTTP-only Cookies, browser's Local Storage.</p>
                    </div>
                    <div className="border border-gray-300 p-4">
                        <h2 className="text-xl font-semibold mb-2">Compare SQL and NoSQL databases?</h2>
                        <table className='w-full my-8 table'>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th className='text-center text-base' scope="col">SQL</th>
                                    <th className='text-center text-base' scope="col">NooSQL</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>SQL databases are primarily called RDBMS or Relational Databases.</td>
                                    <td>NoSQL databases are primarily called as Non-relational or distributed database.</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>SQL databases are table based databases</td>
                                    <td>NoSQL databases can be document based, key-value pairs, graph databases.</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>SQL databases have fixed databases</td>
                                    <td>NoSQL databases can be document based, key-value pairs, graph databases.</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Joins required</td>
                                    <td>Joins not required</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>These databases are best suited for complex queries</td>
                                    <td>These databases are not so good for complex queries</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="border border-gray-300 p-4">
                        <h2 className="text-xl font-semibold mb-2">What is express js? What is Nest JS?</h2>
                        <p className='text-xl mb-4'><span className='text-lg font-bold'> Express js: </span> Express.js is a fast, assertive, essential and moderate web framework of Node.js</p>
                        <p className='text-xl mb-4'><span className='text-lg font-bold'> Next js: </span> NestJS is a popular open-source framework for building efficient, scalable, and enterprise-grade backend applications using Node.js.</p>
                    </div>
                    <div className="border border-gray-300 p-4">
                        <h2 className="text-xl font-semibold mb-2">What is MongoDB aggregate and how does it work?</h2>
                        <p className="text-gray-700">MongoDB aggregate operations allow us to process multiple documents and return the calculated results. The MongoDB aggregate method works by applying a sequence of stages to process and transform data in a collection. Each stage performs a specific operation, such as filtering, grouping, sorting, or computing aggregations. </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Blog;