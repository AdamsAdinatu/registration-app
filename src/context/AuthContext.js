import { createContext, useState } from 'react';
import React from 'react';

const AuthContext = createContext();
AuthContext = AuthContext.Provider;

function AuthContextProvider() {

    const [success, setsuccess] =useState("false");
    const [error, setError] =useState("null");
    const [loading, setLoading] =useState("false");
    const [userr, setUser] =useState("null");


    //signup function
    const authRegister= async (username, email, password)=>{
     await fetch(URL,{
      method:"POST"
     })
    }
  return (
    <div>
      
    </div>
  )
}

export default AuthContextProvider
