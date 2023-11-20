import React from "react";

function Ex1(){
return(
    <div>
    <input type="text"></input>
    <h1>Hi Rithuu</h1>
    <h2>I love u</h2>
    </div>

);
}
export default function nested(){
    return(
        <div>
            <Ex1 />
        </div>
    )
}