import { createContext, useState } from 'react';
import React from 'react';

const AuthContext = createContext();
 const AuthProvider = AuthContext.Provider;

function AuthContextProvider() {

    const [success, setsuccess] =useState("false");
    const [error, setError] =useState("null");
    const [loading, setLoading] =useState("false");
    const [user, setUser] =useState("null");


    //signup function
    const authRegister= async (username, email, password)=>{
      setLoading(true);
     await fetch("/api/users/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
     })
     .them((res) => res.json())
     .them((data) => {
      console.log(data);
      setsuccess(true);
      setUser(data);
     })
     .catch((err) => {
      console.log(err);
      setError(err);
     });
     setLoading(false);

    };
  return(
    <div>
    </div>
  )
}

export default AuthContextProvider
