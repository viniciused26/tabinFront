import React, { useState, useEffect, useRef } from "react";
import { Page, Container, CardContainer } from "./style.js";
import { TableCard } from "../../Components/TableCard"
import { Card, CardActions, Box, Modal, Typography, Button } from "@mui/material";
import { tabinService } from "../../Services/tabinService";
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import FrameQR from '../../assets/frameQR.png';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';


const TablesPage = (props) => {
  const [tables, setTables] = useState([]);

  const modalStyle = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    textAlign: 'center',
    p: 4,
  };

  const modalStyleQR = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    textAlign: 'center',
    p: 4,
    backgroundColor: '#2e1133',
  };


  const [open, setOpen] = useState(false);
  const [qrModal, setQrModal] = useState(false);
  const [qrLink, setQrLink] = useState('');
  
  const handleClick = () => {
    setQrModal(false);
    setOpen(true);
  }

  const handleQRDownload = async () => {
    const qrCodeElement = document.getElementById('imageFile');
    if (!qrCodeElement) return;
    
    console.log("oik")
    const canvas = await html2canvas(qrCodeElement);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'qrCode_mesax', 'image/png')
  }

  const handleQRClick = (ident) => {
    let link = `http://tabin.com.br/consumerPage/${restaurantName}/${ident}`;
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3,
    }, function(err,url){
      setQrLink(url);
    });

    setQrModal(true);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const identRef = useRef();

  const [ident, setIdent] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [restaurantName, setRestaurantName] = useState('');


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
      setRestaurantName(response?.name);
    }catch(err){
      if (err.response.data === "This owner has no restaurants!"){
        try {
          const response = await tabinService.getRestaurantIdByManager(props.currentToken);
          setRestaurant(response?._id);
          setRestaurantName(response?.name);
        } catch (err) {
          console.log(err);
        }
      }
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

  if(!restaurant){
    return (
      <div className="App">
        <center>
          <p>VOCÊ NÃO TEM RESTAURANTE!</p>
        </center>        
      </div>
    );
  }

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
              <TableCard newTable={false} identifier={table.identifier} owner={""} help={table.isAskingHelp} qrCodeClick={handleQRClick}/>
            );
          })}
          <TableCard newTable={true} identifier={"1"} owner={""} help={true} onClick={handleClick}/>
        </CardContainer>
        <Modal
          open={open}
          onClose={handleClose}
        >
          { !qrModal ?
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
           : 
            <Box sx={modalStyleQR}>
              <div id='imageFile'>
                <img alt="qrcode" src={FrameQR} style={{width: "100%", position: 'relative', top: 0, left: 0}} />
                <img alt="qrcode" src={qrLink} style={{width: "70%", position: 'absolute', top: '16.5%', left: '15%'}} />
              </div>
              <Button onClick={handleQRDownload} variant="contained" color="primary" style={{ marginTop: "5%"}}>Baixar QR Code</Button>
            </Box>
          }
        </Modal>
    </Page>
  );
}

export { TablesPage };

