import React from 'react'
import './App.css'
import Dummy from './Components/Dummy'
import OrphanageList from "./Components/fewdtobe"
import Form from "./Components/Form"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<OrphanageList />}></Route>
        <Route path='/Form' element={<Form />}></Route>
      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
