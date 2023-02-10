import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./Components/login";
import ErrorPage from "./Pages/errorPage";
import MainPage from "./Components/main";
import JoinPage from "./Pages/joinRestaurant";
import CreateRestaurantPage from "./Pages/createRestaurant";
import RestaurantPage from "./Pages/restaurantPage";
import Navbar from "./Components/navbar";
import ProfilePage from "./Pages/profile";
import ConsumerPage from "./Pages/consumerPage";
import { DashboardPage } from "./Pages/Dashboard"


import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return(
    <div className="wrapper">
    <Router>
        <Navbar isHomepage={false} />
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/joinPage" element={<JoinPage/>} />
          <Route path="/createRestaurant" element={<CreateRestaurantPage/>} />
          <Route path="/restaurantPage" element={<RestaurantPage currentToken={token}/>} />
          <Route path="/profilePage" element={<ProfilePage currentToken={token}/>} />
          <Route path="/consumerPage/:restaurant/:tableId" element={<ConsumerPage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
