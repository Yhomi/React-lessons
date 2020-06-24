import React,{Component} from 'react';
import InputRef from "./refclass";

class ParentRef extends Component {
  constructor() {
    super()
    this.parentRef = React.createRef()
  }
  clickHandler = ()=>{
    console.log('click');
    this.parentRef.current.focusHandler()

  }
  render(){
    return(
      <div>
        <InputRef ref={this.parentRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
export default ParentRef
