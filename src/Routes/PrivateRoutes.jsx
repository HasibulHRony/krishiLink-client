import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../Providers/AuthContext';

export const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div>loading......</div>
    }

    if(user && user.email){
        return children;
    }


  return (
    <Navigate to={"/login"}></Navigate>
  )
}
