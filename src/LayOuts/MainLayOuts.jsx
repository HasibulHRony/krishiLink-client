import React, { useContext } from 'react'
import { NavBar } from '../Components/Headers/NavBar'
import { Outlet } from 'react-router'
import { Footer } from '../Components/Footers/Footer'
import { AuthContext } from '../Providers/AuthContext'
import { LoadingPage } from '../Components/LoadingPage/LoadingPage'

export const MainLayOuts = () => {
    const {loading} = useContext(AuthContext)
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-133px)]">
            {
                loading ? <LoadingPage></LoadingPage> :
                <Outlet></Outlet>
            }
            </div>
            <Footer></Footer>
        </div>
    )
}
