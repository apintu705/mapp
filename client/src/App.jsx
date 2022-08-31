
import './App.css';
import { Login } from './components/account/Login';
import { Home } from './components/home/Home';
import {Provider, useSelector}from "react-redux"
import {BrowserRouter,Routes,Route,Outlet,Navigate} from "react-router-dom"
import { Header } from './components/header/Header';
import { useState } from 'react';
import { Createpost } from './components/create/Createpost';
import store from "./redux/store"

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
    <Provider store={store}>
      
      <div style={{marginTop: '64px'}}>
        <Routes>
            <Route path="/login" element={<Login setisAuth={setisAuth} />}/>
            <Route path="/" element={<Privateroute isauth={isauth} />}>
              <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="/create" element={<Privateroute isauth={isauth} />}>
              <Route path="/create" element={<Createpost/>}/>
            </Route>

        </Routes>
        
        
      </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
