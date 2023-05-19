import React from 'react';
import { NavLink } from "react-router-dom";
import './AcriveRoute.css'
const ActiveRoute = ({to,children}) => {
    return (
            <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
           {children}
        </NavLink>
    );
};

export default ActiveRoute;