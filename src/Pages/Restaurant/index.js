import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { ManagerCard } from "../../Components/ManagerCard"
import { Page, Container, CardContainer } from "./style.js";
import { Card, CardActions, CardContent, Button } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { tabinService } from "../../Services/tabinService";
const RESTAURANT_URL = 'api/restaurant/listByName';


const RestaurantPage = (props) => {
  const [manager, setManager] = useState([]);

  async function getManagerInfo(){
    try{
      const response = await tabinService.getRestaurantManger(props.currentToken);
      setManager(response);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getManagerInfo();
    console.log(manager);
  }, []);

  return(
    <Page>
        <Container><h1>Gerentes</h1></Container>
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

