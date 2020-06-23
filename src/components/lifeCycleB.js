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
