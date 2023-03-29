import { DialogContent, DialogTitle, TextField, Button, MenuItem } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import { useState, useEffect, useRef } from "react";
import { tabinService } from "../Services/tabinService";
import '../styles/login.css'; 
import FormData from 'form-data';
const MEAL_URL = 'api/meal/register';

export default function AddMeals( props, setOpenDialog ) {

  const [name, setName] = useState('');
  const [img, setImg] = useState(null);
  const [standartPrice, setStandartPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [description, setDescription] = useState('');
  const [peopleItServes, setPeopleItServes] = useState('');
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState('Definir categoria');
  const [newType, setNewType] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mealData = new FormData();

    mealData.append("name", name);
    mealData.append("standartPrice", standartPrice);
    mealData.append("discountPrice", discountPrice);
    mealData.append("description", description);
    mealData.append("peopleItServes", peopleItServes);
    mealData.append("type", newType ? newType : currentType);
    mealData.append("image", img);

    // const mealData = { 
    //   name: name, 
    //   standartPrice: standartPrice,
    //   discountPrice: discountPrice,
    //   description: description,
    //   peopleItServes: peopleItServes,
    //   type: newType ? newType : currentType,
    //   img: img,
    // };

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
          <TextField 
            type="string" 
            id="name"
            autoComplete="off" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            required
            label="Nome" 
          /> 
          
          <br/>
          <br/>
            
          <TextField 
            type="string" 
            id="description"
            onChange={(e) => setDescription(e.target.value)} 
            value={description}
            required
            label="Descrição do prato" 
          />

          <br/>
          <br/>

          <TextField 
            type="number" 
            id="standartPrice"
            onChange={(e) => setStandartPrice(e.target.value)} 
            value={standartPrice}
            required
            label="Preço padrão (R$):" 
          />

          <br/>
          <br/>
          
          <TextField 
            type="number" 
            id="discountPrice"
            onChange={(e) => setDiscountPrice(e.target.value)} 
            value={discountPrice}
            required 
            label="Preço promocional (R$):" 
          />

          {standartPrice && discountPrice ? <span> {(1 - (discountPrice/standartPrice))*100}% de desconto </span> : null}
          

          <br/>
          <br/>
          
          <TextField
            select 
            type="string" 
            id="currentType"
            onChange={(e) => setCurrentType(e.target.value)} 
            value={currentType}
            required
            label="Categoria do prato" 
          >
            {types.map((type) => {
            return(
              <MenuItem value={type}>{type}</MenuItem>
            );
          })}
          </TextField>
          
          {currentType === 'Definir categoria' ? 
            <span>
            <br/>
            <br/>
            
            <TextField 
              type="string" 
              id="newType"
              onChange={(e) => setNewType(e.target.value)} 
              value={newType}
              required
              label="Nova categoria" 
            />
            </span> : 
          null}

          <br/>
          <br/>

          <TextField 
            type="number" 
            id="peopleItServes"
            onChange={(e) => setPeopleItServes(e.target.value)} 
            value={peopleItServes}
            required
            label="Serve quantas pessoas" 
          />
          
          <br/>
          <br/>

          <TextField 
            type='file' 
            name='image'
            id='image' 
            onChange={(e) => setImg(e.target.files[0])}
            required 
          /> 
          
          <br/>
          <br/>
         
          <span/> <Button variant="contained" type="submit">enviar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
  
  
}
