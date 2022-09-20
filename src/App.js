import './assets/scss/style.scss';
import Layout from "./components/layouts/Layout";
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';  
import { useContext, useState } from 'react';
import { AuthContext } from './context';





function App() {
  const {isAuth, setIsAuth} = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
