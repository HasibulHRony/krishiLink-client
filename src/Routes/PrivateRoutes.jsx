import React from 'react'
import { Navigate } from 'react-router';

export const PrivateRoutes = ({children}) => {

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
