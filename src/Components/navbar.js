import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { AppBar, Box, Drawer, createTheme, ThemeProvider, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Logo from '../assets/logo.png';
import './styles.css';

const tabinTheme = createTheme({
  palette: {
    primary: {
      main: '#551f5f',
    } 
  }
});

export default function Navbar(props) {
  const isHomepage = props.isHomepage;

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  if (isHomepage) {
    return (
      <ThemeProvider theme={tabinTheme}>
        <Box>
        <AppBar position="static" color="primary">              
        <Toolbar>
          <img src={Logo} className="logo-navbar"/>
        </Toolbar> 
        </AppBar>
        </Box>
      </ThemeProvider>
    );
  }
  
  return (
    <ThemeProvider theme={tabinTheme}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">              
        <Toolbar sx={{ justifyContent: "space-between"}}>
          <img src={Logo} className="logo-navbar"/>
          <div>
            <Button style={{ color: "white" }}> <Link to="/" style={{ color: 'inherit', textDecoration: 'none'}}> Restaurante </Link> </Button>
            <Button style={{ color: "white" }}> <Link to="/mealsPage" style={{ color: 'inherit', textDecoration: 'none'}}> Cardápio </Link> </Button>
            <Button style={{ color: "white" }}> <Link to="/tablesPage" style={{ color: 'inherit', textDecoration: 'none'}}> Mesas </Link> </Button>
            <Button style={{ color: "white" }}> <Link to="/helpPage" style={{ color: 'inherit', textDecoration: 'none'}}> AJUDA </Link> </Button>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="notifications of current user"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <NotificationsIcon/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="notifications of current user"
              aria-controls="menu-appbar"
              color="inherit"
              onClick={ () => handleLogout() }
            >
              <ExitToAppIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      </Box>
    </ThemeProvider>
  ); 
}
