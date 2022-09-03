import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
import AddMeals from "./addMeals.js";
import Menu from "./menu.js";
const RESTAURANT_URL = 'api/restaurant/listByOwner';

function RestaurantPage(props) {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [newMeal, setNewMeal] = useState(false);
  const [restaurantData, setRestaurantData] = useState();

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
        <div><h1>RESTAURANT PAGE</h1></div>
        <center>
          <p>VOCÊ NÃO TEM RESTAURANTE!</p>
        </center>
        
        
      </div>
    );
  }

  return(
    <div className="App">
    <div><h1>RESTAURANT PAGE</h1></div>
    <div>
      <p>Nome: {JSON.stringify(restaurantData?.name)}</p>        
      <p>CNPJ: {JSON.stringify(restaurantData?.cnpj)}</p>
    </div>
    <input type="checkbox" id="newMeal" value={newMeal} onChange={() => setNewMeal(!newMeal)} /> Criar novo prato
    {newMeal == true ? <AddMeals currentToken={props.currentToken}/> : null}
    <div><br/></div>
    <Menu currentToken={props.currentToken}/>
    
  </div>
  );

  
}

export default RestaurantPage;
