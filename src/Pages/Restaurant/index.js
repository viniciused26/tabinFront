import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { ManagerCard } from "../../Components/ManagerCard"
import { Page, Container, CardContainer } from "./style.js";
import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { tabinService } from "../../Services/tabinService";
const RESTAURANT_URL = 'api/restaurant/listByName';


const RestaurantPage = (props) => {
  const [manager, setManager] = useState([]);
  const [isManager, setIsManager] = useState(false);
  const [hasRestaurant, setHasRestaurant] = useState(false);
  const [restaurant, setRestaurant] = useState([]);

  async function getManagerInfo(){
    try{
      const response = await tabinService.getRestaurantIdByOwner(props.currentToken);
      setManager(response?.manager);
      setHasRestaurant(true);
    }catch(err){
      if (err.response.data === "This owner has no restaurants!"){
        try {
          const response = await tabinService.getRestaurantIdByManager(props.currentToken);
          setRestaurant(response);
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
    console.log(manager);
  }, []);

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
        </Container>
      </Page>
    );
  } 

  if(isManager){
    return (
      <Page>
        <Container>
          <Typography variant={"h3"} style={{marginBottom: "1%"}}>
            RESTAURANT NAME
          </Typography>
        </Container>
      </Page>
    );
  } 

  return(
    <Page>
        <Container>
          <Typography variant={"h3"} style={{marginBottom: "1%"}}>
            RESTAURANT NAME
          </Typography>
          <Typography variant={"h4"} style={{marginBottom: "1%"}}>
            Gerentes
          </Typography>
        </Container>
        <CardContainer>
          {manager.length != 0 ? 
            <ManagerCard newManager={true} name={manager.name} email={manager.email} /> :
            null
          }
          <ManagerCard newManager={false} name={manager.name} email={manager.email} />
        </CardContainer>
    </Page>
  );

  
}

export { RestaurantPage };

