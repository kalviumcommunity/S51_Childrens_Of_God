import React from 'react'
import './App.css'
import OrphanageList from "./Components/fewdtobe"
import Form from "./Components/Form"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './Components/Update'
import LoginNow from './Components/Login'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<OrphanageList />}></Route>
        <Route path='/Form' element={<Form />}></Route>
        <Route path='/Update' element={<Update />}></Route>
        <Route path='/Login' element={<LoginNow />}></Route>
      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
