import { DialogContent, DialogTitle, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { AppBar, Toolbar, ThemeProvider } from '@mui/material';
import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import axios from "../api/axios";
import '../styles/login.css';
import { Button } from "@mui/material"; 
import Logo from '../assets/logo.png';
import LandingDesktop from './landingDesktop';

const LOGIN_URL = 'auth/login';


export default function Login({setToken}) {

  const [open, setOpen] = useState(false);

  const emailRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post(LOGIN_URL, { email: email, password: password });
      setToken(response.data);
    }catch(err){
      console.log("ERRO: ", err);
    }
  } 

  return (
    <div>
        <AppBar position="sticky" color="primary">              
          <Toolbar sx={{justifyContent: "space-between"}}>
            <img src={Logo} className="logo-navbar"/>
            <div>
              <Button color="secondary" variant="outlined" disableElevation onClick={handleClick} sx={{marginRight: 3}}>Já sou parceiro</Button>
              <Button color="secondary" variant="contained" disableElevation onClick={handleClick}>Quero fazer parte</Button>
            </div>
          </Toolbar> 
        </AppBar>
        <LandingDesktop/>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Faça seu login!</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
            email:
            <input 
              type="email" 
              id="email" 
              ref={emailRef} 
              autoComplete="off" 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              required 
              />
            senha:
            <input 
              type="password" 
              id="password"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              required 
              />
            <button type="submit">enviar</button>
          </form>
          </DialogContent>
        </Dialog>
    </div>
  );  
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
