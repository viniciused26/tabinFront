import { Button, Typography, Grid } from "@mui/material";
import InstIcon from '../../assets/icon13.png';
import FaceIcon from '../../assets/icon14.png';

const Footer = (props) => {
    const style = {
        position: 'absolute',
        bottom: 0,
        width: 'auto',
        height: '15%',
      };
    
    const mobileStyle = {
        position: 'absolute',
        bottom: 0,
        width: 'auto',
        height: '25%',
      };

    if(props.windowWidth < 768){
        return(
            <Grid container spacing={1} rowSpacing={2} style={mobileStyle}>
                <Grid item xs={6} >
                    <a href="https://instagram.com/tabinoficial?igshid=MjkzY2Y1YTY=">
                    <img src={InstIcon} style={{ width: "20%"}} />
                    </a>
                </Grid>

                <Grid item xs={6} >
                    <a href="https://www.facebook.com/tabinoficial?mibextid=LQQJ4d">
                    <img src={FaceIcon} style={{ width: "20%"}}/>
                    </a>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="subtitle2" color="white" style={{fontSize: "60%", textAlign: "left"}} >
                        © Copyright 2022 - Tabin - Todos os direitos reservados a Tabin Soluções em Tecnologia Ltda.
                    </Typography>
                    <div style={{ height: "10%" }}></div>
                    <Typography variant="subtitle2" color="white" style={{fontSize: "60%", textAlign: "left"}} >
                        CNPJ 48.555.873/0001-97 / Av. Agenor Lopes nº 25, Sala 1002, Boa Viagem, Recife/PE – CEP  51.021-110.
                    </Typography>
                </Grid>
            </Grid>
        );
    } else {
        return(
            <Grid container spacing={12} rowSpacing={8} style={style}>
                <Grid item xs={6}>
                    <Typography variant="subtitle2" color="white" style={{textAlign: "left"}} >
                        © Copyright 2022 - Tabin - Todos os direitos reservados a Tabin Soluções em Tecnologia Ltda.
                    </Typography>
                    <Typography variant="subtitle2" color="white" style={{textAlign: "left"}} >
                        CNPJ 48.555.873/0001-97 / Av. Agenor Lopes nº 25, Sala 1002, Boa Viagem, Recife/PE – CEP  51.021-110.
                    </Typography>
                </Grid>
    
                <Grid item xs={6}>
                    <a href="https://instagram.com/tabinoficial?igshid=MjkzY2Y1YTY=">
                    <img src={InstIcon} style={{ width: "5%", marginLeft: "5%"}}/>
                    </a>

                    <a href="https://www.facebook.com/tabinoficial?mibextid=LQQJ4d">
                    <img src={FaceIcon} style={{ width: "5%", marginLeft: "5%"}}/>
                    </a>
                </Grid>
            </Grid>
        );
    }
    
};

export { Footer };