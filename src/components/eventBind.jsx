import React,{Component} from 'react';

class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello World'
        }
        // Method 3 binding
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye World!"
    //     })
    //     console.log(this)
    // }
    
    // Method 4 Binding
    clickHandler = ()=>{
        this.setState({
            message:"Goodbye World!"
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                {/* Binding Event handler */}
                {/* Method 1
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Method 2 */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

                {/* Method 3 : Binding to the constructor */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* Method 4: change the method to arrow function */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default EventBind