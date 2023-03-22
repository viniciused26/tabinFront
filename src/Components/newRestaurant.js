import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { useState, useEffect, useRef } from "react";
import { tabinService } from "../Services/tabinService";
import '../styles/login.css'; 
const MEAL_URL = 'api/meal/register';

export default function AddRestaurant( props, setOpenDialog ) {

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const restaurantData = { 
      name: name, 
      cnpj: cnpj,
    };

    try{
      const response = await tabinService.newRestaurant(restaurantData, props.currentToken)
      console.log(response);
    }catch(err){
      console.log(err);
    }
  } 

  return (
    <Dialog open={props.openDialog} onClose={() => { props.setOpenDialog(false) }}>
      <DialogTitle>CRIE SEU RESTAURANTE</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <span>nome: </span>
          <input 
            type="string" 
            id="name"
            autoComplete="off" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            required 
          /> 
          
          <br/>
          <br/>
            
          <span>cnpj: </span>
          <input 
            type="string" 
            id="cnpj"
            onChange={(e) => setCnpj(e.target.value)} 
            value={cnpj}
            required 
          />

          <br/>
          <br/>
         
          <span/> <button type="submit">enviar</button>
        </form>
      </DialogContent>
    </Dialog>
  );
  
  
}
