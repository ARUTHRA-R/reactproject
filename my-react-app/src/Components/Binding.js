import React, { Component } from 'react'

export default class Binding extends Component {
  state={
    name:"there"
  }
  getname=(event)=>{
    this.setState({name:event.target.value})
  }
  render(){
    return(
        <div>
            <input type="text" value={this.state.name} onChange={this.getname}>
            </input>
                <h1>Hi {this.state.name}</h1>
        </div>
    )
  }
}
