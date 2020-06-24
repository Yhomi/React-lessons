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
  shouldComponentUpdate(){
    console.log('LifeCycle A shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifeCycle A getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifeCycle A componentDidUpdate')
    
  }
  clickHandler =()=>{
    this.setState({
      name:'Ace'
    })
  }
  render(){
    console.log('LifeCycle A render')
    return(
      <div>
        <p>LifeCycle A </p>
        <button onClick={this.clickHandler}>Change State</button>
        <CycleB />
      </div>
    )
  }
}
export default CycleA
