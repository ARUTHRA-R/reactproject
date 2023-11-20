import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Navigate() {
    const navigate=useNavigate();
const happy=()=>{navigate("/")}
const sad=()=>{navigate("?")}
  return (
    <div>
      <ul>
    <li onClick={happy}>Happy</li>
    <li onClick={sad}>Sad</li>
   </ul>
    </div>
  )
}
