import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import "./styles.css";
import { tabinService } from "../Services/tabinService";
import ConsumerMenu from "./consumerMenu.js";
import { Box, Button } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';


function ConsumerPage(props) {

  const { restaurant } = useParams();

  const [restaurantData, setRestaurantData] = useState();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }


  async function getRestaurant(){
        try{
          const response = await tabinService.getRestaurantByName(restaurant);
          setRestaurantData(response.data);
        }catch(err){
          console.log(err);
        }
  }  

  useEffect(() => {
    getRestaurant();
  }, []);


  return(
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList aria-label='Tabs example' onChange={handleChange} centered>
          <Tab label='Todos' value='1' />
          {restaurantData ? restaurantData.mealTypes.map((type, index) => {
            return(
              <Tab label={type} value={index} />
            );
          }) : null}
        </TabList>
        </Box>
        <TabPanel value='1'><ConsumerMenu restaurant={restaurant}/></TabPanel>
      </TabContext>
    </Box>
  );

  
}

export default ConsumerPage;

