import React,{useState} from 'react'

export default function Stateinfunction() {
  const[college,setCollege]=useState("SKCET");
  
  return (
    <div>
      <h1>My College name is {college}</h1>
      <input type="text" onChange={()=>setCollege("KanyaKumari")}></input><br></br>
      <button onClick={()=>setCollege("Anna University")}>Change here</button>
</div>
)
}