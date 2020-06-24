import React,{Component} from 'react';

class CycleB extends Component{
  constructor(){
    super()
    this.state={
      name:'Yhomi'
    }
    console.log('LifeCycle B constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifeCycle B getDerivedStateFromProps')
    return null
  }
  componentDidMount(){
    console.log('LifeCycle B componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('LifeCycle B shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifeCycle B getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifeCycle B componentDidUpdate')
  }
  render(){
    console.log('LifeCycle B render')
    return(
      <div>
        <p>LifeCycle B </p>
      </div>
    )
  }
}
export default CycleB
