import axios from "../api/axios"; 
const LIST_URL = 'api/restaurant/list';

function MainPage() {

  return (
    <div className="App">
      <div><h1>MAIN PAGES</h1></div>
      <div>
        <button>criar um restaurante</button>
        <span> </span>
        <button>se juntar a um restaurante</button>
      </div>
      
    </div>
  );
}

export default MainPage;
