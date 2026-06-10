import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Pricing from './Pages/Pricing'
import Dashboard from './Pages/Dashboard'
import Generate from './Pages/Generate'
import WebsiteEditor from './Pages/WebsiteEditor'
import LiveSite from './Pages/LiveSite'

const App = () => {
  return (
  <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/generate' element={<Generate/>}/>
      <Route path='/editor/:id' element={<WebsiteEditor/>}/>
      <Route path='/site/:id' element={<LiveSite/>}/>
   </Routes>
  </BrowserRouter>
  )
}

export default App