import React from 'react'
import './App.css';
import Card from './Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Help from './component/Help';
import About from './component/About';
import Sign_in from './component/Sign_in';
import Navbar from './Navbar';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign_up" element={<Sign_in />} />
        </Routes>
      </React.Fragment>
      </BrowserRouter>
    </div>
  )
}
