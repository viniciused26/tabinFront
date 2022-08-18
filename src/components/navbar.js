import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
    <div>
      <li><Link to="/">Homepage</Link></li>
      <li><Link to="/joinPage">Join</Link></li>
      <li><Link to="/createRestaurant">Create restaurant</Link></li>
      <li><Link to="/restaurantPage">Restaurant</Link></li>
      <li><Link to="/profilePage">Profile</Link></li>
    </div>
  );
  
  
}
