import { useState, useEffect, useRef } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { tabinService } from "../Services/tabinService";
import './styles.css' 
const MEAL_URL = 'api/meal/listRestaurantMeals';

const style = {
  margin: 0,
  top: 'auto',
  right: 50,
  bottom: 50,
  left: 'auto',
  position: 'fixed',
}

export default function ConsumerMenu(props) {

  const [meals, setMeals] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  async function getMeals(){
    try{
      const response = await tabinService.getOwnerRestaurant(props.restaurant);
      setMeals(response);
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
        <Fab color="secondary" style={style} onClick={() => { setOpenDialog(true) }}>
          <p>0</p>
          <ShoppingCartIcon/>
        </Fab>
  </div>
  );
  
  
}