import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpiners from '../components/LoadingSpiners';
import { AuthContext } from '../contexts/UserContexts';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()






    if (loading) {
        return <LoadingSpiners></LoadingSpiners>
    }



    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;