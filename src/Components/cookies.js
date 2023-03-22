import { DialogContent, DialogTitle, Button, Typography } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { useState, useEffect, useRef } from "react";
import { tabinService } from "../Services/tabinService";
import '../styles/login.css'; 
import FormData from 'form-data';
const MEAL_URL = 'api/meal/register';

export default function Cookies( props, setOpenDialog ) {
  
  const modalStyle = {
    position: 'fixed',
    top: 'auto',
    right: 'auto',
    left: 'auto',
    bottom: 0,
  };

  function handleClose(){
    props.setOpenDialog(false);
  }
  
  return (
    <Dialog open={props.openDialog}  style={ modalStyle } disableScrollLock>
      <DialogContent>
      <Typography variant="subtitle2">
        Ao navegar neste site, você aceita os cookies que usamos para melhorar sua experiência. <a href="http://tabin.com.br/policyPage"> Ver política de privacidade. </a>
      </Typography>
      <div style={{ float: 'right' }}>
      <Button onClick={ () => handleClose() } style={{marginTop: '2%', backgroundColor: '#53AA45'}} variant={'contained'}> Aceitar</Button>

      </div>
      </DialogContent>
    </Dialog>
  );
  
  
}
