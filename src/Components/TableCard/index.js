import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import { IconButton } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const TableCard = (props) => {

    const cardStyle = {
        background: "#e8b122",
    }

    if(props.newTable){
        return(
            <Button variant="outlined" color="secondary" style={{ border: "3px solid" }} onClick={props.onClick}>
                Nova Mesa
            </Button>
        );
    } else {
        return(
            <Card sx={{ minWidth: 200 }} style={cardStyle}>
                <CardContent>
                    <Typography variant={"h4"}>Mesa {props.identifier}</Typography>
                    {props.owner !== "" ? <Typography variant={"subtitle2"}>Dono: {props.owner}</Typography> :
                    null }
                </CardContent>
                <CardActions style={{display: 'flex',justifyContent: 'space-between'}}>
                    <Button style={{ border: "2px solid" }} variant="outlined">Excluir mesa</Button>
                    {props.help === true ? <ErrorIcon style={{fontSize: '270%'}}/> : null}
                </CardActions>
            </Card>
    
        );
    }
};

export { TableCard };