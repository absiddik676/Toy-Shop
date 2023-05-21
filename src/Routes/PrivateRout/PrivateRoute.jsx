import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Spinner from '../../page/shared/Spinner/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    
    if(loading){
        return <Spinner/>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;