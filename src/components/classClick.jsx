import React, {Component} from 'react';

class Click extends Component {
    clickHandler(){
        console.log('button class was clicked')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click class</button>
            </div>
        )
    }
}

export default Click;