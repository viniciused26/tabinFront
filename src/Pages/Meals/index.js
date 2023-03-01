import React, { useState, useEffect, useRef } from "react";
import { tabinService } from "../../Services/tabinService";
import Menu from "../../Components/menu.js";
import { Page, Container } from "./style.js";
import { Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
const RESTAURANT_URL = 'api/restaurant/listByOwner';

const MealsPage = (props) => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [newMeal, setNewMeal] = useState(false);
  const [restaurantData, setRestaurantData] = useState();

  const [menuOpen, setMenuOpen] = useState(true);
  const [tableOpen, setTableOpen] = useState(false);

  const [value, setValue] = useState('1');

  function menuClickHandle(){
    setMenuOpen(true);
    setTableOpen(false);
  }

  function tableClickHandle(){
    setTableOpen(true);
    setMenuOpen(false);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  async function getRestaurant(){
        try{
          const response = await tabinService.getRestaurantIdByOwner(props.currentToken);
          setRestaurantData(response);
            
        }catch(err){
          if (err.response.data === "This owner has no restaurants!"){
            try {
              const response = await tabinService.getRestaurantIdByManager(props.currentToken);
              setRestaurantData(response);
            } catch (err) {
              console.log(err);
            }
          }
          console.log(err);
        }
    }

  useEffect(() => {
    getRestaurant();
  }, []);

  if(!restaurantData){
    return (
      <div className="App">
        <center>
          <p>VOCÊ NÃO TEM RESTAURANTE!</p>
        </center>        
      </div>
    );
  }

  return(
    <Page>
      <Container>
        <Typography variant={"h3"} style={{marginBottom: "1%"}}>
          Meu cardápio
        </Typography>
        <Menu currentToken={props.currentToken} restaurant={restaurantData.name} />
      </Container>
    </Page>
    
  );

  
}

export { MealsPage };

