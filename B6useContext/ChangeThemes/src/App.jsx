import { useState } from 'react'
import './App.css'



// 1initReducer
const initReducer = {
  job:'',
  jobs:[]
}
// 2Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload =>{
  return{
    type: SET_JOB,
    payload
  }
}
const addJob = payload =>{
  return{
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload =>{
  return{
    type: DELETE_JOB,
    payload
  }
}
// 3Reducer 
// 4dispatch

function App() {
  

  return (
    <div className='App'>
      <h1>Hello Duy Cuong</h1>
    </div>
    
  )
}

export default App
