import React, { useContext } from 'react';
import { Route, Routes, Outlet } from "react-router-dom";

import Sidebar from '../layout/sidebar';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";


import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <Loader />
    }

    const MainLayout = () => {
        return (
            <>
                <Sidebar />
                <main>
                    <Header />
                    <Outlet />
                    <Footer />
                </main>
            </>
        )
    }
    return (
        isAuth
            ?
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                </Route>
            </Routes>
            :
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path='/login' element={<Login />} />
                </Route>
            </Routes>
    );
};

export default AppRouter;