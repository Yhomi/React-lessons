import React,{Component} from 'react';
import CycleB from "./lifeCycleB";

class CycleA extends Component{
  constructor(){
    super()
    this.state={
      name:'Yhomi'
    }
    console.log('LifeCycle A constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifeCycle A getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('LifeCycle A componentDidMount');
  }
  render(){
    console.log('LifeCycle A render')
    return(
      <div>
        <p>LifeCycle A </p>
        <CycleB />
      </div>
    )
  }
}
export default CycleA
