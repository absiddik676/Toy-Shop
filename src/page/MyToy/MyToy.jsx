import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToy = () => {
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/myToy/${user?.email}`)
        .then(res => res.json())
        .then(data=>console.log(data))
    },[])


    return (
        <div>
            
        </div>
    );
};

export default MyToy;