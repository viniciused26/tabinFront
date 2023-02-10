import { Modal, Box } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { AppBar, Toolbar, ThemeProvider } from '@mui/material';
import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { tabinService } from "../Services/tabinService";
import '../styles/login.css';
import { Button } from "@mui/material"; 
import Logo from '../assets/logo.png';
import LandingDesktop from './landingDesktop';

const LOGIN_URL = 'auth/login';


export default function Login({setToken}) {

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const [openFirst, setOpenFirst] = useState(false);
  
  const handleClickFirst = () => {
    setOpenFirst(true);
  }

  const handleCloseFirst = () => {
    setOpenFirst(false);
  }
  
  const [openSecond, setOpenSecond] = useState(false);

  const handleClickSecond = () => {
    setOpenSecond(true);
  }

  const handleCloseSecond = () => {
    setOpenSecond(false);
  }

  const emailRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = tabinService.login(email, password);
      setToken(response);
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
              <Button color="secondary" variant="outlined" disableElevation onClick={handleClickFirst} sx={{marginRight: 3}}>Já sou parceiro</Button>
              <Button color="secondary" variant="contained" disableElevation onClick={handleClickSecond}>Quero fazer parte</Button>
            </div>
          </Toolbar> 
        </AppBar>
        <LandingDesktop/>
        <Modal
          open={openFirst}
          onClose={handleCloseFirst}
        >
          <Box sx={modalStyle}>
          <form onSubmit={handleSubmit}>
            <div>
              E-mail:
              <input 
                type="email" 
                id="email" 
                ref={emailRef} 
                autoComplete="off" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                required 
              />
            </div>
            <div>
              Senha:
              <input 
                type="password" 
                id="password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required 
              />
            </div>
            <button type="submit"> ENVIAR </button>
          </form>
          </Box>
        </Modal>
        <Modal
          open={openSecond}
          onClose={handleCloseSecond}
        >
          <Box sx={modalStyle}>
          <form onSubmit={handleSubmit}>
            <div>
              E-mail:
              <input 
                type="email" 
                id="email" 
                ref={emailRef} 
                autoComplete="off" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                required 
              />
            </div>
            <div>
              Senha:
              <input 
                type="password" 
                id="password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required 
              />
            </div>
            <div>
              Confirme senha:
              <input 
                type="password" 
                id="password"
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required 
              />
            </div>
            <button type="submit"> ENVIAR </button>
          </form>
          </Box>
        </Modal>
    </div>
  );  
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
