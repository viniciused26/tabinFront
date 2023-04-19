import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, Box, Checkbox, Typography, IconButton } from "@mui/material";
import { AppBar, Toolbar, TextField, Snackbar, Stack } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { tabinService } from "../Services/tabinService";
import "../styles/login.css";
import { Button } from "@mui/material";
import Logo from "../assets/logo.png";
import { LandingPage } from "../Pages/Landing";
import { typography } from "@mui/system";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = "auth/login";

export default function Login({ setToken }) {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate("/registerPage");
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const modalStyleMobile = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 250,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [openFirst, setOpenFirst] = useState(false);

  const handleClickFirst = () => {
    setOpenFirst(true);
  };

  const handleCloseFirst = () => {
    setOpenFirst(false);
  };

  const [openSecond, setOpenSecond] = useState(false);

  const handleClickSecond = () => {
    setOpenSecond(true);
  };

  const handleCloseSecond = () => {
    setOpenSecond(false);
  };

  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phone, setPhone] = useState("");

  const [warnMessage, setWarnMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await tabinService.login(email, password);
      setWarnMessage("");
      setToken(response?.data);
    } catch (err) {
      console.log("ERRO: ", err.response?.data);
      setWarnMessage(err.response?.data);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const registerData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };

    if (password !== passwordCheck) {
      console.log("As senhas não coincidem!", password, passwordCheck);
      return;
    }

    try {
      const response = await tabinService.registerUser(registerData);
      // setToken(response);
      console.log("TESTE1");
      setWarnMessage("");
      handleCloseSecond();
      setOpenFirst(true);
      console.log("TESTE2");
    } catch (err) {
      console.log("ERRO: ", err);
      setWarnMessage(err.response?.data);
    }
  };

  return (
    <div>
      <AppBar position="sticky" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img alt="logo" src={Logo} className="logo-navbar" />
          <div style={windowSize[0] < 380 ? { display: "grid" } : null}>
            <Button
              color="secondary"
              variant="outlined"
              disableElevation
              onClick={handleClickFirst}
              sx={windowSize[0] >= 380 ? { marginRight: 3 } : null}
              style={
                windowSize[0] < 768
                  ? { marginBottom: "5%", marginTop: "5%" }
                  : null
              }
            >
              {windowSize[0] < 768 ? "entrar" : "já sou parceiro"}
            </Button>
            <Button
              color="secondary"
              variant="contained"
              disableElevation
              onClick={navigateRegister}
              style={
                windowSize[0] < 768
                  ? { marginBottom: "5%", marginTop: "5%" }
                  : null
              }
            >
              {windowSize[0] < 768 ? "inscrever-se" : "quero fazer parte"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <LandingPage openRegister={handleClickSecond} />
      <Modal open={openFirst} onClose={handleCloseFirst}>
        <Box sx={windowSize[0] < 425 ? modalStyleMobile : modalStyle}>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                label="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                style={{ marginBottom: "3%" }}
              />
            </div>
            <div>
              <TextField
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                label="Senha"
                required
                style={{ marginBottom: "3%" }}
              />
            </div>
            <div>
              <Typography
                style={{ display: "inline-block", marginBottom: "5%" }}
              >
                {warnMessage}
              </Typography>
            </div>
            <Button
              variant="contained"
              type="submit"
              style={{ marginBottom: "3%" }}
            >
              {" "}
              Entrar{" "}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
