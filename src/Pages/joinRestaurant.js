import { useState, useEffect, useRef } from "react";

function JoinPage() {

  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <div><h1>JOIN PAGE</h1></div>
      <div>
        <input 
            type="text" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            placeholder="nome do restaurante" 
        />
        <span> </span>
        <button>buscar</button>
      </div>

      <div><p>  </p></div>

      <div>
      <center>
      <table>
        <tr>
          <th>Restaurantes</th>
        </tr>
        <tr>
          <td>Comida do Tio Patinhas</td>
          <td><button>solicitar</button></td>
        </tr>
        <tr>
          <td>Santa Mortadela</td>
          <td><button>solicitar</button></td>
        </tr>
      </table>
      </center>
      </div>
      
    </div>
  );
}

export default JoinPage;
