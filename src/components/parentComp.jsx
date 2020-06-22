import React, {Component} from 'react';
import Child from "./childComp"

class ParentComp extends Component{
    constructor(){
        super()
        this.state={
            greet:'Yosaku'
        }
        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(child){
        console.log(`Hello ${this.state.greet} from ${child}`)
    }
    render(){
        return(
            <div>
                <Child  click={this.greetParent} />
            </div>
        )
    }
}

export default ParentComp