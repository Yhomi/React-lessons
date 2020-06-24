import React,{Component} from 'react';

class Ref extends Component{
  constructor(){
    super()
    this.inputRef = React.createRef()
    // Callback ref old method
    this.cbRef = null
    this.setCbRef = (element)=>{
      this.cbRef=element
    }
  }
  componentDidMount(){
    // this.inputRef.current.focus()
    // console.log(this.inputRef);

    //Method2 call back ref
    if(this.cbRef){
      this.cbRef.focus()
    }
  }
  clickHandler = ()=>{
    alert(this.inputRef.current.value)
  }
  render(){
    return(
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
export default Ref
