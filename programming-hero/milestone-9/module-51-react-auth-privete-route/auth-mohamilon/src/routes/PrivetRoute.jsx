import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Orders from '../component/Orders';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }

    if(user){
        
        return children;
    }
    
    return (
        <div>
           
            {/* {
                user ? <Orders></Orders> : <Navigate to='/login'></Navigate>
            } */}

            <Navigate to='/login'></Navigate>
            
        </div>
    );
};

export default PrivetRoute;