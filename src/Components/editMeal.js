import {
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  Checkbox,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState, useEffect, useRef } from "react";
import { tabinService } from "../Services/tabinService";
import "../styles/login.css";
import FormData from "form-data";
const MEAL_URL = "api/meal/register";

export default function EditMeals(props, setOpenDialog) {
  const [name, setName] = useState(null);
  const [img, setImg] = useState(null);
  const [standartPrice, setStandartPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [peopleItServes, setPeopleItServes] = useState(null);
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("Definir categoria");
  const [newType, setNewType] = useState(null);
  const [keepImg, setKeepImg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mealData = new FormData();

    mealData.append("_id", props.mealId);
    mealData.append("keepImg", keepImg);
    mealData.append("name", name);
    mealData.append("standartPrice", standartPrice);
    mealData.append("discountPrice", discountPrice);
    mealData.append("description", description);
    mealData.append("peopleItServes", peopleItServes);
    mealData.append("type", newType ? newType : currentType);
    mealData.append("image", img);

    try {
      await tabinService.editMeal(mealData, props.currentToken);
    } catch (err) {
      console.log(err);
    }
  };

  async function getMealTypes() {
    try {
      const response = await tabinService.getMealTypes(props.currentToken);
      response.unshift("Definir categoria");
      setTypes(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMealTypes();
  }, []);

  useEffect(() => {}, [standartPrice, discountPrice]);

  return (
    <Dialog
      open={props.openDialog}
      onClose={() => {
        props.setOpenDialog(false);
      }}
    >
      <DialogTitle>EDITE ESTE PRATO </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            type="string"
            id="name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            label="Nome"
          />
          <br />
          <br />
          <TextField
            type="string"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            label="Descrição do prato"
          />
          <br />
          <br />
          <TextField
            type="number"
            id="standartPrice"
            onChange={(e) => setStandartPrice(e.target.value)}
            value={standartPrice}
            label="Preço padrão (R$):"
          />
          <br />
          <br />
          <TextField
            type="number"
            id="discountPrice"
            onChange={(e) => setDiscountPrice(e.target.value)}
            value={discountPrice}
            label="Preço promocional (R$):"
          />
          {standartPrice && discountPrice ? (
            <span>
              {" "}
              {(1 - discountPrice / standartPrice) * 100}% de desconto{" "}
            </span>
          ) : null}
          <br />
          <br />
          <TextField
            select
            type="string"
            id="currentType"
            onChange={(e) => setCurrentType(e.target.value)}
            value={currentType}
            label="Categoria do prato"
          >
            {types.map((type) => {
              return <MenuItem value={type}>{type}</MenuItem>;
            })}
          </TextField>
          {currentType === "Definir categoria" ? (
            <span>
              <br />
              <br />

              <TextField
                type="string"
                id="newType"
                onChange={(e) => setNewType(e.target.value)}
                value={newType}
                label="Nova categoria"
              />
            </span>
          ) : null}
          <br />
          <br />
          <TextField
            type="number"
            id="peopleItServes"
            onChange={(e) => setPeopleItServes(e.target.value)}
            value={peopleItServes}
            label="Serve quantas pessoas"
          />
          <br />
          <br />
          <div>
            <Typography style={{ display: "inline-block" }}>
              Você deseja manter a imagem atual?
            </Typography>
            <Checkbox id="keepImg" onChange={() => setKeepImg(!keepImg)} />
          </div>
          <TextField
            type="file"
            name="image"
            id="image"
            onChange={(e) => setImg(e.target.files[0])}
            disabled={keepImg}
          />
          <br />
          <br />
          <span />{" "}
          <Button variant="contained" type="submit">
            enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
