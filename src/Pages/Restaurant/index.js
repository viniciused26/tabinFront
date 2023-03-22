import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { ManagerCard } from "../../Components/ManagerCard"
import { Page, Container, CardContainer } from "./style.js";
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { tabinService } from "../../Services/tabinService";
import AddRestaurant from "../../Components/newRestaurant";

const RestaurantPage = (props) => {
  const [manager, setManager] = useState('');
  const [isManager, setIsManager] = useState(false);
  const [hasRestaurant, setHasRestaurant] = useState(false);
  const [restaurantName, setRestaurantName] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [managerName, setManagerName] = useState('');

  async function getManagerInfo(){
    console.log("manager info");
    try{
      const response = await tabinService.getRestaurantIdByOwner(props.currentToken);
      setManager(response?.manager);
      setManagerName(response?.managerName);
      setRestaurantName(response?.name);
      setHasRestaurant(true);
    }catch(err){
      if (err.response.data === "This owner has no restaurants!"){
        try {
          const response = await tabinService.getRestaurantIdByManager(props.currentToken);
          setRestaurantName(response?.name);
          setIsManager(true);
          setHasRestaurant(true);
        } catch (err) {
          console.log(err);
        }
      }
      console.log(err);
    }
  }

  useEffect(() => {
    getManagerInfo();
  });


  

  if(!hasRestaurant){
    return (
      <Page>
        <Container>
          <Typography variant={"h3"} style={{marginBottom: "1%"}}>
            VOCÊ NÃO ESTÁ ATRELADO A NENHUM RESTAURANTE!
          </Typography>
          <Typography variant={"subtitle2"} style={{marginBottom: "1%"}}>
            Crie um restaurante ou peça para ser gerente ao seu chefe!
          </Typography>
          <div>
            <Button variant="contained" onClick={() => { setOpenDialog(true) }}> Criar Restaurante</Button>
          </div>
          <AddRestaurant openDialog={openDialog} setOpenDialog={setOpenDialog} currentToken={props.currentToken}/>
        </Container>
      </Page>
    );
  } 

  if(isManager){
    return (
      <Page>
        <Container>
          <Typography variant={"h3"} style={{marginBottom: "1%"}}>
            {restaurantName}
          </Typography>
        </Container>
      </Page>
    );
  } 

  return(
    <Page>
        <Container>
          <Typography variant={"h3"} style={{marginBottom: "1%"}}>
            {restaurantName}
          </Typography>
          <Typography variant={"h4"} style={{marginBottom: "1%"}}>
            Gerentes
          </Typography>
        </Container>
        <CardContainer>
          {manager?.length >= 1 ? 
            <ManagerCard newManager={false} name={managerName} /> :
            <ManagerCard newManager={true} currentToken={props.currentToken}/>
          }
          
        </CardContainer>
    </Page>
  );

  
}

export { RestaurantPage };

