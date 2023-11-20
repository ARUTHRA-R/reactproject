import React, { Component } from 'react'

export default class Stateclass extends Component {
 state={
    count: 0,
    in:0,

 };
 handleIncrement=()=>{
    this.setState({count: this.state.count+1});
 }
 handleincrement=()=>{
    this.setState({in: this.state.in+1});
 }
 render(){
    return(
        <div>
            <p>Increment:{this.state.count}</p>
            <button onClick={this.handleIncrement}>Increment</button>
            <p>count:{this.state.in}</p>
            <button onMouseOver={this.handleincrement}>Touch</button>
        </div>
    )
    
 }
}
