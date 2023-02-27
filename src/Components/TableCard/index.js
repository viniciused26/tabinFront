import React, { useState, useEffect, useRef } from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import { IconButton } from '@mui/material';
import QrCode2Icon from '@mui/icons-material/QrCode2';

const TableCard = (props) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const indetifier = props.identifier;

    const cardStyle = {
        background: "#b2aabd",
    }
    const cardAlertStyle = {
        background: "#e8b122",
    }

    if(props.newTable){
        return(
            <Button variant="outlined" style={{ border: "3px solid", borderColor: "#b2aabd" }} onClick={props.onClick}>
                Nova Mesa
            </Button>
        );
    } else {
        return(
            <Card sx={{ minWidth: 200 }} style={props.help === true ? cardAlertStyle : cardStyle }>
                <CardContent>
                    <Typography variant={"h4"}>Mesa {props.identifier}</Typography>
                    {props.owner !== "" ? <Typography variant={"subtitle2"}>Dono: {props.owner}</Typography> :
                    null }
                </CardContent>
                <CardActions style={{display: 'flex',justifyContent: 'space-between'}}>
                    <Button style={{ border: "2px solid" }} variant="outlined">Excluir mesa</Button>
                    <IconButton onClick={() => props.qrCodeClick(indetifier)}><QrCode2Icon style={{fontSize: '180%', color: "black"}}/></IconButton>
                </CardActions>
            </Card>
    
        );
    }
};

export { TableCard };