import React from 'react'
import './App.css'
import LandingPage from './suby/pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ProductMenu from './suby/components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/products/:firmId/:firmName' element={<ProductMenu/>} />
      </Routes>
    </div>
  )
}

export default App
