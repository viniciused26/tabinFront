import { Card, CardActions, CardContent, Button, Typography, TextField } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { tabinService } from "../../Services/tabinService";
import { DeleteIcon } from "@mui/icons-material";

const ManagerCard = (props) => {
    const cardStyle = {
        background: "#e8b122",
    }

    const [managerEmail, setManagerEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const restaurantData = { 
            email: managerEmail,
        };
    
        try{
          const response = await tabinService.newManager(restaurantData, props.currentToken);
          console.log(response);
        }catch(err){
          console.log(err);
        }
    }

    async function removeManager(){
        try{
            const response = await tabinService.removeManager(props.currentToken);
            console.log(response);
        }catch(err){
            console.log("eeeey")
            console.log(err);
        }
      }

    if(props.newManager){
        return(
            <Card sx={{ minWidth: 200 }} style={cardStyle}>
                <CardContent>
                    <Typography variant={"h4"} style={{marginBottom: "3%"}}>Adicione um gerente</Typography>
                    <TextField 
                        id="standard-basic" 
                        value={managerEmail} 
                        onChange={(event) => {setManagerEmail(event.target.value)}} 
                        label="E-mail do gerente" 
                        variant="standard" />
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" style={{ border: "3px" }} onClick={handleSubmit}>
                        Novo Gerente
                    </Button>
                </CardActions>
            </Card>
            
            
        );
    } else {
        return(
            <Card sx={{ minWidth: 200 }} style={cardStyle}>
                <CardContent>
                    <Typography variant={"h4"}>{props.name}</Typography>
                </CardContent>
                <CardActions>
                    <Button style={{ border: "2px solid" }} variant="outlined" onClick={removeManager}>Excluir gerente</Button>
                </CardActions>
            </Card>
    
        );
    }
};

export { ManagerCard };