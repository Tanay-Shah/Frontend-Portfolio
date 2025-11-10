import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'

function App() {

  return (
    <div>
        <Header/>
        <div className='app'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
