import React, {Component,PureComponent} from 'react';
import Purecomp from './pureComp';
import Regcomp from './regComp';
import Memo from "./memoComp";

class Parent extends PureComponent{
  constructor(){
    super()
    this.state={
      name:'Yhomi'
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:'Yhomi'
      })
    },2000)
  }
  render(){
    console.log('*********Parent Component render*********');
    return(
        <div>
          <p>Parent Component</p>
          <Memo name={this.state.name} />
          {/*<Purecomp name={this.state.name} />
          <Regcomp name={this.state.name} />*/}
        </div>
    )
  }
}
export default Parent
