import React,{Component} from 'react';

class InputRef extends Component {
  constructor() {
    super()
    this.inputRef= React.createRef()
  }

  focusHandler(){
    this.inputRef.current.focus()
  }

  render(){
    return(
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}
export default InputRef;
