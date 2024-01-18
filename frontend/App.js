import React from "react";
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import { Home } from "./Home";
import {Teacher} from "./Teacher"
import {Coordinator} from "./Coordinator"




function App (){ 
    return(
        <div>
        <BrowserRouter>
        <Routes>
          <Route path='/teacher' element={<Teacher />}></Route>
          <Route path='/coursecoordinator' element={<Coordinator />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
} 
export default App 