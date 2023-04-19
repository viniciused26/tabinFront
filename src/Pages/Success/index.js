import {
  Page,
  Container,
  ContainerWithImg,
  ContainerWithImg2,
} from "./style.js";
import { Footer } from "../../Components/Footer";
import { Grid, Typography, Button, Box, Link } from "@mui/material";
import ArrowsDownIcon from "../../assets/arrowsDown.png";
import { useState, useEffect } from "react";
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

const SuccessPage = (props) => {
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

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <Box>
      <Navbar isHomepage={true} />
      <Typography
        variant={"h3"}
        color="primary"
        style={{
          marginTop: "2%",
          margin: "4%",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        Você foi cadastrado com successo!
      </Typography>
      <Button variant="contained" style={{ marginLeft: "5%", color: "white" }} onClick={navigateHome}>
        Retornar para página principal
      </Button>
    </Box>
  );
};

export { SuccessPage };
