import { useState, useEffect, useRef } from "react";
import Login from "./login"; 
import { Button } from "@mui/material";
const LIST_URL = 'api/restaurant/list';

function MainPage(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const setToken = props.setToken;

  return (
    <div className="App">
      <div><h1>MAIN PAGES</h1></div>
      <Button onClick={() => { setOpenDialog(true) }}>teste</Button>
      {/* <Login openDialog={openDialog} setOpenDialog={setOpenDialog} setToken={setToken}/> */}
    </div>
  );
}

export default MainPage;
