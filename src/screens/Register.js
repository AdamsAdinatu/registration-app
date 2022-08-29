import React, {useContext,useEffect, useState}from 'react'
import{link, useNavigate } from 'react-router-dom'



function Register() {
    const navigate =useNavigate();
    const {success, loading, user} =useContext();
    const [ username, setUsename] =useState("");
    const [email, setEmail] = username("");
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
      <label htmlFor="username">username</label>
         <input type="text" className='form-control' 
             placeholder='enter a username' value={username}/>
      
      </div>
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
        I already have an account
        <link to="/login"> 
        Login to your account
        </link>
      </div>
      </div>
    </form>
  )
}

export default Register
