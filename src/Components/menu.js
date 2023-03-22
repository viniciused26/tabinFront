import { useState, useEffect, useRef } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/material/styles';
import { tabinService } from "../Services/tabinService";
import AddMeals from "./addMeals.js";
import './styles.css' 
const MEAL_URL = 'api/meal/register';


const style = {
  margin: 0,
  top: 'auto',
  right: 50,
  bottom: 50,
  left: 'auto',
  position: 'fixed',
}

export default function Menu(props) {

  const [meals, setMeals] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  async function getMeals(){
    try{
      const response = await tabinService.getMealsOfRestaurant(props.restaurant);
      setMeals(response);
      
    }catch(err){
      console.log(err);
    }
  }

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    
    return window.btoa(binary);
};


  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div>
        <Grid container spacing={3}>
        {meals.map((meal) => {
          return(
            <Grid item xs={12} sm={3}>
      <Card style={{ background: "#b2aabd"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {meal.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {meal.description}
        </Typography>
        
        { meal?.img ? 
          <img alt="ihul" src={`data:image/jpeg;base64,${arrayBufferToBase64(meal.img?.data?.data)}`}/> :
          null
        }
        <Typography style={{textDecoration: 'line-through'}} variant="body2" color="text.secondary" >
            R$ {meal.standartPrice}
        </Typography>
        <Typography variant="body2" color="text.primary" >
            R$ {meal.discountPrice}
        </Typography>
        <Typography variant="body1" color="text.primary" >
            Serve: {meal.peopleItServes} pessoas
        </Typography>   
      </CardContent>
      <CardActions />
      </Card>
    </Grid>
    );
  })}
        </Grid>
        <Fab color="secondary" style={style} onClick={() => { setOpenDialog(true) }}>
          <AddIcon/>
        </Fab>
        <AddMeals openDialog={openDialog} setOpenDialog={setOpenDialog} currentToken={props.currentToken}/>
  </div>
  );
  
  
}