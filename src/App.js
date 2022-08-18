import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/login";
import ErrorPage from "./components/errorPage";
import MainPage from "./components/main";
import JoinPage from "./components/joinRestaurant";
import CreateRestaurantPage from "./components/createRestaurant";
import RestaurantPage from "./components/restaurantPage";
import Navbar from "./components/navbar";
import ProfilePage from "./components/profile";


import useToken from './useToken';



function App() {

  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return(
    <div className="wrapper">
    <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/errorPage" element={<ErrorPage/>} />
          <Route path="/joinPage" element={<JoinPage/>} />
          <Route path="/createRestaurant" element={<CreateRestaurantPage/>} />
          <Route path="/restaurantPage" element={<RestaurantPage currentToken={token}/>} />
          <Route path="/profilePage" element={<ProfilePage currentToken={token}/>} />

        </Routes>

    </Router>
    </div>
  );
}

export default App;
