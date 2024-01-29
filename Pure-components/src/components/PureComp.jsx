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
        {console.log('this is Pure component')}
        {this.state.count}
        <button onClick={this.incre}>Increment</button>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    )
  }
}
