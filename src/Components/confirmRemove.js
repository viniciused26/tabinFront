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

export default function ConfirmRemove(props, setOpenDialog) {

  async function handleRemove(mealId) {
    const mealData = {
      _id: mealId,
    };

    try {
      console.log('response remove: ', props.currentToken);
      const response = await tabinService.removeMeal(mealData, props.currentToken);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Dialog
      open={props.openDialog}
      onClose={() => {
        props.setOpenDialog(false);
      }}
    >
      <DialogTitle>VOCÊ DESEJA EXCLUIR ESSE PRATO? </DialogTitle>
      <DialogContent>
          <Button variant="contained" type="submit" style={{marginRight: '5%'}} onClick={()=>handleRemove(props.mealId)}>
            sim
          </Button>
          <Button variant="outlined" type="submit" onClick={ () => props.setOpenDialog(false) }>
            não
          </Button>
      </DialogContent>
    </Dialog>
  );
}
