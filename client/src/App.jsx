
import './App.css';
import { Login } from './components/account/Login';
import { Home } from './components/home/Home';
import DataProvider from './context/Dataprovider';
import {BrowserRouter,Routes,Route,Outlet,Navigate} from "react-router-dom"
import { Header } from './components/header/Header';
import { useState } from 'react';

const Privateroute=({isauth,...props})=>{

  return isauth?<>
  <Header/>
  <Outlet/>
  </>:
  <Navigate replace to="/login"/>
}

function App() {

  const [isauth,setisAuth] =useState(false)

  return (
    <BrowserRouter>
    <DataProvider>
      
      <div style={{marginTop: '64px'}}>
        <Routes>
            <Route path="/login" element={<Login setisAuth={setisAuth} />}/>
            <Route path="/" element={<Privateroute isauth={isauth} />}>
              <Route path="/" element={<Home/>}/>
            </Route>
            

        </Routes>
        
        
      </div>
    </DataProvider>
    </BrowserRouter>
  );
}

export default App;
