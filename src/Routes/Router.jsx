import React from 'react'
import { createBrowserRouter } from 'react-router';
import App from '../App';
import { MainLayOuts } from '../LayOuts/MainLayOuts';
import { Home } from '../Components/Home/Home';
import { AllCrops } from '../Pages/AllCrops/AllCrops';
import { LogIn } from '../Pages/LogIn/LogIn';
import { Register } from '../Pages/Register/Register';

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
        ]
    },
]);
