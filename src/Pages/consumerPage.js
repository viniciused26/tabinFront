import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import "./styles.css";
import { tabinService } from "../Services/tabinService";
import ConsumerMenu from "./consumerMenu.js";
import { Box, Button } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Navbar from "../Components/navbar";


function ConsumerPage(props) {

  const { restaurant } = useParams();

  const [restaurantData, setRestaurantData] = useState();
  const [value, setValue] = useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }


  async function getRestaurant(){
        try{
          const response = await tabinService.getRestaurantByName(restaurant);
          console.log(response);
          setRestaurantData(response);
        }catch(err){
          console.log(err);
        }
  }  

  useEffect(() => {
    getRestaurant();
  }, []);


  return(
    <Box>
      <Navbar isHomepage={true} />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList aria-label='Tabs example' onChange={handleChange} centered>
          <Tab label='Todos' value='0' />
          {restaurantData ? restaurantData.mealTypes.map((type, index) => {
            let newTabValue = index+1
            newTabValue = newTabValue.toString()
            return(
              <Tab label={type} value={newTabValue} />
            );
          }) : null }
        </TabList>
        </Box>
        <TabPanel value='0'><ConsumerMenu restaurant={restaurant} mealType={""} /></TabPanel>
        {restaurantData ? restaurantData.mealTypes.map((type, index) => {
            let tabValue = index+1
            tabValue = tabValue.toString()
            return(
              <TabPanel value={tabValue} ><ConsumerMenu restaurant={restaurant} mealType={type} /></TabPanel>
            );
          }) : null }
      </TabContext>
    </Box>
  );

  
}

export default ConsumerPage;

