import React,{Component} from 'react';
import CompF from './compF';
import UserContext from "./userContext";

class CompE extends Component {
  static contextType=UserContext
  render(){
    return(
        <div>
          <h3>Context Type from Component E {this.context}</h3>
          <CompF />
        </div>
    )
  }
}
// CompE.contextType=UserContext
export default CompE
