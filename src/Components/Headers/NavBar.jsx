import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../../Providers/AuthContext'

export const NavBar = () => {

    const { user, logOutUser } = useContext(AuthContext)

    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all-crops"}>AllCrops</NavLink></li>
        <li><NavLink to={"/login"}>LogIn</NavLink></li>
        <li><NavLink to={"/register"}>Register</NavLink></li>
        {
            user && user.email ? <>
            <li><NavLink to={"/profile"}>Profile</NavLink></li>
            <li><NavLink to={"/add-crops"}>Addcrops</NavLink></li>
            <li><NavLink to={"/my-posts"}>MyPosts</NavLink></li>
            <li><NavLink to={"/my-interest"}>MyInterest</NavLink></li>
            </> : ""
        }
    </>

    const handleSignOut = () =>{
        logOutUser()
    }


    return (
        <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-12 h-12 rounded-full flex justify-center items-center mx-1' src="https://i.ibb.co.com/8DdkRk4D/Screenshot-2025-11-12-070237.png" alt="" />
                <a className="btn btn-ghost text-xl">KrishiLink</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user.email ? <button onClick={handleSignOut} className='btn'>LogOut</button> : <button className='btn'><Link to={"/login"}>LogIn</Link></button>
                }
            </div>
        </div>

    )
}
