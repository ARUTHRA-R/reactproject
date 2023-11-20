import { BrowserRouter,Routes,Route,Link, useNavigate, Navigate } from 'react-router-dom'
import React from 'react' 
import Happy from './Day7/Happy'
import Sad from './Day7/Sad'
export default function App() {
  return(
    <div>
      <BrowserRouter>
     <Navigate />
      <Routes>
        <Route path="/" element={<Happy />}></Route>
        <Route path="?" element={<Sad />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}