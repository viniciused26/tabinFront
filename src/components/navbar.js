import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { AppBar, Drawer, createTheme, ThemeProvider } from '@mui/material';
import { Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';
import './styles.css';

const tabinTheme = createTheme({
  palette: {
    primary: {
      main: '#551f5f',
    } 
  }
});

const styles = {
  customizeToolbar: {
    minHeight: 120
  }
};

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const isHomepage = props.isHomepage;

  if (isHomepage) {
    return (
      <ThemeProvider theme={tabinTheme}>
      <AppBar position="static" color="primary">              
      <Toolbar>
        <div>
          <img src={Logo} className="logo-navbar"/>
          
        </div>
      </Toolbar> 
      </AppBar>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={tabinTheme}>
    <AppBar position="static" color="primary">              
    <Toolbar>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpen(true);
            }}
      >
      <MenuIcon />
    </IconButton>
      <img src={Logo} className="logo-navbar"/>
    </Toolbar>
    <Drawer open={open} PaperProps={{
      sx: {
        backgroundColor: '#551f5f'
      }
    }} onClick={() => {
      setOpen(false);
    }}>
    <Link to="/">Homepage</Link>
    <Link to="/joinPage">Join</Link>
    <Link to="/createRestaurant">Create restaurant</Link>
    <Link to="/restaurantPage">Restaurant</Link>
    <Link to="/profilePage">Profile</Link>
    </Drawer>
    
    
    </AppBar>
    </ThemeProvider>
  ); 
  
}
