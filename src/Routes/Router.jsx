import React from 'react'
import { createBrowserRouter } from 'react-router';
import App from '../App';
import { MainLayOuts } from '../LayOuts/MainLayOuts';
import { Home } from '../Components/Home/Home';
import { AllCrops } from '../Pages/AllCrops/AllCrops';
import { LogIn } from '../Pages/LogIn/LogIn';
import { Register } from '../Pages/Register/Register';
import { PrivateRoutes } from './PrivateRoutes';
import { CropDetails } from '../Pages/CropDetails/CropDetails';
import { AddCrops } from '../Pages/AddCrops/AddCrops';
import { MyPosts } from '../Pages/MyPosts/MyPosts';
import { MyInterest } from '../Pages/MyInterest/MyInterest';
import { Profile } from '../Pages/Profile/Profile';
import { Error } from '../Pages/Error';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOuts></MainLayOuts>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/all-crops",
                loader: ()=>fetch("http://localhost:3000/added-crops"),
                element: <AllCrops></AllCrops>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/crops-details",
                element: <PrivateRoutes>
                    <CropDetails></CropDetails>
                </PrivateRoutes>
            },
            {
                path: "/add-crops",
                element: <PrivateRoutes>
                    <AddCrops></AddCrops>
                </PrivateRoutes>
            },
            {
                path: "/my-posts",
                element: <PrivateRoutes>
                    <MyPosts></MyPosts>
                </PrivateRoutes>
            },
            {
                path: "/my-interest",
                element: <PrivateRoutes>
                    <MyInterest></MyInterest>
                </PrivateRoutes>
            },
            {
                path: "/profile",
                element: <PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>
            },

        ]
    },
    {
        path: "*",
        element: <Error></Error>
    },
]);
