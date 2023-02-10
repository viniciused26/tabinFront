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

export default function Navbar(props) {
  const isHomepage = props.isHomepage;

  if (isHomepage) {
    return (
      <ThemeProvider theme={tabinTheme}>
        <AppBar position="static" color="primary">              
        <Toolbar>
          <img src={Logo} className="logo-navbar"/>
        </Toolbar> 
        </AppBar>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={tabinTheme}>
      <AppBar position="static" color="primary">              
        <Toolbar>
          <img src={Logo} className="logo-navbar"/>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  ); 
}
