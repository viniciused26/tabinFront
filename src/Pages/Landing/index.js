import { Page, Container, ContainerWithImg, ContainerWithImg2 } from "./style.js";
import { Footer } from '../../Components/Footer';
import { Grid, Typography, Button, Box, Fab } from "@mui/material";
import ArrowsDownIcon from '../../assets/arrowsDown.png';
import { useState, useEffect } from 'react';
import RestaurantIcon from '../../assets/icon1.png';
import CodeIcon from '../../assets/icon2.png';
import BellIcon from '../../assets/icon3.png';
import ComputerIcon from '../../assets/icon4.png';
import GraphIcon from '../../assets/icon5.png';
import CircleIcon from '../../assets/icon6.png';
import YellowCodeIcon from '../../assets/icon7.png';
import PersonIcon from '../../assets/icon8.png';
import BurgerIcon from '../../assets/icon9.png';
import BrushIcon from '../../assets/icon10.png';
import NetworkIcon from '../../assets/icon11.png';
import LockIcon from '../../assets/icon12.png';
import WppIcon from '../../assets/wpp.png';
import AddIcon from '@mui/icons-material/Add';

const LandingPage = (props) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });


  const style = {
    backgroundColor: "red",
    width: "100%",
    height: "100%"
  };

  const fabStyle = {
    position: 'fixed',
    bottom: 32,
    right: 64,
  };

  const fabStyleSmall = {
    position: 'fixed',
    bottom: 100,
    right: 32,
    width: 45,
    height: 10,
  };


  return(
    <Box sx={{ flexGrow: 1 }} >
      <Fab style={windowSize[0] <= 768 ? fabStyleSmall : fabStyle}>
        <a href="https://wa.link/sq3or5">
        <img src={WppIcon} style={windowSize[0] < 768 ? { width: "130%"} : { width: "150%"}}/>
        </a>
      </Fab>
      <ContainerWithImg style={{ height: windowSize[1] + 32 }}>
      <Grid container spacing={2} rowSpacing={8} style={windowSize[0] < 768 ? { padding: "15%" } : { padding: "7%" }}>
        {/* <Grid item xs={0} /> */}
        <Grid item xs={12}>
          <Typography variant={ windowSize[0] < 768 ? "h4" : "h3" } color="white" style={windowSize[0] < 768 ? { textAlign: "center", fontSize: "100%" } : { textAlign: "center", fontSize: "300%" }}>
            Reduza custos operacionais e aumente a margem de lucro do seu negócio com nosso cardápio digital 100% gratuito!
          </Typography>
        </Grid>
        {/* <Grid item xs={0} /> */}


        <Grid item xs={2} />
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <Button variant="contained" style={{background: "#53AA45"}} size="large" > COMECE JÁ! </Button>
        </Grid>
        <Grid item xs={2} />


        <Grid item xs={2} />
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <Typography variant="h5" color="white" style={windowSize[0] < 768 ? { textAlign: "center", fontSize: "90%" } : { textAlign: "center", fontSize: "200%" }}>
            Ideal para restaurantes, lanchonetes, bares, cafeterias, padarias etc
          </Typography>
        </Grid>
        <Grid item xs={2} />


        <Grid item xs={2} />
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <img src={ArrowsDownIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "5%" }}/>
        </Grid>
        <Grid item xs={2} />


      </Grid>
      </ContainerWithImg>

      <Container style={{ height: windowSize[1] + 64}}>
      <Grid container spacing={2} rowSpacing={8} style={windowSize[0] < 768 ? { padding: "15%" } : { padding: "7%" }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Typography variant={ windowSize[0] < 768 ? "h4" : "h3" } color="primary" style={{ textAlign: "center" }}>
            Como funciona?
          </Typography>
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={windowSize[0] < 768 ? 6 : 3} >
          <img src={RestaurantIcon} style={ windowSize[0] < 768 ? { width: "80%" } : { width: "60%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "h6" : "h5" } style={windowSize[0] < 768 ? {fontSize: "70%"} : {fontSize: "150%"}} color="primary">
            1. O cliente chega ao seu estabelecimento.
          </Typography>
        </Grid>
        <Grid item xs={windowSize[0] < 768 ? 6 : 3} >
          <img src={CodeIcon} style={ windowSize[0] < 768 ? { width: "60%" } : { width: "40%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "h6" : "h5" } style={windowSize[0] < 768 ? {fontSize: "70%"} : {fontSize: "150%"}} color="primary">
          2. Usa a câmera do celular dele para ler o cardápio QR code da mesa.
          </Typography>
        </Grid>
        <Grid item xs={windowSize[0] < 768 ? 6 : 3} >
          <img src={BellIcon} style={ windowSize[0] < 768 ? { width: "65%" } : { width: "45%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "h6" : "h5" } style={windowSize[0] < 768 ? {fontSize: "70%"} : {fontSize: "150%"}} color="primary">
          3. Decide o prato e chama o garçom através de botão “chamada”.
          </Typography>
        </Grid>
        <Grid item xs={windowSize[0] < 768 ? 6 : 3} >
          <img src={ComputerIcon} style={ windowSize[0] < 768 ? { width: "85%" } : { width: "65%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "h6" : "h5" } style={windowSize[0] < 768 ? {fontSize: "70%"} : {fontSize: "150%"}} color="primary">
          4. Pronto! Os pedidos são gerenciados através da plataforma.
          </Typography>
        </Grid>
      </Grid>
      </Container>

      <Container style={windowSize[0] <= 1024 ? { height: windowSize[1] + 410, backgroundColor: "#551f5f"} : { height: windowSize[1] + 64, backgroundColor: "#551f5f"}}>
      <Grid container spacing={2} rowSpacing={4} columnSpacing={2} style={windowSize[0] < 768 ? { padding: "7%" } : { padding: "5%" }}>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={GraphIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
            Redução de custos operacionais
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
            Elimine os custos de papelaria do seu cardápio e campainha eletrônica.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={CircleIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
          Atualização de cardápio
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
          Edite preços, fotos e descrição do seu prato a qualquer momento.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={YellowCodeIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
          Modernize seu estabelecimento
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
          Com tecnologia de acesso ao cardápio via QR Code.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={PersonIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
          Gerencie
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
          Pedidos, mesas e comandas de maneira fácil e rápida.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={BrushIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
          Customização de cardápio
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
          Adicione a logo do seu negócio e as cores de sua preferência.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={LockIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
          Sem limite de pedidos
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
          Use nossa solução sem barreiras.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={NetworkIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
          Várias contas
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
          Crie contas para seus colaboradores e limite as funções de cada conta.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          <img src={BurgerIcon} style={ windowSize[0] < 768 ? { width: "20%" } : { width: "7%" }}/>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white" style={{fontWeight: 'bold'}}>
          Melhor experiência
          </Typography>
          <div style={{ height: "5%" }}></div>
          <Typography variant={ windowSize[0] < 768 ? "subtitle2" : "h5" } color="white">
          Do seu cliente apresentando todos os detalhes dos pratos.
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left" }}>
          
        </Grid>


      </Grid>
      </Container>

      <ContainerWithImg2 style={{ height: windowSize[1] + 64, position: "relative" }}>
      <Grid container spacing={2} rowSpacing={6} style={windowSize[0] < 768 ? { padding: "15%" } : { padding: "7%" }}>

        <Grid item xs={12}>
          <Typography variant={ windowSize[0] < 768 ? "h4" : "h3" } color="white" style={windowSize[0] < 768 ? { textAlign: "center", fontSize: "100%" } : { textAlign: "center", fontSize: "300%" }}>
          Ferramenta totalmente grátis, sem taxas de adesão e sem cadastro com cartão de crédito.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant={ windowSize[0] < 768 ? "h4" : "h5" } color="white" style={windowSize[0] < 768 ? { textAlign: "center", fontSize: "100%" } : { textAlign: "center", fontSize: "300%" }}>
            É cadastrar e usar já!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant={ windowSize[0] < 768 ? "h4" : "h5" } color="white" style={windowSize[0] < 768 ? { textAlign: "center", fontSize: "100%" } : { textAlign: "center", fontSize: "300%" }}>
            Aceitamos desde MEI até grandes empresas.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant={ windowSize[0] < 768 ? "h4" : "h5" } color="white" style={windowSize[0] < 768 ? { textAlign: "center", fontSize: "100%" } : { textAlign: "center", fontSize: "300%" }}>
            Equipe pronta pra te ajudar e dar suporte.
          </Typography>
        </Grid>

        <Grid item xs={2} />
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <Button 
            variant="contained" 
            style={windowSize[0] < 768 ? {background: "#53AA45", width: "90%", fontSize: "70%"} : {background: "#53AA45"}} 
            size={windowSize[0] < 768 ? "small" : "large"} > 
            COMEÇAR AGORA! 
          </Button>
        </Grid>
        <Grid item xs={2} />

        <Footer windowWidth={windowSize[0]}/>



      </Grid>
      </ContainerWithImg2>

    </Box>
  );
}

export { LandingPage };

