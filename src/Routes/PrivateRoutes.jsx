import React, { useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../Providers/AuthContext';
import { LoadingPage } from '../Components/LoadingPage/LoadingPage';

export const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(user && user.email){
        return children;
    }


  return (
    <Navigate to={"/login"}></Navigate>
  )
}
