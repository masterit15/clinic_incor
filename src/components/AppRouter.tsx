import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    // console.log(isAuth)
    
    if (isLoading) {
        return <Loader/>
    }
    
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
                {/* <Navigate to='/home'/> */}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        key={route.path}
                    />
                )}
                {/* <Navigate to='/login'/> */}
            </Routes>
    );
};

export default AppRouter;