import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./components/login";
import ErrorPage from "./pages/errorPage";
import MainPage from "./components/main";
import JoinPage from "./pages/joinRestaurant";
import CreateRestaurantPage from "./pages/createRestaurant";
import RestaurantPage from "./pages/restaurantPage";
import Navbar from "./components/navbar";
import ProfilePage from "./pages/profile";
import ConsumerPage from "./pages/consumerPage";


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
          <Route path="/" element={<ErrorPage/>} />
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
