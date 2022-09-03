import { useState, useEffect, useRef } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import axios from "../api/axios";
import '../styles/login.css'; 
const MEAL_URL = 'api/meal/register';



export default function Menu(props) {

  const [meals, setMeals] = useState([]);

  async function getMeals(){
    try{
      const response = await axios.get('api/meal/listAll', {
        headers: {
          'auth-token': props.currentToken,
        }
      });
      
      setMeals(response.data);
      
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div>
        <Grid container spacing={3}>
        {meals.map((meal) => {
    return(
      <Grid item xs={12} sm={3}>
      <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {meal.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {meal.description}
        </Typography>
        <br/>
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
    <CardActions>
        
    </CardActions>
    </Card>
    </Grid>
    );
  })}
        </Grid>
    </div>
  );
  
  
}