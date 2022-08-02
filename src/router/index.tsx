import React, {ReactNode} from "react";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";


export const privateRoutes =  [
    {path: '/', element: <Home/>, exact: true},
    {path: 'products', element: <Products/>, exact: true},
    // {path: '/posts/:id', component: PostIdPage, exact: true},
]

export const publicRoutes = [
    {path: 'login', element: <Login/>, exact: true},
]