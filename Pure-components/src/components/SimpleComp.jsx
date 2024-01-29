import React, { Component } from 'react'

export default class SimpleComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       toggle: false
    }
  }
  toggle =()=>{
    this.setState({
      toggle: !this.state.toggle 
    })
  }
  incre=()=>{
    if(this.state.toggle){
      this.setState({
        count: this.state.count + 1
      })
    }
  }
 
  render() {
    return (
      <div>
        {console.log('this is simple component')}
        {this.state.count}
        <button onClick={this.incre}>Increment</button>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}