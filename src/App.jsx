import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from "./User/Register";
import Login from "./User/Login";
import Dashboard from './User/Dashboard';
export default function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Dash" element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}
