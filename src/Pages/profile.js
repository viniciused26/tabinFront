import { tabinService } from "../Services/tabinService";
import { useState, useEffect } from 'react'; 
const URL = 'api/user/loggedUser';

function ProfilePage(props) {

    const [userData, setUserData] = useState();

    async function getProfile(){
        try{
          const response = tabinService.getLoggedUser(props.currentToken);
          setUserData(response.data);
        }catch(err){
          console.log(err);
        }
    }

    useEffect(() => {
      getProfile();
    }, []);
        
  return (
    <div className="App">
      <div><h1>PROFILE PAGE</h1></div>
      <div>
        <p>Nome: {JSON.stringify(userData?.name)}</p>
        <p>Email: {JSON.stringify(userData?.email)}</p>
        <p>CNPJ: {JSON.stringify(userData?.cnpj)}</p>
      </div>
      
    </div>
  );
}

export default ProfilePage;
