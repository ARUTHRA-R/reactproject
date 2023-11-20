import React, { Component } from 'react'

export default class Count extends Component {
    state={
        count: 0,
    
     };
     handleIncrement=()=>{
        this.setState({count: this.state.count+1});
     }
     handleincrement=()=>{
        this.setState({count: this.state.count-1});
     }
  render() {
    return (
      <div>
            <button onClick={this.handleIncrement}>Increment</button>
            
            <button onClick={this.handleincrement}>Decrement</button>
        <p>Count:{this.state.count}</p>
      </div>
    )
  }
}

       


