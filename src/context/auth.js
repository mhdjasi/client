import React, { useState,useEffect, useContext, createContext } from "react";
import axios from "axios";


const AuthContext = React.createContext();


// custom hook
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [auth, setAuth] = useState({ user: null, token: "" })

//default axios
axios.defaults.headers.common['Authorization'] = auth?.token


  useEffect(() => {
  const data = localStorage.getItem('auth')
  if(data){
    const parseData = JSON.parse(data);
    setAuth({
      ...auth,
      user: parseData.user,
      token:parseData.token,
    });
  }
  //eslint-disable-next-line
}, []);


  return (
    <AuthContext.Provider value={[auth,setAuth]}>{props.children}</AuthContext.Provider>
  );
}
