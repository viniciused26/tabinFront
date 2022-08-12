import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import Login from "./pages/login";
import ErrorPage from "./pages/errorPage";
import MainPage from "./pages/main";
import JoinPage from "./pages/joinRestaurant";
import CreateRestaurantPage from "./pages/createRestaurant";
import RestaurantPage from "./pages/restaurantPage";
import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  if(!token){
    console.log(token)
    return <Login setToken={setToken}/>
  }

  return(
    <div className="wrapper">
    <Router>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/errorPage" element={<ErrorPage/>} />
          <Route path="/joinPage" element={<JoinPage/>} />
          <Route path="/createRestaurant" element={<CreateRestaurantPage/>} />
          <Route path="/restaurantPage" element={<RestaurantPage/>} />

        </Routes>

    </Router>
    </div>
  );
}

export default App;
