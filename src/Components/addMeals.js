import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { useState, useEffect, useRef } from "react";
import { tabinService } from "../Services/tabinService";
import '../styles/login.css'; 
const MEAL_URL = 'api/meal/register';

export default function AddMeals( props, setOpenDialog ) {

  const [name, setName] = useState('');
  const [standartPrice, setStandartPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [description, setDescription] = useState('');
  const [peopleItServes, setPeopleItServes] = useState('');
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState('Definir categoria');
  const [newType, setNewType] = useState('');

  const [open, setOpen] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mealData = { 
      name: name, 
      standartPrice: standartPrice,
      discountPrice: discountPrice,
      description: description,
      peopleItServes: peopleItServes,
      type: newType ? newType : currentType,
    };

    try{
      const response = await tabinService.newMeal(mealData, props.currentToken)
    }catch(err){
      console.log(err);
    }
  } 

  async function getMealTypes(){
    try{
      const response = await tabinService.getMealTypes(props.currentToken);
      response.unshift('Definir categoria');
      setTypes(response);
      
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMealTypes();
  }, []);

  useEffect(() => {
  }, [standartPrice, discountPrice]);

  return (
    <Dialog open={props.openDialog} onClose={() => { props.setOpenDialog(false) }}>
      <DialogTitle>ADICIONE UM PRATO</DialogTitle>
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
            
          <span>descrição do prato: </span>
          <input 
            type="string" 
            id="description"
            onChange={(e) => setDescription(e.target.value)} 
            value={description}
            required 
          />

          <br/>
          <br/>

          <span>preço padrão (R$): </span>
          <input 
            type="number" 
            id="standartPrice"
            onChange={(e) => setStandartPrice(e.target.value)} 
            value={standartPrice}
            required 
          />

          <br/>
          <br/>
          
          <span>preço promocional (R$): </span>
          <input 
            type="number" 
            id="discountPrice"
            onChange={(e) => setDiscountPrice(e.target.value)} 
            value={discountPrice}
            required 
          />

          {standartPrice && discountPrice ? <span> {(1 - (discountPrice/standartPrice))*100}% de desconto </span> : null}
          

          <br/>
          <br/>
          
          <span>categoria do prato: </span>
          
          <select 
            type="string" 
            id="currentType"
            onChange={(e) => setCurrentType(e.target.value)} 
            value={currentType}
            required 
          >
            {types.map((type) => {
            return(
              <option value={type}>{type}</option>
            );
          })}
          </select>
          
          {currentType === 'Definir categoria' ? 
            <span>
            <br/>
            <br/>
            
            <span>Insira o nome da nova categoria: </span>
            <input 
              type="string" 
              id="newType"
              onChange={(e) => setNewType(e.target.value)} 
              value={newType}
              required 
            />
            </span> : 
          null}

          <br/>
          <br/>

          <span>quantas pessoas serve: </span>
          <input 
            type="number" 
            id="peopleItServes"
            onChange={(e) => setPeopleItServes(e.target.value)} 
            value={peopleItServes}
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
