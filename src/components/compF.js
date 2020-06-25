import React,{Component} from 'react';
import {UserConsumer} from './userContext';

class CompF extends Component {
  render(){
    return(
      <div>
        <UserConsumer>
            {
              (name)=>{
                return <h1>Hello {name} from Component F</h1>
              }
            }
        </UserConsumer>
        <p>Are other parts still working</p>
      </div>
    )
  }
}
export default CompF
