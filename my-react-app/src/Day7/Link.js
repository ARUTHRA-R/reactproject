
import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom'
import React from 'react' 

import Happy from './Day7/Happy'
import Sad from './Day7/Sad'

export default function App() {
    const navigate=useNavigate();
    const happy=()=>{navigate("/")}
    const sad=()=>{navigate("?")}
  return (
    <div >
   <ul>
    <li onClick={happy}>Happy</li>
    <li onClick={sad}>Sad</li>
   </ul>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Happy</Link></li>
          <li>
          <Link to="?">Sad</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Happy />}></Route>
        <Route path="?" element={<Sad />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
