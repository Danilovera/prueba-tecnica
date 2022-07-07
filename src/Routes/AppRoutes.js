import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardRouters from "./DashboardRouters";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const AppRoutes = () => {

  const [cheking, setCheking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] =useState(false)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
                console.log(user)
                setIsLoggedIn(true)
            }
            else{
                setIsLoggedIn(false)  
            }
            setCheking(false)
        })
    }, [setIsLoggedIn, setCheking])

    if(cheking) {
        return (
           <h1>Espere....</h1>
         
        )
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter isAutentication={isLoggedIn}>
              <Login />
            </PublicRouter>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouter isAutentication={isLoggedIn}>
              <Register />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter isAutentication={isLoggedIn}>
              <DashboardRouters />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
