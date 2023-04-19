import {
  Page,
  Container,
  ContainerWithImg,
  ContainerWithImg2,
} from "./style.js";
import { Footer } from "../../Components/Footer";
import { TextField, Typography, Button, Box, Fab, Checkbox } from "@mui/material";
import { tabinService } from "../../Services/tabinService";
import ArrowsDownIcon from "../../assets/arrowsDown.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantIcon from "../../assets/icon1.png";
import CodeIcon from "../../assets/icon2.png";
import BellIcon from "../../assets/icon3.png";
import ComputerIcon from "../../assets/icon4.png";
import GraphIcon from "../../assets/icon5.png";
import CircleIcon from "../../assets/icon6.png";
import YellowCodeIcon from "../../assets/icon7.png";
import PersonIcon from "../../assets/icon8.png";
import BurgerIcon from "../../assets/icon9.png";
import BrushIcon from "../../assets/icon10.png";
import NetworkIcon from "../../assets/icon11.png";
import LockIcon from "../../assets/icon12.png";
import WppIcon from "../../assets/wpp.png";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../../Components/navbar";

const RegisterPage = (props) => {

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

  const navigateSuccess = () => {
    navigate("/successPage");
  };

  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phone, setPhone] = useState("");

  const [warnMessage, setWarnMessage] = useState("");

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
      navigateSuccess();
      console.log("TESTE2");
    } catch (err) {
      console.log("ERRO: ", err);
      setWarnMessage(err.response?.data);
    }
  };

  return (
    <Box sx={windowSize[0] < 425 ? modalStyleMobile : modalStyle}>
      <Navbar isHomepage={true} />
      <form onSubmit={handleRegister}>
        <div>
          <Typography style={{ display: "inline-block", marginBottom: "5%" }}>
            {warnMessage}
          </Typography>
        </div>
        <div>
          <TextField
            type="string"
            id="nome"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            label="Nome completo"
            style={{ marginBottom: "3%" }}
          />
        </div>
        <div>
          <TextField
            type="email"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            label="E-mail"
            style={{ marginBottom: "3%" }}
          />
        </div>
        <div>
          <TextField
            type="string"
            id="phone"
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            label="Telefone com DDD"
            style={{ marginBottom: "3%" }}
          />
        </div>
        <div>
          <TextField
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            label="Senha"
            style={{ marginBottom: "3%" }}
          />
        </div>
        <div>
          <TextField
            type="password"
            id="passwordCheck"
            onChange={(e) => setPasswordCheck(e.target.value)}
            value={passwordCheck}
            required
            label="Confirme sua senha"
            style={{ marginBottom: "3%" }}
          />
        </div>
        <div>
          <Checkbox required id="terms" />
          <Typography style={{ display: "inline-block" }}>
            Li e concordo com os{" "}
            <a href="http://tabin.com.br/termsPage"> termos de uso: </a>
          </Typography>
        </div>
        <div>
          <Checkbox required id="policy" />
          <Typography style={{ display: "inline-block" }}>
            Li e concordo com a{" "}
            <a href="http://tabin.com.br/policyPage">
              {" "}
              política de privacidade:{" "}
            </a>
          </Typography>
        </div>
        <Button variant="contained" type="submit">
          {" "}
          CADASTRAR{" "}
        </Button>
      </form>
    </Box>
  );
};

export { RegisterPage };
