import { Typography, Button } from "@mui/material";
import '../styles/login.css';
import RestaurantIcon from '../assets/icon1.png';
import CodeIcon from '../assets/icon2.png';
import BellIcon from '../assets/icon3.png';
import ComputerIcon from '../assets/icon4.png';
import GraphIcon from '../assets/icon5.png';
import CircleIcon from '../assets/icon6.png';
import YellowCodeIcon from '../assets/icon7.png';
import PersonIcon from '../assets/icon8.png';

export default function LandingDesktop(){
    return(
        <div>
            <div className="block-one">
            <div className="parent-one">
                <div className="child">
                <Typography variant="h2" color="white">Reduza custos operacionais e aumente a margem de lucro do seu negócio com a nossa solução 100% gratuita!</Typography>
                </div>
                <div className="child">
                <Button variant="contained" color="success" size="large" style={{width: '250px', height: '50px', fontSize: '20px'}}> COMECE JÁ! </Button>
                </div>
                <div className="child">
                <Typography variant="h3" color="white">Ideal para restaurantes, lanchonetes, bares, cafeterias, padarias e outros.</Typography>
                </div>
            </div>
            </div>
            <div className="block-two">
                <Typography style={{ marginTop: "5vh"}} variant="h2" color="primary">Como funciona?</Typography>
                <div className="parent-two">
                <div id="stepicon-one" className="child-two">
                    <img src={RestaurantIcon} style={{marginRight: "20vh"}} />
                </div>
                <div id="stepicon-two" className="child-two">
                    <img src={CodeIcon} style={{marginRight: "30vh"}} />
                </div>
                <div id="stepicon-two" className="child-two">
                    <img src={BellIcon} style={{marginRight: "20vh"}} />
                </div>
                <div id="stepicon-one" className="child-two">
                    <img src={ComputerIcon} style={{ marginLeft: "10vh" }}/>
                </div>
                </div>

                <div className="parent-two">
                <div className="child-two">
                    <Typography variant="h5" color="primary">1. O cliente chega ao seu estabelecimento.</Typography>
                </div>
                <div className="child-two">
                    <Typography variant="h5" color="primary">2. Usa a câmera do celular dele para ler o cardápio QR code da mesa.</Typography>
                </div>
                <div className="child-two">
                    <Typography variant="h5" color="primary">3. Decide o prato e chama o garçom através de botão “chamada”.</Typography>
                </div>
                <div className="child-two">
                    <Typography variant="h5" color="primary">4. Pronto! Os pedidos são gerenciados através da plataforma.</Typography>
                </div>
                </div>
            </div>
            <div className="block-three">
                <div className="child">
                    <Typography variant="h2" color="white">Benefícios para o </Typography>
                    <Typography variant="h2" style={{marginLeft: "1.5vh"}} color="secondary">seu negócio: </Typography>
                </div>

                <div className="child-three">
                    <div className="grid-element">
                    <img src={GraphIcon} style={{ width: "15vh", marginBottom: "3vh" }}/>
                    <Typography style={{fontSize: "20px"}} variant="h2" color="white">Redução de custos operacionais </Typography>
                    <Typography style={{fontSize: "20px"}} variant="h3" color="white">Elimine os custos de papelaria do seu cardápio e campainha eletrônica.</Typography>
                    </div>

                    <div className="grid-element">
                    <img src={CircleIcon} style={{ width: "15vh", marginBottom: "3vh"  }}/>
                    <Typography style={{fontSize: "20px"}} variant="h2" color="white">Atualização de cardápio </Typography>
                    <Typography style={{fontSize: "20px"}} variant="h3" color="white">Edite preços, fotos e descrição do seu prato a qualquer momento.</Typography>
                    </div>
                </div>

                <div className="child-three">
                    <div className="grid-element">
                    <img src={YellowCodeIcon} style={{ width: "15vh", marginBottom: "3vh"  }}/>
                    <Typography style={{fontSize: "20px"}} variant="h2" color="white">Modernize seu estabelecimento </Typography>
                    <Typography style={{fontSize: "20px"}} variant="h3" color="white">Com tecnologia de acesso ao cardápio via QR Code.</Typography>                    
                    </div>

                    <div className="grid-element">
                    <img src={PersonIcon} style={{ width: "15vh", marginBottom: "3vh"  }}/>
                    <Typography style={{fontSize: "20px"}} variant="h2" color="white">Gerencie</Typography>
                    <Typography style={{fontSize: "20px"}} variant="h3" color="white">Pedidos, mesas e comandas de maneira rápida e fácil.</Typography>
                    </div>
                </div>
                
                
                <div className="child">
                    <Button variant="contained" color="success" size="large" style={{width: '275px', height: '75px', fontSize: '20px'}}> CADASTRAR AGORA! </Button>
                </div>
            </div>
            <div className="block-four">
            <div className="parent-four">
                <div className="child">
                    <Typography variant="h2" color="black">Ferramenta totalmente GRÁTIS, para SEMPRE! Sem taxas de adesão e sem cadastro com cartão de crédito! </Typography>
                </div>
                <div className="child-four">
                    <Typography variant="h2" color="black">É cadastrar e </Typography>
                    <div style={{marginLeft: "1.5vh"}}>
                        <Typography variant="h2" color="secondary">usar já!</Typography>
                    </div>
                </div>
                <div className="child">
                    <Typography variant="h2" color="black">Aceitamos MEI e qualquer empresa, não importa o tamanho. </Typography>
                </div>
                <div className="child">
                    <Typography variant="h2" color="black">Equipe pronta pra te ajudar e dar suporte! </Typography>
                </div>
            </div>
            </div>
        </div>
    );
}