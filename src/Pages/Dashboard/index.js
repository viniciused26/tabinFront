import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { ManagerCard } from "../../Components/ManagerCard"
import { Page, Container, CardContainer } from "./style.js";
import { Card, CardActions, CardContent, Button } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
const RESTAURANT_URL = 'api/restaurant/listByName';


const DashboardPage = (props) => {

  return(
    <Page>
        <Container><h1>Gerentes</h1></Container>
        <CardContainer>
            <ManagerCard newManager={true} />
            <ManagerCard newManager={true} />
            <ManagerCard newManager={true} />
            <ManagerCard newManager={false} />
        </CardContainer>
    </Page>
  );

  
}

export { DashboardPage };

