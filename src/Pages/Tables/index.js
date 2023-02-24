import React, { useState, useEffect, useRef } from "react";
import { Page, Container, CardContainer } from "./style.js";
import { TableCard } from "../../Components/TableCard"
import { Card, CardActions, Box, Modal, Typography } from "@mui/material";
import { tabinService } from "../../Services/tabinService";


const TablesPage = (props) => {
  const [tables, setTables] = useState([]);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const identRef = useRef();

  const [ident, setIdent] = useState('');
  const [restaurant, setRestaurant] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await tabinService.tableRegister(ident, props.currentToken);
    }catch(err){
      console.log("ERRO: ", err);
    }
  }

  async function getRestaurantId(){
    try{
      const response = await tabinService.getRestaurantIdByOwner(props.currentToken);
      setRestaurant(response?._id);
    }catch(err){
      console.log(err);
    }
  }

  async function getTables(){
    try{
      const response = await tabinService.listRestaurantTables(restaurant);
      setTables(response);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getRestaurantId();
  }, []);

  useEffect(() => {
    getTables();
    console.log("aqui", tables)
  }, [restaurant]);

  return(
    <Page>
        <Container>
          <Typography variant={"h3"} style={{marginBottom: "1%"}}>
            Minhas mesas
          </Typography>
        </Container>
        <CardContainer>
          {tables.map((table) => {
            return(
              <TableCard newTable={false} identifier={table.identifier} owner={""} help={table.isAskingHelp} onClick={handleClick}/>
            );
          })}
          <TableCard newTable={true} identifier={"1"} owner={""} help={true} onClick={handleClick}/>
        </CardContainer>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={modalStyle}>
          <form onSubmit={handleSubmit}>
            <div>
              Identificador:
              <input 
                type="number" 
                id="ident" 
                ref={identRef} 
                autoComplete="off" 
                onChange={(e) => setIdent(e.target.value)} 
                value={ident}
                required 
              />
            </div>
            <button type="submit"> ENVIAR </button>
          </form>
          </Box>
        </Modal>
    </Page>
  );
}

export { TablesPage };

