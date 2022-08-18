import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";
const RESTAURANT_URL = 'api/restaurant/listByOwner';

function RestaurantPage(props) {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
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
        <div>
          <input 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              value={name}
              placeholder="nome da refeição" 
          />
          <p> </p>
          <input 
              type="text" 
              onChange={(e) => setDesc(e.target.value)} 
              value={desc}
              placeholder="descrição da refeição" 
          />
          <p> </p>
          <input 
              type="text" 
              onChange={(e) => setPrice(e.target.value)} 
              value={price}
              placeholder="preço da refeição" 
          />
          <p> </p>
          <button>buscar</button>
        </div>
  
        <div><p>  </p></div>
  
        <div>
        <center>
        <table>
          <tr>
            <th>Refeições</th>
          </tr>
          <tr>
            <td>Comida 1</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td><button>editar</button></td>
          </tr>
          <tr>
            <td>Comida 2</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td><button>editar</button></td>
          </tr>
        </table>
        </center>
        </div>
        
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
  </div>
  );

  
}

export default RestaurantPage;
