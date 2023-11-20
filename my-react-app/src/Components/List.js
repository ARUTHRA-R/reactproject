import React from 'react'
 function List(props) {
  return (
    <div>
      My friends are {props.name}
    </div>
  )
}
export default function Li(){
    const list=["asha","kumaresan","Robert"];
    return (
        <div>{Li.map((item)=><List name={item}></List>)}</div>
    )
}
