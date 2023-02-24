import { Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import { DeleteIcon } from "@mui/icons-material";

const ManagerCard = (props) => {
    const cardStyle = {
        background: "#e8b122",
    }

    if(!props.newManager){
        return(
            <Button variant="outlined" color="secondary" style={{ border: "3px solid" }}>
                Novo Gerente
            </Button>
        );
    } else {
        return(
            <Card sx={{ minWidth: 200 }} style={cardStyle}>
                <CardContent>
                    <Typography variant={"h4"}>{props.name}</Typography>
                    <Typography variant={"subtitle2"}>{props.email}</Typography>
                </CardContent>
                <CardActions>
                    <Button style={{ border: "2px solid" }} variant="outlined">Excluir</Button>
                    <Button style={{ border: "2px solid" }} variant="outlined">Mensagem</Button>
                </CardActions>
            </Card>
    
        );
    }
};

export { ManagerCard };