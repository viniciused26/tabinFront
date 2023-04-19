import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Typography, Fab, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/material/styles";
import { tabinService } from "../Services/tabinService";
import AddMeals from "./addMeals.js";
import EditMeal from "./editMeal.js";
import ConfirmRemove from "./confirmRemove";
import "./styles.css";
const MEAL_URL = "api/meal/register";

const style = {
  margin: 0,
  top: "auto",
  right: 50,
  bottom: 50,
  left: "auto",
  position: "fixed",
};

export default function Menu(props) {
  const [meals, setMeals] = useState([]);
  const [currentMealEdit, setCurrentMealEdit] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);

  async function getMeals() {
    try {
      const response = await tabinService.getMealsOfRestaurant(
        props.restaurant
      );
      setMeals(response);
    } catch (err) {
      console.log(err);
    }
  }

  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));

    return window.btoa(binary);
  }


  function handleOpenEdit(meal_id) {
    setCurrentMealEdit(meal_id);

    if (!openEdit) {
      setOpenEdit(false);
      setOpenEdit(true);
    } else {
      setOpenEdit(true);
    }
  }

  function handleOpenRemove(meal_id) {
    setCurrentMealEdit(meal_id);

    if (!openEdit) {
      setOpenRemove(false);
      setOpenRemove(true);
    } else {
      setOpenRemove(true);
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        {meals.map((meal) => {
          return (
            <Grid item xs={12} sm={3}>
              <Card style={{ background: "#b2aabd" }}>
                <CardMedia
                  sx={{ height: 200, objectFit: "contain" }}
                  component="img"
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(
                    meal.img?.data?.data
                  )}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {meal.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {meal.description}
                  </Typography>

                  <Typography
                    style={{ textDecoration: "line-through" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    R$ {meal.standartPrice}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    R$ {meal.discountPrice}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    Serve: {meal.peopleItServes} pessoas
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleOpenEdit(meal._id);
                    }}
                  >
                    EDITAR
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleOpenRemove(meal._id);
                    }}
                  >
                    {" "}
                    REMOVER{" "}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Fab
        color="secondary"
        style={style}
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        <AddIcon />
      </Fab>
      <AddMeals
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        currentToken={props.currentToken}
      />
      <EditMeal
        mealId={currentMealEdit}
        openDialog={openEdit}
        setOpenDialog={setOpenEdit}
        currentToken={props.currentToken}
      />
      <ConfirmRemove
        mealId={currentMealEdit}
        openDialog={openRemove}
        setOpenDialog={setOpenRemove}
        currentToken={props.currentToken}
      />
    </div>
  );
}
