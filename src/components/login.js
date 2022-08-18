import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import axios from "../api/axios";
import '../styles/login.css'; 
const LOGIN_URL = 'api/auth/login';


export default function Login({setToken}) {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post(LOGIN_URL, { email: email, password: password });
      setToken(response.data);
    }catch(err){
      setErrMsg(err);
      errRef.current.focus();
    }
  } 

  return (
    <div className="login-wrapper">
      <div><h1>LOGIN</h1></div>
      <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{ errMsg }</p>
      <div>
        <form onSubmit={handleSubmit}>
          <span>email: </span>
          <input 
            type="email" 
            id="email" 
            ref={emailRef} 
            autoComplete="off" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            required 
          /> 
          
          <br/>
          <br/>
          <span>senha: </span>
          <input 
            type="password" 
            id="password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            required 
          />
         
          <span/> <button type="submit">enviar</button>
        </form>
      </div>
      <div>
        <br/>
        <a href="#">crie uma conta</a> <br/>
        <a href="#">esqueci minha senha</a>
      </div>
    </div>
  );
  
  
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
