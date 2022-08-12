import { useState, useEffect, useRef } from "react";

function RestaurantPage() {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="App">
      <div><h1>RESTAURANT PAGE</h1></div>
      <div>
        <input 
            type="text" 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            placeholder="nome da refeição" 
        />
        <p> </p>
        <input 
            type="text" 
            onChange={(e) => setDesc(e.target.value)} 
            value={desc}
            placeholder="descrição da refeição" 
        />
        <p> </p>
        <input 
            type="text" 
            onChange={(e) => setPrice(e.target.value)} 
            value={price}
            placeholder="preço da refeição" 
        />
        <p> </p>
        <button>buscar</button>
      </div>

      <div><p>  </p></div>

      <div>
      <center>
      <table>
        <tr>
          <th>Refeições</th>
        </tr>
        <tr>
          <td>Comida 1</td>
          <td>Descrição</td>
          <td>Preço</td>
          <td><button>editar</button></td>
        </tr>
        <tr>
          <td>Comida 2</td>
          <td>Descrição</td>
          <td>Preço</td>
          <td><button>editar</button></td>
        </tr>
      </table>
      </center>
      </div>
      
    </div>
  );
}

export default RestaurantPage;
