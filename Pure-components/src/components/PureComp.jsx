import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
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
        <h1>Pure Component</h1>
        {console.log('this is Pure component')}
        <p>{this.state.count}</p>
        <button onClick={this.incre}>Increment</button>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
