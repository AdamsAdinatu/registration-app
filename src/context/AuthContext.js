import { createContext, useState } from 'react';
import React from 'react';

const authContext = createContext();
authContext = authContext.Provider;

function AuthContext() {

    const [success, setsuccess] =useState("false");
    const [error, setError] =useState("null");
    const [loading, setLoading] =useState("false");
    const [userr, setUser] =useState("null");
  return (
    <div>
      
    </div>
  )
}

export default AuthContext
