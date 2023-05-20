import React from 'react';

const AllToyRow = ({toy}) => {
    const {ToyName,category,price,quantity,sellerName} = toy
    return (
        
            <tr>
                <td>{sellerName}</td>
                <td>{ToyName}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td><button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
  Details
</button></td>
            </tr>
        
    );
};

export default AllToyRow;