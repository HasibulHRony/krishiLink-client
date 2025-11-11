import React from 'react'
import { NavBar } from '../Components/Headers/NavBar'
import { Outlet } from 'react-router'
import { Footer } from '../Components/Footers/Footer'

export const MainLayOuts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='pt-8'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}
