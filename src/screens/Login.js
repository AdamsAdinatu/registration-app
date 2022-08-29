import React, {useContext,useEffect, useState}from 'react'
import{link, useNavigate } from 'react-router-dom'



function Login() {
    const navigate =useNavigate();
    const {success, loading, user} =useContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (success) {
        navigate("/")    
        }
    },[success])



  return (
    <form className='form'>
      <div>
      
      <div className='form-group'>
      <label htmlFor="email">email</label>
         <input type="email" className='form-control' 
             placeholder='example@gmail.com' value={email}/>
      
      </div>
      <div className='form-group'>
      <label htmlFor="password">password</label>
         <input type="password" className='form-control' 
             placeholder='enter a vaild password' value={password}/>
      
      </div>
      <button type="submit">

      </button>
      <div className='row'>
        I dont have an account
        <link to="/register">Register
        </link>
      </div>
      </div>
    </form>
  )
}

export default Login;
