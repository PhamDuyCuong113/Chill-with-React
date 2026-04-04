import { useState } from 'react'
import {Routes, Route, Link}from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import News from './pages/News'

function App() {


  return (
    <div className='App'>
      <nav style={{margin:10}}>
        
            <Link to="/" style={{padding:5}}>Home</Link>
      
            <Link to="/about" style={{padding:5}}>About me</Link>
          
            <Link to="/news"style={{padding:5}}>News</Link>
          
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
