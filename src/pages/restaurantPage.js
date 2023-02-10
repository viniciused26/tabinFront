import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import axios from "../api/axios";
import Menu from "../components/menu.js";
import { Box, Button } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
const RESTAURANT_URL = 'api/restaurant/listByOwner';

function RestaurantPage(props) {

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
          const response = await axios.get(RESTAURANT_URL, {
            headers: {
              'auth-token': props.currentToken,
            }
          });
          setRestaurantData(response.data);
        }catch(err){
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
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList aria-label='Tabs example' onChange={handleChange} centered>
          <Tab label='Cardápio' value='1' />
          <Tab label='Mesas' value='2' />
        </TabList>
        </Box>
        <TabPanel value='1'><Menu currentToken={props.currentToken}/></TabPanel>
        <TabPanel value='2'>Mesas</TabPanel>
      </TabContext>
    </Box>
  );

  
}

export default RestaurantPage;

