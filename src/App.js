import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from "./Components/login";
import ErrorPage from "./Pages/errorPage";
import MainPage from "./Components/main";
import JoinPage from "./Pages/joinRestaurant";
import CreateRestaurantPage from "./Pages/createRestaurant";
import Navbar from "./Components/navbar";
import ProfilePage from "./Pages/profile";
import ConsumerPage from "./Pages/consumerPage";
import { RestaurantPage } from "./Pages/Restaurant"
import { MealsPage } from "./Pages/Meals"
import { TablesPage } from "./Pages/Tables"
import { TermsPage } from "./Pages/Terms"
import { PolicyPage } from "./Pages/Policy"


import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  if(!token){
    return(
      <div className="wrapper">
      <Router>
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/consumerPage/:restaurant/:table" element={<ConsumerPage />} />
            <Route path="/termsPage" element={<TermsPage />} />
            <Route path="/policyPage" element={<PolicyPage />} />
          </Routes>
      </Router>
      </div>
    ); 
    // <Login setToken={setToken}/>
  }

  return(
    <div className="wrapper">
    <Router>
        <Navbar isHomepage={false} />
        <Routes>
          <Route path="/" element={<RestaurantPage currentToken={token} />} />
          <Route path="/mealsPage" element={<MealsPage currentToken={token} />} />
          <Route path="/tablesPage" element={<TablesPage currentToken={token} />} />
          <Route path="/createRestaurant" element={<CreateRestaurantPage/>} />
          <Route path="/profilePage" element={<ProfilePage currentToken={token}/>} />
          <Route path="/termsPage" element={<TermsPage />} />
          <Route path="/policyPage" element={<PolicyPage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
