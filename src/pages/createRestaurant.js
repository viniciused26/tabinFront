import { useState, useEffect, useRef } from "react";

function CreateRestaurantPage() {

  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');

  return (
    <div className="App">
      <div><h1>CREATE RESTAURANT PAGE</h1></div>
      <div>
        <input 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            placeholder="nome do restaurante" 
        />
        <p> </p>
        <input 
            type="text" 
            onChange={(e) => setCnpj(e.target.value)} 
            value={cnpj}
            placeholder="cnpj do restaurante" 
        />
        <p> </p>  
        <button>buscar</button>
      </div>
      
    </div>
  );
}

export default CreateRestaurantPage;
